import { motion } from 'framer-motion';
import PixelDivider from './PixelDivider';

const COST_LINES = [
  { label: 'Item Price', percent: 62, description: 'The price charged by the Japanese seller', color: '#5d7042' },
  { label: 'Domestic Shipping', percent: 12, description: 'Delivery from the seller to our Nara location', color: '#5d9290' },
  { label: 'ShogunShip Service', percent: 8, description: 'Personal purchasing and handling support', color: '#c39a4a' },
  { label: 'International Shipping', percent: 18, description: 'Careful packing and tracked delivery', color: '#a94f2c' },
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
            <div className="font-pixel text-[8px] mb-3" style={{ color: '#5d9290' }}>GUILD LEDGER</div>
            <PixelDivider label="CLEAR COST MANIFEST" color="gold" />
            <h2 className="font-pixel text-xl lg:text-2xl mt-4 leading-relaxed" style={{ color: '#c39a4a' }}>
              UNDERSTAND<br />EVERY <span style={{ color: '#a94f2c' }}>COST</span>
            </h2>
            <p className="font-vt text-xl mt-4 max-w-sm leading-snug" style={{ color: '#8090a0' }}>
              Before you commit, we explain the item price, domestic shipping,
              service fee, optional services, and international shipping.
            </p>

            {/* Pixel art ship route indicator */}
            <div
              className="mt-8 border-4 p-4 material-ledger-panel"
              style={{ borderColor: '#2a3f5a', background: '#0f1b2d' }}
            >
              <div className="font-pixel text-[7px] mb-3" style={{ color: '#a94f2c' }}>SAMPLE SHIPMENT</div>
              <div className="flex items-center gap-2 font-pixel text-[6px]" style={{ color: '#a0b0c0' }}>
                <span style={{ color: '#c39a4a' }}>TOKYO</span>
                <span style={{ color: '#2a3f5a' }}>→→→→→→→→→</span>
                <span style={{ color: '#5d7042' }}>LONDON</span>
              </div>
              <div className="mt-2 font-vt text-lg" style={{ color: '#c8d8e8' }}>
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
              style={{ borderColor: '#c39a4a', background: '#0f1b2d', boxShadow: '6px 6px 0px #a94f2c44' }}
            >
              {/* Header */}
              <div
                className="px-5 py-3 border-b-4 flex items-center justify-between"
                style={{ borderColor: '#c39a4a', background: '#080d14' }}
              >
                <span className="font-pixel text-[8px]" style={{ color: '#c39a4a' }}>COST MANIFEST</span>
                <span className="font-pixel text-[8px]" style={{ color: '#a94f2c' }}>¥48,000</span>
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
                      <span className="font-pixel text-[7px]" style={{ color: '#c8d8e8' }}>{line.label}</span>
                      <span className="font-pixel text-[8px]" style={{ color: line.color }}>{line.percent}%</span>
                    </div>
                    {/* Pixel progress bar */}
                    <div
                      className="h-4 border-2 relative overflow-hidden"
                      style={{ borderColor: '#2a3f5a', background: '#080d14' }}
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
                    <span className="font-vt text-base" style={{ color: '#4a5a6a' }}>
                      {line.description}
                    </span>
                  </motion.div>
                ))}

                {/* Footer stamp */}
                <div
                  className="mt-4 pt-4 border-t-2 border-dashed flex items-center justify-between"
                  style={{ borderColor: '#2a3f5a' }}
                >
                  <span className="font-pixel text-[6px]" style={{ color: '#5d7042' }}>
                    CLEAR COSTS · BEFORE PURCHASE
                  </span>
                  <div
                    className="w-10 h-10 border-4 flex items-center justify-center font-pixel text-[8px]"
                    style={{ borderColor: '#5d7042', color: '#5d7042', background: '#0f1b2d' }}
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
