# 🖿 Files Section

# The Files section provides you with complete visibility and access to your codebase as it's being developed by the Kore agents.

## Overview

The Files section mirrors your source code and provides several key functions:

- **Browse** your entire project structure
- **View** individual files with syntax highlighting
- **Download** files or entire directories
- **Track changes** as they happen during development

## Directory Structure

### Source Code

Your source code is organized exactly as it would be in your local development environment. The directory structure reflects standard conventions for your chosen tech stack.

### Resources Directory

In addition to your source code, Kore maintains a special `resources` directory that contains:

- **Markdown documentation** generated during development
- **Diagrams** illustrating architecture and workflows
- **Images** created to support documentation
- **Planning documents** that show agent reasoning

## Working with Files

### Viewing Files

Click on any file to view its contents in the main panel. Code files include syntax highlighting for readability.

### File Operations

- **Download individual files**: Click the download icon next to any file
- **View file history**: See how files have evolved through development

## Integration with Development Workflow

As agents work on your requests, you'll see files being created, modified, and structured in real-time. This gives you insight into:

- How the system is being built
- What changes are being made
- Where new code is being placed

## Important Notes

⚠️ **Known Issue**: There's a parsing bug when saving `.txt` or `.md` files that contain triple backticks (```). These files may be cropped when saved. We're working on a solution!

💡 **Pro Tip**: The center console shows you interactions between agents, while the Files section shows you the actual code being produced. Use both in tandem for the best understanding of your project's development.

## Console Integration

While the center console registers the interactions between multiple agents via messages, the Files section gives you concrete visibility into what those interactions are producing. Together, they provide complete transparency into the development process.