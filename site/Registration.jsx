// Registration — the page climax. Dark sea-deep ground with the embedded,
// validated anmälningsformulär. Fields in brief order: Lagnamn, Kontaktperson,
// E-post, Telefon, Antal spelare (2–6, fyra vanligast). Frontend-only: it
// validates, then swaps to a warm confirmation. No backend yet.
// TODO: koppla submit till riktig mottagare (mejl / Google Sheet / databas).
function Registration({ onRegister }) {
  const { Card, Button, Input, Select } = window.DalabadetBeachvolleyCupDesignSystem_b20b76;

  const [values, setValues] = React.useState({
    team: '', contact: '', email: '', phone: '', players: '4',
  });
  const [errors, setErrors] = React.useState({});
  const [sent, setSent] = React.useState(false);

  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }));

  const validate = () => {
    const er = {};
    if (!values.team.trim()) er.team = 'Fyll i ett lagnamn';
    if (!values.contact.trim()) er.contact = 'Fyll i en kontaktperson';
    if (!/^\S+@\S+\.\S+$/.test(values.email)) er.email = 'Fyll i en giltig e-post';
    if (!/[0-9]{6,}/.test(values.phone.replace(/\s/g, ''))) er.phone = 'Fyll i ett telefonnummer';
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    // TODO: skicka `values` till en riktig backend här.
    if (validate()) setSent(true);
  };

  const reset = () => {
    setSent(false);
    setValues({ team: '', contact: '', email: '', phone: '', players: '4' });
    setErrors({});
  };

  return (
    <section id="anmalan" style={{
      position: 'relative', background: 'var(--sea-deep)', overflow: 'hidden',
      paddingTop: 'var(--section-pad-y)', paddingBottom: 'var(--section-pad-y)',
    }}>
      <div aria-hidden="true" style={{ position: 'absolute', left: 0, right: 0, top: 0, height: '3px', background: 'var(--royal)' }}></div>

      {/* faint signature arc in the corner */}
      <svg aria-hidden="true" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" style={{
        position: 'absolute', right: 0, bottom: 0, width: '55%', height: '100%', opacity: 0.5, pointerEvents: 'none', zIndex: 0,
      }}>
        <path d="M -40 380 C 200 160, 440 90, 660 220" fill="none" stroke="rgba(251,248,241,0.12)" strokeWidth="2" strokeDasharray="6 13" strokeLinecap="round"/>
      </svg>

      <div className="ds-container" style={{
        position: 'relative', zIndex: 1,
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'var(--space-8)', alignItems: 'start',
      }}>
        <div className="reveal">
          <div className="ds-eyebrow" style={{ color: 'rgba(251,248,241,0.7)' }}>Anmälan</div>
          <h2 style={{ fontSize: 'var(--fs-display)', color: 'var(--white)', margin: '0.3em 0 0.35em' }}>Anmäl ditt lag</h2>
          <p style={{ color: 'var(--text-on-dark-muted)', fontSize: 'var(--fs-lead)', maxWidth: '40ch' }}>
            Anmälningsavgiften är ca 299 kr per lag och det går snabbt att anmäla
            sig. Anmäl er så snart som möjligt — sista anmälningsdag meddelas
            senare. Det finns ingen gräns för antal lag, så alla som vill får plats.
          </p>

          <ul style={{ listStyle: 'none', padding: 0, margin: 'var(--space-6) 0 0', display: 'grid', gap: 'var(--space-3)' }}>
            {['Ca 299 kr per lag', 'Alla nivåer spelar tillsammans', '4 spelare per lag'].map((t) => (
              <li key={t} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--white)', fontSize: 'var(--fs-body)' }}>
                <span style={{
                  flex: 'none', width: '26px', height: '26px', borderRadius: '999px',
                  background: 'rgba(110,139,87,0.30)', display: 'grid', placeItems: 'center',
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--dune-soft)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <Card tone="raised" padding="lg" className="reveal reveal-d2">
          {sent ? (
            <div style={{ textAlign: 'center', padding: 'var(--space-5) 0' }}>
              <div style={{
                width: '64px', height: '64px', borderRadius: '999px', margin: '0 auto var(--space-4)',
                background: 'rgba(110,139,87,0.16)', display: 'grid', placeItems: 'center',
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--dune)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--dune)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.78rem' }}>✓ Anmälan mottagen</div>
              <h3 style={{ fontSize: 'var(--fs-h2)', margin: '0.45em 0 0.3em' }}>Tack, {values.team || 'laget'}!</h3>
              <p style={{ color: 'var(--text-body)', margin: '0 auto', maxWidth: '34ch' }}>
                Ni är anmälda — vi hör av oss innan turneringen. Vi ses på Dalabadet!
              </p>
              <div style={{ marginTop: 'var(--space-5)' }}>
                <Button variant="secondary" onClick={reset}>Anmäl ett lag till</Button>
              </div>
            </div>
          ) : (
            <form onSubmit={submit} noValidate style={{ display: 'grid', gap: 'var(--space-4)' }}>
              <Input label="Lagnamn" value={values.team} onChange={set('team')} error={errors.team} placeholder="Ert lagnamn" />
              <Input label="Kontaktperson" value={values.contact} onChange={set('contact')} error={errors.contact} placeholder="Förnamn Efternamn" />
              <Input label="E-post" type="email" value={values.email} onChange={set('email')} error={errors.email}
                hint={!errors.email ? 'Vi skickar bekräftelse hit.' : undefined} placeholder="namn@exempel.se" />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 130px', gap: 'var(--space-4)', alignItems: 'start' }}>
                <Input label="Telefon" type="tel" value={values.phone} onChange={set('phone')} error={errors.phone} placeholder="07X-XXX XX XX" />
                <Input label="Spelare" value="4" readOnly hint="4 per lag" />
              </div>
              <div style={{ marginTop: 'var(--space-2)' }}>
                <Button type="submit" variant="primary" size="lg" fullWidth>Skicka anmälan</Button>
              </div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', color: 'var(--text-muted)', textAlign: 'center', margin: 0 }}>
                299 kr/lag · Inga klasser · Alla välkomna
              </p>
            </form>
          )}
        </Card>
      </div>
    </section>
  );
}
window.Registration = Registration;
