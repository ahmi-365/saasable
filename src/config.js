// Font families - loaded via CSS in globals.css
// Add to globals.css:
// @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Figtree:wght@400;500;600;700&family=Roboto:wght@100;300;400;500;700;900&display=swap');

export let Themes;

(function (Themes) {
  Themes['THEME_DEFAULT'] = 'default';
  Themes['THEME_CRM'] = 'crm';
  Themes['THEME_AI'] = 'ai';
  Themes['THEME_CRYPTO'] = 'crypto';
  Themes['THEME_HOSTING'] = 'hosting';
  Themes['THEME_PMS'] = 'pms';
  Themes['THEME_HRM'] = 'hrm';
  Themes['THEME_PLUGIN'] = 'plugin';
  Themes['THEME_LMS'] = 'lms';
})(Themes || (Themes = {}));

export const CSS_VAR_PREFIX = '';

/***************************  CONFIG  ***************************/

const config = {
  currentTheme: Themes.THEME_DEFAULT,
  primaryColor: '#BA1A1A',
  colorScheme: 'light'
};

export default config;

/***************************  THEME - FONT FAMILY  ***************************/

export const FONT_ROBOTO = '"Roboto", sans-serif';
export const FONT_ARCHIVO = '"Archivo", sans-serif';
export const FONT_FIGTREE = '"Figtree", sans-serif';
