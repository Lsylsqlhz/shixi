import useCurrentTime from "./useCurrentTime"; // 引入自定义 Hook

function Time() {
  // 调用 Hook 获取当前时间
  const currentTime = useCurrentTime();

  return <p>当前时间: {currentTime.toLocaleTimeString()}</p>;
}

export default Time;
