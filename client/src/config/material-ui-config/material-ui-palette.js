import {
  colorLight,
  colorBody,
  colorBodyEasy,
  colorBodySubtle,
  colorWinter,
  colorWinterLight,
  colorWinterDark,
  colorSummer,
  colorSummerLight,
  colorSummerDark,
  colorDanger,
} from 'scss/utils/exports';

const basePalette = () => ({
  type: 'light',
  common: {
    black: colorBody,
    white: '#fff',
  },
  text: {
    primary: colorBody,
    secondary: colorBodyEasy,
    disabled: colorBodySubtle,
    hint: colorBodySubtle,
  },
  background: {
    default: colorLight,
    paper: '#fff',
  },
  primary: {
    main: colorWinter,
    light: colorWinterLight,
    dark: colorWinterDark,
    contrastText: '#fff',
  },
  secondary: {
    main: colorSummer,
    light: colorSummerLight,
    dark: colorSummerDark,
    contrastText: '#fff',
  },
  error: {
    main: colorDanger,
    contrastText: '#fff',
  },
});

export default { basePalette };
