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

export default function PageLoader() {
  const commonProps = { disableShrink: true, size: 100, variant: 'determinate', thickness: 4, color: 'primary' };

  return (
    <Stack direction="row" sx={{ position: 'relative', justifyContent: 'center', alignItems: 'center' }}>
      <Avatar
        src={faviconSrc}
        alt="App favicon"
        imgProps={{ loading: 'eager', decoding: 'async', fetchPriority: 'high' }}
        sx={{
          width: 56,
          height: 56,
          bgcolor: 'primary.lighter'
        }}
      />
      <CircularProgress
        {...commonProps}
        value={100}
        rel="noopener noreferrer"
        aria-label="loading"
        sx={{
          position: 'absolute',
          zIndex: 1,
          '& .MuiCircularProgress-circle': { strokeLinecap: 'round', strokeDasharray: '6 9.5 !important' },
          animation: `${dotAnimation} 6s linear infinite`
        }}
      />
      <CircularProgress
        {...commonProps}
        value={60}
        rel="noopener noreferrer"
        aria-label="loading"
        sx={{
          position: 'absolute',
          zIndex: 1,
          '& .MuiCircularProgress-circle': { strokeLinecap: 'round' },
          animation: `${rotateAnimation} 35s linear infinite`
        }}
      />
    </Stack>
  );
}
