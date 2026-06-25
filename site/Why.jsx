// Why - "Varför delta?" Four warm reasons, told in an editorial, hand-made way
// rather than as four identical icon-cards (which read too "templated"). Each
// reason is an index entry: a mono numeral on a hairline rule, a heading with a
// hand-drawn underline, and a short paragraph. No boxes, no tinted icon tiles.
function Why() {
  // Hand-drawn underline strokes - slightly irregular so they read as marker,
  // not as a CSS border. A few variants for rhythm.
  const underlines = [
    'M3 9 C 40 3, 96 13, 150 6 S 232 3, 250 8',
    'M3 7 C 52 13, 104 2, 158 9 S 220 12, 250 6',
    'M3 8 C 46 2, 92 12, 140 6 S 214 4, 250 9',
    'M3 6 C 58 12, 110 3, 162 10 S 226 5, 250 8',
  ];

  const items = [
    { tone: 'var(--sea)',  title: 'Spela & tävla',  body: 'Mät er mot andra lag i glada matcher på sanden. Alla spelar i samma turnering. Kämpa om segern, men framför allt ha skoj.' },
    { tone: 'var(--dune)', title: 'Sommarkänsla',   body: 'Strand, hav, sol och härlig stämning hela dagen. En riktig sommardag vid Sveriges sydligaste badstrand.' },
    { tone: 'var(--sea)',  title: 'Gemenskap',      body: 'Träffa nya människor, häng med gamla kompisar och umgås i sanden. Hela dagen handlar om att komma samman.' },
    { tone: 'var(--dune)', title: 'Upplevelsen',    body: 'En dag som sticker ut från resten av sommaren, med boll, skratt och minnen du bär med dig långt efter att solen gått ner.' },
  ];

  return (
    <section id="varfor" className="topfade" style={{ position: 'relative', paddingTop: 'var(--section-pad-y)', paddingBottom: 'var(--section-pad-y)' }}>
      <div className="ds-container">
        <div className="reveal" style={{ maxWidth: '54ch', marginBottom: 'var(--space-8)' }}>
          <div className="ds-eyebrow">Varför delta?</div>
          <h2 style={{ fontSize: 'var(--fs-display)', marginTop: '0.3em' }}>Mer än bara en turnering</h2>
          <p style={{ color: 'var(--text-body)', fontSize: 'var(--fs-lead)', maxWidth: '46ch' }}>
            En hel dag av boll, bad och gemenskap på Dalabadet. Här är vad som väntar.
          </p>
        </div>

        <div className="why-list">
          {items.map((it, i) => (
            <article key={it.title} className={`why-item reveal reveal-d${(i % 4) + 1}`}>
              <div className="why-index">
                <span className="why-rule"></span>
              </div>
              <h3 className="why-title">
                {it.title}
                <svg className="why-ul" viewBox="0 0 253 15" width="170" height="11" fill="none" aria-hidden="true" preserveAspectRatio="none">
                  <path d={underlines[i]} stroke={it.tone} strokeWidth="3.4" strokeLinecap="round" />
                </svg>
              </h3>
              <p className="why-body">{it.body}</p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .why-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          column-gap: var(--space-9, 72px);
          row-gap: var(--space-8);
        }
        .why-item { max-width: 46ch; }
        .why-index {
          display: flex; align-items: center; gap: var(--space-4);
          margin-bottom: var(--space-4);
        }
        .why-num {
          font-family: var(--font-mono); font-weight: 600;
          font-size: 1.05rem; letter-spacing: 0.12em;
        }
        .why-rule { flex: 1; height: 1px; background: var(--sand-hair); }
        .why-title {
          position: relative; display: inline-block;
          font-size: var(--fs-h2); margin: 0 0 var(--space-5);
          padding-bottom: 4px;
        }
        .why-ul {
          position: absolute; left: -2px; bottom: -7px;
          width: calc(100% + 10px); height: 11px;
        }
        .why-body { color: var(--text-body); font-size: var(--fs-body); margin: 0; }

        @media (max-width: 720px) {
          .why-list { grid-template-columns: 1fr; row-gap: var(--space-7); }
        }
      `}</style>
    </section>
  );
}
window.Why = Why;
