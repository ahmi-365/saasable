import { PrivacyPolicy1 } from '@/blocks/privacy-policy';
import { SmallHero3 } from '@/blocks/small-hero';
import { smallHero } from './data';

export default function PrivacyPolicy() {
  return (
    <>
      <SmallHero3 {...smallHero} />
      <PrivacyPolicy1 />
    </>
  );
}
