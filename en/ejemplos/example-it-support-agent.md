# Example: IT Support Agent

Complete Agent Canvas example applied to an internal technical support agent.

---

## 1. User Segment

- **Primary**: Organization employees (2,000+ people) who need to resolve day-to-day IT issues
- **Secondary**: IT support team (15 people) who receive fewer level-1 tickets

---

## 2. Value Proposition

- **Problem**: Employees lose 20–30 minutes per incident waiting for IT support responses for common issues (password reset, VPN access, software installation)
- **Benefits**: Immediate 24/7 resolution for 60% of recurring queries. Reduction of level-1 tickets by 40%

---

## 3. Channels

- Microsoft Teams (primary channel — where employees already are)

---

## 4. Relationship / Personality

- **Role**: Friendly technical assistant
- **Tone**: Approachable but professional. Explains step by step without excessive jargon
- **Autonomy level**: Suggests solutions. Escalates to a human if unresolved after 2 interactions

---

## 5. KPIs

- First-interaction resolution rate: target > 60%
- Average resolution time: target < 3 minutes
- User satisfaction: target NPS > 40
- Level-1 ticket reduction: target -40%

---

## 6. Key Resources

- IT knowledge base in SharePoint (procedures, FAQs, step-by-step guides)
- IT service catalog
- Employee directory (Microsoft Graph API)

---

## 7. Key Activities (Skills)

- **Informational skill**: Answers common IT questions based on the knowledge base
- **Diagnostic skill**: Guides the user step by step to resolve common issues (VPN, printer, email)
- **Escalation skill**: Creates a ticket in ServiceNow and assigns it to the correct group if unable to resolve

---

## 8. Partners / Integrations

- SharePoint (knowledge base)
- Microsoft Graph API (user and device information)
- ServiceNow (ticket creation when escalating)

---

## 9. Costs & Risks

### Costs
- Copilot Studio license: included in M365 E3/E5
- Initial development: 3–4 weeks (1 developer)
- Maintenance: 4–8 hours/month to update the knowledge base

### Risks
- **Technical**: Outdated knowledge base generates incorrect answers. Mitigation: monthly content review
- **Business**: Low adoption if employees prefer calling support. Mitigation: launch with internal communication campaign
- **Regulatory**: Minimal risk under the EU AI Act (internal IT support, no sensitive health or financial data)
