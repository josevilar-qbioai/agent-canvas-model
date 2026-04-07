# Ejemplo: Agente de Soporte IT

Ejemplo completo del Agent Canvas aplicado a un agente de soporte tecnico interno.

---

## 1. Segmento de Usuarios

- **Primario**: Empleados de la organizacion (2.000+ personas) que necesitan resolver incidencias IT del dia a dia
- **Secundario**: Equipo de soporte IT (15 personas) que recibe menos tickets de nivel 1

---

## 2. Propuesta de Valor

- **Problema**: Los empleados pierden 20-30 minutos por incidencia esperando respuesta del soporte IT para problemas comunes (reseteo de contrasena, acceso a VPN, instalacion de software)
- **Beneficios**: Resolucion inmediata 24/7 para el 60% de consultas recurrentes. Reduccion de tickets de nivel 1 en un 40%

---

## 3. Canales

- Microsoft Teams (canal principal — donde ya estan los empleados)

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

- Base de conocimiento de IT en SharePoint (procedimientos, FAQs, guias paso a paso)
- Catalogo de servicios IT
- Directorio de empleados (Microsoft Graph API)

---

## 7. Actividades Clave (Skills)

- **Skill informativa**: Responde preguntas frecuentes de IT basandose en la base de conocimiento
- **Skill de diagnostico**: Guia al usuario paso a paso para resolver problemas comunes (VPN, impresora, correo)
- **Skill de escalado**: Crea ticket en ServiceNow y asigna al grupo correcto si no puede resolver

---

## 8. Socios / Integraciones

- SharePoint (base de conocimiento)
- Microsoft Graph API (informacion del usuario y su equipo)
- ServiceNow (creacion de tickets cuando escala)

---

## 9. Costes y Riesgos

### Costes
- Licencia Copilot Studio: incluida en M365 E3/E5
- Desarrollo inicial: 3-4 semanas (1 desarrollador)
- Mantenimiento: 4-8 horas/mes para actualizar la base de conocimiento

### Riesgos
- **Tecnico**: Base de conocimiento desactualizada genera respuestas incorrectas. Mitigacion: revision mensual del contenido
- **Negocio**: Baja adopcion si los empleados prefieren llamar al soporte. Mitigacion: lanzamiento con campana de comunicacion interna
- **Normativo**: Riesgo minimo segun EU AI Act (soporte IT interno, sin datos sensibles de salud o financieros)
