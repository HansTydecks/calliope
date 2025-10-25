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
      { text: 'Kapitel 3', link: '/kapitel3/' },
      { text: 'Kapitel 4', link: '/kapitel4/' }
    ],
    sidebar: [
      {
        text: 'Kapitel 1: Hardwarekomponenten',
        items: [
          { text: 'Überblick', link: '/kapitel1/' },
          { text: 'Komponenten-Checkliste', link: '/kapitel1/komponenten-check' }
        ]
      },
      {
        text: 'Kapitel 2: EVA-Modell',
        items: [
          { text: 'Überblick', link: '/kapitel2/' },
          { text: 'EVA-Modell in Aktion', link: '/kapitel2/eva-modell-beispiele' }
        ]
      },
      {
        text: 'Kapitel 3: Algorithmen formulieren',
        items: [
          { text: 'Überblick', link: '/kapitel3/' },
          { text: 'Bausteine guter Beschreibungen', link: '/kapitel3/beschreibungsbausteine' }
        ]
      },
      {
        text: 'Kapitel 4: Blocksprache',
        items: [
          { text: 'Überblick', link: '/kapitel4/' },
          { text: 'Mini-Projekt', link: '/kapitel4/praxisprojekt' }
        ]
      }
    ]
  }
})
