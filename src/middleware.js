import { NextResponse } from "next/server";
export function middleware(request) {
  //   console.log("middlewareabc");
  //   if (request.nextUrl.pathname != "/Login") {
  //     return NextResponse.redirect(new URL("/Login", request.url));
  // }
  return NextResponse.redirect(new URL("/Login", request.url));
}

export const config = {
  matcher: ["/Routing/:path*", "/EventsState/:path*"],
};

// Middle Ware -> Self Executing code jo ki routing request kae call honae sae pehlae hi call hota hai
// use case -> redirection(specific route) ,authentication
// config matcher
// Conditional Layout
