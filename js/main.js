/* ==========================================================================
   Presentation flow controller.
   Screens: cover -> upload -> app (Dashboard / 30-Day Plan tabs) -> end.
   File parsing happens entirely client-side; nothing is uploaded anywhere.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initCoverCanvas('cover-canvas', { color: '88, 214, 201', count: 70 });
  initCoverCanvas('end-canvas', { color: '88, 214, 201', count: 55 });

  wireScreenNav();
  wireAppTabs();
  wireDropzone();
  animateCoverIn();
});

function goToScreen(id) {
  document.querySelectorAll('.screen').forEach(s => {
    if (s.id === id) {
      s.classList.add('active');
      s.classList.remove('leaving');
    } else if (s.classList.contains('active')) {
      s.classList.add('leaving');
      s.classList.remove('active');
    }
  });
}

function animateCoverIn() {
  document.querySelectorAll('#screen-cover .reveal').forEach((el, i) => {
    el.style.animationDelay = (i * 0.12) + 's';
    el.classList.add('reveal-in');
  });
}

function wireScreenNav() {
  document.getElementById('btn-begin').addEventListener('click', () => goToScreen('screen-upload'));
  document.getElementById('btn-skip-to-plan').addEventListener('click', () => {
    goToScreen('screen-app');
    switchAppTab('plan');
  });
  document.getElementById('btn-end').addEventListener('click', () => goToScreen('screen-end'));
  document.getElementById('btn-restart').addEventListener('click', () => {
    goToScreen('screen-cover');
    animateCoverIn();
  });
}

function switchAppTab(target) {
  document.querySelectorAll('.app-tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === target));
  document.querySelectorAll('.app-view').forEach(v => v.classList.toggle('active', v.id === 'app-' + target));
  if (target === 'plan' && !PlanPresentation.__init) {
    PlanPresentation.initOverview();
    PlanPresentation.__init = true;
  }
}

function wireAppTabs() {
  document.querySelectorAll('.app-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchAppTab(btn.dataset.tab));
  });
  document.querySelectorAll('.plan-subtab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.plan-subtab-btn').forEach(b => b.classList.toggle('active', b === btn));
      document.querySelectorAll('.plan-subview').forEach(v => v.classList.toggle('active', v.id === 'plan-sub-' + btn.dataset.sub));
      if (btn.dataset.sub === 'execution') PlanExecution.ensureRendered();
    });
  });
}

function wireDropzone() {
  const zone = document.getElementById('up-dropzone');
  const input = document.getElementById('up-file');
  const status = document.getElementById('up-status');

  const openPicker = () => input.click();
  zone.querySelector('.btn-primary').addEventListener('click', openPicker);

  ['dragenter', 'dragover'].forEach(evt =>
    zone.addEventListener(evt, e => { e.preventDefault(); zone.classList.add('drag-over'); }));
  ['dragleave', 'drop'].forEach(evt =>
    zone.addEventListener(evt, e => { e.preventDefault(); zone.classList.remove('drag-over'); }));
  zone.addEventListener('drop', e => { const f = e.dataTransfer.files[0]; if (f) handleFile(f); });
  input.addEventListener('change', () => { if (input.files[0]) handleFile(input.files[0]); });

  function setStatus(text, cls) {
    status.textContent = text;
    status.className = 'dz-status' + (cls ? ' ' + cls : '');
  }

  function handleFile(file) {
    if (typeof XLSX === 'undefined') {
      setStatus('The spreadsheet engine failed to load — check js/vendor/xlsx.full.min.js is present in the deployment.', 'err');
      return;
    }
    setStatus('Reading ' + file.name + ' …');
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array', cellDates: true });
        if (!workbook.SheetNames.includes('Active Projects')) {
          setStatus(`That file doesn't have an "Active Projects" sheet. Sheets found: ${workbook.SheetNames.join(', ') || 'none'}.`, 'err');
          return;
        }
        ServiceDelivery.render(workbook);
        const stamp = new Date().toLocaleString('en-ZA', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
        setStatus(`Loaded ${file.name} — ${stamp}`, 'ok');
        setTimeout(() => {
          goToScreen('screen-app');
          switchAppTab('dashboard');
        }, 500);
      } catch (err) {
        console.error(err);
        setStatus('Could not read that file: ' + (err && err.message ? err.message : 'unknown error') + '. Make sure it is a genuine .xlsx export (not renamed, not password-protected).', 'err');
      }
    };
    reader.onerror = () => setStatus('Could not read that file from disk.', 'err');
    reader.readAsArrayBuffer(file);
  }
}
