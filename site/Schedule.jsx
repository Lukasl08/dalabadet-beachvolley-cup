// Schedule - "Dagen i detalj" as a vertical journey timeline. Mono times,
// a connecting rail, and dots that fill royal as each step rises into view.
function Schedule() {
  const rows = [
    { t: '09:00', a: 'Incheckning & uppvärmning', n: 'Hämta nummerlapp, hitta er plan och mjuka upp i sanden.' },
    { t: '10:00', a: 'Turneringen drar igång', n: 'Gruppspel, alla lag spelar tillsammans i samma turnering.' },
    { t: '12:30', a: 'Lunchpaus', n: 'Ta med egen matsäck. Dryck finns att köpa på stranden. Ladda om inför eftermiddagen.' },
    { t: '13:30', a: 'Slutspel', n: 'De bästa lagen gör upp i utslagsmatcher.' },
    { t: '16:00', a: 'Final & prisutdelning', n: 'Vi koras dagens mästare och delar ut priset.' },
    { t: '16:30', a: 'Häng kvar på stranden', n: 'Stanna, umgås och njut av kvällen vid havet.' },
  ];

  return (
    <section id="schema" style={{ position: 'relative', background: 'var(--sand-deep)', paddingTop: 'var(--section-pad-y)', paddingBottom: 'var(--section-pad-y)' }}>
      <div aria-hidden="true" style={{ position: 'absolute', left: 0, right: 0, top: 0, height: '3px', background: 'var(--royal)' }}></div>
      <div className="ds-container">
        <div className="reveal" style={{ maxWidth: '54ch', marginBottom: 'var(--space-8)' }}>
          <div className="ds-eyebrow">Schema</div>
          <h2 style={{ fontSize: 'var(--fs-display)', marginTop: '0.3em' }}>Dagen i detalj</h2>
          <p style={{ color: 'var(--text-body)', fontSize: 'var(--fs-lead)', maxWidth: '46ch' }}>
            En resa genom dagen, från första serve till solnedgång. Ungefärliga
            tider, vi justerar på plats efter hur många lag som dyker upp.
          </p>
        </div>

        <div style={{ position: 'relative', maxWidth: '780px' }}>
          {/* rail */}
          <div aria-hidden="true" style={{
            position: 'absolute', left: '23px', top: '14px', bottom: '14px', width: '2px',
            background: 'var(--sand-hair)',
          }}></div>

          {rows.map((r, i) => (
            <div key={r.t} className={`reveal sched-row`} style={{
              position: 'relative', display: 'grid', gridTemplateColumns: '48px 96px 1fr',
              gap: 'var(--space-4)', alignItems: 'baseline', padding: 'var(--space-5) 0',
            }}>
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center' }}>
                <span className="sched-dot" style={{
                  width: '18px', height: '18px', borderRadius: '999px', marginTop: '6px',
                  background: 'var(--white)', border: '3px solid var(--sea-tint-3)',
                  transition: 'background .4s var(--ease-out), border-color .4s var(--ease-out), transform .4s var(--ease-out)',
                }}></span>
              </div>
              <div className="ds-time" style={{ fontSize: '1.45rem', fontWeight: 600, color: 'var(--sea-deep)' }}>{r.t}</div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '-0.01em', fontWeight: 700, fontSize: 'var(--fs-h3)', color: 'var(--sea)' }}>{r.a}</div>
                <div style={{ color: 'var(--text-body)', marginTop: '4px', maxWidth: '46ch' }}>{r.n}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .sched-row.in .sched-dot { background: var(--royal); border-color: var(--royal); transform: scale(1.06); }
        @media (max-width: 560px) {
          .sched-row { grid-template-columns: 40px 72px 1fr !important; }
        }
      `}</style>
    </section>
  );
}
window.Schedule = Schedule;
