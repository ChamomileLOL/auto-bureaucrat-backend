import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Auto-Bureaucrat Surveillance Terminal',
        short_name: 'Surveillance',
        description: 'Real-time biological host tracking and systemic stagnation monitoring.',
        theme_color: '#000000',
        background_color: '#000000',
        display: 'standalone',
        icons: [
          {
            src: '/vite.svg',
            sizes: '192x192',
            type: 'image/svg+xml'
          },
          {
            src: '/vite.svg',
            sizes: '512x512',
            type: 'image/svg+xml'
          }
        ]
      },
      workbox: {
        // This tells the Service Worker to cache all JS, CSS, and HTML files for offline use
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    })
  ],
})