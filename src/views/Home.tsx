import { Box } from "@chakra-ui/react";
import { Footer, Header, MobileCtaBar, ScrollToTop } from "../components/layout/Layout";
import {
  AboutSection,
  CatalogueSection,
  ContactSection,
  DomainsSection,
  HeroSection,
  CompaniesStrip,
  LocationSection,
  PlanningSection,
  PromoBanners,
  WhySection,
} from "../components/HomeSections";
import { useHomeViewModel } from "../viewmodels/useHomeViewModel";
import { CursorSpotlight } from "../components/animations/CursorSpotlight";
import { LogoIntroLoader } from "../components/animations/LogoIntroLoader";

export function Home() {
  const vm = useHomeViewModel();

  return (
    <Box minH="100vh" bg="white" dir={vm.dir}>
      <LogoIntroLoader />
      <CursorSpotlight />
      <Header
        language={vm.language}
        setLanguage={vm.setLanguage}
        navLinks={vm.navLinks}
        handleDownloadCatalogue={vm.handleDownloadCatalogue}
        contactLabel={vm.t.extras.contactCta}
      />

      <Box as="main">
        <HeroSection
          event={vm.event}
          handleDownloadCatalogue={vm.handleDownloadCatalogue}
          t={vm.t}
          dir={vm.dir}
        />
        <PromoBanners t={vm.t} />
        <CompaniesStrip  />
        <DomainsSection domains={vm.domains} t={vm.t} dir={vm.dir} />
        <WhySection reasons={vm.reasons} t={vm.t} dir={vm.dir} />
        <CatalogueSection
          handleDownloadCatalogue={vm.handleDownloadCatalogue}
          t={vm.t}
        />
        <PlanningSection t={vm.t} />
        <ContactSection
          contactChannels={vm.contactChannels}
          domains={vm.domains}
          form={vm.form}
          updateField={vm.updateField}
          isSubmitting={vm.isSubmitting}
          isSubmitted={vm.isSubmitted}
          handleContactSubmit={vm.handleContactSubmit}
          resetContactForm={vm.resetContactForm}
          t={vm.t}
        />
        <LocationSection t={vm.t} contactChannels={vm.contactChannels} />
        <AboutSection pillars={vm.pillars} t={vm.t} />
      </Box>

      <Footer
        navLinks={vm.navLinks}
        socials={vm.socials}
        contactChannels={vm.contactChannels}
      />
      <MobileCtaBar
        onDownload={vm.handleDownloadCatalogue}
        contactLabel={vm.t.extras.contactCta}
        t={vm.t}
      />
      <ScrollToTop />
    </Box>
  );
}
