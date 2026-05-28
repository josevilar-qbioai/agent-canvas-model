# Agent Canvas Model

**🌐 Language / Idioma:** &nbsp; **English** &nbsp;|&nbsp; [Español](README_ES.md)

**AI Agent Design Framework** — An adaptation of the Business Model Canvas for planning, designing, and deploying AI agents in production.

---

## What's New in v3.0

| Feature | Where |
|---------|-------|
| **Control Flow Pattern** — Sequential, Router, ReAct Loop, Multi-agent | Block 7 |
| **MCP (Model Context Protocol)** checkbox | Block 8 |
| **Immutable audit log / Event Sourcing** checkbox | Block 10 |
| **Free-text GPU & Model fields** — AMD Instinct, Apple Silicon, any emerging model | On-Prem Block 6a |
| **Simplified Block 2** — Benefits and Impact Metric merged into one section | Cloud Block 2 |
| **One-click Word export** — generates a structured PRD + ADR document from canvas data | Both editions |

---

## What is the Agent Canvas

The Agent Canvas is a visual **10-block framework** that adapts the logic of the Business Model Canvas to AI agent design. It allows technical and business teams to align objectives, define capabilities, and anticipate risks before writing a single line of code.

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
| Development costs, licenses, maintenance        | How do we measure success?                     |
| Technical, business, and regulatory risks       | What metrics show the agent delivers value?    |
+-------------------------------------------------+------------------------------------------------+
|                    10. GUARDRAILS — Security · Quality · Ethics · Operational                    |
|                                                                                                  |
| Prompt injection filters, RAG confidence thresholds, GDPR, EU AI Act, event sourcing            |
+--------------------------------------------------------------------------------------------------+
```

---

## Why Use It

- **Avoids the most common mistake**: building agents without defining who they're for or why
- **Aligns business and technology**: a shared language between teams
- **Reduces risk**: identifies costs, dependencies, and risks before development begins
- **Accelerates design**: suggested working order (1 to 10) based on where ambiguity is most costly
- **Exports documentation**: generate a PRD + ADR Word document directly from the canvas

---

## Repository Contents

```
agent-canvas-model/
|-- README.md                              # This file (English)
|-- README_ES.md                           # Spanish version
|-- LICENSE                                # MIT License
|-- CONTRIBUTING.md                        # How to contribute
|-- agent-canvas-model.skill               # Installable skill for Claude Desktop
|-- plantillas/                            # Spanish templates
|   |-- Agent_Canvas_Template.md           # Editable Markdown template
|   |-- canvas_cloud.html                  # Interactive canvas — Cloud Edition v3
|   |-- canvas_onprem.html                 # Interactive canvas — On-Prem Edition v3
|-- docs/
|   |-- guia-mejores-practicas.md          # Best practices guide (ES)
|   |-- orden-de-trabajo.md                # Suggested working order (ES)
|-- ejemplos/
|   |-- ejemplo-agente-soporte-IT.md       # Example: IT support agent
|   |-- ejemplo-agente-onboarding.md       # Example: onboarding agent
|-- en/                                    # English templates, docs & examples
|   |-- plantillas/
|   |-- docs/
|   |-- ejemplos/
```

---

## Skill for Claude Desktop

The repository includes an **installable skill** (`agent-canvas-model.skill`) for [Claude Desktop (Cowork)](https://claude.ai). Once installed, Claude automatically activates the framework whenever a user asks to design or plan an AI agent.

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

## Available Formats

| Format | Recommended Use |
|--------|-----------------|
| **Markdown** (.md) | Technical teams, repo integration, collaborative editing |
| **Interactive HTML — Cloud** | Browser-based, cloud agents (Azure, AWS, GCP) |
| **Interactive HTML — On-Prem** | Browser-based, local model agents (Ollama, vLLM, air-gapped) |

Both HTML editions include **one-click Word export** that generates a structured document with Part I (PRD: blocks 1–5) and Part II (ADR: blocks 6–10) automatically populated from what you've filled in.

---

## How to Get Started

1. **Choose your format** from the `en/plantillas/` folder
2. **Start with block 1** (User Segment) and **block 2** (Value Proposition)
3. **Validate with real users** before moving to the remaining blocks
4. **Review and update** the canvas every 2–3 weeks during development
5. Read the [best practices guide](en/docs/best-practices-guide.md) to bring your agent to production

---

## Best Practices (Summary)

1. **Start narrow and deep** — an excellent agent in one use case beats a mediocre one trying to do everything
2. **Define the autonomy level** before building — and define the **control flow pattern** (Sequential pipeline, Router, ReAct Loop, or Multi-agent)
3. **Knowledge quality determines agent quality** — audit your data first
4. **Observability from day one** — log, measure, iterate. In regulated environments, add immutable event sourcing
5. **Regulatory compliance is not a final phase** — it's part of the design (GDPR, EU AI Act)
6. **Design your MCP layer** — decide early whether to hardcode tools or expose data sources via independent MCP servers

---

## Contributing

Contributions are welcome. Read [CONTRIBUTING.md](en/CONTRIBUTING.md) to learn how to participate.

---

## License

This project is licensed under the [MIT License](LICENSE). Share it, adapt it, improve it.

---

## Origin

Framework developed by **Jose Antonio Vilar** — QMetrika Labs

**Version**: 3.0 (2026)
