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
  chip: { label: 'Discord' },
  headLine: `Join the ${branding.brandName} Discord community`,
  featureButtons: [],
  captionLine: 'Connect with our team and users for real-time support, feature discussions, announcements, and events.'
};

const featuredDiscord = {
  id: 'discord-featured-1',
  category: 'Community',
  title: 'Start with the welcome and support channels',
  excerpt: 'Get onboarding help, discover key channels, and connect with moderators for fast direction.',
  date: 'Mar 02, 2026',
  readTime: '4 min read'
};

const discordCards = [
  {
    id: 'discord-1',
    category: 'Channels',
    title: 'Find the right channel quickly',
    excerpt: 'Use dedicated channels for support, product updates, integrations, and community showcases.',
    date: 'Feb 25, 2026',
    readTime: '3 min read'
  },
  {
    id: 'discord-2',
    category: 'Events',
    title: 'Join AMAs and community events',
    excerpt: 'Participate in live sessions, release walkthroughs, and practical workflow demos.',
    date: 'Feb 21, 2026',
    readTime: '5 min read'
  },
  {
    id: 'discord-3',
    category: 'Guidelines',
    title: 'Read community rules and moderation policy',
    excerpt: 'Understand expectations to keep discussions constructive, respectful, and useful for everyone.',
    date: 'Feb 17, 2026',
    readTime: '4 min read'
  },
  {
    id: 'discord-4',
    category: 'FAQ',
    title: 'Discord FAQ and quick answers',
    excerpt: 'Find common answers about access, roles, troubleshooting, and participation.',
    date: 'Feb 10, 2026',
    readTime: '4 min read'
  },
  {
    id: 'discord-5',
    category: 'Networking',
    title: 'Connect with builders and teams',
    excerpt: 'Share wins, ask for feedback, and collaborate with peers using similar workflows.',
    date: 'Feb 03, 2026',
    readTime: '5 min read'
  }
];

function DiscordCard({ item, featured = false }) {
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
              Join now
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default function DiscordPage() {
  return (
    <>
      <Hero17 {...heroData} />

      <ContainerWrapper>
        <Box sx={{ py: { xs: 4, md: 6 } }}>
          <Stack spacing={2} sx={{ mb: { xs: 2.5, md: 3 } }}>
            <Typography variant="overline" color="text.secondary">
              Featured Community Guide
            </Typography>
            <Typography variant="h3">Start in the right place</Typography>
          </Stack>
          <DiscordCard item={featuredDiscord} featured />
        </Box>

        <Box sx={{ pb: { xs: 6, md: 8 } }}>
          <Stack spacing={2} sx={{ mb: { xs: 2.5, md: 3.5 } }}>
            <Typography variant="overline" color="text.secondary">
              Discord Resources
            </Typography>
            <Typography variant="h3">Community essentials</Typography>
          </Stack>

          <Grid container spacing={{ xs: 2, md: 3 }}>
            {discordCards.map((item) => (
              <Grid key={item.id} item xs={12} sm={6} md={4}>
                <DiscordCard item={item} />
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
