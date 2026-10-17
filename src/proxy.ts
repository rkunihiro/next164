import { randomUUID } from "node:crypto";

import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function proxy(request: NextRequest, _event: NextFetchEvent) {
    const start = new Date();
    const url = request.nextUrl;
    const transactionId = randomUUID();

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("transaction-id", transactionId);
    const response = NextResponse.next({
        request: { headers: requestHeaders },
    });
    response.headers.set("transaction-id", transactionId);

    console.log(JSON.stringify({
        timestamp: start.toISOString(),
        method: request.method,
        url: `${url.pathname}${url.search}`,
        transactionId,
        status: response.status,
    }));

    return response;
}

export const config = {
    matcher: [
        `/((?!_next|favicon|icon|manifest|[^?]*\\.(?:css|json|js)).*)`,
    ],
};
