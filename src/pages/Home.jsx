import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Menu, PackageOpen, Search, ShieldCheck, Ship, Store, X } from 'lucide-react';
import { PixelBox } from '@/components/ui/pixel-box';
import { PixelButton } from '@/components/ui/pixel-button';
import PixelClouds from '@/components/landing/PixelClouds';
import heroBg from '../assets/images/backgrounds/Website_Background_Panorama01.png';
import shogunshipSign from '../assets/images/illustrations/Landing_asset_Shogunship_Sign.png';
import retroStoreBg from '../assets/images/illustrations/Landing_asset_retro_Store.png';
import retroStoreMobileBg from '../assets/images/illustrations/Landing_asset_retro_Store-mobile.png';
import postOfficeBg from '../assets/images/illustrations/Landing_asset_post-office.png';
import landscapeFooterBg from '../assets/redesign/landscape-footer.png';
import costsBackground from '../assets/redesign/box2.png';
import animateLogo from '../assets/images/logos/marketplaces/optimized/animate_logo.svg';
import mandarakeLogo from '../assets/images/logos/marketplaces/optimized/mandarake_logo.svg';
import mercariLogo from '../assets/images/logos/marketplaces/optimized/mercari_logo.svg';
import otherShopsLogo from '../assets/images/logos/marketplaces/optimized/other_shops_treasure_chest-small.png';
import shiseidoLogo from '../assets/images/logos/marketplaces/source/shiseido_logo.svg';
import surugayaLogo from '../assets/images/logos/marketplaces/optimized/surugaya_logo.svg';

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const [isRequestDrawerOpen, setIsRequestDrawerOpen] = useState(false);
  const [hasSubmittedRequest, setHasSubmittedRequest] = useState(false);
  const [showFloatingCta, setShowFloatingCta] = useState(false);
  const [shouldPulseFloatingCta, setShouldPulseFloatingCta] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [requestFormData, setRequestFormData] = useState({ marketplaceLink: '', email: '', note: '' });
  const hasPulsedFloatingCta = useRef(false);
  const heroRef = useRef(null);
  const isRequestDrawerOpenRef = useRef(false);

  const openRequestDrawer = () => {
    if (isRequestDrawerOpenRef.current) return;
    setHasSubmittedRequest(false);
    window.history.pushState({ ...window.history.state, shogunRequestDrawer: true }, '', window.location.href);
    isRequestDrawerOpenRef.current = true;
    setIsRequestDrawerOpen(true);
  };

  const closeRequestDrawer = () => {
    if (!isRequestDrawerOpenRef.current) return;
    if (window.history.state?.shogunRequestDrawer) {
      window.history.back();
      return;
    }
    isRequestDrawerOpenRef.current = false;
    setIsRequestDrawerOpen(false);
  };

  const handleRequestSubmit = (event) => {
    event.preventDefault();
    setHasSubmittedRequest(true);
  };

  useEffect(() => {
    const desktopCtaQuery = window.matchMedia('(min-width: 768px)');
    if (!desktopCtaQuery.matches) {
      setShowFloatingCta(false);
      return undefined;
    }

    let frameId = 0;
    const updateFloatingCta = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(() => {
        frameId = 0;
        if (!heroRef.current) return;
        setShowFloatingCta(heroRef.current.getBoundingClientRect().bottom <= 80);

        const footerApproach = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 260;
        if (!footerApproach || hasPulsedFloatingCta.current) return;
        hasPulsedFloatingCta.current = true;
        setShouldPulseFloatingCta(true);
      });
    };

    updateFloatingCta();
    window.addEventListener('scroll', updateFloatingCta, { passive: true });
    window.addEventListener('resize', updateFloatingCta);

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', updateFloatingCta);
      window.removeEventListener('resize', updateFloatingCta);
    };
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      if (!isRequestDrawerOpenRef.current) return;
      isRequestDrawerOpenRef.current = false;
      setIsRequestDrawerOpen(false);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (!isRequestDrawerOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeRequestDrawer();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isRequestDrawerOpen]);

  useEffect(() => {
    if (!isMobileNavOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsMobileNavOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileNavOpen]);

  const restartFeatureBar = (event) => {
    if (shouldReduceMotion) return;
    const statusLine = event.currentTarget;
    const bar = statusLine.querySelector('.feature-status-bar') || statusLine;
    bar.classList.remove('is-recharging');
    void bar.offsetWidth;
    bar.classList.add('is-recharging');
  };

  return (
    <div className="shogunship-world-bg min-h-screen overflow-x-clip bg-background selection:bg-primary selection:text-white">
      <nav className="hero-nav">
        <div className="hero-nav-inner">
          <a href="#" className="hero-nav-brand pixel-section-heading pixel-heading-nav">SHOGUNSHIP</a>
          <div className="hero-nav-links">
            <a href="#hero-intro">Who we are</a>
            <a href="#process">How it works</a>
            <a href="#marketplaces">Marketplaces</a>
            <a href="#costs">Costs</a>
          </div>
          <button
            type="button"
            className="hero-nav-menu-button"
            aria-label="Open navigation menu"
            aria-expanded={isMobileNavOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMobileNavOpen(true)}
          >
              <Menu aria-hidden="true" />
              <span>Menu</span>
          </button>
        </div>
      </nav>

      {isMobileNavOpen && (
        <div className="mobile-nav-shell" role="presentation">
          <div className="mobile-nav-backdrop" aria-hidden="true" />
          <div id="mobile-navigation" className="mobile-nav-panel" role="dialog" aria-modal="true" aria-label="Site navigation">
            <div className="mobile-nav-heading">
              <span>ShogunShip Route</span>
              <button type="button" onClick={() => setIsMobileNavOpen(false)} aria-label="Close navigation menu"><X aria-hidden="true" /></button>
            </div>
            <nav aria-label="Mobile navigation">
              {[
                ['01', 'Who we are', '#hero-intro'],
                ['02', 'How it works', '#process'],
                ['03', 'Marketplaces', '#marketplaces'],
                ['04', 'Costs', '#costs'],
              ].map(([number, label, href]) => (
                <a key={href} href={href} onClick={() => setIsMobileNavOpen(false)}>
                  <span>{number}</span>{label}<ArrowRight aria-hidden="true" />
                </a>
              ))}
              <button
                type="button"
                className="mobile-nav-adventure-cta"
                onClick={() => {
                  setIsMobileNavOpen(false);
                  openRequestDrawer();
                }}
              >
                Start Your Adventure <ArrowRight aria-hidden="true" />
              </button>
            </nav>
          </div>
        </div>
      )}

      <section ref={heroRef} className="relative flex min-h-[680px] w-full items-center justify-center overflow-hidden border-b-[8px] border-foreground px-0 pb-10 pt-28 md:min-h-[720px]">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="A Shinkansen crossing rice fields beneath Mount Fuji" className="h-full w-full object-cover object-center" fetchPriority="high" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[38%] overflow-hidden opacity-70" aria-hidden="true">
          <PixelClouds />
        </div>
        <svg className="hero-pixel-deer" viewBox="0 0 20 18" shapeRendering="crispEdges" aria-hidden="true">
          <rect x="4" y="7" width="9" height="5" />
          <rect x="12" y="5" width="4" height="5" />
          <rect x="15" y="3" width="2" height="3" />
          <rect x="16" y="1" width="1" height="2" />
          <rect x="17" y="0" width="1" height="2" />
          <rect x="13" y="2" width="1" height="3" />
          <rect x="12" y="1" width="1" height="2" />
          <rect x="2" y="6" width="3" height="2" />
          <rect x="1" y="5" width="2" height="1" />
          <rect x="5" y="11" width="2" height="6" />
          <rect x="11" y="11" width="2" height="7" />
          <rect x="15" y="9" width="2" height="2" />
        </svg>
        <div className="relative z-10 flex w-full max-w-4xl flex-col items-center px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="flex flex-col items-center">
              <div id="hero-intro" className="hero-who-card">
                <div className="hero-who-copy">
                  <div className="hero-who-label"><span>WHO WE ARE</span><i /></div>
                  <h1>
                    <span>A SMALL WORKSHOP.</span>
                    <span>TWO PEOPLE.</span>
                    <span>ONE MAILBOX.</span>
                  </h1>
                  <p>ShogunShip is a husband-and-wife proxy buying service based in Nara Prefecture, Japan. We help international collectors buy from Japanese marketplaces: we receive, photograph, store, consolidate, and ship your items personally, with the same care as if we were sending them to our own family.</p>
                  <p className="hero-who-thanks">— Arigatou gozaimasu!</p>
                </div>
                <div className="hero-who-sign">
                  <img src={shogunshipSign} alt="ShogunShip Family" />
                </div>
              </div>
              <PixelButton type="button" variant="primary" className="mt-5 w-full sm:w-auto" onClick={openRequestDrawer}>Start Your Adventure <ArrowRight className="ml-2 h-5 w-5" /></PixelButton>
            </div>
          </motion.div>
        </div>
      </section>

      <button
        type="button"
        className={`floating-adventure-cta ${showFloatingCta ? 'is-visible' : ''} ${shouldPulseFloatingCta ? 'is-pulsing' : ''}`}
        onClick={openRequestDrawer}
        onAnimationEnd={() => setShouldPulseFloatingCta(false)}
        aria-hidden={!showFloatingCta}
        tabIndex={showFloatingCta ? 0 : -1}
      >
        Start Your Adventure
      </button>

      <div className="below-hero-world">
      <section id="process" className="process-field-section px-4 pb-20 pt-14">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8">
            <h2 className="major-section-title mb-4">Four Steps. Zero Stress.</h2>
            <p className="font-sans text-lg text-foreground/80">You send the link. We do everything else from our little workshop in Nara.</p>
          </div>
          <p className="mobile-swipe-cue" aria-hidden="true">Swipe to explore <ArrowRight /></p>
          <ol className="lovable-step-list grid grid-cols-1 gap-6 md:grid-cols-4" aria-label="How ShogunShip works" tabIndex="0">
            {[
              ['01', Search, 'Send us the link', "You send us the link to the treasure you've found on any Japanese website. We review the listing, confirm everything looks good, and guide you through the next step."],
              ['02', Store, 'We buy it for you', "Once you're ready, we purchase it on your behalf and handle the Japanese-only logistics."],
              ['03', ShieldCheck, 'Arrives at our home', 'When your package arrives, we photograph the outer package, check for visible shipping damage, and store it safely.'],
              ['04', Ship, 'Ship when you say', 'We consolidate multiple items, pack them carefully, and ship them to your home when you are ready.'],
            ].map(([step, Icon, title, desc], i) => (
              <li key={step} className="lovable-step-card">
                <div className="lovable-step-top">
                  <span className="lovable-step-icon-badge"><Icon className="lovable-step-icon" /></span>
                </div>
                <h3>{title}</h3>
                <p className="font-sans text-foreground/70">{desc}</p>
                <span className="lovable-step-number" aria-hidden="true">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="workshop" className="relative px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-10">
            <div className="relative w-full lg:w-[42%]"><div className="absolute -left-4 top-4 h-full w-full border-[4px] border-foreground bg-secondary" /><div className="illustration-zoom-frame relative z-10 aspect-video h-auto w-full border-[4px] border-foreground"><picture><source media="(max-width: 767px)" srcSet={retroStoreMobileBg} /><img src={retroStoreBg} alt="Retro Japanese hobby shop" className="h-full w-full object-cover" loading="lazy" decoding="async" /></picture></div></div>
            <div className="w-full lg:w-[58%]">
              <div className="mb-6 flex items-center gap-4"><div className="border-2 border-foreground bg-destructive p-2 text-destructive-foreground"><ShieldCheck className="h-6 w-6" /></div><h2 className="major-section-title">Real People, Real Care</h2></div>
              <div className="space-y-4 font-sans text-lg text-foreground/80"><p>You are not working with a massive warehouse, a fulfillment center, or a drop-shipping company. You are working with a husband-and-wife team in Nara who personally receive, check, photograph, and pack every single order.</p><p>We understand that condition and careful handling matter. Every item is treated as if it were our own because we know the anxiety of international shipping and how much it means to the person waiting for it.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="marketplaces" className="overflow-hidden px-4 pb-20 pt-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <h2 className="major-section-title mb-4">Select Your Destination</h2>
            <p className="mx-auto max-w-5xl font-sans text-lg text-foreground/70">
              <span className="block">We navigate the winding roads of Japan&apos;s biggest marketplaces so you don&apos;t have to.</span>
              <span className="block">Drop us a link from any website. If it&apos;s sold in Japan, we can probably get it, just ask.</span>
            </p>
          </div>
          <div className="marketplace-button-row">
            {[
              { name: 'Mercari Japan', logo: mercariLogo, href: 'https://jp.mercari.com/', ariaLabel: 'Visit Mercari Japan' },
              { name: 'Surugaya', logo: surugayaLogo, logoClassName: 'marketplace-button-logo-surugaya', href: 'https://www.suruga-ya.jp/', ariaLabel: 'Visit Surugaya' },
              { name: 'Animate', logo: animateLogo, href: 'https://www.animate-onlineshop.jp/', ariaLabel: 'Visit Animate Online Shop' },
              { name: 'Mandarake', logo: mandarakeLogo, href: 'https://www.mandarake.co.jp/', ariaLabel: 'Visit Mandarake' },
              { name: 'Shiseido', logo: shiseidoLogo, logoClassName: 'marketplace-button-logo-shiseido', href: 'https://www.shiseido.co.jp/', ariaLabel: 'Visit Shiseido' },
              { name: 'Other Shops', logo: otherShopsLogo, logoClassName: 'marketplace-button-logo-other-shops', onClick: openRequestDrawer, ariaLabel: 'Ask about other Japanese shops' },
            ].map(({ name, logo, logoClassName, href, onClick, ariaLabel }) => {
              const MarketplaceControl = onClick ? 'button' : 'a';

              return (
                <div key={name} className="marketplace-button-wrap">
                  <MarketplaceControl
                    type={onClick ? 'button' : undefined}
                    href={href}
                    target={href?.startsWith('http') ? '_blank' : undefined}
                    rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    onClick={onClick}
                    aria-label={ariaLabel}
                    className="marketplace-menu-button"
                  >
                    <span className="marketplace-button-logo-stage">
                      <img src={logo} alt="" className={`marketplace-button-logo ${logoClassName || ''}`} loading="lazy" decoding="async" />
                    </span>
                    <span className="marketplace-button-name">{name}</span>
                    <span className="marketplace-button-affordance" aria-hidden="true">{onClick ? 'Ask' : 'Visit'} <ArrowRight /></span>
                  </MarketplaceControl>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="collection" className="relative px-4 pb-24 pt-14 text-foreground">
        <div className="mx-auto max-w-7xl"><div className="flex flex-col items-center gap-12 lg:flex-row-reverse lg:gap-10">
          <div className="relative w-full lg:w-[42%] lg:translate-x-4 xl:translate-x-8"><div className="absolute -right-4 top-4 h-full w-full border-[4px] border-foreground bg-secondary" /><div className="illustration-zoom-frame relative z-10 aspect-video h-auto w-full border-[4px] border-foreground"><img src={postOfficeBg} alt="Japanese countryside post office" className="h-full w-full object-cover" loading="lazy" decoding="async" /></div></div>
          <div className="w-full lg:w-[58%]"><h2 className="major-section-title care-section-title mb-6">Your Collection Is Safe With Us</h2><p className="mb-8 max-w-lg font-sans text-xl text-foreground/80">The care a family member would take.</p>
            <p className="mobile-swipe-cue" aria-hidden="true">Swipe to explore <ArrowRight /></p>
            <div className="collection-service-list space-y-4" role="list" aria-label="Collection care services" tabIndex="0">{[
              ['Free Storage', 'AVAILABLE', 'feature-status-mint', 'Up to 60 days of free storage while you search for more treasures to consolidate.'],
              ['Smart Consolidation', 'AVAILABLE', 'feature-status-blue', 'We combine multiple orders into one well-protected shipment to save you on international shipping.'],
              ['Condition Photos', 'PAID PERK', 'feature-status-peach', 'Want extra peace of mind? Every package is photographed on arrival. This optional service adds detailed item photos before shipping.'],
              ['INSURED SHIPPING', 'AVAILABLE', 'feature-status-gold', 'Choose your preferred shipping method. Every shipment includes tracking and insurance.'],
            ].map(([title, status, statusClass, desc]) => <div key={title} role="listitem" className="flex items-start gap-4 border-[2px] border-foreground/20 bg-background/45 p-4"><PackageOpen className="mt-1 h-6 w-6 shrink-0" /><div className="min-w-0 flex-1"><div className="feature-title-row"><h4 className={`font-display text-xl tracking-wide ${statusClass}`}>{title}</h4><div className={`feature-status-line ${statusClass}`}><span className="feature-status-text">{status}</span><span className={`feature-status-bar ${statusClass}`} aria-hidden="true" onMouseEnter={restartFeatureBar} onAnimationEnd={(event) => event.currentTarget.classList.remove('is-recharging')}>{Array.from({ length: 10 }).map((_, index) => <i key={index} />)}</span></div></div><p className="font-sans text-sm text-foreground/70">{desc}</p></div></div>)}</div>
          </div>
        </div></div>
      </section>

      <section id="costs" className="costs-estimate-section px-4 pb-24 pt-12 text-foreground">
        <div className="costs-transparent-artwork" aria-hidden="true">
          <img src={costsBackground} alt="" loading="lazy" decoding="async" />
        </div>
        <div className="mx-auto max-w-7xl">
          <div className="costs-estimate-copy">
            <div className="mb-7">
              <h2 className="major-section-title mb-4">Transparent Costs</h2>
              <p className="max-w-2xl font-sans text-lg text-foreground/75">
                We always send a full quote before you pay anything, with no hidden markups.
              </p>
            </div>

            <div className="estimate-sheet" aria-label="Cost estimate breakdown">
              <span className="estimate-paperclip" aria-hidden="true" />
              <span className="estimate-handling-marks" aria-hidden="true" />
              <span className="estimate-thank-you">Thank you!</span>

              <div className="estimate-title-plate">
                <span>Estimate</span>
                <small>Personal Estimate</small>
              </div>

              <div className="estimate-sheet-body">
                <div className="estimate-breakdown">
                  {[
                    { label: 'Item price', marker: 'To be quoted' },
                    { label: 'Domestic shipping inside Japan (if charged)', marker: 'To be quoted' },
                    { label: 'Service fee', marker: 'To be quoted', badge: ['INCLUDED', 'Launch Gift'] },
                    { label: 'International shipping', marker: 'To be quoted' },
                  ].map(({ label, marker, badge }) => (
                    <div key={label} className={`estimate-line${badge ? ' estimate-line-service' : ''}`}>
                      <span className="estimate-line-label">{label}</span>
                      {badge && (
                        <span className="estimate-launch-badge">
                          <strong>{badge[0]}</strong>
                          <small>{badge[1]}</small>
                        </span>
                      )}
                      <span className="estimate-line-marker" aria-hidden="true">{marker}</span>
                    </div>
                  ))}
                </div>

                <div className="estimate-extra-panel">
                  <div>
                    <h3>Optional Perks</h3>
                    <p>Only when you ask for them. Never hidden inside the quote.</p>
                  </div>
                  <ul>
                    {[
                      'Detailed unboxing photos',
                      'Protective packing requests',
                      'Longer storage when possible',
                    ].map((extra) => (
                      <li key={extra}>{extra}</li>
                    ))}
                  </ul>
                </div>

                <div className="estimate-promise-row" aria-label="Cost promises">
                  <span>No hidden markups</span>
                  <span>No surprise fees</span>
                  <span>No obligation</span>
                </div>

                <p className="estimate-signature">
                  <span>Prepared personally.</span>
                  <span>ShogunShip</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative flex h-[70vh] w-full items-center justify-center">
        <div className="absolute inset-0 z-0"><img src={landscapeFooterBg} alt="Japanese countryside landscape" className="h-full w-full object-cover" loading="lazy" decoding="async" /><div className="absolute inset-0 bg-foreground/60" /></div>
        <div className="relative z-10 px-4 text-center"><PixelBox doubleBorder className="contact-cta-panel mx-auto max-w-2xl bg-background/95 backdrop-blur"><h2 className="major-section-title mb-6">Ready To Embark?</h2><p className="mb-8 font-sans text-xl text-foreground/80">The rarest finds in Japan are waiting for you. Let us be your guide.</p><div className="contact-cta-actions flex flex-col justify-center gap-4 sm:flex-row"><PixelButton variant="primary">Create an Account</PixelButton><PixelButton>View Pricing Guide</PixelButton></div></PixelBox></div>
      </section>

      <footer className="border-t-[4px] border-background bg-foreground px-4 py-6 text-background"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between font-sans text-sm md:flex-row"><p><span className="desktop-footer-summary">© {new Date().getFullYear()} ShogunShip. Based in Nara, Japan.</span><span className="mobile-footer-summary">© {new Date().getFullYear()} ShogunShip · Nara, Japan</span></p><div className="footer-link-row mt-4 flex gap-4 md:mt-0"><a href="#" className="transition-colors hover:text-primary">Terms of Service</a><a href="#" className="transition-colors hover:text-primary">Privacy Policy</a><a href="#" className="transition-colors hover:text-primary">Contact</a></div></div></footer>
      </div>

      {isRequestDrawerOpen && (
        <div className="request-drawer-shell" role="presentation" onPointerDown={closeRequestDrawer}>
          <aside className="request-drawer" role="dialog" aria-modal="true" aria-labelledby="request-drawer-title" onPointerDown={(event) => event.stopPropagation()}>
            <button type="button" className="request-drawer-close" onClick={closeRequestDrawer} aria-label="Close request form">
              <X className="h-5 w-5" />
            </button>
            <div className="request-drawer-header">
              <span className="request-drawer-kicker">Quest Request</span>
              <h2 id="request-drawer-title">Send Your Link</h2>
              <p>Drop the treasure map here. We will check it personally and write back.</p>
            </div>
            {hasSubmittedRequest ? (
              <div className="request-drawer-success" role="status">
                Thank you! We'll get back to you personally.
              </div>
            ) : (
              <form className="request-drawer-form" onSubmit={handleRequestSubmit}>
                <label>
                  <span>Marketplace link</span>
                  <input type="url" name="marketplaceLink" placeholder="https://..." value={requestFormData.marketplaceLink} onChange={(event) => setRequestFormData((current) => ({ ...current, marketplaceLink: event.target.value }))} required />
                </label>
                <label>
                  <span>Your email</span>
                  <input type="email" name="email" placeholder="you@example.com" value={requestFormData.email} onChange={(event) => setRequestFormData((current) => ({ ...current, email: event.target.value }))} required />
                </label>
                <label>
                  <span>Note optional</span>
                  <textarea name="note" rows="4" placeholder="Condition questions, size, color, or anything we should know." value={requestFormData.note} onChange={(event) => setRequestFormData((current) => ({ ...current, note: event.target.value }))} />
                </label>
                <PixelButton type="submit" variant="primary" className="request-drawer-submit">Send it our way</PixelButton>
              </form>
            )}
          </aside>
        </div>
      )}
    </div>
  );
}
