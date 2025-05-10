"use client";
import s from "./button.module.css";
const Temp = () => {
  return (
    <div className="ml-[300px] mt-[400px]">
      <h1>This is Using CSS Module.</h1>
      <h2>We Love Styling.</h2>
      <button onClick={() => alert("Lets style it !!")} className={s.btn}>
        Click Me
      </button>
    </div>
  );
};

export default Temp;
