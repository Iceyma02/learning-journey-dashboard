/* ==========================================================================
   Service Delivery — Pages 1, 2, 3
   Single source: the "Active Projects" sheet. Everything else on these
   three pages (RAG status, risk flags, key findings) is computed live
   from it — there's no separate Risk Tracker sheet to read anymore.
   ========================================================================== */

const ServiceDelivery = (() => {
  let charts = {};
  let projectRows = [];
  let riskRows = [];

  const STAGES = ['Training', 'Workplace', 'Complete'];

  function stageIndex(statusRaw) {
    const s = Utils.normKey(statusRaw);
    if (s === 'closed') return 2;
    if (s === 'workplace') return 1;
    return 0;
  }

  function miniRail(statusRaw) {
    const idx = stageIndex(statusRaw);
    let html = '<div class="mini-rail">';
    STAGES.forEach((label, i) => {
      const done = i < idx;
      const current = i === idx;
      html += `<div class="dot ${done ? 'done' : ''} ${current ? 'current' : ''}" title="${label}"></div>`;
      if (i < STAGES.length - 1) html += `<div class="bar ${i < idx ? 'done' : ''}"></div>`;
    });
    html += '</div>';
    return html;
  }

  function projectRag(pl) {
    const flags = riskRows.filter(r => r.pl === pl);
    if (flags.some(f => f.classification === 'High')) return 'red';
    if (flags.some(f => f.classification === 'Medium')) return 'amber';
    return 'green';
  }

  function normaliseProjects(rows) {
    return rows
      .map(row => ({
        pl: Utils.clean(Utils.field(row, 'PL#')),
        programmeType: Utils.clean(Utils.field(row, 'Programme Type')) || 'Unspecified',
        client: Utils.clean(Utils.field(row, 'Client')) || 'Unnamed client',
        programme: Utils.clean(Utils.field(row, 'Programme')),
        learners: Utils.asNumber(Utils.field(row, '# of Learners', 'Learners')),
        classTrainingStatus: Utils.clean(Utils.field(row, 'Class Training Status')) || 'Not recorded',
        workplaceStart: Utils.asDate(Utils.field(row, 'Workplace Start Date')),
        programmeStart: Utils.asDate(Utils.field(row, 'Programme Start Date')),
        programmeEnd: Utils.asDate(Utils.field(row, 'Programme End Date')),
        coordinator: Utils.clean(Utils.field(row, 'Workplace Coordinator')) || '—',
        facilitator: Utils.clean(Utils.field(row, 'Facilitator')) || '—',
        assessor: Utils.clean(Utils.field(row, 'Assessor')) || '—',
        moderator: Utils.clean(Utils.field(row, 'Moderator')) || '—',
        status: Utils.clean(Utils.field(row, 'Status')),
      }))
      .filter(p => p.pl);
  }

  function render(workbook) {
    const activeRaw = Utils.sheetToRowsAutoHeader(workbook, 'Active Projects',
      ['pl#', 'programme type', 'client', 'programme', 'status']);

    projectRows = normaliseProjects(activeRaw);
    riskRows = RiskEngine.assessAll(projectRows);

    const active = projectRows.filter(p => Utils.normKey(p.status) !== 'closed');
    const totalLearners = Utils.sum(active, p => p.learners);
    const inTraining = active.filter(p => stageIndex(p.status) === 0).length;
    const inWorkplace = active.filter(p => stageIndex(p.status) === 1).length;

    const ragCounts = { red: 0, amber: 0, green: 0 };
    active.forEach(p => { ragCounts[projectRag(p.pl)]++; });

    const areaSummary = RiskEngine.summaryByArea(riskRows);
    const openItems = riskRows.length;
    const highItems = riskRows.filter(r => r.classification === 'High').length;

    renderKpis({ totalActive: active.length, totalLearners, inTraining, inWorkplace, openItems, highItems });
    renderRagStrip(ragCounts, active.length);
    renderKeyFindings({ active, totalLearners, ragCounts, areaSummary });
    renderProgrammeChart(active);
    renderTrainingStatusChart(active);
    renderRiskStrip(areaSummary);
    renderProjectsTable(projectRows);
    renderRiskTable(riskRows);

    document.querySelectorAll('.needs-data').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.data-content').forEach(el => el.style.display = 'block');
  }

  function renderKpis(k) {
    document.getElementById('sd-kpis').innerHTML = `
      <div class="kpi-card">
        <div class="kpi-label">Total Active Projects</div>
        <div class="kpi-value">${k.totalActive}</div>
        <div class="kpi-sub">excludes Closed</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">Total Learners Managed</div>
        <div class="kpi-value">${k.totalLearners.toLocaleString()}</div>
        <div class="kpi-sub">across active projects</div>
      </div>
      <div class="kpi-card tone-amber">
        <div class="kpi-label">In Training</div>
        <div class="kpi-value">${k.inTraining}</div>
        <div class="kpi-sub">projects</div>
      </div>
      <div class="kpi-card tone-amber">
        <div class="kpi-label">In Workplace</div>
        <div class="kpi-value">${k.inWorkplace}</div>
        <div class="kpi-sub">projects</div>
      </div>
      <div class="kpi-card tone-grey">
        <div class="kpi-label">Open Risk Flags</div>
        <div class="kpi-value">${k.openItems}</div>
        <div class="kpi-sub">computed from dates &amp; status</div>
      </div>
      <div class="kpi-card tone-red">
        <div class="kpi-label">High-Risk Flags</div>
        <div class="kpi-value">${k.highItems}</div>
        <div class="kpi-sub">need escalation</div>
      </div>
    `;
  }

  function renderRagStrip(rag, total) {
    const pct = n => total ? Math.round((n / total) * 100) : 0;
    document.getElementById('sd-rag-strip').innerHTML = `
      <div class="rag-chip rag-green"><span class="dot"></span> ${rag.green} Green <span class="pct">${pct(rag.green)}%</span></div>
      <div class="rag-chip rag-amber"><span class="dot"></span> ${rag.amber} Amber <span class="pct">${pct(rag.amber)}%</span></div>
      <div class="rag-chip rag-red"><span class="dot"></span> ${rag.red} Red <span class="pct">${pct(rag.red)}%</span></div>
    `;
  }

  function renderKeyFindings({ active, totalLearners, ragCounts, areaSummary }) {
    const types = [...new Set(active.map(p => p.programmeType))];
    const worstArea = [...areaSummary].sort((a, b) => b.high - a.high)[0];
    const bits = [];
    bits.push(`${active.length} active projects are currently managing ${totalLearners.toLocaleString()} learners across ${types.length} programme type${types.length === 1 ? '' : 's'} (${types.join(', ')}).`);
    if (ragCounts.red > 0) {
      bits.push(`${ragCounts.red} project${ragCounts.red === 1 ? ' is' : 's are'} flagged Red and need${ragCounts.red === 1 ? 's' : ''} escalation this week.`);
    } else {
      bits.push(`No projects are currently flagged Red on the computed risk view.`);
    }
    if (worstArea && worstArea.high > 0) {
      bits.push(`${worstArea.area} is the area carrying the most high-risk flags (${worstArea.high}).`);
    }
    bits.push(`Risk flags on this page are computed from project dates and status fields — recruitment-specific risk isn't shown, since that data isn't part of this sheet.`);
    document.getElementById('sd-findings').innerHTML = bits.map(b => `<p>${b}</p>`).join('');
  }

  function renderProgrammeChart(active) {
    const byType = Utils.groupBy(active, p => p.programmeType);
    const labels = [...byType.keys()];
    const counts = labels.map(l => byType.get(l).length);
    const learners = labels.map(l => Utils.sum(byType.get(l), p => p.learners));

    const ctx = document.getElementById('sd-programme-chart');
    if (charts.programme) charts.programme.destroy();
    charts.programme = new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          { label: 'Projects', data: counts, backgroundColor: '#0E7C7B', borderRadius: 4, maxBarThickness: 26 },
          { label: 'Learners', data: learners, backgroundColor: '#B4780F', borderRadius: 4, maxBarThickness: 26 },
        ],
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, font: { size: 11 } } } },
        scales: { y: { beginAtZero: true, grid: { color: '#E9ECF2' } }, x: { grid: { display: false } } },
      },
    });
  }

  function renderTrainingStatusChart(active) {
    const byStatus = Utils.groupBy(active, p => p.classTrainingStatus);
    const labels = [...byStatus.keys()];
    const counts = labels.map(l => byStatus.get(l).length);
    const palette = ['#0E7C7B', '#B4780F', '#C23B3B', '#7A8296', '#2A3C6B', '#58D6C9'];

    const ctx = document.getElementById('sd-status-chart');
    if (charts.status) charts.status.destroy();
    charts.status = new Chart(ctx, {
      type: 'doughnut',
      data: { labels, datasets: [{ data: counts, backgroundColor: palette, borderWidth: 0 }] },
      options: {
        responsive: true, maintainAspectRatio: false, cutout: '62%',
        plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, font: { size: 10.5 } } } },
      },
    });
  }

  function renderRiskStrip(areaSummary) {
    const card = (s) => `
      <div class="risk-card">
        <div class="risk-card-head">
          <span>${s.area}</span>
          ${s.high > 0 ? Utils.pill(s.high + ' high', 'red') : Utils.pill('stable', 'green')}
        </div>
        <div class="risk-row"><span class="label">Open flags</span><span class="value">${s.open}</span></div>
        <div class="risk-row"><span class="label">High</span><span class="value">${s.high}</span></div>
        <div class="risk-row"><span class="label">Medium</span><span class="value">${s.medium}</span></div>
      </div>`;
    document.getElementById('sd-risk-strip').innerHTML = areaSummary.map(card).join('');
  }

  function renderProjectsTable(rows) {
    const container = document.getElementById('sd-table');
    const columns = [
      { key: 'pl', label: 'PL#' },
      { key: 'client', label: 'Client' },
      { key: 'programme', label: 'Programme' },
      { key: 'programmeType', label: 'Type' },
      { key: 'learners', label: 'Learners' },
      { key: 'classTrainingStatus', label: 'Training Status' },
      { key: 'stage', label: 'Journey', sortVal: r => stageIndex(r.status), render: r => miniRail(r.status) },
      { key: 'coordinator', label: 'Coordinator' },
      { key: 'rag', label: 'RAG', sortVal: r => projectRag(r.pl), render: r => Utils.pill(projectRag(r.pl).toUpperCase(), projectRag(r.pl)) },
      { key: 'status', label: 'Status', render: r => Utils.chip(r.status || 'Training', Utils.statusTone(r.status)) },
    ];

    function applyFilters() {
      const q = Utils.normKey(document.getElementById('sd-search').value);
      const statusFilter = document.getElementById('sd-filter-status').value;
      const typeFilter = document.getElementById('sd-filter-type').value;
      const filtered = rows.filter(r => {
        if (statusFilter && Utils.normKey(r.status || 'training') !== statusFilter) return false;
        if (typeFilter && r.programmeType !== typeFilter) return false;
        if (!q) return true;
        return [r.pl, r.client, r.programme, r.coordinator].some(v => Utils.normKey(v).includes(q));
      });
      Utils.buildTable(container, columns, filtered, { emptyText: 'No projects match those filters.' });
    }

    const typeSelect = document.getElementById('sd-filter-type');
    typeSelect.innerHTML = '<option value="">All programme types</option>' +
      [...new Set(rows.map(r => r.programmeType))].sort().map(t => `<option>${Utils.escapeHtml(t)}</option>`).join('');

    document.getElementById('sd-search').oninput = applyFilters;
    document.getElementById('sd-filter-status').onchange = applyFilters;
    document.getElementById('sd-filter-type').onchange = applyFilters;
    applyFilters();
  }

  function renderRiskTable(rows) {
    const container = document.getElementById('sd-risk-table');
    const columns = [
      { key: 'area', label: 'Risk Area', render: r => Utils.chip(r.area, r.classification === 'High' ? 'red' : r.classification === 'Medium' ? 'amber' : 'grey') },
      { key: 'pl', label: 'PL#' },
      { key: 'client', label: 'Client' },
      { key: 'programme', label: 'Programme' },
      { key: 'reason', label: 'Why it is flagged' },
      { key: 'classification', label: 'Classification', render: r => Utils.chip(r.classification, Utils.riskTone(r.classification)) },
    ];

    function applyFilters() {
      const areaFilter = document.getElementById('sd-risk-filter-area').value;
      const classFilter = document.getElementById('sd-risk-filter-class').value;
      const filtered = rows.filter(r => {
        if (areaFilter && r.area !== areaFilter) return false;
        if (classFilter && r.classification !== classFilter) return false;
        return true;
      });
      Utils.buildTable(container, columns, filtered, { emptyText: 'No open risk flags — clean board.' });
    }

    const areaSelect = document.getElementById('sd-risk-filter-area');
    areaSelect.innerHTML = '<option value="">All risk areas</option>' +
      [...new Set(rows.map(r => r.area))].sort().map(a => `<option>${Utils.escapeHtml(a)}</option>`).join('');

    document.getElementById('sd-risk-filter-area').onchange = applyFilters;
    document.getElementById('sd-risk-filter-class').onchange = applyFilters;
    applyFilters();
  }

  return { render };
})();
