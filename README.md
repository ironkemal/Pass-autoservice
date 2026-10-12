# Pass Autoservice – Website

Statischer One-Pager. Kein Build-Schritt, keine Abhängigkeiten.

```
public/             ← wird veröffentlicht
  index.html          Startseite
  impressum.html      Impressum
  datenschutz.html    Datenschutzerklärung
  assets/styles.css   Styles
  assets/script.js    Kleine Extras (heutiger Tag, Einblenden)
  assets/fonts/       Lokal gehostete Schriften (OFL)
  assets/img/         Bilder, Favicon
  _headers            Security- und Cache-Header (Cloudflare Pages)
```

## Lokal ansehen
```
python -m http.server 8000 -d public
```
→ http://localhost:8000 (direkt per Doppelklick öffnen geht auch, dann fehlen nur die Schriften)

## Deploy
Cloudflare Pages, verbunden mit diesem GitHub-Repo.
Build command: *(leer)* · Output directory: `public`
Jeder Push auf `main` geht nach ca. 30 Sekunden live.

Offene Platzhalter: siehe `PLACEHOLDERS.md`.
