// Quick actions strip — instant launches
const QuickActions = () => {
  const actions = [
    { label: "Start swim timer", icon: "swim", cat: "training" },
    { label: "Start skate timer", icon: "skate", cat: "training" },
    { label: "Word of the day", icon: "chinese", cat: "learning" },
    { label: "Add chore", icon: "chore", cat: "utility" },
    { label: "Search apps", icon: "planner", cat: "utility" },
  ];

  return (
    <section className="quick">
      <div className="quick__label">Quick start</div>
      <div className="quick__row">
        {actions.map((a, i) => {
          const cat = CATEGORIES[a.cat];
          return (
            <button
              key={i}
              className="quick__btn"
              style={{ "--cat": cat.color, "--cat-soft": cat.soft }}
            >
              <span className="quick__icon"><Icon name={a.icon} size={20} /></span>
              <span>{a.label}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
};

window.QuickActions = QuickActions;
