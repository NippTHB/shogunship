import { motion } from 'framer-motion';

const STEPS = [
  {
    step: '01',
    icon: '►',
    title: 'SEND ITEM LINK',
    description: 'Find something on Mercari, Yahoo Auctions, Surugaya, Rakuma, or Mandarake. Send us the link and tell us what you want to know.',
    detail: 'YOU START HERE',
  },
  {
    step: '02',
    icon: '◈',
    title: 'WE REVIEW IT',
    description: "We check the listing, evaluate the seller, clarify condition questions, and confirm whether it's a safe purchase. We reply with honest advice.",
    detail: 'USUALLY SAME DAY',
  },
  {
    step: '03',
    icon: '⊙',
    title: 'WE BUY IT',
    description: "Once you approve, we purchase on your behalf using our local accounts. We handle all Japanese communication with the seller.",
    detail: 'WE HANDLE IT',
  },
  {
    step: '04',
    icon: '⬡',
    title: 'WE RECEIVE IT',
    description: 'The item ships to our Nara address. We photograph it on arrival, inspect condition against the listing, and send you confirmation.',
    detail: 'ARRIVAL PHOTOS',
  },
  {
    step: '05',
    icon: '◉',
    title: 'WE STORE IT',
    description: "We keep your item safely at our location. If you're buying from multiple sellers, we hold everything until you're ready to combine.",
    detail: 'SAFE STORAGE',
  },
  {
    step: '06',
    icon: '►',
    title: 'WE SHIP IT',
    description: "We pack carefully using appropriate materials, file customs documentation, and ship internationally with tracking and insurance options.",
    detail: 'DOOR TO DOOR',
  },
];

export default function ProcessTimeline() {
  return (
    <section id="process" className="py-16 lg:py-20" style={{ background: '#F4EDDA' }}>
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
          <div className="flex flex-col lg:flex-row lg:items-end gap-4">
            <h2 className="font-pixel text-xl lg:text-2xl leading-snug" style={{ color: '#6A4A3A' }}>
              HOW IT WORKS
            </h2>
            <p className="font-vt text-xl max-w-md" style={{ color: '#5a4a3a' }}>
              Six steps from your item link to your front door. Every step handled personally by us in Nara.
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div
                className="p-4 h-full"
                style={{
                  background: '#F4EDDA',
                  border: '3px solid #6A4A3A',
                  boxShadow: '3px 3px 0px rgba(106,74,58,0.3)',
                }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="w-9 h-9 border-2 flex items-center justify-center font-pixel text-sm shrink-0"
                    style={{
                      border: '3px solid #6A4A3A',
                      color: '#6A4A3A',
                      background: '#C1A562',
                      boxShadow: '2px 2px 0px #6A4A3A',
                    }}
                  >
                    {step.icon}
                  </div>
                  <div>
                    <div className="font-pixel text-[5px] mb-0.5" style={{ color: '#8a7a6a' }}>STEP {step.step}</div>
                    <h3 className="font-pixel text-[8px]" style={{ color: '#6A4A3A' }}>{step.title}</h3>
                  </div>
                </div>
                <p className="font-vt text-lg leading-snug mb-3" style={{ color: '#4a3a2a' }}>
                  {step.description}
                </p>
                <div
                  className="font-pixel text-[5px] px-2 py-1 inline-block"
                  style={{ background: '#4C9E7E', color: '#F4EDDA' }}
                >
                  {step.detail}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}