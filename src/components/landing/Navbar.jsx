import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function ShogunIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 8 8" style={{ imageRendering: 'pixelated' }}>
      <rect x="2" y="0" width="4" height="2" fill="#F2E1B1"/>
      <rect x="1" y="2" width="6" height="3" fill="#F2E1B1"/>
      <rect x="0" y="3" width="1" height="2" fill="#F2E1B1"/>
      <rect x="7" y="3" width="1" height="2" fill="#F2E1B1"/>
      <rect x="2" y="5" width="4" height="2" fill="#F2E1B1"/>
      <rect x="3" y="2" width="1" height="1" fill="#4C9E7E"/>
      <rect x="5" y="2" width="1" height="1" fill="#4C9E7E"/>
      <rect x="3" y="4" width="3" height="1" fill="#C1A562"/>
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: 'WHO WE ARE', href: '#founders' },
    { label: 'HOW IT WORKS', href: '#process' },
    { label: 'MARKETPLACES', href: '#marketplaces' },
    { label: 'COSTS', href: '#costs' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b-4" style={{ background: '#3d2a1e', borderBottomColor: '#C1A562' }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-12 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <ShogunIcon />
            <span className="font-pixel text-[9px] tracking-wide" style={{ color: '#F2E1B1' }}>
              SHOGUNSHIP
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-pixel text-[6px] tracking-wider"
                style={{ color: '#c0b8a8' }}
                onMouseEnter={e => e.target.style.color = '#C1A562'}
                onMouseLeave={e => e.target.style.color = '#c0b8a8'}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex pixel-btn pixel-btn-brass px-4 py-2 font-pixel text-[7px]"
            >
              SEND ITEM LINK
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden font-pixel text-[10px] pixel-btn pixel-btn-brass px-3 py-2"
            >
              {open ? '✕' : '≡'}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1 }}
            className="fixed inset-0 z-40 pt-12 px-6"
            style={{ background: '#3d2a1e' }}
          >
            <div className="border-3 mt-6 p-6 space-y-6" style={{ border: '3px solid #C1A562', background: '#2a1a10' }}>
              <div className="font-pixel text-[7px] mb-4" style={{ color: '#C1A562' }}>
                ▼ NAVIGATE
              </div>
              {links.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block font-pixel text-[9px] py-2 border-b"
                  style={{ color: '#F2E1B1', borderColor: '#4a3a2a' }}
                >
                  [{String(i + 1).padStart(2, '0')}] {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block pixel-btn pixel-btn-brass text-center py-3 font-pixel text-[8px] mt-4"
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
