// Logo — text-based placeholder logo in the display font, no icon/mark.
// Built as its own component so it can be swapped for an image file later.
function Logo({ onDark = false, compact = false }) {
  const color = onDark ? 'var(--white)' : 'var(--sea-deep)';
  return (
    <a href="#top" aria-label="Dalabadet Beachvolley Cup" style={{
      display: 'inline-flex', flexDirection: 'column', lineHeight: 0.92,
      textDecoration: 'none', letterSpacing: '-0.02em',
    }}>
      {/* TODO: byt ut mot en bildfil (logo.svg/png) när loggan finns */}
      <span style={{
        fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase',
        fontSize: compact ? '1.05rem' : '1.2rem', color,
      }}>Dalabadet</span>
      <span style={{
        fontFamily: 'var(--font-mono)', fontWeight: 500, textTransform: 'uppercase',
        letterSpacing: '0.22em', fontSize: compact ? '0.56rem' : '0.62rem',
        color: 'var(--royal)', marginTop: '3px',
      }}>Beachvolley Cup</span>
    </a>
  );
}
window.Logo = Logo;
