# Agent Canvas Model

**🌐 Language / Idioma:** &nbsp; [English](README.md) &nbsp;|&nbsp; **Español**

**Framework de diseño de agentes IA** — Adaptación del Business Model Canvas para planificar, diseñar y desplegar agentes de inteligencia artificial en producción.

🚀 **[Demo en vivo → josevilar-qbioai.github.io/agent-canvas-model](https://josevilar-qbioai.github.io/agent-canvas-model)**

---

## Framework en 3 fases

El framework sigue una secuencia deliberada — estrategia antes que tecnología:

| Fase | Canvas | Acento | Propósito |
|------|--------|--------|-----------|
| **① Gobernanza** | [Enterprise Adoption](https://josevilar-qbioai.github.io/agent-canvas-model/enterprise/) | Ámbar | Mandato ejecutivo, gobernanza, mapa de stakeholders, gestión del cambio — antes de decidir tecnología |
| **② Diseño** | [Cloud Edition](https://josevilar-qbioai.github.io/agent-canvas-model/cloud/) | Índigo | Agentes en Azure, AWS, GCP, Copilot Studio, LangChain, APIs gestionadas |
| **② Diseño** | [On-Prem Edition](https://josevilar-qbioai.github.io/agent-canvas-model/onprem/) | Esmeralda | Modelos locales (Ollama, vLLM, LM Studio), air-gap, alta privacidad |
| **③ Capa MCP** | [MCP Canvas](https://josevilar-qbioai.github.io/agent-canvas-model/mcp/) | Cian | Capa Model Context Protocol: servidores, transporte, seguridad, observabilidad |

Los cuatro comparten el **sistema de diseño QMetrika Labs**: Inter + JetBrains Mono, fondo charcoal oscuro (`#252830`), color de acento por canvas, WCAG 2.2 AA.

---

## Canvas Board

El **[Canvas Board](https://josevilar-qbioai.github.io/agent-canvas-model/board/)** integra los 4 canvas como pestañas en un único archivo HTML — un proyecto, un enlace, una exportación a Word que lo cubre todo.

- Nombre de proyecto compartido entre todos los canvas
- Color de acento por pestaña (Ámbar → Índigo/Esmeralda → Cian)
- Exportación Word combinada (los 4 canvas en un documento)
- Barra de progreso total de toda la iniciativa
- Funciona offline, sin servidor, compatible con air-gap

---

## Novedades en v4.1

| Novedad | Detalle |
|---------|---------|
| **Canvas Board** | Los 4 canvas como pestañas en un único archivo HTML |
| **Landing page de 3 fases** | La landing explica el flujo de trabajo antes de mostrar los canvas |
| **MCP Architecture Canvas** | Canvas dedicado al diseño de la capa MCP |
| **Enterprise Adoption Canvas** | Canvas de gobernanza y gestión del cambio para la Fase 1 |
| **HTML standalone** | Cada canvas es un único archivo autocontenido — sin servidor, funciona con `file://` |
| **Sistema de diseño unificado** | Branding común, fuente Inter, dark theme, acento por canvas |
| **Auto-guardado localStorage** | Cambios guardados automáticamente con debounce de 300 ms |
| **Compartir por URL hash** | Comparte el estado completo del canvas en un hash de URL |
| **Importar / Exportar JSON** | Serialización completa del estado para backup y traspaso |
| **Exportar Word (PRD + ADR)** | Documento estructurado generado en un clic desde los datos del canvas |
| **WCAG 2.2 AA** | Skip link, `aria-*`, `role=`, `focus-visible`, etiquetas para lectores de pantalla |

---

## Qué es el Agent Canvas

Un framework visual de **10 bloques** que adapta la lógica del Business Model Canvas al diseño de agentes IA. Permite a equipos técnicos y de negocio alinear objetivos, definir capacidades y anticipar riesgos antes de escribir una sola línea de código.

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
| Desarrollo, licencias, mantenimiento, TCO       | Cómo medimos el éxito?                         |
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
- **Acelera el diseño**: orden sugerido de trabajo (1→10) basado en dónde la ambigüedad tiene más coste
- **Genera documentación**: exporta un documento Word con PRD + ADR directamente desde el canvas

---

## Estructura del repositorio

```
agent-canvas-model/
├── README.md                               # Versión en inglés
├── README_ES.md                            # Este archivo
├── LICENSE                                 # Licencia MIT
├── CONTRIBUTING.md                         # Cómo contribuir
├── agent-canvas-model.skill               # Skill instalable para Claude Desktop
│
├── docs/                                   # Raíz de GitHub Pages
│   ├── index.html                          # Landing page — explicación de las 3 fases
│   ├── .nojekyll                           # Desactiva el procesado Jekyll
│   ├── board/index.html                    # Canvas Board — los 4 canvas en pestañas ★
│   ├── enterprise/index.html               # Enterprise Adoption Canvas (standalone)
│   ├── cloud/index.html                    # Cloud Edition (standalone)
│   ├── onprem/index.html                   # On-Prem Edition (standalone)
│   └── mcp/index.html                      # MCP Canvas (standalone)
│
├── plantillas/                             # Plantillas fuente (español)
│   ├── Agent_Canvas_Template.md            # Plantilla editable en Markdown
│   ├── canvas_board.html                   # Canvas Board fuente ★
│   ├── canvas_cloud_v4_standalone.html     # Cloud Edition v4 (standalone)
│   ├── canvas_onprem_v4_standalone.html    # On-Prem Edition v4 (standalone)
│   ├── canvas_enterprise_adoption.html     # Enterprise Adoption Canvas (standalone)
│   └── canvas_mcp.html                     # MCP Canvas (standalone)
│
└── ejemplos/                               # Ejemplos de uso
    ├── ejemplo-agente-soporte-IT.md
    └── ejemplo-agente-onboarding.md
```

---

## Skill para Claude Desktop

El repositorio incluye un **skill instalable** (`agent-canvas-model.skill`) para [Claude Desktop (Cowork)](https://claude.ai). Al instalarlo, Claude activa automáticamente el framework cuando pides diseñar o planificar un agente IA.

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

## Mejores prácticas (resumen)

1. **Empieza estrecho y profundo** — un agente excelente en un caso de uso supera a uno mediocre que intenta todo
2. **Define el nivel de autonomía antes de construir** — y elige el **patrón de flujo de control**: Secuencial, Enrutador, ReAct Loop o Multi-agente
3. **La calidad del conocimiento determina la calidad del agente** — audita tus fuentes de datos primero
4. **Observabilidad desde el día uno** — registra, mide, itera; añade event sourcing inmutable en entornos regulados
5. **El cumplimiento normativo no es una fase final** — es parte del diseño desde el bloque 1 (GDPR, EU AI Act)
6. **Diseña tu capa MCP explícitamente** — usa el MCP Canvas para decidir transporte, inventario de servidores, auth y observabilidad

---

## Contribuir

Las contribuciones son bienvenidas. Lee [CONTRIBUTING.md](CONTRIBUTING.md).

---

## Licencia

[Licencia MIT](LICENSE) — compártelo, adáptalo, mejóralo.

---

## Origen

Desarrollado por **Jose Antonio Vilar** — QMetrika Labs — qmetrika[at]proton.me

**Versión**: 4.1 (2026)
