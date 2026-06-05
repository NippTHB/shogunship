import { motion } from 'framer-motion';
import PixelDivider from './PixelDivider';

const pillars = [
  {
    icon: '👁',
    pixelIcon: '⊙',
    title: 'TRANSPARENT',
    description: 'Full provenance report. See the source, inspector, route, and cost breakdown before you commit.',
    number: '01',
    color: '#7ab8ff',
  },
  {
    icon: '🛡',
    pixelIcon: '◈',
    title: 'RELIABLE',
    description: 'Multi-point condition audit. Insured shipping with real-time tracking from workshop to your door.',
    number: '02',
    color: '#6abf5e',
  },
  {
    icon: '⚔',
    pixelIcon: '✦',
    title: 'INDEPENDENT',
    description: 'Collectors first, not a corporation. Curators operate independently across Japan sourcing rare items.',
    number: '03',
    color: '#ff6b2b',
  },
  {
    icon: '👤',
    pixelIcon: '♟',
    title: 'PERSONAL',
    description: 'Every shipment handled by a named curator you can message directly. A trusted relationship.',
    number: '04',
    color: '#e8c87a',
  },
];

function PillarCard({ pillar, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative border-4 p-6 cursor-default"
      style={{
        borderColor: '#2a3f5a',
        background: '#0f1b2d',
        boxShadow: `4px 4px 0px ${pillar.color}44`,
        transition: 'box-shadow 0.1s, transform 0.1s',
      }}
      whileHover={{ x: -2, y: -2 }}
    >
      {/* Number badge */}
      <div className="absolute top-3 right-3 font-pixel text-[7px]" style={{ color: '#2a3f5a' }}>
        {pillar.number}
      </div>

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
    <section id="process" className="py-20 lg:py-28" style={{ background: '#080d14' }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="font-pixel text-[8px] mb-3" style={{ color: '#ff6b2b' }}>
            ▶ SYSTEM SPECS
          </div>
          <PixelDivider label="OUR FOUNDATION" />
          <h2 className="font-pixel text-xl lg:text-2xl mt-4 leading-relaxed" style={{ color: '#e8c87a' }}>
            4 CORE<br /><span style={{ color: '#ff6b2b' }}>ATTRIBUTES</span>
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