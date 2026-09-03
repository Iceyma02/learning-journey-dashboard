/* ==========================================================================
   Execution Tracker — the second sub-view of the 30-Day Plan tab.
   Reads the embedded SEPTEMBER_ACTIONS data (no upload needed). Status
   is editable per action (Not Started / In Progress / Complete), which
   drives % complete. Progress is saved to localStorage so it survives
   reloads, plus Export/Import for moving between devices.

   NOTE: there is no RAG (red/amber/green) ranking here on purpose — all
   30-day priorities are treated as equally important, so priorities and
   actions are never colour-ranked against each other. "Overdue"/"Due
   soon" are shown as plain date facts, not a risk ranking.
   ========================================================================== */

const PlanExecution = (() => {
  let charts = {};
  let initialised = false;
  let actions = []; // live in-memory list, mutated as status changes
  let currentFilters = { q: '', priority: '' };

  const STORAGE_KEY = 'ljd-execution-progress-v1';
  const STATUSES = ['Not Started', 'In Progress', 'Complete'];
  const STATUS_PCT = { 'Not Started': 0, 'In Progress': 50, 'Complete': 100 };
  const STATUS_TONE = { 'Not Started': 'grey', 'In Progress': 'teal', 'Complete': 'green' };

  function loadState() {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      console.warn('Could not read saved progress:', e);
      return {};
    }
  }

  function saveState(state) {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Could not save progress:', e);
    }
  }

  function isOverdue(status, dueDate) {
    if (status === 'Complete' || !dueDate) return false;
    return Utils.daysBetween(new Date(), new Date(dueDate)) < 0;
  }

  function buildActions() {
    const state = loadState();
    return SEPTEMBER_ACTIONS.map(a => {
      const dueDate = a.dueDate ? new Date(a.dueDate) : null;
      const status = state[a.id] || 'Not Started';
      return {
        id: a.id,
        priority: a.priority,
        action: a.action,
        deliverable: a.deliverable,
        owner: a.owner || 'Unassigned',
        dueDate,
        status,
        pctComplete: STATUS_PCT[status],
        daysRemaining: dueDate ? Utils.daysBetween(new Date(), dueDate) : null,
      };
    });
  }

  function setStatus(id, status) {
    const state = loadState();
    if (status === 'Not Started') delete state[id];
    else state[id] = status;
    saveState(state);

    const row = actions.find(a => a.id === id);
    if (row) {
      row.status = status;
      row.pctComplete = STATUS_PCT[status];
    }
    refresh();
  }

  function markPriorityComplete(priorityName) {
    const state = loadState();
    actions.filter(a => a.priority === priorityName).forEach(a => {
      state[a.id] = 'Complete';
      a.status = 'Complete';
      a.pctComplete = 100;
    });
    saveState(state);
    refresh();
  }

  function resetProgress() {
    if (!window.confirm('Clear all tracked progress on the Execution Tracker? This cannot be undone (export first if you want a backup).')) return;
    window.localStorage.removeItem(STORAGE_KEY);
    actions = buildActions();
    refresh();
  }

  function exportProgress() {
    const state = loadState();
    const blob = new Blob([JSON.stringify({ exportedAt: new Date().toISOString(), progress: state }, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `learning-journey-progress-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function importProgress(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const parsed = JSON.parse(e.target.result);
        const incoming = parsed.progress || parsed;
        if (typeof incoming !== 'object' || incoming === null) throw new Error('Unrecognised file format');
        saveState(incoming);
        actions = buildActions();
        refresh();
        window.alert('Progress imported.');
      } catch (err) {
        window.alert('Could not read that file — is it a progress export from this app?');
      }
    };
    reader.readAsText(file);
  }

  function render() {
    actions = buildActions();
    refresh();
  }

  function refresh() {
    const total = actions.length;
    const complete = actions.filter(a => a.status === 'Complete').length;
    const avgPct = total ? Math.round(Utils.sum(actions, a => a.pctComplete) / total) : 0;
    const dueSoon = actions.filter(a => a.status !== 'Complete' && a.daysRemaining !== null && a.daysRemaining >= 0 && a.daysRemaining <= 14).length;
    const overdue = actions.filter(a => isOverdue(a.status, a.dueDate)).length;

    const byPriority = Utils.groupBy(actions, a => a.priority);
    const priorityProgress = [...byPriority.entries()].map(([name, items]) => {
      const avg = Math.round(Utils.sum(items, i => i.pctComplete) / items.length);
      const allComplete = items.every(i => i.status === 'Complete');
      return { name, avg, count: items.length, allComplete };
    });

    renderKpis({ total, complete, avgPct, dueSoon, overdue });
    renderPriorityList(priorityProgress);
    renderStatusChart(actions);
    renderActionsTable();
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
      <div class="kpi-card">
        <div class="kpi-label">Due in 14 Days</div>
        <div class="kpi-value">${k.dueSoon}</div>
        <div class="kpi-sub">not yet complete</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">Overdue</div>
        <div class="kpi-value">${k.overdue}</div>
        <div class="kpi-sub">past due date, incomplete</div>
      </div>
    `;
  }

  function renderPriorityList(priorityProgress) {
    document.getElementById('pe-priority-list').innerHTML = priorityProgress.map(p => `
      <div class="priority-row">
        <div class="p-top">
          <span class="name">${Utils.escapeHtml(p.name)}</span>
          <span class="pct">${p.avg}% &middot; ${p.count} actions</span>
        </div>
        <div class="p-track"><div class="p-fill" style="width:${p.avg}%"></div></div>
        <button class="p-mark-btn" ${p.allComplete ? 'disabled' : ''} onclick="PlanExecution.markPriorityComplete('${p.name.replace(/'/g, "\\'")}')">
          ${p.allComplete ? '✓ All complete' : 'Mark all complete'}
        </button>
      </div>`).join('');
  }

  function renderStatusChart(actions) {
    const byStatus = Utils.groupBy(actions, a => a.status);
    const labels = [...byStatus.keys()];
    const counts = labels.map(l => byStatus.get(l).length);
    const palette = { 'Not Started': '#7A8296', 'In Progress': '#0E7C7B', 'Complete': '#1E8E5A' };

    const ctx = document.getElementById('pe-status-chart');
    if (charts.status) charts.status.destroy();
    charts.status = new Chart(ctx, {
      type: 'doughnut',
      data: { labels, datasets: [{ data: counts, backgroundColor: labels.map(l => palette[l] || '#7A8296'), borderWidth: 0 }] },
      options: {
        responsive: true, maintainAspectRatio: false, cutout: '62%',
        plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, font: { size: 10.5 } } } },
      },
    });
  }

  function statusSelect(row) {
    const opts = STATUSES.map(s => `<option value="${s}" ${s === row.status ? 'selected' : ''}>${s}</option>`).join('');
    return `<select class="status-select status-${STATUS_TONE[row.status]}" onchange="PlanExecution.setStatus('${row.id}', this.value)">${opts}</select>`;
  }

  function renderActionsTable() {
    const container = document.getElementById('pe-table');
    const columns = [
      { key: 'id', label: 'ID' },
      { key: 'priority', label: 'Priority' },
      { key: 'action', label: 'Action' },
      { key: 'owner', label: 'Owner' },
      { key: 'dueDate', label: 'Due', render: r => Utils.fmtDate(r.dueDate), sortVal: r => r.dueDate ? r.dueDate.getTime() : 0 },
      { key: 'daysRemaining', label: 'Days Left', render: r => r.daysRemaining === null ? '—' : (r.daysRemaining < 0 ? `${Math.abs(r.daysRemaining)}d overdue` : `${r.daysRemaining}d`) },
      { key: 'pctComplete', label: '% Complete', render: r => `<div class="progress-track"><div class="progress-fill" style="width:${r.pctComplete}%"></div></div>` },
      { key: 'status', label: 'Status', render: r => statusSelect(r) },
    ];

    const q = currentFilters.q;
    const priorityFilter = currentFilters.priority;
    const filtered = actions.filter(a => {
      if (priorityFilter && a.priority !== priorityFilter) return false;
      if (!q) return true;
      return [a.id, a.action, a.owner, a.deliverable].some(v => Utils.normKey(v).includes(q));
    });
    Utils.buildTable(container, columns, filtered, { emptyText: 'No actions match those filters.' });

    const prioritySelect = document.getElementById('pe-filter-priority');
    if (!prioritySelect.dataset.built) {
      prioritySelect.innerHTML = '<option value="">All priorities</option>' +
        [...new Set(actions.map(a => a.priority))].sort().map(p => `<option>${Utils.escapeHtml(p)}</option>`).join('');
      prioritySelect.dataset.built = '1';
    }
  }

  function wireControls() {
    document.getElementById('pe-search').oninput = (e) => { currentFilters.q = Utils.normKey(e.target.value); renderActionsTable(); };
    document.getElementById('pe-filter-priority').onchange = (e) => { currentFilters.priority = e.target.value; renderActionsTable(); };
    document.getElementById('pe-reset').addEventListener('click', resetProgress);
    document.getElementById('pe-export').addEventListener('click', exportProgress);
    document.getElementById('pe-import-btn').addEventListener('click', () => document.getElementById('pe-import-file').click());
    document.getElementById('pe-import-file').addEventListener('change', (e) => {
      if (e.target.files[0]) importProgress(e.target.files[0]);
      e.target.value = '';
    });
  }

  function ensureRendered() {
    if (initialised) return;
    initialised = true;
    wireControls();
    render();
  }

  return { ensureRendered, setStatus, markPriorityComplete };
})();
