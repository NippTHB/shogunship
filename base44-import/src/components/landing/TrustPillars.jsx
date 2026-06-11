import { motion } from 'framer-motion';

const pillars = [
  {
    icon: '⊙',
    title: 'ARRIVAL PHOTOS',
    description: 'When your purchase arrives at our Nara address, we photograph it and send confirmation. You see proof it arrived safely before anything else happens.',
    number: '01',
    accent: '#4C9E7E',
  },
  {
    icon: '◈',
    title: 'ITEM INSPECTION',
    description: 'We check every item against its listing and document any visible condition issues. If something is wrong, we tell you before it ships internationally.',
    number: '02',
    accent: '#4C9E7E',
  },
  {
    icon: '⬡',
    title: 'SAFE STORAGE',
    description: 'We hold your purchases safely at our Nara location while you continue buying from other Japanese sellers. Take your time — no rush.',
    number: '03',
    accent: '#C1A562',
  },
  {
    icon: '◉',
    title: 'CONSOLIDATION',
    description: 'Buying from multiple sellers? We combine everything into a single carefully packed international shipment, which saves significantly on shipping costs.',
    number: '04',
    accent: '#C1A562',
  },
];

function PillarCard({ pillar, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative p-5"
      style={{
        background: '#F4EDDA',
        border: '3px solid #6A4A3A',
        boxShadow: '4px 4px 0px rgba(106,74,58,0.3)',
      }}
    >
      <div className="absolute top-3 right-3 font-pixel text-[7px]" style={{ color: '#b0a890' }}>
        {pillar.number}
      </div>

      <div
        className="w-10 h-10 border-2 flex items-center justify-center mb-3 font-pixel text-base"
        style={{ borderColor: '#6A4A3A', color: pillar.accent, background: '#e8dfc0' }}
      >
        {pillar.icon}
      </div>

      <h3 className="font-pixel text-[8px] mb-2" style={{ color: '#6A4A3A' }}>
        {pillar.title}
      </h3>
      <p className="font-vt text-lg leading-snug" style={{ color: '#4a3a2a' }}>
        {pillar.description}
      </p>
    </motion.div>
  );
}

export default function TrustPillars() {
  return (
    <section id="trust" className="py-16 lg:py-20" style={{ background: '#EDE5CC' }}>
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
          <h2 className="font-pixel text-xl lg:text-2xl leading-snug" style={{ color: '#6A4A3A' }}>
            HOW WE PROTECT<br /><span style={{ color: '#4C9E7E' }}>YOUR PURCHASE</span>
          </h2>
          <p className="font-vt text-xl mt-3 max-w-xl" style={{ color: '#5a4a3a' }}>
            Every order goes through the same careful process at our Nara home.
            These are not policies — they are things we personally do for every package.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.title} pillar={pillar} index={i} />
          ))}
        </div>

        {/* Transparent costs note */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 p-4 flex items-start gap-3"
          style={{ background: '#F4EDDA', border: '3px solid #6A4A3A', boxShadow: '3px 3px 0px rgba(106,74,58,0.25)' }}
        >
          <span className="font-pixel text-base" style={{ color: '#4C9E7E' }}>✓</span>
          <p className="font-vt text-lg" style={{ color: '#4a3a2a' }}>
            <strong className="font-pixel text-[7px]" style={{ color: '#6A4A3A' }}>TRANSPARENT COSTS — </strong>
            We share a full cost breakdown before you commit: item price, domestic shipping inside Japan,
            our service fee, and international shipping. No surprises.
          </p>
        </motion.div>
      </div>
    </section>
  );
}