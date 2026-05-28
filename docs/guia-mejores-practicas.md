# Guia de mejores practicas para llevar un agente IA a produccion

Esta guia complementa el Agent Canvas con recomendaciones practicas para disenar, construir y desplegar agentes IA que funcionen en entornos reales.

---

## 1. Empieza estrecho y profundo, no ancho y superficial

El error mas comun es intentar que el agente haga demasiadas cosas. Un agente excelente en un caso de uso concreto supera siempre a un agente mediocre que intenta cubrir veinte escenarios.

**Recomendacion**: elige 1-2 skills iniciales, lleva el agente a produccion con usuarios reales y expande a partir de datos de uso. Si el bloque 7 (Actividades Clave) tiene mas de 3 skills en la primera version, probablemente estas intentando demasiado.

---

## 2. Define el nivel de autonomia antes de construir

La autonomia de un agente no es binaria. Existe un espectro:

| Nivel | Descripcion | Ejemplo |
|-------|-------------|---------|
| **Sugiere** | El agente propone, el humano decide | "Recomiendo cerrar este ticket como duplicado" |
| **Actua con aprobacion** | El agente ejecuta tras confirmacion humana | "Voy a enviar este email. Confirmar?" |
| **Actua autonomamente** | El agente ejecuta sin intervencion | Redirige tickets automaticamente segun categoria |

Define en el bloque 4 (Relacion) cual es el nivel de autonomia para cada skill. No asumas que mas autonomia es mejor — depende del riesgo y la confianza.

---

## 3. La calidad del conocimiento determina la calidad del agente

Un agente con un modelo potente y una base de conocimiento desorganizada dara respuestas pobres. Antes de conectar el agente, audita y estructura el contenido.

**Para RAG (Retrieval Augmented Generation)**:
- Chunk size entre 256-512 tokens, con solapamiento del 10-15%
- Incluye metadatos: fuente, fecha, audiencia
- Versiona la base de conocimiento igual que el codigo

**Bases de datos vectoriales por perfil**:

| Perfil | Opciones recomendadas |
|--------|----------------------|
| Cloud gestionado | Azure AI Search · Vertex AI Search · Amazon Kendra · Pinecone |
| Open source / auto-hospedado | ChromaDB · Weaviate · Qdrant · Milvus |
| Integrado en plataforma | SharePoint indexes (Copilot Studio) · Confluence (Atlassian Intelligence) |

**Recomendacion general**: prioriza documentacion bien estructurada sobre documentos sueltos, independientemente de la plataforma. Un wiki organizado siempre supera a un drive desordenado.

---

## 4. Observabilidad desde el dia uno

No puedes mejorar lo que no mides. Desde el primer despliegue, registra:
- Consultas del usuario
- Respuestas del agente
- Herramientas invocadas
- Latencia y costes

**Herramientas de observabilidad por stack**:

| Stack | Opciones |
|-------|----------|
| LangChain / LangGraph | LangSmith |
| Microsoft | Azure AI Foundry · Application Insights |
| Google Cloud | Vertex AI Model Monitoring |
| Agnóstico | LangFuse · Helicone · Weights & Biases · Phoenix (Arize) |

Complementa con un feedback loop simple (pulgar arriba/abajo) y alertas para latencia > umbral, tasa de error > X%, o coste de tokens por encima del presupuesto.

---

## 5. Cumplimiento normativo es parte del diseno

El EU AI Act clasifica los agentes segun su nivel de riesgo. Un agente de soporte IT en entorno corporativo generalmente cae en riesgo limitado o minimo, pero debes verificarlo.

**GDPR**: minimiza los datos que el agente retiene. Nunca almacenes transcripciones con PII sin consentimiento explicito.

**EU AI Act**: documenta el proposito, limitaciones y supervision humana del agente (requisito para sistemas de riesgo limitado en adelante).

**Politica interna**: asegurate de que el equipo legal y de seguridad valida el diseno antes del despliegue en produccion.

---

## 6. Guardarrailes — disenar los limites del agente

Los guardarrailes no son restricciones que anades al final — son parte del diseno. Un agente sin guardarrailes explicitos los tiene implicitos y mal definidos.

### Seguridad

- Separa el system prompt del input del usuario. Nunca concatenes ambos sin delimitadores claros
- Implementa un clasificador de intencion antes de pasar el mensaje al agente principal
- Nunca incluyas credenciales, tokens o datos sensibles en el system prompt

### Calidad de respuesta

- Define un umbral de confianza: si el sistema RAG no encuentra documentos con similitud suficiente, el agente debe responder "no tengo informacion suficiente"
- Cita siempre la fuente en respuestas basadas en conocimiento
- Implementa evaluacion automatica con LLM-as-judge para medir fidelidad al contexto

---

## 7. Iteracion y mantenimiento

Un agente no es un proyecto puntual. Requiere mantenimiento continuo:

**Semanas 1-4 post-lanzamiento:**
- Revision diaria de consultas y respuestas
- Identificar los puntos de fallo mas comunes
- Iteraciones rapidas en la base de conocimiento y el system prompt

**Mensualmente:**
- Revisar KPIs vs. objetivos definidos
- Actualizar base de conocimiento con contenido nuevo
- Recoger feedback estructurado de usuarios

**Trimestralmente:**
- Evaluar si el alcance del agente debe expandirse
- Revisar cumplimiento normativo
- Actualizar el Agent Canvas para reflejar lo aprendido

---

## 8. Guia de stack por perfil

El Agent Canvas es agnostico de plataforma. Los principios de diseno aplican independientemente de la tecnologia elegida. Esta tabla orienta la eleccion:

| Perfil | Stack recomendado |
|--------|-------------------|
| Equipos Microsoft 365 | Copilot Studio + Power Automate + SharePoint |
| Equipos Google Workspace | Vertex AI Agent Builder + Google Drive + AppSheet |
| Equipos tecnicos (control total) | LangChain / LangGraph + LangSmith + base vectorial |
| Modelos locales (privacidad / soberania) | Ollama + Open WebUI + ChromaDB |
| Multi-cloud | Azure AI Foundry · Amazon Bedrock Agents · Vertex AI |
| Startups / equipos agiles | CrewAI · AutoGen · Claude Agent SDK |

**Criterio de eleccion**: elige el stack que mejor se adapte a tu equipo, infraestructura existente y restricciones de gobernanza. No hay una respuesta unica — la mejor plataforma es la que tu equipo puede mantener.

---

## Recursos adicionales

- [Agent Canvas Template (Markdown)](../plantillas/Agent_Canvas_Template.md)
- [Ejemplos de uso](../ejemplos/)
- [CONTRIBUTING.md](../CONTRIBUTING.md) — como contribuir al proyecto

---

**Version:** 3.0 (2026)
**Autor:** Jose Antonio Vilar — QMetrika Labs
