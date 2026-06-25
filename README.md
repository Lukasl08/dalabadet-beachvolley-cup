# Dalabadet Beachvolley Cup

Hemsida för en lokal beachvolley-turnering på Dalabadet i Trelleborg.

En illustrerad, sommarvarm one-pager byggd med React (via Babel i webbläsaren) och
ett eget designsystem. Sektioner: hero med fotokollage, rörlig bildmarquee,
"varför delta", fakta-band med count-up, schema, känslo-sektion, pris, galleri,
plats (karta), vanliga frågor, anmälan och footer.

## Öppna direkt (enklast)

**`Dalabadet Beachvolley Cup (dubbelklicka).html`** är en fristående version där
CSS, designsystem och alla komponenter är inbakade i en enda fil. Dubbelklicka
bara på den — den fungerar utan server. (Kräver internet för React/Babel-CDN och
för bilderna.)

## Köra utvecklingsversionen lokalt

Den modulära `Dalabadet Beachvolley Cup.html` laddar `site/*.jsx` via Babel,
vilket kräver att den serveras över HTTP (inte `file://`). Starta en enkel server
i mappen:

```bash
python3 -m http.server 8753
```

Öppna sedan: http://localhost:8753/Dalabadet%20Beachvolley%20Cup.html

> Om du dubbelklickar på den modulära filen syns bara den sandgula bakgrunden —
> använd den fristående filen ovan, eller servern.

## Struktur

- `Dalabadet Beachvolley Cup.html` — startsida, laddar allt
- `site/` — React-komponenter (en fil per sektion)
- `site/images.jsx` — kuraterade riktiga beachvolley-foton (Pexels, fria att använda)
- `_ds/` — designsystem: färg-, typografi- och spacing-tokens + kärnkomponenter

Bilder hotlänkas från Pexels (fria, ingen attribution krävs).
