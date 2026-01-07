export default function UpdateTodoModal({ todo, onSave, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div className="bg-white p-4 space-y-2">
        <input
          value={todo.title}
          onChange={(e) => onSave(e.target.value, false)}
        />
        <button onClick={() => onSave(todo.title, true)}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}
