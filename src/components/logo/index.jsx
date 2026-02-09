import PropTypes from 'prop-types';

// @next
import { NextLink } from '@/components/routes';

// @mui
import ButtonBase from '@mui/material/ButtonBase';
import { useTheme } from '@mui/material/styles';

// @project
import { generateFocusVisibleStyles } from '@/utils/CommonFocusStyle';
import LogoIcon from './LogoIcon';
import LogoMain from './LogoMain';

/***************************  MAIN - LOGO  ***************************/

export default function LogoSection({ isIcon, sx, to }) {
  const theme = useTheme();
  const palette = theme?.vars ? theme.vars.palette : theme.palette;
  const baseName = import.meta.env.VITE_BASE_NAME || '/';

  return (
    <NextLink href={!to ? baseName : to} passHref>
      <ButtonBase
        disableRipple
        sx={{ ...sx, display: 'block', '&:focus-visible': generateFocusVisibleStyles(palette.primary.main) }}
        aria-label="logo"
      >
        {isIcon ? <LogoIcon /> : <LogoMain />}
      </ButtonBase>
    </NextLink>
  );
}

LogoSection.propTypes = { isIcon: PropTypes.bool, sx: PropTypes.any, to: PropTypes.string };
