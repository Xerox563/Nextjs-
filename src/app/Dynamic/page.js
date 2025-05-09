import Link from "next/link";
export default function StudentList() {
  return (
    <div className="ml-5">
      <h1>Student List</h1>
      <ul className="ml-5 ">
        <li>
          <Link href={"/Dynamic/Anil"}>Anil</Link>
        </li>
        <li>
          <Link href={"/Dynamic/Peter"}>Peter</Link>
        </li>
        <li>
          <Link href={"/Dynamic/Sam"}>Sam</Link>
        </li>
        <li>
          <Link href={"/Dynamic/Samay"}>Samay</Link>
        </li>
        <li>
          <Link href={"/Dynamic/Rakesh"}>Rakesh</Link>
        </li>
      </ul>
    </div>
  );
}
