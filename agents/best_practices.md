# Best practices

## Setting Up Git Integration

### Authentication Methods

When connecting to a Git repository, you'll need to provide the proper credentials:

- **Personal Access Token (PAT)** - Recommended method for GitHub, Azure DevOps, and other platforms
- **Username:Password** - Basic authentication for repositories that support it

### Setting Up PAT Access

1. **Generate a PAT**:
    - GitHub: Profile → Settings → Developer settings → Personal access tokens
    - Azure DevOps: User settings → Personal access tokens
2. **Required Permissions**:
    - **For reading**: `repo` or `code:read` scope
    - **For writing**: `repo` or `code:write` scope
3. **Entering Credentials**:
    - Provide your repository URL in the format: [`https://github.com](https://github.com/)/username/repo.git`

⚠️ **Security Note**: Kore securely handles your credentials, but always follow your organization's security guidelines when using PATs.

## Working with Existing Projects

When you provide a Git repo during team creation:

1. Kore will clone the repository
2. The agents will automatically analyze the codebase
3. System design documentation and product requirements will be generated
4. You'll be redirected to the team page where agents are already working

💡 **Pro Tip**: This initial analysis phase is crucial - let the agents complete it before making specific requests.

## Understanding Branch Management

Kore's Git workflow follows these patterns:

- **New Repository**: If you start with an empty Git repo, Kore will work on the master/main branch
- **Existing Repository**: For repos with existing code, Kore creates a new branch for each request

### Branch Naming Convention

Kore creates branches with a standardized naming pattern:

```
kore-workspace-{kore_team_id}-feature-description

```

This makes it easy to identify branches created by Kore and the features they contain.

## Commit and Push Process

As agents implement your requests:

1. Changes are committed with descriptive commit messages
2. Each request uses a dedicated branch, allowing for independent feature approval.
3. The branch is pushed to the remote repository
4. You'll see commit details in Nova's final summary

Kore attempts to maintain a clean Git history with meaningful commits that document the development process.


## LLM Selection Tips

Choosing the right Large Language Model (LLM) for your task can significantly impact the quality, speed, and creativity of your results. Kore supports multiple LLMs, each with their own strengths and ideal use cases.

### Deepseek Chat 🏃‍♀️

**Best for**: Everyday development tasks

- Efficient code generation
- Quick responses
- Standard development patterns

**When to use**: Standard feature implementation, bug fixes, and routine development tasks

### Sonnet 4 💭

**Best for**: Demanding tasks requiring critical code

- Complex problem-solving
- Novel approaches to challenges
- Deeper reasoning capabilities

**When to use**: Architecture design, optimizing algorithms, solving complex edge cases, or when you need outside-the-box thinking

### GPT-4.1 ⚡

**Best for**: Balance of speed and quality

- Relatively fast considering its capabilities
- Strong all-around performance
- Good code quality

**When to use**: When you need quality results with reasonable speed

### Gemini 🎲

**Best for**: Exploration and experimentation

- A "box full of surprises"
- Alternative approaches
- Diverse solutions

**When to use**: When you want to explore different implementation possibilities or creative solutions
