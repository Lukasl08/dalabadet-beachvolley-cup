// Nav - sticky, frosts on scroll. Section links + the single primary action.
// Adds a calm mobile menu (sheet) since the page is now long.
function Nav({ onRegister }) {
  const { Button } = window.DalabadetBeachvolleyCupDesignSystem_b20b76;
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#varfor', label: 'Varför' },
    { href: '#schema', label: 'Schema' },
    { href: '#plats', label: 'Plats' },
    { href: '#fragor', label: 'Frågor' },
  ];

  const link = {
    fontFamily: 'var(--font-display)', textTransform: 'uppercase',
    fontWeight: 700, letterSpacing: '0.02em', fontSize: '0.9rem',
    color: 'var(--sea-deep)', textDecoration: 'none', padding: '0.4em 0.2em',
  };

  const go = (href) => (e) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
  };

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: scrolled ? 'rgba(251,248,241,0.82)' : 'transparent',
      backdropFilter: scrolled ? 'saturate(150%) blur(12px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'saturate(150%) blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--sand-hair)' : '1px solid transparent',
      transition: 'background .35s ease, border-color .35s ease',
    }}>
      <nav className="ds-container" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '74px', gap: '24px',
      }}>
        <Logo />

        <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={go(l.href)} style={link} className="navlink">{l.label}</a>
          ))}
          <Button variant="primary" size="sm" onClick={onRegister}>Anmäl ditt lag</Button>
        </div>

        <button className="nav-burger" aria-label="Meny" onClick={() => setOpen((o) => !o)} style={{
          display: 'none', background: 'none', border: 'none', cursor: 'pointer',
          width: '44px', height: '44px', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--sea-deep)" strokeWidth="2.2" strokeLinecap="round">
            {open
              ? <g><path d="M5 5l14 14"/><path d="M19 5L5 19"/></g>
              : <g><path d="M3 6h18"/><path d="M3 12h18"/><path d="M3 18h18"/></g>}
          </svg>
        </button>
      </nav>

      {/* Mobile sheet */}
      <div className="nav-sheet" style={{
        display: 'none', overflow: 'hidden',
        maxHeight: open ? '340px' : '0px',
        transition: 'max-height .4s var(--ease-out)',
        background: 'rgba(251,248,241,0.97)',
        backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
        borderBottom: open ? '1px solid var(--sand-hair)' : 'none',
      }}>
        <div className="ds-container" style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '14px 0 22px' }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={go(l.href)} style={{ ...link, fontSize: '1.1rem', padding: '0.7em 0' }}>{l.label}</a>
          ))}
          <div style={{ marginTop: '10px' }}>
            <Button variant="primary" size="md" fullWidth onClick={() => { setOpen(false); onRegister(); }}>Anmäl ditt lag</Button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .nav-desktop { display: none !important; }
          .nav-burger { display: inline-flex !important; }
          .nav-sheet { display: block !important; }
        }
      `}</style>
    </header>
  );
}
window.Nav = Nav;
