import Link from "next/link";
const index = () => {
  return (
    <div>
      <h1>
        Hi inside page <Link href={"/demo"}>Go Back</Link>{" "}
      </h1>
    </div>
  );
};

export default index;
