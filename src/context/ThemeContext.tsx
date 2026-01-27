import React, { createContext } from "react";

type ThemeContextType = "light" | "dark";

const ThemeContext = createContext<ThemeContextType>(
	window.matchMedia("(prefers-color-scheme: dark)"),
);

export default ThemeContext;
