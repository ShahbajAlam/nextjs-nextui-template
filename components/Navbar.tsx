import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-4">
            <Link href="/">
                <h1>Logo</h1>
            </Link>
            <ThemeSwitcher />
        </nav>
    );
}
