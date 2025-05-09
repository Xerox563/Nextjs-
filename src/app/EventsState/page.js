"use client";

import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("Papaya");
  const changeName = () => {
    setName("Mango");
  };
  const apple = (f) => {
    alert(name);
  };
  const Comp = () => {
    return <h2>Inner Component</h2>;
  };
  return (
    <div>
      <main>
        <h1>Events, Functions and State {name}</h1>
        <button onClick={() => apple(name)}>Click ME</button>
        <button onClick={changeName}>Change</button>
        <Comp />
      </main>
    </div>
  );
};
export default Home;
