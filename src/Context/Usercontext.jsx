import React, { createContext, useState } from 'react'


export const usercontext = createContext()

export const Usercontextprovider = ({ children }) => {

    const [Theme, setTheme] = useState("light")

    function toggleTheme() {
        setTheme(prev => prev === "light" ? "dark" : "light")
    }
    return (
        <>
            <usercontext.Provider value={{ Theme, toggleTheme }}>
                {children}
            </usercontext.Provider>
        </>
    )
}

export default Usercontextprovider
