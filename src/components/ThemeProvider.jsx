import PropTypes from 'prop-types';

import { Suspense, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// @mui
import CssBaseline from '@mui/material/CssBaseline';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

// @project
import { Themes } from '@/config';
import useConfig from '@/hooks/useConfig';
import Loader from './Loader';

import aiTheme from '@/views/landings/ai/theme';

// Theme Map
const themeMap = {
  [Themes.THEME_AI]: aiTheme
};

/***************************  COMMON - THEME PROVIDER  ***************************/

export default function ThemeProvider({ children }) {
  const { state, setField } = useConfig();
  const location = useLocation();

  const [loader, setLoader] = useState(true);

  const selectedTheme = themeMap[state.currentTheme]?.('data-color-scheme') || aiTheme('data-color-scheme');

  useEffect(() => {
    setLoader(false);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const themeParam = params.get('theme');
    const normalizedTheme = themeParam === 'cryptomake' ? Themes.THEME_CRYPTO : themeParam;

    if (!normalizedTheme) return;
    if (!Object.values(Themes).includes(normalizedTheme)) return;
    if (normalizedTheme === state.currentTheme) return;

    setField('currentTheme', normalizedTheme);
  }, [location.search, setField, state.currentTheme]);

  /**
   * A loader is needed here to initialize the configuration from localStorage and set the default theme.
   * Without a loader,
   * the theme palette and fontFamily don't match, resulting in an error like:
   * "Warning: Prop className did not match".
   */

  return (
    <>
      <InitColorSchemeScript attribute="data-color-scheme" defaultMode="light" />
      <Suspense fallback={<Loader />}>
        {loader ? (
          <Loader />
        ) : (
          <MuiThemeProvider disableTransitionOnChange theme={selectedTheme} defaultMode="light">
            <CssBaseline enableColorScheme />
            {children}
          </MuiThemeProvider>
        )}
      </Suspense>
    </>
  );
}

ThemeProvider.propTypes = { children: PropTypes.any };
