import PixelDivider from './PixelDivider';

export default function Footer() {
  return (
    <footer
      className="border-t-4 py-16"
      style={{ borderColor: '#e8c87a', background: '#0a1220' }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <PixelDivider label="SHOGUNSHIP v1.0" />

        <div className="grid md:grid-cols-12 gap-10 mt-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="font-pixel text-lg mb-4" style={{ color: '#e8c87a' }}>将GUNSHIP</div>
            <p className="font-vt text-xl leading-snug mb-4" style={{ color: '#8090a0' }}>
              Independent collectors in Japan, connecting rare finds with
              passionate seekers worldwide. Every item inspected. Every
              shipment personal.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2" style={{ background: '#6abf5e' }} />
              <span className="font-pixel text-[7px]" style={{ color: '#6abf5e' }}>
                12 CURATORS ONLINE
              </span>
              <span className="font-pixel text-[7px] pixel-blink" style={{ color: '#6abf5e' }}>▮</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <div className="font-pixel text-[7px] mb-4" style={{ color: '#ff6b2b' }}>NAVIGATE</div>
            <div className="space-y-3">
              {['Provenance', 'Process', 'Curators', 'Manifest'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block font-vt text-xl"
                  style={{ color: '#8090a0' }}
                >
                  ► {link}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="font-pixel text-[7px] mb-4" style={{ color: '#ff6b2b' }}>SUPPORT</div>
            <div className="space-y-3">
              {['FAQ', 'Shipping', 'Returns', 'Contact'].map((link) => (
                <a key={link} href="#" className="block font-vt text-xl" style={{ color: '#8090a0' }}>
                  ► {link}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="font-pixel text-[7px] mb-4" style={{ color: '#ff6b2b' }}>SEND REQUEST</div>
            <p className="font-vt text-lg leading-snug mb-4" style={{ color: '#8090a0' }}>
              Looking for something specific? Our curators can source rare items on request.
            </p>
            <a href="#" className="pixel-btn pixel-btn-orange px-4 py-2 font-pixel text-[7px] inline-block">
              ► INQUIRE
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <PixelDivider label="◈ ◈ ◈" color="gold" />
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-pixel text-[6px]" style={{ color: '#2a3f5a' }}>
            © 2026 SHOGUNSHIP. ALL RIGHTS RESERVED.
          </span>
          <span className="font-pixel text-[6px]" style={{ color: '#2a3f5a' }}>
            TOKYO · OSAKA · KYOTO · YOKOHAMA
          </span>
        </div>
      </div>
    </footer>
  );
}