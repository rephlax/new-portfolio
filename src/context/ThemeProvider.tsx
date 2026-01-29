import React, { createContext, useState, useEffect, ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContext {
	theme: Theme;
	toggleTheme: () => void;
}

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
