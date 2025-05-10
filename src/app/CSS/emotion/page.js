"use client";

// We are using here emotion js
// npm install @emotion/styled @emotion/react
// Powerful CSS-in-JS library like styled-components.
const Box = styled.div`
  background-color: lightblue;
  color: white;
  padding: 10px;
`;
const Temp = () => {
  return (
    <div>
      <h1>This is Using CSS Module.</h1>
      <h2>We Love Styling.</h2>
      <Box onClick={() => alert("Lets style it !!")}>Click Me</Box>
    </div>
  );
};

export default Temp;
