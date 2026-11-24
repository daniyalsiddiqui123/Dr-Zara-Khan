import { NextResponse, type NextRequest } from "next/server";
import { locales } from "@/lib/types";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1] ?? "";

  if (locales.includes(first as (typeof locales)[number])) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|api|favicon.ico|.*\\..*).*)"]
};
