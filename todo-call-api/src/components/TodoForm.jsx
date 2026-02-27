import { useState } from "react";

export default function TodoForm({ onAdd }) {
  const [title, setTitle] = useState("");

  function submit(e) {
    e.preventDefault();
    const value = title.trim();
    if (!value) return;
    onAdd(value);
    setTitle("");
  }

  return (
    <form onSubmit={submit} style={{ display: "flex", gap: 8, margin: "16px 0" }}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add todo..."
        style={{ flex: 1, padding: 10 }}
      />
      <button type="submit" style={{ padding: "10px 14px" }}>
        Add
      </button>
    </form>
  );
}