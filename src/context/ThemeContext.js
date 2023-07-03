"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext();

// composant qui fournit le theme actuel
const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState("dark");

    // switch entre les modes clair / sombre qui sera utilisé sur tous les enfants
    const toggle = () => {
        setMode((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        // fournit l'état du mode et la fonction de basculement "toggle"
        // chaque enfant pourras récupérer ces valeurs en utilisant le Hook useContext avec ThemeContext
        <ThemeContext.Provider value={{ toggle, mode }}>
            <div className={`theme ${mode}`}>{children}</div> {/* applique sur tous les enfants une classe CSS en fonction du mode */}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider