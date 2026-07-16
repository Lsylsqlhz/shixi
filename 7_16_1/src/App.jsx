import { useEffect, useState } from "react";

function App() {
  // 1. 定义状态：存储建议内容和加载状态
  const [advice, setAdvice] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // 2. 副作用：组件挂载时获取数据
  useEffect(() => {
    // 定义异步函数获取数据
    async function getAdvice() {
      try {
        // 发起请求
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();

        // 更新状态 (注意：API返回结构通常是 data.slip.advice)
        setAdvice(data.slip.advice);
      } catch (error) {
        console.error("获取建议失败:", error);
      }
    }

    // 执行函数
    getAdvice();
  }, []); // 依赖数组为空，确保只在挂载时运行一次

  return (
    <>
      <h1>Advice</h1>
      {/* 显示获取到的建议 */}
      {/* <div>{advice}</div> */}
      <input type="text" value={advice} readOnly />
      <button onClick={() => setIsLoading(true)}>获取建议</button>
      {isLoading && <div>加载中...</div>}
    </>
  );
}

export default App;
