import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import branding from '@/branding.json';
import { Feature20 } from '@/blocks/feature';
import { Hero17 } from '@/blocks/hero';
import ContainerWrapper from '@/components/ContainerWrapper';
import LazySection from '@/components/LazySection';
import { clientele, cta4, cta5, faq, feature18, feature20, feature21, hero, integration, metrics, testimonial } from './default/data';

const heroData = {
  ...hero,
  chip: { label: 'Documentation' },
  headLine: `Documentation and product guides for ${branding.brandName}`,
  featureButtons: [],
  captionLine: 'Find setup guides, API references, integration steps, and practical best practices to help your team ship faster.'
};

const featuredDoc = {
  id: 'featured-doc-1',
  category: 'Getting Started',
  title: 'Set up your workspace in under 10 minutes',
  excerpt: 'A complete quickstart for installation, project configuration, and first deployment with recommended defaults.',
  date: 'Mar 02, 2026',
  readTime: '7 min read'
};

const docsList = [
  {
    id: 'doc-1',
    category: 'API',
    title: 'Authentication API reference',
    excerpt: 'Token flow, scopes, and secure usage examples for backend and frontend integrations.',
    date: 'Feb 28, 2026',
    readTime: '6 min read'
  },
  {
    id: 'doc-2',
    category: 'Integration',
    title: 'Connect Slack and notifications',
    excerpt: 'Configure channels, events, and alert routing for better operational visibility.',
    date: 'Feb 22, 2026',
    readTime: '5 min read'
  },
  {
    id: 'doc-3',
    category: 'Best Practices',
    title: 'Project structure recommendations',
    excerpt: 'Naming conventions, folder patterns, and workflows that scale with team growth.',
    date: 'Feb 18, 2026',
    readTime: '8 min read'
  }
];

function DocCard({ item, featured = false }) {
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
              Read more
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default function DocumentationPage() {
  return (
    <>
      <Hero17 {...heroData} />

      <ContainerWrapper>
        <Box sx={{ py: { xs: 4, md: 6 } }}>
          <Stack spacing={2} sx={{ mb: { xs: 2.5, md: 3 } }}>
            <Typography variant="overline" color="text.secondary">
              Featured Guide
            </Typography>
            <Typography variant="h3">Start here</Typography>
          </Stack>
          <DocCard item={featuredDoc} featured />
        </Box>

        <Box sx={{ pb: { xs: 6, md: 8 } }}>
          <Stack spacing={2} sx={{ mb: { xs: 2.5, md: 3.5 } }}>
            <Typography variant="overline" color="text.secondary">
              Latest Docs
            </Typography>
            <Typography variant="h3">Most used resources</Typography>
          </Stack>

          <Grid container spacing={{ xs: 2, md: 3 }}>
            {docsList.map((item) => (
              <Grid key={item.id} item xs={12} sm={6} md={4}>
                <DocCard item={item} />
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
