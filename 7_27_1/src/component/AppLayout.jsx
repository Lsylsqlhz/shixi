import { Outlet, Link } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <nav>
        <Link to="/">首页</Link>
        <Link to="/about">关于</Link>
      </nav>
      <main>
        <Outlet /> {/* 这里渲染子路由 */}
      </main>
    </div>
  );
}
export default AppLayout;
