import DueBadge from "./DueBadge";


export default function TaskItem({ task, onToggle, onDelete }) {
return (
<li className="task" key={task.id}>
<label className="taskMain">
{/* 🟩 PART B (Anchor): Checkbox exists; students should wire onToggle(task.id) */}
    <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => onToggle(task.id)}
    />


{/* 🟩 PART B (Anchor): Only render <DueBadge /> if task is NOT done (logical &&) */}

    {!task.isDone && task.dueDate && (
        <DueBadge dueDate={task.dueDate} />
    )}

    <span className={`title ${task.isDone ? 'done' : ''}`}>
            {task.title}
        </span>
</label>


{/* 🟩 PART B (Anchor): Delete button should call onDelete(task.id) */}
<button
    className="ghost"
    aria-label="Delete task"
    onClick={() => onDelete(task.id)}
    type="button"
>
✕
</button>
</li>
);
}