import React, { useState } from "react";
import { Link, replace, useNavigate } from "react-router-dom";
import api from "../../../services/api";
import { toast } from "react-toastify";

export default function CheckOTP() {
  const [User, setUser] = useState({ OTP: "" });
  const navigate = useNavigate();

  const handleFormData = async (e) => {
    setUser({ OTP: e.target.value });
  };

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/authentication/send-otp", { ...User });
      if (response.data.success) {
        navigate("/login/checkotp", { replace: true });
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
      <form
        action=""
        onSubmit={(e) => {
          handleForm(e);
        }}
      >
        Forget Password
        <div className="">
          <label htmlFor="OTP">OTP</label>
          <input
            type="text"
            name="OTP"
            placeholder="Enter your OTP"
            id="OTP"
            value={User.OTP}
            onChange={(e) => {
              handleFormData(e);
            }}
          />
        </div>
        <input type="submit" value={"Reset Password"} />
        <Link to={"/login"}>Back to Login</Link>
      </form>
    </>
  );
}
