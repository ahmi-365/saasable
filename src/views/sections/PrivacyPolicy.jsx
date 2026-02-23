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
  { title: 'Blocks', to: SECTION_PATH },
  { title: 'Privacy policy' }
];

const sectionsData = [
  {
    typeset: {
      heading: 'Privacy policy Section - 01',
      caption: '',
      figmaLink: FIGMA_LINK.privacyPolicy.variant.privacyPolicy1
    },
    src: PRIVIEW_PATH.privacyPolicy.privacyPolicy1
  },
  {
    typeset: {
      heading: 'Privacy policy Section - 02',
      caption: '',
      figmaLink: FIGMA_LINK.privacyPolicy.variant.privacyPolicy2
    },
    src: PRIVIEW_PATH.proPage
  }
];

export default function PrivacyPolicy() {
  return (
    <>
      <SectionHero {...{ heading: `${branding.brandName} Privacy Policy Section`, breadcrumbs }} />
      <ContainerWrapper>
        <Stack sx={{ gap: { xs: 3, sm: 4, md: 5 }, my: 6 }}>
          {sectionsData.map((item, index) => (
            <Stack key={index} sx={{ gap: { xs: 1.5, md: 2.5 } }}>
              <SimulatorTypeset {...item.typeset} />
              <Simulator src={item.src} />
            </Stack>
          ))}
        </Stack>
      </ContainerWrapper>
    </>
  );
}
