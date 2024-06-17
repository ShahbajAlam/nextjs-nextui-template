"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <>
            {theme === "dark" && (
                <Sun
                    role="button"
                    size={40}
                    onClick={() => setTheme("light")}
                />
            )}
            {theme === "light" && (
                <Moon
                    role="button"
                    size={40}
                    onClick={() => setTheme("dark")}
                />
            )}
        </>
    );
}
