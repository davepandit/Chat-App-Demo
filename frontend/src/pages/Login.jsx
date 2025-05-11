import React, { useEffect, useState } from "react";
import "../index.css";

export const Login = () => {
  // states -> email, password
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // form submit handler 
  const handleSubmit = (e) => {
    e.preventDefault();
  }

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
