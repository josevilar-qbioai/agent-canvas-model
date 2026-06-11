/**
 * main.js — App bootstrap: wires events, loads saved state
 * Agent Canvas v4 · Cloud Edition
 */

import { applyState }                   from './canvas-core.js';
import { scheduleAutoSave, saveNow, loadSaved, importJSON } from './storage.js';
import { loadFromHash, copyShareURL }   from './share.js';
import { exportCanvas, exportWord }     from './export.js';
import { trackProgress }                from './progress.js';
import { toggleBlock, selAg, setKpi, resetAll, showToast } from './ui.js';

document.addEventListener('DOMContentLoaded', init);

function init() {
  wireBlocks();
  wireChips();
  wireInputs();
  wireKpis();
  wireHeaderButtons();
  wireExportPanel();
  wireKeyboard();

  // Load order: hash first (shared link), then localStorage
  const fromHash = loadFromHash();
  if (fromHash) {
    trackProgress();
    showToast('📥 Canvas cargado desde enlace compartido');
  } else {
    const restored = loadSaved();
    if (restored) trackProgress();
  }

  // Listen for programmatic state loads (e.g. importJSON)
  document.addEventListener('canvas:stateLoaded', () => trackProgress());
}

// ── Block toggle ─────────────────────────────────────────────────────────
function wireBlocks() {
  document.querySelectorAll('[data-collapsible="true"]').forEach(block => {
    block.addEventListener('click', e => {
      if (e.target.closest('[data-stop-toggle]')) return;
      toggleBlock(block);
    });
    block.addEventListener('keydown', e => {
      if ((e.key === 'Enter' || e.key === ' ') && e.target === block) {
        e.preventDefault();
        toggleBlock(block);
      }
    });
  });
}

// ── Agency / chip buttons ────────────────────────────────────────────────
function wireChips() {
  document.querySelectorAll('.ag-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      selAg(btn);
      scheduleAutoSave();
    });
  });
}

// ── All inputs → auto-save + progress ────────────────────────────────────
function wireInputs() {
  const selector = 'input[name]:not([type=checkbox]):not([type=range]), textarea[name], select[name], [contenteditable]';
  document.querySelectorAll(selector).forEach(el => {
    el.addEventListener('input',  () => { trackProgress(); scheduleAutoSave(); });
    el.addEventListener('change', () => { trackProgress(); scheduleAutoSave(); });
    el.addEventListener('blur',   () => scheduleAutoSave());
  });
  document.querySelectorAll('input[type=checkbox]').forEach(cb => {
    cb.addEventListener('change', () => { trackProgress(); scheduleAutoSave(); });
  });
}

// ── KPI sliders ──────────────────────────────────────────────────────────
function wireKpis() {
  document.querySelectorAll('input[type=range][data-kpi]').forEach(r => {
    r.addEventListener('input', () => {
      setKpi(r.dataset.kpi, r.value);
      scheduleAutoSave();
    });
  });
}

// ── Header action buttons ────────────────────────────────────────────────
function wireHeaderButtons() {
  document.getElementById('btnReset')
    ?.addEventListener('click', resetAll);

  document.getElementById('btnSave')
    ?.addEventListener('click', () => {
      saveNow();
      showToast('💾 Canvas guardado localmente');
    });

  document.getElementById('btnExportJSON')
    ?.addEventListener('click', () => {
      exportCanvas();
      showToast('↓ JSON descargado');
    });

  document.getElementById('btnImportJSON')
    ?.addEventListener('click', importJSON);

  document.getElementById('btnWord')
    ?.addEventListener('click', exportWord);

  document.getElementById('btnShare')
    ?.addEventListener('click', async () => {
      const url = await copyShareURL().catch(() => null);
      if (url) {
        document.getElementById('shareURL').value = url;
        document.getElementById('shareModal').classList.add('visible');
        document.getElementById('shareURL').select();
      } else {
        showToast('⚠️ No se pudo copiar al portapapeles');
      }
    });
}

// ── Export panel buttons ─────────────────────────────────────────────────
function wireExportPanel() {
  document.getElementById('btnWordPanel')
    ?.addEventListener('click', exportWord);
  document.getElementById('btnJSONPanel')
    ?.addEventListener('click', exportCanvas);
  document.getElementById('btnPrint')
    ?.addEventListener('click', () => window.print());
}

// ── Share modal ──────────────────────────────────────────────────────────
function wireKeyboard() {
  // Close modal on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.getElementById('shareModal')?.classList.remove('visible');
    }
  });

  // Close modal on overlay click
  document.getElementById('shareModal')?.addEventListener('click', e => {
    if (e.target === e.currentTarget) e.currentTarget.classList.remove('visible');
  });

  document.getElementById('btnCopyURL')?.addEventListener('click', async () => {
    const url = document.getElementById('shareURL')?.value;
    if (url) {
      await navigator.clipboard.writeText(url);
      showToast('🔗 Enlace copiado');
      document.getElementById('shareModal').classList.remove('visible');
    }
  });
  document.getElementById('btnCloseModal')
    ?.addEventListener('click', () => {
      document.getElementById('shareModal').classList.remove('visible');
    });
}
