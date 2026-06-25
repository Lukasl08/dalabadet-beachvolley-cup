// Tweaks - a large, playful control surface that reshapes the whole page.
// Everything is applied non-destructively: CSS-variable overrides + extra rules
// are written into a single <style id="tweak-overrides"> block, a parallax
// multiplier global is set, and optional sections are shown/hidden. The section
// components themselves are never edited, so resetting the tweaks always brings
// the original design back.
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "mood": "ostersjo",
  "accent": "#2C4BD4",
  "accentEverywhere": false,
  "contentWidth": "normal",
  "sectionSpace": "normal",
  "sectionLines": true,
  "corners": "mjuka",
  "shadow": "mjuk",
  "motion": "normal",
  "buttonStyle": "fylld",
  "typeScale": "normal",
  "bodySize": "normal",
  "uppercaseHeadings": false,
  "heroHeight": "full",
  "heroAlign": "vanster",
  "heroGlow": true,
  "heroBadge": true,
  "scrollCue": true,
  "whyLayout": "tva",
  "whyNumbers": true,
  "whyUnderline": true,
  "schedRail": true,
  "schedDotsFilled": false,
  "texture": "ingen",
  "showSchema": true,
  "showPlats": true,
  "showPris": true,
  "showFolj": true,
  "showFaq": true
}/*EDITMODE-END*/;

// ---- Färgstämningar: each remaps the base palette so every semantic alias cascades. ----
const TWEAK_MOODS = {
  ostersjo: { label: 'Östersjö', vars: {} },
  solnedgang: {
    label: 'Solnedgång',
    vars: {
      '--sand': '#F3E4CA', '--sand-deep': '#E6C994', '--sand-hair': '#D8B981',
      '--sea': '#B4592C', '--sea-deep': '#5E3320', '--sea-soft': '#C8753F',
      '--dune': '#C8923F', '--dune-soft': '#D7A857', '--ink': '#33271F',
      '--sea-tint-1': '#F4E1D4', '--sea-tint-2': '#E8C6B0', '--sea-tint-3': '#D9A584',
      '--sand-tint-1': '#FBF2E0', '--sand-tint-2': '#F6E8CD', '--sand-tint-3': '#EFD7AE',
      '--dune-tint-1': '#EFE6D2', '--dune-tint-2': '#E0CDA4', '--dune-tint-3': '#CDB178',
    },
  },
  kvallsdopp: {
    label: 'Kvällsdopp',
    vars: {
      '--sand': '#DCE7E8', '--sand-deep': '#BBD0D1', '--sand-hair': '#9FBBBD',
      '--sea': '#2A5C72', '--sea-deep': '#122E3B', '--sea-soft': '#3E7589',
      '--dune': '#5C8470', '--dune-soft': '#74998A', '--ink': '#1E2E36', '--white': '#F4F8F8',
      '--sea-tint-1': '#D2E0E3', '--sea-tint-2': '#A9C5CB', '--sea-tint-3': '#80A7B0',
      '--sand-tint-1': '#EAF1F2', '--sand-tint-2': '#D9E6E7', '--sand-tint-3': '#C3D7D9',
    },
  },
  morgonljus: {
    label: 'Morgonljus',
    vars: {
      '--sand': '#FBF5E8', '--sand-deep': '#EEE2C6', '--sand-hair': '#DAC9A0',
      '--sea': '#3E8597', '--sea-deep': '#225863', '--sea-soft': '#5BA0B1',
      '--dune': '#7FA065', '--ink': '#2D2A22',
      '--sea-tint-1': '#E6F0F1', '--sea-tint-2': '#C7DEE2', '--sea-tint-3': '#A2C6CD',
    },
  },
  gras: {
    label: 'Gräs & sand',
    vars: {
      '--sand': '#EEE8CF', '--sand-deep': '#D8CC9F', '--sand-hair': '#C3B585',
      '--sea': '#557A4A', '--sea-deep': '#2C4226', '--sea-soft': '#6E9760',
      '--dune': '#7B9A5C', '--dune-soft': '#94B073', '--ink': '#262A1F',
      '--sea-tint-1': '#E3EAD7', '--sea-tint-2': '#C6D5B2', '--sea-tint-3': '#A4BD8B',
    },
  },
  korall: {
    label: 'Korallrev',
    vars: {
      '--sand': '#FBEDE6', '--sand-deep': '#F4D2C4', '--sand-hair': '#E7B9A6',
      '--sea': '#C0397B', '--sea-deep': '#6E1A47', '--sea-soft': '#D2629A',
      '--dune': '#E2603A', '--dune-soft': '#EC8460', '--ink': '#34222A',
      '--sea-tint-1': '#F8DEE9', '--sea-tint-2': '#F0BBD2', '--sea-tint-3': '#E595B7',
    },
  },
  midnatt: {
    label: 'Midnattssol',
    vars: {
      '--sand': '#E7E3F0', '--sand-deep': '#CFC8E2', '--sand-hair': '#B3A9D0',
      '--sea': '#4B3F8F', '--sea-deep': '#241B52', '--sea-soft': '#6557A8',
      '--dune': '#9A6FB0', '--dune-soft': '#B189C2', '--ink': '#241F33', '--white': '#F6F4FB',
      '--sea-tint-1': '#E3DEF2', '--sea-tint-2': '#C9BFE6', '--sea-tint-3': '#AA9CD6',
    },
  },
};

const TWEAK_ACCENTS = [
  { c: '#2C4BD4', deep: '#1E36A6' }, // Kungsblå
  { c: '#E2603A', deep: '#C04723' }, // Korall
  { c: '#4F7A3D', deep: '#3A5C2D' }, // Gräsgrön
  { c: '#2E6F80', deep: '#1B4750' }, // Havsblå
  { c: '#C0397B', deep: '#97285E' }, // Hallon
  { c: '#E0A21B', deep: '#B27E10' }, // Solgul
];
const ACCENT_DEEP = Object.fromEntries(TWEAK_ACCENTS.map((a) => [a.c.toLowerCase(), a.deep]));

const TWEAK_CORNERS = {
  skarpa: { '--radius-xs': '2px', '--radius-sm': '2px', '--radius-md': '3px', '--radius-lg': '4px', '--radius-pebble': '3px' },
  mjuka: {},
  runda: { '--radius-sm': '14px', '--radius-md': '20px', '--radius-lg': '30px', '--radius-pebble': '999px' },
};

const TWEAK_SHADOW = {
  platt: { '--shadow-sm': 'none', '--shadow-md': 'none', '--shadow-lg': 'none' },
  mjuk: {},
  djup: {
    '--shadow-sm': '0 2px 6px rgba(38,36,31,0.10)',
    '--shadow-md': '0 12px 30px rgba(38,36,31,0.16)',
    '--shadow-lg': '0 30px 70px rgba(27,71,80,0.26)',
  },
};

const TWEAK_TYPE = {
  stram: { '--fs-hero': 'clamp(2.4rem, 6.4vw, 5rem)', '--fs-display': '2.7rem', '--fs-h1': '2.05rem', '--fs-h2': '1.6rem', '--fs-h3': '1.25rem' },
  normal: {},
  stor: { '--fs-hero': 'clamp(3.4rem, 9vw, 7.6rem)', '--fs-display': '3.9rem', '--fs-h1': '3rem', '--fs-h2': '2.25rem', '--fs-h3': '1.55rem' },
};

const TWEAK_WIDTH = { smal: { '--maxw-content': '940px' }, normal: {}, bred: { '--maxw-content': '1320px' } };
const TWEAK_SPACE = {
  kompakt: { '--section-pad-y': 'clamp(40px, 5vw, 64px)' },
  normal: {},
  luftig: { '--section-pad-y': 'clamp(88px, 13vw, 176px)' },
};
const TWEAK_BODY = { liten: { '--fs-body': '0.97rem' }, normal: {}, stor: { '--fs-body': '1.18rem' } };
const TWEAK_HEROH = { kort: '78vh', full: '100vh', hog: '114vh' };

const TEXTURE_DOTS = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28'%3E%3Ccircle cx='3' cy='3' r='1.6' fill='%232E6F80' fill-opacity='0.13'/%3E%3C/svg%3E\")";
const TEXTURE_WAVES = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='40' viewBox='0 0 120 40'%3E%3Cpath d='M0 20 C 20 6, 40 6, 60 20 S 100 34, 120 20' fill='none' stroke='%232E6F80' stroke-opacity='0.10' stroke-width='2'/%3E%3C/svg%3E\")";
const TEXTURE_GRAIN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.045'/%3E%3C/svg%3E\")";

function buildVarBlock(obj) {
  const body = Object.entries(obj).map(([k, v]) => `  ${k}: ${v};`).join('\n');
  return body ? `:root{\n${body}\n}` : '';
}

function Tweaks() {
  const { useTweaks, TweaksPanel, TweakSection, TweakSelect, TweakRadio, TweakToggle, TweakColor } = window;
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    const vars = {
      ...(TWEAK_MOODS[t.mood] ? TWEAK_MOODS[t.mood].vars : {}),
      ...(TWEAK_CORNERS[t.corners] || {}),
      ...(TWEAK_SHADOW[t.shadow] || {}),
      ...(TWEAK_TYPE[t.typeScale] || {}),
      ...(TWEAK_WIDTH[t.contentWidth] || {}),
      ...(TWEAK_SPACE[t.sectionSpace] || {}),
      ...(TWEAK_BODY[t.bodySize] || {}),
    };
    const accent = t.accent || '#2C4BD4';
    vars['--royal'] = accent;
    vars['--royal-deep'] = ACCENT_DEEP[accent.toLowerCase()] || accent;

    const texture = t.texture === 'prickar' ? TEXTURE_DOTS : t.texture === 'vagor' ? TEXTURE_WAVES : t.texture === 'kornig' ? TEXTURE_GRAIN : '';

    const rules = [];

    // --- background texture ---
    if (texture) rules.push(`body{background-image:${texture};${t.texture === 'prickar' ? 'background-size:28px 28px;' : t.texture === 'vagor' ? 'background-size:120px 40px;' : ''}}`);

    // --- section accent bars ---
    if (!t.sectionLines) rules.push('#schema > div[aria-hidden="true"]:first-child, #anmalan > div[aria-hidden="true"]:first-child{display:none;}');

    // --- motion ---
    if (t.motion === 'lugn') rules.push('.drift-slow,.drift-slower,.bob{animation:none!important;}');
    if (t.motion === 'livlig') rules.push('.drift-slow{animation-duration:8s!important;}.drift-slower{animation-duration:12s!important;}.bob{animation-duration:4s!important;}');

    // --- button style ---
    if (t.buttonStyle === 'kontur') rules.push('.ds-btn[data-variant="primary"]{background:transparent!important;color:var(--royal)!important;box-shadow:inset 0 0 0 2px var(--royal)!important;}');
    if (t.buttonStyle === 'mjuk') rules.push('.ds-btn[data-variant="primary"]{background:color-mix(in srgb, var(--royal) 16%, transparent)!important;color:var(--royal-deep)!important;box-shadow:none!important;}');

    // --- uppercase headings ---
    if (t.uppercaseHeadings) rules.push('h1,h2,h3{text-transform:uppercase;letter-spacing:-0.01em;}');

    // --- hero ---
    rules.push(`#top{min-height:${TWEAK_HEROH[t.heroHeight] || '100vh'}!important;}`);
    if (t.heroAlign === 'center') rules.push('#top .ds-container{text-align:center;}#top .ds-container .hero-rise{margin-left:auto;margin-right:auto;}#top .hr4{justify-content:center;}');
    if (t.heroGlow) rules.push('#top::after{content:"";position:absolute;left:50%;top:34%;width:min(70vw,720px);height:min(70vw,720px);transform:translate(-50%,-50%);background:radial-gradient(circle, color-mix(in srgb, var(--dune-soft) 40%, transparent) 0%, transparent 62%);pointer-events:none;z-index:0;}');
    if (!t.heroBadge) rules.push('#top .hr1{display:none!important;}');
    if (!t.scrollCue) rules.push('#top a[aria-label="Scrolla ner"]{display:none!important;}');

    // --- why section ---
    if (t.whyLayout === 'en') rules.push('.why-list{grid-template-columns:1fr!important;}.why-item{max-width:60ch;}');
    if (!t.whyNumbers) rules.push('.why-num,.why-rule{display:none!important;}.why-index{margin-bottom:0!important;}');
    if (!t.whyUnderline) rules.push('.why-ul{display:none!important;}');
    if (t.accentEverywhere) rules.push('.ds-eyebrow{color:var(--royal)!important;}.why-num{color:var(--royal)!important;}.why-ul path{stroke:var(--royal)!important;}');

    // --- schedule ---
    if (!t.schedRail) rules.push('#schema div[aria-hidden="true"][style*="width: 2px"], #schema div[aria-hidden="true"][style*="width:2px"]{display:none!important;}');
    if (t.schedDotsFilled) rules.push('.sched-dot{background:var(--royal)!important;border-color:var(--royal)!important;}');

    let el = document.getElementById('tweak-overrides');
    if (!el) { el = document.createElement('style'); el.id = 'tweak-overrides'; document.head.appendChild(el); }
    el.textContent = buildVarBlock(vars) + '\n' + rules.join('\n');

    window.__parallaxMul = t.motion === 'lugn' ? 0 : t.motion === 'livlig' ? 1.8 : 1;

    const setShown = (id, shown) => { const s = document.getElementById(id); if (s) s.style.display = shown ? '' : 'none'; };
    setShown('schema', t.showSchema);
    setShown('plats', t.showPlats);
    setShown('pris', t.showPris);
    setShown('folj', t.showFolj);
    setShown('fragor', t.showFaq);
  });

  const moodOptions = Object.keys(TWEAK_MOODS).map((k) => ({ value: k, label: TWEAK_MOODS[k].label }));

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Stämning & färg" />
      <TweakSelect label="Färgstämning" value={t.mood} options={moodOptions} onChange={(v) => setTweak('mood', v)} />
      <TweakColor label="CTA-accent" value={t.accent} options={TWEAK_ACCENTS.map((a) => a.c)} onChange={(v) => setTweak('accent', v)} />
      <TweakToggle label="Accentfärg överallt" value={t.accentEverywhere} onChange={(v) => setTweak('accentEverywhere', v)} />

      <TweakSection label="Layout & rytm" />
      <TweakRadio label="Innehållsbredd" value={t.contentWidth} options={['smal', 'normal', 'bred']} onChange={(v) => setTweak('contentWidth', v)} />
      <TweakRadio label="Sektionsavstånd" value={t.sectionSpace} options={['kompakt', 'normal', 'luftig']} onChange={(v) => setTweak('sectionSpace', v)} />
      <TweakToggle label="Accentlinjer på sektioner" value={t.sectionLines} onChange={(v) => setTweak('sectionLines', v)} />

      <TweakSection label="Form & rörelse" />
      <TweakRadio label="Hörn" value={t.corners} options={['skarpa', 'mjuka', 'runda']} onChange={(v) => setTweak('corners', v)} />
      <TweakRadio label="Skuggdjup" value={t.shadow} options={['platt', 'mjuk', 'djup']} onChange={(v) => setTweak('shadow', v)} />
      <TweakRadio label="Rörelse" value={t.motion} options={['lugn', 'normal', 'livlig']} onChange={(v) => setTweak('motion', v)} />
      <TweakRadio label="Knappstil" value={t.buttonStyle} options={['fylld', 'kontur', 'mjuk']} onChange={(v) => setTweak('buttonStyle', v)} />

      <TweakSection label="Typografi" />
      <TweakRadio label="Rubrikskala" value={t.typeScale} options={['stram', 'normal', 'stor']} onChange={(v) => setTweak('typeScale', v)} />
      <TweakRadio label="Brödtext" value={t.bodySize} options={['liten', 'normal', 'stor']} onChange={(v) => setTweak('bodySize', v)} />
      <TweakToggle label="Versala rubriker" value={t.uppercaseHeadings} onChange={(v) => setTweak('uppercaseHeadings', v)} />

      <TweakSection label="Hero" />
      <TweakRadio label="Höjd" value={t.heroHeight} options={['kort', 'full', 'hog']} onChange={(v) => setTweak('heroHeight', v)} />
      <TweakRadio label="Justering" value={t.heroAlign} options={['vanster', 'center']} onChange={(v) => setTweak('heroAlign', v)} />
      <TweakToggle label="Sol-glow" value={t.heroGlow} onChange={(v) => setTweak('heroGlow', v)} />
      <TweakToggle label="Datum-pill" value={t.heroBadge} onChange={(v) => setTweak('heroBadge', v)} />
      <TweakToggle label="Scrolla-pil" value={t.scrollCue} onChange={(v) => setTweak('scrollCue', v)} />

      <TweakSection label="Sektion: Varför delta" />
      <TweakRadio label="Kolumner" value={t.whyLayout} options={['en', 'tva']} onChange={(v) => setTweak('whyLayout', v)} />
      <TweakToggle label="Numrering" value={t.whyNumbers} onChange={(v) => setTweak('whyNumbers', v)} />
      <TweakToggle label="Handritade streck" value={t.whyUnderline} onChange={(v) => setTweak('whyUnderline', v)} />

      <TweakSection label="Sektion: Schema" />
      <TweakToggle label="Tidslinje-räls" value={t.schedRail} onChange={(v) => setTweak('schedRail', v)} />
      <TweakToggle label="Fyllda prickar" value={t.schedDotsFilled} onChange={(v) => setTweak('schedDotsFilled', v)} />

      <TweakSection label="Bakgrund" />
      <TweakSelect label="Textur" value={t.texture}
        options={[{ value: 'ingen', label: 'Ingen' }, { value: 'vagor', label: 'Vågor' }, { value: 'prickar', label: 'Prickar' }, { value: 'kornig', label: 'Kornig' }]}
        onChange={(v) => setTweak('texture', v)} />

      <TweakSection label="Visa / dölj sektioner" />
      <TweakToggle label="Schema" value={t.showSchema} onChange={(v) => setTweak('showSchema', v)} />
      <TweakToggle label="Plats" value={t.showPlats} onChange={(v) => setTweak('showPlats', v)} />
      <TweakToggle label="Pris" value={t.showPris} onChange={(v) => setTweak('showPris', v)} />
      <TweakToggle label="Följ oss" value={t.showFolj} onChange={(v) => setTweak('showFolj', v)} />
      <TweakToggle label="Vanliga frågor" value={t.showFaq} onChange={(v) => setTweak('showFaq', v)} />
    </TweaksPanel>
  );
}
window.Tweaks = Tweaks;
