import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const User = () => {
  const [users, setUsers] = useState([]);

  // call the api as soon as the page loads
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("/api/users");
      console.log("User data:", data);
    };

    // call the function
    fetchData();
  }, []);
  return <div>User</div>;
};

export default User;
