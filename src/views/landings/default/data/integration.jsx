// @project
import SvgIcon from '@/components/SvgIcon';
import { DOCS_URL } from '@/path';

export const integration = {
  headLine: 'Tailored for Every Workflow',
  captionLine:
    'From Agile development to marketing calendars, see how our Kanban Kit helps you build task management solutions tailored for any process.',
  primaryBtn: {
    children: 'Documentation',
    startIcon: <SvgIcon name="tabler-help" color="background.default" />,
    href: DOCS_URL,
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  tagList: [
    { label: 'Agile & Scrum Boards' },
    { label: 'Software Development' },
    { label: 'Bug & Issue Tracking' },
    { label: 'Product Roadmaps' },
    { label: 'Content Calendars' },
    { label: 'Sales Pipelines' },
    { label: 'Recruitment Tracking' },
    { label: 'Sprint Planning' },
    { label: 'DevOps Workflows' },
    { label: 'Design Requests' },
    { label: 'User Feedback Loops' },
    { label: 'Event Planning' },
    { label: 'Release Management' },
    { label: 'Backlog Refinement' },
    { label: 'Personal To-Do Lists' }
  ]
};
