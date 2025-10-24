import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: 'Calliope Dokumentation',
  description: 'Eine umfassende Dokumentation für Calliope',
  base: '/Calliope-Seite/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Kapitel 1', link: '/kapitel1/' },
      { text: 'Kapitel 2', link: '/kapitel2/' },
      { text: 'Kapitel 3', link: '/kapitel3/' }
    ],
    sidebar: [
      {
        text: 'Dokumentation',
        items: [
          { text: 'Übersicht', link: '/' },
          { text: 'Kapitel 1: Grundlagen', link: '/kapitel1/' },
          { text: 'Kapitel 2: Fortgeschritten', link: '/kapitel2/' },
          { text: 'Kapitel 3: Experte', link: '/kapitel3/' }
        ]
      }
    ]
  }
})
