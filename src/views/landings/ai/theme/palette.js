// @mui
import { darken, lighten } from '@mui/material/styles';

// @project
import { extendPaletteWithChannels } from '@/utils/colorUtils';

/*************************** DEFAULT / AI THEME - PALETTE  ***************************/

export function buildPalette(primaryColor) {
  const primaryMain = primaryColor || '#BA1A1A';
  const secondaryMain = lighten(primaryMain, 0.3);

  const primaryDarkMain = primaryMain;
  const secondaryDarkMain = lighten(primaryMain, 0.15);

  const textPrimary = '#1A1C1E';
  const textSecondary = '#42474E';
  const divider = '#C2C7CE';
  const background = '#FFFFFF';

  const lightPalette = {
    primary: {
      lighter: lighten(primaryMain, 0.5),
      light: lighten(primaryMain, 0.3),
      main: primaryMain,
      dark: darken(primaryMain, 0.2),
      darker: darken(primaryMain, 0.4)
    },
    secondary: {
      lighter: lighten(secondaryMain, 0.4),
      light: lighten(secondaryMain, 0.2),
      main: secondaryMain,
      dark: darken(secondaryMain, 0.2),
      darker: darken(secondaryMain, 0.35)
    },
    grey: {
      50: '#F9F9FC',
      100: '#F1F4F9',
      200: '#EBEEF3',
      300: '#E6E8EE',
      400: '#E2E2E5',
      500: '#D7DADF',
      600: divider,
      700: '#72787E',
      800: textSecondary,
      900: textPrimary
    },
    text: {
      primary: textPrimary,
      secondary: textSecondary
    },
    divider,
    background: {
      default: background
    }
  };

  const darkTextPrimary = '#F2F4F8';
  const darkTextSecondary = '#C7CDD6';
  const darkDivider = '#2C3138';
  const darkBackground = '#0F1115';

  const darkPalette = {
    primary: {
      lighter: lighten(primaryDarkMain, 0.35),
      light: lighten(primaryDarkMain, 0.2),
      main: primaryDarkMain,
      dark: darken(primaryDarkMain, 0.2),
      darker: darken(primaryDarkMain, 0.4)
    },
    secondary: {
      lighter: lighten(secondaryDarkMain, 0.3),
      light: lighten(secondaryDarkMain, 0.15),
      main: secondaryDarkMain,
      dark: darken(secondaryDarkMain, 0.25),
      darker: darken(secondaryDarkMain, 0.4)
    },
    grey: {
      50: '#1A1D24',
      100: '#1F232B',
      200: '#252A33',
      300: '#2B313B',
      400: '#323845',
      500: '#3A4251',
      600: darkDivider,
      700: '#414A5B',
      800: '#596173',
      900: '#707A8E'
    },
    text: {
      primary: darkTextPrimary,
      secondary: darkTextSecondary
    },
    divider: darkDivider,
    background: {
      default: darkBackground,
      paper: '#171A21'
    }
  };

  const commonColor = { common: { black: '#000', white: '#fff' } };

  const extendedLight = extendPaletteWithChannels(lightPalette);
  const extendedDark = extendPaletteWithChannels(darkPalette);
  const extendedCommon = extendPaletteWithChannels(commonColor);

  return {
    light: {
      mode: 'light',
      ...extendedCommon,
      ...extendedLight
    },
    dark: {
      mode: 'dark',
      ...extendedCommon,
      ...extendedDark
    }
  };
}