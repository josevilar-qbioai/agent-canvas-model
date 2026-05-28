# Ejemplo: Agente de Soporte IT

Ejemplo completo del Agent Canvas aplicado a un agente de soporte tecnico interno.

> **Nota**: este ejemplo presenta opciones de plataforma para cada bloque. Elige la combinacion que mejor se adapte a tu stack tecnologico.

---

## 1. Segmento de Usuarios

- **Primario**: Empleados de la organizacion (3.000+ personas) que necesitan resolver incidencias IT del dia a dia
- **Secundario**: Equipo de soporte IT (15 personas) que recibe menos tickets de nivel 1

---

## 2. Propuesta de Valor

- **Problema**: Los empleados pierden 20-30 minutos por incidencia esperando respuesta del soporte IT para problemas comunes (reseteo de contrasena, acceso a VPN, instalacion de software)
- **Beneficios**: Resolucion inmediata 24/7 para el 60% de consultas recurrentes. Reduccion de tickets de nivel 1 en un 40%

---

## 3. Canales

| Opcion | Cuando elegirla |
|--------|-----------------|
| **Microsoft Teams** | Entornos Microsoft 365 |
| **Slack** | Entornos Google Workspace o empresas tech |
| **Portal web de soporte** | Si ya existe un portal IT (Freshservice, Zendesk, etc.) |
| **Email** | Como canal secundario para usuarios menos tecnicos |

**Recomendacion**: despliega en el canal donde los empleados ya reportan incidencias.

---

## 4. Relacion / Personalidad

- **Rol**: Asistente tecnico amigable
- **Tono**: Cercano pero profesional. Explica paso a paso sin jerga excesiva
- **Nivel de autonomia**: Sugiere soluciones. Escala a humano si no resuelve en 2 interacciones

---

## 5. KPIs

- Tasa de resolucion en primera interaccion: objetivo > 60%
- Tiempo medio de resolucion: objetivo < 3 minutos
- Satisfaccion del usuario: objetivo NPS > 40
- Reduccion de tickets nivel 1: objetivo -40%

---

## 6. Recursos Clave

| Recurso | Opciones de plataforma |
|---------|----------------------|
| Base de conocimiento IT | SharePoint · Confluence · Notion · Guru · BookStack |
| Catalogo de servicios IT | ServiceNow · Freshservice · Jira SM · Zendesk |
| Directorio de empleados | Microsoft Graph · Google Directory · Okta · BambooHR |

---

## 7. Actividades Clave (Skills)

- **Skill informativa**: Responde preguntas frecuentes de IT basandose en la base de conocimiento
- **Skill de diagnostico**: Guia al usuario paso a paso para resolver problemas comunes (VPN, impresora, correo)
- **Skill de escalado**: Crea ticket en el sistema ITSM y asigna al grupo correcto si no puede resolver

---

## 8. Socios / Integraciones

Elige las integraciones segun tu stack:

### Opcion A — Stack Microsoft
- SharePoint (base de conocimiento)
- Microsoft Graph API (informacion del usuario y su equipo)
- ServiceNow o Manage Engine (creacion de tickets)
- **Plataforma del agente**: Copilot Studio / Azure AI Foundry

### Opcion B — Stack Google + Atlassian
- Confluence (base de conocimiento)
- Google Directory API (informacion del usuario)
- Jira Service Management (creacion de tickets)
- **Plataforma del agente**: Vertex AI Agent Builder / Dialogflow CX

### Opcion C — Stack abierto / multi-cloud
- Notion o BookStack (base de conocimiento)
- Okta / BambooHR (directorio de usuarios)
- Freshservice o Zendesk (creacion de tickets)
- **Plataforma del agente**: LangChain + LangGraph / CrewAI / Amazon Bedrock Agents

---

## 9. Costes y Riesgos

### Costes

| Concepto | Stack corporativo (MS/Google) | Stack abierto |
|----------|-------------------------------|---------------|
| Desarrollo | 3-4 semanas (1 desarrollador) | 4-6 semanas (1-2 desarrolladores) |
| Mantenimiento | 4-8 h/mes | 6-10 h/mes |
| Licencias | Incluidas en suite corporativa | Coste de API del LLM + herramientas ITSM |

### Riesgos
- **Tecnico**: Base de conocimiento desactualizada genera respuestas incorrectas. Mitigacion: revision mensual del contenido + alerta si un articulo lleva >60 dias sin revision
- **Negocio**: Baja adopcion si los empleados prefieren llamar al soporte. Mitigacion: lanzamiento con campana de comunicacion interna y primeros casos de uso con alta tasa de exito
- **Normativo**: Riesgo minimo segun EU AI Act (soporte IT interno, sin datos sensibles de salud o financieros). Verificar politica interna de tratamiento de datos
