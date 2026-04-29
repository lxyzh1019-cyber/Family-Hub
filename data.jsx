// Family Hub data — apps, family, dynamic content
const FAMILY = {
  jess: { name: "Jess", color: "#E85D5D", initial: "J", avatar: "🌸" },
  jenn: { name: "Jenn", color: "#5B8AE6", initial: "J", avatar: "🌟" },
  mom:  { name: "Mom",  color: "#D4956B", initial: "M", avatar: "🌷" },
  dad:  { name: "Dad",  color: "#4A8B7D", initial: "D", avatar: "🍃" },
};

const CATEGORIES = {
  training:   { label: "Training",   color: "#E85D5D", soft: "#FBE9E5", ink: "#7A1F1A" },
  learning:   { label: "Learning",   color: "#5B6FE6", soft: "#E6E9FB", ink: "#1F2A7A" },
  utility:    { label: "Utility",    color: "#D49A4A", soft: "#FBF1DE", ink: "#7A4F12" },
  recreation: { label: "Recreation", color: "#4A8B7D", soft: "#E0EFEA", ink: "#1F4A40" },
};

const APPS = [
  {
    id: "swim",
    name: "Swimming Timer",
    desc: "Jess's 7-day dryland training plan with voice cues and weather.",
    cat: "training",
    owner: ["jess"],
    streak: 12,
    stat: "Week 2+ active",
    icon: "swim",
    url: "https://lxyzh1019-cyber.github.io/Swimming-Dryland-Timer/",
  },
  {
    id: "skate",
    name: "Figure Skate Timer",
    desc: "Jenn's 7-day skate land training — jumps, core, and flexibility.",
    cat: "training",
    owner: ["jess", "jenn"],
    streak: 38,
    stat: "Practice 4:30 PM",
    icon: "skate",
    url: "https://lxyzh1019-cyber.github.io/Figure-Skate-Dryland-Timer/",
  },
  {
    id: "chinese",
    name: "Chinese Adventure",
    desc: "Interactive vocabulary and sentence mastery for the kids.",
    cat: "learning",
    owner: ["jess", "jenn"],
    streak: 56,
    stat: "新 word: 努力",
    icon: "chinese",
    featured: true,
    url: "https://lxyzh1019-cyber.github.io/Chinese-Learning/",
  },
  {
    id: "french",
    name: "French Adventure",
    desc: "Grade 4–10 Alberta curriculum language modules.",
    cat: "learning",
    owner: ["jess", "jenn"],
    streak: 22,
    stat: "Module 7 / 12",
    icon: "french",
    url: "https://lxyzh1019-cyber.github.io/French-Adventure/",
  },
  {
    id: "reddeer",
    name: "Red Deer Recreation",
    desc: "Consolidated recreation schedules and facility availability.",
    cat: "utility",
    owner: ["mom"],
    stat: "Pool open 6am–9pm",
    icon: "rec",
    url: "https://lxyzh1019-cyber.github.io/RD-Facility-Sch/",
  },
  {
    id: "trout",
    name: "HZ Trout Map",
    desc: "GPS-verified fishing locations and lake depth mappings.",
    cat: "recreation",
    owner: ["dad"],
    stat: "12 spots saved",
    icon: "lake",
    url: "https://lxyzh1019-cyber.github.io/HZ_Trout_Map/",
  },
  {
    id: "weekly",
    name: "Weekly Planner",
    desc: "Time management and schedule tracking for the family.",
    cat: "utility",
    owner: ["mom", "dad"],
    stat: "5 events this week",
    icon: "planner",
    url: "https://lxyzh1019-cyber.github.io/Weekly-Planner/",
  },
  {
    id: "chore",
    name: "Chore Tracker",
    desc: "Jenn & Jess weekly chore challenge with points and pocket money.",
    cat: "utility",
    owner: ["jess", "jenn"],
    stat: "Jess 3/4 · Jenn 2/4",
    icon: "chore",
    url: "https://lxyzh1019-cyber.github.io/Chore-Tracker/",
  },
];

// Today's schedule — what's happening right now
const TODAY = [
  { time: "3:30 PM", who: "jenn", what: "French — Module 7 review", cat: "learning" },
  { time: "4:30 PM", who: "jess", what: "Figure skate practice", cat: "training", live: true },
  { time: "4:30 PM", who: "jenn", what: "Figure skate practice", cat: "training", live: true },
  { time: "6:00 PM", who: "dad",  what: "Swim dryland — 30 min", cat: "training" },
  { time: "7:30 PM", who: "jess", what: "Chinese — 15 new words", cat: "learning" },
];

const CHORES = {
  jess: [
    { task: "Make bed",           done: true },
    { task: "Pack skate bag",     done: true },
    { task: "Practice piano",     done: true },
    { task: "Tidy desk",          done: false },
  ],
  jenn: [
    { task: "Make bed",           done: true },
    { task: "Pack skate bag",     done: true },
    { task: "Practice piano",     done: false },
    { task: "Feed the fish",      done: false },
  ],
};

const WEEK_AHEAD = [
  { day: "Mon", date: 27, label: "Skate", cat: "training" },
  { day: "Tue", date: 28, label: "Chinese class", cat: "learning" },
  { day: "Wed", date: 29, label: "Skate", cat: "training" },
  { day: "Thu", date: 30, label: "Free", cat: null },
  { day: "Fri", date:  1, label: "French test", cat: "learning" },
  { day: "Sat", date:  2, label: "Trout Lake 🎣", cat: "recreation" },
  { day: "Sun", date:  3, label: "Family day", cat: null },
];

function getPlannerTodayKey() {
  const fmt = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Edmonton",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return fmt.format(new Date());
}

function dayKeyToDate(dayKey) {
  const [y, m, d] = dayKey.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function getWeekStartKey(dayKey) {
  const date = dayKeyToDate(dayKey);
  const day = date.getDay();
  const mondayOffset = day === 0 ? -6 : 1 - day;
  date.setDate(date.getDate() + mondayOffset);
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function toTimeLabel(startMin) {
  if (typeof startMin !== "number" || Number.isNaN(startMin)) return "Anytime";
  const hour24 = Math.floor(startMin / 60);
  const minute = startMin % 60;
  const suffix = hour24 >= 12 ? "PM" : "AM";
  const hour12 = ((hour24 + 11) % 12) + 1;
  return `${hour12}:${String(minute).padStart(2, "0")} ${suffix}`;
}

function getRoutineName(actId, profileData, sharedData) {
  const builtIn = {
    routine_morning: "Morning Routine",
    routine_afterschool: "After-School Routine",
    routine_evening: "Evening Routine",
  };
  if (builtIn[actId]) return builtIn[actId];
  const ownCustom = (profileData.customActivities || []).find((a) => a.id === actId);
  if (ownCustom && ownCustom.name) return ownCustom.name;
  const routineId = actId.startsWith("routine_") ? actId.slice("routine_".length) : null;
  if (routineId) {
    const sharedRoutine = (sharedData.routineTemplates || []).find((r) => r.id === routineId);
    if (sharedRoutine && sharedRoutine.title) return sharedRoutine.title;
  }
  return "Routine";
}

function readPlannerTodayItems() {
  try {
    const raw = window.localStorage.getItem("weeklyplanner-v3");
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    const profiles = parsed && parsed.profiles;
    if (!profiles) return [];

    const todayKey = getPlannerTodayKey();
    const todayDate = dayKeyToDate(todayKey);
    const dayIdx = (todayDate.getDay() + 6) % 7;
    const weekKey = getWeekStartKey(todayKey);
    const people = ["jenn", "jess"];
    const items = [];

    people.forEach((who) => {
      const profileData = profiles[who];
      if (!profileData) return;

      const dayBlocks = profileData.weeks && profileData.weeks[todayKey];
      if (Array.isArray(dayBlocks)) {
        dayBlocks.forEach((block) => {
          if (!block || typeof block.actId !== "string") return;
          if (!block.actId.startsWith("routine_")) return;
          items.push({
            time: toTimeLabel(block.startMin),
            who,
            what: getRoutineName(block.actId, profileData, parsed.shared || {}),
            cat: "utility",
          });
        });
      }

      const todos = Array.isArray(profileData.todos) ? profileData.todos : [];
      todos.forEach((todo) => {
        if (!todo || todo.weekKey !== weekKey || todo.done) return;
        if (todo.assignedDay != null && todo.assignedDay !== dayIdx) return;
        if (!todo.text || !todo.text.trim()) return;
        items.push({
          time: "Anytime",
          who,
          what: `To-do: ${todo.text.trim()}`,
          cat: "utility",
        });
      });
    });

    return items;
  } catch (e) {
    return [];
  }
}

const PLANNER_TODAY = readPlannerTodayItems();

Object.assign(window, { FAMILY, CATEGORIES, APPS, TODAY, CHORES, WEEK_AHEAD, PLANNER_TODAY });
