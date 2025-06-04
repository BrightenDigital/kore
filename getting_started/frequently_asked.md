# **Frequently Asked Questions**

Welcome to Kore's comprehensive FAQ guide. This section aims to provide clear and concise answers to common questions about our AI-powered platform, helping you maximise its capabilities for accelerated software development, robust knowledge management, and enhanced enterprise productivity.

## **General Questions**

**Q: What is Kore?**<br>
**A:** Kore is a revolutionary AI-powered platform designed to transform software development and enterprise knowledge management. It leverages a sophisticated ecosystem of collaborative AI agents and advanced Large Language Models (LLMs) to help organisations build, modify, understand, and secure code, manage vast knowledge bases, and deploy bespoke AI assistants at scale. Kore’s core mission is to accelerate time-to-market for new features, improve code quality, and unlock the intelligence hidden within your enterprise data, fostering unparalleled productivity and innovation.

**Q: How does the AI Software Team naming work?**<br>
**A:** When you initiate a new project or request, the AI Software Team name is intuitively generated based on your first request or the repository name if you connect an existing Git repository. This initial name provides a clear identifier for your project's dedicated AI team. You retain full flexibility to rename your AI team at any time via the Kore dashboard to better align with your project's evolving focus or internal naming conventions.

**Q: What can I ask the Chat Assistant?**<br>
**A:** The Chat Assistant is your interactive gateway to Kore's intelligence. It has secure access to the contents of your `src` work directory, allowing you to ask for suggestions, tips, or in-depth explanations about your codebase. Beyond code, depending on your configured Enterprise Chatbot and its linked knowledge buckets, you can ask questions to discover data from various internal documents, connected cloud storage (OneDrive, SharePoint), or even external web pages via integrated web scraping. This allows for highly contextual and comprehensive responses across a multitude of topics relevant to your projects and organisation's knowledge.

## **Core Features & Capabilities**

**Q: What core features and capabilities does Kore offer?**<br>
**A:** Kore is a holistic platform offering a rich suite of features designed to cover the entire software development lifecycle and critical enterprise functions:

* **AI Software Team:** Collaborate with specialised AI agents including Martha (Product Manager), Bruce (Architect), and Tilda (Software Engineer). Further agents like Francis (Prompt Engineer), Sarah (Versatile Assistant), and David (Research Assistant) augment this team for comprehensive project execution and insight generation.
* **Greenfield Development:** Accelerate new project starts by generating entire applications from simple prompts, leveraging pre-built tech stack templates and best practices, significantly reducing initial setup time.
* **Feature Implementation:** Seamlessly add new functionalities or modify existing code in your projects, with Kore’s AI agents handling the complex analysis and code generation.
* **Documentation Generation:** Automatically produce comprehensive documentation, including system designs, Product Requirement Documents (PRDs), contextual code explanations, user guides, and API documentation from your codebase and project context.
* **Legacy System Modernisation:** Transform outdated systems by leveraging AI agents to analyse, extract, and re-implement core business logic into new, modern technology stacks, minimising manual effort and risk.
* **Knowledge Discovery & Navigation:** Organise and manage your organisation's collective knowledge base through secure "knowledge buckets," enabling intelligent discovery across diverse formats (Word, Excel, PDF, images) and sources (OneDrive, SharePoint, web pages).
* **Secure Data Management:** Mask sensitive or confidential information (e.g., PII, organisational secrets) to ensure secure interaction with open Large Language Models (LLMs) without disclosing real data.
* **Language Model Configuration:** Manage API keys for various major LLM providers (OpenAI, Google, Anthropic, DeepSeek, Mistral, xAI) and seamlessly integrate your own private or custom LLMs (e.g., HuggingFace, Ollama, AWS hosted).
* **Model Context Protocol (MCP):** Connect your AI agents to external data sources and tools (databases, file systems, APIs) in real-time via an open standard, enabling dynamic data retrieval and action execution.
* **Enterprise Chatbots:** Create, manage, and deploy bespoke AI assistants tailored to specific departmental or project needs, built on combinations of Kore's AI agents and integrated with specific knowledge bases.

## **Git Integration**

**Q: How does Kore's Git integration work?**<br>
**A:** Kore offers robust Git integration to seamlessly connect with your code repositories. You can clone projects directly from a Git URL, ensuring proper permissions are configured (e.g., via a Personal Access Token (PAT) or username:password for private repositories). For public repositories, cloning is generally unrestricted, but pushing updates will always require appropriate authentication. When working with existing repositories, Kore adopts a secure and organised branching strategy: it automatically creates dedicated feature branches, typically prefixed with `kore-workspace-[team_id]-[feature-description]`, to isolate changes and facilitate review.

**Q: How are code updates managed when using Kore?**<br>
**A:** Kore strives to keep your workspace aligned with your main repository branch. A `rebase` or `pull` operation is automatically attempted with each new request to ensure your local working copy is up-to-date with the latest changes from your main branch. It's important for users to exercise caution and actively manage potential merge conflicts that might arise during this process, ensuring code integrity.

## **Knowledge Management**

**Q: What's the difference between Semantic and Long-Term Knowledge in Kore's Knowledge Management?**<br>
**A:** Kore employs a dual memory system for optimal knowledge retrieval:
* **Long-Term Memory:** This acts as a persistent, foundational store. Knowledge placed in long-term memory is *always* available to an agent, providing a core set of facts or rules without additional processing overhead. It's ideal for direct, "cheatsheet-style" information that needs to be constantly present.
* **Semantic Memory:** This is powered by Kore's high-performance, serverless **Retrieval-Augmented Generation (RAG) engine**. When knowledge is added to semantic memory, it's transformed into a vector space. During a query, Kore's RAG engine performs similarity-based retrieval, identifying the most contextually relevant information. This approach is highly recommended for most use cases as it efficiently provides the best contextual information for a given step of an agent's task, significantly augmenting their responses with precision and relevance. Kore RAG leverages state-of-the-art BM25 and vector search, with super-fast embeddings and reranking using models from OpenAI and NVIDIA.

**Q: How should I format knowledge files for optimal processing?**<br>
**A:** Kore is highly versatile in ingesting knowledge. All uploaded documents, regardless of their original format (e.g., Word, Excel, PowerPoint, PDF, text files), are internally converted to Markdown (MD) files for processing. For complex structures, such as intricate diagrams or specific code examples, uploading directly as MD files or even structured text ensures the content is properly processed and understood by the AI agents, maintaining formatting and semantic integrity. Kore also supports image uploads, which are processed by advanced image models to create accurate textual descriptions for AI understanding.

**Q: What are Knowledge Buckets and why are they important?**<br>
**A:** Knowledge Buckets are secure, segregated silos within Kore's Knowledge Management system. They allow your organisation to create distinct groups of knowledge and information (e.g., "Finance," "HR," "Engineering"). These buckets are crucial for:
* **Information Segregation:** Granularly segregating information based on departments, projects, or sensitivity levels.
* **Enhanced AI Certainty:** Enterprise Chatbots can be granted specific access to these buckets, significantly improving and augmenting their responses with highly contextual and accurate information.
* **Access Control:** Kore provides sophisticated access control, allowing you to set Read and Write permissions for individual members on each bucket. Crucially, you can also specify which Enterprise Chatbots have access to which buckets. This means that if an Enterprise Chatbot is connected to multiple knowledge silos, you can still control which members, when using that chatbot, can access the information from a specific silo, ensuring sensitive data is only accessed by authorised users.

**Q: How do I upload or connect knowledge to a bucket?**<br>
**A:** Kore offers multiple flexible methods for populating your knowledge buckets:
* **Direct File Uploads:** Upload various known file formats (Word, Excel, PowerPoint, PDF, text files).
* **Image Uploads:** Upload images, which Kore processes with image models to extract descriptive content for AI understanding.
* **Cloud Drive Integration:** Import files directly from Microsoft OneDrive.
* **SharePoint Folder Linking:** Link entire SharePoint folders, ensuring all their contents are automatically imported and kept synchronised.
* **Web Scraping:** Provide URLs, and Kore's agents will automatically inspect, parse, and incorporate content from webpages.

**Q: How does Kore protect Personally Identifiable Information (PII) within my knowledge base?**<br>
**A:** During the upload process to a knowledge bucket, you can simply check an option to indicate if a document contains Personally Identifiable Information (PII). When this option is selected, Kore's system automatically identifies, extracts, and protects PII using **Kore SLM (Secure Language Models)**. This ensures that sensitive personal data is never shared with open language models or inadvertently exposed, maintaining strict compliance with privacy regulations like GDPR, HIPAA, and CCPA. *(For a detailed explanation, please refer to the dedicated "Kore SLM" chapter in the full documentation).*

## **Usage Questions**

**Q: How do I view my code within Kore?**<br>
**A:** The "Files" section within your Kore workspace mirrors your source code repository. This provides a convenient interface to browse your project's file structure, view the content of individual files directly within the browser, and even download them for offline inspection.

**Q: Which Large Language Model (LLM) should I use for different tasks?**<br>
**A:** Kore supports a wide array of LLMs, each with unique strengths. We often recommend the following based on typical use cases:
* **DeepSeek Chat:** Excellent for everyday tasks, offering a good balance of speed and quality for general queries and simple code operations.
* **Anthropic's Sonnet 3.7:** Ideal for demanding tasks that require more creative thinking, complex reasoning, and nuanced understanding.
* **OpenAI's GPT-4.1:** Offers a superb combination of speed and high-quality outputs, suitable for scenarios where rapid, reliable results are critical.
* **Google's Gemini:** Recommended for exploratory tasks, brainstorming, and generating diverse ideas, leveraging its strong multimodal capabilities.
You can select the default LLM for your Enterprise Chatbots or specific AI agents within the platform's configuration.

**Q: How do I create an Enterprise Chatbot?**<br>
**A:** Creating an Enterprise Chatbot involves an intuitive, multi-step process within the "Enterprise Chatbots" section of the Organization dashboard. You'll define the chatbot's name, description, and category; select the Kore AI Agents that will form its intelligence (e.g., Architect, Engineer); personalise agent names and descriptions to align with your organisation's culture; choose relevant stack templates to guide its output structure; and configure advanced settings like the default LLM. Once configured, you can manage its lifecycle through Draft, Published, Released, and Archived statuses.

**Q: How do I manage collaborators within my Kore organisation?**<br>
**A:** The "Members" area within the Organization section provides a centralised interface for managing your organisation's collaborators. You can invite new members via email, assign specific roles (e.g., Owner, Reader) to control their access and permissions, and oversee their participation. This ensures secure and efficient teamwork across your AI initiatives, from utilising chatbots to managing knowledge or configurations.

**Q: How do I secure sensitive enterprise data when using Kore's AI?**<br>
**A:** Kore offers a robust "Secure Data Management" feature. Here, you can define sensitive or confidential information (e.g., customer names, internal project IDs) and specify how they should be masked. This ensures that even when AI agents interact with open LLMs, the real, sensitive data is never exposed. The masking happens transparently at the AI level, while your organisation members continue to see and interact with the unmasked information.

**Q: Can I integrate my own custom Large Language Models or connect to external tools with Kore?**<br>
**A:** Absolutely. Kore offers unparalleled flexibility. In the "Language Models" section, you can register your own private or custom LLMs (e.g., models hosted on HuggingFace, Ollama, or your own AWS infrastructure) by providing their API endpoints and configuration parameters. Furthermore, Kore's "Model Context Protocol (MCP)" allows you to securely connect your AI agents to external data sources and tools (like databases, file systems, or custom APIs) in real-time. This extends the capabilities of your AI beyond its training data, enabling it to retrieve live information and perform actions within your existing enterprise ecosystem.
