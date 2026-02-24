
import React, { useEffect, useState } from 'react';
import Hero17 from '@/blocks/hero/Hero17';
import branding from '@/branding.json';
import ContainerWrapper from '@/components/ContainerWrapper';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { SECTION_COMMON_PY } from '@/utils/constant';

const supportSections = [
  { id: 'contact', heading: 'Contact Support', caption: 'Reach out to our support team for any assistance or questions.' },
  { id: 'ticket', heading: 'Submit a Ticket', caption: 'Open a support ticket and track its status.' },
  { id: 'community', heading: 'Community Forum', caption: 'Join our community forum to discuss and get help from other users.' },
  { id: 'resources', heading: 'Support Resources', caption: 'Access guides, FAQs, and troubleshooting resources.' },
  { id: 'feedback', heading: 'Feedback', caption: 'Share your feedback to help us improve our services.' },
];

const heroData = {
  chip: { label: 'Support' },
  headLine: 'We’re Here to Help',
  captionLine: 'Find answers, get support, and connect with the ' + branding.brandName + ' team.',
  videoSrc: '',
  videoThumbnail: '',
  featureButtons: []
};

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


export default function SupportPage() {
  const ids = supportSections.map((item) => item.id);
  const activeId = useScrollspy(ids, 60);
  const [selectedID, setSelectedID] = useState(activeId);
  useEffect(() => { if (activeId) setSelectedID(activeId); }, [activeId]);
  return (
    <>
      <Hero17 {...heroData} />
      <ContainerWrapper sx={{ pb: SECTION_COMMON_PY }}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} sm={4} md={3}>
            <List component="div" sx={{ position: 'sticky', top: 20, bgcolor: 'background.paper', borderRadius: 3, boxShadow: 1 }} disablePadding>
              {supportSections.map((item, index) => (
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
            {supportSections.map((item, index) => (
              <Stack key={index} id={item.id} sx={{ py: { xs: 1, sm: 1.5, md: 3 }, px: { md: 3 }, gap: 1, '&:first-of-type': { pt: { sm: 0 } } }}>
                <Typography variant="h4" color="primary.main">{item.heading}</Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>{item.caption}</Typography>
              </Stack>
            ))}
          </Grid>
        </Grid>
      </ContainerWrapper>
    </>
  );
}
