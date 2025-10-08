function daysUntil(dateStr) {
  const today = new Date();
  const due = new Date(dateStr + "T00:00:00");
  today.setHours(0, 0, 0, 0);
  due.setHours(0, 0, 0, 0);
  const diff = Math.round((due - today) / (1000 * 60 * 60 * 24));
  return diff;
}


export default function DueBadge({ dueDate }) {
  // 🟩 PART C (Anchor):
  // 1) Call daysUntil(dueDate) → const d = ...
    const d = daysUntil(dueDate);

  // 2) Use a ternary chain to set the label:
    let label;
    let badgeClass = "badge";

  // d < 0 → "Overdue"
    if (d < 0) {
        label = "Overdue";
        badgeClass += " danger";

  // d === 0 → "Due today"
    } else if (d === 0) {
        label = "Due today";
        badgeClass += " warn";

  // d === 1 → "1 day remaining"
    } else if (d === 1) {
        label = "1 day remaining";

  // else → `${d} days remaining`
    } else {
        label = `${d} days remaining`;
    }

    // 3) Return <span className="badge"> with extra class:
  return <span className={badgeClass}>{label}</span>;
}