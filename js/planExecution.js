/* ==========================================================================
   Execution Tracker — the second sub-view of the 30-Day Plan tab.
   Reads the embedded SEPTEMBER_ACTIONS data (no upload needed — this is
   the plan document's own action list). RAG and days-remaining are
   computed live against today's date.
   ========================================================================== */

const PlanExecution = (() => {
  let charts = {};
  let initialised = false;

  function computeRag(status, dueDate) {
    const s = Utils.normKey(status);
    if (s === 'complete' || s === 'done') return 'green';
    if (!dueDate) return 'grey';
    const days = Utils.daysBetween(new Date(), new Date(dueDate));
    if (days < 0) return 'red';
    if (days <= 3) return 'amber';
    return 'green';
  }

  function buildActions() {
    return SEPTEMBER_ACTIONS.map(a => {
      const dueDate = a.dueDate ? new Date(a.dueDate) : null;
      const status = 'Not Started'; // real September-2026 baseline — nothing has run yet
      const pctComplete = 0;
      return {
        id: a.id,
        priority: a.priority,
        action: a.action,
        deliverable: a.deliverable,
        owner: a.owner || 'Unassigned',
        dueDate,
        status,
        pctComplete,
        rag: computeRag(status, dueDate),
        daysRemaining: dueDate ? Utils.daysBetween(new Date(), dueDate) : null,
      };
    });
  }

  function render() {
    const actions = buildActions();
    const total = actions.length;
    const complete = actions.filter(a => a.pctComplete >= 100).length;
    const avgPct = total ? Math.round(Utils.sum(actions, a => a.pctComplete) / total) : 0;
    const dueSoon = actions.filter(a => a.pctComplete < 100 && a.daysRemaining !== null && a.daysRemaining >= 0 && a.daysRemaining <= 14).length;
    const overdue = actions.filter(a => a.pctComplete < 100 && a.daysRemaining !== null && a.daysRemaining < 0).length;

    const byPriority = Utils.groupBy(actions, a => a.priority);
    const priorityRag = [...byPriority.entries()].map(([name, items]) => {
      const worst = items.some(i => i.rag === 'red') ? 'red' : items.some(i => i.rag === 'amber') ? 'amber' : 'green';
      const avg = Math.round(Utils.sum(items, i => i.pctComplete) / items.length);
      return { name, avg, rag: worst, count: items.length };
    });
    const onTarget = priorityRag.filter(p => p.rag === 'green').length;

    renderKpis({ total, complete, avgPct, dueSoon, overdue, onTarget, priorityCount: priorityRag.length });
    renderPriorityList(priorityRag);
    renderStatusChart(actions);
    renderActionsTable(actions);
  }

  function renderKpis(k) {
    document.getElementById('pe-kpis').innerHTML = `
      <div class="kpi-card">
        <div class="kpi-label">Overall Completion</div>
        <div class="kpi-value">${k.avgPct}%</div>
        <div class="kpi-sub">avg. across ${k.total} actions</div>
      </div>
      <div class="kpi-card tone-green">
        <div class="kpi-label">Actions Complete</div>
        <div class="kpi-value">${k.complete}<span style="font-size:15px;color:var(--muted-soft)"> / ${k.total}</span></div>
        <div class="kpi-sub">of the 30-day plan</div>
      </div>
      <div class="kpi-card tone-amber">
        <div class="kpi-label">Due in 14 Days</div>
        <div class="kpi-value">${k.dueSoon}</div>
        <div class="kpi-sub">not yet complete</div>
      </div>
      <div class="kpi-card ${k.overdue > 0 ? 'tone-red' : 'tone-green'}">
        <div class="kpi-label">Overdue</div>
        <div class="kpi-value">${k.overdue}</div>
        <div class="kpi-sub">past due date, incomplete</div>
      </div>
      <div class="kpi-card tone-grey">
        <div class="kpi-label">Priorities On Target</div>
        <div class="kpi-value">${k.onTarget}<span style="font-size:15px;color:var(--muted-soft)"> / ${k.priorityCount}</span></div>
        <div class="kpi-sub">no red/amber actions</div>
      </div>
    `;
  }

  function renderPriorityList(priorityRag) {
    const toneVar = { green: 'var(--green)', amber: 'var(--amber)', red: 'var(--red)' };
    document.getElementById('pe-priority-list').innerHTML = priorityRag.map(p => `
      <div class="priority-row">
        <div class="p-top">
          <span class="name">${Utils.escapeHtml(p.name)}</span>
          <span class="pct">${p.avg}% &middot; ${p.count} actions</span>
        </div>
        <div class="p-track"><div class="p-fill" style="width:${p.avg}%;background:${toneVar[p.rag]}"></div></div>
      </div>`).join('');
  }

  function renderStatusChart(actions) {
    const byStatus = Utils.groupBy(actions, a => a.status);
    const labels = [...byStatus.keys()];
    const counts = labels.map(l => byStatus.get(l).length);
    const palette = ['#7A8296', '#B4780F', '#0E7C7B', '#1E8E5A', '#C23B3B'];

    const ctx = document.getElementById('pe-status-chart');
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

  function renderActionsTable(actions) {
    const container = document.getElementById('pe-table');
    const columns = [
      { key: 'id', label: 'ID' },
      { key: 'priority', label: 'Priority' },
      { key: 'action', label: 'Action' },
      { key: 'owner', label: 'Owner' },
      { key: 'dueDate', label: 'Due', render: r => Utils.fmtDate(r.dueDate), sortVal: r => r.dueDate ? r.dueDate.getTime() : 0 },
      { key: 'daysRemaining', label: 'Days Left', render: r => r.daysRemaining === null ? '—' : (r.daysRemaining < 0 ? `${Math.abs(r.daysRemaining)}d overdue` : `${r.daysRemaining}d`) },
      { key: 'pctComplete', label: '% Complete', render: r => `<div class="progress-track"><div class="progress-fill ${r.rag}" style="width:${r.pctComplete}%"></div></div>` },
      { key: 'status', label: 'Status', render: r => Utils.chip(r.status, r.rag) },
    ];

    function applyFilters() {
      const q = Utils.normKey(document.getElementById('pe-search').value);
      const priorityFilter = document.getElementById('pe-filter-priority').value;
      const ragFilter = document.getElementById('pe-filter-rag').value;
      const filtered = actions.filter(a => {
        if (priorityFilter && a.priority !== priorityFilter) return false;
        if (ragFilter && a.rag !== ragFilter) return false;
        if (!q) return true;
        return [a.id, a.action, a.owner, a.deliverable].some(v => Utils.normKey(v).includes(q));
      });
      Utils.buildTable(container, columns, filtered, { emptyText: 'No actions match those filters.' });
    }

    const prioritySelect = document.getElementById('pe-filter-priority');
    prioritySelect.innerHTML = '<option value="">All priorities</option>' +
      [...new Set(actions.map(a => a.priority))].sort().map(p => `<option>${Utils.escapeHtml(p)}</option>`).join('');

    document.getElementById('pe-search').oninput = applyFilters;
    document.getElementById('pe-filter-priority').onchange = applyFilters;
    document.getElementById('pe-filter-rag').onchange = applyFilters;
    applyFilters();
  }

  function ensureRendered() {
    if (initialised) return;
    initialised = true;
    render();
  }

  return { ensureRendered };
})();
