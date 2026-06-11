/**
 * share.js — URL-hash based canvas sharing (no backend needed)
 * Agent Canvas v4 · Cloud Edition
 *
 * Encoding: JSON → UTF-8 → base64 (URL-safe)
 * Hash format: #canvas=<base64>
 */

import { collectState, applyState } from './canvas-core.js';

const HASH_PREFIX = '#canvas=';

/** Generate a share URL containing the full canvas state in the hash. */
export function generateShareURL() {
  const state  = collectState();
  const json   = JSON.stringify(state);
  const b64    = _toBase64(json);
  const url    = `${location.origin}${location.pathname}${HASH_PREFIX}${b64}`;
  return url;
}

/**
 * Read the URL hash and apply state if a canvas payload is found.
 * Returns true if a canvas was loaded from the hash.
 */
export function loadFromHash() {
  const hash = location.hash;
  if (!hash.startsWith(HASH_PREFIX)) return false;
  try {
    const b64  = hash.slice(HASH_PREFIX.length);
    const json = _fromBase64(b64);
    const data = JSON.parse(json);
    applyState(data);
    // Clear hash so reloads don't re-import
    history.replaceState(null, '', location.pathname + location.search);
    return true;
  } catch (e) {
    console.warn('[canvas] Invalid share URL:', e);
    return false;
  }
}

/** Copy share URL to clipboard; resolves when done. */
export async function copyShareURL() {
  const url = generateShareURL();
  await navigator.clipboard.writeText(url);
  return url;
}

// ── Private helpers ────────────────────────────────────────────────────────

function _toBase64(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, p1) =>
    String.fromCharCode(parseInt(p1, 16))
  )).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function _fromBase64(b64) {
  const padded = b64.replace(/-/g, '+').replace(/_/g, '/');
  const bin    = atob(padded + '=='.slice((padded.length % 4) || 4));
  return decodeURIComponent(bin.split('').map(c =>
    '%' + c.charCodeAt(0).toString(16).padStart(2, '0')
  ).join(''));
}
