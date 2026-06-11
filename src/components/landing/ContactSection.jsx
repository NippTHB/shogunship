import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 lg:py-20" style={{ background: '#4C9E7E' }}>
      {/* Dither texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(253,248,237,0.04) 1px, transparent 1px)',
          backgroundSize: '4px 4px',
        }}
      />
      <div className="max-w-4xl mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div
            className="mb-4"
            style={{
              height: '3px',
              background: 'repeating-linear-gradient(90deg, #F2E1B1 0, #F2E1B1 8px, transparent 8px, transparent 16px)',
            }}
          />
          <h2 className="font-pixel text-xl lg:text-2xl leading-snug" style={{ color: '#F4EDDA' }}>
            FOUND SOMETHING?
          </h2>
          <p className="font-vt text-2xl mt-3" style={{ color: '#A2D2B1' }}>
            Send us the item link from any Japanese marketplace and we'll review it with you.
          </p>
        </motion.div>

        {/* Main panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: '#F4EDDA',
            border: '3px solid #6A4A3A',
            boxShadow: '6px 6px 0px rgba(106,74,58,0.4)',
          }}
        >
          <div
            className="px-5 py-3 border-b-2"
            style={{ borderColor: '#6A4A3A', background: '#6A4A3A' }}
          >
            <span className="font-pixel text-[7px]" style={{ color: '#F2E1B1' }}>▶ SEND ITEM REQUEST</span>
          </div>

          <div className="p-6 lg:p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* What to send */}
              <div>
                <div className="font-pixel text-[7px] mb-4" style={{ color: '#6A4A3A' }}>WHAT TO INCLUDE</div>
                <div className="space-y-3">
                  {[
                    { icon: '►', text: 'The item link from the Japanese marketplace' },
                    { icon: '►', text: 'Which platform it is from (Mercari, Yahoo Auctions, etc.)' },
                    { icon: '►', text: 'Any condition questions you have about the listing' },
                    { icon: '►', text: 'Your destination country for shipping' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="font-pixel text-[8px] mt-0.5 shrink-0" style={{ color: '#4C9E7E' }}>{item.icon}</span>
                      <span className="font-vt text-lg" style={{ color: '#4a3a2a' }}>{item.text}</span>
                    </div>
                  ))}
                </div>

                <div
                  className="mt-5 p-3"
                  style={{ background: '#EDE5CC', border: '2px solid #c8c0a8' }}
                >
                  <div className="font-pixel text-[5px] mb-1" style={{ color: '#8a7a6a' }}>WHAT HAPPENS NEXT</div>
                  <p className="font-vt text-lg" style={{ color: '#4a3a2a' }}>
                    We review your request, check the listing, and reply with a full cost estimate
                    including our service fee and shipping. No obligation until you confirm.
                  </p>
                </div>
              </div>

              {/* CTA area */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="font-pixel text-[7px] mb-4" style={{ color: '#6A4A3A' }}>HOW TO REACH US</div>
                  <p className="font-vt text-xl leading-snug mb-6" style={{ color: '#4a3a2a' }}>
                    We are a small team. The best way to get started is to email us directly
                    with your item link and any questions. We reply personally — usually the same day.
                  </p>
                </div>

                <div className="space-y-3">
                  <a
                    href="mailto:hello@shogunship.com"
                    className="block pixel-btn pixel-btn-brass text-center py-4 font-pixel text-[7px]"
                  >
                    EMAIL US YOUR ITEM LINK ►
                  </a>
                  <div
                    className="text-center font-pixel text-[6px] py-2"
                    style={{ color: '#8a7a6a' }}
                  >
                    hello@shogunship.com · Nara Prefecture, Japan
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-6"
        >
          <p className="font-vt text-lg" style={{ color: '#A2D2B1' }}>
            Not sure if we can help with your specific item or marketplace? Just ask. We will tell you honestly.
          </p>
        </motion.div>
      </div>
    </section>
  );
}