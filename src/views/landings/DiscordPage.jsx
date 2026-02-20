import { useEffect, useState } from 'react';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ContainerWrapper from '@/components/ContainerWrapper';
import { SECTION_COMMON_PY } from '@/utils/constant';

const discordSections = [
  { id: 'join-discord', heading: 'Join Our Discord', caption: 'Connect with our team and community for real-time support and discussions.' },
  { id: 'channels', heading: 'Channels', caption: 'Explore our Discord channels for announcements, help, and networking.' },
  { id: 'events', heading: 'Events', caption: 'Participate in community events, AMAs, and webinars.' },
  { id: 'rules', heading: 'Community Rules', caption: 'Review our guidelines to keep the community safe and welcoming.' },
  { id: 'faq', heading: 'Discord FAQ', caption: 'Find answers to common questions about our Discord server.' },
];

function useScrollspy(ids, offset = 0) {
  const [activeId, setActiveId] = useState('');
  useEffect(() => {
    const listener = () => {
      const scroll = window.scrollY;
      const position = ids
        .map((id) => {
          const element = document.getElementById(id);
          if (!element) return { id, top: -1, bottom: -1 };
          const rect = element.getBoundingClientRect();
          const top = Math.max(0, rect.top + scroll - offset);
          const bottom = Math.max(0, rect.bottom + scroll - offset);
          return { id, top, bottom };
        })
        .find(({ top, bottom }) => scroll >= top && scroll <= bottom);
      setActiveId(position?.id || '');
    };
    window.addEventListener('scroll', listener);
    window.addEventListener('resize', listener);
    listener();
    return () => {
      window.removeEventListener('scroll', listener);
      window.removeEventListener('resize', listener);
    };
  }, [ids, offset]);
  return activeId;
}

export default function DiscordPage() {
  const ids = discordSections.map((item) => item.id);
  const activeId = useScrollspy(ids, 60);
  const [selectedID, setSelectedID] = useState(activeId);
  useEffect(() => { if (activeId) setSelectedID(activeId); }, [activeId]);
  return (
    <ContainerWrapper sx={{ pb: SECTION_COMMON_PY }}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid item xs={12} sm={4} md={3}>
          <List component="div" sx={{ position: 'sticky', top: 20 }} disablePadding>
            {discordSections.map((item, index) => (
              <ListItemButton
                key={index}
                href={`#${item.id}`}
                sx={{ py: 1.25, px: 1.5, borderRadius: 3, mb: 0.75, ...(selectedID === item.id && { color: 'primary.main', bgcolor: 'grey.100' }), '&:hover': { bgcolor: 'grey.50' } }}
                onClick={() => setSelectedID(item.id)}
              >
                <ListItemText primary={item.heading} sx={{ my: 0 }} slotProps={{ primary: { variant: 'subtitle1' } }} />
              </ListItemButton>
            ))}
          </List>
          <Divider sx={{ display: { xs: 'block', sm: 'none' } }} />
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          {discordSections.map((item, index) => (
            <Stack key={index} id={item.id} sx={{ py: { xs: 1, sm: 1.5, md: 3 }, px: { md: 3 }, gap: 1, '&:first-of-type': { pt: { sm: 0 } } }}>
              <Typography variant="h4">{item.heading}</Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>{item.caption}</Typography>
            </Stack>
          ))}
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
}
