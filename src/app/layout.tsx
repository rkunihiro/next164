import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
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
