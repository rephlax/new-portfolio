import { createContext, useEffect, useState } from "react";

type ThemeContextProviderProps = {
	children: React.ReactNode;
};

type Theme = "light" | "dark";

type ThemeContextType = {
	theme: Theme;
	toggleTheme: () => void;
};

export const Context = createContext({} as ThemeContextType);

export const ThemeContextProvider = ({
	children,
}: ThemeContextProviderProps) => {
	const [theme, setTheme] = useState<Theme>(() => {
		if (
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: light;)").matches
		) {
			return "light";
		} else {
			return "dark";
		}
	});

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
	};
	return (
		<Context.Provider value={{ theme, toggleTheme }}>
			{children}
		</Context.Provider>
	);
};
