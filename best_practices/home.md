# 🌟 Best Practices

## Communication Strategy

- **Be Direct**: Specify exactly what you want changed. For example: "Refactor the LLM obj in Compass/ai/provider/llm.py so that the _handle_kwargs() method can support both sync and async operations."
- **Add Knowledge**: Compass agents can be guided to act as experts in a field by providing them with the necessary context. Think of this as creating a cheat sheet of essential information.
- **One Feature Per Request**: This approach speeds up development and facilitates reviews. Complete one feature before moving to the next!

## Working with the Team

### Agent Roles

- **Martha (@Martha)** - Product Manager
    - Best utilised when starting a new app or defining product requirements
    - Helps ensure product goals are well-considered
- **Bruce (@Bruce)** - Architect
    - Ideal for new projects or major architecture changes
    - Focuses on creating solid structures for development
- **Nova (@Nova)** - Software Engineer
    - Your primary implementation partner
    - Creates task docs, analyses files, develops implementation plans, and writes code

### Workflow Tips

- **Agent Collaboration**: The agents know how to work together. Tagging @Nova will involve only her, while tagging @Bruce will trigger both Bruce's architecture work, followed by Nova's implementation. Using @Martha (or no tag) will activate the full team workflow.
- **Direct Requests**: For simple tasks or when in a rush, you can use @Nova directly. However, we recommend involving the other agents for first requests to get better results (except when reconstructing from an existing repo).
- **Existing Repositories**: When you provide a git repo during team creation, the agents will automatically analyse the codebase to build system design documentation and product requirements before you make your first request.

[🌋 Working with Git](/best_practices/working_with_git.md)

[🧠 Knowledge](/best_practices/knowledge.md)

[🤖 LLM Selection Tips](/best_practices/llm_selection_tips.md)

[🖿 Files Section](/best_practices/files_section.md)