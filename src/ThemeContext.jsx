import { createContext, useState } from "react";



export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [themes, setThemes] = useState({
        light: {
            name: "light",
            foreground: "#000000",
            background: "#eeeeee"
        },
        dark: {
            name: "dark",
            foreground: "#ffffff",
            background: "#222222"
        }
    });
    const [theme, setTheme] = useState(themes.dark);

    return (
        <ThemeContext.Provider value={{ themes, theme, setTheme, setThemes }}>
            {children}
        </ThemeContext.Provider>
    );
}
