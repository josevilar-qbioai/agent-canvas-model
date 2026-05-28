# Example: IT Support Agent

Complete Agent Canvas example applied to an internal technical support agent.

> **Note**: this example presents platform options for each block. Choose the combination that best fits your technology stack.

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

| Option | When to choose |
|--------|---------------|
| **Microsoft Teams** | Microsoft 365 environments |
| **Slack** | Google Workspace environments or tech companies |
| **Support web portal** | If an IT portal already exists (Freshservice, Zendesk, etc.) |
| **Email** | As a secondary channel for less technical users |

**Recommendation**: deploy on the channel where employees already report incidents.

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

| Resource | Platform options |
|----------|----------------|
| IT knowledge base | SharePoint · Confluence · Notion · Guru · BookStack |
| IT service catalog | ServiceNow · Freshservice · Jira SM · Zendesk |
| Employee directory | Microsoft Graph · Google Directory · Okta · BambooHR |

---

## 7. Key Activities (Skills)

- **Informational skill**: Answers common IT questions based on the knowledge base
- **Diagnostic skill**: Guides the user step by step to resolve common issues (VPN, printer, email)
- **Escalation skill**: Creates a ticket in the ITSM system and assigns it to the correct group if unable to resolve

---

## 8. Partners / Integrations

Choose integrations based on your stack:

### Option A — Microsoft Stack
- SharePoint (knowledge base)
- Microsoft Graph API (user and device information)
- ServiceNow or ManageEngine (ticket creation)
- **Agent platform**: Copilot Studio / Azure AI Foundry

### Option B — Google + Atlassian Stack
- Confluence (knowledge base)
- Google Directory API (user information)
- Jira Service Management (ticket creation)
- **Agent platform**: Vertex AI Agent Builder / Dialogflow CX

### Option C — Open / multi-cloud Stack
- Notion or BookStack (knowledge base)
- Okta / BambooHR (user directory)
- Freshservice or Zendesk (ticket creation)
- **Agent platform**: LangChain + LangGraph / CrewAI / Amazon Bedrock Agents

---

## 9. Costs & Risks

### Costs

| Item | Corporate stack (MS/Google) | Open stack |
|------|-----------------------------|------------|
| Development | 3–4 weeks (1 developer) | 4–6 weeks (1–2 developers) |
| Maintenance | 4–8 h/month | 6–10 h/month |
| Licenses | Included in corporate suite | LLM API cost + ITSM tools |

### Risks
- **Technical**: Outdated knowledge base generates incorrect answers. Mitigation: monthly content review + alert if an article hasn't been updated in over 60 days
- **Business**: Low adoption if employees prefer calling support. Mitigation: launch with internal communication campaign and initial use cases with high success rate
- **Regulatory**: Minimal risk under the EU AI Act (internal IT support, no sensitive health or financial data). Verify internal data handling policies
