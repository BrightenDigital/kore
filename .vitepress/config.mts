import { defineConfig } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    title: "Compass AI",
    base: "/kore/",
    description: "Compass AI Official Documentation",
    head: [['link', {rel: 'icon', href: '/compass/favicon.ico'}]],
    appearance: 'dark',
    themeConfig: {
      logo: '/compass_logo.png',
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
            { text: 'Real-World Examples', link: "/agents/use_cases.md" },
            { text: 'Getting Up and Running', link: "/getting_started/quickstart.md" }
          ]
        },
        {
          text: 'Agents',
          link: '/agents/home.md',
          items: [
            { text: 'AI Knowlegde Base', link: "/agents/ai_knowlegdebase.md" },
            { text: 'AI Software team', link: "/agents/ai_software_team.md" },
            { text: 'SlideCraft team', link: "/agents/slide_craft.md" },
            { text: 'Best practices', link: "/agents/best_practices.md" },
            { text: 'Tutorials', items:[
              { text: 'Create Software team', link: "/tutorials/create-team-git.md" },
            ]
            }
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
            { text: 'Compass Agentic RAG', link: "/ecosystem/compass_rag.md" },
            { text: 'Compass SLM', link: "/ecosystem/compass_slm.md" },
            { text: 'Compass M365', link: "/ecosystem/compass_m365.md" },
            { text: 'Compass MS Teams', link: "/ecosystem/compass_msteams.md" },
            { text: 'Compass Blueprint', link: "/technical/system_blueprint.md" },
          ]
        },
        {
          text: 'Strategy',
          items: [
            { text: 'Compass Vision & Plan', link: "/ecosystem/vision_and_plan.md" },
            { text: 'Roadmap', link: "/ecosystem/roadmap.md" },
            { text: 'Known Issues', link: "/getting_started/known_issues.md" }
          ]
        },
      ],

      socialLinks: [
        { icon: 'github', link: 'https://github.com/BrightenDigital/compass' }
      ],

      footer: {
        copyright: 'Copyright © 2025 Compass AI'
      }
    }
  })
)
