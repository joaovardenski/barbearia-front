import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import ForWhoSection from '../components/ForWhoSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

function LandingPage() {
  return (
    <>
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ForWhoSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

export default LandingPage;
