// Given from https://vitepress.dev/guide/extending-default-theme

import DefaultTheme from 'vitepress/theme'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    if (DefaultTheme.enhanceApp) {
      DefaultTheme.enhanceApp({ app, router, siteData })
    }

    // Only run in browser environment
    if (typeof window !== 'undefined') {
      if (!document.getElementById('Compass-chat-widget-script')) {
        const script = document.createElement('script')
        script.id = 'Compass-chat-widget-script'
        script.src = 'https://repo.brightenconsulting.com/Compass/widgets/Compass-chat-widget.min.js'
        script.async = true
        
        // Set data attributes for the Compass chat widget
        script.setAttribute('data-api-key', 'sk-lYLlqqkqVoIzSzQx7OxJvHZgj1Z5BpqtX4gW4emcwOXZRpRwXQEmI7EaVvAFqjmy4tNKIqGbi_cf87-0mJfIQQ')
        script.setAttribute('data-theme', 'material')
        script.setAttribute('data-position', 'bottom-right')
        script.setAttribute('data-timeout', '5000')
        script.setAttribute('data-debug', 'true')
        
        document.body.appendChild(script)
      }
    }
  }
}
