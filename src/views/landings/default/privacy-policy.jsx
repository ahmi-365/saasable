import { Hero17 } from '@/blocks/hero';
import ContainerWrapper from '@/components/ContainerWrapper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const privacyHero = {
  chip: {
    label: 'Legal & Compliance'
  },
  headLine: 'Privacy Policy',
  captionLine: 'This Privacy Policy describes how we collect, use, and share information about you when you use our website or services. Your privacy and trust are important to us.',
  // Optionally add featureButtons, videoSrc, etc. if you want more animation
};

const policySections = [
  {
    id: 'acceptance-of-terms',
    heading: 'Acceptance of terms',
    caption:
      'By accessing and using this website, you agree to be bound by these Terms and Conditions of Use. If you do not agree with any part of these terms, you must not use the website. shares information about you when you use our website or services. By accessing or using our website, you consent to the practices described in this policy.'
  },
  {
    id: 'changes-to-terms',
    heading: 'Changes to terms',
    caption:
      'We reserve the right to modify or replace these terms at our sole discretion. It is your responsibility to check these terms periodically for changes. Your continued use of the website after the posting of any changes constitutes acceptance of those changes.'
  },
  {
    id: 'user-conduct',
    heading: 'User conduct',
    caption:
      'You agree to use this website only for lawful purposes and in a manner consistent with all applicable local, national, and international laws and regulations.'
  },
  {
    id: 'intellectual-property',
    heading: 'Intellectual property',
    caption:
      'All content on this website, including but not limited to text, graphics, logos, images, audio clips, video clips, digital downloads, and data compilations, is the property of [Your Company Name] or its content suppliers and protected by international copyright laws.'
  },
  {
    id: 'privacy-policy',
    heading: 'Privacy policy',
    caption:
      'We do not sell, trade, or otherwise transfer your personal information to third parties. We may share information with trusted service providers who assist us in operating our website, conducting our business, or servicing you.'
  },
  {
    id: 'user-generated-content',
    heading: 'User-generated content',
    caption:
      'If you submit any material to this website, you grant [Your Company Name] a perpetual, royalty-free, worldwide license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such material.'
  },
  {
    id: 'limitation-of-liability',
    heading: 'Limitation of liability',
    caption:
      'In no event shall [Your Company Name] or its affiliates be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use this website.'
  },
  {
    id: 'indemnity',
    heading: 'Indemnity',
    caption:
      "You agree to indemnify and hold harmless [Your Company Name] and its affiliates from any claims, actions, demands, damages, liabilities, costs, or expenses, including reasonable attorneys' fees, arising out of or related to your use of the website or any violation of these terms."
  },
  {
    id: 'governing-law',
    heading: 'Governing law',
    caption:
      'These terms are governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law principles.'
  }
];

export default function PrivacyPolicy() {
  return (
    <>
      <Hero17 {...privacyHero} />
      <ContainerWrapper sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
        <Grid container spacing={{ xs: 2, md: 4 }}>
          {policySections.map((section) => (
            <Grid key={section.id} item xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 4, boxShadow: 2 }}>
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 600 }}>
                    {section.heading}
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  <Typography variant="body1" color="text.secondary">
                    {section.caption}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </ContainerWrapper>
    </>
  );
}
