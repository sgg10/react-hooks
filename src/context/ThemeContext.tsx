import { createContext, useState } from "react";

type GlobalTheme = {
	theme: boolean;
	setTheme?: any;
};

const ThemeContext = createContext<GlobalTheme>({ theme: true });

export const ThemeContextProvider = ({ children }: any) => {
	let initialTheme: any = true;
	if (localStorage.getItem("theme")) {
		if (localStorage.getItem("theme") === "true") initialTheme = true;
		else initialTheme = false;
	}
	const [theme, setTheme] = useState<boolean>(initialTheme);

	return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
