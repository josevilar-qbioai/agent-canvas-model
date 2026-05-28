# Example: Onboarding Agent

Agent Canvas example applied to an agent that guides new employees through their first weeks.

> **Note**: this example presents platform options for each block. Choose the combination that best fits your technology stack.

---

## 1. User Segment

- **Primary**: New employees during their first 30 days
- **Secondary**: Managers bringing new members onto the team

---

## 2. Value Proposition

- **Problem**: New employees feel lost in their first weeks. They don't know where to find information, who to ask, or what steps to follow. HR repeats the same answers dozens of times a month
- **Benefits**: Guided and personalized onboarding experience. 50% reduction in repetitive HR queries. New employee reaches productivity one week sooner

---

## 3. Channels

The agent should be where employees already work. Choose based on your environment:

| Option | When to choose |
|--------|---------------|
| **Microsoft Teams** | Microsoft 365 environments |
| **Slack** | Google Workspace environments or startups |
| **Google Chat** | Organizations with full Google Workspace |
| **Web widget** | Internal portal or custom intranet |

**Recommendation**: start with ONE channel. Expand later based on usage data.

---

## 4. Relationship / Personality

- **Role**: Welcome companion
- **Tone**: Warm, encouraging, informal but respectful
- **Autonomy level**: Informs and guides. Never performs administrative actions without HR approval

---

## 5. KPIs

- New employee satisfaction (week 4 survey): target > 4.2/5
- Reduction in HR onboarding queries: target -50%
- Time to productivity: target -1 week vs. current average
- Interaction rate with the agent (weeks 1–4): target > 70%

---

## 6. Key Resources

The agent needs access to internal company documentation. Options by platform:

| Resource | Platform options |
|----------|----------------|
| Welcome handbook | SharePoint · Confluence · Notion · Google Drive |
| Onboarding checklist by department | Planner · Asana · Trello · Google Tasks |
| Directory of key contacts | Microsoft Graph · Google Directory · BambooHR · Workday |
| Company policies (vacation, remote work, benefits) | Internal wiki · Notion · Confluence · SharePoint |

---

## 7. Key Activities (Skills)

- **Informational skill**: Answers questions about policies, benefits, and internal procedures
- **Guidance skill**: Provides an interactive task checklist to complete (set up email, request access, meet the team)
- **Connection skill**: Introduces key contacts based on the new employee's department

---

## 8. Partners / Integrations

Choose integrations based on your stack:

### Option A — Microsoft Stack
- SharePoint (internal documentation)
- Microsoft Graph API (employee profile, department, manager)
- Planner / To Do (onboarding checklist)
- **Agent platform**: Copilot Studio / Azure AI Foundry

### Option B — Google Stack
- Google Drive (internal documentation)
- Google Directory API (employee profile)
- Google Tasks (onboarding checklist)
- **Agent platform**: Vertex AI Agent Builder / Dialogflow CX

### Option C — Open / multi-cloud Stack
- Confluence or Notion (internal documentation)
- BambooHR or Workday API (employee data)
- Asana or Trello (onboarding checklist)
- **Agent platform**: LangChain + LangGraph / CrewAI / Amazon Bedrock Agents

---

## 9. Costs & Risks

### Costs

| Item | Microsoft stack | Google stack | Open stack |
|------|----------------|--------------|------------|
| Development | 2–3 weeks | 2–3 weeks | 3–4 weeks |
| Maintenance | 2–4 h/month | 2–4 h/month | 4–6 h/month |
| Licenses | Included in M365 | Included in Workspace | LLM API cost + infra |

### Risks
- **Technical**: Outdated policy information. Mitigation: automatic alert when a source document hasn't been reviewed in more than 90 days
- **Business**: Perception of "replacing the human touch." Mitigation: the agent complements, not replaces. Always offers to connect with a real person
- **Regulatory**: Employee personal data (name, department). Mitigation: only data already available in the corporate directory, no additional storage
