import React, { useContext, useEffect, useState } from "react";
import api from "../services/api";
import { AuthContext } from "../context/AuthContextProvider.jsx";

export default function Home() {
  const [User, setUser] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await api.get("/home");
    setUser(response.data.data);
  };

  const { IsLoggedIn } = useContext(AuthContext);
  console.log(IsLoggedIn);

  return (
    <>
      {console.log(User)}
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>email</th>
            <th>hashspassword</th>
          </tr>
        </thead>
        <tbody>
          {User.map((user, id) => (
            <tr key={id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
