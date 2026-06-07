import { motion } from 'framer-motion';
import PixelStars from './PixelStars';

const SHIP_IMG = 'https://media.db.com/images/public/6a21a3f44ff5cedb9addee5e/8e922a1eb_generated_image.png';
const SPRITE_IMG = 'https://media.db.com/images/public/6a21a3f44ff5cedb9addee5e/265724f5a_generated_image.png';

// Pixel art "dialog box" component
function DialogBox({ children, title }) {
  return (
    <div className="relative border-4 bg-px-dark p-4" style={{ borderColor: '#c39a4a', background: '#142331', boxShadow: '6px 6px 0px #a94f2c' }}>
      {title && (
        <div className="absolute -top-4 left-4 bg-px-dark px-2">
          <span className="font-pixel text-[8px]" style={{ color: '#a94f2c' }}>{title}</span>
        </div>
      )}
      {children}
    </div>
  );
}

// Compact service record using the existing pixel-bar language.
function ServiceRecord({ label, value, color = '#5d7042' }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-pixel text-[6px] w-20 text-right" style={{ color: '#a0b0c0' }}>{label}</span>
      <div className="flex gap-[2px]">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="w-3 h-3"
            style={{
              background: color,
              border: '1px solid #2a3f5a',
              imageRendering: 'pixelated',
            }}
          />
        ))}
      </div>
      <span className="font-pixel text-[6px]" style={{ color }}>{value}</span>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-14 overflow-hidden pixel-grid material-hero">
      <PixelStars count={40} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 pt-12 lg:pt-20 pb-8">
        {/* Guild location bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-between mb-8 border-2 px-4 py-2 environment-sign"
          style={{ borderColor: '#1a2b3c', background: '#0f1b2d' }}
        >
          <div className="flex items-center gap-4">
            <span className="font-pixel text-[7px]" style={{ color: '#5d7042' }}>JAPAN-BASED GUILD</span>
            <span className="font-pixel text-[7px]" style={{ color: '#a0b0c0' }}>HUSBAND + WIFE TEAM</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-pixel text-[7px]" style={{ color: '#c39a4a' }}>NARA PREFECTURE</span>
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
              <div className="font-pixel text-[9px] mb-4" style={{ color: '#a94f2c' }}>
                PERSONAL PROXY SERVICE IN JAPAN
              </div>

              <h1 className="font-pixel leading-relaxed environment-heading" style={{ color: '#c39a4a' }}>
                <div className="text-2xl sm:text-3xl lg:text-4xl hero-headline-primary">YOUR TRUSTED</div>
                <div className="text-2xl sm:text-3xl lg:text-4xl hero-headline-primary">BUYING TEAM</div>
                <div className="text-2xl sm:text-3xl lg:text-4xl" style={{ color: '#a94f2c' }}>IN JAPAN</div>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="mt-8"
            >
              <DialogBox title="FROM THE GUILD">
                <p className="font-vt text-lg leading-relaxed" style={{ color: '#c8d8e8' }}>
                  We are a husband-and-wife team in Nara helping collectors
                  buy from Japanese marketplaces. We receive, photograph,
                  inspect, store, consolidate, and carefully ship each purchase.
                </p>
              </DialogBox>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="mt-6 border-2 p-4 space-y-3 environment-paper"
              style={{ borderColor: '#2a3f5a', background: '#0f1b2d' }}
            >
              <div className="font-pixel text-[7px] mb-4" style={{ color: '#a94f2c' }}>PERSONAL HANDLING</div>
              <ServiceRecord label="ARRIVAL PHOTOS" value="INCLUDED" color="#5d9290" />
              <ServiceRecord label="INSPECTION" value="INCLUDED" color="#c39a4a" />
              <ServiceRecord label="STORAGE" value="AVAILABLE" color="#5d7042" />
              <ServiceRecord label="CONSOLIDATION" value="AVAILABLE" color="#a94f2c" />
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
              <a href="#founders" className="pixel-btn px-6 py-3 font-pixel text-[8px] bg-px-blue" style={{ color: '#c39a4a' }}>
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
              className="relative overflow-hidden border-4 environment-frame"
              style={{ borderColor: '#c39a4a', boxShadow: '6px 6px 0px #a94f2c', imageRendering: 'pixelated' }}
            >
              <img
                src={SHIP_IMG}
                alt="Pixel art Tokyo skyline with cargo ship"
                className="w-full aspect-video object-cover"
                style={{ imageRendering: 'pixelated' }}
              />
              <div className="absolute inset-0 scanlines" />
              <div
                className="absolute bottom-0 left-0 right-0 px-3 py-2"
                style={{ background: 'linear-gradient(transparent, rgba(8,13,20,0.95))' }}
              >
                <span className="font-pixel text-[7px]" style={{ color: '#c39a4a' }}>
                  JAPAN TO YOUR COLLECTION
                </span>
              </div>
            </div>

            {/* Character sprite */}
            <div className="grid grid-cols-2 gap-4">
              <div
                className="border-4 overflow-hidden environment-stone-frame"
                style={{ borderColor: '#2a3f5a', imageRendering: 'pixelated' }}
              >
                <img
                  src={SPRITE_IMG}
                  alt="Shogun character sprite"
                  className="w-full aspect-square object-cover pixel-float"
                  style={{ imageRendering: 'pixelated' }}
                />
              </div>
              <div className="space-y-2">
                <div className="border-2 p-2 material-paper" style={{ borderColor: '#2a3f5a', background: '#0f1b2d' }}>
                  <div className="font-pixel text-[6px] mb-1" style={{ color: '#a94f2c' }}>SERVICE</div>
                  <div className="font-vt text-lg" style={{ color: '#c39a4a' }}>PROXY BUYING</div>
                </div>
                <div className="border-2 p-2 material-paper" style={{ borderColor: '#2a3f5a', background: '#0f1b2d' }}>
                  <div className="font-pixel text-[6px] mb-1" style={{ color: '#a94f2c' }}>BASED IN</div>
                  <div className="font-vt text-lg" style={{ color: '#c39a4a' }}>NARA, JAPAN</div>
                </div>
                <div className="border-2 p-2 material-paper" style={{ borderColor: '#2a3f5a', background: '#0f1b2d' }}>
                  <div className="font-pixel text-[6px] mb-1" style={{ color: '#5d7042' }}>MARKETPLACES</div>
                  <div className="font-vt text-xl" style={{ color: '#5d7042' }}>JAPAN-WIDE</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
