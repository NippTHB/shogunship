import { motion } from 'framer-motion';

const COST_LINES = [
  {
    label: 'Item Price',
    description: 'The price charged by the Japanese seller on the marketplace. We pass this through exactly — no markup.',
    color: '#4C9E7E',
    icon: '◉',
  },
  {
    label: 'Domestic Shipping',
    description: 'Shipping from the seller to our Nara address inside Japan. Typically ¥600–¥1,500 depending on size and seller.',
    color: '#6EB08C',
    icon: '►',
  },
  {
    label: 'ShogunShip Service Fee',
    description: 'Our fee for buying, receiving, photographing, inspecting, and coordinating your order. Quoted before purchase.',
    color: '#C1A562',
    icon: '◈',
  },
  {
    label: 'International Shipping',
    description: 'Shipping from Nara to your country. We quote accurate shipping costs based on actual weight and dimensions.',
    color: '#6A4A3A',
    icon: '⬡',
  },
];

function CostRow({ line, index }) {
  return (
    <motion.div
      key={line.label}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="py-3 border-b last:border-b-0"
      style={{ borderColor: 'rgba(106,74,58,0.15)' }}
    >
      <div className="flex items-start gap-3">
        <div
          className="w-8 h-8 border-2 flex items-center justify-center font-pixel text-xs shrink-0 mt-0.5"
          style={{ borderColor: '#6A4A3A', background: line.color, color: '#F4EDDA' }}
        >
          {line.icon}
        </div>
        <div>
          <div className="font-pixel text-[7px] mb-1" style={{ color: '#6A4A3A' }}>{line.label}</div>
          <p className="font-vt text-lg leading-snug" style={{ color: '#4a3a2a' }}>
            {line.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function TransparencyBreakdown() {
  return (
    <section id="costs" className="py-16 lg:py-20" style={{ background: '#EDE5CC' }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="mb-4"
              style={{
                height: '3px',
                background: 'repeating-linear-gradient(90deg, #6A4A3A 0, #6A4A3A 8px, transparent 8px, transparent 16px)',
              }}
            />
            <h2 className="font-pixel text-xl lg:text-2xl leading-snug" style={{ color: '#6A4A3A' }}>
              WHAT YOU PAY<br /><span style={{ color: '#4C9E7E' }}>& WHY</span>
            </h2>

            <p className="font-vt text-xl mt-4 leading-snug max-w-md" style={{ color: '#5a4a3a' }}>
              We share a full cost breakdown before you commit to anything.
              You will always know exactly what you are paying and what each part covers.
            </p>

            <div
              className="mt-6 p-4"
              style={{ background: '#F4EDDA', border: '3px solid #6A4A3A', boxShadow: '3px 3px 0px rgba(106,74,58,0.25)' }}
            >
              <div className="font-pixel text-[6px] mb-2" style={{ color: '#6A4A3A' }}>EXAMPLE PURCHASE</div>
              <div className="font-vt text-lg" style={{ color: '#4a3a2a' }}>
                Item found on Yahoo Auctions Japan · Purchased and shipped to your door with full documentation.
              </div>
              <div className="mt-3 font-pixel text-[6px]" style={{ color: '#4C9E7E' }}>
                ✓ QUOTED BEFORE WE BUY · NO HIDDEN FEES
              </div>
            </div>

            {/* Contact CTA */}
            <div
              className="mt-6 p-4"
              style={{ background: '#F4EDDA', border: '3px solid #C1A562', boxShadow: '3px 3px 0px rgba(106,74,58,0.25)' }}
            >
              <div className="font-pixel text-[6px] mb-2" style={{ color: '#C1A562' }}>GET A QUOTE</div>
              <p className="font-vt text-lg mb-3" style={{ color: '#4a3a2a' }}>
                Send us the item link and we will provide a full cost estimate including service fee and
                international shipping before you commit.
              </p>
              <a href="#contact" className="pixel-btn pixel-btn-brass px-5 py-2 font-pixel text-[6px] inline-block">
                SEND ITEM LINK ►
              </a>
            </div>
          </motion.div>

          {/* Right — cost breakdown panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div
              style={{
                background: '#F4EDDA',
                border: '3px solid #6A4A3A',
                boxShadow: '6px 6px 0px rgba(106,74,58,0.3)',
              }}
            >
              {/* Header */}
              <div
                className="px-5 py-3 border-b-2 flex items-center justify-between"
                style={{ borderColor: '#6A4A3A', background: '#6A4A3A' }}
              >
                <span className="font-pixel text-[8px]" style={{ color: '#F2E1B1' }}>COST BREAKDOWN</span>
                <div
                  className="w-8 h-8 border-2 flex items-center justify-center font-pixel text-[8px]"
                  style={{ borderColor: '#C1A562', color: '#C1A562', background: '#3d2a1e' }}
                >
                  承
                </div>
              </div>

              <div className="p-5">
                {COST_LINES.map((line, i) => (
                  <CostRow key={line.label} line={line} index={i} />
                ))}

                <div
                  className="mt-4 pt-4 border-t-2 flex items-start gap-2"
                  style={{ borderColor: '#c8c0a8', borderStyle: 'dashed' }}
                >
                  <span className="font-pixel text-[7px]" style={{ color: '#4C9E7E' }}>✓</span>
                  <p className="font-vt text-lg" style={{ color: '#5a4a3a' }}>
                    We share all costs clearly before you confirm the purchase. 
                    Nothing is charged without your approval.
                  </p>
                </div>
              </div>
            </div>

            {/* Insurance note */}
            <div
              className="mt-4 p-4 flex items-start gap-3"
              style={{ background: 'rgba(76,158,126,0.12)', border: '3px solid #4C9E7E' }}
            >
              <span className="font-pixel text-base" style={{ color: '#4C9E7E' }}>⬡</span>
              <p className="font-vt text-lg" style={{ color: '#4a3a2a' }}>
                <strong className="font-pixel text-[6px]" style={{ color: '#6A4A3A' }}>PACKING & INSURANCE — </strong>
                We pack items carefully for international transit. Insurance options are available
                and discussed during the quoting process.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}