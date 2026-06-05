import { motion } from 'framer-motion';
import PixelDivider from './PixelDivider';

const SHOP_IMG = 'https://media.db.com/images/public/6a21a3f44ff5cedb9addee5e/ede073cad_generated_image.png';
const ITEMS_IMG = 'https://media.db.com/images/public/6a21a3f44ff5cedb9addee5e/cb23dac2a_generated_image.png';
const MAP_IMG   = 'https://media.db.com/images/public/6a21a3f44ff5cedb9addee5e/ba15f92ae_generated_image.png';

const ITEMS = [
  {
    id: 'INV#0091',
    name: 'Kyo-yaki Chawan',
    origin: 'Kyoto',
    collector: 'Tanaka-san',
    note: '"Found in Higashiyama kiln workshop. The glaze crackle tells centuries."',
    weight: '340g',
    era: 'Late Edo',
    rarity: 'RARE',
    rarityColor: '#e8c87a',
    img: SHOP_IMG,
  },
  {
    id: 'INV#0892',
    name: 'Seiko 6139 Pogue',
    origin: 'Tokyo',
    collector: 'Yamamoto-san',
    note: '"Original dial, unpolished case. Cleanest in 12 years of sourcing."',
    weight: '82g',
    era: '1971',
    rarity: 'EPIC',
    rarityColor: '#7ab8ff',
    img: ITEMS_IMG,
  },
  {
    id: 'INV#0234',
    name: 'Imari Porcelain Set',
    origin: 'Osaka',
    collector: 'Nakamura-san',
    note: '"Hand-selected for subtlety of blue underglaze. Washi-wrapped for transit."',
    weight: '520g',
    era: 'Meiji',
    rarity: 'LEGENDARY',
    rarityColor: '#ff6b2b',
    img: MAP_IMG,
  },
];

const RARITY_STARS = { 'RARE': 3, 'EPIC': 4, 'LEGENDARY': 5 };

function ItemCard({ item, index }) {
  const stars = RARITY_STARS[item.rarity] || 3;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="group border-4 overflow-hidden"
      style={{ borderColor: item.rarityColor, boxShadow: `6px 6px 0px ${item.rarityColor}55` }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ imageRendering: 'pixelated' }}>
        <img
          src={item.img}
          alt={item.name}
          className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
          style={{ imageRendering: 'pixelated' }}
        />
        <div className="absolute inset-0 scanlines pointer-events-none" />
        {/* Top tags */}
        <div className="absolute top-2 left-2 flex gap-2">
          <span className="font-pixel text-[6px] px-2 py-1" style={{ background: '#080d14', color: '#a0b0c0', border: '1px solid #2a3f5a' }}>
            {item.origin.toUpperCase()}
          </span>
          <span className="font-pixel text-[6px] px-2 py-1" style={{ background: item.rarityColor, color: '#080d14' }}>
            {item.rarity}
          </span>
        </div>
        {/* Hanko */}
        <div
          className="absolute bottom-2 right-2 w-8 h-8 flex items-center justify-center font-pixel text-[8px] opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ border: `2px solid ${item.rarityColor}`, color: item.rarityColor, background: '#080d14cc' }}
        >
          認
        </div>
      </div>

      {/* Info panel - RPG item style */}
      <div className="p-4" style={{ background: '#0f1b2d' }}>
        <div className="flex items-start justify-between mb-2">
          <div>
            <div className="font-pixel text-[6px] mb-1" style={{ color: '#a0b0c0' }}>{item.id}</div>
            <h3 className="font-pixel text-[9px]" style={{ color: item.rarityColor }}>{item.name}</h3>
          </div>
          {/* Rarity stars */}
          <div className="flex gap-[2px]">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-[10px]" style={{ color: i < stars ? item.rarityColor : '#2a3f5a' }}>★</span>
            ))}
          </div>
        </div>

        {/* Micro stats */}
        <div className="flex gap-4 my-2 border-y py-2" style={{ borderColor: '#2a3f5a' }}>
          <span className="font-pixel text-[6px]" style={{ color: '#a0b0c0' }}>WT: {item.weight}</span>
          <span className="font-pixel text-[6px]" style={{ color: '#a0b0c0' }}>ERA: {item.era}</span>
          <span className="font-pixel text-[6px]" style={{ color: '#6abf5e' }}>BY: {item.collector}</span>
        </div>

        {/* Collector's note */}
        <p className="font-vt text-base leading-snug italic" style={{ color: '#8090a0' }}>
          {item.note}
        </p>

        <button
          className="mt-4 w-full pixel-btn pixel-btn-orange py-2 font-pixel text-[7px]"
        >
          ► INSPECT ITEM
        </button>
      </div>
    </motion.div>
  );
}

export default function ProvenanceGrid() {
  return (
    <section id="provenance" className="py-20 lg:py-28 pixel-grid" style={{ background: '#0a1220' }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="font-pixel text-[8px] mb-3" style={{ color: '#7ab8ff' }}>▶ ITEM ARCHIVE</div>
          <PixelDivider label="PROVENANCE COLLECTION" color="gold" />
          <div className="flex flex-col lg:flex-row lg:items-end gap-6 mt-4">
            <h2 className="font-pixel text-xl lg:text-2xl leading-relaxed" style={{ color: '#e8c87a' }}>
              SELECT YOUR<br /><span style={{ color: '#ff6b2b' }}>ARTIFACT</span>
            </h2>
            <p className="font-vt text-xl max-w-sm" style={{ color: '#8090a0' }}>
              Each piece is personally sourced, inspected, and documented by 
              our collectors across Japan. Every item has a story.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {ITEMS.map((item, i) => (
            <ItemCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* "More items" UI */}
        <div className="mt-10 text-center">
          <div className="font-pixel text-[8px] mb-4" style={{ color: '#a0b0c0' }}>
            . . . 47 MORE ITEMS IN ARCHIVE . . .
          </div>
          <button className="pixel-btn px-8 py-3 font-pixel text-[8px] bg-px-blue" style={{ color: '#e8c87a' }}>
            LOAD MORE ▼
          </button>
        </div>
      </div>
    </section>
  );
}
