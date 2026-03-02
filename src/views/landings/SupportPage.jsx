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
import { clientele, cta4, cta5, faq, feature18, feature20, feature21, hero, integration, metrics, testimonial } from './default/data';

const heroData = {
  ...hero,
  chip: { label: 'Support' },
  headLine: `Support center for ${branding.brandName}`,
  featureButtons: [],
  captionLine: 'Find answers, contact support, and resolve issues quickly with practical help resources and guided workflows.'
};

const featuredSupport = {
  id: 'support-featured-1',
  category: 'Priority Help',
  title: 'Contact support and get guided issue resolution',
  excerpt: 'Open a request, share context, and track updates with clear timelines from our support team.',
  date: 'Mar 02, 2026',
  readTime: '6 min read'
};

const supportCards = [
  {
    id: 'support-1',
    category: 'Help Desk',
    title: 'Open and manage support tickets',
    excerpt: 'Submit technical issues and monitor responses, progress, and resolution status in one place.',
    date: 'Feb 27, 2026',
    readTime: '5 min read'
  },
  {
    id: 'support-2',
    category: 'Community',
    title: 'Get answers from users and experts',
    excerpt: 'Join discussions and discover proven solutions shared by experienced community members.',
    date: 'Feb 23, 2026',
    readTime: '4 min read'
  },
  {
    id: 'support-3',
    category: 'Resources',
    title: 'Troubleshooting guides and FAQs',
    excerpt: 'Resolve common setup, billing, and workflow issues quickly with documented step-by-step help.',
    date: 'Feb 19, 2026',
    readTime: '7 min read'
  },
  {
    id: 'support-4',
    category: 'Escalation',
    title: 'Escalate critical production issues',
    excerpt: 'Use the incident path for urgent problems that need immediate attention and rapid coordination.',
    date: 'Feb 12, 2026',
    readTime: '5 min read'
  },
  {
    id: 'support-5',
    category: 'Feedback',
    title: 'Share product feedback and requests',
    excerpt: 'Tell us what would improve your workflow and help shape future releases and priorities.',
    date: 'Feb 05, 2026',
    readTime: '3 min read'
  }
];

function SupportCard({ item, featured = false }) {
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
              Get help
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default function SupportPage() {
  return (
    <>
      <Hero17 {...heroData} />

      <ContainerWrapper>
        <Box sx={{ py: { xs: 4, md: 6 } }}>
          <Stack spacing={2} sx={{ mb: { xs: 2.5, md: 3 } }}>
            <Typography variant="overline" color="text.secondary">
              Featured Support
            </Typography>
            <Typography variant="h3">Need help fast?</Typography>
          </Stack>
          <SupportCard item={featuredSupport} featured />
        </Box>

        <Box sx={{ pb: { xs: 6, md: 8 } }}>
          <Stack spacing={2} sx={{ mb: { xs: 2.5, md: 3.5 } }}>
            <Typography variant="overline" color="text.secondary">
              Support Resources
            </Typography>
            <Typography variant="h3">Everything you need to resolve issues</Typography>
          </Stack>

          <Grid container spacing={{ xs: 2, md: 3 }}>
            {supportCards.map((item) => (
              <Grid key={item.id} item xs={12} sm={6} md={4}>
                <SupportCard item={item} />
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
