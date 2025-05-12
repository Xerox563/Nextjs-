"use client";

import { useState } from "react";

const page = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Add New User</h1>
      <input type="text" placeholder="Enter Name" />
      <input type="text" placeholder="Enter Age" />
      <input type="text" placeholder="Enter Email" />
      <button>Add User</button>
    </div>
  );
};

export default page;
