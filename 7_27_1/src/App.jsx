import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import AppLayout from "./component/AppLayout";
import Home from "./component/Home";
import About from "./component/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 父路由用 path="/" 并包裹子路由 */}
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
