// App grid — cards grouped by category, with Chinese Mastery as the featured one
const AppCard = ({ app, featured }) => {
  const cat = CATEGORIES[app.cat];
  const owners = app.owner.map(o => FAMILY[o]);

  return (
    <a
      className={`app-card ${featured ? "app-card--featured" : ""}`}
      style={{
        "--cat": cat.color,
        "--cat-soft": cat.soft,
        "--cat-ink": cat.ink,
      }}
      href={app.url || "#"}
      target={app.url ? "_blank" : undefined}
      rel={app.url ? "noopener noreferrer" : undefined}
    >
      <div className="app-card__inner">
        <div className="app-card__head">
          <div className="app-card__cat">
            <span className="app-card__cat-dot" />
            {cat.label}
          </div>
          <div className="app-card__owners">
            {owners.map((o, i) => (
              <span key={i} className="app-card__owner" style={{ background: o.color }} title={o.name}>
                {o.avatar}
              </span>
            ))}
          </div>
        </div>

        <div className="app-card__icon">
          <Icon name={app.icon} size={featured ? 56 : 44} />
        </div>

        <div className="app-card__body">
          <h3 className="app-card__name">{app.name}</h3>
          <p className="app-card__desc">{app.desc}</p>
        </div>

        <div className="app-card__foot">
          {app.streak !== undefined && (
            <span className="app-card__streak">
              <span className="app-card__streak-icon">🔥</span>
              <span><strong>{app.streak}</strong> day streak</span>
            </span>
          )}
          <span className="app-card__stat">{app.stat}</span>
        </div>

        <div className="app-card__cta">
          <span>Open</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8 h10 m-4 -4 l4 4 l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {featured && (
        <div className="app-card__featured-tag">
          <span>新</span>
          <span>Most used this week</span>
        </div>
      )}
    </a>
  );
};

const AppGrid = ({ tweaks }) => {
  // Group apps by category, custom order
  const order = ["learning", "training", "utility", "recreation"];
  const grouped = order.map(catKey => ({
    cat: CATEGORIES[catKey],
    key: catKey,
    apps: APPS.filter(a => a.cat === catKey),
  })).filter(g => g.apps.length > 0);

  if (tweaks.layout === "byOwner") {
    // Group by primary owner
    const byOwner = {};
    APPS.forEach(a => {
      a.owner.forEach(o => {
        if (!byOwner[o]) byOwner[o] = [];
        if (!byOwner[o].includes(a)) byOwner[o].push(a);
      });
    });
    return (
      <section className="app-grid">
        {Object.entries(byOwner).map(([who, apps]) => {
          const p = FAMILY[who];
          return (
            <div key={who} className="app-grid__group">
              <div className="app-grid__group-head">
                <div className="app-grid__group-title">
                  <span className="app-grid__group-avatar" style={{ background: p.color }}>{p.avatar}</span>
                  <span>{p.name}'s apps</span>
                </div>
                <div className="app-grid__group-count">{apps.length} {apps.length === 1 ? "tool" : "tools"}</div>
              </div>
              <div className="app-grid__row">
                {apps.map(a => <AppCard key={a.id} app={a} />)}
              </div>
            </div>
          );
        })}
      </section>
    );
  }

  return (
    <section className="app-grid">
      {grouped.map(g => (
        <div key={g.key} className="app-grid__group">
          <div className="app-grid__group-head">
            <div className="app-grid__group-title">
              <span className="app-grid__group-dot" style={{ background: g.cat.color }} />
              <span>{g.cat.label}</span>
            </div>
            <div className="app-grid__group-count">{g.apps.length} {g.apps.length === 1 ? "tool" : "tools"}</div>
          </div>
          <div className="app-grid__row">
            {g.apps.map(a => <AppCard key={a.id} app={a} featured={a.featured && tweaks.featured} />)}
          </div>
        </div>
      ))}
    </section>
  );
};

window.AppGrid = AppGrid;
window.AppCard = AppCard;
