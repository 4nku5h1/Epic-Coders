import { Routes, Route } from "react-router-dom";

import Home from "./Home/Home";
import ServiceDetail from "./Service/ServiceDetail/ServiceDetail";

import "../css/styles.scss";
import SoftwareServices from "./Service/SoftwareServices/SoftwareServices";

export default function MainComponent() {
  return (
    <div className="main">
      <Routes>
        <Route path="/page-not-found" element={<h1>Page Not Found</h1>} />
        <Route path="/" element={<Home />} />

        <Route
          path="/software-development-services"
          element={<SoftwareServices />}
        />
        <Route path="/image-editing-services/:id" element={<ServiceDetail />} />
      </Routes>
    </div>
  );
}
