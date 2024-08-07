import React, { useEffect, useState } from "react";

export default function UserProfile({ userId }) {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const fetchApi = async () => {
    console.log(userId);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const data = await response.json(); // Call the json() method
      setUserName(data.name);
      setUserEmail(data.email);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [userId]);

  return (
    <div>
      <p>email : {userEmail}</p>
      <p>name : {userName}</p>
    </div>
  );
}
