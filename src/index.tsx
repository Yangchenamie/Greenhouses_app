import React from "react";
import ReactDOM from "react-dom/client";
import "./index.less";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// antd-mobile
import { ConfigProvider } from "antd-mobile";
import zhCN from "antd-mobile/es/locales/zh-CN";

// 改变REM换算比例
import "lib-flexible";

// 处理最大宽度
(function () {
  const handleMax = function handleMax() {
    let html = document.documentElement,
      root = document.getElementById("root"),
      deviceW = html.clientWidth;

    root!.style.maxWidth = "428px";
    if (deviceW >= 428) {
      html.style.fontSize = "42.8px";
    }
  };
  handleMax();
})();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ConfigProvider locale={zhCN}>
    <App/>
  </ConfigProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
