import React from 'react';
import Hero17 from '@/blocks/hero/Hero17';
import ContainerWrapper from '@/components/ContainerWrapper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import branding from '@/branding.json';

const heroData = {
  chip: { label: 'Discord' },
  headLine: 'Join Our Discord Community',
  captionLine: `Connect with the ${branding.brandName} team and community for real-time support, events, and networking.`
};

const discordCards = [
  {
    heading: 'Join Our Discord',
    caption: 'Connect with our team and community for real-time support and discussions.',
    link: '#'
  },
  {
    heading: 'Channels',
    caption: 'Explore our Discord channels for announcements, help, and networking.',
    link: '#'
  },
  {
    heading: 'Events',
    caption: 'Participate in community events, AMAs, and webinars.',
    link: '#'
  },
  {
    heading: 'Community Rules',
    caption: 'Review our guidelines to keep the community safe and welcoming.',
    link: '#'
  },
  {
    heading: 'Discord FAQ',
    caption: 'Find answers to common questions about our Discord server.',
    link: '#'
  }
];

export default function DiscordPage() {
  return (
    <>
      <Hero17 {...heroData} />
      <ContainerWrapper sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
        <Grid container spacing={{ xs: 2, md: 4 }}>
          {discordCards.map((card, idx) => (
            <Grid key={idx} item xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 4, boxShadow: 2, transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-6px)', boxShadow: 6 } }}>
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 600 }}>
                    {card.heading}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                    {card.caption}
                  </Typography>
                  <a href={card.link} style={{ color: '#1976d2', textDecoration: 'none', fontWeight: 500 }}>Join Discord →</a>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </ContainerWrapper>
    </>
  );
}
