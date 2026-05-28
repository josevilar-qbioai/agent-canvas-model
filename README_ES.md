# Agent Canvas Model

**🌐 Language / Idioma:** &nbsp; [English](README.md) &nbsp;|&nbsp; **Español**

**Framework de diseño de agentes IA** — Adaptación del Business Model Canvas para planificar, diseñar y desplegar agentes de inteligencia artificial en producción.

---

## Novedades en v3.0

| Novedad | Dónde |
|---------|-------|
| **Patrón de Flujo de Control** — Secuencial, Enrutador, ReAct Loop, Multi-agente | Bloque 7 |
| **MCP (Model Context Protocol)** — checkbox explícito | Bloque 8 |
| **Registro inmutable / Event Sourcing** — checkbox de auditoría | Bloque 10 |
| **Campos libres GPU y Modelo** — AMD Instinct, Apple Silicon, cualquier arquitectura emergente | On-Prem Bloque 6a |
| **Bloque 2 simplificado** — Beneficios y Métrica de impacto fusionados en una sola sección | Cloud Bloque 2 |
| **Exportación a Word con un clic** — genera un documento PRD + ADR estructurado desde los datos del canvas | Ambas ediciones |

---

## Qué es el Agent Canvas

El Agent Canvas es un framework visual de **10 bloques** que adapta la lógica del Business Model Canvas al diseño de agentes IA. Permite a equipos técnicos y de negocio alinear objetivos, definir capacidades y anticipar riesgos antes de escribir una sola línea de código.

```
+------------------+------------------+----------------------+------------------+------------------+
| 8. SOCIOS /      | 7. ACTIVIDADES   | 2. PROPUESTA DE      | 4. RELACION /    | 1. SEGMENTO DE   |
| INTEGRACIONES    | CLAVE            | VALOR                | PERSONALIDAD     | USUARIOS         |
|                  |                  |                      |                  |                  |
| Sistemas, APIs,  | Skills, patrón   | Qué problema         | Rol, tono,       | Para quién es    |
| servidores MCP   | de flujo         | resuelve?            | fallback         | este agente?     |
|                  +------------------+                      +------------------+                  |
|                  | 6. RECURSOS      |                      | 3. CANALES       |                  |
|                  | CLAVE            |                      |                  |                  |
|                  |                  |                      | Cómo interactúan |                  |
|                  | Datos, modelos,  |                      | los usuarios?    |                  |
|                  | hardware         |                      |                  |                  |
+------------------+------------------+----------------------+------------------+------------------+
| 9. ESTRUCTURA DE COSTES Y RIESGOS              | 5. FUENTES DE VALOR (KPIs)                     |
|                                                 |                                                |
| Costes de desarrollo, licencias, mantenimiento  | Cómo medimos el éxito?                         |
| Riesgos técnicos, de negocio, normativos        | Qué métricas indican que el agente aporta?     |
+-------------------------------------------------+------------------------------------------------+
|               10. GUARDARRAÍLES — Seguridad · Calidad · Ético · Operacional                     |
|                                                                                                  |
| Filtros prompt injection, umbral confianza RAG, GDPR, EU AI Act, event sourcing                 |
+--------------------------------------------------------------------------------------------------+
```

---

## Por qué usarlo

- **Evita el error más común**: construir agentes sin definir para quién ni por qué
- **Alinea negocio y tecnología**: un lenguaje común entre equipos
- **Reduce riesgos**: identifica costes, dependencias y riesgos antes de desarrollar
- **Acelera el diseño**: orden sugerido de trabajo (1 a 10) basado en dónde la ambigüedad tiene más coste
- **Genera documentación**: exporta un documento Word con PRD + ADR directamente desde el canvas

---

## Contenido del repositorio

```
agent-canvas-model/
|-- README.md                              # Versión en inglés
|-- README_ES.md                           # Este archivo
|-- LICENSE                                # Licencia MIT
|-- CONTRIBUTING.md                        # Cómo contribuir
|-- agent-canvas-model.skill               # Skill instalable para Claude Desktop
|-- plantillas/
|   |-- Agent_Canvas_Template.md           # Plantilla editable en Markdown
|   |-- canvas_cloud.html                  # Canvas interactivo - Cloud Edition v3
|   |-- canvas_onprem.html                 # Canvas interactivo - On-Prem Edition v3
|-- docs/
|   |-- guia-mejores-practicas.md          # Guía completa de mejores prácticas
|   |-- orden-de-trabajo.md                # Orden sugerido para rellenar el canvas
|-- ejemplos/
|   |-- ejemplo-agente-soporte-IT.md       # Ejemplo: agente de soporte IT
|   |-- ejemplo-agente-onboarding.md       # Ejemplo: agente de onboarding
|-- en/                                    # Versión en inglés
```

---

## Skill para Claude Desktop

El repositorio incluye un **skill instalable** (`agent-canvas-model.skill`) para [Claude Desktop (Cowork)](https://claude.ai). Al instalarlo, Claude activa automáticamente el framework cuando el usuario pide diseñar o planificar un agente IA.

**Cómo instalarlo**: descarga `agent-canvas-model.skill` y haz doble clic o arrástralo a Claude Desktop.

---

## Orden sugerido de trabajo

| Paso | Bloque | Pregunta clave |
|------|--------|----------------|
| 1 | Segmento de Usuarios | ¿Para quién es este agente? |
| 2 | Propuesta de Valor | ¿Qué problema resuelve? |
| 3 | Canales | ¿Cómo llega al usuario? |
| 4 | Relación / Personalidad | ¿Qué tono y personalidad tiene? |
| 5 | KPIs | ¿Cómo medimos el éxito? |
| 6 | Recursos Clave | ¿Qué conocimiento y hardware necesita? |
| 7 | Actividades Clave | ¿Qué skills tiene y con qué patrón de flujo? |
| 8 | Socios / Integraciones | ¿Qué sistemas y servidores MCP conecta? |
| 9 | Costes y Riesgos | ¿Qué cuesta y qué puede fallar? |
| 10 | Guardarraíles | ¿Qué controles garantizan operación segura? |

> **Regla de oro**: si la Propuesta de Valor (bloque 2) no está clara, no sigas adelante.

---

## Formatos disponibles

| Formato | Uso recomendado |
|---------|-----------------|
| **Markdown** (.md) | Equipos técnicos, integración con repos, edición colaborativa |
| **HTML interactivo — Cloud** | Navegador, agentes cloud (Azure, AWS, GCP) |
| **HTML interactivo — On-Prem** | Navegador, agentes con modelos locales (Ollama, vLLM, air-gap) |

Ambas ediciones HTML incluyen **exportación a Word con un clic** que genera un documento estructurado con la Parte I (PRD: bloques 1–5) y la Parte II (ADR: bloques 6–10) rellenos automáticamente con lo que hayas completado en el canvas.

---

## Cómo empezar

1. **Elige tu formato** de la carpeta `plantillas/`
2. **Empieza por el bloque 1** (Segmento de Usuarios) y el **bloque 2** (Propuesta de Valor)
3. **Valida con usuarios reales** antes de avanzar al resto de bloques
4. **Revisa y actualiza** el canvas cada 2-3 semanas durante el desarrollo
5. Lee la [guía de mejores prácticas](docs/guia-mejores-practicas.md) para llevar tu agente a producción

---

## Mejores prácticas (resumen)

1. **Empieza estrecho y profundo** — un agente excelente en un caso de uso supera a uno mediocre que intenta todo
2. **Define el nivel de autonomía** antes de construir — y define el **patrón de flujo de control** (Pipeline secuencial, Enrutador, ReAct Loop o Multi-agente)
3. **La calidad del conocimiento determina la calidad del agente** — audita tus datos primero
4. **Observabilidad desde el día uno** — registra, mide, itera. En entornos regulados, añade event sourcing para trazabilidad inmutable
5. **El cumplimiento normativo no es una fase final** — es parte del diseño (GDPR, EU AI Act)
6. **Diseña tu capa MCP** — decide desde el principio si hardcodeas las herramientas o las expones como servidores MCP independientes

---

## Contribuir

Las contribuciones son bienvenidas. Lee [CONTRIBUTING.md](CONTRIBUTING.md) para saber cómo participar.

---

## Licencia

Este proyecto está bajo la [Licencia MIT](LICENSE). Compártelo, adáptalo, mejóralo.

---

## Origen

Framework desarrollado por **Jose Antonio Vilar** — [QMetrika Labs](https://qmetrikalabs.com)

**Versión**: 3.0 (2025)
