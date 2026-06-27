// Location - Dalabadet copy + an illustrative map graphic (no fake photos).
function Location() {
  const { Card, Button, Badge } = window.DalabadetBeachvolleyCupDesignSystem_b20b76;
  const facts = ['Sveriges sydligaste badstrand', 'Långgrunt vatten', 'Gott om plats i sanden'];
  return (
    <section id="plats" style={{ position: 'relative', background: 'var(--sand-deep)', paddingTop: 'var(--section-pad-y)', paddingBottom: 'var(--section-pad-y)' }}>
      <div aria-hidden="true" style={{ position: 'absolute', left: 0, right: 0, top: 0, height: '3px', background: 'var(--royal)' }}></div>
      <div className="ds-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-8)', alignItems: 'center' }}>
          <div className="reveal">
            <div className="ds-eyebrow">Plats</div>
            <h2 style={{ fontSize: 'var(--fs-display)', marginTop: '0.3em' }}>Dalabadet, Trelleborg</h2>
            <p style={{ color: 'var(--text-body)', fontSize: 'var(--fs-lead)', maxWidth: '44ch' }}>
              Vi spelar på sandstranden vid Dalabadet, Sveriges sydligaste badstrand,
              med långgrunt vatten och gott om plats. Lätt att ta sig till och perfekt
              för en hel dag vid havet.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', margin: 'var(--space-5) 0' }}>
              {facts.map((f) => <Badge key={f} tone="sea">{f}</Badge>)}
            </div>
            <p style={{ color: 'var(--text-muted)', maxWidth: '44ch' }}>Mer exakt info om var planerna ligger kommer närmare turneringen.</p>
            <div style={{ marginTop: 'var(--space-5)' }}>
              <Button as="a" href="https://maps.google.com/?q=Dalabadets+Camping+Trelleborg" target="_blank" rel="noopener" variant="secondary">Öppna i kartan</Button>
            </div>
          </div>

          {/* Embedded map centred on Dalabadets Camping (Dalköpinge Strandväg 2)
              and the beach just south of it. Marker on the camping. */}
          <Card tone="raised" padding="none" className="reveal reveal-d2" style={{ overflow: 'hidden', position: 'relative' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '520 / 380', background: 'var(--sea-tint-1)' }}>
              <iframe
                title="Karta över Dalabadets Camping, Trelleborg"
                src="https://maps.google.com/maps?q=55.3638,13.2092&z=15&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0, display: 'block' }}
              ></iframe>
            </div>
            {/* small place label chip, sits over the map corner */}
            <div style={{
              position: 'absolute', left: '12px', bottom: '12px', zIndex: 2,
              display: 'inline-flex', alignItems: 'center', gap: '7px',
              background: 'rgba(251,248,241,0.92)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)',
              padding: '0.5em 0.85em', borderRadius: '999px', boxShadow: 'var(--shadow-sm)',
              fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', textTransform: 'uppercase',
              letterSpacing: '0.06em', color: 'var(--sea-deep)',
            }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--royal)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              Dalabadets Camping
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
window.Location = Location;
