/* ==========================================================================
   Risk engine — computes risk flags purely from Active Projects fields
   (dates + status). This replaces the old Recruitment/Training/Workplace
   Risk Tracker sheets, which no longer exist in the workbook.

   IMPORTANT HONESTY NOTE: there is no recruitment-specific data left in
   Active Projects (no recruiter, no recruitment dates) — so a genuine
   "Recruitment Risk" can't be computed here. What's below is Training
   Delay, Workplace Transition, and Data Completeness risk — all derived
   from real fields, with the rule stated next to every flag so nothing
   here pretends to be a manual risk assessment.
   ========================================================================== */

const RiskEngine = (() => {

  function daysSince(date) {
    if (!date) return null;
    return Utils.daysBetween(new Date(date), new Date());
  }

  function assess(project) {
    const flags = [];
    const status = Utils.normKey(project.status);
    const isClosed = status === 'closed';

    if (!isClosed) {
      // Training Delay Risk
      const startLag = daysSince(project.programmeStart);
      const trainingStatus = Utils.normKey(project.classTrainingStatus);
      const notStarted = trainingStatus === 'not started' || trainingStatus === 'not recorded' || trainingStatus === '';
      if (startLag !== null && startLag > 0 && notStarted) {
        flags.push({
          area: 'Training Delay',
          classification: startLag > 14 ? 'High' : 'Medium',
          reason: `Programme Start Date was ${startLag} day(s) ago but Class Training Status still shows "${project.classTrainingStatus}".`,
        });
      }
      const endLag = daysSince(project.programmeEnd);
      if (endLag !== null && endLag > 0 && trainingStatus !== 'completed') {
        flags.push({
          area: 'Training Overrun',
          classification: 'High',
          reason: `Programme End Date passed ${endLag} day(s) ago but training is not marked Completed.`,
        });
      }

      // Workplace Transition Risk
      const wpLag = daysSince(project.workplaceStart);
      if (wpLag !== null && wpLag > 0 && status !== 'workplace') {
        flags.push({
          area: 'Workplace Transition',
          classification: wpLag > 30 ? 'High' : 'Medium',
          reason: `Workplace Start Date was ${wpLag} day(s) ago but the project hasn't moved to Workplace status.`,
        });
      }
      if (trainingStatus === 'completed' && !project.workplaceStart) {
        flags.push({
          area: 'Workplace Transition',
          classification: 'Medium',
          reason: `Training is Completed but no Workplace Start Date has been set.`,
        });
      }
    }

    // Data Completeness Risk (relevant regardless of status)
    const missing = [];
    if (!project.coordinator || project.coordinator === '—') missing.push('Workplace Coordinator');
    if (!project.facilitator || project.facilitator === '—') missing.push('Facilitator');
    if (!project.assessor || project.assessor === '—') missing.push('Assessor');
    if (/^PL9\d\d$/i.test(project.pl)) missing.push('a placeholder PL# instead of a real project number');
    if (missing.length) {
      flags.push({
        area: 'Data Completeness',
        classification: missing.length > 1 ? 'Medium' : 'Low',
        reason: `Missing or placeholder: ${missing.join(', ')}.`,
      });
    }

    return flags;
  }

  function assessAll(projects) {
    const rows = [];
    projects.forEach(p => {
      assess(p).forEach(flag => rows.push({ ...flag, pl: p.pl, client: p.client, programme: p.programme }));
    });
    return rows;
  }

  function summaryByArea(rows) {
    const areas = ['Training Delay', 'Training Overrun', 'Workplace Transition', 'Data Completeness'];
    return areas.map(area => {
      const items = rows.filter(r => r.area === area);
      return {
        area,
        open: items.length,
        high: items.filter(r => r.classification === 'High').length,
        medium: items.filter(r => r.classification === 'Medium').length,
      };
    }).filter(s => s.open > 0 || true); // keep all four areas visible even at zero, for a stable layout
  }

  return { assess, assessAll, summaryByArea };
})();
