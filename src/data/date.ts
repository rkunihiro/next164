import "server-only";

import { cacheLife } from "next/cache";

export async function getCurrentDate() {
    "use cache";
    cacheLife("minute");

    return new Date().toISOString();
}
