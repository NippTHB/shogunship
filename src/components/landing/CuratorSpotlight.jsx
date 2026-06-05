import { motion } from 'framer-motion';
import PixelDivider from './PixelDivider';

const CURATOR_IMG = 'https://media.db.com/images/public/6a21a3f44ff5cedb9addee5e/8bbc7a222_generated_image.png';

const CURATORS = [
  { name: 'Yamamoto K.', city: 'Tokyo', spec: 'Watches & Cameras', lvl: 99, items: 820 },
  { name: 'Tanaka H.', city: 'Kyoto', spec: 'Ceramics & Arts', lvl: 87, items: 610 },
  { name: 'Sato M.', city: 'Osaka', spec: 'Vintage Fashion', lvl: 76, items: 490 },
];

function CuratorPortrait({ curator }) {
  return (
    <div
      className="border-4 p-3"
      style={{ borderColor: '#2a3f5a', background: '#0f1b2d', boxShadow: '3px 3px 0px #ff6b2b44' }}
    >
      <div className="flex items-center gap-3 mb-3">
        {/* Pixel avatar */}
        <div
          className="w-10 h-10 border-2 flex items-center justify-center font-pixel text-base"
          style={{ borderColor: '#e8c87a', background: '#1a2b3c', color: '#e8c87a' }}
        >
          {curator.name[0]}
        </div>
        <div>
          <div className="font-pixel text-[8px]" style={{ color: '#e8c87a' }}>{curator.name}</div>
          <div className="font-pixel text-[6px] mt-0.5" style={{ color: '#7ab8ff' }}>{curator.city}</div>
        </div>
        <div className="ml-auto font-pixel text-[7px]" style={{ color: '#ff6b2b' }}>LV.{curator.lvl}</div>
      </div>
      <div className="font-vt text-base" style={{ color: '#8090a0' }}>{curator.spec}</div>
      <div className="mt-2 flex items-center gap-2">
        <div className="flex-1 h-2 border" style={{ borderColor: '#2a3f5a', background: '#080d14' }}>
          <div
            className="h-full"
            style={{ width: `${curator.lvl}%`, background: '#6abf5e' }}
          />
        </div>
        <span className="font-pixel text-[6px]" style={{ color: '#6abf5e' }}>{curator.items}</span>
      </div>
    </div>
  );
}

export default function CuratorSpotlight() {
  return (
    <section id="curators" className="py-20 lg:py-28 pixel-grid" style={{ background: '#0a1220' }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div
              className="relative border-4 overflow-hidden"
              style={{ borderColor: '#e8c87a', boxShadow: '8px 8px 0px #ff6b2b', imageRendering: 'pixelated' }}
            >
              <img
                src={CURATOR_IMG}
                alt="Curator portrait"
                className="w-full aspect-[3/4] object-cover"
                style={{ imageRendering: 'pixelated' }}
              />
              <div className="absolute inset-0 scanlines pointer-events-none" />
              {/* Info overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 p-4 border-t-4"
                style={{ borderColor: '#e8c87a', background: '#080d14ee' }}
              >
                <div className="font-pixel text-[7px] mb-1" style={{ color: '#ff6b2b' }}>LEAD CURATOR</div>
                <div className="font-pixel text-[10px]" style={{ color: '#e8c87a' }}>Yamamoto Kenji</div>
                <div className="font-vt text-lg mt-1" style={{ color: '#8090a0' }}>
                  12 YRS · TOKYO · LV.99 COLLECTOR
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="font-pixel text-[8px] mb-3" style={{ color: '#ff6b2b' }}>▶ CHARACTER SELECT</div>
            <PixelDivider label="MEET YOUR SHOGUN" />
            <h2 className="font-pixel text-xl lg:text-2xl mt-4 leading-relaxed" style={{ color: '#e8c87a' }}>
              THE PEOPLE<br />
              BEHIND EVERY<br />
              <span style={{ color: '#ff6b2b' }}>FIND</span>
            </h2>

            {/* Dialog box quote */}
            <div
              className="mt-6 border-4 p-5"
              style={{ borderColor: '#e8c87a', background: '#080d14', boxShadow: '4px 4px 0px #ff6b2b' }}
            >
              <div className="font-pixel text-[6px] mb-2" style={{ color: '#ff6b2b' }}>▼ YAMAMOTO-SAN SAYS:</div>
              <p className="font-vt text-xl leading-snug" style={{ color: '#c8d8e8' }}>
                "I don't just find items — I listen to what a collector
                truly seeks. Every piece I ship carries a story, and I
                make sure that story reaches its new home intact."
              </p>
              <div className="mt-3 font-pixel text-[6px] pixel-blink" style={{ color: '#e8c87a' }}>▮</div>
            </div>

            {/* Curator roster */}
            <div className="mt-6 space-y-3">
              <div className="font-pixel text-[7px] mb-4" style={{ color: '#7ab8ff' }}>ACTIVE ROSTER</div>
              {CURATORS.map((c) => (
                <CuratorPortrait key={c.name} curator={c} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
