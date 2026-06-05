import Navbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import ManifestTicker from '../components/landing/ManifestTicker';
import TrustPillars from '../components/landing/TrustPillars';
import ProvenanceGrid from '../components/landing/ProvenanceGrid';
import ProcessTimeline from '../components/landing/ProcessTimeline';
import CuratorSpotlight from '../components/landing/CuratorSpotlight';
import TransparencyBreakdown from '../components/landing/TransparencyBreakdown';
import Footer from '../components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: '#080d14' }}>
      <Navbar />
      <HeroSection />
      <ManifestTicker />
      <TrustPillars />
      <ProvenanceGrid />
      <ProcessTimeline />
      <CuratorSpotlight />
      <TransparencyBreakdown />
      <Footer />
    </div>
  );
}