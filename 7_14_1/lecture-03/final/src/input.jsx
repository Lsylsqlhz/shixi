// 定义一个通用的 Input 组件
function Input({ value, onChange, className, placeholder, type = "text" }) {
  return (
    <div className="input-container">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        className={className} // 动态传入样式类名
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
export default Input;
