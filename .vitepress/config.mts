import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kore-Docs",
  base: "/kore/",
  description: "Kore AI Official Documentation",
  head: [['link', {rel: 'icon', href: '/kore/favicon.ico'}]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting_started/home.md' },      
      { text: 'Key Features', link: '/getting_started/tldr_key_features.md' },
      { text: 'Best Practices', link: '/best_practices/home.md' },
      { text: 'Use Cases', link: '/use_cases/home.md' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        link: '/getting_started/home.md',
        items: [
          { text: 'Quickstart', link: "/getting_started/quickstart.md" },
          { text: 'TLDR Key Features', link: "/getting_started/tldr_key_features.md" },       
          { text: 'FAQs', link: "/getting_started/frequently_asked.md" },          
          { text: 'Known Issues', link: "/getting_started/known_issues.md" }
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
        text: 'Technical',
        items: [
          { text: 'Kore System Design Blueprint', link: "/tecnhical/system_blueprint.md" }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
