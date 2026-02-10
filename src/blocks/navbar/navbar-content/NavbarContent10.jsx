import PropTypes from 'prop-types';

// @mui
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

// @third-party
import { motion } from 'motion/react';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import ContainerWrapper from '@/components/ContainerWrapper';
import Logo from '@/components/logo';
import { MenuPopper, NavMenu, NavMenuDrawer, NavPrimaryButton, NavSecondaryButton } from '@/components/navbar';
import SvgIcon from '@/components/SvgIcon';
import useConfig from '@/hooks/useConfig';
import { withAlpha } from '@/utils/colorUtils';
import { navbar10Height } from '../Navbar10';

/***************************  NAVBAR - CONTENT 10  ***************************/

/**
 *
 * Demos:
 * - [NavbarContent10](https://www.Planify.io/blocks/navbar/navbar10)
 *
 * API:
 * - [NavbarContent10 API](https://phoenixcoded.gitbook.io/Planify/ui-kit/development/components/navbar/navbar-content/navbarcontent10#props-details)
 */

export default function NavbarContent10({ landingBaseUrl, navItems, primaryBtn, secondaryBtn, animated }) {
  const theme = useTheme();
  const {
    state: { primaryColor, colorScheme },
    setField
  } = useConfig();

  const downMD = useMediaQuery(theme.breakpoints.down('md'));
  const downSM = useMediaQuery(theme.breakpoints.down('sm'));

  const colorPatches = [
    { name: 'Red', value: '#BA1A1A' },
    { name: 'Blue', value: '#0B63CE' },
    { name: 'Green', value: '#1B7C4A' },
    { name: 'Orange', value: '#C25100' },
    { name: 'Violet', value: '#6B4DFF' },
    { name: 'Teal', value: '#0A7F78' },
    { name: 'Pink', value: '#C2185B' },
    { name: 'Indigo', value: '#3949AB' },
    { name: 'Gold', value: '#A36A00' },
    { name: 'Slate', value: '#435465' }
  ];

  const isDarkMode = (colorScheme || 'light') === 'dark';

  return (
    <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', width: 1 }}>
      <Logo to={landingBaseUrl} />
      {!downMD && navItems && (
        <Box sx={{ bgcolor: 'grey.200', borderRadius: 10 }}>
          <NavMenu {...{ navItems }} />
        </Box>
      )}
      <Stack direction="row" sx={{ gap: { xs: 1, md: 1.5 } }}>
        <MenuPopper
          offset={12}
          popperWidth={240}
          toggleProps={{
            children: <SvgIcon name="tabler-settings-2" color="text.primary" />,
            color: 'inherit',
            sx: { minWidth: 40, width: 40, height: 40, p: 0 }
          }}
        >
          <Box sx={{ px: 2, py: 1.5 }}>
            <Typography variant="caption" sx={{ display: 'block', color: 'text.secondary', mb: 1 }}>
              Theme color
            </Typography>
            <Stack direction="row" sx={{ gap: 1, flexWrap: 'wrap' }}>
              {colorPatches.map((patch) => {
                const isActive = patch.value.toLowerCase() === primaryColor?.toLowerCase();

                return (
                  <ButtonBase
                    key={patch.value}
                    onClick={() => setField('primaryColor', patch.value)}
                    sx={{
                      width: 28,
                      height: 28,
                      borderRadius: '50%',
                      bgcolor: patch.value,
                      border: '2px solid',
                      borderColor: isActive ? 'text.primary' : 'transparent',
                      boxShadow: `0 0 0 1px ${theme.vars.palette.grey[300]}`,
                      transition: 'transform 0.15s ease',
                      '&:hover': { transform: 'scale(1.08)' }
                    }}
                    aria-label={`Set theme color ${patch.name}`}
                  />
                );
              })}
            </Stack>
            <Typography variant="caption" sx={{ display: 'block', color: 'text.secondary', mt: 1.5, mb: 1 }}>
              Mode
            </Typography>
            <ButtonBase
              onClick={() => setField('colorScheme', isDarkMode ? 'light' : 'dark')}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                px: 1.5,
                py: 0.75,
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'grey.300',
                bgcolor: isDarkMode ? 'grey.200' : 'grey.50'
              }}
              aria-label="Toggle color mode"
            >
              <SvgIcon name={isDarkMode ? 'tabler-sun' : 'tabler-moon'} size={18} color="text.primary" />
              <Typography variant="body2" sx={{ color: 'text.primary' }}>
                {isDarkMode ? 'Light' : 'Dark'}
              </Typography>
            </ButtonBase>
          </Box>
        </MenuPopper>
        {!downSM && (
          <>
            {secondaryBtn && <NavSecondaryButton {...secondaryBtn} />}
            <ButtonAnimationWrapper>
              {animated ? (
                <motion.div
                  initial={{ borderRadius: '50px' }}
                  animate={{
                    boxShadow: [
                      `0px 0px 0px 0px ${withAlpha(theme.vars.palette.primary.main, 0.7)}`,
                      `0px 0px 0px 8px ${withAlpha(theme.vars.palette.primary.main, 0)}`,
                      `0px 0px 0px 0px ${withAlpha(theme.vars.palette.primary.main, 0)}`
                    ],
                    borderRadius: '50px'
                  }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
                >
                  <NavPrimaryButton {...primaryBtn} />
                </motion.div>
              ) : (
                <NavPrimaryButton {...primaryBtn} />
              )}
            </ButtonAnimationWrapper>
          </>
        )}
        {downMD && (
          <Box sx={{ flexGrow: 1 }}>
            <MenuPopper
              offset={downSM ? 12 : 16}
              toggleProps={{
                children: <SvgIcon name="tabler-menu-2" color="text.primary" />,
                color: 'inherit',
                sx: { minWidth: 40, width: 40, height: 40, p: 0 }
              }}
            >
              <ContainerWrapper
                sx={{
                  height: 'auto',
                  maxHeight: { xs: `calc(100vh - ${navbar10Height.xs}px)`, sm: `calc(100vh - ${navbar10Height.sm}px)` },
                  overflowY: 'auto'
                }}
              >
                {navItems && (
                  <Box sx={{ mx: -2 }}>
                    <NavMenuDrawer {...{ navItems }} />
                  </Box>
                )}
                {downSM && (
                  <Stack direction="row" sx={{ justifyContent: 'space-between', gap: 1, px: 2, py: 2.5, mx: -2, bgcolor: 'grey.100' }}>
                    {secondaryBtn && <NavSecondaryButton {...secondaryBtn} />}
                    <ButtonAnimationWrapper>
                      <NavPrimaryButton {...primaryBtn} />
                    </ButtonAnimationWrapper>
                  </Stack>
                )}
              </ContainerWrapper>
            </MenuPopper>
          </Box>
        )}
      </Stack>
    </Stack>
  );
}

NavbarContent10.propTypes = {
  landingBaseUrl: PropTypes.any,
  navItems: PropTypes.any,
  primaryBtn: PropTypes.any,
  secondaryBtn: PropTypes.any,
  selectedTheme: PropTypes.any,
  animated: PropTypes.any
};
