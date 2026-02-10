// @mui
import branding from '@/branding.json';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

// @project
import { NextLink } from '@/components/routes';

export const cta4 = {
  headLine: `Why Trust ${branding.brandName} with Your Project Management?`,
  primaryBtn: {
    children: 'Read Our Story',
    href: 'https://blog.saasable.io/a-decade-of-expertise-the-phoenixcoded-story-and-why-you-should-trust-us', // Update to your actual blog link
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
    review: '10k+ Teams (4.8 out of 5)'
  },
  list: [
    { primary: '99.9% Uptime SLA' },
    { primary: 'Enterprise-Grade Security' },
    { primary: 'Seamless Integrations' },
    { primary: '24/7 Priority Support' },
    { primary: 'Agile Certified Tools' },
    { primary: 'Scalable Infrastructure' }
  ],
  clientContent: 'Learn More'
};

function DescriptionLine() {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
      Have questions? Our experts are here to help. Join{' '}
      <Link component={NextLink} variant="caption2" color="primary" href={branding.company.socialLink.discord} underline="hover">
        our community
      </Link>
    </Typography>
  );
}

export const cta5 = {
  label: 'Join the Ecosystem',
  heading: 'Connect with Agile Experts',
  caption: 'Share workflow templates, get productivity hacks, and grow with other project managers.',
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
    review: '250k+ Messages (4.9 out of 5)'
  }
};

export const cta10 = {
  heading: 'Help Us Redefine Productivity',
  caption: 'Don’t see your perfect role? We are always looking for visionaries to help us build the future of work. Send us your details!',
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
