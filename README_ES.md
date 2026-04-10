# Agent Canvas Model

**🌐 Language / Idioma:** &nbsp; [English](README.md) &nbsp;|&nbsp; **Español**

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
|   |-- canvas_cloud.html                  # Canvas interactivo - Cloud Edition
|   |-- canvas_onprem.html                 # Canvas interactivo - On-Prem Edition
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
| 6 | Recursos Clave | ¿Qué conocimiento necesita? |
| 7 | Actividades Clave | ¿Qué skills tiene? |
| 8 | Socios / Integraciones | ¿Qué sistemas integra? |
| 9 | Costes y Riesgos | ¿Qué cuesta y qué puede fallar? |

> **Regla de oro**: si la Propuesta de Valor (bloque 2) no está clara, no sigas adelante.

---

## Formatos disponibles

| Formato | Uso recomendado |
|---------|-----------------|
| **Markdown** (.md) | Equipos técnicos, integración con repos, edición colaborativa |
| **HTML interactivo — Cloud** | Rellenar directamente en el navegador, enfocado a agentes cloud |
| **HTML interactivo — On-Prem** | Rellenar directamente en el navegador, enfocado a agentes con modelos locales |

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
2. **Define el nivel de autonomía** antes de construir (humano en el loop vs. autónomo)
3. **La calidad del conocimiento determina la calidad del agente** — audita tus datos primero
4. **Observabilidad desde el día uno** — registra, mide, itera
5. **El cumplimiento normativo no es una fase final** — es parte del diseño (GDPR, EU AI Act)

---

## Contribuir

Las contribuciones son bienvenidas. Lee [CONTRIBUTING.md](CONTRIBUTING.md) para saber cómo participar.

---

## Licencia

Este proyecto está bajo la [Licencia MIT](LICENSE). Compártelo, adáptalo, mejóralo.

---

## Origen

Framework desarrollado por **Jose Antonio Vilar** — [QMetrika Labs](https://qmetrikalabs.com)

**Versión**: 2.0 (2025)
