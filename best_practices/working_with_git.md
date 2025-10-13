# 🌋 Working with Git

Git integration is a powerful feature of Compass that allows you to seamlessly connect your development workflow with version control. This guide covers best practices for working with Git repositories in Compass.

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

⚠️ **Security Note**: Compass securely handles your credentials, but always follow your organization's security guidelines when using PATs.

## Working with Existing Projects

When you provide a Git repo during team creation:

1. Compass will clone the repository
2. The agents will automatically analyze the codebase
3. System design documentation and product requirements will be generated
4. You'll be redirected to the team page where agents are already working

💡 **Pro Tip**: This initial analysis phase is crucial - let the agents complete it before making specific requests.

## Understanding Branch Management

Compass's Git workflow follows these patterns:

- **New Repository**: If you start with an empty Git repo, Compass will work on the master/main branch
- **Existing Repository**: For repos with existing code, Compass creates a new branch for each request

### Branch Naming Convention

Compass creates branches with a standardized naming pattern:

```
Compass-workspace-{Compass_team_id}-feature-description

```

This makes it easy to identify branches created by Compass and the features they contain.

## Commit and Push Process

As agents implement your requests:

1. Changes are committed with descriptive commit messages
2. The branch is pushed to the remote repository
3. You'll see commit details in Nova's final summary

Compass attempts to maintain a clean Git history with meaningful commits that document the development process.

## Handling Updates and Conflicts

When you make a new request:

- Compass attempts a rebase/pull to ensure your branch is up-to-date
- If merge conflicts occur, this may cause failures

**Best Practice**: To minimize conflicts, avoid making manual changes to the same files Compass is working on. If you need to make manual changes, commit and push them before sending new requests to Compass.

## Working Without Git

If you don't provide Git information during configuration:

1. Compass will create a local workspace
2. All code will be generated and stored within the platform
3. You can download the entire codebase as a ZIP file from the Files section

This allows you to experiment with Compass before integrating with your version control system.

## Git Integration Troubleshooting

- **Authentication Issues**: Verify your PAT has the correct permissions and hasn't expired
- **Clone Failures**: Ensure the repository URL is correct and accessible
- **Push Failures**: Check that your PAT has write permissions to the repository

Remember: Proper Git integration streamlines your workflow and makes it easier to incorporate Compass's output into your production codebase!