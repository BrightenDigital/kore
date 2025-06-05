# 🚀 What's New

## June 2025

Welcome to our latest sprint update! This release for Kore delivers a significant leap forward in organizational intelligence, administrative control, and user experience. We've focused on empowering your teams with more robust management tools and a smoother, more intuitive interface.

### Organizational Intelligence & Data Management

We've supercharged how Kore handles your knowledge and data, making it more flexible and powerful.

### Enhanced Organizational Brain Routes & Buckets

* **Refactored Organizational Brain Routes:** We've completely overhauled how your organizational knowledge is structured, ensuring more efficient and scalable access.
* **Comprehensive Bucket Management:** Take control of your data like never before!
    * **Full CRUD for Buckets:** Create, update, and manage your data buckets with new dedicated functionality.
    * **Intelligent File Counting:** Easily track the number of files within each bucket.
    * **Secure Content Retrieval:** Retrieve brain content documents for specific buckets, ensuring accurate knowledge access.
    * **Empty Bucket Registration:** Register empty buckets to keep your data organized from the start.

### Advanced Git Integration for Team Management

Managing your team's code and content is now more streamlined:

* **Git Push Endpoint:** Directly push changes to your Git repositories from within Kore.
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
* **Updated KORE_VERSION:** The platform version has been updated to **1.0.12** for the backend and **1.0.156** for the UI.


## May 2025

Welcome to the latest release update! We've been busy bringing powerful new capabilities, performance enhancements, and smarter experiences to Kore. Here's what shines this month:

### Meet **Albert**
### Your New AI Knowlegde Companion

A brand-new Kore **agent** has landed! This intelligent agent boosts your team's capabilities by:

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

We’re just getting started! Stay tuned for more intelligent agents, richer integrations, and user-first design updates. 🚀
