// export async function GET(request) {
//   return new Response("Hello User !!");
// }

import { user } from "@/util/db";
import { NextResponse } from "next/server";

// import { NextResponse } from "next/server";

// export function GET(request) {
//   return NextResponse.json(
//     {
//       name: "Amit",
//       age: 22,
//       city: "Noida",
//       Country: "India",
//     },
//     { status: 200 }
//   );
// }

export function GET() {
  const data = user;
  return NextResponse.json(data, { status: 200 });
}

// from the Post selection then from the body and then JSON data is sent from the Postman through POST request and we are getting it on the console.
export async function POST(request) {
  let payload = await request.json();
  console.log(payload.name);
  if (!payload.name || !payload.age || !payload.email) {
    return NextResponse.json(
      {
        result: "require Field not found",
        success: false,
      },
      { status: 400 }
    );
  }
  return NextResponse.json(
    { result: "new User Created", success: true },
    { status: 200 }
  );
}
