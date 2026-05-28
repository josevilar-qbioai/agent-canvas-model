# Ejemplo: Agente RAG para Proyecto Erasmus+ (UPM)

Ejemplo real del Agent Canvas aplicado al despliegue de un agente RAG para dar soporte a investigadores externos en un proyecto Erasmus+ de la Universidad Politécnica de Madrid.

> **Contexto**: un coordinador del proyecto (rol técnico UPM) necesita dar acceso a ~10 investigadores de universidades socias en otros países a la documentación viva del proyecto (memorias, actas, entregables) sin otorgarles licencias individuales de Microsoft Copilot ni acceso directo a la intranet UPM. La solución: un agente conversacional en Teams, desplegado con Copilot Studio, que hace RAG sobre una biblioteca SharePoint privada y se autentica mediante Entra ID B2B (invitaciones de tenant cruzado).

> **Por qué este caso encaja con el canvas**: el bloque 10 (Guardarraíles) y el bloque 9 (Costes y Riesgos) son los más críticos. La primera pregunta del equipo de Gobernanza TI fue *"¿hay un documento que describa qué hace el agente, para quién, con qué datos y quién es el responsable?"* — exactamente lo que genera la exportación Word del canvas.

---

## 1. Segmento de Usuarios

- **Primario**: ~10 investigadores externos (doctorandos y profesores) de universidades socias europeas (Polonia, Países Bajos, Grecia) incorporados como **Azure AD B2B Guest** al tenant UPM
- **Secundario**: coordinador del proyecto en UPM que gestiona la documentación y quiere reducir las consultas recurrentes por email

---

## 2. Propuesta de Valor

- **Problema**: los investigadores externos no tienen acceso a la intranet UPM ni a Copilot, y el coordinador recibe un promedio de 4-6 emails por semana con preguntas cuya respuesta ya está en los documentos del proyecto (plazos de entrega, formularios, requisitos de informe de gastos)
- **Beneficios**: respuesta inmediata 24/7 sobre la documentación oficial del proyecto, sin compartir archivos por email ni exponer toda la biblioteca SharePoint; el coordinador libera ~2 horas semanales
- **Métrica de impacto principal**: reducción del 70% en consultas por email al coordinador en las primeras 8 semanas de uso

---

## 3. Canales

- **Canal principal**: **Microsoft Teams** — canal de equipo privado `Erasmus+ [Nombre Proyecto]` al que los B2B Guests son invitados. Copilot Studio publica el bot directamente en este canal.
- **Canal alternativo**: interfaz web embebida en la página de intranet del proyecto (para el coordinador UPM)

**Por qué Teams**: los investigadores externos ya usan Teams para videoconferencias del proyecto, no requiere instalación adicional y soporta autenticación B2B de forma nativa.

---

## 4. Relación / Personalidad

- **Rol**: Asistente documental del proyecto — *"soy el asistente del proyecto, puedo ayudarte a encontrar información en los documentos oficiales"*
- **Tono**: formal, claro, multilingüe (responde en el idioma en que se le pregunta: ES, EN, PL, NL, EL)
- **Nivel de autonomía**: puramente informativo — cita siempre el documento fuente y la sección. No genera documentos nuevos, no envía emails, no ejecuta acciones en nombre del usuario
- **Fallback**: si la respuesta no está en los documentos indexados, responde *"No encuentro esta información en los documentos del proyecto. Te recomiendo contactar con el coordinador en qmetrika@proton.me"*

---

## 5. KPIs

- Reducción de emails de consulta al coordinador: objetivo ≥ 70% en 8 semanas
- Tasa de respuestas con cita de fuente verificable: objetivo > 95%
- Satisfacción del usuario (encuesta mensual, escala 1-5): objetivo ≥ 4,0
- Cobertura documental: % de preguntas respondidas con fuentes del corpus vs. derivadas al coordinador; objetivo < 20% derivadas

---

## 6. Recursos Clave

| Recurso | Plataforma / Detalle |
|---------|---------------------|
| Corpus documental | Biblioteca SharePoint `Erasmus-[Proyecto]-Docs` (memorias, actas, entregables, formularios) |
| Modelo de lenguaje | Azure OpenAI (GPT-4o o GPT-4o-mini según coste/calidad) — desplegado en suscripción Azure UPM |
| Plataforma de agente | **Copilot Studio** (incluido en M365 E3/E5 de UPM, sin coste adicional de plataforma) |
| Identidad y acceso | **Microsoft Entra ID B2B** — los investigadores externos son Guest Users del tenant UPM |
| Hardware | Cloud (Azure) — sin infraestructura on-prem requerida |

---

## 7. Actividades Clave (Skills y Patrón de Flujo)

- **Skill informativa / RAG**: recupera fragmentos relevantes de SharePoint basándose en la pregunta del usuario, los pasa al LLM con el prompt de sistema y devuelve la respuesta con cita de fuente
- **Skill de clarificación**: si la pregunta es ambigua (ej. *"¿cuándo es el plazo?"*), el agente pregunta *"¿te refieres al plazo de entrega del Informe Intermedio o del Informe Final?"* antes de buscar
- **Patrón de flujo de control**: **Pipeline Secuencial** — pregunta → recuperación RAG → generación de respuesta → cita de fuente → entrega. Sin bucles de razonamiento ni herramientas externas.

---

## 8. Socios / Integraciones

| Sistema | Uso |
|---------|-----|
| **Copilot Studio** | Plataforma de orquestación y despliegue del agente |
| **SharePoint Online** | Fuente de datos RAG (biblioteca privada de documentos del proyecto) |
| **Microsoft Entra ID B2B** | Autenticación de los investigadores externos como Guest Users |
| **Microsoft Teams** | Canal de interacción principal |
| **Azure OpenAI** | Modelo de generación (GPT-4o / GPT-4o-mini) |

**MCP (Model Context Protocol)**: no requerido en la fase piloto. Si en fases posteriores se conectan fuentes adicionales (Moodle UPM, sistema de gestión de proyectos europeos), evaluar exposición de esas fuentes como servidores MCP independientes para desacoplar el agente del backend.

**Orquestación**: Copilot Studio nativo — sin framework externo (LangChain, Semantic Kernel) en el piloto.

---

## 9. Costes y Riesgos

### Costes

| Concepto | Estimación |
|----------|-----------|
| Desarrollo e integración | 3-5 días (coordinador técnico UPM con acceso a Copilot Studio) |
| Licencia de plataforma | Incluida en M365 E3/E5 UPM — 0 € adicional por la plataforma Copilot Studio |
| Azure OpenAI (consumo) | Pay-as-you-go; con ~10 usuarios y uso moderado, estimado < 30 €/mes para el piloto |
| Mantenimiento | 1-2 h/mes (actualización de documentos en SharePoint + revisión de calidad de respuestas) |
| **Total piloto (3 meses)** | **~100-150 € en costes de API + tiempo coordinador técnico** |

> **Nota de presupuesto del proyecto**: si el proyecto Erasmus+ tiene un crédito Azure asignado, los costes de Azure OpenAI pueden imputarse a esa suscripción. Confirmar con el responsable de administración si es elegible como coste de infraestructura digital del proyecto.

### Riesgos

- **Técnico**: los documentos en SharePoint pueden estar en múltiples idiomas y formatos (PDF escaneados sin OCR). Mitigación: pre-procesar con Azure Document Intelligence antes de indexar; establecer criterio de exclusión para documentos sin texto extraíble
- **Negocio**: los investigadores externos (B2B Guests) pueden tener restricciones de tenant impuestas por sus universidades de origen que impidan el acceso a Teams o Copilot Studio. Mitigación: verificar acceso con un usuario de prueba de cada universidad antes del lanzamiento
- **Normativo**: los documentos del proyecto pueden contener datos personales de participantes (formularios de movilidad, datos bancarios para reembolsos). Mitigación: excluir explícitamente estos documentos del corpus RAG; confirmar con la DPO de UPM si el tratamiento requiere registro en el RGPD

---

## 10. Guardarraíles

### Seguridad

- El agente solo accede a la biblioteca SharePoint `Erasmus-[Proyecto]-Docs`, con permisos de solo lectura
- Acceso restringido al grupo de seguridad **SG-Erasmus-RAGPilot** (coordinador + investigadores invitados aprobados)
- Revisión de accesos cada 6 meses o al finalizar el proyecto (eliminación de Guest Users cuando caduca su participación)

### Calidad

- Umbral de confianza RAG: si la puntuación de relevancia del fragmento recuperado es < 0,7, el agente responde *"No he encontrado información suficientemente precisa"* en lugar de generar una respuesta especulativa
- El agente cita siempre el documento fuente y la sección (nombre del archivo + número de página cuando está disponible)

### Ético

- El agente no almacena el historial de conversaciones fuera de la sesión activa de Teams
- No accede a datos personales de los investigadores más allá de lo necesario para autenticación (nombre para saludo)

### Operacional

- **Responsable de datos (DPO)**: confirmar con la Delegada de Protección de Datos de UPM antes de producción
- **Responsable técnico**: coordinador del proyecto (punto de contacto para incidencias y actualización del corpus)
- **Registro inmutable / Event Sourcing**: no requerido en el piloto (uso interno de proyecto sin datos sensibles regulados). Evaluar si el proyecto escala a datos de movilidad estudiantil o financieros
- **Gobernanza de despliegue**: completar el canvas y generar el documento PRD + ADR como *contrato de despliegue* requerido por el equipo de Gobernanza TI de UPM antes de activar el bot en producción

---

## Aprendizajes clave de este caso

1. **El canvas como contrato de despliegue**: en entornos universitarios con gobernanza TI centralizada, el documento Word generado desde el canvas (PRD + ADR) es el artefacto que aprueba Gobernanza TI antes de activar el bot — no el código.
2. **B2B Guest ≠ usuario interno**: el bloque 1 debe registrar explícitamente el tipo de identidad; afecta al bloque 8 (Entra ID B2B), al bloque 9 (riesgo de restricciones de tenant externo) y al bloque 10 (revisión periódica de accesos).
3. **Copilot Studio sin coste adicional** para organizaciones con M365 E3/E5: el coste relevante es Azure OpenAI, no la plataforma. Dimensionar el crédito según el número de interacciones esperadas.
4. **Corpus limpio primero**: la calidad del RAG depende de que los documentos SharePoint sean texto extraíble. Un PDF escaneado sin OCR es ruido. Auditar el corpus antes de indexar.

---

*Framework: Agent Canvas Model v3.0 (2026) — QMetrika Labs*  
*Contacto: qmetrika@proton.me*  
*Caso de uso: piloto real, datos anonimizados*
