// Footer — dark sea-deep base. Swappable text logo, page links matching the
// real sections, a contact placeholder and social placeholders.
// Contact details + social accounts not set yet — swap when available.
function Footer() {
  const linkStyle = {
    fontFamily: 'var(--font-body)', color: 'var(--text-on-dark-muted)',
    textDecoration: 'none', fontSize: 'var(--fs-sm)', display: 'block', padding: '3px 0',
    transition: 'color .2s ease',
  };
  const socialBtn = {
    width: '40px', height: '40px', borderRadius: '999px',
    border: '1px solid var(--border-on-dark)', display: 'inline-flex',
    alignItems: 'center', justifyContent: 'center', color: 'var(--white)',
    textDecoration: 'none', transition: 'background .25s ease, border-color .25s ease',
  };
  const links = [
    { href: '#varfor', label: 'Varför delta' },
    { href: '#schema', label: 'Schema' },
    { href: '#plats', label: 'Plats' },
    { href: '#fragor', label: 'Vanliga frågor' },
    { href: '#anmalan', label: 'Anmälan' },
  ];

  return (
    <footer style={{ background: 'var(--sea-deep)', borderTop: '1px solid var(--border-on-dark)' }}>
      <div className="ds-container" style={{ paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-7)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-7)' }}>
          <div>
            <Logo onDark />
            <p style={{ color: 'var(--text-on-dark-muted)', fontSize: 'var(--fs-sm)', marginTop: 'var(--space-4)', maxWidth: '30ch' }}>
              En lokal beachvolleydag på Dalabadet i Trelleborg. Kom och spela,
              häng och umgås — alla är välkomna.
            </p>
          </div>

          <div>
            <div className="ds-eyebrow" style={{ color: 'rgba(251,248,241,0.5)' }}>Sidan</div>
            <div style={{ marginTop: 'var(--space-3)' }}>
              {links.map((l) => (
                <a key={l.href} href={l.href} className="foot-link" style={linkStyle}>{l.label}</a>
              ))}
            </div>
          </div>

          <div>
            <div className="ds-eyebrow" style={{ color: 'rgba(251,248,241,0.5)' }}>Kontakt</div>
            {/* TODO: byt ut mot riktig e-post/telefon när de finns */}
            <p style={{ color: 'var(--text-on-dark-muted)', fontSize: 'var(--fs-sm)', marginTop: 'var(--space-3)', maxWidth: '26ch' }}>
              Kontaktuppgifter kommer snart.
            </p>
            <div style={{ display: 'flex', gap: '10px', marginTop: 'var(--space-4)' }}>
              {/* TODO: byt ut mot riktig Instagram-länk */}
              <a href="#" aria-label="Instagram" className="foot-soc" style={socialBtn}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              {/* TODO: byt ut mot riktig Facebook-länk */}
              <a href="#" aria-label="Facebook" className="foot-soc" style={socialBtn}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div style={{
          marginTop: 'var(--space-7)', paddingTop: 'var(--space-5)',
          borderTop: '1px solid var(--border-on-dark)',
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px',
        }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', color: 'rgba(251,248,241,0.5)' }}>© Dalabadet Beachvolley Cup</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', color: 'rgba(251,248,241,0.5)' }}>Dalabadet · Trelleborg</span>
        </div>
      </div>

      <style>{`
        .foot-link:hover { color: var(--white) !important; }
        .foot-soc:hover { background: var(--royal); border-color: var(--royal); }
      `}</style>
    </footer>
  );
}
window.Footer = Footer;
