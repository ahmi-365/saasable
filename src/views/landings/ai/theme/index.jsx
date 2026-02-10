'use client';

// @mui
import { createTheme } from '@mui/material/styles';

// @project
import { CSS_VAR_PREFIX } from '@/config';
import useConfig from '@/hooks/useConfig';
import componentsOverride from './overrides';
import { buildPalette } from './palette';
import typography from './typography';

export const colorSchemeSelector = 'data-ai-color-scheme';

/*************************** AI THEME - MAIN ***************************/

export default function ThemeCustomization(selector) {
  const {
    state: { themeDirection, primaryColor }
  } = useConfig();

  const palette = buildPalette(primaryColor);
  const muiTheme = createTheme();

  // create duplicate theme due to responsive typography and fontFamily
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 768,
        md: 1024,
        lg: 1266,
        xl: 1440
      }
    },
    direction: themeDirection,
    colorSchemes: {
      light: { palette: palette.light },
      dark: { palette: palette.dark }
    },
    cssVariables: {
      cssVarPrefix: CSS_VAR_PREFIX,
      colorSchemeSelector: selector || colorSchemeSelector
    },
    typography: typography(muiTheme)
  });

  theme.components = componentsOverride(theme);

  return theme;
}
