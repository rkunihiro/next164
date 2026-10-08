import { type Instrumentation } from "next";

type OnRequestErrorParams = Parameters<Instrumentation.onRequestError>;

export function register() {
    console.log("register");
}

export async function onRequestError(
    error: OnRequestErrorParams[0],
    request: OnRequestErrorParams[1],
    context: OnRequestErrorParams[2],
) {
    console.log("onRequestError", { error, request, context });
}
