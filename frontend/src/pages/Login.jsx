import React, { useEffect, useState } from "react";
import "../index.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  // states -> email, password
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // redirection
  const navigate = useNavigate();

  // form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // send the data to the backend
    const payload = {
      email: email,
      password: password,
    };

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post("/api/user/login", payload, config);

      console.log("Data: ", data);

      // backend sends the token and it is the responsibility of the frontend dev to store it
      // here we are going with the localstorage
      localStorage.setItem("userInfo", JSON.stringify(data));

      // redirect to the chats page
      navigate("/chats");
    } catch (error) {
      console.log("Some error occurred!", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
