"use client";
import styled from "styled-components";

const button = styled.button`
  background-color: purple;
  color: white;
  padding: 10px;
`;
const Temp = () => {
  return (
    <div>
      <h1>This is Using CSS Module.</h1>
      <h2>We Love Styling.</h2>
      <button onClick={() => alert("Lets style it !!")}>Click Me</button>
    </div>
  );
};

export default Temp;
