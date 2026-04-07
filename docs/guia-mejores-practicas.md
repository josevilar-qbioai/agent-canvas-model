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

**Para Copilot Studio**:
- Prioriza SharePoint bien estructurado sobre documentos sueltos
- Los indices de SharePoint mejoran la precision

---

## 4. Observabilidad desde el dia uno

No puedes mejorar lo que no mides. Desde el primer despliegue, registra:
- Consultas del usuario
- Respuestas del agente
- Herramientas invocadas
- Latencia y costes

**Herramientas recomendadas**:
- LangSmith (LangChain) o Azure AI Foundry (Copilot Studio) para trazabilidad
- Feedback loop simple: pulgar arriba/abajo al final de cada interaccion
- Alertas para latencia > umbral, tasa de error > X%, o coste de tokens por encima del presupuesto

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

## 7. Guia rapida de stack

### Microsoft Copilot Studio + Power Platform
Ideal cuando el entorno corporativo ya esta en Microsoft 365 y se necesita despliegue rapido con gobernanza corporativa integrada.

### LangChain / LangGraph
Ideal para equipos con perfil tecnico que necesitan control total sobre el comportamiento del agente, flujos de razonamiento complejos o multi-agente.

### Eleccion del stack
El Agent Canvas es agnostico de plataforma. Los principios de diseno aplican independientemente de la tecnologia elegida. Elige el stack que mejor se adapte a tu equipo, infraestructura y restricciones de gobernanza.

---

## Recursos adicionales

- [Agent Canvas Template (Markdown)](../plantillas/Agent_Canvas_Template.md)
- [Ejemplos de uso](../ejemplos/)
- [CONTRIBUTING.md](../CONTRIBUTING.md) — como contribuir al proyecto
