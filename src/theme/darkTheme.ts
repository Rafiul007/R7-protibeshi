import {MD3DarkTheme as DefaultTheme} from 'react-native-paper';

export const darkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4D7A7F',
    onPrimary: '#ffffff',
    primaryContainer: '#075056',
    onPrimaryContainer: '#ffffff',

    secondary: '#B0C6CB',
    onSecondary: '#0F1F22',
    secondaryContainer: '#324649',
    onSecondaryContainer: '#E4EEF0',

    tertiary: '#FFB04A',
    onTertiary: '#402300',
    tertiaryContainer: '#7C4700',
    onTertiaryContainer: '#FFE5C2',

    background: '#121212',
    onBackground: '#E4E4E4',

    surface: '#1E1E1E',
    onSurface: '#F2F2F2',

    surfaceVariant: '#2C2C2C',
    onSurfaceVariant: '#CFCFCF',

    error: '#CF6679',
    onError: '#1E0000',
    errorContainer: '#93000A',
    onErrorContainer: '#F9DEDC',

    outline: '#8F9B9C',
    outlineVariant: '#2D3C3D',

    shadow: '#000000',
    scrim: '#000000',

    inverseSurface: '#E4E4E4',
    inverseOnSurface: '#1E1E1E',
    inversePrimary: '#075056',

    surfaceDisabled: 'rgba(255, 255, 255, 0.12)',
    onSurfaceDisabled: 'rgba(255, 255, 255, 0.38)',
    backdrop: 'rgba(0, 0, 0, 0.4)',

    elevation: {
      level0: 'transparent',
      level1: '#242F30',
      level2: '#2C3B3C',
      level3: '#334647',
      level4: '#385051',
      level5: '#3D5A5B',
    },
  },
};
