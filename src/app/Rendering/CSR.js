// pages/users.js

import React, { useEffect, useState } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetches data after the component loads on the client
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>👥 User List (CSR)</h1>
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.firstName} {user.lastName}</strong> — {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/*
 What is CSR (Client-Side Rendering)?
The page loads first with no data.

Then it fetches data in the browser using JavaScript (useEffect).

It's not SEO-friendly by default, but good for user-only or dynamic pages like dashboards, admin panels, etc.

*/