import React, { useEffect, useState } from "react";

const Header = () => {
    const [darkMode, setDarkMode] = useState();

    useEffect(() => {
        const darkmode = window.localStorage.getItem("darkMode");
        setDarkMode(JSON.parse(darkmode));
    }, []);

    useEffect(() => {
        if (darkMode === true) {
            document.getElementById("root").classList.add("dark");
        } else {
            document.getElementById("root").classList.remove("dark");
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
        window.localStorage.setItem("darkMode", !darkMode);
    };

    return (
        <header className="flex justify-between pt-8 py-4">
            <h1 className="text-4xl font-bold tracking-widest text-white">
                TODO
            </h1>
            <button onClick={toggleDarkMode}>
                {!darkMode && <img src="/images/icon-moon.svg" alt="moon" />}
                {darkMode && <img src="/images/icon-sun.svg" alt="sun" />}
            </button>
        </header>
    );
};

export default Header;
