// Moment - the emotional centrepiece. A full-bleed photograph with a slow
// parallax + Ken Burns drift and a dark scrim, big aspirational copy and a CTA.
// This is the "you don't want to miss this" beat of the page.
function Moment({ onRegister }) {
  const { Button } = window.DalabadetBeachvolleyCupDesignSystem_b20b76;
  return (
    <section className="bv-moment" id="kanslan">
      <div className="bv-moment-bg" data-parallax="0.05" aria-hidden="true"
        style={{ backgroundImage: `url(${window.BV_IMG(window.BV_PHOTOS.dive, 1600)})` }}></div>
      <div className="bv-moment-scrim" aria-hidden="true"></div>

      <div className="ds-container bv-moment-inner">
        <div className="reveal">
          <div className="ds-eyebrow" style={{ color: 'rgba(251,248,241,0.75)' }}>Känslan</div>
          <h2 style={{ color: 'var(--white)', fontSize: 'var(--fs-hero)', lineHeight: 0.92, maxWidth: '16ch', margin: '0.2em 0 0', textShadow: '0 4px 30px rgba(0,0,0,0.35)' }}>
            Sommarens<br />självklara höjdpunkt
          </h2>
          <p style={{ color: 'rgba(251,248,241,0.92)', fontSize: 'var(--fs-lead)', maxWidth: '44ch', marginTop: '1em', textShadow: '0 2px 16px rgba(0,0,0,0.4)' }}>
            Barfota i varm sand, havet som glittrar, bollen i luften och gänget
            som hejar. Det här är dagen alla snackar om långt efter att solen
            gått ner. Var med från start. Kliv i sanden och spela.
          </p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '1.6em', flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" onClick={onRegister}>Säkra din plats</Button>
            <Button as="a" href="#schema" variant="secondary" size="lg"
              style={{ color: 'var(--white)', borderColor: 'rgba(251,248,241,0.7)' }}>Se dagen</Button>
          </div>
        </div>
      </div>

      <style>{`
        .bv-moment { position: relative; overflow: hidden; min-height: 86vh; display: flex; align-items: flex-end; }
        .bv-moment-bg {
          position: absolute; left: 0; right: 0; top: -12%; height: 124%;
          background-size: cover; background-position: center 35%; z-index: 0; will-change: transform;
        }
        @media (prefers-reduced-motion: no-preference) {
          .bv-moment-bg { animation: momentKen 26s ease-in-out infinite alternate; }
        }
        @keyframes momentKen { from { background-size: 102%; } to { background-size: 110%; } }
        .bv-moment-scrim {
          position: absolute; inset: 0; z-index: 1;
          background:
            linear-gradient(180deg, rgba(27,71,80,0.20) 0%, rgba(27,71,80,0) 35%, rgba(27,71,80,0.10) 60%, rgba(27,71,80,0.62) 100%),
            linear-gradient(90deg, rgba(27,71,80,0.62) 0%, rgba(27,71,80,0.12) 50%, rgba(27,71,80,0) 78%);
        }
        .bv-moment-inner { position: relative; z-index: 2; padding-top: var(--space-10); padding-bottom: var(--space-9); }
      `}</style>
    </section>
  );
}
window.Moment = Moment;
