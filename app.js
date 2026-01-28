const routines = [
  {
    id: "day-1",
    label: "Day 1",
    title: "Upper Chest (Heavy Hypertrophy)",
    warmup: "Light face pulls 2x15-20.",
    dayNotes: [
      "Treat the BB incline like a skill + hypertrophy lift. Same setup every week.",
      "Stop sets when bar speed slows—not when burn appears.",
      "Laterals: chase burn + pump, not failure."
    ],
    exercises: [
      {
        id: "face-pulls-warmup",
        name: "Face Pulls (Warm-up)",
        target: "",
        prescription: "2 sets of 15-20 reps",
        rest: "45-60s",
        cues: "Light warm-up."
      },
      {
        id: "low-incline-bb-press",
        name: "Low-Incline Barbell Press (20-30°)",
        target: "105-110 lb",
        prescription: "3-4 sets of 6-10 reps",
        rest: "2.5-4 min",
        cues: "2-3 RIR. Crown jewel movement."
      },
      {
        id: "smith-low-incline-press",
        name: "Smith Low-Incline Press",
        target: "60-70 lb",
        prescription: "3 sets of 10-15 reps",
        rest: "2-3 min",
        cues: "Controlled eccentrics."
      },
      {
        id: "cable-upper-chest-fly",
        name: "Cable Upper-Chest Fly (low-to-high)",
        target: "11 lb",
        prescription: "2-3 sets of 12-15 reps",
        rest: "75-90s",
        cues: "No pause for now."
      },
      {
        id: "db-lateral-raise",
        name: "DB Lateral Raise",
        target: "10 lb",
        prescription: "4 sets of 15-25 reps",
        rest: "60-75s",
        cues: "Finish with partials."
      },
      {
        id: "overhead-cable-tri-ext",
        name: "Overhead Cable Triceps Extension",
        target: "33 lb",
        prescription: "3 sets of 10-15 reps",
        rest: "75-90s",
        cues: "Smooth tempo."
      },
      {
        id: "dead-bugs",
        name: "Dead Bugs",
        target: "Bodyweight",
        prescription: "2 sets",
        rest: "45-60s",
        cues: "Focus on control."
      },
      {
        id: "sauna",
        name: "Sauna",
        target: "",
        prescription: "10-20 minutes",
        logType: "minutes",
        rest: "",
        cues: "Optional recovery."
      }
    ]
  },
  {
    id: "day-2",
    label: "Day 2",
    title: "Lower (Squat Strength Maintenance)",
    warmup: "",
    dayNotes: [
      "This is neural strength maintenance, not leg growth.",
      "If bar speed slows → session is done. No extra.",
      "Your no junk rule here is exactly right."
    ],
    exercises: [
      {
        id: "back-squat",
        name: "Back Squat (Top Sets)",
        target: "235 lb top set",
        prescription: "1x5-7 @ ~85%",
        rest: "3-4 min",
        cues: "Or 2x3-5 with no back-off."
      },
      {
        id: "back-off-squat",
        name: "Back-Off Squats",
        target: "-10% load",
        prescription: "2 sets of 6 reps",
        rest: "2.5-3 min",
        cues: "No grinders."
      },
      {
        id: "db-split-squat",
        name: "DB Split Squat",
        target: "25-30 lb",
        prescription: "2 sets of 8-10 reps",
        rest: "90-120s",
        cues: "Controlled reps."
      },
      {
        id: "ham-curl",
        name: "Seated or Lying Ham Curl",
        target: "100 lb",
        prescription: "3 sets of 12-15 reps",
        rest: "75-90s",
        cues: "Smooth tempo."
      },
      {
        id: "pallof-press",
        name: "Pallof Press",
        target: "Cable",
        prescription: "3 sets",
        rest: "45-60s",
        cues: "Brace and control."
      },
      {
        id: "sauna",
        name: "Sauna",
        target: "",
        prescription: "10-20 minutes",
        logType: "minutes",
        rest: "",
        cues: "Optional recovery."
      }
    ]
  },
  {
    id: "day-3",
    label: "Day 3",
    title: "Lats / Delts / Tris (Volume)",
    warmup: "",
    dayNotes: [
      "This day feeds upper-chest stability + bench mechanics.",
      "Technique bench should feel boringly easy.",
      "If elbows feel beat up → drop pushdowns, keep OH extensions."
    ],
    exercises: [
      {
        id: "neutral-grip-pulldown",
        name: "Neutral-Grip Pulldown",
        target: "110-120 lb",
        prescription: "3 sets of 6-10 reps",
        rest: "2-3 min",
        cues: "Full stretch."
      },
      {
        id: "chest-supported-row",
        name: "Chest-Supported Row",
        target: "One plate +10 or 75-80 lb",
        prescription: "3 sets of 10-12 reps",
        rest: "2-3 min",
        cues: "Control the squeeze."
      },
      {
        id: "straight-arm-pulldown",
        name: "Straight-Arm Pulldown",
        target: "37-44 lb",
        prescription: "3 sets of 12-15 reps",
        rest: "75-90s",
        cues: "Lat isolation focus."
      },
      {
        id: "lat-raise",
        name: "Cable or Machine Lateral Raise",
        target: "",
        prescription: "3 sets of 15-25 reps",
        rest: "60-75s",
        cues: "Smooth tempo."
      },
      {
        id: "overhead-tri-ext",
        name: "Overhead Triceps Extension",
        target: "33 lb",
        prescription: "3 sets of 10-15 reps",
        rest: "75-90s",
        cues: "Lock in elbow position."
      },
      {
        id: "technique-flat-bench",
        name: "Technique Flat Bench",
        target: "105 lb",
        prescription: "1-2 sets of 5 reps @ 70%",
        rest: "2-3 min",
        cues: "Perfect reps."
      },
      {
        id: "optional-bicep-curl",
        name: "Bicep Curl",
        target: "",
        prescription: "2-4 sets of 8-15 reps",
        rest: "60-90s",
        cues: "Optional pump work.",
        optional: true
      },
      {
        id: "optional-pushdowns",
        name: "Pushdowns (Pump)",
        target: "",
        prescription: "2 sets of 15-20 reps",
        rest: "60-90s",
        cues: "Optional pump work.",
        optional: true
      },
      {
        id: "optional-face-pulls",
        name: "Face Pulls / Reverse Fly",
        target: "",
        prescription: "2-3 sets of 15-20 reps",
        rest: "45-60s",
        cues: "Optional rear-delt work.",
        optional: true
      },
      {
        id: "side-plank",
        name: "Side Plank",
        target: "Bodyweight",
        prescription: "Time under tension",
        rest: "45-60s",
        cues: "Stay stacked."
      },
      {
        id: "sauna",
        name: "Sauna",
        target: "",
        prescription: "10-20 minutes",
        logType: "minutes",
        rest: "",
        cues: "Optional recovery."
      }
    ]
  },
  {
    id: "day-4",
    label: "Day 4",
    title: "Rest / Move / Sauna",
    warmup: "",
    dayNotes: [
      "Keep HR conversational. This is recovery infrastructure.",
      "Sauna pairs best after cardio, not lifting."
    ],
    exercises: [
      {
        id: "zone-2-cardio",
        name: "Zone 2 Cardio",
        target: "",
        prescription: "30-45 minutes",
        logType: "cardio",
        rest: "",
        cues: "Easy pace."
      },
      {
        id: "sauna",
        name: "Sauna",
        target: "",
        prescription: "10-20 minutes",
        logType: "minutes",
        rest: "",
        cues: "Optional recovery."
      }
    ]
  },
  {
    id: "day-5",
    label: "Day 5",
    title: "Upper Chest (B) + Bench Skill",
    warmup: "",
    dayNotes: [
      "Bench here is precision, not ego.",
      "Stop 1-2 reps before grind every set.",
      "The lateral finisher should feel borderline stupid by set 3. That's correct."
    ],
    exercises: [
      {
        id: "flat-bench",
        name: "Flat Bench / Low-Incline BB",
        target: "115 lb",
        prescription: "4 sets of 4-6 reps",
        rest: "3-4 min",
        cues: "Perfect reps, no failure."
      },
      {
        id: "smith-incline-press",
        name: "Smith Incline Press (20-25°)",
        target: "60 lb",
        prescription: "3 sets of 12-15 reps",
        rest: "2-3 min",
        cues: "Control the eccentric."
      },
      {
        id: "landmine-or-db-press",
        name: "Landmine Press or Incline DB Press (30°)",
        target: "30-35 lb",
        prescription: "3 sets of 8-12 reps",
        rest: "2-3 min",
        cues: "Later progress to 45°."
      },
      {
        id: "cable-fly",
        name: "Cable Fly (short ROM, squeeze)",
        target: "11 lb",
        prescription: "2-3 sets of 15-20 reps",
        rest: "75-90s",
        cues: "Low-to-high for now."
      },
      {
        id: "lateral-raise-finisher",
        name: "Lateral Raise Finisher",
        target: "",
        prescription: "3 brutal sets",
        rest: "30-60s",
        cues: "Chase the pump."
      },
      {
        id: "optional-face-pulls",
        name: "Face Pulls / Reverse Fly / Reverse Pec Deck",
        target: "",
        prescription: "2-3 sets of 15-20 reps",
        rest: "45-60s",
        cues: "Optional rear-delt work.",
        optional: true
      },
      {
        id: "optional-pushdowns",
        name: "Cable Pushdowns",
        target: "",
        prescription: "2-3 sets of 12-20 reps",
        rest: "60-90s",
        cues: "Optional triceps pump.",
        optional: true
      },
      {
        id: "dead-bugs",
        name: "Dead Bugs",
        target: "Bodyweight",
        prescription: "2 sets",
        rest: "45-60s",
        cues: "Stay controlled."
      },
      {
        id: "sauna",
        name: "Sauna",
        target: "",
        prescription: "10-20 minutes",
        logType: "minutes",
        rest: "",
        cues: "Optional recovery."
      }
    ]
  },
  {
    id: "day-6",
    label: "Day 6",
    title: "Lower (Light / Posterior)",
    warmup: "",
    dayNotes: [
      "Tempo squats = tendon health + positioning, not fatigue.",
      "RDL load stays conservative. Zero spinal grinders.",
      "Carries are posture + grip insurance."
    ],
    exercises: [
      {
        id: "tempo-squat",
        name: "Tempo Squat / Hack Squat",
        target: "145 lb",
        prescription: "3 sets of 6-8 reps",
        rest: "2-3 min",
        cues: "Slow 3-4s eccentrics (55-65%)."
      },
      {
        id: "hip-hinge",
        name: "Hip Hinge (RDL / Back Extension)",
        target: "135-145 lb",
        prescription: "3 sets of 8-12 reps",
        rest: "2-3 min",
        cues: "Control the hinge."
      },
      {
        id: "calf-raise",
        name: "Calf Raise Machine",
        target: "90 lb",
        prescription: "3 sets of 12-20 reps",
        rest: "60-90s",
        cues: "Full stretch."
      },
      {
        id: "carry",
        name: "Farmer Carry",
        target: "60 lb DB",
        prescription: "3 x 40+ seconds",
        rest: "60-120s",
        cues: "Tall posture."
      },
      {
        id: "optional-seated-ham-curl",
        name: "Seated Ham Curls",
        target: "",
        prescription: "2 sets of 12-15 reps",
        rest: "75-90s",
        cues: "3 RIR, slow eccentrics.",
        optional: true
      },
      {
        id: "sauna",
        name: "Sauna",
        target: "",
        prescription: "10-20 minutes",
        logType: "minutes",
        rest: "",
        cues: "Optional recovery."
      }
    ]
  }
];

const storageKey = "workoutlog.v1";
const grid = document.getElementById("exercise-grid");
const summary = document.getElementById("day-summary");
const dateInput = document.getElementById("session-date");
const daySelect = document.getElementById("day-select");
const dayTitle = document.getElementById("day-title");
const template = document.getElementById("exercise-card-template");
const exportButton = document.getElementById("export-csv");
const importInput = document.getElementById("import-csv");

const today = new Date();
const todayISO = today.toISOString().slice(0, 10);

dateInput.value = todayISO;

function loadStore() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) ?? {};
  } catch (error) {
    return {};
  }
}

function saveStore(store) {
  localStorage.setItem(storageKey, JSON.stringify(store));
}

function escapeCsv(value) {
  const safeValue = (value ?? "").toString();
  if (/["\n,]/.test(safeValue)) {
    return `"${safeValue.replace(/"/g, "\"\"")}"`;
  }
  return safeValue;
}

function buildCsv(rows) {
  return rows.map((row) => row.map(escapeCsv).join(",")).join("\n");
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (char === "\"" && inQuotes && next === "\"") {
      current += "\"";
      i += 1;
      continue;
    }

    if (char === "\"") {
      inQuotes = !inQuotes;
      continue;
    }

    if (char === "," && !inQuotes) {
      row.push(current);
      current = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") {
        i += 1;
      }
      row.push(current);
      if (row.some((cell) => cell !== "")) {
        rows.push(row);
      }
      row = [];
      current = "";
      continue;
    }

    current += char;
  }

  row.push(current);
  if (row.some((cell) => cell !== "")) {
    rows.push(row);
  }

  return rows;
}

function exportCsv() {
  const store = loadStore();
  const rows = [
    [
      "date",
      "dayId",
      "exerciseId",
      "sets",
      "reps",
      "weight",
      "notes",
      "minutes",
      "details",
      "timestamp"
    ]
  ];

  Object.entries(store).forEach(([date, dayEntries]) => {
    Object.entries(dayEntries || {}).forEach(([dayId, exerciseEntries]) => {
      Object.entries(exerciseEntries || {}).forEach(([exerciseId, logs]) => {
        (logs || []).forEach((entry) => {
          rows.push([
            date,
            dayId,
            exerciseId,
            entry.sets ?? "",
            entry.reps ?? "",
            entry.weight ?? "",
            entry.notes ?? "",
            entry.minutes ?? "",
            entry.details ?? "",
            entry.time ?? ""
          ]);
        });
      });
    });
  });

  const csv = buildCsv(rows);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const filename = `workoutlog_${new Date().toISOString().slice(0, 10)}.csv`;
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function importCsv(file) {
  const reader = new FileReader();
  reader.onload = () => {
    const rows = parseCsv(reader.result || "");
    if (!rows.length) {
      return;
    }
    const [header, ...dataRows] = rows;
    const headerIndex = header.reduce((acc, key, index) => {
      acc[key.trim()] = index;
      return acc;
    }, {});

    const store = loadStore();
    const dayIdMap = {
      upper_chest_a: "day-1",
      upper_chest_b: "day-5",
      lower: "day-2",
      lats_delts_tris: "day-3",
      back_tris: "day-3",
      recovery: "day-4"
    };
    const exerciseNameMap = {
      "neutral-grip pulldown": "neutral-grip-pulldown",
      "neutral-grip pull down": "neutral-grip-pulldown",
      "chest-supported row": "chest-supported-row",
      "cable lateral raise": "lat-raise",
      "db lateral raise": "db-lateral-raise",
      "overhead triceps extension": "overhead-tri-ext",
      "overhead cable triceps extension": "overhead-cable-tri-ext",
      "straight-arm pulldown": "straight-arm-pulldown",
      "back squat": "back-squat",
      "tempo squat": "tempo-squat",
      "db split squat": "db-split-squat",
      "lying ham curl": "ham-curl",
      "seated ham curl": "optional-seated-ham-curl",
      "seated ham curls": "optional-seated-ham-curl",
      "pallof press": "pallof-press",
      "low-incline barbell press": "low-incline-bb-press",
      "incline barbell press": "low-incline-bb-press",
      "smith incline press": "smith-low-incline-press",
      "smith low-incline press": "smith-low-incline-press",
      "cable upper-chest fly": "cable-upper-chest-fly",
      "cable fly low-to-high": "cable-upper-chest-fly",
      "cable fly": "cable-fly",
      "flat barbell bench": "flat-bench",
      "flat bench (technique)": "technique-flat-bench",
      "db flat press": "landmine-or-db-press",
      "incline db press": "landmine-or-db-press",
      "reverse fly": "optional-face-pulls",
      "reverse pec deck": "optional-face-pulls",
      "face pull": "face-pulls-warmup",
      "dead bug": "dead-bugs",
      "dead bugs": "dead-bugs",
      "rdl": "hip-hinge",
      "farmer carry": "carry",
      "calf raise": "calf-raise",
      "sauna": "sauna",
      "zone 2 cardio": "zone-2-cardio"
    };
    const exerciseLookup = routines.reduce((acc, routine) => {
      routine.exercises.forEach((exercise) => {
        const key = exercise.name.trim().toLowerCase();
        acc[key] = exercise.id;
      });
      return acc;
    }, {});

    const normalizeSeries = (value) =>
      (value || "")
        .toString()
        .trim()
        .replace(/\//g, ",")
        .replace(/\s*,\s*/g, ", ")
        .replace(/\s+/g, " ");

    const normalizeKey = (value) =>
      (value || "")
        .toString()
        .trim()
        .toLowerCase()
        .replace(/\s+/g, " ");

    dataRows.forEach((row) => {
      const date = row[headerIndex.date]?.trim();
      const rawDayId = row[headerIndex.dayId]?.trim();
      const rawExerciseId = row[headerIndex.exerciseId]?.trim();
      if (!date || !rawDayId || !rawExerciseId) {
        return;
      }

      const mappedDayId =
        dayIdMap[normalizeKey(rawDayId)] || rawDayId.trim();
      const normalizedExerciseName = normalizeKey(rawExerciseId);
      const mappedExerciseId =
        exerciseNameMap[normalizedExerciseName] ||
        exerciseLookup[normalizedExerciseName] ||
        rawExerciseId.trim();

      const repsValue = normalizeSeries(row[headerIndex.reps]);
      const weightValue = normalizeSeries(row[headerIndex.weight]);
      const notesValue = (row[headerIndex.notes] || "").toString().trim();
      const minutesValue = (row[headerIndex.minutes] || "").toString().trim();
      const detailsValue = (row[headerIndex.details] || "").toString().trim();

      const entry = {
        sets: row[headerIndex.sets] || "",
        reps: repsValue,
        weight: weightValue,
        notes: notesValue,
        minutes: minutesValue,
        details: detailsValue,
        time: row[headerIndex.timestamp] || new Date().toISOString()
      };

      const logs = getLogs(store, date, mappedDayId, mappedExerciseId);
      logs.push(entry);
      setLogs(store, date, mappedDayId, mappedExerciseId, logs);
    });

    saveStore(store);
    renderSummary();
    renderExercises();
  };

  reader.readAsText(file);
}

function getLogs(store, dateValue, dayId, exerciseId) {
  return store?.[dateValue]?.[dayId]?.[exerciseId] ?? [];
}

function setLogs(store, dateValue, dayId, exerciseId, logs) {
  if (!store[dateValue]) {
    store[dateValue] = {};
  }
  if (!store[dateValue][dayId]) {
    store[dateValue][dayId] = {};
  }
  store[dateValue][dayId][exerciseId] = logs;
}

function getMergedLogs(store, dateValue, exerciseId) {
  const dayEntries = store?.[dateValue] ?? {};
  const merged = [];

  Object.entries(dayEntries).forEach(([dayId, exerciseEntries]) => {
    const logs = exerciseEntries?.[exerciseId] ?? [];
    logs.forEach((entry, index) => {
      merged.push({
        dayId,
        index,
        entry
      });
    });
  });

  merged.sort((a, b) => {
    if (a.entry.time && b.entry.time) {
      return a.entry.time.localeCompare(b.entry.time);
    }
    return 0;
  });

  return merged;
}

function getActiveRoutine() {
  const selectedId = daySelect.value || routines[0].id;
  return routines.find((routine) => routine.id === selectedId) ?? routines[0];
}

function renderSummary() {
  const routine = getActiveRoutine();
  dayTitle.textContent = `${routine.label} — ${routine.title}`;

  summary.innerHTML = "";
  if (routine.warmup) {
    const warmup = document.createElement("p");
    warmup.textContent = `Warm-up: ${routine.warmup}`;
    summary.append(warmup);
  }

  if (routine.dayNotes?.length) {
    const list = document.createElement("ul");
    routine.dayNotes.forEach((note) => {
      const item = document.createElement("li");
      item.textContent = note;
      list.append(item);
    });
    summary.append(list);
  }
}

function handleClear(routineId, exercise, container, form) {
  const store = loadStore();
  const dateValue = dateInput.value;
  const dayEntries = store?.[dateValue] ?? {};
  Object.keys(dayEntries).forEach((dayId) => {
    if (dayEntries?.[dayId]?.[exercise.id]) {
      setLogs(store, dateValue, dayId, exercise.id, []);
    }
  });
  saveStore(store);
  form.reset();
  renderLogsWithLayout(routineId, exercise, container);
}

function getLogLayout(exercise) {
  if (exercise.logType === "cardio") {
    return { columns: ["Minutes", "Details"], fields: ["minutes", "details"] };
  }
  if (exercise.logType === "minutes") {
    return { columns: ["Minutes"], fields: ["minutes"] };
  }
  return {
    columns: ["Sets", "Reps", "Weight", "Notes"],
    fields: ["sets", "reps", "weight", "notes"]
  };
}

function getGridTemplate(columnsCount) {
  if (columnsCount === 1) {
    return "140px 40px";
  }
  if (columnsCount === 2) {
    return "120px 1fr 40px";
  }
  if (columnsCount === 3) {
    return "90px 1fr 1fr 40px";
  }
  return "52px 70px 90px 1fr 40px";
}

function renderLogsWithLayout(routineId, exercise, container) {
  const store = loadStore();
  const dateValue = dateInput.value;
  const logs = getMergedLogs(store, dateValue, exercise.id);
  const layout = getLogLayout(exercise);
  const gridTemplate = getGridTemplate(layout.columns.length);

  container.innerHTML = "";

  if (!logs.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "No entries yet for this date.";
    container.append(empty);
    return;
  }

  logs.forEach((logItem) => {
    const { entry, dayId, index } = logItem;
    const row = document.createElement("div");
    row.className = "log-row";
    row.style.gridTemplateColumns = gridTemplate;
    const cells = layout.fields
      .map((field) => `<span>${entry[field] || "—"}</span>`)
      .join("");
    row.innerHTML = `
      ${cells}
      <button type="button" data-index="${index}">✕</button>
    `;

    row.querySelector("button").addEventListener("click", () => {
      const sourceLogs = getLogs(store, dateValue, dayId, exercise.id);
      const updated = [...sourceLogs];
      updated.splice(index, 1);
      setLogs(store, dateValue, dayId, exercise.id, updated);
      saveStore(store);
      renderLogsWithLayout(routineId, exercise, container);
    });

    container.append(row);
  });
}

function buildCustomForm(form, exercise) {
  if (exercise.logType !== "cardio" && exercise.logType !== "minutes") {
    return false;
  }

  const detailField =
    exercise.logType === "cardio"
      ? `<label>
          Details
          <input name="details" type="text" placeholder="Bike, treadmill, pace" />
        </label>`
      : "";

  form.innerHTML = `
    <div class="field-row">
      <label>
        Minutes
        <input name="minutes" type="number" min="1" step="1" placeholder="30" required />
      </label>
      ${detailField}
    </div>
    <div class="actions">
      <button type="submit">Log session</button>
      <button type="button" class="clear-btn">Clear all</button>
    </div>
  `;

  return true;
}

function renderExercises() {
  const routine = getActiveRoutine();
  grid.innerHTML = "";

  if (!routine.exercises.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "No exercises listed for this day.";
    grid.append(empty);
    return;
  }

  routine.exercises.forEach((exercise) => {
    const card = template.content.cloneNode(true);
    const cardEl = card.querySelector(".card");
    cardEl.dataset.exerciseId = exercise.id;

    const badge = card.querySelector(".badge");
    if (exercise.optional) {
      badge.textContent = "Optional";
      badge.classList.add("optional");
    } else if (exercise.target) {
      badge.textContent = exercise.target;
    } else {
      badge.style.display = "none";
    }

    const restText = exercise.rest ? ` · Rest: ${exercise.rest}` : "";
    card.querySelector(".exercise-name").textContent = exercise.name;
    card.querySelector(".exercise-meta").textContent = `${exercise.prescription}${exercise.target ? ` · ${exercise.target}` : ""}${restText}`;
    card.querySelector(".exercise-notes").textContent = exercise.cues;

    const form = card.querySelector(".log-form");
    const rows = card.querySelector(".log-rows");
    const header = card.querySelector(".log-table-header");
    buildCustomForm(form, exercise);
    const clearBtn = card.querySelector(".clear-btn");
    const layout = getLogLayout(exercise);
    const gridTemplate = getGridTemplate(layout.columns.length);

    header.innerHTML = "";
    header.style.gridTemplateColumns = gridTemplate;
    layout.columns.forEach((column) => {
      const span = document.createElement("span");
      span.textContent = column;
      header.append(span);
    });
    header.append(document.createElement("span"));

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      let entry = { time: new Date().toISOString() };

      if (exercise.logType === "cardio" || exercise.logType === "minutes") {
        entry = {
          ...entry,
          minutes: (formData.get("minutes") || "").toString().trim(),
          details: (formData.get("details") || "").toString().trim()
        };
      } else {
        const repsRaw = (formData.get("reps") || "").toString().trim();
        const weightRaw = (formData.get("weight") || "").toString().trim();
        const setsRaw = (formData.get("sets") || "").toString().trim();
        let repsValue = repsRaw;
        let setsValue = setsRaw;
        let weightValue = weightRaw;
        let repsCount = 0;
        let weightCount = 0;

        if (repsRaw.includes(",")) {
          const repsList = repsRaw
            .split(",")
            .map((value) => value.trim())
            .filter(Boolean);
          repsValue = repsList.join(", ");
          repsCount = repsList.length;
        } else if (!setsValue) {
          setsValue = "1";
        }

        if (weightRaw.includes(",")) {
          const weightList = weightRaw
            .split(",")
            .map((value) => value.trim())
            .filter(Boolean);
          weightValue = weightList.join(", ");
          weightCount = weightList.length;
        }

        if (!setsValue || setsValue === "1") {
          const derivedCount = Math.max(repsCount, weightCount);
          if (derivedCount > 0) {
            setsValue = derivedCount.toString();
          }
        }

        entry = {
          ...entry,
          sets: setsValue,
          reps: repsValue,
          weight: weightValue,
          notes: formData.get("notes")
        };
      }

      const store = loadStore();
      const dateValue = dateInput.value;
      const logs = getLogs(store, dateValue, routine.id, exercise.id);
      logs.push(entry);
      setLogs(store, dateValue, routine.id, exercise.id, logs);
      saveStore(store);
      form.reset();
      renderLogsWithLayout(routine.id, exercise, rows);
    });

    clearBtn.addEventListener("click", () => {
      handleClear(routine.id, exercise, rows, form);
    });

    renderLogsWithLayout(routine.id, exercise, rows);
    grid.append(card);
  });
}

function populateDaySelect() {
  daySelect.innerHTML = "";
  routines.forEach((routine) => {
    const option = document.createElement("option");
    option.value = routine.id;
    option.textContent = `${routine.label} — ${routine.title}`;
    daySelect.append(option);
  });
  daySelect.value = routines[0].id;
}

populateDaySelect();
renderSummary();
renderExercises();

daySelect.addEventListener("change", () => {
  renderSummary();
  renderExercises();
});

dateInput.addEventListener("change", () => {
  renderExercises();
});

exportButton.addEventListener("click", () => {
  exportCsv();
});

importInput.addEventListener("change", (event) => {
  const file = event.target.files?.[0];
  if (!file) {
    return;
  }
  importCsv(file);
  event.target.value = "";
});
