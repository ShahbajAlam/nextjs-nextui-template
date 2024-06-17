import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-4">
            <h1>Logo</h1>
            <ThemeSwitcher />
        </nav>
    );
}
