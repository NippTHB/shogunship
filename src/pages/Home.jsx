import { motion } from 'framer-motion';
import { ArrowRight, PackageOpen, Search, ShieldCheck, Ship, Store } from 'lucide-react';
import { PixelBox } from '@/components/ui/pixel-box';
import { PixelButton } from '@/components/ui/pixel-button';
import heroBg from '../assets/images/Website_Background_Panorama01.png';
import shogunshipSign from '../assets/images/Landing_asset_Shogunship_Sign.png';
import postOfficeBg from '../assets/redesign/post-office.png';
import retroShopBg from '../assets/redesign/retro-shop.png';
import landscapeFooterBg from '../assets/redesign/landscape-footer.png';

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-background selection:bg-primary selection:text-white">
      <nav className="hero-nav">
        <div className="hero-nav-inner">
          <a href="#" className="hero-nav-brand">SHOGUNSHIP</a>
          <div className="hero-nav-links">
            <a href="#process">How it works</a>
            <a href="#founders">Who we are</a>
            <a href="#costs">Costs</a>
            <a href="#marketplaces">Marketplaces</a>
          </div>
          <a href="#contact" className="hero-nav-cta">Send your link</a>
        </div>
      </nav>

      <section className="relative flex min-h-[680px] w-full items-center justify-center overflow-hidden border-b-[8px] border-foreground px-0 pb-10 pt-28 md:min-h-[720px]">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="A Shinkansen crossing rice fields beneath Mount Fuji" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
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
              <div className="hero-who-card">
                <div className="hero-who-copy">
                  <div className="hero-who-label"><span>WHO WE ARE</span><i /></div>
                  <h1>
                    <span>A small workshop.</span>
                    <span>Two people.</span>
                    <span>One mailbox.</span>
                  </h1>
                  <p>ShogunShip is a husband-and-wife proxy buying service based in Nara Prefecture, Japan. We help international collectors buy from Japanese marketplaces: we receive, photograph, store, consolidate, and ship your items personally, with the same care as if we were sending them to our own family.</p>
                  <p className="hero-who-thanks">— Arigatou gozaimasu!</p>
                </div>
                <div className="hero-who-sign">
                  <img src={shogunshipSign} alt="ShogunShip Family" />
                </div>
              </div>
              <PixelButton variant="primary" className="mt-5 w-full sm:w-auto">Start Your Adventure <ArrowRight className="ml-2 h-5 w-5" /></PixelButton>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="process" className="border-y-[4px] border-foreground bg-background px-4 pb-20 pt-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="process-heading mb-4 text-3xl text-foreground md:text-5xl">FOUR STEPS. ZERO STRESS.</h2>
            <p className="font-sans text-lg text-foreground/70">You send the link. We do everything else from our little workshop in Nara.</p>
          </div>
          <ol className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {[
              ['01', Search, 'Send the link', "You send us a link to the treasure you've found on any Japanese site: we check the listing, item details, and whether it looks safe to buy. We always reply with honest advice."],
              ['02', Store, 'We buy it for you', 'We purchase it on your behalf and handle the Japanese-only logistics.'],
              ['03', ShieldCheck, 'Arrives at our home', 'When your package arrives, we photograph the outside, check for visible issues like dents, holes, water damage, or unusual handling, and store it safely.'],
              ['04', Ship, 'Ship when you say', 'We consolidate multiple items, pack them carefully, and ship them to your home when you are ready.'],
            ].map(([step, Icon, title, desc], i) => (
              <li key={step} className="lovable-step-card">
                <div className="lovable-step-top">
                  <span className="lovable-step-number">{Number(step)}</span>
                  <Icon className="lovable-step-icon" />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
                {i !== 3 && <span className="lovable-step-arrow" aria-hidden="true">→</span>}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="marketplaces" className="relative bg-muted px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl text-foreground md:text-5xl">Select Your Destination</h2>
            <p className="mx-auto max-w-2xl font-sans text-lg text-foreground/70">We navigate the winding roads of Japan&apos;s biggest marketplaces so you don&apos;t have to. Drop a link from any website. If it&apos;s sold in Japan, we can probably get it — just ask.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              ['Mercari Japan', 'The bustling flea market filled with hidden gems and daily deals.'],
              ['Yahoo! Auctions', 'The grand auction house where the rarest artifacts surface.'],
              ['Surugaya', 'The legendary emporium for retro games, figures, and doujinshi.'],
              ['Rakuma', 'A quiet but rewarding marketplace with unique listings.'],
              ['Mandarake', 'The deep archive of vintage anime, manga, and collector items.'],
              ['Other Shops', 'If it exists in Japan, we can venture out to find it for you.'],
            ].map(([name, desc], i) => (
              <motion.div key={name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <PixelBox className="group flex h-full cursor-pointer flex-col items-start transition-colors hover:bg-secondary/10">
                  <div className="mb-4 border-2 border-foreground bg-secondary p-3 text-secondary-foreground"><Store className="h-6 w-6" /></div>
                  <h3 className="mb-2 text-2xl transition-colors group-hover:text-primary">{name}</h3>
                  <p className="font-sans text-foreground/70">{desc}</p>
                </PixelBox>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="founders" className="overflow-hidden px-4 py-24">
        <div className="mx-auto max-w-7xl"><div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="relative w-full lg:w-1/2"><div className="absolute -left-4 top-4 h-full w-full border-[4px] border-foreground bg-secondary" /><img src={retroShopBg} alt="Retro Japanese hobby shop" className="relative z-10 aspect-video h-auto w-full border-[4px] border-foreground object-cover" /></div>
          <div className="w-full lg:w-1/2"><PixelBox doubleBorder className="bg-white">
            <div className="mb-6 flex items-center gap-4"><div className="border-2 border-foreground bg-destructive p-2 text-destructive-foreground"><ShieldCheck className="h-6 w-6" /></div><h2 className="text-3xl md:text-4xl">Real People, Real Care</h2></div>
            <div className="space-y-4 font-sans text-lg text-foreground/80"><p>We aren&apos;t a massive warehouse run by robots. We&apos;re a small group of collectors living in the Japanese countryside who love sharing this culture with the world.</p><p>Every package that arrives is opened by human hands, inspected with trained eyes, and packed with the kind of care a rare item deserves. We know the anxiety of international shipping, so we pack everything like it&apos;s going into our own collections.</p></div>
          </PixelBox></div>
        </div></div>
      </section>

      <section id="costs" className="relative border-y-[8px] border-foreground bg-primary px-4 py-24 text-primary-foreground">
        <div className="mx-auto max-w-7xl"><div className="flex flex-col items-center gap-12 lg:flex-row-reverse">
          <div className="relative w-full lg:w-1/2"><div className="absolute -right-4 top-4 h-full w-full border-[4px] border-foreground bg-foreground" /><img src={postOfficeBg} alt="Japanese countryside post office" className="relative z-10 aspect-video h-auto w-full border-[4px] border-foreground object-cover" /></div>
          <div className="w-full lg:w-1/2"><h2 className="mb-6 text-4xl md:text-5xl">The Inventory System</h2><p className="mb-8 max-w-lg font-sans text-xl text-primary-foreground/90">Buy from ten different sellers, pay for shipping once.</p>
            <div className="space-y-4">{[
              ['Free Storage', 'We hold your items securely for up to 45 days at no extra cost.'],
              ['Smart Consolidation', 'We repack multiple orders into one sturdy box to save you massive amounts on international shipping.'],
              ['Condition Photos', "Want to be sure? We'll take detailed photos of your items upon request before shipping them out."],
            ].map(([title, desc]) => <div key={title} className="flex items-start gap-4 border-[2px] border-primary-foreground/20 bg-primary-foreground/10 p-4"><PackageOpen className="mt-1 h-6 w-6 shrink-0" /><div><h4 className="mb-1 font-display text-xl tracking-wide">{title}</h4><p className="font-sans text-sm text-primary-foreground/80">{desc}</p></div></div>)}</div>
          </div>
        </div></div>
      </section>

      <section id="contact" className="relative flex h-[70vh] w-full items-center justify-center">
        <div className="absolute inset-0 z-0"><img src={landscapeFooterBg} alt="Japanese countryside landscape" className="h-full w-full object-cover" /><div className="absolute inset-0 bg-foreground/60" /></div>
        <div className="relative z-10 px-4 text-center"><PixelBox doubleBorder className="mx-auto max-w-2xl bg-background/95 backdrop-blur"><h2 className="mb-6 text-4xl text-foreground md:text-5xl">Ready to Embark?</h2><p className="mb-8 font-sans text-xl text-foreground/80">The rarest finds in Japan are waiting for you. Let us be your guide.</p><div className="flex flex-col justify-center gap-4 sm:flex-row"><PixelButton variant="primary">Create an Account</PixelButton><PixelButton>View Pricing Guide</PixelButton></div></PixelBox></div>
      </section>

      <footer className="border-t-[4px] border-background bg-foreground px-4 py-6 text-background"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between font-sans text-sm md:flex-row"><p>© {new Date().getFullYear()} ShogunShip. Based in Japan.</p><div className="mt-4 flex gap-4 md:mt-0"><a href="#" className="transition-colors hover:text-primary">Terms of Service</a><a href="#" className="transition-colors hover:text-primary">Privacy Policy</a><a href="#" className="transition-colors hover:text-primary">Contact</a></div></div></footer>
    </div>
  );
}
