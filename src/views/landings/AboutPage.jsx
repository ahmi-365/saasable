

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

const aboutSections = [
  {
    id: 'about-planify',
    heading: 'About Planify',
    caption: 'Empowering teams to build, launch, and scale SaaS products faster with beautiful, customizable UI blocks and robust tools—by Planify.'
  },
  {
    id: 'mission',
    heading: 'Our Mission',
    caption: 'At Planify, our mission is to simplify the process of building SaaS applications. We provide a comprehensive library of over 200 UI blocks, templates, and integrations, enabling startups and enterprises to create stunning, high-performing products with ease and speed.'
  },
  {
    id: 'story',
    heading: 'Our Story',
    caption: 'Founded by a team of passionate designers and developers, Planify was born out of the need for a flexible, scalable, and visually appealing UI kit for SaaS products. We believe that great design and seamless user experience should be accessible to every team, regardless of size or budget.'
  },
  {
    id: 'values',
    heading: 'Our Values',
    caption: 'Innovation: We constantly evolve our products to meet the changing needs of SaaS teams. Quality: Every block and template is crafted with attention to detail and usability. Community: We listen to our users and build features that matter most to them. Support: Our team is dedicated to helping you succeed at every step.'
  },
  {
    id: 'team',
    heading: 'Meet the Team',
    caption: 'Our diverse team brings together expertise in design, development, and customer success to deliver the best possible experience for our users.'
  },
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

export default function AboutPage() {
  const ids = aboutSections.map((item) => item.id);
  const activeId = useScrollspy(ids, 60);
  const [selectedID, setSelectedID] = useState(activeId);
  useEffect(() => { if (activeId) setSelectedID(activeId); }, [activeId]);
  return (
    <ContainerWrapper sx={{ pb: SECTION_COMMON_PY }}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid item xs={12} sm={4} md={3}>
          <List component="div" sx={{ position: 'sticky', top: 20 }} disablePadding>
            {aboutSections.map((item, index) => (
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
          {aboutSections.map((item, index) => (
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

