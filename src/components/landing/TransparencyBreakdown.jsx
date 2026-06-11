import { motion } from 'framer-motion';
import PixelDivider from './PixelDivider';

const COST_LINES = [
  { label: 'Item Price', percent: 62, description: 'The price charged by the Japanese seller', color: '#4c9e7e' },
  { label: 'Domestic Shipping', percent: 12, description: 'Delivery from the seller to our Nara location', color: '#1E4E3A' },
  { label: 'ShogunShip Service', percent: 8, description: 'Personal purchasing and handling support', color: '#4c9e7e' },
  { label: 'International Shipping', percent: 18, description: 'Careful packing and tracked delivery', color: '#1E4E3A' },
];

export default function TransparencyBreakdown() {
  return (
    <section id="manifest" className="py-20 lg:py-28 material-ledger-office">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="font-pixel text-[8px] mb-3" style={{ color: '#a2d2b1' }}>GUILD LEDGER</div>
            <PixelDivider label="CLEAR COST MANIFEST" color="gold" />
            <h2 className="font-pixel text-xl lg:text-2xl mt-4 leading-relaxed" style={{ color: '#f9b76c' }}>
              UNDERSTAND<br />EVERY <span style={{ color: '#f47b1f' }}>COST</span>
            </h2>
            <p className="font-vt text-xl mt-4 max-w-sm leading-snug" style={{ color: '#f2e1b1' }}>
              Before you commit, we explain the item price, domestic shipping,
              service fee, optional services, and international shipping.
            </p>

            {/* Pixel art ship route indicator */}
            <div
              className="mt-8 border-4 p-4 material-ledger-panel"
              style={{ borderColor: '#4c9e7e', background: '#4c9e7e' }}
            >
              <div className="font-pixel text-[7px] mb-3" style={{ color: '#f9b76c' }}>SAMPLE SHIPMENT</div>
              <div className="flex items-center gap-2 font-pixel text-[6px]" style={{ color: '#f2e1b1' }}>
                <span style={{ color: '#f9b76c' }}>TOKYO</span>
                <span style={{ color: '#f9b76c' }}>→→→→→→→→→</span>
                <span style={{ color: '#a2d2b1' }}>LONDON</span>
              </div>
              <div className="mt-2 font-vt text-lg" style={{ color: '#f2e1b1' }}>
                Example: Seiko 6139 Pogue · ¥48,000 estimated total
              </div>
            </div>

            <a
              href="#"
              className="inline-block mt-6 pixel-btn pixel-btn-orange px-6 py-3 font-pixel text-[7px]"
            >
              REQUEST A COST BREAKDOWN
            </a>
          </motion.div>

          {/* Right: cost breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="border-4 material-ledger-panel"
              style={{ borderColor: '#f9b76c', background: '#4c9e7e', boxShadow: '6px 6px 0px #f9b76c44' }}
            >
              {/* Header */}
              <div
                className="px-5 py-3 border-b-4 flex items-center justify-between"
                style={{ borderColor: '#f9b76c', background: '#4c9e7e' }}
              >
                <span className="font-pixel text-[8px]" style={{ color: '#f9b76c' }}>COST MANIFEST</span>
                <span className="font-pixel text-[8px]" style={{ color: '#f9b76c' }}>¥48,000</span>
              </div>

              <div className="p-5 space-y-5">
                {COST_LINES.map((line, i) => (
                  <motion.div
                    key={line.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-pixel text-[7px]" style={{ color: '#f2e1b1' }}>{line.label}</span>
                      <span className="font-pixel text-[8px]" style={{ color: '#f2e1b1' }}>{line.percent}%</span>
                    </div>
                    {/* Pixel progress bar */}
                    <div
                      className="h-4 border-2 relative overflow-hidden"
                      style={{ borderColor: '#f9b76c', background: '#f2e1b1' }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${line.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                        className="h-full"
                        style={{ background: `repeating-linear-gradient(90deg, ${line.color} 0, ${line.color} 6px, ${line.color}88 6px, ${line.color}88 8px)` }}
                      />
                    </div>
                    <span className="font-vt text-base" style={{ color: '#f2e1b1' }}>
                      {line.description}
                    </span>
                  </motion.div>
                ))}

                {/* Footer stamp */}
                <div
                  className="mt-4 pt-4 border-t-2 border-dashed flex items-center justify-between"
                  style={{ borderColor: '#4c9e7e' }}
                >
                  <span className="font-pixel text-[6px]" style={{ color: '#a2d2b1' }}>
                    CLEAR COSTS · BEFORE PURCHASE
                  </span>
                  <div
                    className="w-10 h-10 border-4 flex items-center justify-center font-pixel text-[8px]"
                    style={{ borderColor: '#a2d2b1', color: '#a2d2b1', background: '#4c9e7e' }}
                  >
                    承
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
