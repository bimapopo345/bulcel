import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Login from "./components/auth/Login";
import Login_Successfull from "./components/auth/Login_Successfull";
import Register from "./components/auth/Register";
import Register_Successfull from "./components/auth/Register_Successfull";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login-success" element={<Login_Successfull />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-success" element={<Register_Successfull />} />
      </Routes>
    </Router>
  );
}

export default App;
