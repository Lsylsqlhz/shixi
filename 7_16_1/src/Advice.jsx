import useAdvice from "./useAdvice"; // 引入自定义 Hook

function Advice() {
  // 从 Hook 中解构出所需的状态和方法
  const { advice, isLoading, fetchAdvice } = useAdvice();

  return (
    <>
      {/* 显示获取到的建议 */}
      <input type="text" value={advice} readOnly />

      {/* 按钮点击时获取新建议 */}
      <button onClick={fetchAdvice} disabled={isLoading}>
        {isLoading ? "加载中..." : "获取新建议"}
      </button>
    </>
  );
}

export default Advice;
