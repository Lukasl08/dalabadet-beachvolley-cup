/* @ds-bundle: {"format":3,"namespace":"DalabadetBeachvolleyCupDesignSystem_b20b76","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"bc4880672418","components/core/Button.jsx":"97685bb75e7f","components/core/Card.jsx":"156369d63c51","components/forms/Input.jsx":"8731498ae79e","components/forms/Select.jsx":"fe5c54c1ca12","ui_kits/website/About.jsx":"87e5e8cd2819","ui_kits/website/Footer.jsx":"39eb439f117f","ui_kits/website/Hero.jsx":"8ba567511508","ui_kits/website/Location.jsx":"bfa17f1bc20d","ui_kits/website/Logo.jsx":"b322047b2b9b","ui_kits/website/Nav.jsx":"30939f4d9015","ui_kits/website/Registration.jsx":"5ecf4fd726bb","ui_kits/website/Schedule.jsx":"1400c172004d","ui_kits/website/Wave.jsx":"5f90be0321b8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DalabadetBeachvolleyCupDesignSystem_b20b76 = window.DalabadetBeachvolleyCupDesignSystem_b20b76 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge / Tag — a small mono-font pill for labels, status and meta
 * (e.g. "GRATIS", "ALLA NIVÅER", a schedule time chip).
 *
 * tone: sea | grass | sand | dark | royal
 * The royal tone is strong — use it only to flag the single key fact.
 */
function Badge({
  tone = 'sea',
  children,
  style = {},
  ...rest
}) {
  const tones = {
    sea: {
      background: 'rgba(46,111,128,0.12)',
      color: 'var(--sea-deep)'
    },
    grass: {
      background: 'rgba(110,139,87,0.16)',
      color: '#48603a'
    },
    sand: {
      background: 'var(--sand-deep)',
      color: 'var(--ink)'
    },
    dark: {
      background: 'var(--sea-deep)',
      color: 'var(--white)'
    },
    royal: {
      background: 'rgba(44,75,212,0.12)',
      color: 'var(--royal)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.4em',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-xs)',
      fontWeight: 'var(--fw-medium)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-label)',
      padding: '0.34em 0.8em',
      borderRadius: 'var(--radius-pill)',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useRef,
  useCallback
} = React;
/**
 * Button — the brand's primary action element.
 *
 * Three variants:
 *   primary   → royal blue (kungsblå), the single strong color; reserve for the most
 *               important action on a view (e.g. "Anmäl ditt lag").
 *   secondary → outlined sea-blue on transparent ground.
 *   ghost     → transparent, for nav links and low-emphasis actions.
 *
 * Press behaviour (the brand signature), automatic on every Button:
 *   1. The button sinks ~2px and scales to 97% — pressed into the sand.
 *   2. A round sun-glint (radial white gradient) is born exactly where the
 *      pointer landed, grows and fades over ~0.6s — a glint of sun on water.
 * Both respect prefers-reduced-motion (the ripple is skipped).
 */
function Button({
  variant = 'primary',
  size = 'md',
  as = 'button',
  type = 'button',
  disabled = false,
  fullWidth = false,
  children,
  style = {},
  ...rest
}) {
  const ref = useRef(null);
  const spawnGlint = useCallback(e => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = el.getBoundingClientRect();
    const cx = (e.clientX ?? rect.left + rect.width / 2) - rect.left;
    const cy = (e.clientY ?? rect.top + rect.height / 2) - rect.top;
    const reach = Math.max(rect.width, rect.height) * 1.4;
    const glint = document.createElement('span');
    glint.style.cssText = ['position:absolute', `left:${cx}px`, `top:${cy}px`, `width:${reach}px`, `height:${reach}px`, 'margin-left:' + -reach / 2 + 'px', 'margin-top:' + -reach / 2 + 'px', 'border-radius:999px', 'pointer-events:none', 'background:radial-gradient(circle, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.22) 38%, rgba(255,255,255,0) 70%)', 'transform:scale(0)', 'opacity:0.9', 'transition:transform 600ms cubic-bezier(0.22,1,0.36,1), opacity 600ms ease-out'].join(';');
    el.appendChild(glint);
    requestAnimationFrame(() => {
      glint.style.transform = 'scale(1)';
      glint.style.opacity = '0';
    });
    setTimeout(() => glint.remove(), 640);
  }, []);
  const base = {
    position: 'relative',
    overflow: 'hidden',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.6em',
    width: fullWidth ? '100%' : 'auto',
    fontFamily: 'var(--font-display)',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
    fontWeight: 'var(--fw-bold)',
    border: '1.5px solid transparent',
    borderRadius: 'var(--radius-pebble)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    userSelect: 'none',
    textDecoration: 'none',
    transition: 'transform var(--dur-fast) var(--ease-out), background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
    WebkitTapHighlightColor: 'transparent'
  };
  const sizes = {
    sm: {
      fontSize: '0.8125rem',
      padding: '0.5em 1.1em'
    },
    md: {
      fontSize: '0.95rem',
      padding: '0.72em 1.5em'
    },
    lg: {
      fontSize: '1.0625rem',
      padding: '0.92em 2em'
    }
  };
  const variants = {
    primary: {
      background: 'var(--action)',
      color: 'var(--white)',
      boxShadow: 'var(--shadow-md)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--sea)',
      borderColor: 'var(--sea)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--sea-deep)'
    }
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    ref: ref,
    type: as === 'button' ? type : undefined,
    disabled: as === 'button' ? disabled : undefined,
    onPointerDown: disabled ? undefined : spawnGlint,
    "data-variant": variant,
    className: "ds-btn",
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — soft, warm surface used for info blocks (Klasser / Regler / Pris),
 * schedule panels, the registration form, etc.
 *
 * tone:
 *   raised → white card on sand with a hairline + soft warm shadow (default)
 *   sunk   → sand-deep card, no shadow, for nested/secondary panels
 *   dark   → sea-deep ground with light text, for CTA / footer blocks
 */
function Card({
  tone = 'raised',
  as = 'div',
  padding = 'md',
  children,
  style = {},
  ...rest
}) {
  const tones = {
    raised: {
      background: 'var(--bg-raised)',
      color: 'var(--text-body)',
      border: 'var(--border-card)',
      boxShadow: 'var(--shadow-md)'
    },
    sunk: {
      background: 'var(--bg-sunk)',
      color: 'var(--text-body)',
      border: '1px solid var(--sand-hair)'
    },
    dark: {
      background: 'var(--bg-dark)',
      color: 'var(--text-on-dark)',
      border: '1px solid var(--border-on-dark)'
    }
  };
  const pads = {
    none: 0,
    sm: 'var(--space-5)',
    md: 'var(--space-6)',
    lg: 'var(--space-7)'
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      borderRadius: 'var(--radius-lg)',
      padding: pads[padding],
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useId
} = React;
const fieldWrap = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--space-2)',
  width: '100%'
};
const labelStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: 'var(--fs-xs)',
  textTransform: 'uppercase',
  letterSpacing: 'var(--ls-label)',
  fontWeight: 'var(--fw-medium)',
  color: 'var(--sea-deep)'
};
const controlBase = {
  width: '100%',
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-body)',
  color: 'var(--ink)',
  background: 'var(--white)',
  border: '1.5px solid var(--sand-hair)',
  borderRadius: 'var(--radius-md)',
  padding: '0.7em 0.9em',
  outline: 'none',
  transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)'
};

/**
 * Input — labelled text/email/tel/number field used in the registration form.
 * Numeric inputs render in the mono font to match the "match-clock" numerals.
 */
function Input({
  label,
  type = 'text',
  hint,
  error,
  id,
  style = {},
  ...rest
}) {
  const autoId = useId();
  const fieldId = id || autoId;
  const isNum = type === 'number';
  return /*#__PURE__*/React.createElement("div", {
    style: fieldWrap
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: labelStyle
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    className: "ds-input",
    "aria-invalid": error ? 'true' : undefined,
    style: {
      ...controlBase,
      fontFamily: isNum ? 'var(--font-mono)' : 'var(--font-body)',
      borderColor: error ? 'var(--danger)' : 'var(--sand-hair)',
      ...style
    }
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'var(--danger)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useId
} = React;
const wrap = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--space-2)',
  width: '100%'
};
const labelStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: 'var(--fs-xs)',
  textTransform: 'uppercase',
  letterSpacing: 'var(--ls-label)',
  fontWeight: 'var(--fw-medium)',
  color: 'var(--sea-deep)'
};

/**
 * Select — labelled dropdown (e.g. "Antal spelare" 2–6). Caret drawn with an
 * inline SVG background so it matches the sea-blue palette.
 */
function Select({
  label,
  options = [],
  id,
  style = {},
  children,
  ...rest
}) {
  const autoId = useId();
  const fieldId = id || autoId;
  const caret = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%231B4750' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>";
  return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: labelStyle
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    className: "ds-input",
    style: {
      width: '100%',
      appearance: 'none',
      WebkitAppearance: 'none',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-body)',
      color: 'var(--ink)',
      background: `var(--white) url("${caret}") no-repeat right 0.9em center`,
      border: '1.5px solid var(--sand-hair)',
      borderRadius: 'var(--radius-md)',
      padding: '0.7em 2.4em 0.7em 0.9em',
      outline: 'none',
      cursor: 'pointer',
      transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest), children || options.map(o => {
    const value = typeof o === 'object' ? o.value : o;
    const labelText = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, labelText);
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

})();
