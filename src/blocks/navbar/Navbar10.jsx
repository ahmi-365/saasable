import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import ContainerWrapper from '@/components/ContainerWrapper';
import ElevationScroll from './ElevationScroll';

export const navbar10Height = { xs: 64, sm: 72, md: 84 };

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  '@media all': {
    minHeight: navbar10Height.md,
    paddingLeft: 0,
    paddingRight: 0
  },
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    '@media all': { minHeight: navbar10Height.sm }
  },
  [theme.breakpoints.down('sm')]: {
    '@media all': { minHeight: navbar10Height.xs },
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5)
  }
}));



export default function Navbar10({ children, isFixed = true, ...props }) {
  return (
    <>
      <ElevationScroll isFixed={isFixed} {...props}>
        <AppBar {...(!isFixed && { position: 'static', elevation: 0 })} component="nav" color="inherit" sx={{ background: 'transparent' }}>
          <StyledToolbar>
            <ContainerWrapper>{children}</ContainerWrapper>
          </StyledToolbar>
        </AppBar>
      </ElevationScroll>
      {isFixed && <StyledToolbar />}
    </>
  );
}

Navbar10.propTypes = { children: PropTypes.any, isFixed: PropTypes.bool, props: PropTypes.any };
