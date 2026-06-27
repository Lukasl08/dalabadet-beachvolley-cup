// Hero - the showpiece. A layered, illustrative Swedish-summer-beach scene
// (sky, soft sun, sea bands, sand, grass) with gentle parallax + the signature
// ball-arc that draws itself once on load. No photos - graphic per the brief.
function Hero({ onRegister }) {
  const { Button } = window.DalabadetBeachvolleyCupDesignSystem_b20b76;

  return (
    <section id="top" style={{
      position: 'relative', overflow: 'hidden', minHeight: '100vh',
      display: 'flex', alignItems: 'center',
    }}>
      {/* Sky */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: 'linear-gradient(180deg, #bfe0e6 0%, #cfe6e3 22%, #a9cdd2 40%, #6fa0ab 49.6%, #4d8593 50%, #3a7b8a 56%, #EFE3C4 56.3%, #EFE3C4 100%)',
      }}></div>

      {/* Soft sun */}
      <div aria-hidden="true" data-parallax="0.10" className="drift-slower" style={{
        position: 'absolute', top: '13%', right: '14%', width: 'clamp(120px,16vw,220px)', height: 'clamp(120px,16vw,220px)',
        borderRadius: '999px', zIndex: 1,
        background: 'radial-gradient(circle, rgba(251,248,241,0.95) 0%, rgba(251,248,241,0.78) 38%, rgba(251,248,241,0.18) 66%, rgba(251,248,241,0) 75%)',
      }}></div>

      {/* Distant clouds */}
      <div aria-hidden="true" data-parallax="0.05" className="drift-slow" style={{
        position: 'absolute', top: '20%', left: '8%', zIndex: 1, opacity: 0.5,
      }}>
        <svg width="220" height="56" viewBox="0 0 220 56" fill="rgba(251,248,241,0.85)">
          <path d="M10 40 q6 -22 30 -20 q8 -18 32 -10 q20 -10 30 8 q22 -2 18 22 z"/>
          <ellipse cx="150" cy="34" rx="46" ry="13"/>
        </svg>
      </div>

      {/* Sea wave bands sitting just under the horizon */}
      <svg aria-hidden="true" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1,
      }}>
        <g stroke="rgba(251,248,241,0.5)" strokeWidth="2" fill="none" strokeLinecap="round">
          <path className="drift-slow" d="M0 300 q120 -10 240 0 t240 0 t240 0 t240 0 t240 0" />
          <path className="drift-slower" d="M-40 322 q120 10 240 0 t240 0 t240 0 t240 0 t240 0" opacity="0.7" />
          <path className="drift-slow" d="M0 344 q120 -8 240 0 t240 0 t240 0 t240 0 t240 0" opacity="0.5" />
        </g>
      </svg>

      {/* Thin horizon line */}
      <div aria-hidden="true" style={{
        position: 'absolute', left: 0, right: 0, top: '50%', height: '1px',
        background: 'rgba(27,71,80,0.28)', zIndex: 1,
      }}></div>

      {/* Signature ball-arc + ball + sparse palm */}
      <svg aria-hidden="true" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 2,
      }}>
        <path className="ball-arc" d="M 70 580 C 360 250, 720 110, 1140 240"
          fill="none" stroke="rgba(251,248,241,0.72)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="6 12" />
        <g className="palm" transform="translate(1015 352)" fill="none" stroke="#5a7548" strokeWidth="4" strokeLinecap="round" opacity="0.5">
          <path d="M 60 0 C 56 -40, 52 -80, 54 -120" />
          <path d="M 54 -120 C 30 -150, 0 -156, -26 -150" />
          <path d="M 54 -120 C 78 -152, 110 -158, 138 -150" />
          <path d="M 54 -120 C 36 -160, 28 -196, 34 -224" />
          <path d="M 54 -120 C 72 -160, 92 -188, 112 -206" />
          <path d="M 54 -120 C 40 -150, 18 -176, -8 -188" />
        </g>
      </svg>

      {/* Floating beach-volleyball */}
      <div aria-hidden="true" className="bob" data-parallax="-0.06" style={{
        position: 'absolute', top: '30%', left: '11%', zIndex: 2, width: 'clamp(54px,7vw,92px)', height: 'clamp(54px,7vw,92px)',
        filter: 'drop-shadow(0 10px 18px rgba(27,71,80,0.22))',
      }}>
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <circle cx="50" cy="50" r="46" fill="#FBF8F1" stroke="rgba(27,71,80,0.18)" strokeWidth="2"/>
          <path d="M50 4 C 30 30, 30 70, 50 96" fill="none" stroke="#2E6F80" strokeWidth="3"/>
          <path d="M50 4 C 70 30, 70 70, 50 96" fill="none" stroke="#2E6F80" strokeWidth="3"/>
          <path d="M8 38 C 34 50, 66 50, 92 38" fill="none" stroke="#2C4BD4" strokeWidth="3"/>
          <path d="M6 64 C 34 54, 66 54, 94 64" fill="none" stroke="#6E8B57" strokeWidth="3"/>
        </svg>
      </div>

      {/* Single floating postcard photo, lower-right of the hero. */}
      <div className="hero-photos" aria-hidden="true">
        <div className="hp-wrap hp-a" data-parallax="0.05">
          <figure className="hero-photo"><img src={window.BV_IMG(window.BV_PHOTOS.friends, 800)} alt="" loading="eager" /></figure>
        </div>
      </div>

      <style>{`
        .hero-photos {
          position: absolute; right: clamp(12px, 4vw, 70px); top: 0; bottom: 0;
          width: min(46vw, 520px); z-index: 3; pointer-events: none;
        }
        .hp-wrap { position: absolute; will-change: transform; }
        .hero-photo {
          margin: 0; overflow: hidden; border-radius: 20px;
          border: 6px solid var(--white); box-shadow: var(--shadow-lg);
          background: var(--sea-tint-1);
        }
        .hero-photo img { display: block; width: 100%; height: 100%; object-fit: cover; }
        .hero-photo--round { border-radius: 999px; }
        .hp-a { width: 50%; top: 42%; right: 5%; }
        .hp-a .hero-photo { aspect-ratio: 3 / 2; }

        @media (prefers-reduced-motion: no-preference) {
          .hp-a .hero-photo { animation: heroFloatA 7s ease-in-out infinite alternate; }
          .hero-photo img { animation: heroKen 20s ease-in-out infinite alternate; }
        }
        @keyframes heroFloatA { from { transform: rotate(-4deg) translateY(0); } to { transform: rotate(-4deg) translateY(-14px); } }
        @keyframes heroKen { from { transform: scale(1.04); } to { transform: scale(1.16); } }

        @media (max-width: 980px) { .hero-photos { display: none; } }

        /* One postcard photo on narrow screens (floating photo hidden there). */
        .hero-strip { display: none; margin-top: 1.7em; max-width: 420px; }
        .hero-strip img {
          width: 100%; aspect-ratio: 3 / 2; object-fit: cover;
          border-radius: 18px; border: 5px solid var(--white); box-shadow: var(--shadow-lg);
          background: var(--sea-tint-1);
        }
        @media (max-width: 980px) { .hero-strip { display: block; } }

        /* Sand shelf — a full-width beige fill that follows the lead text in flow,
           so the paragraph always sits on sand, never on the blue sea, on every
           viewport. A soft top fade reads as the natural beach waterline. */
        .hero-lower { position: relative; margin-top: 2.7em; }
        .hero-lower::before {
          content: ""; position: absolute; z-index: -1; pointer-events: none;
          left: 50%; transform: translateX(-50%);
          width: 100vw; top: -2em; height: 300vh;
          background: linear-gradient(to bottom, rgba(239,227,196,0) 0, #EFE3C4 2em, #EFE3C4 100%);
        }
        /* On wide screens the floating photos use the lower-right; the tall title
           already drops the paragraph onto the sand, so the shelf isn't needed
           and would otherwise cover those photos. Narrow screens keep the shelf. */
        @media (min-width: 981px) { .hero-lower::before { display: none; } }
      `}</style>

      {/* Grass tufts at the dune line (above the sand shelf so they stay visible) */}
      <svg aria-hidden="true" viewBox="0 0 1200 200" preserveAspectRatio="none" style={{
        position: 'absolute', left: 0, right: 0, bottom: 0, height: '160px', width: '100%', zIndex: 6,
      }}>
        <g stroke="#6E8B57" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.85">
          <path d="M60 200 V150 M70 200 V162 M50 200 V164 M80 200 V172"/>
          <path d="M150 200 V168 M160 200 V158 M170 200 V172"/>
          <path d="M1120 200 V150 M1130 200 V160 M1110 200 V164 M1140 200 V170"/>
          <path d="M1020 200 V170 M1030 200 V160 M1010 200 V172"/>
        </g>
      </svg>

      {/* Content */}
      <div className="ds-container" style={{ position: 'relative', zIndex: 5, paddingTop: '88px', paddingBottom: '40px' }}>
        <div className="hero-rise hr1" style={{
          display: 'inline-flex', gap: '10px', alignItems: 'center', maxWidth: '100%', flexWrap: 'wrap',
          fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.1em',
          fontSize: 'clamp(0.62rem, 2.6vw, 0.78rem)', fontWeight: 500, color: 'var(--white)',
          background: 'rgba(27,71,80,0.36)', padding: '0.55em 1.05em', borderRadius: '999px',
          backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)',
        }}>
          <span style={{ flex: 'none', width: '7px', height: '7px', borderRadius: '999px', background: 'var(--royal)', boxShadow: '0 0 0 4px rgba(44,75,212,0.25)' }}></span>
          <span style={{ minWidth: 0 }}>Datum meddelas snart · Dalabadet, Trelleborg</span>
        </div>

        <h1 className="hero-rise hr2" style={{
          fontSize: 'var(--fs-hero)', color: 'var(--white)', margin: '0.26em 0 0',
          lineHeight: 0.88, letterSpacing: '-0.025em', maxWidth: '16ch',
          textShadow: '2px 2px 0 rgba(27,71,80,0.30), 5px 8px 26px rgba(27,71,80,0.32)',
        }}>
          <span style={{ display: 'block', fontSize: '0.46em', letterSpacing: '0.02em', color: 'rgba(251,248,241,0.95)' }}>Dalabadet</span>
          <span style={{ display: 'block' }}>Beachvolley</span>
          <span style={{ display: 'inline-block', transform: 'rotate(-2.5deg)', transformOrigin: 'left center' }}>Cup</span>
          <span style={{
            display: 'inline-block', verticalAlign: '0.6em', marginLeft: '0.45em',
            transform: 'rotate(2deg)', fontFamily: 'var(--font-mono)', fontWeight: 600,
            textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.15em',
            color: 'var(--white)', background: 'var(--royal)', padding: '0.5em 0.95em',
            borderRadius: '999px', textShadow: 'none', boxShadow: 'var(--shadow-md)',
          }}>Häng på stranden</span>
        </h1>

        {/* Lower group sits on a full-bleed "sand shelf" so the lead text never
            starts on the blue sea band — on any viewport size or device. */}
        <div className="hero-lower">
          <p className="hero-rise hr3" style={{
            fontFamily: 'var(--font-body)', fontSize: 'var(--fs-lead)', color: 'var(--ink)',
            fontWeight: 500, maxWidth: '44ch', margin: 0,
          }}>Ta med kompisarna, kliv ner i sanden och spela boll en hel sommardag på
            Dalabadet i Trelleborg. Sol, hav, glada matcher och härlig stämning.
            Alla är välkomna att vara med.</p>

          <div className="hero-rise hr4" style={{ display: 'flex', gap: '12px', marginTop: '1.7em', flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" onClick={onRegister}>Anmäl ditt lag</Button>
            <Button as="a" href="#varfor" variant="secondary" size="lg">Läs mer</Button>
          </div>

          {/* One postcard photo, shown on narrow screens where the floating
              photo is hidden, so the hero is never image-empty. */}
          <div className="hero-strip" aria-hidden="true">
            <img src={window.BV_IMG(window.BV_PHOTOS.friends, 800)} alt="" loading="eager" />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a href="#varfor" aria-label="Scrolla ner" style={{
        position: 'absolute', left: '50%', bottom: '26px', transform: 'translateX(-50%)',
        zIndex: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '7px',
        fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.16em',
        fontSize: '0.64rem', color: 'var(--sea-deep)', textDecoration: 'none',
      }}>
        Scrolla
        <svg className="scrollcue" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--sea-deep)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </a>
    </section>
  );
}
window.Hero = Hero;
