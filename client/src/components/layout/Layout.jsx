import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
// import ProtectedLoader from "../../components/ProtectedLoader";

export default function Layout() {
  return (
    <>
      <div className="flex flex-col gap-4 border">
        <Navbar />
        {/* <ProtectedLoader> */}
          <Outlet />
        {/* </ProtectedLoader> */}
      </div>
    </>
  );
}
