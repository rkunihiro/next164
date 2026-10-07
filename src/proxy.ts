import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function proxy(request: NextRequest, event: NextFetchEvent) {
    const start = new Date();
    const url = request.nextUrl;

    const response = NextResponse.next();

    console.log(JSON.stringify({
        timestamp: start.toISOString(),
        method: request.method,
        url: `${url.pathname}${url.search}`,
        event,
        status: response.status,
        duration: Date.now() - start.getTime(),
    }));

    return response;
}

export const config = {
    matcher: [
        "/((?!_next|favicon.ico|sitemap.xml|robots.txt).*)",
    ],
};
