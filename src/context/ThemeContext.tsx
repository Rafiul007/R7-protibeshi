import React, {createContext, useState, useContext} from 'react';
import {lightTheme, darkTheme} from '../theme';

const ThemeContext = createContext<{
  isDarkTheme: boolean;
  toggleTheme: () => void;
}>({
  isDarkTheme: false,
  toggleTheme: () => {},
});

export const useThemeToggle = () => useContext(ThemeContext);

export const ThemeProvider = ({
  children,
}: {
  children: (theme: any) => React.ReactNode;
}) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => setIsDarkTheme(prev => !prev);

  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{isDarkTheme, toggleTheme}}>
      {children(theme)}
    </ThemeContext.Provider>
  );
};
