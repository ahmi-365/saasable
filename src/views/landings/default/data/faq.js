// @project
import branding from '@/branding.json';

export const faq = {
  heading: 'Frequently Asked Questions',
  caption: `Everything you need to know about the ${branding.brandName} Project Management Kit.`,
  defaultExpanded: 'Features & Capabilities',
  faqList: [
    // --- GENERAL CATEGORY ---
    {
      question: `Is ${branding.brandName} only for Kanban boards?`,
      answer: `While ${branding.brandName} specializes in Kanban and Agile workflows, it is a comprehensive Admin Template. It includes views for Scrum, Gantt charts, List views, and a fully functional dashboard. It is versatile enough to build CRM systems, Bug Trackers, or general SaaS admin panels alongside its core project management features.`,
      category: 'General'
    },
    {
      question: `Is ${branding.brandName} suitable for teams and solo developers?`,
      answer: {
        content: `Absolutely. ${branding.brandName} is structured to support scalable team development while being intuitive enough for solo founders.`,
        type: 'list',
        data: [
          { primary: 'Figma Kit for UI/UX Designers.' },
          { primary: 'Production-ready React Code for Engineers.' },
          { primary: 'Unified Design System for consistency.' }
        ]
      },
      category: 'General'
    },
    {
      question: `What is the difference between the Figma and Codebase versions?`,
      answer:
        'The Figma version contains the design assets, auto-layout boards, and component library for prototyping. The Codebase version provides the functional React Material UI components, including the logic for task management and board interactions.',
      category: 'General'
    },

    // --- FEATURES & CAPABILITIES CATEGORY (Replaces Pricing) ---
    {
      question: `Does it support Drag and Drop natively?`,
      answer: `Yes, the kit comes with pre-configured drag-and-drop functionality. You can move tasks between columns, reorder swimlanes, and prioritize items within lists using modern, touch-friendly libraries optimized for React.`,
      category: 'Features & Capabilities'
    },
    {
      question: `Can I customize columns and workflows?`,
      answer: {
        content: `The board architecture is fully dynamic. You can programmatically add, remove, or rename columns to match any workflow methodology.`,
        type: 'list',
        data: [
          { primary: 'Custom Column States (To-Do, In Progress, QA)' },
          { primary: 'WIP (Work In Progress) Limits' },
          { primary: 'Collapsible Swimlanes' }
        ]
      },
      category: 'Features & Capabilities'
    },
    {
      question: `Does it handle subtasks and checklists?`,
      answer: `Yes, the Task Detail view includes components for nested subtasks, progress bars, and checklist management, allowing for granular tracking of complex items.`,
      category: 'Features & Capabilities'
    },
    {
      question: `Are there collaborative features included?`,
      answer: `The UI kit includes components designed for collaboration, such as "Member is typing" indicators, avatar piles for card assignees, and threaded comment sections within task details.`,
      category: 'Features & Capabilities'
    },

    // --- SUPPORT & UPDATES CATEGORY ---
    {
      question: 'Do I get updates for new board features?',
      answer: {
        content:
          'Yes! We regularly release updates with new view types (e.g., Timeline, Calendar), performance improvements, and library upgrades.',
        type: 'list',
        data: [{ primary: `Regular Feature Drops` }, { primary: `Performance Optimizations` }]
      },
      category: 'Support & Updates'
    },
    {
      question: 'Is technical support provided?',
      answer: {
        content:
          'Yes, 6 months of premium support is included. We assist with bugs, layout issues, and general template questions. Please note that we do not provide support for custom business logic implementation or backend integration.',
        type: 'list',
        data: [{ primary: `6 Months Premium Support` }, { primary: `Bug Fixes & Guidance` }, { primary: `No Custom Backend Support` }]
      },
      category: 'Support & Updates'
    }
  ],
  getInTouch: {
    link: { children: 'Contact Support', href: branding.company.socialLink.support, target: '_blank', rel: 'noopener noreferrer' }
  },
  // Removed "Pricing & Licenses" and added "Features & Capabilities"
  categories: ['General', 'Features & Capabilities', 'Support & Updates'],
  activeCategory: 'General'
};