// @project
import SvgIcon from '@/components/SvgIcon';
import { DOCS_URL } from '@/path';

export const integration = {
  headLine: 'Built for Teams. Loved by Everyone.',
  captionLine:
    "Whether you're shipping code, closing deals, or planning campaigns, your board moves at the speed of your team. Simple enough for anyone, powerful enough for everything.",

  primaryBtn: {
    children: 'Explore Features',
    startIcon: <SvgIcon name="tabler-rocket" color="background.default" />,
    href: DOCS_URL,
    target: '_blank',
    rel: 'noopener noreferrer'
  },

  tagList: [
    { label: 'Engineering Teams', description: 'Ship features faster with visual workflows' },
    { label: 'Marketing Campaigns', description: 'Launch coordination from idea to execution' },
    { label: 'Customer Support', description: 'Ticket triage and resolution tracking' },
    { label: 'Product Development', description: 'From concept to launch in one view' },
    { label: 'Creative Projects', description: 'Design reviews and creative asset management' },
    { label: 'Revenue Operations', description: 'Deal flow visibility and pipeline health' },
    { label: 'Recruitment', description: 'Streamline hiring from sourcing to offer' },
    { label: 'Quarterly Planning', description: 'OKRs and strategic initiatives' },
    { label: 'IT Operations', description: 'Incident response and change management' },
    { label: 'Content Studio', description: 'From draft to publish in perfect sync' },
    { label: 'Customer Success', description: 'Onboarding journeys and renewals' },
    { label: 'Event Production', description: 'Multi-stakeholder coordination made easy' },
    { label: 'Feature Launches', description: 'Cross-functional rollout orchestration' },
    { label: 'Research Projects', description: 'Track experiments and findings' },
    { label: 'Personal Goals', description: 'Your life, organized your way' },
    { label: 'Creative Projects', description: 'Design reviews and creative asset management' },
    
  ]
};