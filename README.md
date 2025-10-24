# Calliope Dokumentation

Eine VitePress-basierte Dokumentationssite mit GitHub Pages Deployment.

## Lokale Entwicklung

```bash
npm install
npm run docs:dev
```

Die Site ist dann unter `http://localhost:5173/Calliope-Seite/` verfügbar.

## Build für Produktion

```bash
npm run docs:build
```

## Deployment

Die Site wird automatisch über GitHub Actions auf GitHub Pages deployed, wenn Änderungen an den `main` Branch gepusht werden.

## Struktur

- `/docs` - Dokumentationsinhalt
- `/docs/.vitepress/config.ts` - VitePress Konfiguration  
- `/docs/index.md` - Homepage
- `/docs/kapitel1/` - Kapitel 1 Inhalte
- `/docs/kapitel2/` - Kapitel 2 Inhalte
- `/docs/kapitel3/` - Kapitel 3 Inhalte
- `/.github/workflows/deploy.yml` - GitHub Pages Deployment Workflow