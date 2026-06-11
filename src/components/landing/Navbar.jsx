import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Pixel art shogun icon as SVG
function ShogunIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 8 8" style={{ imageRendering: 'pixelated' }}>
      <rect x="2" y="0" width="4" height="2" fill="#f9b76c"/>
      <rect x="1" y="2" width="6" height="3" fill="#f9b76c"/>
      <rect x="0" y="3" width="1" height="2" fill="#f9b76c"/>
      <rect x="7" y="3" width="1" height="2" fill="#f9b76c"/>
      <rect x="2" y="5" width="4" height="2" fill="#f9b76c"/>
      <rect x="3" y="2" width="1" height="1" fill="#4c9e7e"/>
      <rect x="5" y="2" width="1" height="1" fill="#4c9e7e"/>
      <rect x="3" y="4" width="3" height="1" fill="#f9b76c"/>
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: 'HOW IT WORKS', href: '#process' },
    { label: 'FOUNDERS', href: '#founders' },
    { label: 'COST LEDGER', href: '#manifest' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-px-dark border-b-4 border-px-gold material-timber" style={{ borderBottomColor: '#f9b76c' }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-14 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <ShogunIcon />
            <span className="font-pixel text-px-gold text-[10px] tracking-wide hidden sm:block" style={{ color: '#f9b76c' }}>
              SHOGUNSHIP
            </span>
            <span className="font-pixel text-px-gold text-[8px] tracking-wide sm:hidden" style={{ color: '#f9b76c' }}>
              将GUN
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-pixel text-[7px] tracking-wider text-muted-foreground hover:text-px-orange transition-none"
                style={{ '--hover-color': '#f9b76c' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#manifest"
              className="hidden md:inline-flex pixel-btn pixel-btn-orange px-4 py-2 font-pixel text-[7px]"
            >
              SEND ITEM LINK
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden font-pixel text-[8px] text-px-gold pixel-btn px-3 py-2 bg-px-blue"
              style={{ color: '#f9b76c' }}
            >
              {open ? '✕' : '≡'}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1 }}
            className="fixed inset-0 z-40 bg-px-dark pt-14 px-6 material-timber"
            style={{ background: '#4c9e7e' }}
          >
            <div className="border-2 border-px-gold mt-6 p-6 space-y-6" style={{ borderColor: '#f9b76c' }}>
              <div className="font-pixel text-px-orange text-[8px] mb-4" style={{ color: '#f9b76c' }}>
                GUILD DIRECTORY
              </div>
              {links.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block font-pixel text-[10px] text-px-gold hover:text-px-orange py-2 border-b border-px-blue"
                  style={{ color: '#f9b76c', borderColor: '#4c9e7e' }}
                >
                  [{String(i + 1).padStart(2, '0')}] {link.label}
                </a>
              ))}
              <a
                href="#manifest"
                onClick={() => setOpen(false)}
                className="block pixel-btn pixel-btn-orange text-center py-3 font-pixel text-[8px] mt-4"
              >
                SEND ITEM LINK
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
