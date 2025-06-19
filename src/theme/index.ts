import {lightTheme} from './lightTheme';
import {darkTheme} from './darkTheme';

export {lightTheme, darkTheme};

export enum THEME_TYPES {
  LIGHT = 'light',
  DARK = 'dark',
}
export type ThemeMode = THEME_TYPES.LIGHT | THEME_TYPES.DARK;
