// Static Site Generation (SSG)
import React from 'react';
export async function getStaticProps(){
    const res = await fetch("https://dummyjson.com/users");
    const data = res.json();
   return {
    props:{
       users:data.users,
    }
}
}

export default function UsersPage({users}) {
    return (
        <div>
              {
                users.map((user) => {
                    {user.firstName}
                })
              }
        </div>
    )
}

/*
🧱 1. You run next build
Next.js looks at all your pages.
For each page with getStaticProps(), it executes that function.
The API/data is fetched during build time (on your machine or server, not in the browser).

🚀 2. Next.js uses the data to render the page
Your React component is rendered on the server, using the props returned from getStaticProps.
The final result is static HTML + JSON.

🚀 3. When a user visits the page
The HTML is served instantly from the file system or CDN.
Then React hydrates the page on the client (adds interactivity using the JSON).

--------------------------------------------------------------------------

Build Time
 ↓
[getStaticProps()] → Fetches data
 ↓
Generates static HTML + JSON
 ↓
Page is deployed

User Visits Site
 ↓
Static HTML is loaded instantly
 ↓
React hydrates with JSON → Interactive page

*/