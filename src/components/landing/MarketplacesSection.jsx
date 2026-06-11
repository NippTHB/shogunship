import { motion } from 'framer-motion';

const MARKETS = [
  {
    name: 'Mercari',
    tag: 'CONSUMER MARKETPLACE',
    description: 'Japan\'s largest C2C marketplace. A wide range of items from individual sellers. We help you evaluate listings and make safe purchases.',
  },
  {
    name: 'Yahoo Auctions',
    tag: 'AUCTION PLATFORM',
    description: 'The primary Japanese auction platform with deep collector inventory. We bid on your behalf and handle the full purchasing process.',
  },
  {
    name: 'Surugaya',
    tag: 'SPECIALIST RETAILER',
    description: 'A specialist chain for vintage games, manga, figures, and collectibles. Known for condition grading and wide specialist stock.',
  },
  {
    name: 'Rakuma',
    tag: 'CONSUMER MARKETPLACE',
    description: 'A popular secondhand platform with a strong fashion and everyday items inventory. Often has finds not listed elsewhere.',
  },
  {
    name: 'Mandarake',
    tag: 'COLLECTOR SPECIALIST',
    description: 'Japan\'s most respected specialist for vintage manga, anime goods, figures, and doujinshi. Strict condition standards and expert curation.',
  },
];

export default function MarketplacesSection() {
  return (
    <section id="marketplaces" className="py-16 lg:py-20" style={{ background: '#EDE5CC' }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div
            className="mb-4"
            style={{
              height: '3px',
              background: 'repeating-linear-gradient(90deg, #6A4A3A 0, #6A4A3A 8px, transparent 8px, transparent 16px)',
            }}
          />
          <div className="flex flex-col lg:flex-row lg:items-end gap-4">
            <h2 className="font-pixel text-xl lg:text-2xl leading-snug" style={{ color: '#6A4A3A' }}>
              WHERE WE BUY<br /><span style={{ color: '#4C9E7E' }}>FROM</span>
            </h2>
            <p className="font-vt text-xl max-w-lg" style={{ color: '#5a4a3a' }}>
              These are third-party Japanese platforms. We are not affiliated with or employed by any of them.
              We simply know how to use them well on your behalf.
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {MARKETS.map((market, i) => (
            <motion.div
              key={market.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-4"
              style={{
                background: '#F4EDDA',
                border: '3px solid #6A4A3A',
                boxShadow: '3px 3px 0px rgba(106,74,58,0.25)',
              }}
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-pixel text-[9px]" style={{ color: '#6A4A3A' }}>{market.name}</h3>
                <span
                  className="font-pixel text-[4px] px-2 py-1 ml-2 shrink-0"
                  style={{ background: '#4C9E7E', color: '#F4EDDA' }}
                >
                  {market.tag}
                </span>
              </div>
              <p className="font-vt text-lg leading-snug" style={{ color: '#4a3a2a' }}>
                {market.description}
              </p>
            </motion.div>
          ))}

          {/* Plus other note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-4 flex items-center justify-center"
            style={{
              background: 'rgba(76,158,126,0.12)',
              border: '3px dashed #4C9E7E',
            }}
          >
            <div className="text-center">
              <div className="font-pixel text-[8px] mb-2" style={{ color: '#4C9E7E' }}>+ MORE</div>
              <p className="font-vt text-lg" style={{ color: '#5a4a3a' }}>
                Local shops, specialist dealers, private sellers, and auction houses across Japan.
                Ask us about a specific source.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}