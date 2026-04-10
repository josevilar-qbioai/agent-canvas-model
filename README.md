# Agent Canvas Model

**🌐 Language / Idioma:** &nbsp; **English** &nbsp;|&nbsp; [Español](#modelo-agent-canvas)

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
|-- README.md                              # This file (bilingual)
|-- LICENSE                                # MIT License
|-- CONTRIBUTING.md                        # How to contribute
|-- agent-canvas-model.skill               # Installable skill for Claude Desktop
|-- plantillas/                            # Spanish templates
|-- docs/                                  # Spanish docs
|-- ejemplos/                              # Spanish examples
|-- en/                                    # English version
|   |-- README.md
|   |-- CONTRIBUTING.md
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

Contributions are welcome. Read [en/CONTRIBUTING.md](en/CONTRIBUTING.md) to learn how to participate.

---

## License

This project is licensed under the [MIT License](LICENSE). Share it, adapt it, improve it.

---

## Origin

Framework developed by **Jose Antonio Vilar** — [QMetrika Labs](https://qmetrikalabs.com)

**Version**: 2.0 (2025)

---
---

# Modelo Agent Canvas

**🌐 Language / Idioma:** &nbsp; [English](#agent-canvas-model) &nbsp;|&nbsp; **Español**

**Framework de diseño de agentes IA** — Adaptación del Business Model Canvas para planificar, diseñar y desplegar agentes de inteligencia artificial en producción.

---

## Qué es el Agent Canvas

El Agent Canvas es un framework visual de 9 bloques que adapta la lógica del Business Model Canvas al diseño de agentes IA. Permite a equipos técnicos y de negocio alinear objetivos, definir capacidades y anticipar riesgos antes de escribir una sola línea de código.

```
+------------------+------------------+----------------------+------------------+------------------+
| 8. SOCIOS /      | 7. ACTIVIDADES   | 2. PROPUESTA DE      | 4. RELACION /    | 1. SEGMENTO DE   |
| INTEGRACIONES    | CLAVE            | VALOR                | PERSONALIDAD     | USUARIOS         |
|                  |                  |                      |                  |                  |
| Que sistemas,    | Que skills o     | Que problema         | Que rol tiene    | Para quien es    |
| plataformas o    | capacidades      | resuelve?            | el agente?       | este agente?     |
| APIs conecta?    | tiene?           |                      | Que tono usa?    |                  |
|                  +------------------+                      +------------------+                  |
|                  | 6. RECURSOS      |                      | 3. CANALES       |                  |
|                  | CLAVE            |                      |                  |                  |
|                  |                  |                      | Como interactuan |                  |
|                  | Que conocimiento |                      | los usuarios?    |                  |
|                  | o datos necesita?|                      |                  |                  |
+------------------+------------------+----------------------+------------------+------------------+
| 9. ESTRUCTURA DE COSTES Y RIESGOS              | 5. FUENTES DE VALOR (KPIs)                     |
|                                                 |                                                |
| Costes de desarrollo, licencias, mantenimiento  | Como medimos el exito?                         |
| Riesgos tecnicos, de negocio, normativos        | Que metricas indican que el agente aporta?     |
+-------------------------------------------------+------------------------------------------------+
```

---

## Por qué usarlo

- **Evita el error más común**: construir agentes sin definir para quién ni por qué
- **Alinea negocio y tecnología**: un lenguaje común entre equipos
- **Reduce riesgos**: identifica costes, dependencias y riesgos antes de desarrollar
- **Acelera el diseño**: orden sugerido de trabajo (1 a 9) basado en dónde la ambigüedad tiene más coste

---

## Orden sugerido de trabajo

| Paso | Bloque | Pregunta clave |
|------|--------|----------------|
| 1 | Segmento de Usuarios | ¿Para quién es este agente? |
| 2 | Propuesta de Valor | ¿Qué problema resuelve? |
| 3 | Canales | ¿Cómo llega al usuario? |
| 4 | Relación / Personalidad | ¿Qué tono y personalidad tiene? |
| 5 | KPIs | ¿Cómo medimos el éxito? |
| 6 | Recursos Clave | ¿Qué conocimiento necesita? |
| 7 | Actividades Clave | ¿Qué skills tiene? |
| 8 | Socios / Integraciones | ¿Qué sistemas integra? |
| 9 | Costes y Riesgos | ¿Qué cuesta y qué puede fallar? |

> **Regla de oro**: si la Propuesta de Valor (bloque 2) no está clara, no sigas adelante.

---

## Cómo empezar

1. **Elige tu formato** de la carpeta `plantillas/`
2. **Empieza por el bloque 1** (Segmento de Usuarios) y el **bloque 2** (Propuesta de Valor)
3. **Valida con usuarios reales** antes de avanzar al resto de bloques
4. **Revisa y actualiza** el canvas cada 2-3 semanas durante el desarrollo
5. Lee la [guía de mejores prácticas](docs/guia-mejores-practicas.md) para llevar tu agente a producción

---

## Licencia

Este proyecto está bajo la [Licencia MIT](LICENSE). Compártelo, adáptalo, mejóralo.

---

## Origen

Framework desarrollado por **Jose Antonio Vilar** — [QMetrika Labs](https://qmetrikalabs.com)

**Versión**: 2.0 (2025)
