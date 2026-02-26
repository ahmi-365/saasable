// @project
import React from 'react';
import Hero17 from '@/blocks/hero/Hero17';
import ContainerWrapper from '@/components/ContainerWrapper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import branding from '@/branding.json';

const heroData = {
  chip: { label: 'Legal' },
  headLine: 'Terms & Conditions',
  captionLine: `Understand the terms and conditions for using ${branding.brandName}. Your rights, responsibilities, and important legal information.`
};

const termsCards = [
  {
    heading: 'Acceptance of Terms',
    caption: 'By accessing and using this website, you agree to be bound by these Terms and Conditions of Use.'
  },
  {
    heading: 'Changes to Terms',
    caption: 'We reserve the right to modify or replace these terms at our sole discretion. It is your responsibility to check these terms periodically.'
  },
  {
    heading: 'User Conduct',
    caption: 'You agree to use this website only for lawful purposes and in a manner consistent with all applicable laws and regulations.'
  },
  {
    heading: 'Intellectual Property',
    caption: 'All content on this website is the property of our company or its content suppliers and protected by copyright laws.'
  },
  {
    heading: 'Limitation of Liability',
    caption: 'In no event shall our company or its affiliates be liable for any direct, indirect, incidental, special, or consequential damages.'
  },
  {
    heading: 'Governing Law',
    caption: 'These terms are governed by and construed in accordance with the laws of your country/state.'
  }
];

export default function TermsCondition() {
  return (
    <>
      <Hero17 {...heroData} />
      <ContainerWrapper sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
        <Grid container spacing={{ xs: 2, md: 4 }}>
          {termsCards.map((card, idx) => (
            <Grid key={idx} item xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 4, boxShadow: 2, transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-6px)', boxShadow: 6 } }}>
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 600 }}>
                    {card.heading}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                    {card.caption}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </ContainerWrapper>
    </>
  );
}
