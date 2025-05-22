import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Authentication from "./pages/Authentication.jsx";
import Navbar from "./components/Navbar/MainSection.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="wrapper h-screen">
        <Navbar />
        <div className="inner-wrapper flex flex-col items-center justify-center  min-h-[calc(100vh-56px)]">
          <Routes>
            <Route path="/" element={<Authentication />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
