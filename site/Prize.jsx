// Prize - "Att spela om". A tasteful winner moment, not a commercial prize wall
// (the event isn't prize-driven). One dark feature panel with a podium graphic.
function Prize() {
  const { Card, Badge } = window.DalabadetBeachvolleyCupDesignSystem_b20b76;
  return (
    <section id="pris" style={{ position: 'relative', background: 'var(--sand)', paddingTop: 'var(--section-pad-y)', paddingBottom: 'var(--section-pad-y)' }}>
      <div className="ds-container">
        <Card tone="dark" padding="none" className="reveal" style={{ overflow: 'hidden', position: 'relative' }}>
          {/* faint arc detail in the corner */}
          <svg aria-hidden="true" viewBox="0 0 400 300" style={{ position: 'absolute', right: 0, top: 0, width: '46%', height: '100%', opacity: 0.5, pointerEvents: 'none' }}>
            <path d="M -20 280 C 120 120, 280 80, 420 160" fill="none" stroke="rgba(251,248,241,0.18)" strokeWidth="2" strokeDasharray="5 11" strokeLinecap="round"/>
          </svg>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-7)', alignItems: 'center', padding: 'var(--space-8) var(--space-7)' }}>
            <div>
              <Badge tone="royal" style={{ background: 'rgba(44,75,212,0.22)', color: '#cdd5f7' }}>Att spela om</Badge>
              <h2 style={{ fontSize: 'var(--fs-display)', color: 'var(--white)', margin: '0.45em 0 0.3em' }}>Dagens mästare</h2>
              <p style={{ color: 'var(--text-on-dark-muted)', fontSize: 'var(--fs-lead)', maxWidth: '40ch' }}>
                Vinnarlaget koras till Dagens mästare och tar emot priser värda
                upp till 200 kr under prisutdelningen, plus äran och skryträtten
                ända till nästa sommar.
              </p>
              <p style={{ color: 'var(--text-on-dark-muted)', maxWidth: '40ch' }}>
                Men ärligt talat: efter en hel dag med boll, bad och sol går alla
                hem som vinnare. Föreställ dig redan nu känslan av att stå högst upp.
              </p>
            </div>

            {/* Podium illustration */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <svg viewBox="0 0 360 260" width="100%" style={{ maxWidth: '380px', height: 'auto' }} aria-label="Prispall med pokal">
                {/* trophy */}
                <g transform="translate(180 6)">
                  <path d="M-26 4 h52 v18 a26 26 0 0 1 -52 0 z" fill="#FBF8F1"/>
                  <path d="M-26 8 h-12 a10 10 0 0 0 12 14 M26 8 h12 a10 10 0 0 1 -12 14" fill="none" stroke="#FBF8F1" strokeWidth="4" strokeLinecap="round"/>
                  <rect x="-6" y="44" width="12" height="14" fill="#FBF8F1"/>
                  <rect x="-20" y="58" width="40" height="9" rx="3" fill="#FBF8F1"/>
                  <path d="M-12 14 a12 12 0 0 0 24 0" fill="none" stroke="#2C4BD4" strokeWidth="3" strokeLinecap="round"/>
                </g>
                {/* podium blocks */}
                <g fontFamily="Spline Sans Mono, monospace" fontWeight="600">
                  <rect x="20"  y="150" width="96" height="86"  rx="6" fill="#2E6F80"/>
                  <text x="68"  y="206" textAnchor="middle" fill="#FBF8F1" fontSize="30">2</text>
                  <rect x="132" y="110" width="96" height="126" rx="6" fill="#2C4BD4"/>
                  <text x="180" y="184" textAnchor="middle" fill="#FBF8F1" fontSize="36">1</text>
                  <rect x="244" y="172" width="96" height="64"  rx="6" fill="#6E8B57"/>
                  <text x="292" y="218" textAnchor="middle" fill="#FBF8F1" fontSize="26">3</text>
                </g>
                {/* sand line */}
                <rect x="8" y="236" width="344" height="8" rx="4" fill="rgba(251,248,241,0.18)"/>
              </svg>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
window.Prize = Prize;
