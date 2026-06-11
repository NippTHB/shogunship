import { motion } from 'framer-motion';
import PixelClouds from './PixelClouds';

function VialBar({ label, value, max = 100 }) {
  const segments = 10;
  const filled = Math.round((value / max) * segments);
  return (
    <div className="flex items-center gap-2">
      <span className="font-pixel text-[6px] w-28 text-right shrink-0" style={{ color: '#5a3a2a' }}>{label}</span>
      <div className="flex gap-[2px]">
        {Array.from({ length: segments }).map((_, i) => (
          <div
            key={i}
            className="w-3 h-4"
            style={{
              background: i < filled
                ? 'linear-gradient(180deg, #7ec4ae 0%, #69A18E 50%, #4d8070 100%)'
                : '#c8c4b2',
              border: '1px solid #6A4A3A',
              imageRendering: 'pixelated',
            }}
          />
        ))}
      </div>
    </div>
  );
}

function ParchmentBox({ title, children }) {
  return (
    <div
      className="relative p-4"
      style={{
        background: 'rgba(244,237,218,0.92)',
        border: '3px solid #6A4A3A',
        boxShadow: '4px 4px 0px rgba(106,74,58,0.4)',
      }}
    >
      {title && (
        <div
          className="absolute -top-3 left-3 px-2 font-pixel text-[6px]"
          style={{ background: '#F4EDDA', color: '#6A4A3A' }}
        >
          {title}
        </div>
      )}
      {children}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-12 overflow-hidden">
      {/* Sky vertical gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, #4C9E7E 0%, #5EAD8A 30%, #7DC09C 55%, rgba(162,210,177,0.88) 72%, rgba(196,219,184,0.38) 86%, transparent 100%)',
        }}
      />

      {/* Pixel dither texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(253,248,237,0.04) 1px, transparent 1px)',
          backgroundSize: '4px 4px',
        }}
      />

      {/* Pixel clouds */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <PixelClouds />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 pt-8 lg:pt-14 pb-0">
        {/* Tag line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-4 mb-5 px-3 py-2 border-2 inline-flex"
          style={{ background: 'rgba(244,237,218,0.18)', borderColor: '#F2E1B1', display: 'inline-flex' }}
        >
          <span className="font-pixel text-[6px]" style={{ color: '#F4EDDA' }}>NARA, JAPAN</span>
          <span className="font-pixel text-[6px]" style={{ color: '#C1A562' }}>•</span>
          <span className="font-pixel text-[6px]" style={{ color: '#F4EDDA' }}>PERSONAL PROXY SERVICE</span>
          <span className="font-pixel text-[6px]" style={{ color: '#C1A562' }}>•</span>
          <span className="font-pixel text-[6px]" style={{ color: '#F4EDDA' }}>EST. BY COLLECTORS</span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start mt-2">
          {/* LEFT */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
            >
              <h1 className="font-pixel leading-snug" style={{ color: '#F4EDDA' }}>
                <div className="text-2xl sm:text-3xl lg:text-4xl" style={{ color: '#F2E1B1' }}>BUY FROM JAPAN.</div>
                <div className="text-2xl sm:text-3xl lg:text-4xl" style={{ color: '#F2E1B1' }}>WE HANDLE THE REST.</div>
              </h1>
              <div className="font-pixel text-[8px] mt-2" style={{ color: '#A2D2B1' }}>
                Mercari · Yahoo Auctions · Surugaya · Rakuma · Mandarake
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="mt-5"
            >
              <ParchmentBox>
                <p className="font-vt text-xl leading-snug" style={{ color: '#4a3a2a' }}>
                  ShogunShip is a husband-and-wife proxy buying service based in Nara Prefecture, Japan.
                  We help international collectors buy from Japanese marketplaces — then receive,
                  photograph, inspect, store, consolidate, and ship your items to you personally.
                </p>
                <div className="mt-3 font-vt text-base" style={{ color: '#6a5a4a' }}>
                  We are not an anonymous fulfillment company. Your items are handled by us, directly.
                </div>
              </ParchmentBox>
            </motion.div>

            {/* Service capabilities */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="mt-5"
            >
              <ParchmentBox title="WHAT WE DO">
                <div className="space-y-3">
                  <VialBar label="BUYING" value={99} />
                  <VialBar label="INSPECTION" value={99} />
                  <VialBar label="STORAGE" value={95} />
                  <VialBar label="CONSOLIDATION" value={95} />
                  <VialBar label="SHIPPING" value={98} />
                </div>
              </ParchmentBox>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.65 }}
              className="mt-6 flex flex-wrap gap-4"
            >
              <a href="#contact" className="pixel-btn pixel-btn-brass px-6 py-3 font-pixel text-[7px]">
                SEND ITEM LINK ►
              </a>
              <a
                href="#founders"
                className="pixel-btn px-6 py-3 font-pixel text-[7px]"
                style={{ background: 'rgba(244,237,218,0.15)', color: '#F4EDDA', border: '3px solid #F2E1B1', boxShadow: '3px 3px 0px rgba(0,0,0,0.2)' }}
              >
                MEET US
              </a>
            </motion.div>
          </div>

          {/* RIGHT — info panels */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="lg:col-span-5 space-y-3"
          >
            {/* Founders panel */}
            <div
              style={{
                background: 'rgba(244,237,218,0.92)',
                border: '3px solid #6A4A3A',
                boxShadow: '5px 5px 0px rgba(106,74,58,0.35)',
              }}
            >
              <div
                className="px-4 py-2 border-b-2"
                style={{ borderColor: '#6A4A3A', background: '#6A4A3A' }}
              >
                <span className="font-pixel text-[7px]" style={{ color: '#F2E1B1' }}>ABOUT US</span>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 border-2 flex items-center justify-center font-pixel text-sm shrink-0"
                    style={{ borderColor: '#6A4A3A', background: '#d4c9b0', color: '#6A4A3A' }}
                  >
                    ♥
                  </div>
                  <div>
                    <div className="font-pixel text-[7px]" style={{ color: '#6A4A3A' }}>HUSBAND & WIFE TEAM</div>
                    <div className="font-vt text-lg mt-1" style={{ color: '#4a3a2a' }}>
                      Based in Nara Prefecture, Japan. We personally handle every order — no outsourcing, no warehouses.
                    </div>
                  </div>
                </div>

                <div className="border-t pt-3" style={{ borderColor: '#c8c0a8' }}>
                  <div className="font-pixel text-[6px] mb-2" style={{ color: '#8a7a6a' }}>MARKETPLACES WE NAVIGATE</div>
                  <div className="flex flex-wrap gap-1">
                    {['Mercari', 'Yahoo Auctions', 'Surugaya', 'Rakuma', 'Mandarake'].map(m => (
                      <span
                        key={m}
                        className="font-pixel text-[5px] px-2 py-1"
                        style={{ background: '#4C9E7E', color: '#F4EDDA' }}
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-3" style={{ borderColor: '#c8c0a8' }}>
                  <div className="font-pixel text-[6px] mb-1" style={{ color: '#8a7a6a' }}>NARA, JAPAN</div>
                  <div className="font-vt text-base" style={{ color: '#4a3a2a' }}>
                    Local presence means faster buying decisions, better seller relationships, and personal accountability on every item.
                  </div>
                </div>
              </div>
            </div>

            {/* Trust signal strip */}
            <div
              className="grid grid-cols-3 gap-0"
              style={{ border: '3px solid #6A4A3A', boxShadow: '3px 3px 0px rgba(106,74,58,0.3)' }}
            >
              {[
                { icon: '⊙', label: 'ARRIVAL\nPHOTOS' },
                { icon: '◈', label: 'ITEM\nINSPECTION' },
                { icon: '⬡', label: 'SAFE\nSTORAGE' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-3 text-center border-r last:border-r-0"
                  style={{ background: 'rgba(244,237,218,0.92)', borderColor: '#6A4A3A' }}
                >
                  <div className="font-pixel text-base mb-1" style={{ color: '#4C9E7E' }}>{item.icon}</div>
                  <div className="font-pixel text-[5px] leading-tight whitespace-pre-line" style={{ color: '#6A4A3A' }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Ground transition */}
      <div
        className="w-full h-16 mt-8"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(242,225,177,0.22) 100%)',
        }}
      />
    </section>
  );
}
