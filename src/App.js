import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./style/style.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Catedrilla from "./pages/Catedrilla";
import Abella from "./pages/Abella";
import Jayson from "./pages/Jayson";
import Vanessa from "./pages/Vanessa";
import Ronald from "./pages/Ronald";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/abella" element={<Abella />} />
        <Route path="/catedrilla" element={<Catedrilla />} />
        <Route path="/jayson" element={<Jayson />} />
        <Route path="/vanessa" element={<Vanessa />} />
        <Route path="/ronald" element={<Ronald />} />
      </Routes>
    </Router>
  );
};

export default App;
