import { Routes, Route } from "react-router-dom";

import Home from "./Home/Home";

import "../css/styles.scss";

export default function MainComponent() {
  return (
    <div className="main">
      <Routes>
        <Route path="/page-not-found" element={<h1>Page Not Found</h1>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
