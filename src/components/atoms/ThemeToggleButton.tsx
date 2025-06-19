import React from 'react';
import {IconButton, useTheme} from 'react-native-paper';
import {useThemeToggle} from '../../context/ThemeContext';

const ThemeToggleButton = () => {
  const {isDarkTheme, toggleTheme} = useThemeToggle();
  const theme = useTheme();

  return (
    <IconButton
      icon={isDarkTheme ? 'weather-sunny' : 'moon-waning-crescent'}
      size={24}
      onPress={toggleTheme}
      iconColor={theme.colors.primary}
      accessibilityLabel="Toggle theme"
    />
  );
};

export default ThemeToggleButton;
