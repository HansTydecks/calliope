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

```bash
npm run build-and-deploy
```

Der Befehl baut die Seite lokal, staged Änderungen und erstellt bei Bedarf einen Commit mit anschließendem Push. Dadurch wird die GitHub-Actions-Pipeline ausgelöst und die Seite auf GitHub Pages veröffentlicht. Stelle sicher, dass `origin` auf das GitHub-Repository zeigt und du auf dem `main`-Branch arbeitest.

Alternativ wird die Site automatisch über GitHub Actions deployed, wenn Änderungen manuell an den `main` Branch gepusht werden.

## Struktur

- `/docs` - Dokumentationsinhalt
- `/docs/.vitepress/config.ts` - VitePress Konfiguration  
- `/docs/index.md` - Homepage
- `/docs/kapitel1/` - Kapitel 1 Inhalte
- `/docs/kapitel2/` - Kapitel 2 Inhalte
- `/docs/kapitel3/` - Kapitel 3 Inhalte
- `/.github/workflows/deploy.yml` - GitHub Pages Deployment Workflow