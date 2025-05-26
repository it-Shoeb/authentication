import React, { useContext, useState } from "react";

import { Link, useNavigate, redirect, replace } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";
import { AuthContext } from "../../context/AuthContextProvider";

export default function LoginForm() {
  const { setIsAuthenticated, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [UserLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handleFormData = (e) => {
    setUserLogin({ ...UserLogin, [e.target.name]: e.target.value });
  };

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/authentication/login", {
        ...UserLogin,
      });
      console.log(response);
      if (!response.data.success) {
        toast.error(response.data.message);
      } else {
        navigate("/home", { replace: true });
        setIsAuthenticated(true);
        // setUser(UserLogin);
        toast.success(response.data.message);
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
          value={UserLogin.email}
          onChange={(e) => {
            handleFormData(e);
          }}
        />
        <input
          type="text"
          placeholder="Enter Your password"
          name="password"
          value={UserLogin.password}
          onChange={(e) => {
            handleFormData(e);
          }}
        />
        <input type="submit" value="Login" />
        <Link to={"/register"}>
          Don't have an account?{" "}
          <strong className="font-bold text-blue-400">Create account</strong>
        </Link>

        <Link to={"/login/checkemail"} className="font-bold text-blue-400">
          Forget Password
        </Link>
      </form>
    </>
  );
}
