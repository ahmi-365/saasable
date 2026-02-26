import React from 'react';
import Hero17 from '@/blocks/hero/Hero17';
import ContainerWrapper from '@/components/ContainerWrapper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import branding from '@/branding.json';

const heroData = {
  chip: { label: 'Blog' },
  headLine: 'Insights & Updates',
  captionLine: `Explore the latest news, stories, and resources from ${branding.brandName}. Stay inspired and informed with our curated blog content.`
};

const blogCards = [
  {
    heading: 'How to Scale Your SaaS Startup',
    caption: 'Proven strategies and actionable tips to help your SaaS business grow efficiently and sustainably.',
    image: '/assets/images/graphics/ai/desktop1-light.svg',
    link: '#'
  },
  {
    heading: 'Product Update: New Dashboard Features',
    caption: 'A deep dive into our latest dashboard improvements and how they empower your workflow.',
    image: '/assets/images/graphics/ai/desktop2-light.svg',
    link: '#'
  },
  {
    heading: 'Customer Success Story: Acme Corp',
    caption: 'Discover how Acme Corp leveraged our platform to achieve 3x faster project delivery.',
    image: '/assets/images/graphics/ai/desktop3-light.svg',
    link: '#'
  },
  {
    heading: 'The Future of SaaS: 2026 Trends',
    caption: 'Explore the top SaaS trends and predictions shaping the industry in 2026 and beyond.',
    image: '/assets/images/graphics/ai/desktop4-light.svg',
    link: '#'
  },
  {
    heading: 'Guide: Building a Remote Team',
    caption: 'Best practices for hiring, onboarding, and managing a high-performing remote SaaS team.',
    image: '/assets/images/graphics/ai/desktop5-light.svg',
    link: '#'
  },
  {
    heading: 'Resource: SaaS Metrics Cheat Sheet',
    caption: 'A handy reference for tracking the most important metrics for your SaaS business.',
    image: '/assets/images/graphics/ai/desktop6-light.svg',
    link: '#'
  }
];

export default function BlogPage() {
  return (
    <>
      <Hero17 {...heroData} />
      <ContainerWrapper sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
        <Grid container spacing={{ xs: 2, md: 4 }}>
          {blogCards.map((card, idx) => (
            <Grid key={idx} item xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 4, boxShadow: 2, transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-6px)', boxShadow: 6 } }}>
                <CardContent>
                  <img src={card.image} alt={card.heading} style={{ width: '100%', borderRadius: 12, marginBottom: 16 }} />
                  <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 600 }}>
                    {card.heading}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                    {card.caption}
                  </Typography>
                  <a href={card.link} style={{ color: '#1976d2', textDecoration: 'none', fontWeight: 500 }}>Read More →</a>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </ContainerWrapper>
    </>
  );
}
