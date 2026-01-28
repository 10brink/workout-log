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

    const haystack = [
      row.date,
      row.dayId,
      dayLabels[row.dayId] || row.dayId,
      row.exerciseId,
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
    entry.innerHTML = `
      <span>${row.date}</span>
      <span>${dayLabels[row.dayId] || row.dayId}</span>
      <span>${row.exerciseId}</span>
      <span>${buildDetails(row.entry)}</span>
    `;
    rowsEl.append(entry);
  });
}

render();

searchInput.addEventListener("input", render);
dateFilter.addEventListener("change", render);
