import { defineConfig } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    title: "Kore Docs",
    base: "/kore/",
    description: "Kore AI Official Documentation",
    head: [['link', {rel: 'icon', href: '/kore/favicon.ico'}]],
    appearance: 'dark',
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Getting Started', link: '/getting_started/home.md' },      
        { text: 'What\'s new', link: '/getting_started/whats_new.md' },
      ],

      sidebar: [
        {
          text: 'Getting Started',
          link: '/getting_started/home.md',
          items: [
            { text: 'Key Features', link: "/getting_started/tldr_key_features.md" },       
            { text: 'Quickstart', link: "/getting_started/quickstart.md" }

          ]
        },
        {
          text: 'Agents',
          link: '/agents/home.md',
          items: [
            { text: 'Knowlegde base', link: "/agents/ai_knowlegdebase.md" },
            { text: 'Software team', link: "/agents/ai_software_team.md" }
          ]
        },
        {
          text: 'Best Practices',
          link: '/best_practices/home.md',
          items: [
            { text: 'Working with Git', link: "/best_practices/working_with_git.md" },
            { text: 'Knowledge', link: "/best_practices/knowledge.md" },       
            { text: 'LLM Selection Tips', link: "/best_practices/llm_selection_tips.md" },          
            { text: 'Files Section', link: "/best_practices/files_section.md" }
          ]
        },
        {
          text: 'Use Cases',
          link: '/use_cases/home.md',
          items: [
            { text: 'Start from a Template', link: "/use_cases/start_from_template.md" },
            { text: 'Generate Documentation', link: "/use_cases/generate_documentation.md" },       
            { text: 'Implement New Feature', link: "/use_cases/implement_new_feature.md" },          
            { text: 'GreenField Development', link: "/use_cases/greenfield_development.md" }
          ]
        },
        {
          text: 'Ecosystem & Technology',
          items: [
            { text: 'Kore RAG', link: "/ecosystem/kore_rag.md" },
            { text: 'Kore SLM', link: "/ecosystem/kore_slm.md" },
            { text: 'Kore M365', link: "/ecosystem/kore_m365.md" },
            { text: 'Kore Blueprint', link: "/technical/system_blueprint.md" },
            { text: 'Kore Vision & Plan', link: "/ecosystem/vision_and_plan.md" },
            { text: 'Known Issues', link: "/getting_started/known_issues.md" }
          ]
        },
      ],

      socialLinks: [
        { icon: 'github', link: 'https://github.com/BrightenDigital/kore' }
      ],

      footer: {
        copyright: 'Copyright © 2025 Kore AI'
      }
    }
  })
)
