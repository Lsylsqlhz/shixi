import React from "react";
// 引入刚才定义的 Hook，路径需根据你的实际文件结构调整
import { useInputValidation } from "./hooks/useInputValidation";

function AppContent() {
  // 1. 调用 Hook：用户名要求至少 6 位
  const usernameProps = useInputValidation("", 6);

  // 2. 调用 Hook：密码要求至少 8 位
  const passwordProps = useInputValidation("", 8);

  function handleSubmit(event) {
    event.preventDefault();

    // 3. 直接使用 Hook 返回的 isValid 进行判断
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
          {/* 4. 使用展开运算符 ... 将 value, onChange, className 一次性传入 */}
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

export default AppContent;
