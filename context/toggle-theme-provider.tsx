"use client";
import { createContext, useCallback, useState } from "react";

type ThemeProviderProps = {
	children: React.ReactNode | React.ReactNode[];
};

const ToggleThemeContext = createContext<() => void>(() => { });
const ThemeContext = createContext<string>("dark");

export { ThemeContext, ToggleThemeContext };

export default function ThemeProvider({ children }: ThemeProviderProps) {
	const [theme, setTheme] = useState("dark");

	const toggleTheme = useCallback(
		() => setTheme((state) => (state === "light" ? "dark" : "light")),
		[]
	);

	return (
		<ToggleThemeContext.Provider value={toggleTheme}>
			<ThemeContext.Provider value={theme}>
				<div
					data-theme={theme}
					className="min-h-full flex flex-col"
				>
					{children}
				</div>
			</ThemeContext.Provider>
		</ToggleThemeContext.Provider>
	);
}
