// Marquee - a living strip of real beach-volley moments that scrolls forever
// between the hero and the content. Adds energy and "something is happening",
// while quietly previewing the photography to come. Pauses on hover.
function Marquee() {
  const P = window.BV_PHOTOS;
  const words = ['Sol', 'Sand', 'Smash', 'Gemenskap', 'Block', 'Hav', 'Serve', 'Sommar'];
  const ids = [P.dive, P.serve, P.heroAction, P.menPlay, P.womanSky, P.lifestyle, P.netReady, P.duo];
  const loop = [...ids, ...ids];
  const wloop = [...words, ...words];

  return (
    <section className="bv-marquee" aria-hidden="true">
      {/* word ticker */}
      <div className="mq-words">
        <div className="mq-words-track">
          {wloop.map((w, i) => (
            <span key={i} className="mq-word">{w}<span className="mq-dot">•</span></span>
          ))}
        </div>
      </div>

      {/* photo ticker */}
      <div className="mq-photos">
        <div className="mq-photos-track">
          {loop.map((id, i) => (
            <div className="mq-item" key={i}><img src={window.BV_IMG(id, 500)} alt="" loading="lazy" /></div>
          ))}
        </div>
      </div>

      <style>{`
        .bv-marquee { position: relative; background: var(--sea-deep); padding: var(--space-6) 0 var(--space-7); overflow: hidden; }
        .bv-marquee .mq-words { overflow: hidden; margin-bottom: var(--space-6); }
        .mq-words-track { display: flex; width: max-content; gap: 0; animation: mqWords 26s linear infinite; }
        .mq-word {
          display: inline-flex; align-items: center; gap: clamp(20px, 4vw, 54px);
          font-family: var(--font-display); font-weight: 800; text-transform: uppercase;
          font-size: clamp(1.6rem, 4vw, 3rem); letter-spacing: -0.02em;
          color: transparent; -webkit-text-stroke: 1.5px rgba(251,248,241,0.5); padding-right: clamp(20px, 4vw, 54px);
        }
        .mq-word:nth-child(3n) { color: var(--royal); -webkit-text-stroke: 0; }
        .mq-word:nth-child(4n) { color: rgba(251,248,241,0.92); -webkit-text-stroke: 0; }
        .mq-dot { color: var(--dune-soft); -webkit-text-stroke: 0; }

        .mq-photos { overflow: hidden; }
        .mq-photos-track { display: flex; gap: 18px; width: max-content; animation: mqPhotos 50s linear infinite; }
        .bv-marquee:hover .mq-photos-track, .bv-marquee:hover .mq-words-track { animation-play-state: paused; }
        .mq-item { flex: none; width: clamp(220px, 24vw, 320px); height: clamp(150px, 16vw, 210px);
          border-radius: 16px; overflow: hidden; box-shadow: var(--shadow-md); }
        .mq-item img { width: 100%; height: 100%; object-fit: cover; transition: transform .6s var(--ease-out); }
        .mq-item:hover img { transform: scale(1.07); }

        @keyframes mqPhotos { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes mqWords  { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) {
          .mq-photos-track, .mq-words-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
window.Marquee = Marquee;
