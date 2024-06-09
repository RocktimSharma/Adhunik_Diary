// src/components/ThemeToggle.js
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isDarkMode, setISDark] = useState(true);
  useEffect(() => {
    if (theme === "dark") {
      setISDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setISDark(false);
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    // <div className="flex items-center">
    //   <button
    //     onClick={toggleTheme}
    //     className={`relative w-14 h-7 flex items-center bg-gray-200 dark:bg-dark-40 rounded-full p-1 transition-colors duration-300 ${
    //       isDarkMode ? "justify-end" : "justify-start"
    //     }`}
    //   >
    //     <div className="w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 text-center">
    //       <div
    //         className={` transform transition-opacity duration-300 ${
    //           isDarkMode ? "opacity-0 hidden" : "opacity-100 "
    //         }`}
    //       >
    //         <FontAwesomeIcon icon={faSun} className="text-yellow-500" />
    //       </div>
    //       <div
    //         className={` transform transition-opacity duration-300 ${
    //           isDarkMode ? "opacity-100 " : "opacity-0 hidden"
    //         }`}
    //       >
    //         <FontAwesomeIcon icon={faMoon} className="text-blue-500" />
    //       </div>
    //     </div>
    //   </button>
    // </div>

      <button
        onClick={toggleTheme}
        className='bg-gray-100 dark:bg-dark-40 rounded-full p-2 flex items-center justify-center w-8 h-8'
      >
          <div
            className={` transform transition-opacity duration-300 ${
              isDarkMode ? "opacity-0 hidden" : "opacity-100 "
            }`}
          >
            <FontAwesomeIcon icon={faSun} className="text-yellow-500" />
          </div>
          <div
            className={` transform transition-opacity duration-300 ${
              isDarkMode ? "opacity-100 " : "opacity-0 hidden"
            }`}
          >
            <FontAwesomeIcon icon={faMoon} className="text-blue-500" />
          </div>
    
      </button>

  );
};

export default ThemeToggle;
