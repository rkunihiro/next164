import { getCurrentDate } from "#/data/date.ts";

export default async function Page() {
    const env = process.env["ENV"] || "unknown";
    const now = await getCurrentDate();
    return (
        <>
            <h1>Hello, Next.js 16.4!</h1>
            <p>Environment: {env}</p>
            <p>Current Time: {now}</p>
        </>
    );
}
