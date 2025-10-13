# 📐 Compass System Design Blueprint

## Architecture Diagram

![system_blueprint.svg](/technical/assets/system_blueprint.svg)

## 1. System Overview

The Compass system is an AI-powered enterprise platform deployed on Azure cloud infrastructure. It provides intelligent document processing, search capabilities, and integration with Microsoft 365 services through a modern Angular frontend.

## 2. Core Components

### 2.1 Frontend Layer

### CompassAI (Angular Frontend)

- **Purpose**: Primary user interface for the Compass platform
- **Technology**: Angular framework
- **Deployment**: Azure Web App
- **Key Features**:
    - Interactive document search and retrieval
    - Integration with Microsoft 365 services
    - AI-assisted content processing and interactions
    - User authentication and profile management

### Observability Frontend

- **Purpose**: Dashboard for monitoring system health and AI interactions
- **Technology**: Python-based web interface
- **Deployment**: Azure Web App
- **Key Features**:
    - Real-time monitoring dashboards
    - Performance metrics visualization
    - LLM interaction logs and analytics
    - System alerts and notifications

### 2.2 Backend Services

### CompassAPI (Main Backend)

- **Purpose**: Core application backend and business logic
- **Technology**: Python-based web service
- **Deployment**: Azure Web App
- **Key Features**:
    - RESTful API endpoints for frontend services
    - Business logic implementation
    - Integration orchestration between components
    - Authentication and authorisation (via Security component)

### CompassFastRag

- **Purpose**: Handles document search and retrieval
- **Technology**: Serverless function
- **Deployment**: Azure Function
- **Key Features**:
    - BM25 search algorithm implementation
    - Vector search capabilities
    - Reranking of search results
    - Integration with document storage systems

### CompassGraphAPI

- **Purpose**: Handles Microsoft 365 service integrations
- **Technology**: .NET-based web service
- **Deployment**: Azure Web App
- **Key Features**:
    - OneDrive document retrieval and management
    - SharePoint integration
    - Office document processing
    - Microsoft Graph API implementation

### AI Core

- **Purpose**: Orchestrates LLM services and AI workflows
- **Technology**: Python-based service
- **Deployment**: Azure Container App
- **Key Features**:
    - LLM provider integration management
    - AI request routing and load balancing
    - Prompt engineering and optimization
    - Context management for LLM interactions
    - Integration with internal CompassSLM for specialized tasks

### CompassSLM (Small Language Model)

- **Purpose**: Specialized internal language model
- **Technology**: Optimized language model
- **Deployment**: Azure Container
- **Key Features**:
    - PII identification and extraction
    - Document summarization
    - Content classification
    - Lightweight NLP tasks

### ModelContextProtocol Servers

- **Purpose**: Manages context for model interactions
- **Technology**: Python-based service
- **Deployment**: Azure Container App
- **Key Features**:
    - Context management for AI models
    - Document chunking and processing
    - Context window optimization
    - Integration with knowledge bases

### Security Component

- **Purpose**: Handles credential and key validation
- **Technology**: Managed identity service
- **Deployment**: Azure Key Vault integration
- **Key Features**:
    - API key management
    - Authentication validation
    - Credential rotation
    - Access control enforcement
    - Integration with Azure AD

### Observability Backend

- **Purpose**: Monitors system components and interactions
- **Technology**: Python-based telemetry service
- **Deployment**: Azure Function and Container Apps
- **Key Features**:
    - Log collection and aggregation
    - Metrics monitoring
    - Performance tracking
    - LLM interaction logging
    - Cost tracking for AI services

### 2.3 External Components

### Data Sources

- **OneDrive**: User file storage
- **SharePoint**: Organizational document repositories
- **Office Services**: Microsoft 365 productivity apps

### External LLMs

- Various LLM providers orchestrated by AI Core
- May include Azure OpenAI, Anthropic, and other providers

## 3. System Interactions and Data Flows

### 3.1 Primary User Flows

### Document Search Flow

1. User submits search query via CompassAI frontend
2. CompassAPI validates request and routes to CompassFastRag
3. CompassFastRag performs BM25 and vector search
4. ModelContextProtocol servers prepare context
5. Results returned to frontend with relevant documents

### Microsoft 365 Integration Flow

1. User requests documents from M365 services
2. CompassGraphAPI authenticates via Security component
3. CompassGraphAPI retrieves documents from appropriate service
4. Documents are processed and returned to frontend

### AI Processing Flow

1. User submits content for AI processing
2. CompassAPI routes request to AI Core
3. AI Core determines appropriate model (external or CompassSLM)
4. Model processes content with context from ModelContextProtocol
5. Results returned to user with appropriate formatting

### Security Validation Flow

1. Components require authentication for operations
2. Security component validates credentials
3. Valid requests proceed, invalid ones are rejected and logged
4. All validation activities logged to Observability

### 3.2 Cross-Cutting Concerns

### Monitoring and Observability

- All components emit telemetry to Observability backend
- Metrics, logs, and traces are collected and analyzed
- Dashboards provide real-time visibility into system health
- AI interactions are logged for compliance and improvement

### Security and Authentication

- All service-to-service communications authenticated
- Component access controlled via Azure AD and Security component
- API keys and credentials securely managed via Azure Key Vault
- Regular credential rotation implemented

## 4. Deployment Architecture

### 4.1 Azure Resources

- **Compute**: Web Apps, Functions, Container Apps
- **Storage**: Blob Storage, Cosmos DB
- **Security**: Key Vault, Managed Identities
- **Networking**: Virtual Network, Application Gateway
- **Monitoring**: Application Insights, Log Analytics

### 4.2 Scaling Considerations

- CompassFastRag uses serverless architecture for elastic scaling
- Container-based components scale based on CPU/memory metrics
- Azure App Service autoscaling for web components
- Redis Cache for high-throughput operations

### 4.3 High Availability

- Components deployed across multiple availability zones
- Regional redundancy for critical services
- Automatic failover configurations
- Load balancing across service instances

## 5. Development and DevOps

### 5.1 CI/CD Pipeline

- Azure DevOps for build and release automation
- Infrastructure as Code (Terraform/ARM templates)
- Automated testing at multiple levels
- Blue/green deployment strategy

### 5.2 Monitoring and Alerting

- Proactive monitoring via Application Insights
- Custom alert thresholds for key metrics
- On-call rotation for critical issues
- Automated recovery procedures where possible

## 6. Future Considerations

### 6.1 Potential Enhancements

- Multi-region deployment for global performance
- Enhanced AI capabilities with specialized models
- Additional data source integrations
- Advanced analytics for system usage patterns

### 6.2 Scalability Improvements

- Distributed caching implementation
- Enhanced vector database capabilities
- Optimized document processing pipeline
- Batch processing for large document sets