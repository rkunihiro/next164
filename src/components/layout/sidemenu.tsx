import Link from "next/link";

export default function SideMenu() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/post">Post Page</Link>
                </li>
                <li>
                    <Link href="/about">About Page</Link>
                </li>
            </ul>
        </nav>
    );
}
