import { createContext, useState } from "react";

type TabListContextProviderProps = {
	children: React.ReactNode;
};

type TabListContextType = {
	openWindows: string[];
	minimisedWindows: string[];
	minimise: (windowName: string) => void;
	restore: (windowName: string) => void;
};

export const Context = createContext({} as TabListContextType);

export const ThemeContextProvider = ({
	children,
}: TabListContextProviderProps) => {
	const [openWindows, setOpenWindows] = useState<string[]>([
		"About",
		"Finder",
		"LightHouse",
	]);
	const [minimisedWindows, setMinimisedWindows] = useState<string[]>([]);

	const minimise = (windowName: string) => {
		setMinimisedWindows((prev) => [...prev, windowName]);
		setOpenWindows((prev) => prev.filter((name) => name !== windowName));
	};
	const restore = (windowName: string) => {
		setOpenWindows((prev) => [...prev, windowName]);
		setMinimisedWindows((prev) => prev.filter((name) => name !== windowName));
	};
	return (
		<Context.Provider
			value={{ openWindows, minimisedWindows, minimise, restore }}
		>
			{children}
		</Context.Provider>
	);
};
// USE FOR THE TRAFFICLIGHT BUTTONS, ADD ON CLICKS FOR THE MINIMISE AND RESTORE FUNCTIONS.
// Only show LightHouse if it's in the openWindows list
//                     {openWindows.includes("LightHouse") && (
//                         <LightHouseWindow containerRef={macOSRef} />
//                     )}
// Example usage ^
