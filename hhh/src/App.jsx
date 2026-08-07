import React from "react";
import "./App.css";

export default function App() {
  const features = [
    {
      title: "智能分析",
      desc: "自动整理数据，快速生成清晰的业务洞察。",
    },
    {
      title: "高效协作",
      desc: "支持团队实时同步任务进度，减少沟通成本。",
    },
    {
      title: "安全可靠",
      desc: "采用多层权限控制，保护你的数据和工作流。",
    },
  ];

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">NovaApp</div>

        <div className="nav-links">
          <a href="#features">功能</a>
          <a href="#pricing">价格</a>
          <a href="#about">关于我们</a>
        </div>

        <button className="nav-button">开始使用</button>
      </nav>

      <main className="hero">
        <section className="hero-content">
          <p className="eyebrow">AI 工作效率平台</p>

          <h1>让复杂工作变得更简单</h1>

          <p className="subtitle">
            用一个现代化的 React 界面展示产品价值，适合作为官网首页、SaaS
            落地页或管理系统欢迎页。
          </p>

          <div className="hero-actions">
            <button className="primary-button">免费体验</button>
            <button className="secondary-button">查看演示</button>
          </div>
        </section>

        <section className="hero-card">
          <div className="card-header">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="chart">
            <div style={{ height: "45%" }}></div>
            <div style={{ height: "70%" }}></div>
            <div style={{ height: "55%" }}></div>
            <div style={{ height: "85%" }}></div>
            <div style={{ height: "62%" }}></div>
          </div>

          <div className="metric">
            <strong>+38%</strong>
            <span>本周效率提升</span>
          </div>
        </section>
      </main>

      <section id="features" className="features">
        {features.map((item) => (
          <article className="feature-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
