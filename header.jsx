// Header — greeting + weather + date
const { useState, useEffect, useMemo } = React;

const HubHeader = ({ tweaks }) => {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(t);
  }, []);

  const hour = now.getHours();
  const greeting =
    hour < 5  ? "Late night," :
    hour < 12 ? "Good morning," :
    hour < 17 ? "Good afternoon," :
    hour < 21 ? "Good evening," :
                "Wind down,";

  const dateStr = now.toLocaleDateString("en-CA", { weekday: "long", month: "long", day: "numeric" });
  const timeStr = now.toLocaleTimeString("en-CA", { hour: "numeric", minute: "2-digit" });

  return (
    <header className="hub-header">
      <div className="hub-header__left">
        <div className="hub-mark">
          <div className="hub-mark__shape" aria-hidden="true">
            <svg viewBox="0 0 40 40">
              <circle cx="14" cy="14" r="8" fill="var(--cat-training)" />
              <circle cx="26" cy="14" r="8" fill="var(--cat-learning)" opacity="0.92" />
              <circle cx="14" cy="26" r="8" fill="var(--cat-utility)" opacity="0.92" />
              <circle cx="26" cy="26" r="8" fill="var(--cat-recreation)" opacity="0.92" />
            </svg>
          </div>
          <div className="hub-mark__text">
            <div className="hub-mark__name">Family Hub</div>
            <div className="hub-mark__sub">Chen household · Red Deer, AB</div>
          </div>
        </div>
      </div>

      <div className="hub-header__center">
        <h1 className="hub-greeting">
          <span className="hub-greeting__hi">{greeting}</span>
          <span className="hub-greeting__name">
            <span style={{ color: "var(--cat-training)" }}>Jess</span>
            <span className="hub-greeting__amp"> &amp; </span>
            <span style={{ color: "var(--cat-learning)" }}>Jenn</span>
          </span>
        </h1>
        <div className="hub-greeting__meta">
          <span>{dateStr}</span>
          <span className="hub-dot">·</span>
          <span>{timeStr}</span>
          <span className="hub-dot">·</span>
          <span className="hub-weather">
            <svg viewBox="0 0 24 24" width="18" height="18" style={{ verticalAlign: "-3px" }}>
              <circle cx="9" cy="12" r="4" fill="#F4B73D" />
              <path d="M15 16 a4 4 0 1 0 0 -8 a3 3 0 0 0 -6 1" fill="none" stroke="#7A7468" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span>8°C · Partly cloudy</span>
          </span>
        </div>
      </div>

      <div className="hub-header__right">
        <div className="hub-people">
          {Object.entries(FAMILY).map(([k, p]) => (
            <div key={k} className="hub-person" title={p.name}>
              <div className="hub-person__avatar" style={{ background: p.color }}>
                <span>{p.avatar}</span>
              </div>
              <span className="hub-person__name">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

window.HubHeader = HubHeader;
