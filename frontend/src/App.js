import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Login from "./components/auth/Login";
import Login_Successfull from "./components/auth/Login_Successfull";
import Register from "./components/auth/Register";
import Register_Successfull from "./components/auth/Register_Successfull";
import Reset_Password from "./components/auth/Reset_Password";
import Reset_Password_Successfull from "./components/auth/Reset_Password_Successfull";
import Register_Organizer from "./components/auth/Register_Organizer";
import Register_Organizer_Successfull from "./components/auth/Register_Organizer_Successfull";
import Search_HomePage from "./components/search/page/Search_HomePage";
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
        <Route path="/reset-password" element={<Reset_Password />} />
        <Route
          path="/reset-password-success"
          element={<Reset_Password_Successfull />}
        />
        <Route path="/register-organizer" element={<Register_Organizer />} />
        <Route
          path="/register-organizer-success"
          element={<Register_Organizer_Successfull />}
        />
        <Route path="/search" element={<Search_HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
