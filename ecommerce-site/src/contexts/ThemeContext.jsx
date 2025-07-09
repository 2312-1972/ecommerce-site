// src/contexts/ThemeContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('theme');
    return stored ? stored : 'dark';
  });

 useEffect(() => {
  document.documentElement.setAttribute('data-theme', theme); // Applique le thème au <html>
  localStorage.setItem('theme', theme);
}, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// ✅ C'est ce qui te manque :
export const useTheme = () => useContext(ThemeContext);
