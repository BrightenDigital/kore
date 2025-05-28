# ✨ **Kore's Visionary Roadmap: Charting the Future of Collaborative AI**

At Kore, we're relentlessly innovating to expand the frontiers of AI-driven enterprise productivity. Our roadmap isn't just a list of features; it's a testament to our commitment to delivering a platform that continuously empowers your teams, streamlines workflows, and transforms complex challenges into seamless operations. We're building the future, hand-in-hand with our users, and here's a glimpse into the exciting developments on our horizon.

We're driven by a singular mission: to make your interaction with AI agents more intuitive, intelligent, and impactful. Our upcoming enhancements focus on deeper contextual understanding, enhanced control, broader integrations, and even more robust performance, ensuring Kore remains at the cutting edge of AI-powered collaboration.

## **Agent Intelligence & Workflow Optimisation**

Our core focus is on refining the intelligence and collaborative dynamics of Kore's AI agents to unlock new levels of efficiency:

* **Refined Team Management:** Streamlining the process for disabling and reactivating AI teams, ensuring seamless control over operational states.
* **Contextual Branch Management:** Implementing API endpoints for direct push operations to the current branch, alongside intuitive UI actions for branch-specific interactions, complete with notification snackbars.
* **Enhanced Prompt Engineering:** Leveraging "suggestions" to improve the effectiveness of the Prompt Engineer (Albert), guiding users towards more precise and impactful AI requests.
* **Optimised Agent Output Structures:** Refining the payload structure for `market/teams` responses to ensure clarity, eliminate redundant fields (e.g., duplicate `Description` with `goal`), and present information more effectively.
* **Improved File List Presentation:** Relocating the `File List` node(s) to appear after the `Program Call Flow` node for logical sequencing. We're also exploring displaying this information in a collapsible format similar to `Source Code` for cleaner UI presentation.
* **Organisational Brain Concept:** Developing a "Conceptual Organisational Brain" to enhance cross-project and long-term knowledge retention and application by agents.
* **Short-Term Memory for Agents:** Introducing a new "short-term" memory type specifically for agent-to-agent communication (e.g., Martha to Engineer), facilitating more fluid and context-aware task handovers.
* **Optimising `get_files` Performance:** Investigating and resolving performance bottlenecks within the `get_files` operation to significantly improve speed and responsiveness.

## **Knowledge & Data Enrichment**

We're expanding Kore's ability to ingest, process, and leverage information from a multitude of sources, turning raw data into actionable knowledge:

* **Image Model for Brain Uploads:** Developing an image processing model that can analyse uploaded images and extract relevant content/context via LLMs, enriching the Organisational Brain.
* **Contextual KoreRules Generation:** When processing content in batches, we're planning to incorporate a section for auto-generated `KoreRules` based on the content, using parallel prompts and action nodes to enhance rule customisation.
* **FastRAG Duplication Protection:** Implementing robust protection mechanisms against duplicate results within the FastRAG system to ensure data integrity and query efficiency.
* **Multilingual Document Identification:** Enhancing FastRAG to identify and store the language of the source document, improving multilingual knowledge retrieval.
* **Base64 Usage Review:** Re-evaluating the necessity and efficiency of Base64 encoding for data transfer, with a view to optimising performance.
* **Repository-Specific KoreRules Generation:** Introducing the capability to generate `KoreRules` directly from a connected repository, tailoring guidelines precisely to a project's existing structure and patterns.
* **Automated Docker Deployment & API Execution:** Developing a pipeline to launch Docker containers and execute specific APIs, providing real-time notifications for relevant events or issues.
* **Persistent AsyncWebCrawler Sessions:** Ensuring that `AsyncWebCrawler` sessions remain open and active for continuous, efficient web data ingestion.
* **Managed Container Platform (MCP):** Further development and integration of our Managed Container Platform for scalable and efficient service orchestration.

## **Integrations & User Experience**

Our roadmap includes key integrations and user experience enhancements to make Kore even more accessible, collaborative, and powerful:

* **GitHub Actions Integration:** Creating dedicated GitHub Actions to automate the update of repository documentation and facilitate continuous testing, ensuring documentation remains accurate and up-to-date with successful test runs.
* **Stripe Payment Integration:** Implementing full Stripe integration for seamless payment processing, including bank account configuration and flexible plan definitions.
* **Cloud Drive Integration:** Integrating with GraphAPI (for Microsoft services) and Google Drive to expand connectivity for document and file management.
* **Single Sign-On (SSO):** Activating "Login with Google" and "Login with Microsoft" options for enhanced user convenience and security.
* **Prompt Engineer as Requirement Assistant:** Transforming the Prompt Engineer into a dedicated requirement creation assistant for the AI Software Team's Product Manager (Martha), with the added ability to directly incorporate requirements into the Knowledge Base.
* **Agent Status Visibility:** Introducing status indicators for agent roles within a team (e.g., "AUTO," "READY," "STILL WORKING ON IT"), providing transparency on their current operational state.
* **Individual Agent Control:** Empowering each user within a team to control their specific AI agent, allowing for more personalised and focused interaction.
* **Optimised Chat Assistant:** Refining the Chat Assistant to avoid sending entire source code, instead intelligently leveraging "related" content based on the user's question, significantly improving response efficiency and relevance.
* **Email Notifications:** Implementing an "Update Me" toggle for email notifications, informing users when their AI team has completed a task.
* **Mermaid Diagram Generation:** Introducing an agent specifically designed to generate Mermaid diagrams from natural language or code context, enhancing visual documentation.
* **Business Value (BV) Consideration:** Integrating the `ReconstructDesignAPI` into the project timeline, allowing for continuous assessment and alignment of design decisions with business value throughout the development lifecycle.

---

We're incredibly excited about these upcoming developments and believe they will further solidify Kore's position as an indispensable platform for modern enterprises. Stay tuned for updates as we continue to build a smarter, more collaborative future.