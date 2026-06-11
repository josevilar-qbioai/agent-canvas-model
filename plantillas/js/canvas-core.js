/**
 * canvas-core.js — Central state: collect from DOM, apply to DOM
 * Agent Canvas v4 · Cloud Edition
 */

export const VERSION  = 4;
export const EDITION  = 'cloud';

// ── COLLECT ──────────────────────────────────────────────────────────────────
/** Serialise the full canvas state from the current DOM. */
export function collectState() {
  const state = {
    version:   VERSION,
    edition:   EDITION,
    savedAt:   new Date().toISOString(),
    meta: { name: document.getElementById('canvasName')?.value || '' },
    blocks: {}
  };

  document.querySelectorAll('[data-block]').forEach(block => {
    const id = block.dataset.block;
    const bState = { inputs: {}, checks: [], selected: null };

    // Named inputs / textareas / selects
    block.querySelectorAll('input[name]:not([type=checkbox]):not([type=range]), textarea[name], select[name]')
      .forEach(el => { bState.inputs[el.name] = el.value; });

    // KPI ranges (data-kpi on range, data-kpi-label on text input)
    block.querySelectorAll('input[type=range][data-kpi]').forEach(r => {
      bState.inputs['kpi_range_' + r.dataset.kpi] = r.value;
    });
    block.querySelectorAll('input[data-kpi-label]').forEach(r => {
      bState.inputs['kpi_label_' + r.dataset.kpiLabel] = r.value;
    });

    // Checked checkboxes — keyed by value attribute
    block.querySelectorAll('input[type=checkbox]:checked[value]')
      .forEach(cb => bState.checks.push(cb.value));

    // Agency/chip selected
    const sel = block.querySelector('.ag-btn[aria-checked="true"]');
    if (sel) bState.selected = sel.textContent.trim();

    // Contenteditable segments
    const segs = block.querySelectorAll('.seg-card');
    if (segs.length) {
      bState.segments = [...segs].map(s => ({
        name: s.querySelector('.seg-name')?.textContent?.trim() || '',
        desc: s.querySelector('.seg-desc')?.textContent?.trim() || ''
      }));
    }

    state.blocks[id] = bState;
  });

  return state;
}

// ── APPLY ─────────────────────────────────────────────────────────────────────
/** Populate the DOM from a saved state object. */
export function applyState(state) {
  if (!state?.blocks) return;

  // Canvas name
  const nameEl = document.getElementById('canvasName');
  if (nameEl && state.meta?.name) nameEl.value = state.meta.name;

  Object.entries(state.blocks).forEach(([id, bState]) => {
    const block = document.querySelector(`[data-block="${id}"]`);
    if (!block) return;

    // Text inputs / textareas / selects
    Object.entries(bState.inputs || {}).forEach(([name, val]) => {
      if (name.startsWith('kpi_range_')) {
        const n = name.replace('kpi_range_', '');
        const r = block.querySelector(`input[type=range][data-kpi="${n}"]`);
        if (r) { r.value = val; r.dispatchEvent(new Event('input')); }
        return;
      }
      if (name.startsWith('kpi_label_')) {
        const n = name.replace('kpi_label_', '');
        const r = block.querySelector(`input[data-kpi-label="${n}"]`);
        if (r) r.value = val;
        return;
      }
      const el = block.querySelector(`[name="${name}"]`);
      if (el) el.value = val;
    });

    // Checkboxes
    block.querySelectorAll('input[type=checkbox][value]').forEach(cb => {
      cb.checked = (bState.checks || []).includes(cb.value);
    });

    // Agency chip
    if (bState.selected) {
      block.querySelectorAll('.ag-btn').forEach(btn => {
        const checked = btn.textContent.trim() === bState.selected;
        btn.classList.toggle('sel', checked);
        btn.setAttribute('aria-checked', String(checked));
      });
    }

    // Segments
    if (bState.segments) {
      block.querySelectorAll('.seg-card').forEach((card, i) => {
        if (!bState.segments[i]) return;
        const name = card.querySelector('.seg-name');
        const desc = card.querySelector('.seg-desc');
        if (name) name.textContent = bState.segments[i].name;
        if (desc) desc.textContent = bState.segments[i].desc;
      });
    }
  });
}
