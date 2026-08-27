/* ==========================================================================
   Shared helpers used by both dashboards.
   No build step — plain ES2017, loaded as classic <script> tags.
   ========================================================================== */

const Utils = (() => {

  /** Trim + collapse whitespace, safe on non-strings. */
  function clean(val) {
    if (val === null || val === undefined) return '';
    return String(val).replace(/\s+/g, ' ').trim();
  }

  /** Lower-case, trimmed key for matching (handles "Risk " vs "Risk"). */
  function normKey(key) {
    return clean(key).toLowerCase();
  }

  /**
   * Read a worksheet into an array of plain objects, with header keys
   * trimmed. Keeps native types (numbers stay numbers, Excel dates come
   * back as JS Date objects because we read the workbook with cellDates:true).
   */
  function sheetToRows(workbook, sheetName) {
    const ws = workbook.Sheets[sheetName];
    if (!ws) return [];
    const raw = XLSX.utils.sheet_to_json(ws, { defval: null, raw: true });
    return raw.map(row => {
      const out = {};
      Object.keys(row).forEach(k => { out[clean(k)] = row[k]; });
      return out;
    });
  }

  /**
   * Find the header row for a sheet whose real table starts a few rows
   * down (title rows, blank rows above it) and return objects keyed by
   * that header row. Looks for the first row where at least `minFilled`
   * cells are non-empty short strings (a heuristic for "this looks like
   * a header row", used as a fallback when sheet_to_json's first row
   * isn't the real header).
   */
  function sheetToRowsAutoHeader(workbook, sheetName, headerHints) {
    const ws = workbook.Sheets[sheetName];
    if (!ws) return [];
    const grid = XLSX.utils.sheet_to_json(ws, { header: 1, defval: null, raw: true });
    let headerRowIdx = 0;
    for (let i = 0; i < Math.min(grid.length, 15); i++) {
      const row = grid[i] || [];
      const cells = row.map(c => normKey(c));
      const hits = headerHints.filter(h => cells.includes(h)).length;
      if (hits >= Math.max(2, Math.ceil(headerHints.length * 0.5))) {
        headerRowIdx = i;
        break;
      }
    }
    const headers = (grid[headerRowIdx] || []).map(clean);
    const rows = [];
    for (let i = headerRowIdx + 1; i < grid.length; i++) {
      const raw = grid[i] || [];
      if (raw.every(c => c === null || c === undefined || clean(c) === '')) continue;
      const obj = {};
      headers.forEach((h, idx) => { if (h) obj[h] = raw[idx] !== undefined ? raw[idx] : null; });
      rows.push(obj);
    }
    return rows;
  }

  /**
   * Like sheetToRowsAutoHeader, but stops at the first fully-blank row
   * after data starts. Use this for sheets that have a second, unrelated
   * table further down the same tab (e.g. Weekly Update's KPI scorecard
   * block below its Category/Metric/Value block) — a plain "skip blank
   * rows" reader would otherwise merge the second table's differently
   * shaped rows into the first.
   */
  function sheetToRowsUntilBlank(workbook, sheetName, headerHints) {
    const ws = workbook.Sheets[sheetName];
    if (!ws) return [];
    const grid = XLSX.utils.sheet_to_json(ws, { header: 1, defval: null, raw: true });
    let headerRowIdx = 0;
    for (let i = 0; i < Math.min(grid.length, 15); i++) {
      const row = grid[i] || [];
      const cells = row.map(c => normKey(c));
      const hits = headerHints.filter(h => cells.includes(h)).length;
      if (hits >= Math.max(2, Math.ceil(headerHints.length * 0.5))) {
        headerRowIdx = i;
        break;
      }
    }
    const headers = (grid[headerRowIdx] || []).map(clean);
    const rows = [];
    for (let i = headerRowIdx + 1; i < grid.length; i++) {
      const raw = grid[i] || [];
      const blank = raw.every(c => c === null || c === undefined || clean(c) === '');
      if (blank) break; // stop at the first gap — anything past it belongs to another table
      const obj = {};
      headers.forEach((h, idx) => { if (h) obj[h] = raw[idx] !== undefined ? raw[idx] : null; });
      rows.push(obj);
    }
    return rows;
  }

  /** Get a field off a row object, matching header names loosely. */
  function field(row, ...candidates) {
    const keys = Object.keys(row);
    for (const cand of candidates) {
      const target = normKey(cand);
      const hit = keys.find(k => normKey(k) === target);
      if (hit !== undefined) return row[hit];
    }
    return null;
  }

  function asNumber(val, fallback = 0) {
    if (val === null || val === undefined || val === '') return fallback;
    if (typeof val === 'number') return val;
    const n = parseFloat(String(val).replace(/[^\d.\-]/g, ''));
    return isNaN(n) ? fallback : n;
  }

  function asDate(val) {
    if (!val) return null;
    if (val instanceof Date && !isNaN(val)) return val;
    const d = new Date(val);
    return isNaN(d) ? null : d;
  }

  function fmtDate(d) {
    if (!d) return '—';
    return d.toLocaleDateString('en-ZA', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  function daysBetween(a, b) {
    const MS = 24 * 60 * 60 * 1000;
    return Math.round((b.setHours(0,0,0,0) - a.setHours(0,0,0,0)) / MS);
  }

  function ragTone(rag) {
    const r = normKey(rag);
    if (r === 'red') return 'red';
    if (r === 'amber' || r === 'orange') return 'amber';
    if (r === 'green') return 'green';
    return 'grey';
  }

  function riskTone(classification) {
    const c = normKey(classification);
    if (c === 'high') return 'red';
    if (c === 'medium') return 'amber';
    if (c === 'low') return 'green';
    return 'grey';
  }

  function statusTone(status) {
    const s = normKey(status);
    if (s === 'closed') return 'grey';
    if (s === 'workplace') return 'amber';
    if (s === '' || s === 'n/a') return 'green';
    return 'green';
  }

  function pill(text, tone) {
    return `<span class="pill pill-${tone}">${text}</span>`;
  }

  function chip(text, tone) {
    const bg = { green: 'var(--green-soft)', amber: 'var(--amber-soft)', red: 'var(--red-soft)', grey: 'var(--grey-soft)' }[tone];
    const fg = { green: 'var(--green)', amber: 'var(--amber)', red: 'var(--red)', grey: 'var(--grey)' }[tone];
    return `<span class="status-chip" style="background:${bg};color:${fg}">${escapeHtml(text)}</span>`;
  }

  function escapeHtml(str) {
    return String(str === null || str === undefined ? '' : str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function groupBy(arr, keyFn) {
    const map = new Map();
    arr.forEach(item => {
      const k = keyFn(item);
      if (!map.has(k)) map.set(k, []);
      map.get(k).push(item);
    });
    return map;
  }

  function sum(arr, fn) { return arr.reduce((acc, x) => acc + (fn ? fn(x) : x), 0); }

  /** Sortable, filterable HTML table builder shared by both tabs. */
  function buildTable(container, columns, rows, opts = {}) {
    container.innerHTML = '';
    const wrap = document.createElement('div');
    wrap.className = 'table-wrap';
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const trh = document.createElement('tr');
    columns.forEach((col, idx) => {
      const th = document.createElement('th');
      th.textContent = col.label;
      th.addEventListener('click', () => {
        const dir = th.dataset.dir === 'asc' ? 'desc' : 'asc';
        [...trh.children].forEach(c => delete c.dataset.dir);
        th.dataset.dir = dir;
        rows.sort((a, b) => {
          const va = col.sortVal ? col.sortVal(a) : a[col.key];
          const vb = col.sortVal ? col.sortVal(b) : b[col.key];
          if (va === vb) return 0;
          const cmp = va > vb ? 1 : -1;
          return dir === 'asc' ? cmp : -cmp;
        });
        renderBody();
      });
      trh.appendChild(th);
    });
    thead.appendChild(trh);
    const tbody = document.createElement('tbody');

    function renderBody() {
      tbody.innerHTML = '';
      if (!rows.length) {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.colSpan = columns.length;
        td.style.textAlign = 'center';
        td.style.color = 'var(--muted-soft)';
        td.style.padding = '30px';
        td.textContent = opts.emptyText || 'No matching rows.';
        tr.appendChild(td);
        tbody.appendChild(tr);
        return;
      }
      rows.forEach(row => {
        const tr = document.createElement('tr');
        columns.forEach(col => {
          const td = document.createElement('td');
          td.innerHTML = col.render ? col.render(row) : escapeHtml(row[col.key]);
          tr.appendChild(td);
        });
        tbody.appendChild(tr);
      });
    }

    table.appendChild(thead);
    table.appendChild(tbody);
    wrap.appendChild(table);
    container.appendChild(wrap);
    renderBody();
    return { renderBody };
  }

  return {
    clean, normKey, sheetToRows, sheetToRowsAutoHeader, sheetToRowsUntilBlank, field,
    asNumber, asDate, fmtDate, daysBetween,
    ragTone, riskTone, statusTone, pill, chip, escapeHtml,
    groupBy, sum, buildTable,
  };
})();
