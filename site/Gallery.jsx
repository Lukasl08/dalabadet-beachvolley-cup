// Gallery — "Bilder från sanden". A bento grid of real beach-volley photos with
// staggered reveal, hover zoom and a caption that rises on hover. Gives the page
// a confident, editorial block of photography.
function Gallery() {
  const P = window.BV_PHOTOS;
  const shots = [
    { id: P.dive,      label: 'Räddningen',  cls: 'g-wide', w: 1100 },
    { id: P.friends,   label: 'Hela gänget', cls: 'g-tall', w: 800 },
    { id: P.serve,     label: 'Serven',      cls: '',       w: 700 },
    { id: P.menPlay,   label: 'Rallyt',      cls: '',       w: 700 },
    { id: P.lifestyle, label: 'Strandliv',   cls: 'g-tall', w: 800 },
    { id: P.heroAction, label: 'Smashen',    cls: 'g-wide', w: 1100 },
    { id: P.netReady,  label: 'Vid nätet',   cls: '',       w: 700 },
    { id: P.duo,       label: 'Duon',        cls: '',       w: 700 },
  ];

  return (
    <section id="galleri" className="bv-gallery" style={{ background: 'var(--sand)', paddingTop: 'var(--section-pad-y)', paddingBottom: 'var(--section-pad-y)' }}>
      <div className="ds-container">
        <div className="reveal" style={{ maxWidth: '54ch', marginBottom: 'var(--space-7)' }}>
          <div className="ds-eyebrow">Galleri</div>
          <h2 style={{ fontSize: 'var(--fs-display)', marginTop: '0.3em' }}>Bilder från sanden</h2>
          <p style={{ color: 'var(--text-body)', fontSize: 'var(--fs-lead)', maxWidth: '46ch' }}>
            Sol, hopp och full fart vid nätet — så här ser en dag på stranden ut.
          </p>
        </div>

        <div className="gallery-grid">
          {shots.map((s, i) => (
            <figure key={i} className={`gcell reveal reveal-d${(i % 4) + 1} ${s.cls}`}>
              <img src={window.BV_IMG(s.id, s.w)} alt={`Beachvolley — ${s.label}`} loading="lazy" />
              <figcaption><span>{s.label}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>

      <style>{`
        .gallery-grid {
          display: grid; grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 200px; gap: var(--space-4);
        }
        .gcell {
          position: relative; margin: 0; overflow: hidden;
          border-radius: var(--radius-lg); box-shadow: var(--shadow-md);
          background: var(--sea-tint-1);
        }
        .gcell.g-wide { grid-column: span 2; }
        .gcell.g-tall { grid-row: span 2; }
        .gcell img { width: 100%; height: 100%; object-fit: cover; display: block;
          transition: transform .7s var(--ease-out); }
        .gcell:hover img { transform: scale(1.07); }
        .gcell figcaption {
          position: absolute; left: 0; right: 0; bottom: 0; padding: var(--space-5) var(--space-4) var(--space-4);
          background: linear-gradient(180deg, rgba(27,71,80,0) 0%, rgba(27,71,80,0.72) 100%);
          color: var(--white); opacity: 0; transform: translateY(10px);
          transition: opacity .4s var(--ease-out), transform .4s var(--ease-out);
        }
        .gcell:hover figcaption { opacity: 1; transform: none; }
        .gcell figcaption span {
          font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.08em;
          font-size: var(--fs-xs); font-weight: 500;
        }
        @media (max-width: 860px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 160px; }
          .gcell.g-wide { grid-column: span 2; }
          .gcell.g-tall { grid-row: span 1; }
          .gcell figcaption { opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  );
}
window.Gallery = Gallery;
