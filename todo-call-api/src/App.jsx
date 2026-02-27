import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function loadTodos() {
      const res = await fetch(API_URL);
      const data = await res.json();
      setTodos(data.slice(0, 15));
    }
    loadTodos();
  }, []);

  function addTodo(title) {
    setTodos((prev) => [{ id: Date.now(), title, completed: false }, ...prev]);
  }

  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  return (
    <div style={{ maxWidth: 640, margin: "24px auto", padding: 16 }}>
      <h1>Todo Call API</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  );
}