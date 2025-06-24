
# ✨ **Kore's Visionary Roadmap: Charting the Future of Collaborative AI**

At Kore, we're relentlessly innovating to expand the frontiers of AI-driven enterprise productivity. Our roadmap isn't just a list of features; it's a testament to our commitment to delivering a platform that continuously empowers your teams, streamlines workflows, and transforms complex challenges into seamless operations. We're building the future, hand-in-hand with our users, and here's a glimpse into the exciting developments on our horizon.

We're driven by a singular mission: to make your interaction with AI agents more intuitive, intelligent, and impactful. Our upcoming enhancements focus on deeper contextual understanding, enhanced control, broader integrations, and even more robust performance, ensuring Kore remains at the cutting edge of AI-powered collaboration.

## Overview

This section presents a brief overview of our current and planned initiatives, including their respective statuses.

**Status Indicators:**

* **🚀 Launched:** Feature has been successfully released and is available.
* **✅ Completed:** Feature development is finished and ready for release.
* **🛠️ In Progress:** Feature is actively under development.
* **💡 Planned:** Feature is in the conceptual or planning phase.
* **🔄 Under Review:** Feature is undergoing internal review or testing.
* **⏸️ Paused:** Development on this feature is temporarily on hold.

---

### 🧠 **Agent Intelligence & Workflow Optimisation**

Initiatives that enhance agent behavior, improve their memory, output, or operational logic.

| Initiative                               | Status          | Timeline |
| :--------------------------------------- | :-------------- | :------- |
| Short-Term Memory for Agents             | ✅ Completed     | Jun 2025 |
| Enhanced Prompt Engineering              | 💡 Planned      | Jul 2025 |
| Optimised Agent Output Structures        | 🚀 Launched     | Mar 2025 |
| Repository-Specific KoreRules Generation | 🔄 Under Review |          |

---

### 📚 **Knowledge & Data Enrichment**

Initiatives that expand or refine the way data and documents are handled, stored, interpreted and retrieved.

| Initiative                           | Status          | Timeline |
| :----------------------------------- | :-------------- | :------- |
| Persistent AsyncWebCrawler Sessions  | 💡 Planned      | Sep 2025 |
| **Enterprise document assistant**    | 🛠️ In Progress | Jul 2025 |
| Image analysis for knowledge uploads | ✅ Completed     | Jun 2025 |
| Improved File List Presentation      | ✅ Completed     | Jun 2025 |
| Multilingual Document Identification | ✅ Completed     | Jun 2025 |
| Optimising `get_files` Performance   | ✅ Completed     | Jun 2025 |
| Organisational Brain Concept         | ✅ Completed     | Jun 2025 |
| **SlideCraft team**                  | ✅ Completed     | Jun 2025 |

---

### 🔗 **Integrations & User Experience**

Initiatives focused on how users and systems interact with the platform, including auth, UX, and platform connectors.

| Initiative                       | Status          | Timeline |
| :------------------------------- | :-------------- | :------- |
| Google Drive connector           | 💡 Planned      | Jan 2026 |
| Single Sign-On with Google and Microsoft            | 💡 Planned      | Oct 2025 |
| Contextual Git Branch Management | 🚀 Launched     | Mar 2025 |
| GitHub Actions Integration       | 🔄 Under Review |          |


## **Agent Intelligence & Workflow**

Our core focus is on refining the intelligence and collaborative dynamics of Kore's AI agents to unlock new levels of efficiency. These initiatives aim to provide granular control, enhance AI reasoning, and streamline output for a more productive environment.

* **Refined Team Management:** Gain seamless control over your AI teams by streamlining the process for disabling and reactivating them, ensuring operational states are managed with ease.
* **Contextual Branch Management:** Experience intuitive Git operations directly within Kore! We're implementing API endpoints for direct push operations to the current branch, alongside intuitive UI actions for branch-specific interactions, complete with real-time notification snackbars.
* **Enhanced Prompt Engineering:** Elevate your AI requests with smarter prompting. We're leveraging "suggestions" to improve the effectiveness of the Prompt Engineer (Albert), guiding users towards more precise and impactful AI interactions.
* **Optimised Agent Output Structures:** Achieve clearer insights from your AI teams. We're refining the payload structure for `market/teams` responses to ensure clarity, eliminate redundant fields (e.g., duplicate `Description` with `goal`), and present information more effectively.
* **Improved File List Presentation:** Enhance readability and navigation. We're relocating the `File List` node(s) to appear logically after the `Program Call Flow` node. Additionally, we're exploring displaying this information in a collapsible format, similar to `Source Code`, for a cleaner UI presentation.
* **Organisational Brain Concept:** Unleash advanced knowledge retention. We're developing a "Conceptual Organisational Brain" to significantly enhance cross-project and long-term knowledge retention and application by agents, fostering deeper institutional learning.
* **Short-Term Memory for Agents:** Facilitate seamless agent-to-agent communication. We're introducing a new "short-term" memory type specifically for direct agent interactions (e.g., Martha to Engineer), enabling more fluid, context-aware task handovers and collaborative problem-solving.
* **Optimising `get_files` Performance:** Experience lightning-fast data retrieval. We are actively investigating and resolving performance bottlenecks within the `get_files` operation to significantly improve speed and responsiveness across the platform.

## **Knowledge & Data Enrichment**

We're expanding Kore's ability to ingest, process, and leverage information from a multitude of sources, turning raw data into actionable knowledge. These features focus on diversifying data input, enhancing rule generation, and ensuring data integrity.

* **Image Model for Brain Uploads:** Bridge the visual-textual gap. We're developing an image processing model that can analyze uploaded images and extract relevant content/context via LLMs, significantly enriching your Organisational Brain with visual information.
* **Contextual KoreRules Generation:** Automate rule creation. When processing content in batches, we're planning to incorporate a section for auto-generated `KoreRules` based on the content, using parallel prompts and action nodes to enhance rule customisation and efficiency.
* **Multilingual Document Identification:** Break down language barriers. We're enhancing FastRAG to automatically identify and store the language of the source document, dramatically improving multilingual knowledge retrieval and accessibility.
* **Repository-Specific KoreRules Generation:** Tailor rules to your code. We're introducing the capability to generate `KoreRules` directly from a connected repository, allowing guidelines to be precisely tailored to a project's existing structure and coding patterns.
* **Automated Docker Deployment & API Execution:** Streamline your DevOps. We're developing a pipeline to launch Docker containers and execute specific APIs, providing real-time notifications for relevant events or issues, ensuring smoother deployment and monitoring.
* **Persistent AsyncWebCrawler Sessions:** Enhance continuous data ingestion. We are ensuring that `AsyncWebCrawler` sessions remain open and active for continuous, efficient web data ingestion, keeping your knowledge base always up-to-date.

## **Integrations & User Experience**

Our roadmap includes key integrations and user experience enhancements to make Kore even more accessible, collaborative, and powerful. These updates focus on seamless external connections, intuitive control, and enriched user feedback.

* **GitHub Actions Integration:** Keep your documentation pristine. We're creating dedicated GitHub Actions to automate the update of repository documentation and facilitate continuous testing, ensuring documentation remains accurate and up-to-date with successful test runs.
* **Cloud Drive Integration:** Connect with your content. Integrating with GraphAPI (for Microsoft services like OneDrive/SharePoint) and Google Drive to expand connectivity for document and file management, bringing all your content into Kore.
* **Single Sign-On (SSO):** Enhance convenience and security. Activating "Login with Google" and "Login with Microsoft" options for enhanced user convenience and a more secure login experience.
* **Agent Status Visibility:** Gain real-time insights. Introducing clear status indicators for agent roles within a team (e.g., "AUTO," "READY," "STILL WORKING ON IT"), providing transparency on their current operational state and progress.
* **Optimised Chat Assistant:** Achieve faster, more relevant responses. Refining the Chat Assistant to avoid sending entire source code, instead intelligently leveraging "related" content based on the user's question, significantly improving response efficiency and relevance.
* **Email Notifications:** Stay informed effortlessly. Implementing an "Update Me" toggle for email notifications, informing users promptly when their AI team has completed a critical task or milestone.

