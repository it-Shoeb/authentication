import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";

export default function LoginForm() {
  const navigate = useNavigate();
  const [User, setUser] = useState({
    email: "",
    password: "",
  });

  const handleFormData = (e) => {
    setUser({ ...User, [e.target.name]: e.target.value });
  };

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/authentication/login", { ...User });
      console.log(response);
      if (!response.data.success) {
        toast.error(response.data.message);
      } else {
        toast.success(response.data.message);
        navigate("/home");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
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
        <input
          type="text"
          placeholder="Enter Your email"
          name="email"
          value={User.email}
          onChange={(e) => {
            handleFormData(e);
          }}
        />
        <input
          type="text"
          placeholder="Enter Your password"
          name="password"
          value={User.password}
          onChange={(e) => {
            handleFormData(e);
          }}
        />
        <input type="submit" value="Login" />
        <Link to={"/register"}>
          Don't have an account?{" "}
          <strong className="font-bold text-blue-400">Create account</strong>
        </Link>

        <Link to={"/forget-password"} className="font-bold text-blue-400">
          Forget Password
        </Link>
      </form>
    </>
  );
}
