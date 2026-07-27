import { useState, useEffect, useCallback } from "react";

// 自定义 Hook 负责处理数据获取逻辑
function useAdvice() {
  const [advice, setAdvice] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // 使用 useCallback 包裹，确保函数引用稳定，避免在依赖项中引起不必要的重复执行
  const fetchAdvice = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice(data.slip.advice);
    } catch (error) {
      console.error("获取建议失败:", error);
    } finally {
      setIsLoading(false);
    }
  }, []); // 依赖项为空，表示此函数在组件生命周期内不会改变

  // 在 Hook 内部处理组件挂载时的首次数据获取
  useEffect(() => {
    fetchAdvice();
  }, [fetchAdvice]);

  // 将状态和方法返回给组件使用
  return { advice, isLoading, fetchAdvice };
}

export default useAdvice;
