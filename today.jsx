// Today panel — schedule + chore strip + week ahead
const TodayPanel = () => {
  const [completed, setCompleted] = useState({});

  const toggle = (key) => setCompleted(c => ({ ...c, [key]: !c[key] }));

  return (
    <section className="today">
      <div className="today__schedule">
        <div className="panel-head">
          <div className="panel-head__eyebrow">TODAY · 4:12 PM</div>
          <div className="panel-head__title">What's on</div>
        </div>
        <ul className="schedule">
          {TODAY.map((item, i) => {
            const cat = CATEGORIES[item.cat];
            const person = FAMILY[item.who];
            const key = `s-${i}`;
            const done = completed[key];
            return (
              <li
                key={key}
                className={`schedule__item ${item.live ? "is-live" : ""} ${done ? "is-done" : ""}`}
                onClick={() => toggle(key)}
                style={{ "--cat": cat.color, "--cat-soft": cat.soft }}
              >
                <span className="schedule__time">{item.time}</span>
                <span className="schedule__pip" />
                <span className="schedule__person" style={{ background: person.color }}>{person.avatar}</span>
                <span className="schedule__what">
                  <span className="schedule__name">{person.name}</span>
                  <span className="schedule__detail">{item.what}</span>
                </span>
                {item.live && <span className="schedule__live">LIVE</span>}
                {done && <span className="schedule__done">✓</span>}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="today__chores">
        <div className="panel-head">
          <div className="panel-head__eyebrow">CHORES · TODAY</div>
          <div className="panel-head__title">Twins' progress</div>
        </div>
        <div className="twins">
          {["jess", "jenn"].map(who => {
            const p = FAMILY[who];
            const list = CHORES[who];
            const doneCount = list.filter(t => t.done).length;
            const pct = (doneCount / list.length) * 100;
            return (
              <div key={who} className="twin">
                <div className="twin__head">
                  <div className="twin__avatar" style={{ background: p.color }}>{p.avatar}</div>
                  <div className="twin__name">{p.name}</div>
                  <div className="twin__count">{doneCount}<span>/{list.length}</span></div>
                </div>
                <div className="twin__ring">
                  <div className="twin__ring-fill" style={{ width: `${pct}%`, background: p.color }} />
                </div>
                <ul className="twin__tasks">
                  {list.map((t, i) => (
                    <li key={i} className={t.done ? "is-done" : ""}>
                      <span className="twin__check" style={{ borderColor: p.color, background: t.done ? p.color : "transparent" }}>
                        {t.done && "✓"}
                      </span>
                      <span>{t.task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className="today__week">
        <div className="panel-head">
          <div className="panel-head__eyebrow">WEEK AHEAD</div>
          <div className="panel-head__title">Apr 27 – May 3</div>
        </div>
        <div className="week">
          {WEEK_AHEAD.map((d, i) => {
            const cat = d.cat ? CATEGORIES[d.cat] : null;
            return (
              <div key={i} className={`week__day ${i === 0 ? "is-today" : ""}`}>
                <div className="week__dow">{d.day}</div>
                <div className="week__date">{d.date}</div>
                <div className="week__label" style={{ color: cat ? cat.color : "var(--ink-muted)" }}>
                  {d.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

window.TodayPanel = TodayPanel;
