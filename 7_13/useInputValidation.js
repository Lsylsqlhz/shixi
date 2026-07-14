// useInputValidation.js

// 移除 'export' 关键字
function useInputValidation(initialValue = "", minLength = 6) {
  const [value, setValue] = React.useState(initialValue);

  // 核心逻辑：判断是否有效
  const isValid = value.length >= minLength;

  // 根据有效性返回对应的 CSS 类名
  const className = isValid ? "input" : "input-error";

  // 统一的变更处理函数
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange: handleChange,
    className,
    isValid,
  };
}
