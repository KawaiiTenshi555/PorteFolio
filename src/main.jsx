import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import App from "./App";
import About from "./page/about";
import Project from "./page/project";
import ErrorPage from "./page/404";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/projet" element={<Project />} />
      <Route path="/404" element={<ErrorPage />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  </Router>
);
