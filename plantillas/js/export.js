/**
 * export.js — Word document (PRD+ADR) and JSON export
 * Agent Canvas v4 · Cloud Edition
 */

import { collectState } from './canvas-core.js';

/** Download canvas as a .json file (delegates to collectState). */
export function exportCanvas() {
  const data = collectState();
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'agent-canvas-v4-cloud.json';
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 5000);
}

/** Generate and download a Word-compatible .doc file (PRD + ADR). */
export function exportWord() {
  const esc = s => String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

  function getCheck(sel) {
    const r = [];
    document.querySelectorAll(sel + ' input[type=checkbox]:checked').forEach(c =>
      r.push(c.parentElement.textContent.trim()));
    return r;
  }
  function getTextInputs(sel) {
    const r = {};
    document.querySelectorAll(sel).forEach(el => {
      const v = el.tagName==='SELECT'
        ? el.options[el.selectedIndex]?.text
        : el.value?.trim();
      if (!v || v==='-- seleccionar --') return;
      const fg = el.closest('.field-group');
      const lbl = fg?.querySelector('.field-label')?.textContent?.trim()
               || el.placeholder?.substring(0,45) || 'Campo';
      r[lbl] = v;
    });
    return r;
  }
  function getSel(sel) {
    const r = [];
    document.querySelectorAll(sel).forEach(el => r.push(el.textContent.trim()));
    return r;
  }
  function ulList(items) {
    if (!items?.length) return '<p style="color:#94A3B8;font-style:italic;font-size:9pt">Sin datos</p>';
    return '<ul style="margin:3pt 0">' + items.map(i=>`<li>${esc(i)}</li>`).join('') + '</ul>';
  }
  function kvTable(obj) {
    const entries = Object.entries(obj||{}).filter(([,v])=>v);
    if (!entries.length) return '<p style="color:#94A3B8;font-style:italic;font-size:9pt">Sin datos</p>';
    return entries.map(([k,v])=>`<p><strong>${esc(k)}:</strong> ${esc(v)}</p>`).join('');
  }
  function sec(title, color) {
    return `<div style="background:${color};color:white;padding:8pt 12pt;margin:20pt 0 10pt;font-size:13pt;font-weight:bold">${title}</div>`;
  }
  function h2(t) {
    return `<h2 style="font-size:13pt;font-weight:bold;color:#1D4ED8;border-bottom:2px solid #DBEAFE;padding-bottom:3pt;margin:16pt 0 6pt">${t}</h2>`;
  }
  function h3(t) {
    return `<h3 style="font-size:9pt;font-weight:bold;color:#64748B;text-transform:uppercase;letter-spacing:.06em;margin:10pt 0 3pt">${t}</h3>`;
  }

  const date = new Date().toLocaleDateString('es-ES',{day:'2-digit',month:'long',year:'numeric'});

  // Seg cards
  const sc  = document.querySelectorAll('.b1 .seg-card');
  const s1n = sc[0]?.querySelector('.seg-name')?.textContent?.trim()||'Segmento primario';
  const s1d = sc[0]?.querySelector('.seg-desc')?.textContent?.trim()||'';
  const s2n = sc[1]?.querySelector('.seg-name')?.textContent?.trim()||'Segmento secundario';
  const s2d = sc[1]?.querySelector('.seg-desc')?.textContent?.trim()||'';

  const b1c = getCheck('.b1'), b1t = getTextInputs('.b1 input[type=text],.b1 textarea');
  const b2c = getCheck('.b2'), b2t = getTextInputs('.b2 input[type=text],.b2 textarea');
  const b3c = getCheck('.b3');
  const b4c = getCheck('.b4'), b4t = getTextInputs('.b4 input[type=text]');
  const b5t = getTextInputs('.b5 input[type=text]');

  const b6c = [...getCheck('.b6'),...getCheck('.b6a'),...getCheck('.b6b')];
  const b6t = Object.assign({},
    getTextInputs('.b6 input[type=text],.b6 textarea'),
    getTextInputs('.b6a input[type=text],.b6a textarea'),
    getTextInputs('.b6b input[type=text],.b6b textarea'));

  const b7c = getCheck('.b7'), b7t = getTextInputs('.b7 textarea');
  const b8c = getCheck('.b8'), b8t = getTextInputs('.b8 input[type=text]');
  const b9c = getCheck('.b9'), b9t = getTextInputs('.b9 input[type=text],.b9 textarea');

  const gc   = document.querySelectorAll('.b10 .guard-card');
  const b10g = Array.from(gc).map(g=>({
    title: g.querySelector('.guard-card-title,.guard-title')?.textContent?.trim()||'Control',
    checks: Array.from(g.querySelectorAll('input[type=checkbox]:checked'))
                 .map(c=>c.parentElement.textContent.trim())
  }));
  const b10t = getTextInputs('.b10 input[type=text],.b10 select');

  // Chips / selected buttons
  const agLvl  = getSel('.b7 .ag-btn.sel').join(', ')||'—';
  const gpuSel = getSel('.b6a .gpu-chip.sel').join(', ')||'—';
  const mdlEl  = document.querySelector('.b6a .model-card.sel');
  const mdlSel = mdlEl ? (mdlEl.querySelector('.model-name')?.textContent||'')+' '+(mdlEl.querySelector('.model-meta')?.textContent||'') : '—';
  const qSel   = getSel('.q-btn.sel').join(', ')||'—';
  const stSel  = getSel('.b8 .gpu-chip.sel').join(', ')||'—';

  const flowPat  = b7c.filter(c=>/Secuencial|Enrutador|Router|ReAct|Multi-agente|Orquestador/i.test(c));
  const agType   = b7c.filter(c=>/RAG|Tool-use|Multi-step|Summ|Full|retriev|chunk/i.test(c));
  const benefits = b2c.filter(c=>/↓|⚡|✓|📈|💰|Esfuerzo|Inmediatez|Reducc|Product|Ahorro|Privac|Latencia|Soberan/i.test(c));
  const onpremR  = b2c.filter(c=>/Normativa|cloud|prem|Coste|Soberan|Latencia|volumen|Privac/i.test(c));
  const llmPlat  = b8c.filter(c=>/Azure|OpenAI|Google|AWS|Vertex|Bedrock/i.test(c));
  const fworks   = b8c.filter(c=>/LangChain|LlamaIndex|Copilot|Semantic|AutoGen|CrewAI|MCP|Haystack|propio/i.test(c));
  const dataSrc  = b8c.filter(c=>/SharePoint|Confluence|Zendesk|Power|APIs|NAS|BBDD|SQL|LDAP|intranet/i.test(c));
  const obsrv    = b8c.filter(c=>/LangSmith|Foundry|Prometheus|Grafana/i.test(c));
  const network  = b8c.filter(c=>/Air-gap|Intranet|VPN|DMZ|HTTPS|WebSocket|gRPC/i.test(c));
  const risks    = b9c.filter(c=>/Alucinac|Vendor|Escal|Disponib|Obsolesc|Actualiz|SPOF|Capacid|lock/i.test(c));
  const regs     = b9c.filter(c=>/GDPR|AI Act|ENS|ISO|normativa|RGPD/i.test(c));

  const doc = `<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
<head><meta charset="utf-8"><title>Agent Design Document</title>
<style>body{font-family:Calibri,Arial,sans-serif;font-size:11pt;color:#1E293B;line-height:1.5}p{margin:3pt 0}ul{margin:4pt 0;padding-left:20pt}li{margin:2pt 0}table{border-collapse:collapse;width:100%;margin:8pt 0}td,th{border:1px solid #E2E6F0;padding:5pt 8pt;font-size:10pt;vertical-align:top}th{background:#F8FAFC;font-weight:700}</style>
</head><body>
<p style="font-size:22pt;font-weight:700;color:#0F1D3B;margin:0 0 4pt">Agent Design Document</p>
<p style="color:#94A3B8;font-size:9pt">Agent Canvas v3 · ${date}</p>
<hr style="border:none;border-top:3px solid #2563EB;margin:10pt 0">
${sec('PARTE I — PRD: PRODUCT REQUIREMENTS DOCUMENT','#1D4ED8')}
${h2('1. Segmento de Usuarios')}
<table><tr><th>Segmento</th><th>Descripción</th></tr>
<tr><td><strong>★ ${esc(s1n)}</strong></td><td>${esc(s1d)}</td></tr>
<tr><td>${esc(s2n)}</td><td>${esc(s2d)}</td></tr></table>
${b1c.length?h3('Control de Acceso / RBAC')+ulList(b1c):''}
${Object.keys(b1t).length?h3('Jobs-to-be-done & Barreras')+kvTable(b1t):''}
${h2('2. Problema y Propuesta de Valor')}
${kvTable(b2t)}
${benefits.length?h3('Beneficios clave')+ulList(benefits):''}
${onpremR.length?h3('Justificación On-Prem')+ulList(onpremR):''}
${h2('3. Canales de Entrega')}
${ulList(b3c)}
${h2('4. Personalidad y Experiencia de Usuario')}
${kvTable(b4t)}
${b4c.length?h3('Controles de experiencia')+ulList(b4c):''}
${h2('5. KPIs y Métricas de Éxito')}
${kvTable(b5t)}
${sec('PARTE II — ADR: ARCHITECTURE DECISION RECORD','#0F172A')}
${h2('6. Recursos e Infraestructura')}
${gpuSel!=='—'?`<p><strong>GPU:</strong> ${esc(gpuSel)}</p>`:''}
${mdlSel!=='—'?`<p><strong>Modelo LLM:</strong> ${esc(mdlSel.trim())}</p>`:''}
${qSel!=='—'?`<p><strong>Cuantización:</strong> ${esc(qSel)}</p>`:''}
${b6c.length?h3('Tecnologías y datos')+ulList(b6c):''}
${Object.keys(b6t).length?kvTable(b6t):''}
${h2('7. Actividades Clave — Skills & Flujo de Control')}
<p><strong>Nivel de agencia:</strong> ${esc(agLvl)}</p>
${flowPat.length?h3('Patrón de flujo de control')+ulList(flowPat):''}
${agType.length?h3('Tipo de agencia / Contexto')+ulList(agType):''}
${Object.keys(b7t).length?h3('Skills definidas')+kvTable(b7t):''}
${h2('8. Socios, Integraciones y Protocolo')}
${llmPlat.length?h3('Plataforma LLM')+ulList(llmPlat):''}
${stSel!=='—'?`<p><strong>Serving stack:</strong> ${esc(stSel)}</p>`:''}
${fworks.length?h3('Orquestación / Framework')+ulList(fworks):''}
${dataSrc.length?h3('Fuentes de datos')+ulList(dataSrc):''}
${obsrv.length?h3('Observabilidad')+ulList(obsrv):''}
${network.length?h3('Red / Conectividad')+ulList(network):''}
${Object.keys(b8t).length?kvTable(b8t):''}
${h2('9. Costes, Riesgos y Cumplimiento')}
${Object.keys(b9t).length?kvTable(b9t):''}
${risks.length?h3('Riesgos identificados')+ulList(risks):''}
${regs.length?h3('Normativa aplicable')+ulList(regs):''}
${h2('10. Guardarraíles')}
<table><tr><th>Categoría</th><th>Controles activos</th></tr>
${b10g.filter(g=>g.checks.length).map(g=>`<tr><td>${esc(g.title)}</td><td>${g.checks.map(c=>`• ${esc(c)}`).join('<br>')}</td></tr>`).join('')}
</table>
${Object.keys(b10t).length?kvTable(b10t):''}
<hr style="border:none;border-top:1px solid #E2E6F0;margin:20pt 0">
<p style="color:#94A3B8;font-size:9pt">Generado automáticamente desde Agent Canvas v3 — ${date}</p>
</body></html>`;

  const blob = new Blob(['﻿', doc], {type:'application/msword'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'agent-design-document.doc';
  a.click();
}
// ─── END WORD EXPORT ────────────────────────────────────────────

