import { motion } from 'framer-motion';
import PixelStars from './PixelStars';

const SHIP_IMG = 'https://media.db.com/images/public/6a21a3f44ff5cedb9addee5e/8e922a1eb_generated_image.png';
const SPRITE_IMG = 'https://media.db.com/images/public/6a21a3f44ff5cedb9addee5e/265724f5a_generated_image.png';

// Pixel art "dialog box" component
function DialogBox({ children, title }) {
  return (
    <div className="relative border-4 bg-px-dark p-4" style={{ borderColor: '#e8c87a', boxShadow: '6px 6px 0px #ff6b2b' }}>
      {title && (
        <div className="absolute -top-4 left-4 bg-px-dark px-2">
          <span className="font-pixel text-[8px]" style={{ color: '#ff6b2b' }}>{title}</span>
        </div>
      )}
      {children}
    </div>
  );
}

// Pixel health/stat bar
function StatBar({ label, value, max = 100, color = '#6abf5e' }) {
  const pct = Math.round((value / max) * 100);
  const filled = Math.round(pct / 10);
  return (
    <div className="flex items-center gap-3">
      <span className="font-pixel text-[6px] w-20 text-right" style={{ color: '#a0b0c0' }}>{label}</span>
      <div className="flex gap-[2px]">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="w-3 h-3"
            style={{
              background: i < filled ? color : '#1a2b3c',
              border: '1px solid #2a3f5a',
              imageRendering: 'pixelated',
            }}
          />
        ))}
      </div>
      <span className="font-pixel text-[6px]" style={{ color }}>{value}%</span>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-14 overflow-hidden pixel-grid" style={{ background: '#080d14' }}>
      <PixelStars count={40} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 pt-12 lg:pt-20 pb-8">
        {/* Top status bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-between mb-8 border-2 px-4 py-2"
          style={{ borderColor: '#1a2b3c', background: '#0f1b2d' }}
        >
          <div className="flex items-center gap-4">
            <span className="font-pixel text-[7px]" style={{ color: '#6abf5e' }}>● ONLINE</span>
            <span className="font-pixel text-[7px]" style={{ color: '#a0b0c0' }}>CURATORS: 12 ACTIVE</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-pixel text-[7px]" style={{ color: '#a0b0c0' }}>STAGE 1-1</span>
            <span className="font-pixel text-[7px] pixel-blink" style={{ color: '#e8c87a' }}>▮</span>
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
              <div className="font-pixel text-[9px] mb-4" style={{ color: '#ff6b2b' }}>
                ▶ PRESS START TO COLLECT
              </div>

              <h1 className="font-pixel leading-relaxed" style={{ color: '#e8c87a' }}>
                <div className="text-2xl sm:text-3xl lg:text-4xl">FROM THE</div>
                <div className="text-2xl sm:text-3xl lg:text-4xl">HANDS OF</div>
                <div className="text-2xl sm:text-3xl lg:text-4xl" style={{ color: '#ff6b2b' }}>THE SOURCE</div>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="mt-8"
            >
              <DialogBox title="MISSION BRIEFING">
                <p className="font-vt text-lg leading-relaxed" style={{ color: '#c8d8e8' }}>
                  Real collectors in Japan sourcing, inspecting and
                  shipping rare finds directly to your door.
                  No middlemen. No mystery. Just the personal bond
                  between the seeker and the source.
                </p>
              </DialogBox>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="mt-6 border-2 p-4 space-y-3"
              style={{ borderColor: '#2a3f5a', background: '#0f1b2d' }}
            >
              <div className="font-pixel text-[7px] mb-4" style={{ color: '#ff6b2b' }}>PLAYER STATS</div>
              <StatBar label="RELIABILITY" value={99} color="#6abf5e" />
              <StatBar label="TRUST" value={98} color="#e8c87a" />
              <StatBar label="SPEED" value={94} color="#ff6b2b" />
              <StatBar label="COVERAGE" value={87} color="#7ab8ff" />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              className="mt-6 flex flex-wrap gap-4"
            >
              <a href="#provenance" className="pixel-btn pixel-btn-orange px-6 py-3 font-pixel text-[8px]">
                ► VIEW ARCHIVE
              </a>
              <a href="#curators" className="pixel-btn px-6 py-3 font-pixel text-[8px] bg-px-blue" style={{ color: '#e8c87a' }}>
                ⚔ MEET CURATORS
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
              style={{ borderColor: '#e8c87a', boxShadow: '6px 6px 0px #ff6b2b', imageRendering: 'pixelated' }}
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
                <span className="font-pixel text-[7px]" style={{ color: '#e8c87a' }}>
                  TOKYO → WORLDWIDE
                </span>
              </div>
            </div>

            {/* Character sprite */}
            <div className="grid grid-cols-2 gap-4">
              <div
                className="border-4 overflow-hidden"
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
                <div className="border-2 p-2" style={{ borderColor: '#2a3f5a', background: '#0f1b2d' }}>
                  <div className="font-pixel text-[6px] mb-1" style={{ color: '#ff6b2b' }}>CLASS</div>
                  <div className="font-vt text-lg" style={{ color: '#e8c87a' }}>COLLECTOR</div>
                </div>
                <div className="border-2 p-2" style={{ borderColor: '#2a3f5a', background: '#0f1b2d' }}>
                  <div className="font-pixel text-[6px] mb-1" style={{ color: '#ff6b2b' }}>REGION</div>
                  <div className="font-vt text-lg" style={{ color: '#e8c87a' }}>JAPAN</div>
                </div>
                <div className="border-2 p-2" style={{ borderColor: '#2a3f5a', background: '#0f1b2d' }}>
                  <div className="font-pixel text-[6px] mb-1" style={{ color: '#6abf5e' }}>ITEMS SHIPPED</div>
                  <div className="font-vt text-xl" style={{ color: '#6abf5e' }}>2,400+</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
