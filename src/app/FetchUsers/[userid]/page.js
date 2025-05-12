// Fetching data from your own API route
const getUser = async (id) => {
  const data = await fetch(`http://localhost:3000/api/users/${id}`);
  const res = await data.json();
  return res;
};
export default async function Page({ params }) {
  //  console.log(params);
  const user = await getUser(params.userid);
  console.log(user);
  return (
    <div className="border-amber-100 text-blue-800 bg-amber-600 pl-14 pt-10  pb-10">
      <h2 className="text-green-900 ">User Details</h2>
      <h3>Name : {user.Name}</h3>
      <h3>Age : {user.Age}</h3>
      <h3>Email : {user.Email}</h3>
      <h3>City : {user.City}</h3>
      <h3>Country : {user.Country}</h3>
    </div>
  );
}
