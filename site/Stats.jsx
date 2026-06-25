// Stats - a short band of honest, punchy facts that count up the first time
// they scroll into view. Numbers only where they're true (no invented figures):
// one full day, four per team, ~7 hours of play, 100% summer feeling.
function useCountUp(target, suffix, run) {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    if (!run) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setVal(target); return; }
    let raf, start;
    const dur = 1400;
    const tick = (ts) => {
      if (!start) start = ts;
      const p = Math.min(1, (ts - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target]);
  return `${val}${suffix || ''}`;
}

function StatTile({ value, suffix, label, sub, run }) {
  const shown = useCountUp(value, suffix, run);
  return (
    <div className="stat-tile">
      <div className="stat-num ds-mono">{shown}</div>
      <div className="stat-label">{label}</div>
      <div className="stat-sub">{sub}</div>
    </div>
  );
}

function Stats() {
  const ref = React.useRef(null);
  const [run, setRun] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) { setRun(true); return; }
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { setRun(true); io.disconnect(); } });
    }, { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const tiles = [
    { value: 1, suffix: '', label: 'Hel dag', sub: 'Sol från morgon till kväll' },
    { value: 4, suffix: '', label: 'Spelare per lag', sub: 'Samla gänget' },
    { value: 7, suffix: 'h', label: 'Bollspel', sub: 'Från första serve till final' },
    { value: 100, suffix: '%', label: 'Sommarkänsla', sub: 'Garanterat skratt i sanden' },
  ];

  return (
    <section ref={ref} className="bv-stats" aria-label="Snabba fakta">
      <div className="ds-container">
        <div className="stat-grid">
          {tiles.map((t, i) => (
            <div className={`reveal reveal-d${i + 1}`} key={t.label}>
              <StatTile {...t} run={run} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .bv-stats { background: var(--sand); padding: var(--space-7) 0; border-top: 1px solid var(--sand-hair); border-bottom: 1px solid var(--sand-hair); }
        .stat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-6); }
        .stat-tile { text-align: center; padding: 0 var(--space-3); position: relative; }
        .stat-grid > div:not(:last-child) .stat-tile::after {
          content: ""; position: absolute; right: calc(var(--space-6) / -2); top: 10%; bottom: 10%;
          width: 1px; background: var(--sand-hair);
        }
        .stat-num { font-size: clamp(2.6rem, 6vw, 4.2rem); font-weight: 600; line-height: 1; color: var(--royal); }
        .stat-label { font-family: var(--font-display); text-transform: uppercase; font-weight: 700; letter-spacing: -0.01em; font-size: var(--fs-h3); color: var(--sea-deep); margin-top: var(--space-3); }
        .stat-sub { color: var(--text-muted); font-size: var(--fs-sm); margin-top: 4px; }
        @media (max-width: 720px) {
          .stat-grid { grid-template-columns: repeat(2, 1fr); gap: var(--space-7) var(--space-5); }
          .stat-grid > div:nth-child(odd) .stat-tile::after { content: none; }
        }
      `}</style>
    </section>
  );
}
window.Stats = Stats;
