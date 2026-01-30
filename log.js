const storageKey = "workoutlog.v1";
const rowsEl = document.getElementById("log-rows");
const summaryEl = document.getElementById("log-summary");
const searchInput = document.getElementById("search");
const dateFilter = document.getElementById("date-filter");

const dayLabels = {
  "day-1": "Day 1",
  "day-2": "Day 2",
  "day-3": "Day 3",
  "day-4": "Day 4",
  "day-5": "Day 5",
  "day-6": "Day 6"
};

const exerciseLabels = {
  "face-pulls-warmup": "Face Pulls (Warm-up)",
  "low-incline-bb-press": "Low-Incline Barbell Press (20-30°)",
  "smith-low-incline-press": "Smith Low-Incline Press",
  "cable-upper-chest-fly": "Cable Upper-Chest Fly (low-to-high)",
  "db-lateral-raise": "DB Lateral Raise",
  "overhead-cable-tri-ext": "Overhead Cable Triceps Extension",
  "dead-bugs": "Dead Bugs",
  sauna: "Sauna",
  "back-squat": "Back Squat (Top Sets)",
  "back-off-squat": "Back-Off Squats",
  "db-split-squat": "DB Split Squat",
  "ham-curl": "Seated or Lying Ham Curl",
  "pallof-press": "Pallof Press",
  "neutral-grip-pulldown": "Neutral-Grip Pulldown",
  "chest-supported-row": "Chest-Supported Row",
  "straight-arm-pulldown": "Straight-Arm Pulldown",
  "lat-raise": "Cable or Machine Lateral Raise",
  "overhead-tri-ext": "Overhead Triceps Extension",
  "technique-flat-bench": "Technique Flat Bench",
  "optional-bicep-curl": "Bicep Curl",
  "optional-pushdowns": "Pushdowns (Pump)",
  "optional-face-pulls": "Face Pulls / Reverse Fly",
  "side-plank": "Side Plank",
  "zone-2-cardio": "Zone 2 Cardio",
  "flat-bench": "Flat Bench / Low-Incline BB",
  "smith-incline-press": "Smith Incline Press (20-25°)",
  "landmine-or-db-press": "Landmine Press or Incline DB Press (30°)",
  "cable-fly": "Cable Fly (short ROM, squeeze)",
  "lateral-raise-finisher": "Lateral Raise Finisher",
  "tempo-squat": "Tempo Squat / Hack Squat",
  "hip-hinge": "Hip Hinge (RDL / Back Extension)",
  "calf-raise": "Calf Raise Machine",
  carry: "Farmer Carry",
  "optional-seated-ham-curl": "Seated Ham Curls"
};

function loadStore() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) ?? {};
  } catch (error) {
    return {};
  }
}

function buildDetails(entry) {
  const parts = [];
  if (entry.sets || entry.reps || entry.weight) {
    parts.push(`Sets: ${entry.sets || "—"}`);
    parts.push(`Reps: ${entry.reps || "—"}`);
    parts.push(`Weight: ${entry.weight || "—"}`);
  }
  if (entry.minutes) {
    parts.push(`Minutes: ${entry.minutes}`);
  }
  if (entry.details) {
    parts.push(`Details: ${entry.details}`);
  }
  if (entry.notes) {
    parts.push(`Notes: ${entry.notes}`);
  }
  return parts.join(" · ");
}

function collectRows(store) {
  const rows = [];
  Object.entries(store).forEach(([date, dayEntries]) => {
    Object.entries(dayEntries || {}).forEach(([dayId, exerciseEntries]) => {
      Object.entries(exerciseEntries || {}).forEach(([exerciseId, logs]) => {
        (logs || []).forEach((entry) => {
          rows.push({
            date,
            dayId,
            exerciseId,
            entry
          });
        });
      });
    });
  });

  return rows.sort((a, b) => {
    if (a.entry.time && b.entry.time) {
      return b.entry.time.localeCompare(a.entry.time);
    }
    if (a.date !== b.date) {
      return b.date.localeCompare(a.date);
    }
    return a.exerciseId.localeCompare(b.exerciseId);
  });
}

function render() {
  const store = loadStore();
  const rows = collectRows(store);
  const query = searchInput.value.trim().toLowerCase();
  const dateValue = dateFilter.value;

  const filtered = rows.filter((row) => {
    if (dateValue && row.date !== dateValue) {
      return false;
    }
    if (!query) {
      return true;
    }

    const exerciseLabel = exerciseLabels[row.exerciseId] || row.exerciseId;
    const haystack = [
      row.date,
      row.dayId,
      dayLabels[row.dayId] || row.dayId,
      row.exerciseId,
      exerciseLabel,
      row.entry.sets,
      row.entry.reps,
      row.entry.weight,
      row.entry.minutes,
      row.entry.details,
      row.entry.notes
    ]
      .map((value) => (value ?? "").toString().toLowerCase())
      .join(" ");

    return haystack.includes(query);
  });

  summaryEl.innerHTML = "";
  const count = document.createElement("p");
  count.textContent = `${filtered.length} entries shown.`;
  summaryEl.append(count);

  rowsEl.innerHTML = "";
  if (!filtered.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "No logs found.";
    rowsEl.append(empty);
    return;
  }

  filtered.forEach((row) => {
    const entry = document.createElement("div");
    entry.className = "log-full-row";

    const dateSpan = document.createElement("span");
    dateSpan.textContent = row.date;
    entry.append(dateSpan);

    const daySpan = document.createElement("span");
    daySpan.textContent = dayLabels[row.dayId] || row.dayId;
    entry.append(daySpan);

    const exerciseSpan = document.createElement("span");
    exerciseSpan.textContent = exerciseLabels[row.exerciseId] || row.exerciseId;
    entry.append(exerciseSpan);

    const detailSpan = document.createElement("span");
    detailSpan.textContent = buildDetails(row.entry);
    entry.append(detailSpan);

    rowsEl.append(entry);
  });
}

render();

searchInput.addEventListener("input", render);
dateFilter.addEventListener("change", render);
