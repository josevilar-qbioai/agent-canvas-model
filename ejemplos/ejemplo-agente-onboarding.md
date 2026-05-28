# Ejemplo: Agente de Onboarding

Ejemplo del Agent Canvas aplicado a un agente que acompana a nuevos empleados durante sus primeras semanas.

> **Nota**: este ejemplo presenta opciones de plataforma para cada bloque. Elige la combinacion que mejor se adapte a tu stack tecnologico.

---

## 1. Segmento de Usuarios

- **Primario**: Nuevos empleados durante sus primeros 30 dias
- **Secundario**: Managers que incorporan nuevos miembros al equipo

---

## 2. Propuesta de Valor

- **Problema**: Los nuevos empleados se sienten perdidos las primeras semanas. No saben donde encontrar informacion, a quien preguntar, ni que pasos seguir. RRHH repite las mismas respuestas decenas de veces al mes
- **Beneficios**: Experiencia de onboarding guiada y personalizada. Reduccion del 50% de consultas repetitivas a RRHH. Nuevo empleado productivo 1 semana antes

---

## 3. Canales

El agente debe estar donde los empleados ya trabajan. Elige segun tu entorno:

| Opcion | Cuando elegirla |
|--------|-----------------|
| **Microsoft Teams** | Entornos Microsoft 365 |
| **Slack** | Entornos Google Workspace o startups |
| **Google Chat** | Organizaciones con Google Workspace completo |
| **Widget web** | Portal interno o intranet propia |

**Recomendacion**: empieza por UN solo canal. Expande despues segun datos de uso.

---

## 4. Relacion / Personalidad

- **Rol**: Companero de bienvenida
- **Tono**: Calido, motivador, informal pero respetuoso
- **Nivel de autonomia**: Informa y guia. Nunca ejecuta acciones administrativas sin aprobacion de RRHH

---

## 5. KPIs

- Satisfaccion del nuevo empleado (encuesta semana 4): objetivo > 4.2/5
- Reduccion de consultas a RRHH sobre onboarding: objetivo -50%
- Tiempo hasta productividad: objetivo -1 semana vs. media actual
- Porcentaje de interaccion con el agente (semanas 1-4): objetivo > 70%

---

## 6. Recursos Clave

El agente necesita acceso a la documentacion interna de la empresa. Opciones segun plataforma:

| Recurso | Opciones de plataforma |
|---------|----------------------|
| Manual de bienvenida | SharePoint · Confluence · Notion · Google Drive |
| Checklist de onboarding por departamento | Planner · Asana · Trello · Google Tasks |
| Directorio de contactos clave | Microsoft Graph · Google Directory · BambooHR · Workday |
| Politicas de empresa (vacaciones, teletrabajo, beneficios) | Wiki interna · Notion · Confluence · SharePoint |

---

## 7. Actividades Clave (Skills)

- **Skill informativa**: Responde preguntas sobre politicas, beneficios y procedimientos internos
- **Skill de guia**: Proporciona un checklist interactivo de tareas por completar (configurar email, solicitar accesos, conocer al equipo)
- **Skill de conexion**: Presenta contactos clave segun el departamento del nuevo empleado

---

## 8. Socios / Integraciones

Elige las integraciones segun tu stack:

### Opcion A — Stack Microsoft
- SharePoint (documentacion interna)
- Microsoft Graph API (perfil del empleado, departamento, manager)
- Planner / To Do (checklist de onboarding)
- **Plataforma del agente**: Copilot Studio / Azure AI Foundry

### Opcion B — Stack Google
- Google Drive (documentacion interna)
- Google Directory API (perfil del empleado)
- Google Tasks (checklist de onboarding)
- **Plataforma del agente**: Vertex AI Agent Builder / Dialogflow CX

### Opcion C — Stack abierto / multi-cloud
- Confluence o Notion (documentacion interna)
- BambooHR o Workday API (datos del empleado)
- Asana o Trello (checklist de onboarding)
- **Plataforma del agente**: LangChain + LangGraph / CrewAI / Amazon Bedrock Agents

---

## 9. Costes y Riesgos

### Costes

| Concepto | Stack Microsoft | Stack Google | Stack abierto |
|----------|----------------|--------------|---------------|
| Desarrollo | 2-3 semanas | 2-3 semanas | 3-4 semanas |
| Mantenimiento | 2-4 h/mes | 2-4 h/mes | 4-6 h/mes |
| Licencias | Incluidas en M365 | Incluidas en Workspace | Coste de API del LLM + infra |

### Riesgos
- **Tecnico**: Informacion desactualizada sobre politicas. Mitigacion: alerta automatica cuando un documento fuente lleva >90 dias sin revision
- **Negocio**: Percepcion de "sustituir el toque humano". Mitigacion: el agente complementa, no reemplaza. Siempre ofrece conectar con una persona real
- **Normativo**: Datos personales del empleado (nombre, departamento). Mitigacion: solo datos ya disponibles en el directorio corporativo, sin almacenamiento adicional
