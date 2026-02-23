import Stack from '@mui/material/Stack';
import branding from '@/branding.json';
import ContainerWrapper from '@/components/ContainerWrapper';
import SectionHero from '@/components/SectionHero';
import Simulator from '@/components/Simulator';
import SimulatorTypeset from '@/components/SimulatorTypeset';

import { PRIVIEW_PATH, SECTION_PATH } from '@/path';
import { FIGMA_LINK } from '@/utils/constant';

let breadcrumbs = [
  { title: 'Home', to: import.meta.env.VITE_BASE_NAME || '/' },
  { title: 'Components', to: SECTION_PATH },
  { title: 'Coming Soon' }
];

const sectionsData = {
  typeset: {
    heading: 'Default coming soon section',
    caption:
      'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.',
    figmaLink: FIGMA_LINK.comingSoon.link
  },
  src: PRIVIEW_PATH.proPage
};

export default function ComingSoon() {
  return (
    <>
      <SectionHero {...{ heading: `${branding.brandName} Coming Soon Section`, breadcrumbs }} />
      <ContainerWrapper>
        <Stack sx={{ gap: { xs: 1.5, md: 2.5 }, my: 6 }}>
          <SimulatorTypeset {...sectionsData.typeset} />
          <Simulator src={sectionsData.src} />
        </Stack>
      </ContainerWrapper>
    </>
  );
}
