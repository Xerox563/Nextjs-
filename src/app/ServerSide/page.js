

export async function getServerSideProps() {
  const res = await fetch("https://fakerapi.it/api/v2/addresses?_quantity=1");
  const data = await res.json();

  return {
    props: { data },
  };
}

export default function Home({ data }) {
  return (
    <div>
      <h1>User Data</h1>
      
    </div>
  );
}
