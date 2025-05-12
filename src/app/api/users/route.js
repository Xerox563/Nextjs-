// export async function GET(request) {
//   return new Response("Hello User !!");
// }

import { NextResponse } from "next/server";

export function GET(request) {
  return NextResponse.json(
    {
      name: "Amit",
      age: 22,
      city: "Noida",
      Country: "India",
    },
    { status: 200 }
  );
}
