import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kore-Docs",
  base: "/Kore/",
  description: "Kore AI Official Documentation",
  head: [['link', {rel: 'icon', href: '/Kore/favicon.ico'}]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/getting_started/introduction.md' },
      { text: 'Key Features', link: '/getting_started/tldr_key_features.md' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        link: '/getting_started/introduction.md',
        items: [
          { text: 'Quickstart', link: "/getting_started/quickstart.md" },
          { text: 'TLDR Key Features', link: "/getting_started/tldr_key_features.md" },       
          { text: 'FAQs', link: "/getting_started/frequently_asked.md" },          
          { text: 'Known Issues', link: "/getting_started/known_issues.md" }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
