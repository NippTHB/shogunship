import PixelDivider from './PixelDivider';

export default function Footer() {
  return (
    <footer
      className="border-t-4 py-16 material-ledger-footer"
      style={{ borderColor: '#f9b76c', background: '#4c9e7e' }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <PixelDivider label="SHOGUNSHIP COLLECTOR GUILD" />

        <div className="grid md:grid-cols-12 gap-10 mt-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="font-pixel text-lg mb-4" style={{ color: '#f9b76c' }}>将GUNSHIP</div>
            <p className="font-vt text-xl leading-snug mb-4" style={{ color: '#f2e1b1' }}>
              A Japan-based husband-and-wife proxy service helping collectors
              buy from Japanese marketplaces with personal care and clear costs.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2" style={{ background: '#a2d2b1' }} />
              <span className="font-pixel text-[7px]" style={{ color: '#a2d2b1' }}>
                BASED IN NARA PREFECTURE
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <div className="font-pixel text-[7px] mb-4" style={{ color: '#f9b76c' }}>NAVIGATE</div>
            <div className="space-y-3">
              {[
                { label: 'How It Works', href: '#process' },
                { label: 'Founders', href: '#founders' },
                { label: 'Cost Manifest', href: '#manifest' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block font-vt text-xl"
                  style={{ color: '#f2e1b1' }}
                >
                  ► {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="font-pixel text-[7px] mb-4" style={{ color: '#f9b76c' }}>SUPPORT</div>
            <div className="space-y-3">
              {['FAQ', 'Shipping', 'Returns', 'Contact'].map((link) => (
                <a key={link} href="#" className="block font-vt text-xl" style={{ color: '#f2e1b1' }}>
                  ► {link}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="font-pixel text-[7px] mb-4" style={{ color: '#f9b76c' }}>SEND REQUEST</div>
            <p className="font-vt text-lg leading-snug mb-4" style={{ color: '#f2e1b1' }}>
              Found an item on a Japanese marketplace? Send the listing link and we will review it with you.
            </p>
            <a href="#" className="pixel-btn pixel-btn-orange px-4 py-2 font-pixel text-[7px] inline-block">
              SEND ITEM LINK
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <PixelDivider label="◈ ◈ ◈" color="gold" />
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-pixel text-[6px]" style={{ color: '#f2e1b1' }}>
            © 2026 SHOGUNSHIP. ALL RIGHTS RESERVED.
          </span>
          <span className="font-pixel text-[6px]" style={{ color: '#f2e1b1' }}>
            NARA PREFECTURE · JAPAN
          </span>
        </div>
      </div>
    </footer>
  );
}
