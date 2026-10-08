import type { PropsWithChildren } from "react";

export const ensureStatic = "navigation";

export default function Layout({ children }: PropsWithChildren) {
    return <main>{children}</main>;
}
