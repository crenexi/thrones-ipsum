import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { basePalette } from './material-ui-palette';
import { baseTypography } from './material-ui-typography';
import { baseBreakpoints } from './material-ui-breakpoints';

const baseTheme = () => {
  const palette = basePalette();
  const typography = baseTypography();
  const breakpoints = baseBreakpoints();

  const theme = createMuiTheme({
    palette,
    typography,
    breakpoints
  });

  // Create responsive theme
  return responsiveFontSizes(theme, {
    // Note: breakpoints.values is an object of values
    breakpoints: breakpoints.values.values(),
  });
};

export default { baseTheme };
