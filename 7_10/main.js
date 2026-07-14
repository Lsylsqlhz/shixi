function AppContent() {
  // 1. 定义状态：text 存储当前的文本，setText 用来更新它
  // 初始值设为空字符串 ""
  const [text, setText] = React.useState("");

  return (
    <main style={{ padding: "20px", fontFamily: "Arial" }}>
      <h3>请输入内容：</h3>

      {/* 2. 输入区域 */}
      <input
        type="text"
        placeholder="在这里打字..."
        value={text}
        onChange={(event) => {
          // 当用户打字时，获取输入框最新的值，并更新 state
          setText(event.target.value);
        }}
        style={{
          padding: "8px",
          fontSize: "16px",
          width: "100%",
          boxSizing: "border-box",
        }}
      />

      {/* 3. 显示区域 */}
      <div style={{ marginTop: "20px", color: "#333" }}>
        <p>你当前输入的是：</p>
        <strong style={{ fontSize: "18px", color: "blue" }}>{text}</strong>
      </div>
    </main>
  );
}

// 下面的渲染逻辑保持你原本的写法即可
const appEl = document.querySelector("#app");
const root = ReactDOM.createRoot(appEl);
root.render(<AppContent />);
