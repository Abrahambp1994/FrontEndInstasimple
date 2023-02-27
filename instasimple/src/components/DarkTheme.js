import { useState } from "react";

export const DarkTheme = () => {

  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return(
<div className={isDarkMode ? 'dark-mode' : ''}>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  )
}