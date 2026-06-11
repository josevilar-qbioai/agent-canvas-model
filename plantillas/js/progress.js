/**
 * progress.js — Track completion across the 10 canvas blocks
 * Agent Canvas v4 · Cloud Edition
 */

/** Update the progress bar and show/hide the export panel. */
export function trackProgress() {
  const blocks = document.querySelectorAll('.block:not(.b-header)');
  let done = 0;

  blocks.forEach(b => {
    const inputs  = b.querySelectorAll('input[type=text][name], textarea[name], select[name]');
    const ranges  = b.querySelectorAll('input[type=range]');
    const checks  = b.querySelectorAll('input[type=checkbox]:checked');
    const agSel   = b.querySelector('.ag-btn[aria-checked="true"]');
    const segs    = b.querySelectorAll('[contenteditable]');

    const textFilled  = [...inputs].some(i => i.value.trim().length > 2);
    const rangeFilled = [...ranges].some(r => parseInt(r.value) > 0);
    const segFilled   = [...segs].some(s => s.textContent.trim().length > 5);

    if (textFilled || checks.length > 0 || agSel || rangeFilled || segFilled) done++;
  });

  const pct   = blocks.length ? Math.round(done / blocks.length * 100) : 0;
  const fill  = document.getElementById('progressFill');
  const label = document.getElementById('progressLabel');

  if (fill)  fill.style.width = pct + '%';
  if (label) label.textContent = done + ' / ' + blocks.length + ' bloques completados';
  if (fill)  fill.setAttribute('aria-valuenow', pct);

  const panel = document.getElementById('exportPanel');
  if (panel) panel.classList.toggle('visible', pct >= 80);
}
