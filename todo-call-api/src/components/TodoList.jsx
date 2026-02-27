export default function TodoList({ todos, onToggle }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((t) => (
        <li key={t.id} style={{ display: "flex", gap: 10, padding: "8px 0" }}>
          <input
            type="checkbox"
            checked={!!t.completed}
            onChange={() => onToggle(t.id)}
          />
          <span style={{ textDecoration: t.completed ? "line-through" : "none" }}>
            {t.title}
          </span>
        </li>
      ))}
    </ul>
  );
}