import React from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const response = await api.post("/authentication/logout");
    toast.success(response.data.message);
    navigate("/login");
  };

  return (
    <>
      <div className="flex justify-between">
        <div className="lhs">Navbar</div>
        <div className="rhs">
          <button
            onClick={(e) => {
              handleLogout(e);
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
