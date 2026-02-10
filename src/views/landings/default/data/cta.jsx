// @mui
import branding from '@/branding.json';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

// @project
import { NextLink } from '@/components/routes';

export const cta4 = {
  headLine: `Why Trust ${branding.brandName} with Your Workflows?`,
  primaryBtn: {
    children: 'Read Our Story',
    // Preserving your updated link
    href: 'https://blog.Planify.io/a-decade-of-expertise-the-phoenixcoded-story-and-why-you-should-trust-us',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  profileGroups: {
    avatarGroups: [
      { avatar: '/assets/images/user/avatar1.png' },
      { avatar: '/assets/images/user/avatar2.png' },
      { avatar: '/assets/images/user/avatar3.png' },
      { avatar: '/assets/images/user/avatar4.png' },
      { avatar: '/assets/images/user/avatar5.png' }
    ],
    review: '10k+ Agile Teams (4.8/5)'
  },
  list: [
    { primary: '99.99% Uptime SLA' },
    { primary: 'SOC2 Type II Security' },
    { primary: 'Seamless Tool Integrations' },
    { primary: '24/7 Priority Support' },
    { primary: 'Methodology Agnostic' },
    { primary: 'Scalable Infrastructure' }
  ],
  clientContent: 'Learn More'
};

function DescriptionLine() {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
      Need help optimizing your board? Our experts are here. Join{' '}
      <Link component={NextLink} variant="caption2" color="primary" href={branding.company.socialLink.discord} underline="hover">
        our community
      </Link>
    </Typography>
  );
}

export const cta5 = {
  label: 'Join the Ecosystem',
  heading: 'Connect with Productivity Experts',
  caption: 'Share board templates, discover workflow hacks, and grow with a global network of project managers.',
  primaryBtn: {
    children: 'Join Community',
    href: branding.company.socialLink.discord,
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  description: <DescriptionLine />,
  saleData: { count: 15, defaultUnit: 'k+', caption: 'Active community members' },
  profileGroups: {
    avatarGroups: [
      { avatar: '/assets/images/user/avatar1.png' },
      { avatar: '/assets/images/user/avatar2.png' },
      { avatar: '/assets/images/user/avatar3.png' },
      { avatar: '/assets/images/user/avatar4.png' },
      { avatar: '/assets/images/user/avatar5.png' }
    ],
    review: '250k+ Discussions (4.9/5)'
  }
};

export const cta10 = {
  heading: 'Help Us Redefine Work',
  caption:
    'Don’t see your perfect role? We are always looking for efficiency obsessives to help us build the future of workflow automation.',
  primaryBtn: { children: 'Send Your Resume', href: '#' },
  secondaryBtn: { children: 'Contact HR', href: '#' },
  image: '/assets/images/graphics/ai/graphics15-light.svg',
  profileGroups: {
    avatarGroups: [
      { avatar: '/assets/images/user/avatar1.png' },
      { avatar: '/assets/images/user/avatar2.png' },
      { avatar: '/assets/images/user/avatar3.png' },
      { avatar: '/assets/images/user/avatar4.png' },
      { avatar: '/assets/images/user/avatar5.png' }
    ],
    review: 'Employee Choice Award (4.9/5)'
  }
};
