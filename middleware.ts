import type { NextRequest } from "next/server";

// simple logger
export function middleware(request: NextRequest) {
  console.log(`${request.method} ${request.nextUrl.pathname}`);
}

export const config = {
  matcher: "/:path*",
};
