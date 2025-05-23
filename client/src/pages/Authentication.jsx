import React from "react";

import LoginForm from "../components/forms/LoginForm";
import RegisterationForm from "../components/forms/RegisterationForm";

export default function Authentication() {

  return (
    <>
      <div className="flex items-center justify-center wrapper border-2 w-full h-[calc(100vh-56px)]">
        <div className="form-wrapper ronuded-xl shadow-xl border h-full w-full flex items-center justify-center flex-wrap">
          <div className="wrapper flex-1 h-full w-full flex items-center justify-center p-6">
            <RegisterationForm />
          </div>
          <div className="side-space bg-black flex-1 h-full w-full flex items-center justify-center rounded-tl-4xl p-6">

          </div>
        </div>
      </div>
    </>
  );
}
