# Agent Canvas Model

**🌐 Language / Idioma:** &nbsp; **English** &nbsp;|&nbsp; [Español](README_ES.md)

**AI Agent Design Framework** — An adaptation of the Business Model Canvas for planning, designing, and deploying AI agents in production.

🚀 **[Live demo → josevilar-qbioai.github.io/agent-canvas-model](https://josevilar-qbioai.github.io/agent-canvas-model)**

---

## Three Canvases

| Canvas | Accent | Use case |
|--------|--------|----------|
| [**Cloud Edition**](https://josevilar-qbioai.github.io/agent-canvas-model/cloud/) | Indigo | Agents on Azure, AWS, GCP, Copilot Studio, LangChain, managed APIs |
| [**On-Prem Edition**](https://josevilar-qbioai.github.io/agent-canvas-model/onprem/) | Emerald | Local models (Ollama, vLLM, LM Studio), air-gap, high-privacy environments |
| [**MCP Canvas**](https://josevilar-qbioai.github.io/agent-canvas-model/mcp/) | Cyan | Model Context Protocol layer: servers, transport, security, observability |

All three share a unified **QMetrika Labs design system**: Inter + JetBrains Mono, dark navy base, per-canvas accent color, WCAG 2.2 AA.

---

## What's New in v4.0

| Feature | Detail |
|---------|--------|
| **MCP Architecture Canvas** | New dedicated canvas for designing the MCP layer |
| **Standalone HTML** | Each canvas is a single self-contained file — no server, works via `file://` |
| **Unified design system** | Common branding, Inter font, dark theme, per-canvas accent |
| **localStorage auto-save** | Changes saved automatically with 300 ms debounce |
| **URL hash sharing** | Share full canvas state via `#canvas=`, `#onprem=`, `#mcp=` encoded hash |
| **JSON import / export** | Full state serialization for backup and handoff |
| **Word export (PRD + ADR)** | One-click structured document from canvas data |
| **GitHub Pages** | All three canvases live at a public URL |
| **WCAG 2.2 AA** | Skip link, `aria-*`, `role=`, `focus-visible`, screen-reader labels |

---

## What is the Agent Canvas

A visual **10-block framework** that adapts Business Model Canvas logic to AI agent design. It lets technical and business teams align objectives, define capabilities, and anticipate risks before writing a single line of code.

```
+------------------+------------------+----------------------+------------------+------------------+
| 8. PARTNERS /    | 7. KEY           | 2. VALUE             | 4. RELATIONSHIP /| 1. USER          |
| INTEGRATIONS     | ACTIVITIES       | PROPOSITION          | PERSONALITY      | SEGMENT          |
|                  |                  |                      |                  |                  |
| Systems, APIs,   | Skills, control  | What problem         | Role, tone,      | Who is this      |
| MCP servers      | flow pattern     | does it solve?       | fallback         | agent for?       |
|                  +------------------+                      +------------------+                  |
|                  | 6. KEY           |                      | 3. CHANNELS      |                  |
|                  | RESOURCES        |                      |                  |                  |
|                  |                  |                      | How do users     |                  |
|                  | Data, models,    |                      | interact?        |                  |
|                  | hardware         |                      |                  |                  |
+------------------+------------------+----------------------+------------------+------------------+
| 9. COST STRUCTURE & RISKS                      | 5. VALUE SOURCES (KPIs)                        |
|                                                 |                                                |
| Development, licenses, maintenance, TCO         | How do we measure success?                     |
| Technical, business, and regulatory risks       | What metrics show the agent delivers value?    |
+-------------------------------------------------+------------------------------------------------+
|                    10. GUARDRAILS — Security · Quality · Ethics · Operational                    |
|                                                                                                  |
| Prompt injection filters, RAG confidence, GDPR, EU AI Act, event sourcing                       |
+--------------------------------------------------------------------------------------------------+
```

---

## Why Use It

- **Avoids the most common mistake**: building agents without defining who they're for or why
- **Aligns business and technology**: a shared language between teams
- **Reduces risk**: identifies costs, dependencies, and risks before development begins
- **Accelerates design**: suggested working order (1→10) based on where ambiguity is most costly
- **Exports documentation**: PRD + ADR Word document generated directly from canvas data

---

## Repository Structure

```
agent-canvas-model/
├── README.md                               # This file (English)
├── README_ES.md                            # Spanish version
├── LICENSE                                 # MIT License
├── CONTRIBUTING.md                         # How to contribute
├── agent-canvas-model.skill               # Installable skill for Claude Desktop
│
├── docs/                                   # GitHub Pages root
│   ├── index.html                          # Landing page (dark, 3 canvas cards)
│   ├── .nojekyll                           # Disables Jekyll processing
│   ├── cloud/index.html                    # Cloud Edition (standalone)
│   ├── onprem/index.html                   # On-Prem Edition (standalone)
│   ├── mcp/index.html                      # MCP Canvas (standalone)
│   ├── guia-mejores-practicas.md           # Best practices guide (ES)
│   └── orden-de-trabajo.md                 # Suggested working order (ES)
│
├── plantillas/                             # Source templates (Spanish)
│   ├── Agent_Canvas_Template.md            # Editable Markdown template
│   ├── canvas_cloud_v4_standalone.html     # Cloud Edition v4 (standalone)
│   ├── canvas_onprem_v4_standalone.html    # On-Prem Edition v4 (standalone)
│   ├── canvas_mcp.html                     # MCP Canvas v1 (standalone)
│   ├── canvas_cloud_v4.html                # Cloud Edition v4 (modular, ES6)
│   ├── css/canvas-cloud.css                # Shared CSS (modular version)
│   └── js/                                 # ES6 modules (modular version)
│
├── ejemplos/                               # Usage examples
│   ├── ejemplo-agente-soporte-IT.md
│   └── ejemplo-agente-onboarding.md
│
└── en/                                     # English templates and docs
```

---

## Skill for Claude Desktop

The repository includes an **installable skill** (`agent-canvas-model.skill`) for [Claude Desktop (Cowork)](https://claude.ai). Once installed, Claude automatically activates the framework whenever you ask to design or plan an AI agent.

**How to install**: download `agent-canvas-model.skill` and double-click it or drag it into Claude Desktop.

---

## Suggested Working Order

| Step | Block | Key Question |
|------|-------|--------------|
| 1 | User Segment | Who is this agent for? |
| 2 | Value Proposition | What problem does it solve? |
| 3 | Channels | How does it reach the user? |
| 4 | Relationship / Personality | What tone and personality does it have? |
| 5 | KPIs | How do we measure success? |
| 6 | Key Resources | What knowledge and hardware does it need? |
| 7 | Key Activities | What skills and control flow does it have? |
| 8 | Partners / Integrations | What systems and MCP servers does it connect to? |
| 9 | Costs & Risks | What does it cost and what can go wrong? |
| 10 | Guardrails | What controls ensure safe operation? |

> **Golden rule**: if the Value Proposition (block 2) is not clear, do not move forward.

---

## Best Practices (Summary)

1. **Start narrow and deep** — an excellent agent in one use case beats a mediocre one trying to do everything
2. **Define the autonomy level before building** — and pick a **control flow pattern**: Sequential, Router, ReAct Loop, or Multi-agent
3. **Knowledge quality determines agent quality** — audit your data sources first
4. **Observability from day one** — log, measure, iterate; add immutable event sourcing in regulated environments
5. **Regulatory compliance is design, not a final phase** — GDPR, EU AI Act built in from block 1
6. **Design your MCP layer explicitly** — use the MCP Canvas to decide transport, server inventory, auth, and observability

---

## Contributing

Contributions are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md).

---

## License

[MIT License](LICENSE) — share it, adapt it, improve it.

---

## Origin

Developed by **Jose Antonio Vilar** — QMetrika Labs — qmetrika[at]proton.me

**Version**: 4.0 (2026)
