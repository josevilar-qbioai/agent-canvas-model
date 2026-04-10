# Agent Canvas Model

**🌐 Language / Idioma:** &nbsp; **English** &nbsp;|&nbsp; [Español](README_ES.md)

**AI Agent Design Framework** — An adaptation of the Business Model Canvas for planning, designing, and deploying AI agents in production.

---

## What is the Agent Canvas

The Agent Canvas is a visual 9-block framework that adapts the logic of the Business Model Canvas to AI agent design. It allows technical and business teams to align objectives, define capabilities, and anticipate risks before writing a single line of code.

```
+------------------+------------------+----------------------+------------------+------------------+
| 8. PARTNERS /    | 7. KEY           | 2. VALUE             | 4. RELATIONSHIP /| 1. USER          |
| INTEGRATIONS     | ACTIVITIES       | PROPOSITION          | PERSONALITY      | SEGMENT          |
|                  |                  |                      |                  |                  |
| What systems,    | What skills or   | What problem         | What role does   | Who is this      |
| platforms or     | capabilities     | does it solve?       | the agent have?  | agent for?       |
| APIs does it     | does it have?    |                      | What tone does   |                  |
| connect to?      |                  |                      | it use?          |                  |
|                  +------------------+                      +------------------+                  |
|                  | 6. KEY           |                      | 3. CHANNELS      |                  |
|                  | RESOURCES        |                      |                  |                  |
|                  |                  |                      | How do users     |                  |
|                  | What knowledge   |                      | interact?        |                  |
|                  | or data needed?  |                      |                  |                  |
+------------------+------------------+----------------------+------------------+------------------+
| 9. COST STRUCTURE & RISKS                      | 5. VALUE SOURCES (KPIs)                        |
|                                                 |                                                |
| Development costs, licenses, maintenance        | How do we measure success?                     |
| Technical, business, and regulatory risks       | What metrics show the agent delivers value?    |
+-------------------------------------------------+------------------------------------------------+
```

---

## Why Use It

- **Avoids the most common mistake**: building agents without defining who they're for or why
- **Aligns business and technology**: a shared language between teams
- **Reduces risk**: identifies costs, dependencies, and risks before development begins
- **Accelerates design**: suggested working order (1 to 9) based on where ambiguity is most costly

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
|-- docs/                                  # Spanish docs
|-- ejemplos/                              # Spanish examples
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
| 6 | Key Resources | What knowledge does it need? |
| 7 | Key Activities | What skills does it have? |
| 8 | Partners / Integrations | What systems does it integrate with? |
| 9 | Costs & Risks | What does it cost and what can go wrong? |

> **Golden rule**: if the Value Proposition (block 2) is not clear, do not move forward.

---

## Available Formats

| Format | Recommended Use |
|--------|-----------------|
| **Markdown** (.md) | Technical teams, repo integration, collaborative editing |
| **Interactive HTML — Cloud** | Fill in directly in the browser, focused on cloud agents |
| **Interactive HTML — On-Prem** | Fill in directly in the browser, focused on local model agents |

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
2. **Define the autonomy level** before building (human in the loop vs. autonomous)
3. **Knowledge quality determines agent quality** — audit your data first
4. **Observability from day one** — log, measure, iterate
5. **Regulatory compliance is not a final phase** — it's part of the design (GDPR, EU AI Act)

---

## Contributing

Contributions are welcome. Read [CONTRIBUTING.md](en/CONTRIBUTING.md) to learn how to participate.

---

## License

This project is licensed under the [MIT License](LICENSE). Share it, adapt it, improve it.

---

## Origin

Framework developed by **Jose Antonio Vilar** — [QMetrika Labs](https://qmetrikalabs.com)

**Version**: 2.0 (2025)
