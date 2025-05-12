"use client";
import { ClipLoader } from "react-spinners";
import { useEffect, useState } from "react";

const User = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const op = await fetch("https://dummyjson.com/users");
        const res = await op.json();
        setData(res.users);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  if (isLoading) {
    return (
      <div className="mt-[300px] ml-[340px]">
        <ClipLoader color="orange" size={50} />;
      </div>
    );
  }

  return (
    <div>
      <h1>User List</h1>
      {data.map((item) => (
        <div key={item.id}>
          <h2>User Name: {item.firstName}</h2>
        </div>
      ))}
    </div>
  );
};

export default User;
