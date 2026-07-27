import { useState, useEffect } from "react";

// 自定义 Hook：获取实时时间
function useCurrentTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // 清理函数：在组件卸载时清除定时器
    return () => {
      console.log("👋 Time 组件已卸载，定时器正在清除...");
      clearInterval(timerId);
    };
  }, []);

  // 返回当前的时间对象
  return currentTime;
}

export default useCurrentTime;
