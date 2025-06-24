# Best Practices with Kore AI Agents

Welcome to the exciting world of AI agents, where Kore becomes your intelligent partner! Just like any great collaboration, getting the most out of your AI agents comes down to effective communication and a few smart strategies.

Think of Kore as an incredibly fast and knowledgeable assistant, but one that benefits greatly from clear, concise, and well-structured instructions. 

## Prompt Engineering

Here are some best practices to ensure you and Kore AI agents work together like a dream team:

### 1. Be Clear, Concise, and Specific (The "Golden Rule")

This is by far the most important tip! AI agents don't "read between the lines" in the same way a human does.

* **Avoid Ambiguity:** Don't leave room for guesswork. If you want a report *summarizing* sales data *from last quarter* *for the EMEA region*, say exactly that.
    * **Instead of:** "Tell me about sales."
    * **Try:** "Generate a concise summary of Q1 2025 sales performance for the EMEA region, highlighting key growth areas and any significant declines."
* **Use Action Verbs:** Start your requests with strong verbs that clearly indicate what you want the agent to *do* (e.g., "Summarize," "Generate," "Analyze," "Draft," "Extract," "Compare").

### 2. Provide Context: Give the Agents the Full Picture

Kore AI agents perform best when they understand the background and purpose of your request.

* **Explain the "Why":** Briefly explain *why* you need the information or action. This helps the agent understand your intent and tailor its response more effectively.
    * "I'm drafting a client proposal. Please summarize our product's key features, focusing on benefits for small businesses." (Context: client proposal, focus: small businesses)
* **Refer to Previous Information:** If your request builds on a previous interaction or document, reference it clearly. "Based on the Q1 2025 sales report we just discussed, identify the top 3 underperforming products."

### 3. Break Down Complex Tasks: One Step at a Time

For big, multi-faceted tasks, don't overwhelm the agent with a single, massive prompt. Break it into smaller, logical steps.

* **Step-by-Step Approach:**
    1.  "First, extract all customer feedback related to 'delivery speed' from the support tickets of the last month."
    2.  "Next, categorize this feedback into 'positive,' 'negative,' and 'neutral' sentiments."
    3.  "Finally, summarize the key themes from the 'negative' delivery speed feedback."
* This approach helps the agent process information sequentially and reduces the chance of errors.

### 4. Set Boundaries and Constraints: Tell it What *Not* To Do

Sometimes, telling the agent what to avoid is just as helpful as telling it what to do.

* **Specify Length:** "Write a paragraph, no more than 100 words, introducing our new service."
* **Define Scope:** "Focus only on technical specifications; do not include marketing language."
* **Limit Creativity:** If you need factual, direct answers, instruct the agent to stick to facts and avoid creative interpretations. "Provide only factual data from the provided document; do not extrapolate or infer."

### 5. Iterate and Refine: It's a Conversation!

Don't expect perfection on the first try, especially with complex requests. Think of your interaction with the AI agent as an ongoing conversation.

* **Review and Refine:** Always review the agent's output. If it's not quite right, provide feedback.
    * "That's a good start, but can you make it sound more formal?"
    * "You missed the data from March. Please include it in the analysis."
    * "Can you rephrase that section to be more engaging for a general audience?"
* **Learn from Interactions:** Over time, you'll develop an intuition for what works best with your specific AI agent and for the types of tasks you perform most often.

### 6. Test and Validate: Trust, but Verify

Kore AI agents are incredibly powerful, but they are tools. Always verify critical information, especially factual data, legal advice, or financial figures, against reliable sources.

* **Cross-Reference:** If the agent provides data, check it against your original documents or databases.
* **Common Sense Check:** Does the output make logical sense in your context?

### 7. Think About the End Goal: What Do You Need?

Before you even start typing, take a moment to consider what the ultimate desired outcome is. This helps you frame your request more effectively.

* Are you looking for a draft? A summary? A list of ideas? Data extraction?
* Knowing your end goal will guide your prompt design.


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
