// pages/users.js

import React from "react";

// This runs on the server for every request
export async function getServerSideProps() {
  const res = await fetch("https://dummyjson.com/users");
  const json = await res.json();

  return {
    props: {
      users: json.users, // send data to the page
    },
  };
}

export default function UsersPage({ users }) {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>👥 User List (SSR)</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>
              {user.firstName} {user.lastName}
            </strong>{" "}
            — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

/*
🟢 1. User Visits Page (e.g., /users)
A request is sent to your Next.js server.

🔄 2. getServerSideProps() Runs
Your code runs on the server every time someone visits.
You can fetch data, check auth, etc.

🖼 3. HTML is Generated on the Fly
The server renders your React component with the fetched data.

📬 4. Full HTML is Sent to the Browser
The user sees a fully populated page with real data.
Then React “hydrates” it — makes buttons, links interactive.

⚡ Real-Life Analogy
🛒 You go to a restaurant and order food.
👨‍🍳 The chef (server) makes it fresh every time you order.
🍽 You get it hot and fresh — but it takes a little time to prepare.

✅ Pros
Always up-to-date data 🔄
Great for SEO 🌐
Can use user/session info 🔐

❌ Cons
Slower than static pages 🐢
Needs a server running 🖥️


*/
