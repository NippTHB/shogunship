import { motion } from 'framer-motion';
import PixelStars from './PixelStars';
import LandingAsset02 from '../../assets/images/Landing_asset02.png';

const SHIP_IMG = LandingAsset02;
const SPRITE_IMG = 'https://media.db.com/images/public/6a21a3f44ff5cedb9addee5e/265724f5a_generated_image.png';

// Pixel art "dialog box" component
function DialogBox({ children, title }) {
  return (
    <div className="relative border-4 bg-px-dark p-4 textured-ocean-panel" style={{ borderColor: '#f9b76c', background: '#4c9e7e', boxShadow: '6px 6px 0px #f9b76c' }}>
      {title && (
        <div className="absolute -top-4 left-4 bg-px-dark px-2">
          <span className="font-pixel text-[8px]" style={{ color: '#f9b76c' }}>{title}</span>
        </div>
      )}
      {children}
    </div>
  );
}

// Compact service record using the existing pixel-bar language.
function ServiceRecord({ label, value }) {
  const statusColor = value === 'INCLUDED' ? '#a2d2b1' : '#f9b76c';

  return (
    <div className="flex items-center gap-3">
      <span className="font-pixel text-[6px] w-20 text-right" style={{ color: '#f2e1b1' }}>{label}</span>
      <div className="flex gap-[2px]">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 service-segment"
            style={{
              background: statusColor,
              border: '1px solid #4c9e7e',
              imageRendering: 'pixelated',
            }}
          />
        ))}
      </div>
      <span className="font-pixel text-[6px] service-status">{value}</span>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative pt-14 overflow-hidden pixel-grid material-hero">
      <PixelStars count={40} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 pt-10 lg:pt-12 pb-24">
        {/* Guild location bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-between mb-8 border-2 px-4 py-2 environment-sign"
          style={{ borderColor: '#4c9e7e', background: '#4c9e7e' }}
        >
          <div className="flex items-center gap-4">
            <span className="font-pixel text-[9px]" style={{ color: '#a2d2b1' }}>JAPAN-BASED COLLECTOR SERVICE</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT — Main headline */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="font-pixel text-[9px] mb-4" style={{ color: '#f9b76c' }}>
                PERSONAL PROXY SERVICE IN JAPAN
              </div>

              <h1 className="font-pixel leading-relaxed environment-heading" style={{ color: '#f9b76c' }}>
                <div className="text-2xl sm:text-3xl lg:text-4xl hero-headline-primary">YOUR TRUSTED</div>
                <div className="text-2xl sm:text-3xl lg:text-4xl hero-headline-primary">BUYING TEAM</div>
                <div className="text-2xl sm:text-3xl lg:text-4xl" style={{ color: '#f47b1f' }}>IN JAPAN</div>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="mt-8"
            >
              <DialogBox title="WHO WE ARE">
                <p className="font-vt text-lg leading-relaxed" style={{ color: '#f2e1b1' }}>
                  We are a husband-and-wife team based in Nara, Japan, helping
                  collectors buy from Japanese marketplaces. Whether you need us
                  to purchase an item for you or simply receive and forward it,
                  every package is personally photographed, stored, consolidated,
                  and carefully shipped by us. We treat every order with the same
                  care we would give our own collection.
                  <br /><br />
                  Arigatou gozaimasu!
                  <span className="block mt-1 text-base italic" style={{ color: '#f2e1b1' }}>
                    — The ShogunShip Family
                  </span>
                </p>
              </DialogBox>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="mt-6 border-2 p-4 environment-paper"
              style={{ borderColor: '#4c9e7e', background: '#4c9e7e' }}
            >
              <div className="font-pixel text-[7px] mb-4" style={{ color: '#f9b76c' }}>PERSONAL HANDLING</div>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                <ServiceRecord label="ARRIVAL PHOTOS" value="INCLUDED" color="#a2d2b1" />
                <ServiceRecord label="CONSOLIDATION" value="INCLUDED" color="#f9b76c" />
                <ServiceRecord label="STORAGE" value="INCLUDED" color="#a2d2b1" />
                <ServiceRecord label="INSPECTION" value="AVAILABLE" color="#f9b76c" />
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              className="mt-6 flex flex-wrap gap-4"
            >
              <a href="#manifest" className="pixel-btn pixel-btn-orange px-6 py-3 font-pixel text-[8px]">
                SEND ITEM LINK
              </a>
              <a href="#founders" className="pixel-btn pixel-btn-secondary px-6 py-3 font-pixel text-[8px]">
                MEET THE FOUNDERS
              </a>
            </motion.div>
          </div>

          {/* RIGHT — Pixel art scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Main scene image */}
            <div
              className="relative overflow-hidden border-4"
              style={{ borderColor: '#f9b76c', boxShadow: '6px 6px 0px #f9b76c', imageRendering: 'pixelated' }}
            >
              <img
                src={SHIP_IMG}
                alt="Pixel art Tokyo skyline with cargo ship"
                className="w-full aspect-video object-cover"
                style={{ imageRendering: 'pixelated' }}
              />
              <div className="absolute inset-0 scanlines" />
            </div>

            {/* Character sprite */}
            <div className="grid grid-cols-2 gap-4">
              <div
                className="border-4 overflow-hidden environment-stone-frame"
                style={{ borderColor: '#4c9e7e', imageRendering: 'pixelated' }}
              >
                <img
                  src={SPRITE_IMG}
                  alt="Shogun character sprite"
                  className="w-full aspect-square object-cover pixel-float palette-sprite"
                  style={{ imageRendering: 'pixelated' }}
                />
              </div>
              <div className="space-y-2">
                <div className="border-2 p-2 material-paper" style={{ borderColor: '#4c9e7e', background: '#4c9e7e' }}>
                  <div className="font-pixel text-[6px] mb-1" style={{ color: '#f9b76c' }}>SERVICE</div>
                  <div className="font-vt text-lg" style={{ color: '#f9b76c' }}>PROXY BUYING</div>
                </div>
                <div className="border-2 p-2 material-paper" style={{ borderColor: '#4c9e7e', background: '#4c9e7e' }}>
                  <div className="font-pixel text-[6px] mb-1" style={{ color: '#f9b76c' }}>BASED IN</div>
                  <div className="font-vt text-lg" style={{ color: '#f9b76c' }}>NARA, JAPAN</div>
                </div>
                <div className="border-2 p-2 material-paper" style={{ borderColor: '#4c9e7e', background: '#4c9e7e' }}>
                  <div className="font-pixel text-[6px] mb-1" style={{ color: '#a2d2b1' }}>MARKETPLACES</div>
                  <div className="font-vt text-xl" style={{ color: '#a2d2b1' }}>JAPAN-WIDE</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
