import About from "../Components/home/about";
import Counts from "../Components/home/counts";
import HeroSection from "../Components/home/heroSection";
import WhyAcbm from "../Components/home/whyAcbm";

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
