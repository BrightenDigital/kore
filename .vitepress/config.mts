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
        { text: 'What\'s new', link: '/getting_started/whats_new.md' },
        { text: 'FAQ', link: '/getting_started/frequently_asked.md' }
      ],

      sidebar: [
        {
          text: 'Getting Started',
          link: '/getting_started/home.md',
          items: [
            { text: 'Core Capabilities', link: "/getting_started/tldr_key_features.md" },       
            { text: 'Getting Up and Running', link: "/getting_started/quickstart.md" },
            { text: 'Real-World Examples', link: "/agents/use_cases.md" }
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
          link: '/org/org.md',
          items: [
            { text: 'Members', link: "/org/members.md" },
            { text: 'Enterprise Chatbots', link: "/org/chatbots.md" },
            { text: 'Knowlegde Management', link: "/org/buckets.md" },
            { text: 'Secure Data', link: "/org/data-controls.md" },
            { text: 'Language Models', link: "/org/llms.md" },
            { text: 'Model Context Protocol', link: "/org/mcp.md" },
            { text: 'API keys', link: "/org/keys.md" }            
          ]
        },
        {
          text: 'Ecosystem',
          link: '/ecosystem/ecosystem.md',
          items: [
            { text: 'Kore RAG', link: "/ecosystem/kore_rag.md" },
            { text: 'Kore SLM', link: "/ecosystem/kore_slm.md" },
            { text: 'Kore M365', link: "/ecosystem/kore_m365.md" },
            { text: 'Kore Blueprint', link: "/technical/system_blueprint.md" },
          ]
        },
        {
          text: 'Strategy',
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
