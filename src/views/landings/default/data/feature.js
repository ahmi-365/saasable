// @project
import branding from '@/branding.json';
import { IconType } from '@/enum';
import { ADMIN_PATH, BUY_NOW_URL, DOCS_URL, SECTION_PATH } from '@/path';

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };

export const feature2 = {
  heading: 'Master your workflow and move from "To-Do" to "Done" in one place.',
  caption:
    'Visualize progress, track team tasks, and eliminate bottlenecks with a high-performance Kanban interface built on modern design guidelines.',
  features: [
    {
      icon: { name: 'tabler-users', type: IconType.STROKE, color: 'grey.900', stroke: 1 },
      title: 'Collaborative Workflows',
      content: 'Enable seamless team collaboration with real-time updates and shared boards.'
    },
    {
      icon: { name: 'tabler-star', type: IconType.STROKE, color: 'grey.900', stroke: 1 },
      title: 'Visual Clarity',
      content: 'Gain instant insight into project status with intuitive, customizable Kanban boards.'
    },
    {
      icon: { name: 'tabler-chart-histogram', type: IconType.STROKE, color: 'grey.900', stroke: 1 },
      title: 'Process Optimization',
      content: 'Identify and resolve bottlenecks to streamline your delivery pipeline.'
    }
  ]
};

export const feature5 = {
  heading: 'Optimize Your Project Lifecycle',
  caption: 'From planning to execution, our tools ensure your project management is efficient and effective.',
  image1: '/assets/images/graphics/ai/graphics3-light.svg',
  image2: '/assets/images/graphics/ai/graphics2-light.svg',
  features: [
    {
      icon: 'tabler-coin',
      title: 'Resource Management',
      content: 'Maximize efficiency by effectively allocating and tracking team resources.'
    },
    {
      icon: 'tabler-health-recognition',
      title: 'Project Health',
      content: "Monitor key metrics to ensure projects stay on track and within scope."
    }
  ],
  features2: [
    {
      icon: 'tabler-briefcase',
      title: 'Flexible Boards',
      content: 'Adapt Kanban boards to fit any project methodology or team structure.'
    },
    {
      icon: 'tabler-users',
      title: 'Real-Time Sync',
      content: 'Keep everyone aligned with instant updates across all devices and platforms.'
    }
  ],
  profileGroups: {
    avatarGroups: [
      { avatar: '/assets/images/user/avatar1.png' },
      { avatar: '/assets/images/user/avatar2.png' },
      { avatar: '/assets/images/user/avatar3.png' },
      { avatar: '/assets/images/user/avatar4.png' },
      { avatar: '/assets/images/user/avatar5.png' }
    ],
    review: '10k+ Teams Trust Us'
  },
  content: 'Discover how our platform can transform your project management experience.',
  actionBtn: { children: 'Explore Features', href: '#' }
};

export const feature20 = {
  heading: 'Modern Kanban Board UI',
  caption: 'Ready to build powerful project management tools with one robust UI Kit?',
  // actionBtn: { children: 'Buy Now', href: BUY_NOW_URL, ...linkProps },
  secondaryBtn: { children: 'Explore Components', href: SECTION_PATH },
  features: [
  {
    icon: 'tabler-accessible',
    title: 'Accessibility Focused',
    content: 'Designed with accessibility best practices in mind to make your Kanban boards usable for everyone.'
  },
  {
    icon: 'tabler-brand-google',
    title: 'Optimized Performance',
    content: 'Built to handle large and complex boards smoothly without slowing down the user experience.'
  },
  {
    icon: 'tabler-stack-2',
    title: 'Clean & Modern Design',
    content: 'A simple and intuitive design system that keeps your workflow organized and easy to navigate.'
  },
  {
    icon: 'tabler-rocket',
    title: 'Polished UI Components',
    content: 'Well-structured components that improve task visibility and overall board clarity.'
  },
  {
    icon: 'tabler-help',
    title: 'Clear Documentation',
    content: 'Step-by-step guides and examples to help you set up and customize quickly.'
  },
  {
    icon: 'tabler-refresh',
    title: 'Ongoing Improvements',
    content: 'Regular updates with refinements, fixes, and new features based on user feedback.'
  }
]

};

export const feature21 = {
  heading: `Prototype Powerful Kanban Boards with ${branding.brandName} Figma`,
  caption: 'Access a complete library of task cards, fluid columns, and swimlanes to design the ultimate agile workflow interface.',
  image: '/assets/images/graphics/ai/desktop1-light.svg',
  // primaryBtn: { children: 'Get Board Kit', href: 'https://www.figma.com/community/file/1425095061180549847', ...linkProps },
  // secondaryBtn: {
  //   children: 'View Prototype',
  //   href: 'https://www.figma.com/design/mlkXfeqxUKqIo0GQhPBqPb/Planify---UI-Kit---Preview-only?node-id=11-1833&t=JBHOIIEuYZpmN6v8-1',
  //   ...linkProps
  // },
  features: [
    {
      animationDelay: 0.1,
      icon: 'tabler-cards',
      title: 'Draggable Tasks'
    },
    {
      animationDelay: 0.2,
      icon: 'tabler-layout-columns',
      title: 'Dynamic Columns'
    },
    {
      animationDelay: 0.3,
      icon: 'tabler-users',
      title: 'Assignee Avatars'
    },
    {
      animationDelay: 0.4,
      icon: 'tabler-tag',
      title: 'Status Labels'
    },
    {
      animationDelay: 0.1,
      icon: 'tabler-layout-rows',
      title: 'Swimlane Views'
    },
    {
      animationDelay: 0.2,
      icon: 'tabler-adjustments-horizontal',
      title: 'Filter & Sort UI'
    },
    {
      animationDelay: 0.3,
      icon: 'tabler-palette',
      title: 'Priority Styling'
    },
    {
      animationDelay: 0.4,
      icon: 'tabler-click',
      title: 'Interaction States'
    }
  ]
};

export const feature = {
  heading: `What’s Included in ${branding.brandName} Plus`,
  features: [
    {
      image: '/assets/images/shared/react.svg',
      title: 'React Kanban',
      content: 'Fully functional React components for building interactive boards.'
    },
    {
      image: '/assets/images/shared/next-js.svg',
      title: 'Next.js Support',
      content: 'Seamless integration with Next.js for server-side rendering and performance.'
    },
    {
      image: '/assets/images/shared/react.svg',
      title: 'TypeScript Ready',
      content: 'Robust TypeScript definitions for type-safe development.'
    },
    {
      image: '/assets/images/shared/next-js.svg',
      title: 'Responsive Layouts',
      content: 'Fluid grid systems that adapt to any screen size or device.'
    },
    {
      image: '/assets/images/shared/figma.svg',
      title: 'Figma Design System',
      content: 'Complete design system to streamline your UI/UX workflow.'
    },
    {
      title: 'Explore Pricing',
      content: 'Find the perfect plan to scale your project management capabilities.',
      actionBtn: { children: 'View Pricing', href: BUY_NOW_URL, ...linkProps }
    }
  ]
};

export const feature7 = {
  heading: 'Actionable Workflow Insights',
  caption: 'Drive efficiency with data-driven insights into team performance and task progress.',
  testimonials: [
    {
      image: '/assets/images/graphics/ai/graphics6-light.svg',
      features: [
        {
          icon: 'tabler-star',
          title: 'Strategic Value',
          content: 'Leverage analytics to refine processes and achieve strategic goals faster.'
        }
      ]
    },
    {
      image: '/assets/images/graphics/ai/graphics8-light.svg',
      features: [
        {
          icon: 'tabler-route',
          title: 'Workflow Orchestration',
          content: 'Seamlessly coordinate complex workflows across multiple teams and projects.'
        }
      ]
    },
    {
      image: '/assets/images/graphics/ai/graphics3-light.svg',
      features: [
        {
          icon: 'tabler-history',
          title: 'Success Stories',
          content: 'See how real-time insights have empowered teams to deliver exceptional results.'
        }
      ]
    },
  ],
  breadcrumbs: [{ title: 'Insights' }, { title: 'Strategy' }, { title: 'Success' }]
};

export const feature23 = {
  heading: 'Streamline Your Operations',
  caption:
    'Empower your team with tools that foster collaboration, enhance visibility, and drive productivity.',
  heading2: 'Continuous Improvement',
  caption2: 'Our platform supports iterative development, helping you refine and perfect your workflows.',
  image: '/assets/images/graphics/default/feature23-light.png',
  primaryBtn: { children: 'Start Collaborating', href: '#' },

  features: [
    {
      icon: 'tabler-users',
      title: 'Team Alignment',
      content: 'Keep everyone on the same page with centralized task management.'
    },
    {
      icon: 'tabler-star',
      title: 'Efficiency',
      content: 'Reduce wasted time and effort with optimized task flows.'
    }
  ]
};
export const feature18 = {
  heading: 'Centralized Project Control',
  caption: 'Manage teams, configure boards, and oversee timelines from a single, intuitive control center.',
  topics: [
    {
      icon: 'tabler-sparkles',
      title: 'Interactive Board UI',
      title2: 'Fluid Task Management',
      description: 'Experience a responsive, drag-and-drop interface designed for modern project management.',
      image: '/assets/images/graphics/default/admin-dashboard.png',
      list: [
        { primary: 'Smooth Drag & Drop' },
        { primary: 'Swimlane Views' },
        { primary: 'Inline Task Editing' },
        { primary: 'Rich Card Previews' }
      ],
      actionBtn: { children: 'View Board', href: ADMIN_PATH, ...linkProps },
      actionBtn2: { children: 'Documentation', href: DOCS_URL, ...linkProps }
    },
    {
      icon: 'tabler-palette',
      title: 'Workflow Customization',
      title2: 'Define Your Process',
      description: 'Tailor columns, statuses, and card layouts to fit your team\'s specific methodology.',
      image: '/assets/images/graphics/default/admin-dashboard-2.png',
      list: [
        { primary: 'Custom Columns & States' },
        { primary: 'Label & Tag Management' },
        { primary: 'Conditional Formatting' },
        { primary: 'Adjustable Card Density' }
      ],
      actionBtn: { children: 'View Board', href: ADMIN_PATH, ...linkProps },
      actionBtn2: { children: 'Documentation', href: DOCS_URL, ...linkProps }
    },
    {
      icon: 'tabler-rocket',
      title: 'Efficiency Tools',
      title2: 'Streamline Operations',
      description: 'Boost team productivity with integrated tools for planning, tracking, and execution.',
      image: '/assets/images/graphics/default/admin-dashboard-3.png',
      list: [
        { primary: 'WIP Limits' },
        { primary: 'Task Aging Indicators' },
        { primary: 'Bulk Actions' },
        { primary: 'Automated Triggers' }
      ],
      actionBtn: { children: 'View Board', href: ADMIN_PATH, ...linkProps },
      actionBtn2: { children: 'Documentation', href: DOCS_URL, ...linkProps }
    },
    {
      icon: 'tabler-scale',
      title: 'Scalable Architecture',
      title2: 'Built for Growth',
      description: 'A robust system ready to handle thousands of tasks and multiple collaborative teams.',
      image: '/assets/images/graphics/default/admin-dashboard.png',
      list: [
        { primary: 'Multi-Project Support' },
        { primary: 'High-Performance Rendering' },
        { primary: 'Real-Time Sync' },
        { primary: 'Granular Permissions' }
      ],
      actionBtn: { children: 'View Board', href: ADMIN_PATH, ...linkProps },
      actionBtn2: { children: 'Documentation', href: DOCS_URL, ...linkProps }
    }
  ]
};