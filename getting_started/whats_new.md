markdown
# 🚀 What's New

## December 2025

Welcome to the December 2025 release of Compass! This month brings powerful enhancements to our presentation capabilities, advanced orchestration features, and significant improvements to our CLI experience. We've focused on making Compass more intelligent, more flexible, and more enterprise-ready than ever before.

> **TL;DR**: The December 2025 Compass update (v1.0.44) introduces **OnDeck presentation refinement**, **TaskOrchestrator for complex workflows**, **enhanced CLI with directory authorization**, **organization templates**, **audio generation capabilities**, and **comprehensive prompt management**. Key improvements include **delta-based presentation modifications**, **MapToRoles for intelligent team composition**, **blueprint management**, and **Azure Blob Storage integration** for scalable asset management.

### Presentation Excellence with OnDeck

We've revolutionized how you work with presentations through our enhanced OnDeck (formerly Presenter2) capabilities.

* **Delta-Based Presentation Modification:** OnDeck now intelligently modifies existing presentations by tracking changes and applying only necessary updates, preserving your existing work while incorporating new content seamlessly.
* **Selective Image Regeneration:** Images are regenerated only when content changes require it, significantly improving performance and reducing unnecessary API calls.
* **State-Aware Actions:** The presentation engine now maintains awareness of the current presentation state, enabling more intelligent decision-making during modifications.
* **Versioned Output:** All presentation exports now include version numbers in filenames, making it easy to track iterations and maintain document history.
* **Enhanced Slide Generation:** Improved prompt handling for visual generation ensures more accurate and contextually relevant slide imagery.

### Intelligent Orchestration & Team Composition

Compass now features advanced orchestration capabilities for managing complex, multi-team workflows.

* **TaskOrchestrator Role:** A new specialized role that coordinates multiple teams, manages task distribution, and ensures seamless workflow execution across complex projects.
* **MapToRoles Action:** Intelligent role suggestion and team composition based on project requirements, automatically identifying capability gaps and recommending appropriate team members.
* **Global Roles Service:** Centralized role management with caching for improved performance and consistency across the platform.
* **Direct Role Hiring:** TaskOrchestrator can now directly hire and execute roles with cache support, streamlining team assembly and task execution.
* **Workflow Coordination:** Enhanced coordination logic ensures smooth handoffs between teams and maintains project context throughout complex workflows.

### CLI Enhancements & Developer Experience

The Compass CLI has received significant improvements for better security and usability.

* **Directory Trust Authorization:** New security feature requiring explicit user authorization before accessing directories, preventing unauthorized file system access.
* **Enhanced Console Experience:** Improved waiting indicators, trigger handlers, and live team log streaming for better visibility into agent activities.
* **Suppress Output Context:** Async context manager for cleaner console output during long-running operations.
* **Team Reconstruction Support:** Seamless team state restoration with user prompts and automatic role reinitialization.
* **Working Directory Support:** CLI now supports custom working directories via command-line options, enabling flexible project organization.

### Organization Templates & Customization

Empower your organization with custom templates and standards.

* **Organization Template Management:** Upload, manage, and share custom templates across your organization for consistent output formatting.
* **Primary Template Selection:** Designate primary templates for different file types, ensuring agents use your preferred formats by default.
* **Template Fallback Logic:** Intelligent fallback system that tries organization templates first, then base templates, ensuring agents always have appropriate guidance.
* **Template Listing API:** Comprehensive endpoints for listing team and organization templates with filtering capabilities.
* **Default Templates Integration:** Templates are automatically populated in team contexts and available to all agents.

### Audio & Sound Generation

Expand your creative capabilities with new audio generation features.

* **Sound Effect Generation:** Generate custom sound effects and audio clips using natural language descriptions.
* **Audio File Management:** Seamlessly save and organize generated audio files within your project structure.
* **Integration with WriteDiff:** Audio generation is now integrated into the code modification workflow, enabling multimedia content creation.
* **Prompt Optimization:** Intelligent prompt truncation and optimization ensures high-quality audio generation within model constraints.

### Blueprint Management & Project Templates

Streamline project setup with enhanced blueprint capabilities.

* **Blueprint Publishing:** Publish and share project blueprints within your organization's marketplace.
* **Blueprint Import/Export:** Import complete project structures with team assignments and workflow configurations.
* **Blueprint Verification:** Verify and validate blueprints before deployment to ensure compatibility and completeness.
* **Category Support:** Organize blueprints by category for easier discovery and selection.
* **Team Assignment Metadata:** Blueprints now include detailed team assignment information, including categories and workflow positions.

### Azure Blob Storage Integration

Enterprise-grade asset management with Azure Blob Storage.

* **Image Upload to Azure:** Automatically upload generated images to Azure Blob Storage for scalable, reliable asset management.
* **Blob Name Tracking:** Track blob storage resources in team contexts for easy cleanup and management.
* **URL-Based Image References:** Presentations and documents now reference images via Azure URLs, eliminating local file dependencies.
* **Automatic Cleanup:** Blob storage resources are automatically cleaned up when teams are deleted, preventing orphaned assets.
* **Secure Storage:** All uploads use secure Azure connections with proper authentication and encryption.

### Prompt Management System

Centralized prompt management for consistency and flexibility.

* **PromptManager Service:** New centralized service for managing prompts with multi-tenancy support and versioning.
* **Dynamic Prompt Retrieval:** Actions and roles now retrieve prompts dynamically from the PromptManager, enabling runtime updates without code changes.
* **Prompt Database:** Dedicated database table for storing and managing prompts with comprehensive metadata.
* **Type-Safe Formatting:** Prompts support type-safe parameter substitution with validation and error handling.
* **Usage Examples:** Comprehensive examples and documentation for creating and managing prompts.

### Performance & Stability Improvements

* **Distributed Locking:** Enhanced distributed locking for history file operations prevents race conditions in multi-worker environments.
* **Cache Reconciliation:** Automated cache reconciliation job detects and repairs drift between memory and Redis.
* **Storage Health Monitoring:** Async storage health monitoring with lock management ensures system reliability.
* **Redis Connection Improvements:** Simplified Redis initialization with better error logging and connection management.
* **Multi-Worker Support:** Improved support for multiple workers with proper task distribution and synchronization.

### Developer Experience Enhancements

* **Comprehensive Docstrings:** Added extensive documentation to core modules including Role, Action, Context, Config, and Environment classes.
* **Markdown Documentation:** Generated detailed markdown documentation for key system components.
* **Debug Configurations:** Added VS Code debug configurations for easier development and troubleshooting.
* **Timer Decorators:** Detailed performance timing throughout the codebase for identifying bottlenecks.
* **Improved Error Handling:** Enhanced error messages and stack traces for faster debugging.

---

## November 2025

Welcome to the November 2025 release! This month brings significant enhancements to our LLM ecosystem, powerful new presentation capabilities, and major improvements to our knowledge management system. We've focused on expanding model support, enhancing document processing, and delivering enterprise-grade features.

> **TL;DR**: The November 2025 Compass update (v1.0.40-v1.0.43) introduces **Claude Opus 4.5**, **Gemini 2.5 Pro**, **enhanced Excel AI capabilities**, **push notifications**, **Presenter2/OnDeck for advanced presentations**, and **comprehensive brain queue management**. Key improvements include **image generation with Azure integration**, **PDF conversion**, **MCP injection instructions**, and **organization rules integration**.

### Expanded LLM Support

Compass now supports the latest and most powerful language models from leading providers.

* **Claude Opus 4.5 (claude-opus-4-5-20251101):** Added support for Anthropic's most capable model with enhanced reasoning and extended context capabilities.
* **Claude Haiku 4.5 (claude-haiku-4-5-20251001):** Fast, efficient model for high-throughput tasks with excellent cost-performance ratio.
* **Gemini 2.5 Pro Preview:** Integration with Google's latest Gemini model featuring advanced multimodal capabilities.
* **GPT-5 Codex & GPT-5.1:** Support for OpenAI's next-generation models with improved coding and reasoning abilities.
* **Model Provider Mapping:** Enhanced token counter with comprehensive model-to-provider mapping for accurate cost tracking.

### Presenter2 (OnDeck) - Advanced Presentation Generation

Transform your presentation workflow with our new advanced presentation engine.

* **Slidecraft Integration:** New Presenter2 role (renamed to OnDeck) with sophisticated slide generation capabilities.
* **Image Generation & Publishing:** Automatic image generation for slides with parallel processing and batch operations.
* **Azure Blob Storage Integration:** Generated images are uploaded to Azure Blob Storage and referenced via URLs in presentations.
* **Versioned Filenames:** Presentations are exported with version numbers and sanitized filenames for better organization.
* **Visual Prompt Enhancement:** Improved visual generation prompts with detailed guidance for image creation.
* **Batch Processing:** Efficient batch processing of slides and images for faster presentation generation.

### Excel AI Service

Powerful AI capabilities for Excel document processing and generation.

* **Excel Document Creation:** Generate Excel spreadsheets with AI-powered content and formatting.
* **Organization Rules Integration:** Excel AI service now incorporates organization rules and policies into system prompts.
* **User API Key Support:** Excel endpoints support user-specific API keys with caching for improved performance.
* **Tenant Context:** Full tenant organization rules and policies are available to Excel AI operations.
* **Enhanced Prompts:** Improved system prompts for better Excel content generation and formatting.

### Push Notifications

Stay informed with real-time notifications for important events.

* **Task Completion Notifications:** Receive notifications when AI teams complete tasks or reach milestones.
* **Error Notifications:** Get alerted when errors occur during task execution.
* **Metadata Support:** Rich notification metadata including team information, task details, and status updates.
* **VAPID Key Management:** Secure push notification setup with VAPID key generation and management.
* **Blob Storage Cleanup:** Notifications include information about resource cleanup and blob storage operations.

### Knowledge Management Enhancements

Significant improvements to how Compass processes and manages knowledge.

* **Brain Update Queue:** New queue system with Redis locking for safe concurrent brain.json updates.
* **Async File Operations:** Brain queue now uses aiofiles for improved performance and reliability.
* **Source Metadata Handling:** Enhanced brain source metadata with async queue fallback.
* **Add Source Updates:** New update type for adding sources to the brain with proper queue integration.
* **Individual Source Processing:** Brain sources are now processed individually for better error handling and tracking.

### Document Processing & Conversion

Enhanced capabilities for document generation and conversion.

* **PDF Conversion:** Automatic PDF conversion for generated documents using LibreOffice.
* **Async PDF Processing:** Non-blocking PDF conversion that doesn't interrupt workflow.
* **Error Handling:** Graceful error handling for PDF conversion with detailed logging.
* **Multiple Format Support:** Documents can be exported in DOCX, PDF, and other formats.
* **Version Management:** Document exports include version numbers for better tracking.

### MCP Server Enhancements

Expanded Model Context Protocol capabilities for better tool integration.

* **Injection Instructions:** MCP servers can now provide injection instructions for tool usage guidance.
* **Context7 MCP Server:** New Context7 server for enhanced contextual information retrieval.
* **Tool Usage Instructions:** Automatic injection of MCP tool usage instructions into agent prompts.
* **Organization/User Enforcement:** MCP tools now enforce organization and user ID requirements.
* **Project ID Support:** MCP tool arguments include kore_project_id for project-scoped operations.

### Image Generation & Management

Comprehensive image generation capabilities with cloud storage integration.

* **Generate and Upload Image:** New unified function for generating images and uploading to Azure Blob Storage.
* **Filename Support:** Image generation now supports custom filenames for better organization.
* **Cost Tracking:** Detailed cost calculation and logging for image generation operations.
* **Observability Support:** Image generation includes persistent JSON logging for operations tracking.
* **Error Handling:** Robust error handling with fallback mechanisms for image generation failures.

### Performance & Reliability

* **Cache Synchronization:** Improved cache synchronization between memory and Redis for data consistency.
* **Distributed Locking:** Enhanced distributed locking for team operations to prevent race conditions.
* **Storage Health Checks:** Async storage health monitoring with lock management.
* **Version Tracking:** Team state now includes version field for better state management.
* **Backup Sync Utilities:** Enhanced backup sync with detailed logging and error handling.

---

## October 2025

Welcome to the October 2025 release! This month brings groundbreaking features including Claude Code integration, comprehensive project management capabilities, and powerful workflow orchestration. We've focused on enabling complex multi-team collaboration and providing enterprise-grade project management tools.

> **TL;DR**: The October 2025 Compass update (v1.0.28-v1.0.35) introduces **Claude Code integration**, **Projects with workflow management**, **Chat Companion**, **KoreDocs management**, **organizational blueprints**, and **comprehensive cost tracking**. Key improvements include **team workflows**, **project blueprints**, **federated querying**, and **enhanced team lifecycle management**.

### Claude Code Integration

Seamless integration with Anthropic's Claude Code for enhanced development capabilities.

* **ClaudeCode Role:** New specialized role for Claude Code interactions with async action handling and message integration.
* **ClaudeChat Action:** Dedicated action for Claude Code queries with workspace boundary enforcement.
* **SDK Integration:** Integration with claude-agent-sdk v0.1.5 for robust Claude Code functionality.
* **Marketplace Entry:** Claude Code assistant available in the marketplace with pre-configured MCP server settings.
* **Security Rules:** Strict workspace path confidentiality and security rules for Claude Code operations.

### Projects & Workflow Management

Revolutionary project management capabilities for complex multi-team initiatives.

* **Project Creation & Management:** Create and manage projects with multiple team assignments and workflow configurations.
* **Workflow Settings:** Define workflows with team ordering, connections, and execution modes (auto/manual).
* **Team-Project Association:** Associate teams with projects and manage their roles within project workflows.
* **Project Running State:** Track project execution state with automatic updates on team start/stop.
* **Blueprint Import/Export:** Import complete project structures with team assignments and workflow definitions.

### Organizational Blueprints

Share and reuse project templates across your organization.

* **Blueprint Publishing:** Publish project blueprints to organizational marketplace for team discovery and reuse.
* **Blueprint Retrieval:** Retrieve and filter blueprints by status, category, and other criteria.
* **Blueprint Deletion:** Permanently delete blueprints from organizational marketplace.
* **Blueprint Models:** Comprehensive models for blueprint metadata, team assignments, and workflow configurations.
* **Status Management:** Manage blueprint lifecycle through draft, published, and released states.

### Chat Companion

Intelligent chat assistant with organization context and MCP integration.

* **Organization Rules Integration:** Chat companion incorporates organization rules and policies into responses.
* **KoreDocs Support:** Access to organization documentation (koreDocs.md) for contextual assistance.
* **MCP Server Setup:** Chat companion includes MCP server configuration for enhanced capabilities.
* **User Context:** Full user information and organization context available to chat companion.
* **Streaming Support:** Real-time streaming responses for interactive chat experience.

### KoreDocs Management

Automated documentation management with LLM-powered updates.

* **Automated Updates:** KoreDocs.md is automatically updated based on project changes and team activities.
* **API Endpoints:** Comprehensive CRUD endpoints for managing KoreDocs content.
* **Markdown Extraction:** Centralized markdown extraction utility for consistent documentation formatting.
* **Git Integration:** KoreDocs changes are tracked in Git with proper diff handling.
* **Fallback Defaults:** Default KoreDocs content provided when organization-specific documentation is unavailable.

### Cost Tracking & Usage Analytics

Comprehensive cost tracking and usage analytics for better resource management.

* **Model-Level Cost Tracking:** Track costs by specific model and provider for detailed analytics.
* **Organization Costs Endpoint:** Aggregate cost data across all teams and projects in an organization.
* **Usage Tracking:** Track token usage per model with detailed breakdowns.
* **Cost Models:** Comprehensive models for tracking costs, usage, and team expenses.
* **Teams Costs Aggregation:** Aggregate cost data across multiple teams for organizational reporting.

### Team Lifecycle Enhancements

Improved team management with better state tracking and cleanup.

* **Team History Management:** Enhanced history retrieval with archiving support and timezone handling.
* **Message Archiving:** Archive old messages with has_archived_messages flag for better performance.
* **Team Deletion Cleanup:** Comprehensive cleanup of team resources including blob storage and project associations.
* **TTL Support:** Time-to-live support for teams with automatic stale team cleanup.
* **Team Refresh:** Refresh team status and update cache with proper state synchronization.

### Database Intelligence

Enhanced database connectivity and query capabilities.

* **Federated Querying:** Query multiple databases and data sources simultaneously for comprehensive results.
* **Schema Inference:** Dynamic schema analysis and understanding for optimal query generation.
* **Safe SQL Generation:** Generate safe, optimized SQL queries with injection prevention.
* **Multi-Engine Support:** Support for MSSQL Server, PostgreSQL, MySQL, and Oracle databases.
* **Real-Time Processing:** Real-time query execution with optional result persistence.

---

## September 2025

Welcome to the September 2025 release! This month brings foundational improvements to our core platform, enhanced email capabilities, and significant performance optimizations. We've focused on stability, security, and developer experience.

> **TL;DR**: The September 2025 Compass update (v1.0.23-v1.0.27) introduces **SendGrid email integration**, **enhanced document processing**, **improved Git workflows**, **booster management**, and **comprehensive logging**. Key improvements include **attachment support**, **context filtering**, **team state management**, and **performance optimizations**.

### Email Service Enhancements

Powerful email capabilities with SendGrid integration and attachment support.

* **SendGrid Integration:** Updated EmailService to use SendGrid for reliable email delivery.
* **Attachment Support:** Full support for email attachments with proper file path handling.
* **CC/BCC Support:** Enhanced email service with CC and BCC recipient support.
* **SMTP Configuration:** Optional SMTP settings for organizations preferring traditional email delivery.
* **Email Triggers:** Comprehensive trigger logging for email actions and delivery status.

### Document Processing Improvements

Enhanced document handling and media generation capabilities.

* **Media Generation:** Improved CreateMedia action with better document generation and export logic.
* **Document Versioning:** Automatic versioning for generated documents with proper filename handling.
* **Image Integration:** Seamless integration of generated images into documents before export.
* **Office File Handling:** Improved handling of empty paragraphs and better error tracing in office file processing.
* **Markdown to DOCX:** Enhanced markdown to DOCX conversion with proper base path handling.

### Git Integration Enhancements

Improved Git workflows and repository management.

* **Branch Management:** Enhanced branch creation and management with better naming conventions.
* **Commit Improvements:** Better commit message formatting and history tracking.
* **Repository Sync:** Improved repository synchronization with proper conflict handling.
* **Deployment Integration:** Enhanced deployment service integration with sandbox support.
* **Git URL Retrieval:** Dynamic Git URL retrieval for teams without pre-configured repositories.

### Booster Management

Comprehensive booster management for team capabilities.

* **Publish/Verify Endpoints:** New endpoints for publishing and verifying team boosters with pagination.
* **Category Filtering:** Filter boosters by category for easier discovery and management.
* **Tenant Boosters:** Organization-level booster management with category support.
* **Booster Models:** Enhanced models for booster metadata and configuration.
* **Stack Integration:** Boosters integrated with stack definitions for enhanced functionality.

### Performance Optimizations

Significant performance improvements across the platform.

* **Summarize Actions:** Performance improvements to _new_summarize_actions for faster processing.
* **Context Filtering:** Enhanced FilterContextParser with XML tag format support and improved parsing logic.
* **Deep Search:** Optimized deep search functionality with better MCP server integration.
* **Logger Rotation:** Added logger rotation and retention for better log management.
* **Caching Improvements:** Enhanced caching strategies for improved response times.

### Developer Experience

Improved tools and utilities for developers.

* **Coding Context:** Extended category field with more context types for better code organization.
* **Debug Logging:** Enhanced debug logging throughout the codebase for easier troubleshooting.
* **Error Handling:** Improved error handling with better exception messages and stack traces.
* **Validation:** Runtime validation for LLM models and roles to catch configuration errors early.
* **Documentation:** Improved inline documentation and code comments for better maintainability.

---

## August 2025

Welcome to the August 2025 release! This month delivers significant improvements to the user interface, enhanced team management capabilities, and powerful new features for knowledge organization. We've focused on making Compass more intuitive, more flexible, and more powerful for everyday use.

> **TL;DR**: The August 2025 Compass update (v1.0.164-v1.0.176) introduces **enhanced UI/UX with grid and list views**, **improved knowledge management with role-specific uploads**, **MCP server propagation**, **user language preferences**, and **comprehensive team lifecycle improvements**. Key improvements include **agent icon customization**, **execution timers**, **model selection enhancements**, and **streamlined team creation workflows**.

### Enhanced User Interface & Experience

We've completely refreshed the Compass interface to make it more intuitive and visually appealing.

* **Grid and List View Modes:** Switch between grid and list views for teams and agents, giving you flexibility in how you organize and visualize your workspace.
* **Agent Icon Customization:** Personalize your agents with custom icons from an expanded icon library, making it easier to identify and distinguish between different team members.
* **Improved Chat Interface:** Enhanced chat bot component with better scroll functionality, active agent highlighting, and cleaner message display.
* **Execution Timer:** Real-time execution timer shows how long your AI teams have been working, providing transparency into task progress.
* **Dark Theme Compatibility:** Refined CSS and styling to ensure seamless compatibility with dark themes across all components.
* **Responsive Design:** Improved mobile and tablet experience with better layout management and touch-friendly controls.

### Knowledge Management Enhancements

Powerful new capabilities for organizing and managing your organizational knowledge.

* **Role-Specific Knowledge Uploads:** Upload knowledge and assign it to specific agents or share it across the entire team, giving you granular control over information distribution.
* **Enhanced Upload Instructions:** Improved guidance and instructions in the knowledge upload dialog, making it easier to understand how to structure and provide information.
* **Summarize Option:** New option to enable or disable automatic summarization of uploaded knowledge, optimizing for either comprehensive detail or concise overviews.
* **Image Analysis:** Upload images and have them automatically analyzed and described by advanced image models, making visual information accessible to AI agents.
* **Multilingual Support:** Improved handling of multilingual documents with automatic language identification for better knowledge retrieval.

### Team Management & Configuration

Streamlined workflows for creating and managing AI teams.

* **MCP Server Propagation:** When creating teams from marketplace templates, MCP server configurations are automatically propagated, ensuring consistent tool access across your organization.
* **Disabled LLM Models Filtering:** The system now automatically filters out disabled LLM models from selection, preventing configuration errors and ensuring only approved models are used.
* **User Language Preferences:** Set your preferred language for the interface, with support for multiple languages and localized content.
* **Team Reconstruction Support:** Enhanced ability to reconstruct teams from existing configurations, making it easier to restore or duplicate successful setups.
* **Improved Team Creation Flow:** Streamlined team creation process with better validation, clearer instructions, and more intuitive configuration options.

### Model & Provider Enhancements

Expanded support for language models and improved model management.

* **New Model Support:** Added support for Gemini 2.5 Pro and other cutting-edge language models.
* **Provider Images:** Visual provider logos and images throughout the interface make it easier to identify which AI provider you're using.
* **Model Selection Improvements:** Enhanced model selection interface with better descriptions, capability indicators, and performance metrics.
* **Friendly Model Names:** Improved model naming throughout the interface for better clarity and understanding.
* **Actions Friendly Names:** Human-readable names for agent actions make it easier to understand what your AI teams are doing.

### Performance & Reliability

Behind-the-scenes improvements for better performance and stability.

* **Optimized File Operations:** Improved performance for file list retrieval and document processing.
* **Better Error Handling:** Enhanced error messages and recovery mechanisms throughout the platform.
* **Snackbar Notifications:** Improved notification system with longer display times and better positioning for important messages.
* **WebSocket Improvements:** Enhanced real-time communication with better connection management and message handling.
* **Caching Enhancements:** Improved caching strategies for faster page loads and reduced server load.

### Developer Experience

Tools and features that make working with Compass more productive.

* **API Brain Item Instructions:** Added detailed instructions to API brain items for better integration guidance.
* **Improved Documentation:** Enhanced inline help and tooltips throughout the interface.
* **Better Debugging:** Improved logging and error reporting for easier troubleshooting.
* **Version Tracking:** Clear version indicators (v1.0.164-v1.0.176) help track which features are available in your deployment.

---

## July 2025

Welcome to the July 2025 release! This month marks a significant milestone in Compass's evolution with major improvements to the chat interface, enhanced knowledge management, and powerful new customization options. We've focused on making Compass more responsive, more intuitive, and more adaptable to your organization's unique needs.

> **TL;DR**: The July 2025 Compass update introduces **enhanced chat interface with avatars and improved navigation**, **knowledge upload improvements with role-specific targeting**, **team customization with icons and descriptions**, **WebSocket service enhancements**, and **comprehensive UI/UX refinements**. Key improvements include **better file handling**, **improved agent selection**, and **streamlined team management workflows**.

### Chat Interface Revolution

We've completely reimagined the chat experience to make interactions with your AI teams more natural and productive.

* **Agent Avatars:** Each AI agent now has a distinctive avatar, making it easier to follow conversations and understand who's contributing to your project.
* **Enhanced Scroll Functionality:** Improved scrolling behavior ensures you never lose your place in long conversations, with automatic scroll-to-bottom for new messages.
* **Better Message Display:** Refined message layout with improved spacing, typography, and visual hierarchy for easier reading.
* **Active Agent Indicators:** Clear visual indicators show which agent is currently active and working on your request.
* **Improved Navigation:** Enhanced navigation between different sections of the chat interface for smoother workflow.

### Knowledge Management Improvements

Powerful new capabilities for managing and organizing your organizational knowledge.

* **Role-Specific Knowledge Upload:** Upload knowledge and assign it to specific agents (like Martha, Bruce, or Nova) or share it across the entire team, giving you precise control over information distribution.
* **Enhanced Upload Dialog:** Completely redesigned knowledge upload interface with better file handling, clearer instructions, and improved validation.
* **Better File Support:** Improved handling of various file formats including documents, spreadsheets, presentations, and code files.
* **Upload Instructions:** Detailed guidance in the upload dialog helps you understand how to structure and provide knowledge effectively.
* **Knowledge Organization:** Better organization and categorization of uploaded knowledge for easier management and retrieval.

### Team Customization & Management

New tools for personalizing and managing your AI teams.

* **Custom Team Icons:** Choose from an expanded library of icons to personalize your teams and make them easily identifiable.
* **Agent Descriptions:** Add custom descriptions to agents to clarify their roles and responsibilities within your organization.
* **Team Configuration:** Enhanced team setup interface with better validation and clearer configuration options.
* **Agent Selection Improvements:** Improved agent selection interface with better visual feedback and clearer role descriptions.
* **Team Templates:** Enhanced marketplace templates with better descriptions and clearer use cases.

### WebSocket & Real-Time Communication

Significant improvements to real-time communication and responsiveness.

* **Enhanced WebSocket Service:** Completely refactored WebSocket service with improved connection management and better error handling.
* **Better Connection Stability:** Improved connection stability with automatic reconnection and better handling of network interruptions.
* **Real-Time Updates:** Faster and more reliable real-time updates for team status, message delivery, and file changes.
* **Improved Message Handling:** Better handling of large messages and complex data structures in real-time communication.

### User Interface Refinements

Comprehensive improvements to the overall user experience.

* **Improved Layouts:** Refined layouts throughout the application for better use of screen space and improved visual hierarchy.
* **Better Responsiveness:** Enhanced responsive design ensures a great experience on all device sizes.
* **Visual Consistency:** Improved visual consistency across all components with refined color schemes and typography.
* **Loading Indicators:** Better loading indicators and progress feedback throughout the application.
* **Error Messages:** Clearer, more helpful error messages with actionable guidance for resolution.

### Performance Enhancements

Behind-the-scenes improvements for better performance and reliability.

* **Faster Page Loads:** Optimized asset loading and caching for faster initial page loads.
* **Improved Rendering:** Better rendering performance for large conversations and complex interfaces.
* **Memory Management:** Improved memory management reduces resource usage and improves stability.
* **Network Optimization:** Optimized network requests reduce bandwidth usage and improve responsiveness.

### Bug Fixes & Stability

Numerous bug fixes and stability improvements throughout the platform.

* **Upload Reliability:** Fixed issues with file uploads and improved error handling.
* **Chat Stability:** Resolved issues with chat message delivery and display.
* **Team Management:** Fixed various issues with team creation and configuration.
* **Navigation Fixes:** Resolved navigation issues and improved routing throughout the application.

---

## June 2025

Welcome to our latest sprint update! This release for Compass delivers a significant leap forward in organizational intelligence, administrative control, and user experience. We've focused on empowering your teams with more robust management tools and a smoother, more intuitive interface.

> **TL;DR**: The June 2025 Compass update (v1.0.12 backend, v1.0.156 UI) significantly enhances **organizational intelligence**, **administrative control**, and **user experience**. Key improvements include a refactored knowledge structure with full **bucket management**, streamlined **Git integration** for team content, granular **API key and organization management**, and a new **user invitation system**. The UI/UX sees a **complete overhaul** with a new admin layout, dark theme compatibility, and improved dialogs, all supported by core system enhancements for **consistency and stability**.

### Organizational Intelligence & Data Management

We've supercharged how Compass handles your knowledge and data, making it more flexible and powerful.

### Enhanced Organizational Brain & Buckets

* **Refactored Organizational Brain API:** We've completely overhauled how your organizational knowledge is structured, ensuring more efficient and scalable access.
* **Comprehensive Bucket Management:** Take control of your data like never before!
    * **Full CRUD for Buckets:** Create, update, and manage your data buckets with new dedicated functionality.
    * **Secure Content Retrieval:** Retrieve brain content documents for specific buckets, ensuring accurate knowledge access.
    * **Empty Bucket Registration:** Register empty buckets to keep your data organized from the start.

### Advanced Git Integration for Team Management

Managing your team's code and content is now more streamlined:

* **Git Push Endpoint:** Directly push changes to your Git repositories from within Compass.
* **Remote Head Parsing & Branch Retrieval:** Easily parse Git remote heads and retrieve lists of branches for better version control.
* **Simplified Branch Insertion:** We've simplified the logic for inserting branches during Git cloning.
* **Improved Git URL Retrieval:** `get_team_state` now dynamically retrieves Git URLs for teams that don't have one pre-configured, ensuring smoother operations.

---

### Administrative Control & Security

This release brings a suite of new features designed to give administrators greater control and enhance security.

### Granular API Key & Organization Management

* **New Org and ApiKey Models:** We've introduced new models for robust organization and API key management.
* **Enhanced API Key Endpoints:** New endpoints and role updates provide superior API key management, including strong API key generation utilities.
* **Super User Access:** A new `super_user` field has been added to the user signup process, enabling elevated privileges for key administrators.

### Streamlined User & Team Management

* **Organizational Team Management Endpoints:** Manage your organizational teams more effectively with new dedicated endpoints.
* **User Invitation System:** Easily invite new members to your organization via a dedicated invite route and an improved email invite template.
* **Team Creation & Updates:**
    * New `createdAt` and `updatedAt` fields for `TeamModel` provide better auditing.
    * Updated `CreateMarketTeamModel` to generate unique IDs using ULID.
    * Enhanced team handling with LLM configuration checks and improved retrieval logic.
* **Revamped Agent/Market Team Terminology:** We've renamed 'agents' to 'enterprise agents' across the platform for clearer understanding and consistency.
* **Organizational Agent Categories:** List organization agent categories with a new endpoint and the `MarketCategories` model.

---

### Platform Enhancements & User Experience (UX)

We've made significant improvements to the platform's core and user interface for a more reliable and intuitive experience.

### UI/UX Overhauls

* **Admin Layout & Sidebar:** A brand-new Admin Layout and Sidebar component for improved navigation and administrative workflows.
* **Revamped Section Headers:** `SectionHeader` components have been integrated into MCP Servers and Secure Data Manager for consistent, clear UI.
* **Dark Theme Compatibility:** Refactored CSS to ensure seamless compatibility with dark themes.
* **Chatbot & Agent Management Dialogs:** Enhanced and refined dialogs for managing chatbots and agents, with clearer terminology and improved UI.
* **Bucket Management Components:** New dialogs and components for enhanced bucket management directly within the UI.
* **User & Invite Dialogs:** Refactored user management and invite user dialogs for a smoother experience.
* **Snackbar Notifications:** Enhanced snackbar notifications provide clearer user feedback for actions like successful user invitations.
* **Document Preview & Loading Indicators:** Implement document preview and loading indicators for a more responsive user experience.
* **Updated Footer & Help Links:** Footer links now direct users to the new documentation site, and help links have been updated.

### Core System Improvements

* **Timezone Consistency:** Updated datetime usage across models and routes to ensure UTC consistency, preventing timing discrepancies.
* **LLM Configuration & Validation:** Enhanced team configuration handling and refactored LLM validation logic for improved stability.
* **Refactored `BrainOrganizationalManager`:** Now includes request handling and updated path structures for organization-specific data.
* **Dynamic Image URLs:** `imgUrl` field serializer converts `Path` to `string` in `TeamMember` model, ensuring image assets display correctly.
* **Optimized Resource Management:** Lazy initialization of `Crawl4AiWrapper` in `BaseHandler` improves resource management.
* **Robust FastRagHandler:** Enhanced to support role-based semantic checks and improve retrieval logic.
* **Updated Compass_VERSION:** The platform version has been updated to **1.0.12** for the backend and **1.0.156** for the UI.

---

## May 2025

Welcome to the latest release update! We've been busy bringing powerful new capabilities, performance enhancements, and smarter experiences to Compass. Here's what shines this month:

> **TL;DR**: The May 2025 Compass update introduces "Albert," an AI knowledge companion for intelligent information retrieval and decision-making. It also features next-gen sensitive data and PII management with asynchronous processing, enhanced masking, and new secure APIs. Users can now define custom LLM configurations per tenant, and there's native Microsoft Graph support for seamless integration with user profiles, emails, OneDrive, and SharePoint.

### Meet **Albert**
### Your New AI Knowledge Companion

A brand-new Compass **agent** has landed! This intelligent agent boosts your team's capabilities by:

* Actively retrieving relevant knowledge from your internal sources.
* Providing accurate, structured answers with context awareness.
* Streamlining decision-making with enhanced memory and evaluation logic.

### Privacy & Security
### Next-Gen **Sensitive Data & PII Management**
Handling sensitive information just got a major upgrade:

* ✨ **Asynchronous PII processing** for faster, smoother handling.
* 🔒 **Enhanced masking/unmasking** logic with full traceability and source tracking.
* 🧾 **New models and APIs** to manage sensitive data securely across tenants.
* 🛡️ Fully integrated into LLM processing flows to ensure compliance from end to end.

### **Bring your own model**

* Define **Custom LLM configurations per tenant**, including `context_window`, `max_tokens`, and `friendly_name`.
* Improved tenant route handling for secure, scalable multi-tenancy.

### Microsoft Graph

Boost your enterprise workflows with:

* 🔗 **Native support for Microsoft Graph**, providing seamless access to user profiles, emails, OneDrive folders, and organizational SharePoint resources.
* Seamless file exploration and integration into knowledge processing routines.

---

We're just getting started! Stay tuned for more intelligent agents, richer integrations, and user-first design updates. 🚀