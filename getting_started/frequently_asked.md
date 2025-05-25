# ❓FAQs

## General Questions

### What is Kore?

Kore is an AI-powered software development platform that uses intelligent agents to help you build, modify, and understand code.

### How does the team naming work?

The team name is initially generated from your first request, but you can rename it at any time. If you create a new repository from an existing Git repository, the default name will match the original repository’s name.

### What can I ask the chat assistant?

The chat assistant has access to all the contents in your src workdir - you can ask for suggestions, tips, or explanations about your codebase.

## Features

### What features does Kore offer?

- **AI Team**: Work with Martha (PM), Bruce (Architect), and Tilda (Engineer)
- **Team Name Generation**: Based on your first request
- **Project Summary**: Idea, summary, and technologies generated at the end of each round
- **Dynamic Suggestions**: Appear at the bottom of the input box
- **Prompt Engineering**: Functionality to help improve your prompts (in development)
- **Chat Assistant**: Ask questions about your codebase
- **Template Stacks**: Pre-built templates for popular tech stacks

## Git Integration

### How does Git integration work?

- Clone directly from a URL (requires proper permissions via PAT or username:password)
- For public repos, you can clone but pushing updates requires authentication
- When working with existing repos, Kore creates feature branches prefixed with `kore-workdspace-[team_id]-feature-description`

### How are updates managed?

- A rebase/pull is attempted with each new request
- Be careful with potential merge conflicts

## Knowledge Management

### What's the difference between semantic and static knowledge?

- **Static**: Direct cheatsheet-style information passed to agents without processing
- **Semantic**: Knowledge transformed into vector space for similarity-based retrieval

### How should I format knowledge files?

All uploaded knowledge is converted to MD files internally. For complex structures, uploading directly as MD files ensures the content is properly processed.

## Usage Questions

### How do I view my code?

The Files section mirrors your source code and allows you to download or view individual files.

### Which LLM should I use?

We recommend:

- Deepseek Chat for everyday tasks
- Sonnet 3.7 for demanding tasks requiring creative thinking
- GPT4.1 for speed with good quality
- Gemini for exploration