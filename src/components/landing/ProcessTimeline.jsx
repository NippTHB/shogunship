import { motion } from 'framer-motion';
import PixelDivider from './PixelDivider';

const STEPS = [
  {
    step: '01',
    icon: '⊕',
    title: 'SOURCE',
    description: 'Curators personally visit shops, markets, and private collections across Japan.',
    detail: '3-7 DAYS',
    color: '#7ab8ff',
    key: 'A',
  },
  {
    step: '02',
    icon: '◈',
    title: 'INSPECT',
    description: 'Multi-point condition audit with high-resolution photography. Every flaw documented.',
    detail: '24 HRS',
    color: '#e8c87a',
    key: 'B',
  },
  {
    step: '03',
    icon: '⬡',
    title: 'PACK',
    description: 'Archival-grade materials and traditional Washi paper wrapping for safe transit.',
    detail: '1-2 DAYS',
    color: '#6abf5e',
    key: 'C',
  },
  {
    step: '04',
    icon: '►',
    title: 'SHIP',
    description: 'Fully insured DHL Express with real-time tracking. Customs pre-filed. Door to door.',
    detail: '3-5 DAYS',
    color: '#ff6b2b',
    key: 'D',
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-20 lg:py-28" style={{ background: '#080d14' }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="font-pixel text-[8px] mb-3" style={{ color: '#6abf5e' }}>▶ QUEST LOG</div>
          <PixelDivider label="MISSION STEPS" color="orange" />
          <h2 className="font-pixel text-xl lg:text-2xl mt-4 leading-relaxed" style={{ color: '#e8c87a' }}>
            THE <span style={{ color: '#ff6b2b' }}>PATH</span>
          </h2>
        </motion.div>

        {/* Timeline - horizontal RPG-style */}
        <div className="relative">
          {/* Connecting line */}
          <div
            className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-1"
            style={{
              background: 'repeating-linear-gradient(90deg, #ff6b2b 0, #ff6b2b 8px, transparent 8px, transparent 16px)',
            }}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                {/* Node */}
                <div
                  className="relative z-10 w-12 h-12 mx-auto border-4 flex items-center justify-center font-pixel text-xl mb-4"
                  style={{
                    borderColor: step.color,
                    color: step.color,
                    background: '#0f1b2d',
                    boxShadow: `0 0 0 4px #080d14, 0 0 0 6px ${step.color}44`,
                  }}
                >
                  {step.icon}
                </div>

                <div
                  className="border-4 p-4"
                  style={{ borderColor: '#2a3f5a', background: '#0f1b2d' }}
                >
                  <div className="font-pixel text-[6px] mb-1" style={{ color: step.color }}>
                    STEP {step.step}
                  </div>
                  <h3 className="font-pixel text-[9px] mb-3" style={{ color: '#e8c87a' }}>
                    {step.title}
                  </h3>
                  <p className="font-vt text-base leading-snug mb-3" style={{ color: '#8090a0' }}>
                    {step.description}
                  </p>
                  <div
                    className="font-pixel text-[7px] px-2 py-1 inline-block"
                    style={{ background: step.color, color: '#080d14' }}
                  >
                    ⏱ {step.detail}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}