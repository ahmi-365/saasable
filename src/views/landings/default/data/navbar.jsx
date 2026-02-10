// @project
import { ADMIN_PATH, DOCS_URL, PAGE_PATH, SECTION_PATH } from '@/path';
import { landingMegamenu, pagesMegamenu } from '../../common-data';

/***************************  DEFAULT - NAVBAR  ***************************/

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };
export const navbar = {
  customization: true,
  primaryBtn: { children: 'Contact Us', href: PAGE_PATH.contactPage },
  navItems: [
    { id: 'home', title: 'Home', link: '/' },
    landingMegamenu,
    { id: 'components', title: 'Blocks', link: SECTION_PATH },
    { id: 'dashboard', title: 'Dashboard', link: ADMIN_PATH, ...linkProps },
    pagesMegamenu,
    { id: 'docs', title: 'Docs', link: DOCS_URL, ...linkProps, icon: 'tabler-pin-invoke' }
  ]
};
