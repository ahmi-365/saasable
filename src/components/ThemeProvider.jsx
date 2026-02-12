import PropTypes from 'prop-types';
import { Suspense, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { Themes } from '@/config';
import useConfig from '@/hooks/useConfig';
import Loader from './Loader';
import aiTheme from '@/views/landings/ai/theme';


const themeMap = {
  [Themes.THEME_AI]: aiTheme
};


export default function ThemeProvider({ children }) {
  const { state, setField } = useConfig();
  const location = useLocation();

  const [loader, setLoader] = useState(true);


  const selectedTheme = themeMap[state.currentTheme]?.('data-color-scheme') || aiTheme('data-color-scheme');
  const mode = state.colorScheme || 'light';

  useEffect(() => {
    setLoader(false);
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.setAttribute('data-color-scheme', mode);
  }, [mode]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const themeParam = params.get('theme');
    const normalizedTheme = themeParam === 'cryptomake' ? Themes.THEME_CRYPTO : themeParam;

    if (!normalizedTheme) return;
    if (!Object.values(Themes).includes(normalizedTheme)) return;
    if (normalizedTheme === state.currentTheme) return;

    setField('currentTheme', normalizedTheme);
  }, [location.search, setField, state.currentTheme]);

 

  return (
    <>
      <InitColorSchemeScript attribute="data-color-scheme" defaultMode={mode} />
      <Suspense fallback={<Loader />}>
        {loader ? (
          <Loader />
        ) : (
          <MuiThemeProvider disableTransitionOnChange theme={selectedTheme} defaultMode={mode}>
            <CssBaseline enableColorScheme />
            {children}
          </MuiThemeProvider>
        )}
      </Suspense>
    </>
  );
}

ThemeProvider.propTypes = { children: PropTypes.any };
