import { motion } from 'framer-motion';

export default function CuratorSpotlight() {
  return (
    <section id="founders" className="py-16 lg:py-20" style={{ background: '#F4EDDA' }}>
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
            WHO WE ARE
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left — founders intro */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Character panel */}
            <div
              style={{
                background: '#EDE5CC',
                border: '3px solid #6A4A3A',
                boxShadow: '6px 6px 0px rgba(106,74,58,0.35)',
              }}
            >
              <div
                className="px-5 py-3 border-b-2"
                style={{ borderColor: '#6A4A3A', background: '#6A4A3A' }}
              >
                <span className="font-pixel text-[7px]" style={{ color: '#F2E1B1' }}>▶ FOUNDERS — NARA, JAPAN</span>
              </div>
              <div className="p-5">
                {/* Pixel avatar row */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex gap-3">
                    {[{ label: 'HIM', icon: '♠', spec: 'Marketplaces & Buying' }, { label: 'HER', icon: '♥', spec: 'Packing & Logistics' }].map(f => (
                      <div key={f.label} className="text-center">
                        <div
                          className="w-14 h-14 border-3 flex items-center justify-center font-pixel text-2xl mx-auto"
                          style={{ border: '3px solid #6A4A3A', background: '#d4c9b0', color: '#6A4A3A' }}
                        >
                          {f.icon}
                        </div>
                        <div className="font-pixel text-[5px] mt-1" style={{ color: '#6A4A3A' }}>{f.label}</div>
                        <div className="font-vt text-sm mt-0.5" style={{ color: '#5a4a3a' }}>{f.spec}</div>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="font-pixel text-[7px] mb-1" style={{ color: '#C1A562' }}>LOCATION</div>
                    <div className="font-vt text-xl" style={{ color: '#4a3a2a' }}>Nara Prefecture</div>
                    <div className="font-vt text-lg" style={{ color: '#6a5a4a' }}>Japan</div>
                  </div>
                </div>

                {/* Dialog box */}
                <div
                  className="p-4"
                  style={{
                    background: '#F4EDDA',
                    border: '3px solid #6A4A3A',
                    boxShadow: '3px 3px 0px rgba(106,74,58,0.25)',
                  }}
                >
                  <div className="font-pixel text-[5px] mb-2" style={{ color: '#C1A562' }}>▼ FOUNDERS SAY:</div>
                  <p className="font-vt text-xl leading-snug" style={{ color: '#4a3a2a' }}>
                    "We started ShogunShip because we are collectors ourselves. We know the
                    frustration of finding something rare in Japan and having no safe, personal way
                    to get it home. So we became that way for other people."
                  </p>
                  <div className="mt-2 font-pixel text-[6px] pixel-blink" style={{ color: '#6A4A3A' }}>▮</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — what makes them different */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div
              className="p-5"
              style={{
                background: '#EDE5CC',
                border: '3px solid #6A4A3A',
                boxShadow: '4px 4px 0px rgba(106,74,58,0.25)',
              }}
            >
              <h3 className="font-pixel text-[8px] mb-3" style={{ color: '#6A4A3A' }}>
                NOT AN ANONYMOUS SERVICE
              </h3>
              <p className="font-vt text-lg leading-snug" style={{ color: '#4a3a2a' }}>
                You are not working with a warehouse, a fulfillment center, or a drop-shipping
                company. You are working with two people in Nara who personally receive, check,
                photograph, and pack every single order.
              </p>
            </div>

            <div
              className="p-5"
              style={{
                background: '#EDE5CC',
                border: '3px solid #6A4A3A',
                boxShadow: '4px 4px 0px rgba(106,74,58,0.25)',
              }}
            >
              <h3 className="font-pixel text-[8px] mb-3" style={{ color: '#6A4A3A' }}>
                LOCAL EXPERTISE
              </h3>
              <p className="font-vt text-lg leading-snug" style={{ color: '#4a3a2a' }}>
                Living in Japan gives us real advantages: faster response to sellers, better
                understanding of listings in Japanese, and the ability to visit physical shops
                when needed. We know how Japanese marketplaces actually work.
              </p>
            </div>

            <div
              className="p-5"
              style={{
                background: '#EDE5CC',
                border: '3px solid #6A4A3A',
                boxShadow: '4px 4px 0px rgba(106,74,58,0.25)',
              }}
            >
              <h3 className="font-pixel text-[8px] mb-3" style={{ color: '#6A4A3A' }}>
                COLLECTOR MINDSET
              </h3>
              <p className="font-vt text-lg leading-snug" style={{ color: '#4a3a2a' }}>
                We understand that condition, provenance, and careful handling matter. We treat
                every item as if it were our own — because we know how much it means to the
                person waiting for it.
              </p>
            </div>

            <a
              href="#contact"
              className="block pixel-btn pixel-btn-brass text-center py-3 font-pixel text-[7px]"
            >
              SEND US AN ITEM LINK ►
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}