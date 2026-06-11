const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { motion } from 'framer-motion';

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
    img: MAP_IMG,
  },
];

function ItemCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="group border-4 overflow-hidden"
      style={{
        borderColor: '#6A4A3A',
        boxShadow: '5px 5px 0px #C1A562',
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ imageRendering: 'pixelated' }}>
        <img
          src={item.img}
          alt={item.name}
          className="w-full aspect-video object-cover"
          style={{
            imageRendering: 'pixelated',
            filter: 'hue-rotate(170deg) saturate(0.6) brightness(0.8)',
          }}
        />
        <div className="absolute inset-0 scanlines pointer-events-none" />
        <div className="absolute top-2 left-2 flex gap-2">
          <span className="font-pixel text-[5px] px-2 py-1" style={{ background: '#1A2B50', color: '#C4C1B1' }}>
            {item.origin.toUpperCase()}
          </span>
          <span className="font-pixel text-[5px] px-2 py-1" style={{ background: '#C1A562', color: '#6A4A3A' }}>
            {item.rarity}
          </span>
        </div>
      </div>

      {/* Info panel */}
      <div className="p-4" style={{ background: '#C4C1B1' }}>
        <div className="flex items-start justify-between mb-2">
          <div>
            <div className="font-pixel text-[5px] mb-1" style={{ color: '#8a7a6a' }}>{item.id}</div>
            <h3 className="font-pixel text-[8px]" style={{ color: '#6A4A3A' }}>{item.name}</h3>
          </div>
          <div className="flex gap-[2px]">
            {Array.from({ length: 3 }).map((_, i) => (
              <span key={i} className="text-[10px]" style={{ color: '#C1A562' }}>★</span>
            ))}
          </div>
        </div>

        <div className="flex gap-3 my-2 border-y py-2" style={{ borderColor: '#6A4A3A44' }}>
          <span className="font-pixel text-[5px]" style={{ color: '#4a3a2a' }}>WT: {item.weight}</span>
          <span className="font-pixel text-[5px]" style={{ color: '#4a3a2a' }}>ERA: {item.era}</span>
          <span className="font-pixel text-[5px]" style={{ color: '#69A18E' }}>BY: {item.collector}</span>
        </div>

        <p className="font-vt text-base leading-snug italic" style={{ color: '#4a3a2a' }}>
          {item.note}
        </p>

        <button
          className="mt-3 w-full pixel-btn pixel-btn-brass py-2 font-pixel text-[6px]"
        >
          ► INSPECT ITEM
        </button>
      </div>
    </motion.div>
  );
}

export default function ProvenanceGrid() {
  return (
    <section id="provenance" className="py-16 lg:py-20" style={{ background: '#C4C1B1' }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div
            className="mb-1"
            style={{
              height: '3px',
              background: 'repeating-linear-gradient(90deg, #6A4A3A 0, #6A4A3A 8px, transparent 8px, transparent 16px)',
            }}
          />
          <div className="flex flex-col lg:flex-row lg:items-end gap-4 mt-3">
            <h2 className="font-pixel text-xl lg:text-2xl leading-snug" style={{ color: '#6A4A3A' }}>
              SELECT YOUR<br /><span style={{ color: '#C1A562' }}>ARTIFACT</span>
            </h2>
            <p className="font-vt text-xl max-w-sm" style={{ color: '#4a3a2a' }}>
              Each piece is personally sourced, inspected, and documented by
              our collectors across Japan.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {ITEMS.map((item, i) => (
            <ItemCard key={item.id} item={item} index={i} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="font-pixel text-[7px] mb-3" style={{ color: '#8a7a6a' }}>
            . . . 47 MORE ITEMS IN ARCHIVE . . .
          </div>
          <button
            className="pixel-btn pixel-btn-indigo px-8 py-3 font-pixel text-[7px]"
            style={{ background: '#1A2B50', color: '#C4C1B1', border: '3px solid #C1A562', boxShadow: '3px 3px 0px #0d1828' }}
          >
            LOAD MORE ▼
          </button>
        </div>
      </div>
    </section>
  );
}