import React from 'react';
import Hero17 from '@/blocks/hero/Hero17';
import ContainerWrapper from '@/components/ContainerWrapper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import branding from '@/branding.json';
import { useTheme } from '@mui/material/styles';

const heroData = {
  chip: { label: 'Documentation' },
  headLine: 'Documentation Center',
  captionLine: `Unlock the full power of ${branding.brandName} with our guides, API docs, and best practices.`,
  align: 'left',
};

const docCards = [
  {
    heading: 'Getting Started Guide',
    caption: 'Step-by-step instructions to help you set up and launch your first project quickly.',
    link: '#',
    color: 'primary.main',
  },
  {
    heading: 'API Reference',
    caption: 'Comprehensive documentation for all API endpoints, parameters, and usage examples.',
    link: '#',
    color: 'success.main',
  },
  {
    heading: 'Integration Tutorials',
    caption: 'Learn how to connect our platform with your favorite tools and services.',
    link: '#',
    color: 'warning.main',
  },
  {
    heading: 'FAQ & Troubleshooting',
    caption: 'Find answers to common questions and solutions to typical issues.',
    link: '#',
    color: 'info.main',
  },
  {
    heading: 'Best Practices',
    caption: 'Tips and recommendations for getting the most value from our platform.',
    link: '#',
    color: 'secondary.main',
  },
  {
    heading: 'Contact Support',
    caption: 'Need help? Reach out to our support team for assistance.',
    link: '#',
    color: 'error.main',
  }
];

export default function DocumentationPage() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <>
      <Hero17 {...heroData} />
      <ContainerWrapper sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {docCards.map((card, idx) => (
            <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
              <Card
                variant="outlined"
                sx={{
                  flex: 1,
                  borderLeft: `6px solid`,
                  borderColor: card.color,
                  borderRadius: 3,
                  boxShadow: 2,
                  px: 2,
                  py: 1,
                  backgroundColor: isDark ? theme.palette.grey[800] : 'white',
                  color: isDark ? theme.palette.text.primary : 'inherit',
                  transition: 'box-shadow 0.2s',
                  '&:hover': { boxShadow: 6 },
                }}
              >
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 700, color: card.color }}>
                    {card.heading}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                    {card.caption}
                  </Typography>
                  <a href={card.link} style={{ color: '#1976d2', textDecoration: 'none', fontWeight: 500 }}>Read More →</a>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </ContainerWrapper>
    </>
  );
}
