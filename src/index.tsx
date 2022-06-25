import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import "./index.css";

import Exercises from "./Pages/Exercises/Exercises";
import Home from "./Pages/Home/Home";

const App = () => {
  return (
    <div style={{ backgroundColor: " #fcf7f7" }}>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercises" element={<Exercises />} />
        </Routes>
        <div style={{ flex: 1 }} />
        <Footer />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
