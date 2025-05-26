import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Authentication from "./pages/Authentication.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import LoginForm from "./components/forms/LoginForm.jsx";
import RegisterationForm from "./components/forms/RegisterationForm.jsx";
import { AuthContextProvider } from "./context/AuthContextProvider.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import AuthRoute from "./components/AuthRoute.jsx";
import CheckEmail from "./components/common/forget-password/CheckEmail.jsx";
import CheckOTP from "./components/common/forget-password/CheckOTP.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<AuthRoute />}>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/login/checkemail" element={<CheckEmail />} />
          <Route path="/login/checkotp" element={<CheckOTP />} />
          <Route path="/register" element={<RegisterationForm />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
