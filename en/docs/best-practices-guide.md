# Best Practices Guide for Taking an AI Agent to Production

This guide complements the Agent Canvas with practical recommendations for designing, building, and deploying AI agents that work in real-world environments.

---

## 1. Start Narrow and Deep, Not Wide and Shallow

The most common mistake is trying to make the agent do too many things. An excellent agent in one specific use case will always outperform a mediocre agent trying to cover twenty scenarios.

**Recommendation**: choose 1–2 initial skills, take the agent to production with real users, and expand from usage data. If block 7 (Key Activities) has more than 3 skills in the first version, you're probably trying to do too much.

---

## 2. Define the Autonomy Level Before Building

Agent autonomy is not binary. There is a spectrum:

| Level | Description | Example |
|-------|-------------|---------|
| **Suggests** | The agent proposes, the human decides | "I recommend closing this ticket as a duplicate" |
| **Acts with approval** | The agent executes after human confirmation | "I'm going to send this email. Confirm?" |
| **Acts autonomously** | The agent executes without intervention | Automatically routes tickets by category |

Define in block 4 (Relationship) what the autonomy level is for each skill. Don't assume that more autonomy is better — it depends on risk and trust.

---

## 3. Knowledge Quality Determines Agent Quality

An agent with a powerful model and a disorganized knowledge base will give poor answers. Before connecting the agent, audit and structure the content.

**For RAG (Retrieval Augmented Generation)**:
- Chunk size between 256–512 tokens, with 10–15% overlap
- Include metadata: source, date, audience
- Version the knowledge base the same way you version code

**Vector databases by profile**:

| Profile | Recommended options |
|---------|-------------------|
| Managed cloud | Azure AI Search · Vertex AI Search · Amazon Kendra · Pinecone |
| Open source / self-hosted | ChromaDB · Weaviate · Qdrant · Milvus |
| Platform-integrated | SharePoint indexes (Copilot Studio) · Confluence (Atlassian Intelligence) |

**General recommendation**: prioritize well-structured documentation over loose documents, regardless of platform. An organized wiki always beats a messy drive.

---

## 4. Observability from Day One

You can't improve what you don't measure. From the first deployment, log:
- User queries
- Agent responses
- Tools invoked
- Latency and costs

**Observability tools by stack**:

| Stack | Options |
|-------|---------|
| LangChain / LangGraph | LangSmith |
| Microsoft | Azure AI Foundry · Application Insights |
| Google Cloud | Vertex AI Model Monitoring |
| Platform-agnostic | LangFuse · Helicone · Weights & Biases · Phoenix (Arize) |

Complement with a simple feedback loop (thumbs up/down) and alerts for latency > threshold, error rate > X%, or token cost above budget.

---

## 5. Regulatory Compliance Is Part of the Design

The EU AI Act classifies agents by their risk level. An IT support agent in a corporate environment generally falls under limited or minimal risk, but you should verify this.

**GDPR**: minimize the data the agent retains. Never store transcripts with PII without explicit consent.

**EU AI Act**: document the agent's purpose, limitations, and human oversight (required for limited-risk systems and above).

**Internal policy**: ensure the legal and security teams validate the design before deploying to production.

---

## 6. Guardrails — Designing the Agent's Boundaries

Guardrails are not restrictions you add at the end — they're part of the design. An agent without explicit guardrails has implicit, poorly defined ones.

### Security

- Separate the system prompt from user input. Never concatenate both without clear delimiters
- Implement an intent classifier before passing the message to the main agent
- Never include credentials, tokens, or sensitive data in the system prompt

### Content Control

- Define what the agent should NOT respond to (competitor topics, confidential information, out-of-scope questions)
- Document these limits in block 4 (Relationship / Personality)
- Test edge cases before going live

### Escalation to Human

- Define clear conditions for escalating to a human agent
- Escalation is not a failure — it's part of good design
- Log all escalations to identify patterns and improve the agent

---

## 7. Iteration and Maintenance

An agent is not a one-time project. It requires ongoing maintenance:

**Weeks 1–4 post-launch:**
- Daily review of queries and responses
- Identify the most common failure points
- Quick iterations on the knowledge base and system prompt

**Monthly:**
- Review KPIs vs. defined objectives
- Update knowledge base with new content
- Gather structured user feedback

**Quarterly:**
- Evaluate whether the agent's scope should be expanded
- Review regulatory compliance
- Update the Agent Canvas to reflect what has been learned

---

## 8. Recommended Stack by Profile

The Agent Canvas is platform-agnostic. Design principles apply regardless of the technology chosen. This table provides orientation:

| Profile | Recommended stack |
|---------|-------------------|
| Microsoft 365 teams | Copilot Studio + Power Automate + SharePoint |
| Google Workspace teams | Vertex AI Agent Builder + Google Drive + AppSheet |
| Technical teams (full control) | LangChain / LangGraph + LangSmith + vector DB |
| Local models (privacy / sovereignty) | Ollama + Open WebUI + ChromaDB |
| Multi-cloud | Azure AI Foundry · Amazon Bedrock Agents · Vertex AI |
| Startups / agile teams | CrewAI · AutoGen · Claude Agent SDK |

**Selection criterion**: choose the stack that best fits your team, existing infrastructure, and governance constraints. There is no single answer — the best platform is the one your team can maintain.

---

## Summary Checklist

Before going to production, verify:

- [ ] Block 1 (User Segment) validated with real users
- [ ] Block 2 (Value Proposition) clear and testable
- [ ] Block 5 (KPIs) defined and measurement infrastructure in place
- [ ] Block 6 (Key Resources) audited and structured
- [ ] Guardrails documented and tested
- [ ] Legal and security review completed
- [ ] Monitoring and alerting in place
- [ ] Escalation to human plan defined

---

**Version:** 3.0 (2026)
**Author:** Jose Antonio Vilar — QMetrika Labs
