import { useState } from "react";
import "./App.css";
import Input from "./Input";
import Button from "./Button";
function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // 动态计算样式类名
  const usernameClass = username.length <= 5 ? "input-error" : "input";
  const passwordClass = password.length <= 5 ? "input-error" : "input";

  function handleSubmit(event) {
    event.preventDefault();

    if (usernameClass === "input-error" || passwordClass === "input-error") {
      return;
    }

    console.log("username: ", username);
    console.log("password: ", password);

    setUsername("");
    setPassword("");
  }

  return (
    <main>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
        {/* 使用通用 Input 组件替代原有的 username input */}
        <Input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={setUsername}
          className={usernameClass}
        />

        <br />

        {/* 使用通用 Input 组件替代原有的 password input */}
        <Input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={setPassword}
          className={passwordClass}
        />

        <br />

        <Button>
          <span style={{ color: "red" }}>Login</span>
        </Button>
        <Button>Register</Button>
      </form>
    </main>
  );
}

export default App;
