import { motion } from 'framer-motion';
import PixelDivider from './PixelDivider';

const STEPS = [
  {
    step: '01',
    icon: '⊕',
    title: 'SEND ITEM LINK',
    description: 'Share a listing from a Japanese marketplace, auction site, specialist shop, or seller.',
    detail: 'REQUEST',
    color: '#5d9290',
    key: 'A',
  },
  {
    step: '02',
    icon: '◈',
    title: 'REVIEW + QUOTE',
    description: 'We review the listing, seller details, practical risks, domestic shipping, and expected costs.',
    detail: 'CLEAR COSTS',
    color: '#c39a4a',
    key: 'B',
  },
  {
    step: '03',
    icon: '⬡',
    title: 'BUY + RECEIVE',
    description: 'We purchase the item, confirm its arrival with photos, and inspect visible condition concerns.',
    detail: 'DOCUMENTED',
    color: '#5d7042',
    key: 'C',
  },
  {
    step: '04',
    icon: '►',
    title: 'STORE + SHIP',
    description: 'We can hold and consolidate purchases before carefully packing and shipping them internationally.',
    detail: 'CONSOLIDATED',
    color: '#a94f2c',
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
          <h2 className="font-pixel text-xl lg:text-2xl mt-4 leading-relaxed environment-heading" style={{ color: '#c39a4a' }}>
            FROM ITEM LINK<br />TO <span style={{ color: '#a94f2c' }}>YOUR DOOR</span>
          </h2>
        </motion.div>

        {/* Timeline - horizontal RPG-style */}
        <div className="relative">
          {/* Connecting line */}
          <div
            className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-1"
            style={{
              background: 'repeating-linear-gradient(90deg, #a94f2c 0, #a94f2c 8px, transparent 8px, transparent 16px)',
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
                  className="border-4 p-4 material-paper"
                  style={{ borderColor: '#2a3f5a', background: '#0f1b2d' }}
                >
                  <div className="font-pixel text-[6px] mb-1" style={{ color: step.color }}>
                    STEP {step.step}
                  </div>
                  <h3 className="font-pixel text-[9px] mb-3" style={{ color: '#c39a4a' }}>
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
