import Link from "next/link";

// Fetching data from your own API route
const getRes = async () => {
  const data = await fetch("http://localhost:3000/api/users");
  const res = await data.json();
  return res;
};

// Page component must be PascalCase in Next.js
const Page = async () => {
  const users = await getRes();

  return (
    <div>
      <h1>User List (Fetching data from API Route)</h1>
      {users.map((item) => (
        <div key={item.id}>
          <Link href={`/FetchUsers/${item.id}`}>
            <h2>{item.Name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Page;
