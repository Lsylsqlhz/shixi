const { useState } = React;

// 初始数据
const initialTodos = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Learn Next", completed: false },
  { id: 3, text: "Learn Nuxt", completed: false },
  { id: 4, text: "Learn Svelte", completed: true }, // 默认完成，会沉底
];

function TodoApp() {
  const [todos, setTodos] = useState(initialTodos);
  const [inputValue, setInputValue] = useState("");

  // --- 功能函数 ---

  const handleAdd = () => {
    if (!inputValue.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const toggleTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  // 排序逻辑：未完成的在前，已完成的在后
  const sortedTodos = [...todos].sort((a, b) => {
    if (a.completed === b.completed) return 0;
    return a.completed ? 1 : -1;
  });

  return (
    <div className="app-container">
      <h1>React Todo List</h1>

      {/* 输入区域 */}
      <div className="input-group">
        <input
          type="text"
          placeholder="Add item into as todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      {/* 列表区域 */}
      <ul className="todo-list">
        {sortedTodos.map((todo) => (
          <li key={todo.id} className="todo-item">
            {/* 左侧：复选框 + 文字 */}
            <label className="todo-label">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  color: todo.completed ? "#888" : "#000",
                }}
              >
                {todo.text}
              </span>
            </label>

            {/* 右侧：删除按钮 */}
            <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<TodoApp />);
