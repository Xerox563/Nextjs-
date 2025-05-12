import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(request, content) {
  const data = user;
  const id = Number(content.params.id);

  const userData = data.find((item) => item.id === id);

  if (!userData) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  return NextResponse.json(userData, { status: 200 });
}

/* In case of not found (id not Find , we can show a custom not found page )

// src/app/users/[id]/page.js
import { notFound } from "next/navigation";
import { user } from "@/util/db";

export default function UserPage({ params }) {
  const id = Number(params.id);
  const userData = user.find((item) => item.id === id);

  if (!userData) {
    notFound(); // This will show the global not-found.js
  }

  return (
    <div>
      <h1>{userData.Name} Profile</h1>
    </div>
  );
}
  */
