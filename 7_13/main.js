// main.js

// 移除这一行: import { useInputValidation } from "./useInputValidation";

function AppContent() {
  // 现在可以直接使用全局的 useInputValidation 函数了
  const usernameProps = useInputValidation("", 6);
  const passwordProps = useInputValidation("", 8);

  function handleSubmit(event) {
    event.preventDefault();

    if (!usernameProps.isValid || !passwordProps.isValid) {
      alert("输入内容长度不符合要求！");
      return;
    }

    console.log("登录成功:", usernameProps.value);
    alert(`欢迎回来, ${usernameProps.value}!`);
  }

  return (
    <main style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Username:</label>
          <br />
          <input
            type="text"
            {...usernameProps}
            placeholder="At least 6 chars"
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Password:</label>
          <br />
          <input
            type="password"
            {...passwordProps}
            placeholder="At least 8 chars"
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<AppContent />);
