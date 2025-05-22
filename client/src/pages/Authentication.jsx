import React from "react";
import Form from "../components/Form/MainSection";

export default function Authentication() {
  return (
    <>
      <div className="flex items-center justify-center wrapper border-2 w-full h-[calc(100vh-56px)]">
        <div className="form-wrapper sm:w-1/2 md:w-[60%] lg:w-[40%] p-4 ronuded-xl shadow-xl">
          <Form />
        </div>
      </div>
    </>
  );
}
