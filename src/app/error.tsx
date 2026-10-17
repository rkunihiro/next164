"use client";

import { useEffect } from "react";

interface Props {
    error: Error & { digest?: string };
    retry: () => void;
}

export default function Error({ error, retry }: Props) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div>
            <h2>Something went wrong!</h2>
            <button onClick={() => retry()}>Try again</button>
        </div>
    );
}
