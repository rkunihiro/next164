import { Suspense } from "react";

import { fetchData } from "#/data/post.ts";

import { Form } from "./form.tsx";

export default async function Page() {
    const data = await fetchData();

    return (
        <>
            <h1>Post Page</h1>
            <Suspense fallback={null}>
                <Form data={data} />
            </Suspense>
        </>
    );
}
