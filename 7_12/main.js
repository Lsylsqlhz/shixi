function AppContent() {
  // 定义状态
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const usernameClass = username.length <= 5 ? "input-error" : "input";
  const passwordClass = password.length <= 5 ? "input-error" : "input";
  // 处理提交逻辑
  function handleSubmit(event) {
    event.preventDefault(); // 阻止表单默认刷新页面的行为

    if (usernameClass === "input-error" || passwordClass === "input-error") {
      //alert("用户名和密码长度必须大于 5 位！");
      return; // 如果有错误，直接终止函数，不执行后续登录逻辑
    }

    // 验证通过后的逻辑
    console.log("登录成功:", username);
    alert(`欢迎回来, ${username}!`);
  }

  const containerStyle = {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #5e3030",
    borderRadius: "8px",
    fontFamily: "Arial, sans-serif",
  };

  // JSX 结构
  return (
    <main style={containerStyle}>
      <h2>用友</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          textAlign: "center",
        }}
      >
        <input
          className={usernameClass}
          type="text"
          placeholder="Username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <br />
        <input
          className={passwordClass}
          type="password"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />

        <br />
        <button type="submit" style={{ margin: "1rem" }}>
          Login
        </button>
      </form>
    </main>
  );
}

// 渲染组件到页面
const appEl = document.querySelector("#app");
const root = ReactDOM.createRoot(appEl);

root.render(<AppContent />);
