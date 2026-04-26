// Custom SVG icons drawn for each app — playful, geometric, single-stroke
// All icons are 48x48 viewBox; color is currentColor.

const Icon = ({ name, size = 40 }) => {
  const s = { width: size, height: size, display: "block" };
  const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 2.5, strokeLinecap: "round", strokeLinejoin: "round" };

  switch (name) {
    case "swim":
      return (
        <svg viewBox="0 0 48 48" style={s}>
          <g {...stroke}>
            <path d="M4 30 q5 -4 10 0 t10 0 t10 0 t10 0" />
            <path d="M4 38 q5 -4 10 0 t10 0 t10 0 t10 0" />
            <circle cx="32" cy="14" r="3.5" />
            <path d="M14 22 l10 -4 l8 4" />
            <path d="M24 18 l-6 6" />
          </g>
        </svg>
      );
    case "skate":
      return (
        <svg viewBox="0 0 48 48" style={s}>
          <g {...stroke}>
            <path d="M14 8 v22 q0 4 4 4 h14" />
            <path d="M10 38 h28" />
            <path d="M10 42 h32" />
            <circle cx="14" cy="8" r="1.5" fill="currentColor" />
            <path d="M14 16 h6" />
            <path d="M14 22 h8" />
          </g>
        </svg>
      );
    case "chinese":
      // Stylized 學 (study) glyph as geometric shapes
      return (
        <svg viewBox="0 0 48 48" style={s}>
          <g {...stroke}>
            <path d="M8 12 h32" />
            <path d="M14 12 v6" />
            <path d="M24 12 v6" />
            <path d="M34 12 v6" />
            <path d="M10 22 h28" />
            <path d="M24 22 v18" />
            <path d="M14 30 h20" />
            <path d="M14 38 h20" />
          </g>
        </svg>
      );
    case "french":
      return (
        <svg viewBox="0 0 48 48" style={s}>
          <g {...stroke}>
            <path d="M10 8 h28 v32 l-14 -6 l-14 6 z" />
            <path d="M18 18 h12" />
            <path d="M18 24 h8" />
            <circle cx="24" cy="14" r="0" fill="currentColor" />
            <path d="M22 12 l4 0" />
          </g>
        </svg>
      );
    case "rec":
      return (
        <svg viewBox="0 0 48 48" style={s}>
          <g {...stroke}>
            <path d="M6 32 h36" />
            <path d="M10 32 v-8 a14 14 0 0 1 28 0 v8" />
            <path d="M24 18 v14" />
            <path d="M16 22 l16 0" />
            <path d="M8 38 h32" />
          </g>
        </svg>
      );
    case "lake":
      return (
        <svg viewBox="0 0 48 48" style={s}>
          <g {...stroke}>
            <path d="M6 30 q6 -5 12 0 t12 0 t12 0" />
            <path d="M6 38 q6 -5 12 0 t12 0 t12 0" />
            <path d="M30 8 v16" />
            <path d="M30 8 l-6 4 l6 4" />
            <circle cx="30" cy="26" r="2" fill="currentColor" />
          </g>
        </svg>
      );
    case "planner":
      return (
        <svg viewBox="0 0 48 48" style={s}>
          <g {...stroke}>
            <rect x="8" y="10" width="32" height="30" rx="2" />
            <path d="M8 18 h32" />
            <path d="M16 6 v8" />
            <path d="M32 6 v8" />
            <circle cx="16" cy="26" r="1.5" fill="currentColor" />
            <circle cx="24" cy="26" r="1.5" fill="currentColor" />
            <circle cx="32" cy="26" r="1.5" fill="currentColor" />
            <circle cx="16" cy="34" r="1.5" fill="currentColor" />
          </g>
        </svg>
      );
    case "chore":
      return (
        <svg viewBox="0 0 48 48" style={s}>
          <g {...stroke}>
            <rect x="8" y="10" width="32" height="30" rx="2" />
            <path d="M14 18 l3 3 l6 -6" />
            <path d="M26 20 h10" />
            <path d="M14 28 l3 3 l6 -6" />
            <path d="M26 30 h10" />
            <path d="M26 38 h10" />
            <rect x="13" y="35" width="6" height="6" rx="1" />
          </g>
        </svg>
      );
    default:
      return <svg viewBox="0 0 48 48" style={s}><circle cx="24" cy="24" r="10" {...stroke} /></svg>;
  }
};

window.Icon = Icon;
