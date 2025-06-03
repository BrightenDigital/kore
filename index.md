---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Kore AI"
  text: "Official Docs"
  tagline: Let Kore Agents handle the core of your work while you focus on the details
  actions:
    - theme: brand
      text: Try Kore today
      link: https://kore-ai.brightenconsulting.com/
    - theme: alt
      text: Getting Started
      link: /getting_started/home.md
    - theme: alt
      text: What's new
      link: /getting_started/whats_new.md

features:
  - title: Autonomy in Action
    details: Agents that observe, think, and act—Kore powers true autonomy with seamless perception-to-action flow.
    #link: /use_cases/start_from_template.md
  - title: Agentic RAG
    details: Powers Kore agents to think, decide, and act with real-time knowledge grounded in your enterprise data.
    #link: /best_practices/working_with_git.md
  - title: Supercharged for Enterprise
    #link: /use_cases/greenfield_development.md
    details: Packed with Office 365, Git, MCP, masking, and observability—everything you need, ready out of the box.
---

<div class="kore-attribution">
  <div class="attribution-content">
    <div class="attribution-icon">✨</div>
    <div class="attribution-text">
      <span class="attribution-main">This site was entirely built using</span>
      <strong class="attribution-brand"><a href="https://kore-ai.brightenconsulting.com/">Kore</a></strong>
    </div>
  </div>
</div>

<style>
.kore-attribution {
  margin-top: 3rem;
  padding: 1.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f6f6f7;
  border-radius: 16px;
  border: 1px solid rgba(99, 102, 241, 0.1);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.kore-attribution::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  0% { left: -100%; }
  50% { left: 100%; }
  100% { left: 100%; }
}

.attribution-content {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-1);
}

.attribution-icon {
  font-size: 1.5rem;
  animation: sparkle 2s ease-in-out infinite;
}

@keyframes sparkle {
  0%, 100% { transform: scale(1) rotate(0deg); opacity: 1; }
  50% { transform: scale(1.1) rotate(10deg); opacity: 0.8; }
}

.attribution-text {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.attribution-main {
  color: var(--vp-c-text-2);
  font-weight: 400;
}

.attribution-brand {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.2em;
  font-weight: 700;
  position: relative;
}

.attribution-brand::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%);
  border-radius: 1px;
  opacity: 0.6;
}

/* Dark mode adjustments */
.dark .kore-attribution {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
  border: 1px solid rgba(99, 102, 241, 0.2);
}

.dark .kore-attribution::before {
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
}

/* Mobile responsive */
@media (max-width: 768px) {
  .kore-attribution {
    margin: 2rem 1rem;
    padding: 1.5rem 1rem;
  }
  
  .attribution-content {
    font-size: 1rem;
    gap: 0.75rem;
    text-align: center;
  }
  
  .attribution-text {
    flex-direction: column;
    gap: 0.25rem;
  }
}
</style>