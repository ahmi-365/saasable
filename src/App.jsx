import BlogPage from '@/views/landings/BlogPage';
import DocumentationPage from '@/views/landings/DocumentationPage';
import SupportPage from '@/views/landings/SupportPage';
import DiscordPage from '@/views/landings/DiscordPage';
import { lazy, Suspense } from 'react';
import AboutPage from '@/views/landings/AboutPage';
import { Outlet, Route, Routes } from 'react-router-dom';
import Loader from '@/components/Loader';
import ThemeProvider from '@/components/ThemeProvider';
import { ConfigProvider } from '@/contexts/ConfigContext';
import MainLayout from '@/views/landings/default/layout';


const HomePage = lazy(() => import('@/views/landings/default'));
const ContactPage = lazy(() => import('@/views/landings/default/contact'));
const PrivacyPolicyPage = lazy(() => import('@/views/landings/default/privacy-policy'));
const TermsConditionPage = lazy(() => import('@/views/landings/default/terms-condition'));
const SectionsIndex = lazy(() => import('@/views/sections'));
const AboutSection = lazy(() => import('@/views/sections/About'));
const BlogSection = lazy(() => import('@/views/sections/Blog'));
const BlogDetailsSection = lazy(() => import('@/views/sections/BlogDetails'));
const ClienteleSection = lazy(() => import('@/views/sections/Clientele'));
const ColorSection = lazy(() => import('@/views/sections/Color'));
const ComingSoonSection = lazy(() => import('@/views/sections/ComingSoon'));
const ContactUsSection = lazy(() => import('@/views/sections/ContactUs'));
const CookieSection = lazy(() => import('@/views/sections/Cookie'));
const CtaSection = lazy(() => import('@/views/sections/Cta'));
const EarlyAccessSection = lazy(() => import('@/views/sections/EarlyAccess'));
const Error404Section = lazy(() => import('@/views/sections/Error404'));
const Error500Section = lazy(() => import('@/views/sections/Error500'));
const FaqSection = lazy(() => import('@/views/sections/Faq'));
const FeatureSection = lazy(() => import('@/views/sections/Feature'));
const FooterSection = lazy(() => import('@/views/sections/Footer'));
const GallerySection = lazy(() => import('@/views/sections/Gallery'));
const HeroSection = lazy(() => import('@/views/sections/Hero'));
const IconSection = lazy(() => import('@/views/sections/Icon'));
const IntegrationSection = lazy(() => import('@/views/sections/Integration'));
const MegaMenuSection = lazy(() => import('@/views/sections/MegaMenu'));
const MetricsSection = lazy(() => import('@/views/sections/metrics'));
const NavbarSection = lazy(() => import('@/views/sections/Navbar'));
const OnBoardSection = lazy(() => import('@/views/sections/OnBoard'));
const OtherSection = lazy(() => import('@/views/sections/Other'));
const PricingSection = lazy(() => import('@/views/sections/Pricing'));
const PrivacyPolicySection = lazy(() => import('@/views/sections/PrivacyPolicy'));
const ProcessSection = lazy(() => import('@/views/sections/Process'));
const ProPageSection = lazy(() => import('@/views/sections/ProPage'));
const SmallHeroSection = lazy(() => import('@/views/sections/SmallHero'));
const TeamSection = lazy(() => import('@/views/sections/Team'));
const TermsConditionSection = lazy(() => import('@/views/sections/TermsCondition'));
const TestimonialSection = lazy(() => import('@/views/sections/Testimonial'));
const TopOfferSection = lazy(() => import('@/views/sections/TopOffer'));
const TypographySection = lazy(() => import('@/views/sections/Typography'));
const UnderMaintenanceSection = lazy(() => import('@/views/sections/UnderMaintenance'));
const LoginSection = lazy(() => import('@/views/sections/Login'));
const RegisterSection = lazy(() => import('@/views/sections/Register'));
const ForgotPasswordSection = lazy(() => import('@/views/sections/ForgotPassword'));
const NewPasswordSection = lazy(() => import('@/views/sections/NewPassword'));
const OtpVerificationSection = lazy(() => import('@/views/sections/OtpVerification'));
const Clientele3Block = lazy(() => import('@/blocks/clientele/Clientele3'));
const ContactUs4Block = lazy(() => import('@/blocks/contact-us/ContactUs4'));
const Cta4Block = lazy(() => import('@/blocks/cta/Cta4'));
const Cta5Block = lazy(() => import('@/blocks/cta/Cta5'));
const Error404Block = lazy(() => import('@/blocks/maintenance/Error404'));
const Error500Block = lazy(() => import('@/blocks/maintenance/Error500'));
const Faq6Block = lazy(() => import('@/blocks/faq/Faq6'));
const Feature18Block = lazy(() => import('@/blocks/feature/Feature18'));
const Feature20Block = lazy(() => import('@/blocks/feature/Feature20'));
const Feature21Block = lazy(() => import('@/blocks/feature/Feature21'));
const Footer7Block = lazy(() => import('@/blocks/footer/Footer7'));
const Hero17Block = lazy(() => import('@/blocks/hero/Hero17'));
const Integration2Block = lazy(() => import('@/blocks/integration/Integration2'));
const MegaMenu4Block = lazy(() => import('@/blocks/mega-menu/MegaMenu4'));
const MegaMenu5Block = lazy(() => import('@/blocks/mega-menu/MegaMenu5'));
const Metrics5Block = lazy(() => import('@/blocks/metrics/Metrics5'));
const Navbar10Block = lazy(() => import('@/blocks/navbar/Navbar10'));
const Other1Block = lazy(() => import('@/blocks/other/Other1'));
const Other2Block = lazy(() => import('@/blocks/other/Other2'));
const Pricing9Block = lazy(() => import('@/blocks/pricing/Pricing9'));
const PrivacyPolicy1Block = lazy(() => import('@/blocks/privacy-policy/PrivacyPolicy1'));
const ProPageBlock = lazy(() => import('@/blocks/pro-page/ProPage'));
const SmallHero3Block = lazy(() => import('@/blocks/small-hero/SmallHero3'));
const Testimonial10Block = lazy(() => import('@/blocks/testimonial/Testimonial10'));
const ScrollFab = lazy(() => import('@/components/ScrollFab'));
const NotFound = lazy(() => import('@/views/sections/Error404'));
const DashboardPage = lazy(() => import('@/views/landings/DashboardPage'));
const WeeklyPlannerPage = lazy(() => import('@/views/landings/WeeklyPlannerPage'));
const ProjectsPage = lazy(() => import('@/views/landings/ProjectsPage'));
const TimeTrackingPage = lazy(() => import('@/views/landings/TimeTrackingPage'));
const TeamPage = lazy(() => import('@/views/landings/TeamPage'));
const NotesPage = lazy(() => import('@/views/landings/NotesPage'));
const ReportsPage = lazy(() => import('@/views/landings/ReportsPage'));
const IntegrationsPage = lazy(() => import('@/views/landings/IntegrationsPage'));


function SectionsLayout() {
  return (
    <MainLayout>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </MainLayout>
  );
}
function BlocksLayout() {
  return (
    <MainLayout>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </MainLayout>
  );
}
const App = () => (
  <ConfigProvider>
    <ThemeProvider>
      <Suspense fallback={<Loader />}>
        <Routes >
          <Route
            path="/"
            element={
              <MainLayout>
                <HomePage />
                <ScrollFab />
              </MainLayout>
            }
          />
          <Route
            path="/contact"
            element={
              <MainLayout>
                <ContactPage />
              </MainLayout>
            }
          />
          <Route
            path="/about"
            element={
              <MainLayout>
                <AboutPage />
              </MainLayout>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <MainLayout>
                <PrivacyPolicyPage />
              </MainLayout>
            }
          />
          <Route
            path="/terms-condition"
            element={
              <MainLayout>
                <TermsConditionPage />
              </MainLayout>
            }
          />
          <Route
            path="/blog"
            element={
              <MainLayout>
                <BlogPage />
              </MainLayout>
            }
          />
          <Route
            path="/documentation"
            element={
              <MainLayout>
                <DocumentationPage />
              </MainLayout>
            }
          />
          <Route
            path="/support"
            element={
              <MainLayout>
                <SupportPage />
              </MainLayout>
            }
          />
          <Route
            path="/discord"
            element={
              <MainLayout>
                <DiscordPage />
              </MainLayout>
            }
          />
          <Route
            path="/dashboard"
            element={
              <MainLayout>
                <DashboardPage />
              </MainLayout>
            }
          />
          <Route
            path="/weekly-planner"
            element={
              <MainLayout>
                <WeeklyPlannerPage />
              </MainLayout>
            }
          />
          <Route
            path="/Projects"
            element={
              <MainLayout>
                <ProjectsPage />
              </MainLayout>
            }
          />
          <Route
            path="/time-tracking"
            element={
              <MainLayout>
                <TimeTrackingPage />
              </MainLayout>
            }
          />
          <Route
            path="/team"
            element={
              <MainLayout>
                <TeamPage />
              </MainLayout>
            }
          />
          <Route
            path="/notes"
            element={
              <MainLayout>
                <NotesPage />
              </MainLayout>
            }
          />
          <Route
            path="/reports"
            element={
              <MainLayout>
                <ReportsPage />
              </MainLayout>
            }
          />
          <Route
            path="/integrations"
            element={
              <MainLayout>
                <IntegrationsPage />
              </MainLayout>
            }
          />

          <Route path="/sections" element={<SectionsLayout />}>
            <Route index element={<SectionsIndex />} />
            <Route path="about" element={<AboutSection />} />
            <Route path="blog" element={<BlogSection />} />
            <Route path="blog-details" element={<BlogDetailsSection />} />
            <Route path="clientele" element={<ClienteleSection />} />
            <Route path="color" element={<ColorSection />} />
            <Route path="coming-soon" element={<ComingSoonSection />} />
            <Route path="contact-us" element={<ContactUsSection />} />
            <Route path="cookie" element={<CookieSection />} />
            <Route path="cta" element={<CtaSection />} />
            <Route path="early-access" element={<EarlyAccessSection />} />
            <Route path="error404" element={<Error404Section />} />
            <Route path="error500" element={<Error500Section />} />
            <Route path="faq" element={<FaqSection />} />
            <Route path="feature" element={<FeatureSection />} />
            <Route path="footer" element={<FooterSection />} />
            <Route path="gallery" element={<GallerySection />} />
            <Route path="hero" element={<HeroSection />} />
            <Route path="icon" element={<IconSection />} />
            <Route path="integration" element={<IntegrationSection />} />
            <Route path="mega-menu" element={<MegaMenuSection />} />
            <Route path="metrics" element={<MetricsSection />} />
            <Route path="navbar" element={<NavbarSection />} />
            <Route path="onboard" element={<OnBoardSection />} />
            <Route path="other" element={<OtherSection />} />
            <Route path="pricing" element={<PricingSection />} />
            <Route path="privacy-policy" element={<PrivacyPolicySection />} />
            <Route path="process" element={<ProcessSection />} />
            <Route path="pro-page" element={<ProPageSection />} />
            <Route path="small-hero" element={<SmallHeroSection />} />
            <Route path="team" element={<TeamSection />} />
            <Route path="terms-condition" element={<TermsConditionSection />} />
            <Route path="testimonial" element={<TestimonialSection />} />
            <Route path="top-offer" element={<TopOfferSection />} />
            <Route path="typography" element={<TypographySection />} />
            <Route path="under-maintenance" element={<UnderMaintenanceSection />} />
            <Route path="auth/login" element={<LoginSection />} />
            <Route path="auth/register" element={<RegisterSection />} />
            <Route path="auth/forgot-password" element={<ForgotPasswordSection />} />
            <Route path="auth/new-password" element={<NewPasswordSection />} />
            <Route path="auth/otp-verification" element={<OtpVerificationSection />} />
          </Route>
          <Route path="/blocks" element={<BlocksLayout />}>
            <Route path="clientele/clientele3" element={<Clientele3Block />} />
            <Route path="contact-us/contact-us4" element={<ContactUs4Block />} />
            <Route path="cta/cta4" element={<Cta4Block />} />
            <Route path="cta/cta5" element={<Cta5Block />} />
            <Route path="error404" element={<Error404Block />} />
            <Route path="error500" element={<Error500Block />} />
            <Route path="faq/faq6" element={<Faq6Block />} />
            <Route path="feature/feature18" element={<Feature18Block />} />
            <Route path="feature/feature20" element={<Feature20Block />} />
            <Route path="feature/feature21" element={<Feature21Block />} />
            <Route path="footer/footer7" element={<Footer7Block />} />
            <Route path="hero/hero17" element={<Hero17Block />} />

            <Route path="integration/integration2" element={<Integration2Block />} />
            <Route path="megamenu/megamenu4" element={<MegaMenu4Block />} />
            <Route path="megamenu/megamenu5" element={<MegaMenu5Block />} />
            <Route path="metrics/metrics5" element={<Metrics5Block />} />
            <Route path="navbar/navbar10" element={<Navbar10Block />} />
            <Route path="other/other1" element={<Other1Block />} />
            <Route path="other/other2" element={<Other2Block />} />
            <Route path="pricing/pricing9" element={<Pricing9Block />} />
            <Route path="privacy-policy/privacy-policy1" element={<PrivacyPolicy1Block />} />
            <Route path="pro-page" element={<ProPageBlock />} />
            <Route path="small-hero/small-hero3" element={<SmallHero3Block />} />
            <Route path="testimonial/testimonial10" element={<Testimonial10Block />} />
          </Route>
          <Route path="*" element={<NotFound />} />

        </Routes>
      </Suspense>
    </ThemeProvider>
  </ConfigProvider>
);
export default App;
