// @mui
import Stack from '@mui/material/Stack';

// @assets
import PageLoader from '@/images/graphics/PageLoader';

/***************************  COMMON - LOADER  ***************************/

import { useTheme } from '@mui/material/styles';

export default function Loader() {
  const theme = useTheme();
  const mode = theme.palette.mode;
  return (
    <Stack
      sx={{
        height: '100vh',
        width: 1,
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: mode === 'dark' ? '#11141a' : '#fff',
        transition: 'background 0.3s',
      }}
    >
      <PageLoader mode={mode} />
    </Stack>
  );
}
