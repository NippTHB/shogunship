import { motion } from 'framer-motion';
import PixelDivider from './PixelDivider';

const pillars = [
  {
    icon: '👁',
    pixelIcon: '⊙',
    title: 'ARRIVAL PHOTOS',
    description: 'We photograph each purchase when it reaches our Nara location, so you can confirm it arrived safely.',
    color: '#5d9290',
  },
  {
    icon: '🛡',
    pixelIcon: '◈',
    title: 'ITEM INSPECTION',
    description: 'We compare the item with its listing and document visible condition concerns before international shipping.',
    color: '#5d7042',
  },
  {
    icon: '⚔',
    pixelIcon: '✦',
    title: 'SAFE STORAGE',
    description: 'We can hold purchases temporarily while you continue buying from other Japanese sellers.',
    color: '#a94f2c',
  },
  {
    icon: '👤',
    pixelIcon: '♟',
    title: 'CONSOLIDATION',
    description: 'We combine purchases from multiple sellers into one carefully prepared international shipment.',
    color: '#c39a4a',
  },
];

function PillarCard({ pillar, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative border-4 p-6 cursor-default material-paper"
      style={{
        borderColor: '#2a3f5a',
        background: '#0f1b2d',
        boxShadow: `4px 4px 0px ${pillar.color}44`,
        transition: 'box-shadow 0.1s, transform 0.1s',
      }}
      whileHover={{ x: -2, y: -2 }}
    >
      {/* Pixel icon */}
      <div
        className="w-12 h-12 border-4 flex items-center justify-center mb-4 font-pixel text-lg"
        style={{ borderColor: pillar.color, color: pillar.color, background: `${pillar.color}15` }}
      >
        {pillar.pixelIcon}
      </div>

      <h3 className="font-pixel text-[9px] mb-3" style={{ color: pillar.color }}>
        {pillar.title}
      </h3>
      <p className="font-vt text-lg leading-snug" style={{ color: '#c8d8e8' }}>
        {pillar.description}
      </p>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: pillar.color, opacity: 0.3 }} />
    </motion.div>
  );
}

export default function TrustPillars() {
  return (
    <section id="process" className="py-20 lg:py-28 material-plaster">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <PixelDivider label="GUILD CARE" />
          <h2 className="font-pixel text-xl lg:text-2xl mt-4 leading-relaxed environment-heading" style={{ color: '#c39a4a' }}>
            HOW WE CARE<br /><span style={{ color: '#a94f2c' }}>FOR YOUR ITEMS</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.title} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
