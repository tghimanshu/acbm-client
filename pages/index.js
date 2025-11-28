import About from "../Components/home/about";
import Counts from "../Components/home/counts";
import HeroSection from "../Components/home/heroSection";
import WhyAcbm from "../Components/home/whyAcbm";

/**
 * Homepage component.
 *
 * This component renders the main landing page of the application.
 * It composes several sections:
 * - HeroSection: The top banner.
 * - About: Information about ACBM.
 * - WhyAcbm: The "Our Pillars" section.
 * - Counts: Statistical counters (currently commented out).
 *
 * @returns {JSX.Element} The rendered homepage.
 */
function Index() {
  return (
    <>
      <HeroSection />
      <main id="main">
        <About />
        {/* <Counts /> */}
        <WhyAcbm />
      </main>
    </>
  );
}

export default Index;
