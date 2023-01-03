import { createContext, useContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [color, setColor] = useState("white");
    const [text, setText] = useState("Hello World");
    const [dark, setDark] = useState(false);
    
    return (
        <DataContext.Provider value={{ color, setColor, text, setText, dark, setDark }}>
        {children}
        </DataContext.Provider>
    );
    }

    