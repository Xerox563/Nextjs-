"use client";
import { useState } from "react";
import styles from "./styles.module.css";

const Fun = () => {
  const [col, setCol] = useState("red");
  //   const setColor = () => {
  //     if (col == "green") {
  //       setCol("red");
  //     } else {
  //       setCol("green");
  //     }
  //   };
  // destrcucting
  const { red } = styles;
  return (
    <div>
      <h1 className={col == "red" ? styles.red : styles.green}>
        Conditional Style
      </h1>
      <h2 style={{ backgroundColor: col == "red" ? "red" : "green" }}>
        India the Land of Gold ..
      </h2>
      <h3 id={styles.orange}>Hellow</h3>
      <h4 className={red}>Color Na</h4>
      <button className={col == "red" ? styles.green : styles.red}>
        Click Me (To Change the colors)
      </button>
    </div>
  );
};

export default Fun;
