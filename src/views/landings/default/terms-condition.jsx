import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ContainerWrapper from '@/components/ContainerWrapper';
import branding from '@/branding.json';
import { Feature20 } from '@/blocks/feature';
import { Hero17 } from '@/blocks/hero';
import LazySection from '@/components/LazySection';
import { clientele, cta4, cta5, faq, feature18, feature20, feature21, hero, integration, metrics, testimonial } from './data';

const heroData = {
  ...hero,
  chip: { label: 'Legal' },
  headLine: `Terms and conditions for ${branding.brandName}`,
  featureButtons: [],
  captionLine: 'Review your rights, responsibilities, and legal terms that govern use of the platform and related services.'
};

const featuredTerm = {
  id: 'term-featured-1',
  category: 'Important',
  title: 'Acceptance of terms and continued use',
  excerpt: 'By accessing and using the platform, you agree to these terms and any applicable policy updates.',
  date: 'Mar 02, 2026',
  readTime: '4 min read'
};

const termsCards = [
  {
    id: 'term-1',
    category: 'Policy',
    title: 'Changes to terms',
    excerpt: 'We may revise these terms periodically, and continued use after updates implies acceptance.',
    date: 'Feb 24, 2026',
    readTime: '3 min read'
  },
  {
    id: 'term-2',
    category: 'Use',
    title: 'User conduct expectations',
    excerpt: 'You must use the platform lawfully and avoid misuse, disruption, or unauthorized access.',
    date: 'Feb 19, 2026',
    readTime: '4 min read'
  },
  {
    id: 'term-3',
    category: 'IP',
    title: 'Intellectual property rights',
    excerpt: 'Platform content, trademarks, and materials are protected and may not be reused without permission.',
    date: 'Feb 14, 2026',
    readTime: '4 min read'
  },
  {
    id: 'term-4',
    category: 'Liability',
    title: 'Limitation of liability',
    excerpt: 'Our liability is limited to the extent permitted by law for indirect or consequential damages.',
    date: 'Feb 10, 2026',
    readTime: '3 min read'
  },
  {
    id: 'term-5',
    category: 'Legal',
    title: 'Governing law and disputes',
    excerpt: 'These terms are interpreted under applicable laws and define the framework for dispute handling.',
    date: 'Feb 06, 2026',
    readTime: '5 min read'
  },
  {
    id: 'term-6',
    category: 'Account',
    title: 'Account suspension and termination',
    excerpt: 'We may suspend or terminate accounts for policy violations, abuse, or security concerns.',
    date: 'Feb 01, 2026',
    readTime: '4 min read'
  }
];

function TermCard({ item, featured = false }) {
  return (
    <Card variant="outlined" sx={{ height: '100%', borderRadius: 3 }}>
      <CardContent sx={{ p: { xs: 2.5, md: featured ? 4 : 3 } }}>
        <Stack spacing={featured ? 2 : 1.5}>
          <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
            <Chip label={item.category} size="small" color="primary" variant="outlined" />
            <Typography variant="caption" color="text.secondary">
              {item.date}
            </Typography>
          </Stack>

          <Typography variant={featured ? 'h4' : 'h6'}>{item.title}</Typography>

          <Typography variant="body2" color="text.secondary">
            {item.excerpt}
          </Typography>

          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ pt: 0.5 }}>
            <Typography variant="caption" color="text.secondary">
              {item.readTime}
            </Typography>
            <Button size="small" variant="text">
              Read details
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default function TermsCondition() {
  return (
    <>
      <Hero17 {...heroData} />

      <ContainerWrapper>
        <Box sx={{ py: { xs: 4, md: 6 } }}>
          <Stack spacing={2} sx={{ mb: { xs: 2.5, md: 3 } }}>
            <Typography variant="overline" color="text.secondary">
              Featured Clause
            </Typography>
            <Typography variant="h3">Key legal summary</Typography>
          </Stack>
          <TermCard item={featuredTerm} featured />
        </Box>

        <Box sx={{ pb: { xs: 6, md: 8 } }}>
          <Stack spacing={2} sx={{ mb: { xs: 2.5, md: 3.5 } }}>
            <Typography variant="overline" color="text.secondary">
              Terms Library
            </Typography>
            <Typography variant="h3">Important sections to review</Typography>
          </Stack>

          <Grid container spacing={{ xs: 2, md: 3 }}>
            {termsCards.map((item) => (
              <Grid key={item.id} item xs={12} sm={6} md={4}>
                <TermCard item={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </ContainerWrapper>

      <Feature20 {...feature20} />

      <LazySection
        sections={[
          { importFunc: () => import('@/blocks/metrics').then((module) => ({ default: module.Metrics5 })), props: metrics },
          { importFunc: () => import('@/blocks/integration').then((module) => ({ default: module.Integration2 })), props: integration }
        ]}
        offset="200px"
      />

      <LazySection
        sections={[
          { importFunc: () => import('@/blocks/feature').then((module) => ({ default: module.Feature18 })), props: feature18 },
          { importFunc: () => import('@/blocks/feature').then((module) => ({ default: module.Feature21 })), props: feature21 },
          { importFunc: () => import('@/blocks/cta').then((module) => ({ default: module.Cta4 })), props: cta4 }
        ]}
        offset="200px"
      />

      <LazySection
        sections={[
          { importFunc: () => import('@/blocks/testimonial').then((module) => ({ default: module.Testimonial10 })), props: testimonial },
          { importFunc: () => import('@/blocks/clientele').then((module) => ({ default: module.Clientele3 })), props: clientele }
        ]}
        offset="200px"
      />

      <LazySection
        sections={[
          { importFunc: () => import('@/blocks/cta').then((module) => ({ default: module.Cta5 })), props: cta5 },
          { importFunc: () => import('@/blocks/faq').then((module) => ({ default: module.Faq6 })), props: faq }
        ]}
        offset="200px"
      />
    </>
  );
}
