import type { PropsWithChildren } from "react";

import { Header, SideMenu } from "#/components/layout.tsx";

export default async function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <SideMenu />
        </>
    );
}
