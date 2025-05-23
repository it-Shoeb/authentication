import React, { useState } from "react";

import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import api from "../../services/api.js";

export default function RegisterationForm() {
  const [User, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleFormData = (e) => {
    setUser({ ...User, [e.target.name]: e.target.value });
  };

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post("/authentication/register", { ...User });
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.errors[0].msg);
      console.log(error);
    }
  };

  return (
    <>
      <form action="" onSubmit={(e) => handleForm(e)}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={User.username}
          onChange={(e) => {
            handleFormData(e);
          }}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          value={User.email}
          onChange={(e) => {
            handleFormData(e);
          }}
        />
        <input
          type="text"
          name="password"
          placeholder="password"
          value={User.password}
          onChange={(e) => {
            handleFormData(e);
          }}
        />
        <input type="submit" value="Create User" />
        <Link to={"/login"}>
          Already have an account?{" "}
          <strong className="font-bold text-blue-400">Login</strong>
        </Link>
      </form>
    </>
  );
}
