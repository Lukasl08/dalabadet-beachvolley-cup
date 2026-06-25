// FAQ — elegant accordion. Single-open, animated height, rotates the + into ×.
function FaqItem({ q, a, open, onToggle }) {
  const ref = React.useRef(null);
  const [h, setH] = React.useState(0);
  React.useEffect(() => {
    setH(open && ref.current ? ref.current.scrollHeight : 0);
  }, [open, a]);
  return (
    <div className="faq-item" data-open={open ? 'true' : 'false'}>
      <button className="faq-q" aria-expanded={open} onClick={onToggle}>
        <span>{q}</span>
        <span className="faq-icon" aria-hidden="true">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
        </span>
      </button>
      <div className="faq-a" style={{ height: h + 'px' }}>
        <div className="faq-a-inner" ref={ref}>{a}</div>
      </div>
    </div>
  );
}

function Faq() {
  const [open, setOpen] = React.useState(0);
  const items = [
    { q: 'Hur många spelare får vara i ett lag?', a: 'Varje lag är 4 spelare. Ange kontaktperson i anmälan, så löser vi resten på plats.' },
    { q: 'Behöver man vara erfaren?', a: 'Nej. Alla nivåer är välkomna och spelar i samma turnering, oavsett kön och vana. Vi hejar lika hårt på nybörjarna som på proffsen, det viktiga är att ha kul.' },
    { q: 'Vad kostar det?', a: 'Anmälningsavgiften är 350 kr per lag. Ta med egen matsäck — dryck finns att köpa på stranden under dagen.' },
    { q: 'Vad ingår?', a: 'Spel hela dagen, plats i sanden, schema och en härlig dag vid havet. Finalen avslutas med prisutdelning där dagens mästare koras.' },
    { q: 'Hur anmäler man sig?', a: 'Fyll i anmälningsformuläret längre ner på sidan — lagnamn, kontaktperson, e-post, telefon och antal spelare (4 per lag). Ni får en bekräftelse, och vi hör av oss innan turneringen.' },
    { q: 'Finns det olika klasser?', a: 'Nej, inga klasser eller divisioner. Alla lag spelar tillsammans i samma turnering. Det finns heller ingen gräns för antal lag — alla som anmäler sig får plats.' },
  ];
  return (
    <section id="fragor" style={{ position: 'relative', background: 'var(--sand)', paddingTop: 'var(--section-pad-y)', paddingBottom: 'var(--section-pad-y)' }}>
      <div className="ds-container" style={{ maxWidth: 'var(--maxw-narrow)' }}>
        <div className="reveal" style={{ marginBottom: 'var(--space-7)' }}>
          <div className="ds-eyebrow">Vanliga frågor</div>
          <h2 style={{ fontSize: 'var(--fs-display)', marginTop: '0.3em' }}>Bra att veta</h2>
        </div>
        <div className="reveal reveal-d1" style={{ borderTop: '1px solid var(--sand-hair)' }}>
          {items.map((it, i) => (
            <FaqItem key={it.q} q={it.q} a={it.a} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
window.Faq = Faq;
