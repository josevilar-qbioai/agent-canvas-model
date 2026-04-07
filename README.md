# Agent Canvas Model

**Framework de diseno de agentes IA** — Adaptacion del Business Model Canvas para planificar, disenar y desplegar agentes de inteligencia artificial en produccion.

---

## Que es el Agent Canvas

El Agent Canvas es un framework visual de 9 bloques que adapta la logica del Business Model Canvas al diseno de agentes IA. Permite a equipos tecnicos y de negocio alinear objetivos, definir capacidades y anticipar riesgos antes de escribir una sola linea de codigo.

```
+------------------+------------------+----------------------+------------------+------------------+
| 8. SOCIOS /      | 7. ACTIVIDADES   | 2. PROPUESTA DE      | 4. RELACION /    | 1. SEGMENTO DE   |
| INTEGRACIONES    | CLAVE            | VALOR                | PERSONALIDAD     | USUARIOS         |
|                  |                  |                      |                  |                  |
| Que sistemas,    | Que skills o     | Que problema         | Que rol tiene    | Para quien es    |
| plataformas o    | capacidades      | resuelve?            | el agente?       | este agente?     |
| APIs conecta?    | tiene?           |                      | Que tono usa?    |                  |
|                  |------------------+                      +------------------|                  |
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

## Por que usarlo

- **Evita el error mas comun**: construir agentes sin definir para quien ni por que
- **Alinea negocio y tecnologia**: un lenguaje comun entre equipos
- **Reduce riesgos**: identifica costes, dependencias y riesgos antes de desarrollar
- **Acelera el diseno**: orden sugerido de trabajo (1 a 9) basado en donde la ambiguedad tiene mas coste

---

## Contenido del repositorio

```
agent-canvas-model/
|-- README.md                          # Este archivo
|-- LICENSE                            # Licencia MIT
|-- CONTRIBUTING.md                    # Como contribuir
|-- agent-canvas-model.skill           # Skill instalable para Claude Desktop
|-- plantillas/
|   |-- Agent_Canvas_Template.md       # Plantilla editable en Markdown
|   |-- canvas_cloud.html              # Canvas interactivo - Cloud Edition
|   |-- canvas_onprem.html             # Canvas interactivo - On-Prem Edition
|-- docs/
|   |-- guia-mejores-practicas.md      # Guia completa de mejores practicas
|   |-- orden-de-trabajo.md            # Orden sugerido para rellenar el canvas
|-- ejemplos/
|   |-- ejemplo-agente-soporte-IT.md   # Ejemplo: agente de soporte IT
|   |-- ejemplo-agente-onboarding.md   # Ejemplo: agente de onboarding
```

---

## Skill para Claude Desktop

El repositorio incluye un **skill instalable** (`agent-canvas-model.skill`) para [Claude Desktop (Cowork)](https://claude.ai). Al instalarlo, Claude activa automaticamente el framework cuando el usuario pide disenar o planificar un agente IA.

**Como instalarlo**: descarga `agent-canvas-model.skill` y haz doble clic o arrastralo a Claude Desktop.

---

## Orden sugerido de trabajo

| Paso | Bloque | Pregunta clave |
|------|--------|----------------|
| 1 | Segmento de Usuarios | Para quien es este agente? |
| 2 | Propuesta de Valor | Que problema resuelve? |
| 3 | Canales | Como llega al usuario? |
| 4 | Relacion / Personalidad | Que tono y personalidad tiene? |
| 5 | KPIs | Como medimos el exito? |
| 6 | Recursos Clave | Que conocimiento necesita? |
| 7 | Actividades Clave | Que skills tiene? |
| 8 | Socios / Integraciones | Que sistemas integra? |
| 9 | Costes y Riesgos | Que cuesta y que puede fallar? |

> **Regla de oro**: si la Propuesta de Valor (bloque 2) no esta clara, no sigas adelante.

---

## Formatos disponibles

| Formato | Uso recomendado |
|---------|-----------------|
| **Markdown** (.md) | Equipos tecnicos, integracion con repos, edicion colaborativa |
| **HTML interactivo — Cloud** | Rellenar directamente en el navegador, enfocado a agentes cloud |
| **HTML interactivo — On-Prem** | Rellenar directamente en el navegador, enfocado a agentes con modelos locales |

---

## Como empezar

1. **Elige tu formato** de la carpeta `plantillas/`
2. **Empieza por el bloque 1** (Segmento de Usuarios) y el **bloque 2** (Propuesta de Valor)
3. **Valida con usuarios reales** antes de avanzar al resto de bloques
4. **Revisa y actualiza** el canvas cada 2-3 semanas durante el desarrollo
5. Lee la [guia de mejores practicas](docs/guia-mejores-practicas.md) para llevar tu agente a produccion

---

## Mejores practicas (resumen)

1. **Empieza estrecho y profundo** — un agente excelente en un caso de uso supera a uno mediocre que intenta todo
2. **Define el nivel de autonomia** antes de construir (humano en el loop vs. autonomo)
3. **La calidad del conocimiento determina la calidad del agente** — audita tus datos primero
4. **Observabilidad desde el dia uno** — registra, mide, itera
5. **Cumplimiento normativo no es una fase final** — es parte del diseno (GDPR, EU AI Act)

---

## Stack tecnologico soportado

El framework no es especifico de una plataforma, pero incluye guias especificas para:

- **Microsoft Copilot Studio + Power Platform** — entornos Microsoft 365 con gobernanza corporativa
- **LangChain / LangGraph** — equipos tecnicos que necesitan control total
- **Cualquier stack** — los principios de diseno aplican independientemente de la tecnologia

---

## Contribuir

Las contribuciones son bienvenidas. Lee [CONTRIBUTING.md](CONTRIBUTING.md) para saber como participar.

Algunas formas de contribuir:
- Compartir ejemplos de agentes disenados con el canvas
- Traducir el framework a otros idiomas
- Proponer mejoras a los bloques o al flujo de trabajo
- Reportar errores o sugerir mejoras

---

## Licencia

Este proyecto esta bajo la [Licencia MIT](LICENSE). Compartelo, adaptalo, mejoralo.

---

## Origen

Framework desarrollado por **Jose Antonio Vilar** — [QMetrika Labs](https://qmetrikalabs.com)

**Version**: 2.0 (2025)


