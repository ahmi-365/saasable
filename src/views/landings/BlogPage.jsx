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
  chip: { label: 'Blog' },
  headLine: `Stories, guides updates from ${branding.brandName}`,
  featureButtons: [],
  captionLine:
    'Read practical SaaS insights, growth playbooks, and platform updates designed to help teams move faster with confidence.'
};

const featuredPost = {
  id: 'featured-1',
  category: 'Product',
  title: 'Introducing the new workflow command center',
  excerpt:
    'A closer look at our redesigned planning experience: unified views, faster filtering, and better collaboration for high-performing teams.',
  date: 'Mar 02, 2026',
  readTime: '8 min read'
};

// const latestPosts = [
//   {
//     id: 'post-1',
//     category: 'Growth',
//     title: '7 onboarding experiments that improved activation',
//     excerpt: 'A tested framework to reduce time-to-value and increase first-week engagement without adding friction.',
//     date: 'Feb 26, 2026',
//     readTime: '6 min read'
//   },
//   {
//     id: 'post-2',
//     category: 'Engineering',
//     title: 'How we cut dashboard load time by 43%',
//     excerpt: 'The architecture and performance decisions behind a faster analytics experience at scale.',
//     date: 'Feb 20, 2026',
//     readTime: '9 min read'
//   },
//   {
//     id: 'post-3',
//     category: 'Customer Stories',
//     title: 'How Northpeak launched 2x faster with reusable workflows',
//     excerpt: 'A real-world implementation story highlighting process standardization and handoff clarity.',
//     date: 'Feb 15, 2026',
//     readTime: '5 min read'
//   },
//   {
//     id: 'post-4',
//     category: 'Design',
//     title: 'Building consistent UI patterns for enterprise teams',
//     excerpt: 'Our design system decisions that improved usability, accessibility, and build speed.',
//     date: 'Feb 09, 2026',
//     readTime: '7 min read'
//   },
//   {
//     id: 'post-5',
//     category: 'Security',
//     title: 'What changed in our audit and compliance workflow',
//     excerpt: 'A practical summary of process updates that strengthen controls without slowing delivery.',
//     date: 'Feb 01, 2026',
//     readTime: '6 min read'
//   },
//   {
//     id: 'post-6',
//     category: 'Product',
//     title: 'Roadmap highlights: collaboration and reporting',
//     excerpt: 'See which features are coming next and why they matter for cross-functional teams.',
//     date: 'Jan 28, 2026',
//     readTime: '4 min read'
//   }
// ];

function BlogPostCard({ post, featured = false }) {
  return (
    <Card variant="outlined" sx={{ height: '100%', borderRadius: 3 }}>
      <CardContent sx={{ p: { xs: 2.5, md: featured ? 4 : 3 } }}>
        <Stack spacing={featured ? 2 : 1.5}>
          <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
            <Chip label={post.category} size="small" color="primary" variant="outlined" />
            <Typography variant="caption" color="text.secondary">
              {post.date}
            </Typography>
          </Stack>

          <Typography variant={featured ? 'h4' : 'h6'}>{post.title}</Typography>

          <Typography variant="body2" color="text.secondary">
            {post.excerpt}
          </Typography>

          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ pt: 0.5 }}>
            <Typography variant="caption" color="text.secondary">
              {post.readTime}
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

export default function BlogPage() {
  return (
    <>
      <Hero17 {...heroData} />

      <ContainerWrapper>
        {/* <Box sx={{ py: { xs: 4, md: 6 } }}>
          <Stack spacing={2} sx={{ mb: { xs: 2.5, md: 3 } }}>
            <Typography variant="overline" color="text.secondary">
              Featured
            </Typography>
            <Typography variant="h3">Top story this week</Typography>
          </Stack>
          <BlogPostCard post={featuredPost} featured />
        </Box> */}

        <Box sx={{ pb: { xs: 6, md: 8 } }}>
          {/* <Stack spacing={2} sx={{ mb: { xs: 2.5, md: 3.5 } }}>
            <Typography variant="overline" color="text.secondary">
              Latest Posts
            </Typography>
            <Typography variant="h3">Fresh insights from the blog</Typography>
          </Stack> */}

          {/* <Grid container spacing={{ xs: 2, md: 3 }}>
            {latestPosts.map((post) => (
              <Grid key={post.id} item xs={12} sm={6} md={4}>
                <BlogPostCard post={post} />
              </Grid>
            ))}
          </Grid> */}
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
