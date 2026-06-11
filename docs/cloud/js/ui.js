/**
 * ui.js — UI interactions: block toggle, agency chips, KPIs, reset
 * Agent Canvas v4 · Cloud Edition
 */

import { trackProgress } from './progress.js';
import { clearSaved }    from './storage.js';

// ── Block toggle (collapsible) ────────────────────────────────────────────
export function toggleBlock(el) {
  const expanded = el.classList.toggle('active');
  el.setAttribute('aria-expanded', String(expanded));
  if (expanded) el.querySelector('.field-input, [contenteditable]')?.focus();
}

// ── Agency / control-flow chip selection ────────────────────────────────
export function selAg(btn) {
  const group = btn.closest('.agencia-select, .control-flow-select');
  if (!group) return;
  group.querySelectorAll('.ag-btn').forEach(b => {
    b.classList.remove('sel');
    b.setAttribute('aria-checked', 'false');
  });
  btn.classList.add('sel');
  btn.setAttribute('aria-checked', 'true');
  trackProgress();
}

// ── KPI sliders ──────────────────────────────────────────────────────────
export function setKpi(n, val) {
  const bar  = document.getElementById('kpi' + n + 'bar');
  const pct  = document.getElementById('kpi' + n + 'pct');
  if (bar) bar.style.width = val + '%';
  if (pct) pct.textContent = val + '%';
  trackProgress();
}

// ── Reset all ────────────────────────────────────────────────────────────
export function resetAll() {
  if (!confirm('¿Reiniciar el canvas? Se perderán todos los datos locales.')) return;

  document.querySelectorAll('input[type=text][name], textarea[name], select[name]')
    .forEach(el => { el.value = ''; });

  document.querySelectorAll('input[type=checkbox]').forEach(cb => { cb.checked = false; });

  document.querySelectorAll('input[type=range]').forEach(r => {
    r.value = 0;
    const n = r.dataset.kpi;
    if (n) setKpi(n, 0);
  });

  document.querySelectorAll('.ag-btn').forEach(b => {
    b.classList.remove('sel');
    b.setAttribute('aria-checked', 'false');
  });

  document.querySelectorAll('.seg-name').forEach(el => { el.textContent = el.dataset.default || 'Segmento primario'; });
  document.querySelectorAll('.seg-desc').forEach(el => { el.textContent = el.dataset.default || 'Define el usuario principal...'; });

  document.querySelectorAll('.block').forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-expanded', 'false');
  });

  document.getElementById('canvasName') && (document.getElementById('canvasName').value = '');
  document.getElementById('exportPanel')?.classList.remove('visible');

  clearSaved();
  trackProgress();
}

// ── Toast notification ────────────────────────────────────────────────────
export function showToast(msg, duration = 3000) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.setAttribute('role', 'status');
  toast.setAttribute('aria-live', 'polite');
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), duration);
}
