/**
 * storage.js — localStorage persistence + JSON import/export
 * Agent Canvas v4 · Cloud Edition
 */

import { collectState, applyState } from './canvas-core.js';

const STORAGE_KEY = 'agentCanvas_cloud_v4';

let _saveTimer = null;

/** Debounced auto-save to localStorage (300 ms). */
export function scheduleAutoSave() {
  clearTimeout(_saveTimer);
  _saveTimer = setTimeout(saveNow, 300);
}

/** Immediate save to localStorage. Returns true on success. */
export function saveNow() {
  try {
    const data = JSON.stringify(collectState());
    localStorage.setItem(STORAGE_KEY, data);
    _flashSaveIndicator();
    return true;
  } catch (e) {
    console.warn('[canvas] Auto-save failed:', e);
    return false;
  }
}

/** Load saved state from localStorage. Returns true if something was loaded. */
export function loadSaved() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    applyState(JSON.parse(raw));
    return true;
  } catch (e) {
    console.warn('[canvas] Load failed:', e);
    return false;
  }
}

/** Clear localStorage entry and reset canvas. */
export function clearSaved() {
  localStorage.removeItem(STORAGE_KEY);
}

/** Download current state as a .json file. */
export function exportJSON() {
  const data = collectState();
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  _download(blob, 'agent-canvas-v4-cloud.json');
}

/** Open file picker and import a .json canvas file. */
export function importJSON() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json,application/json';
  input.onchange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      applyState(data);
      saveNow();
      // Re-run progress
      document.dispatchEvent(new CustomEvent('canvas:stateLoaded'));
    } catch (err) {
      alert('❌ JSON inválido o formato no compatible.');
    }
  };
  input.click();
}

// ── Private helpers ────────────────────────────────────────────────────────

function _download(blob, filename) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 5000);
}

function _flashSaveIndicator() {
  const el = document.getElementById('saveIndicator');
  if (!el) return;
  el.classList.add('visible');
  setTimeout(() => el.classList.remove('visible'), 1500);
}
