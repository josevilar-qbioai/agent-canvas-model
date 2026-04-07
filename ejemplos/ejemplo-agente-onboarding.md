# Ejemplo: Agente de Onboarding

Ejemplo del Agent Canvas aplicado a un agente que acompana a nuevos empleados durante sus primeras semanas.

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

- Microsoft Teams (mensaje de bienvenida automatico el primer dia)

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

- Manual de bienvenida (SharePoint)
- Checklist de onboarding por departamento
- Directorio de contactos clave por area
- Politicas de la empresa (vacaciones, teletrabajo, beneficios)

---

## 7. Actividades Clave (Skills)

- **Skill informativa**: Responde preguntas sobre politicas, beneficios y procedimientos internos
- **Skill de guia**: Proporciona un checklist interactivo de tareas por completar (configurar email, solicitar accesos, conocer al equipo)
- **Skill de conexion**: Presenta contactos clave segun el departamento del nuevo empleado

---

## 8. Socios / Integraciones

- SharePoint (documentacion interna)
- Microsoft Graph API (perfil del empleado, departamento, manager)
- Planner / To Do (checklist de onboarding)

---

## 9. Costes y Riesgos

### Costes
- Desarrollo: 2-3 semanas
- Mantenimiento: 2-4 horas/mes (actualizar contenido cuando cambian politicas)
- Licencias: incluidas en M365

### Riesgos
- **Tecnico**: Informacion desactualizada sobre politicas. Mitigacion: alerta automatica cuando un documento fuente lleva >90 dias sin revision
- **Negocio**: Percepcion de "sustituir el toque humano". Mitigacion: el agente complementa, no reemplaza. Siempre ofrece conectar con una persona real
- **Normativo**: Datos personales del empleado (nombre, departamento). Mitigacion: solo datos ya disponibles en el directorio corporativo, sin almacenamiento adicional
