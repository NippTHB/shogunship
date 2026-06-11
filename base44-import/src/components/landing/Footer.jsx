export default function Footer() {
  return (
    <footer
      className="border-t-4 py-14"
      style={{ background: '#3d2a1e', borderColor: '#C1A562' }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div
          className="mb-8"
          style={{
            height: '3px',
            background: 'repeating-linear-gradient(90deg, #C1A562 0, #C1A562 8px, transparent 8px, transparent 16px)',
          }}
        />

        <div className="grid md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="font-pixel text-lg mb-3" style={{ color: '#F2E1B1' }}>SHOGUNSHIP</div>
            <p className="font-vt text-xl leading-snug mb-5" style={{ color: '#a09080' }}>
              A husband-and-wife proxy buying service based in Nara Prefecture, Japan.
              We help collectors buy from Japanese marketplaces — personally, carefully, and transparently.
            </p>
            <div className="font-pixel text-[6px] mb-1" style={{ color: '#8a7a6a' }}>MARKETPLACES WE NAVIGATE</div>
            <div className="flex flex-wrap gap-2 mt-2">
              {['Mercari', 'Yahoo Auctions', 'Surugaya', 'Rakuma', 'Mandarake'].map(m => (
                <span
                  key={m}
                  className="font-pixel text-[5px] px-2 py-1"
                  style={{ background: 'rgba(76,158,126,0.25)', color: '#A2D2B1', border: '1px solid #4C9E7E' }}
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div className="md:col-span-2">
            <div className="font-pixel text-[6px] mb-4" style={{ color: '#C1A562' }}>NAVIGATE</div>
            <div className="space-y-3">
              {[
                { label: 'How It Works', href: '#process' },
                { label: 'Who We Are', href: '#founders' },
                { label: 'Cost Breakdown', href: '#costs' },
                { label: 'Marketplaces', href: '#marketplaces' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block font-vt text-xl"
                  style={{ color: '#d0c8b8' }}
                >
                  ► {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <div className="font-pixel text-[6px] mb-4" style={{ color: '#C1A562' }}>CONTACT</div>
            <div className="space-y-3">
              <div className="font-vt text-xl" style={{ color: '#d0c8b8' }}>hello@shogunship.com</div>
              <div className="font-vt text-lg" style={{ color: '#a09080' }}>Nara Prefecture, Japan</div>
              <div className="font-vt text-lg" style={{ color: '#a09080' }}>We reply personally.</div>
            </div>
          </div>

          {/* Send request */}
          <div className="md:col-span-3">
            <div className="font-pixel text-[6px] mb-3" style={{ color: '#C1A562' }}>READY TO BUY?</div>
            <p className="font-vt text-lg leading-snug mb-4" style={{ color: '#a09080' }}>
              Found something on a Japanese marketplace?
              Send us the link and we'll review it with you.
            </p>
            <a
              href="mailto:hello@shogunship.com"
              className="pixel-btn pixel-btn-brass px-5 py-3 font-pixel text-[6px] inline-block"
            >
              SEND ITEM LINK ►
            </a>
          </div>
        </div>

        <div
          className="mt-10 mb-4"
          style={{
            height: '3px',
            background: 'repeating-linear-gradient(90deg, #C1A562 0, #C1A562 8px, transparent 8px, transparent 16px)',
          }}
        />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-pixel text-[5px]" style={{ color: '#5a4a3a' }}>
            © 2026 SHOGUNSHIP. ALL RIGHTS RESERVED.
          </span>
          <span className="font-pixel text-[5px]" style={{ color: '#5a4a3a' }}>
            NARA · JAPAN
          </span>
        </div>
      </div>
    </footer>
  );
}