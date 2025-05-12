/*
The page is generated at build time like SSG(Static Site Generation) ✅
But after a set time (e.g. 60 seconds), it will auto-update in the background if new requests come in.
Gives you the speed of static pages + freshness of dynamic pages.

🔄 Easy Explanation
🧍 User: “Hey server, show me the page.”
🧱 Server: “Sure! Here's a pre-built HTML file.”
⏱ After 60 seconds:
🧍 Another user: “Same page, please.”
🔄 Server: “Let me update the data in the background… Done!”
✅ New users now see fresh data.

🧠 How ISR Works (Step-by-Step)
getStaticProps() runs at build time.
HTML page is created and stored (like SSG).

After deployment:

Every 60 seconds, the next visit will trigger a background rebuild.
Users get the old page until the new one is ready.
Next visit gets the updated page.
*/

import React from 'react';

export async function getStaticProps() {
    const res = await fetch("https://dummmyjson.com/users");
    const data = await res.json();
    
    return {
        props:{
            users:data.users,
        },
        revalidate:60,
    }
}

export default function UserPage({users}) {
    return (
        <div>
            <h1>👥 User List (ISR)</h1>
            <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.firstName} {user.lastName}</strong> — {user.email}
          </li>
        ))}
      </ul>
        </div>
    )
}