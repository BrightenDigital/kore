import { defineConfig } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    title: "Kore AI",
    base: "/kore/",
    description: "Kore AI Official Documentation",
    head: [['link', {rel: 'icon', href: '/kore/favicon.ico'}]],
    appearance: 'dark',
    themeConfig: {
      logo: '/kore_logo.png',
      search: {
        provider: 'local'
      },
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Getting Started', link: '/getting_started/home.md' },    
        { text: 'What\'s new', link: '/getting_started/whats_new.md' }
      ],

      sidebar: [
        {
          text: 'Getting Started',
          link: '/getting_started/home.md',
          items: [
            { text: 'Key Features', link: "/getting_started/tldr_key_features.md" },       
            { text: 'Quickstart', link: "/getting_started/quickstart.md" },
            { text: 'Use cases', link: "/agents/use_cases.md" }
          ]
        },
        {
          text: 'Agents',
          link: '/agents/home.md',
          items: [
            { text: 'Knowlegde Base agent', link: "/agents/ai_knowlegdebase.md" },
            { text: 'AI Software team', link: "/agents/ai_software_team.md" },
            { text: 'Best practices', link: "/agents/best_practices.md" }
          ]
        },
        {
          text: 'Organisation',
          link: '',
          items: [
            { text: 'Enterprise Chatbots', link: "/org/chatbots.md" },
            { text: 'Manage Knowlegde', link: "/org/buckets.md" }
          ]
        },
        {
          text: 'Ecosystem & Technology',
          items: [
            { text: 'Kore RAG', link: "/ecosystem/kore_rag.md" },
            { text: 'Kore SLM', link: "/ecosystem/kore_slm.md" },
            { text: 'Kore M365', link: "/ecosystem/kore_m365.md" },
            { text: 'Kore Blueprint', link: "/technical/system_blueprint.md" },
          ]
        },
        {
          text: 'Strategy & Product Direction',
          items: [
            { text: 'Kore Vision & Plan', link: "/ecosystem/vision_and_plan.md" },
            { text: 'Roadmap', link: "/ecosystem/roadmap.md" },
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
