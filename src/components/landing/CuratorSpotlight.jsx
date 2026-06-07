import { motion } from 'framer-motion';
import PixelDivider from './PixelDivider';

const CURATOR_IMG = 'https://media.db.com/images/public/6a21a3f44ff5cedb9addee5e/8bbc7a222_generated_image.png';

const MARKETPLACES = [
  { name: 'Mercari + Rakuma', type: 'Marketplaces', detail: 'Listing and seller review' },
  { name: 'Yahoo Auctions', type: 'Auction platform', detail: 'Bid and listing support' },
  { name: 'Surugaya + Mandarake', type: 'Specialist retailers', detail: 'Collector item expertise' },
];

function MarketplaceRecord({ marketplace }) {
  return (
    <div
      className="border-4 p-3 material-paper"
      style={{ borderColor: '#2a3f5a', background: '#0f1b2d', boxShadow: '3px 3px 0px #a94f2c44' }}
    >
      <div className="flex items-center gap-3 mb-3">
        {/* Pixel avatar */}
        <div
          className="w-10 h-10 border-2 flex items-center justify-center font-pixel text-base"
          style={{ borderColor: '#c39a4a', background: '#1a2b3c', color: '#c39a4a' }}
        >
          {marketplace.name[0]}
        </div>
        <div>
          <div className="font-pixel text-[8px]" style={{ color: '#c39a4a' }}>{marketplace.name}</div>
          <div className="font-pixel text-[6px] mt-0.5" style={{ color: '#5d9290' }}>{marketplace.type}</div>
        </div>
        <div className="ml-auto font-pixel text-[7px]" style={{ color: '#5d7042' }}>SUPPORTED</div>
      </div>
      <div className="font-vt text-base" style={{ color: '#8090a0' }}>{marketplace.detail}</div>
      <div className="mt-2 flex items-center gap-2">
        <span className="font-pixel text-[6px]" style={{ color: '#5d7042' }}>PURCHASE SUPPORT + DOMESTIC DELIVERY</span>
      </div>
    </div>
  );
}

export default function CuratorSpotlight() {
  return (
    <section id="founders" className="py-20 lg:py-28 pixel-grid material-founder">
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
              className="relative border-4 overflow-hidden environment-frame"
              style={{ borderColor: '#c39a4a', boxShadow: '8px 8px 0px #a94f2c', imageRendering: 'pixelated' }}
            >
              <img
                src={CURATOR_IMG}
                alt="Pixel-art portrait representing ShogunShip's Nara founders"
                className="w-full aspect-[3/4] object-cover"
                style={{ imageRendering: 'pixelated' }}
              />
              <div className="absolute inset-0 scanlines pointer-events-none" />
              {/* Info overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 p-4 border-t-4"
                style={{ borderColor: '#c39a4a', background: '#080d14ee' }}
              >
                <div className="font-pixel text-[7px] mb-1" style={{ color: '#a94f2c' }}>FOUNDERS + CURATORS</div>
                <div className="font-pixel text-[10px]" style={{ color: '#c39a4a' }}>HUSBAND + WIFE TEAM</div>
                <div className="font-vt text-lg mt-1" style={{ color: '#8090a0' }}>
                  BASED IN NARA PREFECTURE, JAPAN
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
            <PixelDivider label="MEET THE FOUNDERS" />
            <h2 className="font-pixel text-xl lg:text-2xl mt-4 leading-relaxed environment-heading" style={{ color: '#c39a4a' }}>
              YOUR CURATORS<br />
              IN <span style={{ color: '#a94f2c' }}>JAPAN</span>
            </h2>

            {/* Dialog box quote */}
            <div
              className="mt-6 border-4 p-5"
              style={{ borderColor: '#c39a4a', background: '#080d14', boxShadow: '4px 4px 0px #a94f2c' }}
            >
              <div className="font-pixel text-[6px] mb-2" style={{ color: '#a94f2c' }}>A NOTE FROM NARA</div>
              <p className="font-vt text-xl leading-snug" style={{ color: '#c8d8e8' }}>
                "We personally receive, photograph, inspect, store, consolidate,
                pack, and ship your purchases. You always know who is caring
                for your collection in Japan."
              </p>
            </div>

            {/* Curator roster */}
            <div className="mt-6 space-y-3">
              <div className="font-pixel text-[7px] mb-4" style={{ color: '#5d9290' }}>MARKETPLACE EXPERTISE</div>
              {MARKETPLACES.map((marketplace) => (
                <MarketplaceRecord key={marketplace.name} marketplace={marketplace} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
