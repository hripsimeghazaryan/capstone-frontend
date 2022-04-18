import { createContext, useEffect, useState } from 'react';

const themes = {
    light: {
        paper: "#263238",
        color: "#ffffff",
        background: "#000a12"
    },
    dark: {
        paper: "#f5f5f5",
        color: "#000000",
        background: "#ffffff"
    }
}

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(true);

    const toggleTheme = () => {
        localStorage.setItem("isDark", JSON.stringify(!isDark));
        setIsDark(!isDark);
    }

    useEffect(() => {
        const isDark = localStorage.getItem("isDark") === "true";
        setIsDark(isDark);
    }, [])

    return (
        <ThemeContext.Provider value={{isDark, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}