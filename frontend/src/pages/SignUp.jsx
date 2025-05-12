import React from "react";
import "../index.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const SignUp = () => {
  // states -> name, email, password, confirm pass
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  // redirection
  const navigate = useNavigate();

  // form handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // send the data to the backend
    const payload = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post("/api/user/register", payload, config);

      console.log("Data: ", data);

      // backend sends the token and it is the responsibility of the frontend dev to store it
      // here we are going with the localstorage
      localStorage.setItem("userInfo", JSON.stringify(data));

      // redirect to the chats page
      navigate("/chats");
    } catch (error) {
      console.log("Some error occurred!");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onClick={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default SignUp;
