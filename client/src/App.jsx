import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Authentication from "./pages/Authentication.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import LoginForm from "./components/forms/LoginForm.jsx";
import RegisterationForm from "./components/forms/RegisterationForm.jsx";
import { AuthContextProvider } from "./context/AuthContextProvider.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterationForm />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
