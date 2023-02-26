/* import React from 'react';
import { useState } from 'react';

export const ThemeContext = React.createContext("light");


const ThemeProvider = (props) => {
    const [theme, setTheme] = useState('light');
  
    const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };
  
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {props.children}
      </ThemeContext.Provider>
    );
  };
  
  export default ThemeProvider; */