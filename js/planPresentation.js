/* ==========================================================================
   30-Day Plan tab — two sub-views:
   1. Overview: a slide-like walk through the plan document itself
      (purpose, roadmap, all 8 priorities, templates, rhythm, KPIs, role,
      end-state) — static content, presented, not just dumped as text.
   2. Execution Tracker: the same 67 actions as a live, filterable
      tracker — RAG and days-remaining computed against today's date.
      Uses the embedded SEPTEMBER_ACTIONS data (js/data/september-actions.js),
      no upload required.
   ========================================================================== */

const PlanPresentation = (() => {

  const SECTIONS = [
    { id: 'purpose', label: 'Strategic Purpose' },
    { id: 'roadmap', label: '30-Day Roadmap' },
    { id: 'outcomes', label: 'Key Outcomes' },
    ...PLAN_PRIORITIES.map(p => ({ id: 'p' + p.n, label: `P${p.n} · ${p.title}` })),
    { id: 'templates', label: 'Workplace Templates' },
    { id: 'rhythm', label: 'Weekly Rhythm' },
    { id: 'kpis', label: 'September KPIs' },
    { id: 'role', label: 'Role of the LJM' },
    { id: 'endstate', label: 'September End-State' },
  ];

  function chainHtml(items) {
    return `<div class="chain">${items.map((c, i) =>
      `<span class="chain-step">${Utils.escapeHtml(c)}</span>${i < items.length - 1 ? '<span class="chain-arrow">→</span>' : ''}`
    ).join('')}</div>`;
  }

  function actionsTable(actions) {
    if (!actions.length) return '';
    const rows = actions.map(([action, timeframe, output]) => `
      <tr>
        <td>${Utils.escapeHtml(action)}</td>
        <td class="mono">${Utils.escapeHtml(timeframe)}</td>
        ${output !== undefined ? `<td>${Utils.escapeHtml(output)}</td>` : ''}
      </tr>`).join('');
    const hasOutput = actions[0].length > 2 && actions[0][2] !== '';
    return `
      <table class="plan-table">
        <thead><tr><th>Key Action</th><th>Timeframe</th>${hasOutput ? '<th>Expected Output</th>' : ''}</tr></thead>
        <tbody>${rows}</tbody>
      </table>`;
  }

  function sectionHtml(id) {
    if (id === 'purpose') {
      return `
        <h2>${PLAN_META.title}</h2>
        <p class="plan-sub">${PLAN_META.subtitle} &middot; ${PLAN_META.period}</p>
        ${PLAN_PURPOSE.paragraphs.map(p => `<p>${p}</p>`).join('')}
        <h4>Strategic Management Principle</h4>
        ${chainHtml(PLAN_PURPOSE.principle)}
      `;
    }
    if (id === 'roadmap') {
      return `
        <h2>30-Day Strategic Roadmap</h2>
        <div class="roadmap-grid">
          ${PLAN_ROADMAP.map(r => `
            <div class="roadmap-card">
              <div class="roadmap-period">${r.period}</div>
              <div class="roadmap-theme">${r.theme}</div>
              <div class="roadmap-focus">${r.focus}</div>
            </div>`).join('')}
        </div>
      `;
    }
    if (id === 'outcomes') {
      return `
        <h2>Key Outcomes by 30 September 2026</h2>
        <table class="plan-table">
          <thead><tr><th>Strategic Outcome</th><th>Expected Result</th></tr></thead>
          <tbody>${PLAN_OUTCOMES.map(([a, b]) => `<tr><td>${a}</td><td>${b}</td></tr>`).join('')}</tbody>
        </table>
      `;
    }
    if (id === 'templates') {
      return `
        <h2>Standard Workplace Templates</h2>
        <p>Finalised alongside the Workplace Strategy, so every Workplace Coordinator works from the same core operating framework.</p>
        <table class="plan-table">
          <thead><tr><th>Template</th><th>Target Completion</th></tr></thead>
          <tbody>${PLAN_TEMPLATES.map(([a, b]) => `<tr><td>${a}</td><td class="mono">${b}</td></tr>`).join('')}</tbody>
        </table>
      `;
    }
    if (id === 'rhythm') {
      return `
        <h2>Weekly Governance Rhythm</h2>
        <div class="rhythm-grid">
          ${PLAN_RHYTHM.map(([day, focus]) => `
            <div class="rhythm-card"><div class="rhythm-day">${day}</div><div class="rhythm-focus">${focus}</div></div>`).join('')}
        </div>
      `;
    }
    if (id === 'kpis') {
      return `
        <h2>Key September Performance Indicators</h2>
        <table class="plan-table">
          <thead><tr><th>KPI</th><th>Target</th></tr></thead>
          <tbody>${PLAN_KPIS.map(([a, b]) => `<tr><td>${a}</td><td class="mono">${b}</td></tr>`).join('')}</tbody>
        </table>
      `;
    }
    if (id === 'role') {
      return `
        <h2>Role of the Learning Journey Manager</h2>
        <p>${PLAN_ROLE.statement}</p>
        ${chainHtml(PLAN_ROLE.chain)}
        <div class="question-shift">
          <div class="q-old">${PLAN_ROLE.oldQuestion}</div>
          <div class="q-arrow">becomes</div>
          <div class="q-new">${PLAN_ROLE.newQuestion}</div>
        </div>
      `;
    }
    if (id === 'endstate') {
      return `
        <h2>September End-State</h2>
        <p>${PLAN_ENDSTATE.intro}</p>
        <ul class="endstate-list">${PLAN_ENDSTATE.items.map(i => `<li>${i}</li>`).join('')}</ul>
        <p>${PLAN_ENDSTATE.closing}</p>
        ${chainHtml(PLAN_ENDSTATE.cycle)}
      `;
    }
    const pr = PLAN_PRIORITIES.find(p => 'p' + p.n === id);
    if (pr) {
      return `
        <h2>Priority ${pr.n}: ${pr.title}</h2>
        <p>${pr.objective}</p>
        ${pr.context.length ? `<h4>${pr.contextLabel || 'Covers'}</h4><div class="tag-cloud">${pr.context.map(c => `<span class="tag">${c}</span>`).join('')}</div>` : ''}
        ${pr.flow ? `<div class="flow-line">${pr.context.join(' → ')}</div>` : ''}
        ${pr.cycle ? `<h4>Survey Management Cycle</h4>${chainHtml(pr.cycle)}` : ''}
        ${pr.ragLegend ? `
          <div class="rag-legend">
            <span class="pill pill-green">GREEN</span> ${pr.ragLegend.green}
            <span class="pill pill-amber">AMBER</span> ${pr.ragLegend.amber}
            <span class="pill pill-red">RED</span> ${pr.ragLegend.red}
          </div>` : ''}
        <h4>Key Actions</h4>
        ${actionsTable(pr.actions)}
        ${pr.outcome ? `<div class="outcome-banner"><strong>September Outcome —</strong> ${pr.outcome}</div>` : ''}
      `;
    }
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
    // eslint-disable-next-line no-unused-expressions
    void panel.offsetWidth; // restart animation
    panel.classList.add('enter');
    panel.scrollTop = 0;
  }

  function initOverview() {
    renderNav();
    showSection('purpose');
  }

  return { initOverview, showSection };
})();
