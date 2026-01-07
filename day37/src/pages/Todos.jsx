import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import {
  getTodos,
  createTodo,
  toggleTodo,
  deleteTodo,
  updateTodo,
} from "../services/todo.service";
import UpdateTodoModal from "../components/UpdateTodoModal";

export default function Todos() {
  const { user, logout } = useAuth();
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [selected, setSelected] = useState(null);

  const fetchTodos = async () => {
    const data = await getTodos(user.uid);
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="p-4">
      <header className="flex justify-between">
        <h1>Todos</h1>
        <button onClick={logout}>Logout</button>
      </header>

      <input
        placeholder="New Todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={async (e) => {
          if (e.key === "Enter") {
            await createTodo(user.uid, title);
            setTitle("");
            fetchTodos();
          }
        }}
      />

      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <span
              onClick={() => setSelected(t)}
              style={{ textDecoration: t.completed ? "line-through" : "" }}
            >
              {t.title}
            </span>
            <button onClick={() => toggleTodo(t.id, !t.completed)}>
              Toggle
            </button>
            <button onClick={() => deleteTodo(t.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {selected && (
        <UpdateTodoModal
          todo={selected}
          onSave={async (newTitle, save) => {
            if (save) {
              await updateTodo(selected.id, newTitle);
              fetchTodos();
              setSelected(null);
            }
          }}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}
