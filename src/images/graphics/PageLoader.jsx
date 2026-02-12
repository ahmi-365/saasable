// @mui
import Avatar from '@mui/material/Avatar';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import { keyframes } from '@mui/material/styles';

const faviconSrc = '/assets/images/Logo&Icon/Favicon.png';

const rotateAnimation = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(-360deg) }
`;

const dotAnimation = keyframes`
  0% { transform: rotate(-360deg) }
  100% { transform: rotate(0deg) }
`;

/***************************  PAGE LOADER  ***************************/

import { useTheme } from '@mui/material/styles';

export default function PageLoader({ mode: modeProp, forceBg }) {
  const theme = useTheme();
  const mode = modeProp || theme.palette.mode || 'light';
  const isDark = mode === 'dark';
  const commonProps = {
    disableShrink: true,
    size: 100,
    variant: 'determinate',
    thickness: 4,
    color: isDark ? 'inherit' : 'primary',
  };
  return (
    <Stack
      direction="row"
      sx={theme => ({
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: forceBg === 'dark' ? theme.palette.grey[900] : (isDark ? theme.palette.grey[900] : 'transparent'),
        borderRadius: '50%',
        p: isDark ? 2 : 0,
        boxShadow: isDark ? '0 0 0 2px #111, 0 2px 16px #0008' : 'none',
        transition: 'background 0.3s',
      })}
    >
      <Avatar
        src={faviconSrc}
        alt="App favicon"
        imgProps={{ loading: 'eager', decoding: 'async', fetchPriority: 'high' }}
        sx={theme => ({
          width: 56,
          height: 56,
          bgcolor: isDark ? theme.palette.grey[900] : 'primary.lighter',
          border: isDark ? '1px solid #222' : 'none',
          boxShadow: isDark ? '0 0 0 2px #222' : 'none',
          transition: 'background 0.3s',
        })}
      />
      <CircularProgress
        {...commonProps}
        value={100}
        rel="noopener noreferrer"
        aria-label="loading"
        sx={theme => ({
          position: 'absolute',
          zIndex: 1,
          color: isDark ? theme.palette.grey[100] : theme.palette.primary.light,
          '& .MuiCircularProgress-circle': { strokeLinecap: 'round', strokeDasharray: '6 9.5 !important' },
          animation: `${dotAnimation} 6s linear infinite`,
        })}
      />
      <CircularProgress
        {...commonProps}
        value={60}
        rel="noopener noreferrer"
        aria-label="loading"
        sx={{
          position: 'absolute',
          zIndex: 1,
          color: isDark ? (theme.palette.primary.main || '#fff') : theme.palette.primary.dark,
          '& .MuiCircularProgress-circle': { strokeLinecap: 'round' },
          animation: `${rotateAnimation} 35s linear infinite`,
        }}
      />
    </Stack>
  );
}
