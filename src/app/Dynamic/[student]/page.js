"use client";
export default function student({ params }) {
  return (
    <div className="ml-5">
      <h1>Student Details</h1>
      <h2 className="bg-purple-400">Name : {params.student}</h2>
    </div>
  );
}
