# Agent Canvas: el framework que necesitas antes de construir tu agente IA

*Por Jose Antonio Vilar — QMetrika Labs*

---

El 70% de los proyectos de agentes IA no llegan a produccion. Y la mayoria no fracasan por un problema de tecnologia. Fracasan porque nadie se hizo las preguntas correctas antes de escribir la primera linea de codigo.

Despues de trabajar con decenas de equipos que intentaban construir agentes — desde chatbots de soporte hasta asistentes de onboarding — vi un patron que se repetia: todo el mundo queria hablar de modelos, de frameworks, de RAG y de fine-tuning. Nadie queria hablar de **para quien** era el agente ni **que problema concreto** resolvia.

Asi nacio el **Agent Canvas Model**: un framework visual de 9 bloques que adapta la logica del Business Model Canvas al diseno de agentes IA. No es un documento tecnico. Es una herramienta de pensamiento.

---

## El problema: construir sin disenar

Cuando un equipo se lanza a construir un agente IA sin un marco de diseno, pasan cosas predecibles:

El agente intenta hacer demasiadas cosas y no hace ninguna bien. Nadie definio como medir si funciona. El tono del agente no encaja con los usuarios. Las integraciones se disenan sobre la marcha. Los riesgos aparecen cuando ya es tarde.

El resultado es un prototipo que impresiona en la demo y se abandona en dos meses.

El Agent Canvas existe para evitar exactamente eso. Te obliga a responder 9 preguntas antes de tocar codigo. Y el orden en que las respondes importa.

---

## Los 9 bloques del Agent Canvas

El canvas se rellena en orden de prioridad — de donde la ambiguedad tiene mas coste a donde tiene menos:

**1. Segmento de Usuarios** — Para quien es este agente?

La primera pregunta nunca deberia ser "que modelo uso". Deberia ser: quien va a usar esto y por que. Si no puedes describir a tu usuario principal en una frase concreta, todavia no tienes un proyecto. Tienes una idea.

**2. Propuesta de Valor** — Que problema resuelve?

Este es el bloque mas importante de los nueve. Tres preguntas: que problema concreto resuelve, que beneficio obtiene el usuario, y por que un agente IA es mejor que lo que ya existe. Si no puedes explicar el valor en 30 segundos, para y repiensa.

*Regla de oro: si este bloque no esta claro, no sigas adelante.*

**3. Canales** — Como llega al usuario?

Teams? Slack? Email? Web? El agente debe ir donde ya estan tus usuarios, no al reves. Empieza por un solo canal. Cuando funcione ahi, expande.

**4. Relacion / Personalidad** — Que tono tiene?

Tu agente es un asistente amigable? Un experto formal? Un tutor paciente? El tono importa tanto como la precision tecnica. Un agente que responde bien pero con el tono equivocado pierde la confianza del usuario. Aqui tambien defines si el agente solo sugiere, actua con aprobacion, o actua de forma autonoma.

**5. KPIs** — Como medimos el exito?

Tiempo ahorrado. Tasa de resolucion en primera interaccion. NPS. Reduccion de tickets. Si no defines metricas antes de construir, nunca sabras si el agente funciona. Y si las metricas no mejoran con el tiempo, el agente no funciona.

**6. Recursos Clave** — Que conocimiento necesita?

Documentos, bases de conocimiento, APIs, bases de datos. La regla es simple: sin buenos datos, la IA da malas respuestas. Audita y estructura tu contenido antes de conectar el agente.

**7. Actividades Clave** — Que sabe hacer?

Informar, ejecutar procesos, gestionar tareas. No intentes que el agente haga todo desde el dia uno. Empieza con 1-2 skills bien hechas. Un agente excelente en una cosa supera a uno mediocre en veinte.

**8. Socios / Integraciones** — Que sistemas conecta?

SharePoint, CRM, Power Automate, ServiceNow... Cada integracion anade complejidad. Prioriza lo esencial y valida que tienes permisos antes de disenar la integracion.

**9. Costes y Riesgos** — Que puede fallar?

El bloque que nadie quiere rellenar pero que salva proyectos. Costes de desarrollo, licencias y mantenimiento mensual. Riesgos tecnicos, de negocio y normativos. GDPR. EU AI Act. Identifica riesgos antes de que ocurran.

---

## 5 principios que aprendes usandolo

Despues de aplicar el canvas con multiples equipos, hay patrones que se repiten:

**Empieza estrecho y profundo.** El impulso natural es querer que el agente resuelva muchos casos de uso. Resiste. Un agente excelente en un caso de uso concreto genera mas valor que uno mediocre que intenta cubrir veinte escenarios.

**Define la autonomia antes de construir.** No todos los agentes necesitan actuar solos. A veces lo mejor es un agente que sugiere y un humano que decide. La autonomia depende del riesgo y la confianza, no de la capacidad tecnica.

**La calidad de los datos importa mas que el modelo.** Un modelo potente con una base de conocimiento desorganizada dara respuestas pobres. Invierte tiempo en estructurar y limpiar tu contenido antes de conectar el agente.

**Observabilidad desde el dia uno.** Registra consultas, respuestas, latencia y costes desde el primer despliegue. Implementa un feedback loop basico (pulgar arriba/abajo). Si no mides, no mejoras.

**El cumplimiento normativo no es una fase final.** Es parte del diseno. GDPR, EU AI Act, politica interna — todo esto se incorpora desde el principio, no se anade al final como un checklist.

---

## Para quien es el Agent Canvas

El canvas esta pensado para dos perfiles que normalmente no hablan el mismo idioma:

**Equipos de negocio** que saben que problema resolver pero no dominan la tecnologia. El canvas les da estructura sin exigir conocimiento tecnico.

**Equipos tecnicos** que dominan la tecnologia pero a veces construyen soluciones sin validar que resuelven un problema real. El canvas les obliga a hacer las preguntas de negocio antes de elegir el stack.

Funciona mejor cuando ambos perfiles se sientan juntos a rellenarlo.

---

## Open source y gratuito

El Agent Canvas Model es open source bajo licencia MIT. Disponible en tres formatos:

- **Markdown** — ideal para equipos tecnicos y repositorios
- **HTML interactivo Cloud** — para agentes basados en servicios cloud
- **HTML interactivo On-Prem** — para agentes con modelos locales

Incluye una guia de mejores practicas, ejemplos reales (agente de soporte IT, agente de onboarding) y documentacion sobre el orden de trabajo.

Todo el codigo esta en GitHub: **[ENLACE AL REPO]**

---

## Una ultima reflexion

La tecnologia de agentes IA avanza rapido. Cada semana hay un modelo nuevo, un framework nuevo, una capacidad nueva. Pero la pregunta fundamental no cambia: **para quien es esto y que problema resuelve?**

Si no puedes responder eso con claridad, ningun modelo te va a salvar.

El Agent Canvas no garantiza que tu agente funcione. Pero garantiza que te hagas las preguntas correctas antes de construirlo. Y eso ya es mas de lo que hacen la mayoria de los proyectos.

Descarga el canvas, juntate con tu equipo, y empieza por el bloque 1.

---

*Jose Antonio Vilar — QMetrika Labs*
*Agent Canvas Model v2.0 — 2025*
*Licencia MIT — Compartelo, adaptalo, mejoralo.*
