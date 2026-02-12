import Stack from '@mui/material/Stack';
import PageLoader from '@/images/graphics/PageLoader';
import { useTheme } from '@mui/material/styles';

export default function Loader() {
  const theme = useTheme();
  const mode = theme.palette.mode;
  return (
    <Stack
      sx={theme => ({
        height: '100vh',
        width: 1,
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: mode === 'dark' ? theme.palette.grey[900] : '#fff',
        transition: 'background 0.3s',
      })}
    >
      <PageLoader mode={mode} forceBg={mode === 'dark' ? 'dark' : undefined} />
    </Stack>
  );
}
