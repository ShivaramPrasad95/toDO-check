import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddTask from "../../src/components/AddTask.jsx";
import CardDetail from "../../src/components/CardDetail.jsx";
import Contact from "../../src/components/Contact.jsx";
import MockApi from "../../src/MockApi.jsx";
import StatePovider from "../../src/store/StateProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StatePovider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/addTask" element={<AddTask />} />
          <Route path="/card/:title" element={<CardDetail />} />
          <Route path="/check" element={<MockApi />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </StatePovider>
  </React.StrictMode>
);
