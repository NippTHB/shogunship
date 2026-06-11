import { motion } from 'framer-motion';
import PixelDivider from './PixelDivider';

const STEPS = [
  {
    step: '01',
    icon: '⊕',
    title: 'SEND ITEM LINK',
    description: 'Share a listing from a Japanese marketplace, auction site, specialist shop, or seller.',
    detail: 'REQUEST',
    color: '#a2d2b1',
    key: 'A',
  },
  {
    step: '02',
    icon: '◈',
    title: 'REVIEW + QUOTE',
    description: 'We review the listing, seller details, practical risks, domestic shipping, and expected costs.',
    detail: 'CLEAR COSTS',
    color: '#f9b76c',
    key: 'B',
  },
  {
    step: '03',
    icon: '⬡',
    title: 'BUY + RECEIVE',
    description: 'We purchase the item, confirm its arrival with photos, and inspect visible condition concerns.',
    detail: 'DOCUMENTED',
    color: '#a2d2b1',
    key: 'C',
  },
  {
    step: '04',
    icon: '►',
    title: 'STORE + SHIP',
    description: 'We can hold and consolidate purchases before carefully packing and shipping them internationally.',
    detail: 'CONSOLIDATED',
    color: '#f9b76c',
    key: 'D',
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-20 lg:py-28 material-path">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <PixelDivider label="HOW IT WORKS" color="orange" />
          <h2 className="font-pixel text-xl lg:text-2xl mt-4 leading-relaxed environment-heading" style={{ color: '#f9b76c' }}>
            FROM ITEM LINK<br />TO <span style={{ color: '#f47b1f' }}>YOUR DOOR</span>
          </h2>
        </motion.div>

        {/* Timeline - horizontal RPG-style */}
        <div className="relative">
          {/* Connecting line */}
          <div
            className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-1"
            style={{
              background: 'repeating-linear-gradient(90deg, #f9b76c 0, #f9b76c 8px, transparent 8px, transparent 16px)',
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
                    background: '#4c9e7e',
                    boxShadow: `0 0 0 4px #4c9e7e, 0 0 0 6px ${step.color}44`,
                  }}
                >
                  {step.icon}
                </div>

                <div
                  className="border-4 p-4 material-paper"
                  style={{ borderColor: '#4c9e7e', background: '#4c9e7e' }}
                >
                  <div className="font-pixel text-[6px] mb-1" style={{ color: step.color }}>
                    STEP {step.step}
                  </div>
                  <h3 className="font-pixel text-[9px] mb-3" style={{ color: '#f9b76c' }}>
                    {step.title}
                  </h3>
                  <p className="font-vt text-base leading-snug mb-3" style={{ color: '#f2e1b1' }}>
                    {step.description}
                  </p>
                  <div
                    className="font-pixel text-[7px] px-2 py-1 inline-block"
                    style={{ background: step.color, color: '#4c9e7e' }}
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
