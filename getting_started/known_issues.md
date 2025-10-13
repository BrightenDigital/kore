# Known Issues

We're continuously improving Compass, but there are a few known issues to be aware of:

## Current Limitation

- **AI Stream Slowdown with Fast LLMs**: When using language models with extremely fast inference speeds—such as those provided by Groq—you may notice that the live AI response stream appears to slow down or pause intermittently. This is due to how streaming output is processed in real-time, which can create a mismatch between the model’s speed and the client-side rendering pipeline. While the responses are still being generated correctly, they might display with slight delays.

## Workarounds

If you encounter streaming delays:

1. Wait for the stream to complete, as the final output will still be accurate.
2. If the interface appears stalled, try sending the same request again.
3. Refresh the page as a last resort.

We appreciate your patience as we work to optimize streaming for high-speed LLM providers.
