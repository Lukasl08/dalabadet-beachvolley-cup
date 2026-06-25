// Follow — a calm "håll koll"-strip before the registration. Honest about the
// fact that the date and channels aren't set yet: invites people to follow on
// social for the date drop. No fake sponsors, no fake date.
// Social accounts not chosen yet — placeholder hrefs, swap when ready.
function Follow() {
  const { Button } = window.DalabadetBeachvolleyCupDesignSystem_b20b76;

  const socialBtn = {
    width: '52px', height: '52px', borderRadius: '999px',
    border: '1.5px solid var(--sand-hair)', background: 'var(--white)',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    color: 'var(--sea-deep)', textDecoration: 'none',
    transition: 'transform .3s var(--ease-out), border-color .25s, color .25s, background .25s',
  };

  return (
    <section id="folj" style={{ position: 'relative', background: 'var(--sand)', paddingTop: 'var(--section-pad-y)', paddingBottom: 'var(--section-pad-y)' }}>
      <div className="ds-container">
        <div className="reveal" style={{
          position: 'relative', overflow: 'hidden',
          background: 'var(--sand-deep)', borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--sand-hair)',
          padding: 'clamp(28px, 5vw, 56px)',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 'var(--space-7)', alignItems: 'center',
        }}>
          {/* faint arc detail */}
          <svg aria-hidden="true" viewBox="0 0 500 300" style={{ position: 'absolute', right: '-4%', top: 0, width: '50%', height: '100%', opacity: 0.45, pointerEvents: 'none' }}>
            <path d="M -20 280 C 140 120, 320 80, 520 180" fill="none" stroke="var(--sea-tint-3)" strokeWidth="2" strokeDasharray="5 11" strokeLinecap="round"/>
          </svg>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="ds-eyebrow">Håll koll</div>
            <h2 style={{ fontSize: 'var(--fs-h1)', marginTop: '0.3em', maxWidth: '16ch' }}>Datum meddelas snart</h2>
            <p style={{ color: 'var(--text-body)', fontSize: 'var(--fs-lead)', maxWidth: '42ch', margin: '0.6em 0 0' }}>
              Vi spikar datumet inom kort. Följ oss på sociala medier så är du
              först att veta när det är dags — och missa inte starten av anmälan.
            </p>
          </div>

          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', gap: '14px' }}>
              {/* TODO: byt ut mot riktig Instagram-länk */}
              <a href="#" aria-label="Instagram" className="follow-soc" style={socialBtn}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              {/* TODO: byt ut mot riktig Facebook-länk */}
              <a href="#" aria-label="Facebook" className="follow-soc" style={socialBtn}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
            <Button as="a" href="#anmalan" variant="primary" size="md">Anmäl ditt lag redan nu</Button>
          </div>
        </div>
      </div>

      <style>{`
        .follow-soc:hover { transform: translateY(-3px); border-color: var(--royal); color: var(--royal); }
      `}</style>
    </section>
  );
}
window.Follow = Follow;
