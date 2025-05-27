import DefaultTheme from 'vitepress/theme'
import './styles/colors.scss'
import { watchEffect } from 'vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // Handle dark/light mode preference changes
    if (typeof window !== 'undefined') {
      watchEffect(() => {
        const html = document.documentElement
        const isDark = html.classList.contains('dark')
        
        // Update CSS variables based on theme
        if (isDark) {
          // Dark mode colors
          html.style.setProperty('--vp-c-bg', '#1a1a1a')
          html.style.setProperty('--vp-c-bg-alt', '#242424')
          html.style.setProperty('--vp-c-brand', '#bd1634') // Primary red
          html.style.setProperty('--vp-c-brand-light', '#d42d4b') // Lighter red
          html.style.setProperty('--vp-c-brand-lighter', '#eb445f') // Even lighter red
          html.style.setProperty('--vp-c-brand-dark', '#a6122e') // Darker red
          html.style.setProperty('--vp-c-brand-darker', '#8f0e27') // Even darker red
          html.style.setProperty('--vp-c-secondary', '#2a2a2a') // Dark secondary
          html.style.setProperty('--vp-c-secondary-light', '#333333') // Dark secondary light
          html.style.setProperty('--vp-c-secondary-lighter', '#3d3d3d') // Dark secondary lighter
          html.style.setProperty('--vp-c-secondary-dark', '#222222') // Dark secondary dark
          html.style.setProperty('--vp-c-secondary-darker', '#1e1e1e') // Dark secondary darker
        } else {
          // Light mode colors
          html.style.setProperty('--vp-c-bg', '#ffffff')
          html.style.setProperty('--vp-c-bg-alt', '#e7ece5') // Secondary white as bg-alt
          html.style.setProperty('--vp-c-brand', '#bd1634') // Primary red
          html.style.setProperty('--vp-c-brand-light', '#d42d4b') // Lighter red
          html.style.setProperty('--vp-c-brand-lighter', '#eb445f') // Even lighter red
          html.style.setProperty('--vp-c-brand-dark', '#a6122e') // Darker red
          html.style.setProperty('--vp-c-brand-darker', '#8f0e27') // Even darker red
          html.style.setProperty('--vp-c-secondary', '#e7ece5') // Secondary white
          html.style.setProperty('--vp-c-secondary-light', '#f0f4ef') // Secondary white light
          html.style.setProperty('--vp-c-secondary-lighter', '#f8faf7') // Secondary white lighter
          html.style.setProperty('--vp-c-secondary-dark', '#d0d8cd') // Secondary white dark
          html.style.setProperty('--vp-c-secondary-darker', '#b9c4b5') // Secondary white darker
        }
      })
    }
  }
}
