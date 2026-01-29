import React, { createContext } from "react";

type ThemeContextType = "light" | "dark";

function prefersDarkMode() {
	return (
		typeof window !== "undefined" &&
		window.matchMedia &&
		window.matchMedia("(prefers-color-scheme: dark;)").matches
	);
}

const initialTheme: ThemeContextType = prefersDarkMode() ? "dark" : "light";

const ThemeContext = createContext<ThemeContextType>(initialTheme);

export default ThemeContext;
