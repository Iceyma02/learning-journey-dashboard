/* ==========================================================================
   30-Day Plan tab — "Plan Overview" sub-view.
   Walks through the reviewed strategic plan document section by section:
   purpose, objectives, roadmap, all 10 priorities, weekly review,
   executive dashboard, governance, success measures, core principle.
   Static content, presented — not just dumped as text.
   ========================================================================== */

const PlanPresentation = (() => {

  const SECTIONS = [
    { id: 'purpose', label: 'Purpose' },
    { id: 'objectives', label: 'Strategic Objectives' },
    { id: 'roadmap', label: '30-Day Roadmap' },
    ...PLAN_PRIORITIES.map(p => ({ id: 'p' + p.n, label: `P${p.n} · ${p.title}` })),
    { id: 'weekly-review', label: 'Weekly Management Review' },
    { id: 'exec-dashboard', label: 'Executive Dashboard' },
    { id: 'governance', label: 'Governance Structure' },
    { id: 'success', label: 'Success Measures' },
    { id: 'principle', label: 'Core Management Principle' },
  ];

  function chainHtml(items) {
    return `<div class="chain">${items.map((c, i) =>
      `<span class="chain-step">${Utils.escapeHtml(c)}</span>${i < items.length - 1 ? '<span class="chain-arrow">→</span>' : ''}`
    ).join('')}</div>`;
  }

  function tagCloud(items) {
    return `<div class="tag-cloud">${items.map(c => `<span class="tag">${Utils.escapeHtml(c)}</span>`).join('')}</div>`;
  }

  function kpiList(items) {
    return `<h4>KPIs</h4><ul class="plan-list">${items.map(i => `<li>${Utils.escapeHtml(i)}</li>`).join('')}</ul>`;
  }

  function weightTable(pairs) {
    return `<table class="plan-table"><thead><tr><th>Area</th><th>Weight</th></tr></thead>
      <tbody>${pairs.map(([a, b]) => `<tr><td>${Utils.escapeHtml(a)}</td><td class="mono">${Utils.escapeHtml(b)}</td></tr>`).join('')}</tbody></table>`;
  }

  function priorityHtml(pr) {
    let html = `<h2>Priority ${pr.n}: ${pr.title}</h2><p>${pr.objective}</p>`;

    if (pr.healthDashboard) {
      html += `<h4>${pr.healthDashboard.intro}</h4><div class="rag-legend-static">`;
      html += pr.healthDashboard.legend.map(([tone, label]) =>
        `<span class="legend-dot legend-${tone.toLowerCase()}"></span> <strong>${tone}</strong> — ${label}`).join('&nbsp;&nbsp;&nbsp;');
      html += `</div>`;
    }

    if (pr.trackLabel) html += `<h4>${pr.trackLabel}</h4>${tagCloud(pr.track)}`;

    if (pr.analyseAgainst) html += `<h4>Analyse Feedback Against</h4>${tagCloud(pr.analyseAgainst)}`;

    if (pr.weeklyReview) html += `<h4>${pr.weeklyReview.label}</h4>${tagCloud(pr.weeklyReview.items)}`;

    if (pr.riskCategories) {
      html += `<h4>Learner Risk Categories</h4><div class="risk-cat-grid">`;
      html += pr.riskCategories.map(c => `<div class="risk-cat"><div class="risk-cat-title">${c.label}</div>${tagCloud(c.items)}</div>`).join('');
      html += `</div>`;
    }

    if (pr.levels) {
      html += `<h4>Intervention Levels</h4><div class="level-stack">`;
      html += pr.levels.map(l => `<div class="level-card"><div class="level-title">${l.title}</div>${tagCloud(l.items)}</div>`).join('');
      html += `</div>`;
    }

    if (pr.checklist) {
      html += `<h4>${pr.checklist.intro}</h4><div class="risk-cat-grid">`;
      html += pr.checklist.groups.map(g => `<div class="risk-cat"><div class="risk-cat-title">${g.label}</div>${tagCloud(g.items)}</div>`).join('');
      html += `</div>`;
    }

    if (pr.flow) {
      html += `<h4>${pr.flow.label}</h4>${chainHtml(pr.flow.chain)}`;
    }

    if (pr.example) html += `<p class="example-line"><strong>Example —</strong> ${pr.example}</p>`;

    if (pr.exceptionReport) {
      html += `<h4>${pr.exceptionReport.label}</h4><table class="plan-table"><thead><tr>${pr.exceptionReport.columns.map(c => `<th>${c}</th>`).join('')}</tr></thead>
        <tbody>${pr.exceptionReport.rows.map(r => `<tr><td>${r}</td>${pr.exceptionReport.columns.slice(1).map(() => '<td class="mono">—</td>').join('')}</tr>`).join('')}</tbody></table>
        <p class="table-note">Template shell — populated as exceptions are identified.</p>`;
    }

    if (pr.scorecard) {
      html += `<h4>${pr.scorecard.label}</h4>${weightTable(pr.scorecard.weights)}`;
      if (pr.scorecard.categories) {
        html += `<div class="rag-legend-static">${pr.scorecard.categories.map(([range, label]) => `<span class="tag">${range} — ${label}</span>`).join(' ')}</div>`;
      }
    }

    if (pr.standardise) html += `<h4>Standardise</h4><ol class="plan-list-numbered">${pr.standardise.map(i => `<li>${i}</li>`).join('')}</ol>`;
    if (pr.templates) html += `<h4>Standard Templates to Finalise</h4>${tagCloud(pr.templates)}`;

    if (pr.activities) {
      html += `<h4>Key Activities</h4>`;
      pr.activities.forEach(group => {
        html += `<div class="activity-group"><div class="activity-label">${Utils.escapeHtml(group.label)}</div><ul class="plan-list">${group.items.map(i => `<li>${i}</li>`).join('')}</ul></div>`;
      });
    }

    if (pr.kpis) html += kpiList(pr.kpis);

    return html;
  }

  function sectionHtml(id) {
    if (id === 'purpose') {
      return `
        <h2>${PLAN_META.title}</h2>
        <p class="plan-sub">${PLAN_META.subtitle}</p>
        <p class="plan-sub">${PLAN_META.period} &middot; ${PLAN_META.role} &middot; ${PLAN_META.scope}</p>
        ${PLAN_PURPOSE.paragraphs.map(p => `<p>${p}</p>`).join('')}
        <h4>${PLAN_PURPOSE.ensureIntro}</h4>
        ${tagCloud(PLAN_PURPOSE.ensureList)}
      `;
    }
    if (id === 'objectives') {
      return `<h2>Strategic Objectives</h2><p>During the 30-day period, the department will focus on achieving the following outcomes:</p>
        <ol class="plan-list-numbered">${PLAN_OBJECTIVES.map(o => `<li>${o}</li>`).join('')}</ol>`;
    }
    if (id === 'roadmap') {
      return `
        <h2>30-Day Implementation Roadmap</h2>
        <div class="roadmap-grid">
          ${PLAN_ROADMAP.map(r => `
            <div class="roadmap-card">
              <div class="roadmap-period">${r.period}</div>
              <div class="roadmap-theme">${r.theme}</div>
              <div class="roadmap-focus">${r.focus}</div>
              <div class="roadmap-deliverables"><strong>Deliverables:</strong> ${r.deliverables.join(', ')}</div>
            </div>`).join('')}
        </div>
      `;
    }
    if (id === 'weekly-review') {
      return `
        <h2>Weekly Management Review</h2>
        <p>${PLAN_WEEKLY_REVIEW.intro}</p>
        <div class="risk-cat-grid">
          ${PLAN_WEEKLY_REVIEW.sections.map(s => `<div class="risk-cat"><div class="risk-cat-title">${s.label}</div>${tagCloud(s.items)}</div>`).join('')}
        </div>
      `;
    }
    if (id === 'exec-dashboard') {
      return `
        <h2>Executive Dashboard</h2>
        <p>${PLAN_EXEC_DASHBOARD.intro}</p>
        <table class="plan-table">
          <thead><tr><th>Strategic KPI</th><th>Target</th></tr></thead>
          <tbody>${PLAN_EXEC_DASHBOARD.rows.map(([a, b]) => `<tr><td>${a}</td><td class="mono">${b}</td></tr>`).join('')}</tbody>
        </table>
      `;
    }
    if (id === 'governance') {
      return `
        <h2>Governance Structure</h2>
        <div class="rhythm-grid">
          ${PLAN_GOVERNANCE.map(g => `
            <div class="rhythm-card"><div class="rhythm-day">${g.cadence}</div><div class="roadmap-theme" style="margin-bottom:6px;">${g.label}</div>${tagCloud(g.items)}</div>`).join('')}
        </div>
      `;
    }
    if (id === 'success') {
      return `
        <h2>Success Measures After 30 Days</h2>
        <p>${PLAN_SUCCESS_MEASURES.intro}</p>
        <div class="risk-cat-grid">
          ${PLAN_SUCCESS_MEASURES.items.map(([label, desc]) => `<div class="risk-cat"><div class="risk-cat-title">${label}</div><p style="margin:0;font-size:12.5px;">${desc}</p></div>`).join('')}
        </div>
      `;
    }
    if (id === 'principle') {
      return `
        <h2>Core Management Principle</h2>
        <p>The 30-day plan should operate according to one simple principle:</p>
        ${chainHtml(PLAN_CORE_PRINCIPLE.chain)}
        <p style="margin-top:18px;">${PLAN_CORE_PRINCIPLE.closing}</p>
      `;
    }
    const pr = PLAN_PRIORITIES.find(p => 'p' + p.n === id);
    if (pr) return priorityHtml(pr);
    return '<p>Section not found.</p>';
  }

  function renderNav() {
    const nav = document.getElementById('plan-nav');
    nav.innerHTML = SECTIONS.map(s => `<button class="plan-nav-item" data-section="${s.id}">${s.label}</button>`).join('');
    nav.querySelectorAll('.plan-nav-item').forEach(btn => {
      btn.addEventListener('click', () => showSection(btn.dataset.section));
    });
  }

  function showSection(id) {
    document.querySelectorAll('.plan-nav-item').forEach(b => b.classList.toggle('active', b.dataset.section === id));
    const panel = document.getElementById('plan-panel');
    panel.classList.remove('enter');
    panel.innerHTML = sectionHtml(id);
    void panel.offsetWidth;
    panel.classList.add('enter');
    panel.scrollTop = 0;
  }

  function initOverview() {
    renderNav();
    showSection('purpose');
  }

  return { initOverview, showSection };
})();
