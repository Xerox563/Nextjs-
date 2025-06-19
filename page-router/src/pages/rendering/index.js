// pages/posts.js or pages/index.js

// Static Generation
// Pages are generated during the build time and served as static HTML
// export async function getStaticProps() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json(); // ⬅️ Await the JSON
//   return {
//     props: {
//       posts: data,
//     },
//   };
// }

// export default function GetPosts({ posts }) {
//   return (
//     <div>
//       <h1>Posts</h1>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>
//             <b>{post.title}</b>
//             <p>{post.body}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// ------------------------------------------------------

// SSR ->  On each request the Page is build
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      posts: data,
    },
  };
}

export default function GetPosts({ posts }) {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <b>{post.title}</b>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
