import {MD3LightTheme as DefaultTheme} from 'react-native-paper';

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#075056',
    onPrimary: '#ffffff',
    primaryContainer: '#4D7A7F',
    onPrimaryContainer: '#ffffff',

    secondary: '#E4EEF0',
    onSecondary: '#212121',
    secondaryContainer: '#F4F8F9',
    onSecondaryContainer: '#212121',

    tertiary: '#FFB04A',
    onTertiary: '#ffffff',
    tertiaryContainer: '#FFE5C2',
    onTertiaryContainer: '#5B3200',

    background: '#ffffff',
    onBackground: '#1A1A1A',

    surface: '#ffffff',
    onSurface: '#1A1A1A',

    surfaceVariant: '#F0F0F0',
    onSurfaceVariant: '#424242',

    error: '#B00020',
    onError: '#ffffff',
    errorContainer: '#F9DEDC',
    onErrorContainer: '#410E0B',

    outline: '#BDBDBD',
    outlineVariant: '#E0E0E0',

    shadow: '#000000',
    scrim: '#000000',

    inverseSurface: '#2E2E2E',
    inverseOnSurface: '#F5F5F5',
    inversePrimary: '#4D7A7F',

    surfaceDisabled: 'rgba(0, 0, 0, 0.12)',
    onSurfaceDisabled: 'rgba(0, 0, 0, 0.38)',
    backdrop: 'rgba(0, 0, 0, 0.4)',

    elevation: {
      level0: 'transparent',
      level1: '#F2F5F6',
      level2: '#E8F0F1',
      level3: '#DCE8E9',
      level4: '#D5E2E3',
      level5: '#CFDDDE',
    },
  },
};
