import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import { siteUrl } from "#/config.ts";

export const metadata: Metadata = {
    metadataBase: siteUrl,
    title: "My App",
    description: "This is my Next.js 16.4 app",
};

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="ja">
            <body>{children}</body>
        </html>
    );
}
