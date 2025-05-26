import React, { useState } from "react";
import { Link, replace, useNavigate } from "react-router-dom";
import api from "../../../services/api";
import { toast } from "react-toastify";

export default function CheckEmail() {
  const [VerifyEmail, setVerifyEmail] = useState(false);
  const [VerifyOTP, setVerifyOTP] = useState(false);

  const [User, setUser] = useState({ email: "" });
  const navigate = useNavigate();

  const handleFormData = async (e) => {
    setUser({ email: e.target.value });
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
        {/* {VerifyOTP && (
            
        )} */}
            <div className="">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            id="email"
            value={User.email}
            onChange={(e) => {
                handleFormData(e);
            }}
            />
        </div>

            {VerifyEmail && (
                <>

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
        <div className="">
          <label htmlFor="newPassword">newPassword</label>
          <input
            type="text"
            name="newPassword"
            placeholder="Enter your newPassword"
            id="newPassword"
            value={User.newPassword}
            onChange={(e) => {
                handleFormData(e);
            }}
            />
        </div>
            </>
        )}
        <input type="submit" value={"Reset Password"} />
        <Link to={"/login"}>Back to Login</Link>
      </form>
    </>
  );
}
