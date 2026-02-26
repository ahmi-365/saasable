import Hero17 from '@/blocks/hero/Hero17';
import Feature20 from '@/blocks/feature/Feature20';
import Metrics5 from '@/blocks/metrics/Metrics5';
import Integration2 from '@/blocks/integration/Integration2';
import Clientele3 from '@/blocks/clientele/Clientele3';
import Cta4 from '@/blocks/cta/Cta4';
import Faq6 from '@/blocks/faq/Faq6';
import Other1 from '@/blocks/other/Other1';
import branding from '@/branding.json';

const heroData = {
  chip: { label: branding.brandName },
  headLine: 'About ' + branding.brandName,
  captionLine: branding.title,
  videoSrc: '',
  videoThumbnail: '',
  featureButtons: []
};

const featureData = {
  heading: 'Our Unique Approach',
  caption: <span style={{ display: 'block', marginTop: 24 }}>See how Planify empowers your SaaS journey with tailored solutions.</span>,
  // image: '/assets/images/LandingPageImages/Dashboard.png',
  features: [
    { icon: 'tabler-sparkles', title: 'Customizable Blocks', content: '200+ blocks for rapid SaaS development.' },
    { icon: 'tabler-rocket', title: 'Fast Launch', content: 'Accelerate your product launch.' },
    { icon: 'tabler-users', title: 'Community Driven', content: 'Built with feedback from real users.' }
  ],
  actionBtn: { children: 'Get Started', href: '/' },
  secondaryBtn: { children: 'Learn More', href: '/about' }
};

const metricsData = {
  heading: 'Our Impact',
  caption: 'Trusted by teams worldwide.',
  blockDetail: [
    { counter: 200, defaultUnit: '+', caption: 'UI Blocks' },
    { counter: 50, defaultUnit: '+', caption: 'Integrations' },
    { counter: 10, defaultUnit: 'K+', caption: 'Users' },
    { counter: 5, defaultUnit: 'Years', caption: 'Experience' }
  ]
};

const integrationData = {
  headLine: 'Integrations',
  captionLine: 'Connect with your favorite tools.',
  primaryBtn: { children: 'See All Integrations', href: '/integrations' },
  tagList: [
    { label: 'Slack', icon: 'tabler-brand-slack' },
    { label: 'Zapier', icon: 'tabler-brand-zapier' },
    { label: 'Google', icon: 'tabler-brand-google' }
  ]
};

const clienteleData = {
  title: 'Our Clients',
  clienteleList: [
    { image: '/assets/images/LandingPageImages/Team.png' },
    { image: '/assets/images/LandingPageImages/Projects.png' },
    { image: '/assets/images/LandingPageImages/Weekly-Planner.png' }
  ]
};

const ctaData = {
  headLine: 'Start Your Unique Journey',
  primaryBtn: { children: 'Start Now', href: '/' },
  profileGroups: {
    avatarGroups: [
      { avatar: '/assets/images/user/avatar5.png' },
      { avatar: '/assets/images/user/avatar6.png' },
      { avatar: '/assets/images/user/avatar7.png' }
    ],
    review: 'Loved by SaaS teams worldwide.'
  },
  list: [
    { primary: 'No coding required' },
    { primary: '24/7 Support' }
  ],
  clientContent: 'Join thousands of happy customers.'
};

const faqData = {
  heading: 'Frequently Asked Questions',
  caption: 'Everything you need to know about ' + branding.brandName,
  defaultExpanded: false,
  faqList: [
    { question: 'What is Planify?', answer: 'A multipurpose UI kit for SaaS products.', category: 'General' },
    { question: 'How many blocks are available?', answer: '200+ customizable blocks.', category: 'Blocks' },
    { question: 'Is support available?', answer: 'Yes, 24/7 support is provided.', category: 'Support' }
  ],
  getInTouch: { link: { children: 'Contact Us', href: '/contact' } },
  categories: ['General', 'Blocks', 'Support'],
  activeCategory: ''
};

const otherData = {
  heading: 'Explore More',
  description: 'Check out other sections and features.',
  primaryBtn: { children: 'View All', href: '/' },
  sections: [
    { title: 'Privacy Policy', subTitle: 'Your data is safe.', link: '/privacy-policy', image: '/assets/images/LandingPageImages/Dashboard.png', animationDelay: 0.2 },
    { title: 'Terms & Conditions', subTitle: 'Read our terms.', link: '/terms-condition', image: '/assets/images/LandingPageImages/Projects.png', animationDelay: 0.4 }
  ]
};

export default function AboutPage() {
  return (
    <>
      <Hero17 {...heroData} />
      <Feature20 {...featureData} />
      <Metrics5 {...metricsData} />
      <Integration2 {...integrationData} />
      <Clientele3 {...clienteleData} />
      <Cta4 {...ctaData} />
      <Faq6 {...faqData} />
      <Other1 {...otherData} />
    </>
  );
}

