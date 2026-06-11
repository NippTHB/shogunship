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
import panoramaImage from '../assets/images/Website_Background_Panorama01.png';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: '#EDE5CC' }}>
      <Navbar />
      <div className="relative overflow-hidden" style={{ background: '#4C9E7E' }}>
        <div className="absolute inset-x-0 bottom-0 z-0 h-[clamp(18rem,42vw,42rem)] pointer-events-none" aria-hidden="true">
          <img
            src={panoramaImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-bottom"
            draggable="false"
          />
          <div
            className="absolute inset-x-0 top-0 h-2/5"
            style={{
              background: 'linear-gradient(180deg, #A2D2B1 0%, rgba(162,210,177,0.72) 28%, transparent 100%)',
            }}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-1/3"
            style={{
              background: 'linear-gradient(180deg, transparent 0%, rgba(242,225,177,0.72) 68%, #F2E1B1 100%)',
            }}
          />
        </div>
        <div className="relative z-10">
          <HeroSection />
        </div>
        <div className="relative z-20">
          <ManifestTicker />
        </div>
      </div>
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
