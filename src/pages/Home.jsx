import Navbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import ManifestTicker from '../components/landing/ManifestTicker';
import TrustPillars from '../components/landing/TrustPillars';
import ProcessTimeline from '../components/landing/ProcessTimeline';
import MarketplacesSection from '../components/landing/MarketplacesSection';
import CuratorSpotlight from '../components/landing/CuratorSpotlight';
import TransparencyBreakdown from '../components/landing/TransparencyBreakdown';
import ContactSection from '../components/landing/ContactSection';
import Footer from '../components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: '#EDE5CC' }}>
      <Navbar />
      <HeroSection />
      <ManifestTicker />
      <TrustPillars />
      <ProcessTimeline />
      <MarketplacesSection />
      <CuratorSpotlight />
      <TransparencyBreakdown />
      <ContactSection />
      <Footer />
    </div>
  );
}