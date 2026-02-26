import React from 'react';
import Hero17 from '@/blocks/hero/Hero17';
import ContainerWrapper from '@/components/ContainerWrapper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import branding from '@/branding.json';

const heroData = {
  chip: { label: 'Support' },
  headLine: 'We’re Here to Help',
  captionLine: `Find answers, get support, and connect with the ${branding.brandName} team. Our experts are ready to assist you.`
};

const supportCards = [
  {
    heading: 'Contact Support',
    caption: 'Reach out to our support team for any assistance or questions. We’re available 24/7.',
    link: '#'
  },
  {
    heading: 'Submit a Ticket',
    caption: 'Open a support ticket and track its status. Get personalized help for your issue.',
    link: '#'
  },
  {
    heading: 'Community Forum',
    caption: 'Join our community forum to discuss and get help from other users and experts.',
    link: '#'
  },
  {
    heading: 'Support Resources',
    caption: 'Access guides, FAQs, and troubleshooting resources to solve problems quickly.',
    link: '#'
  },
  {
    heading: 'Feedback',
    caption: 'Share your feedback to help us improve our services. We value your input!',
    link: '#'
  }
];

export default function SupportPage() {
  return (
    <>
      <Hero17 {...heroData} />
      <ContainerWrapper sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
        <Grid container spacing={{ xs: 2, md: 4 }}>
          {supportCards.map((card, idx) => (
            <Grid key={idx} item xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 4, boxShadow: 2, transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-6px)', boxShadow: 6 } }}>
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 600 }}>
                    {card.heading}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                    {card.caption}
                  </Typography>
                  <a href={card.link} style={{ color: '#1976d2', textDecoration: 'none', fontWeight: 500 }}>Get Support →</a>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </ContainerWrapper>
    </>
  );
}
