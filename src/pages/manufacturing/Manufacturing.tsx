import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CategoryGrid from "@/components/CategoryGrid";
import CTASection from "@/components/CTASection";
import facility from "@/assets/hero-facility.jpg";
import gummies from "@/assets/cat-gummies.jpg";
import capsules from "@/assets/cat-capsules.jpg";
import powders from "@/assets/cat-powders.jpg";
import liquids from "@/assets/cat-liquids.jpg";
import tablets from "@/assets/cat-tablets.jpg";

const accordion = [
  { t: "Next Generation Equipment", d: "High throughput encapsulators, pectin gummy lines, agglomerators, fluid bed dryers, automated tablet presses, aseptic liquid fillers and inline vision systems." },
  { t: "High Volume Capacities", d: "Capacity for 180M+ units annually across formats, with surge capability for promotional and seasonal launches." },
  { t: "Comprehensive Warehousing", d: "Climate controlled raw material, in process and finished goods storage with lot tracked, expiry aware inventory." },
  { t: "Highest Levels of Quality", d: "FDA registered, cGMP 21 CFR 111 & 117 compliant, NSF audited, with independent finished testing on every batch." },
  { t: "Diverse Product Range", d: "Extensive manufacturing capabilities across gummies, capsules, tablets, powders, and liquids to support comprehensive brand portfolios." },
  { t: "Integrated Supply Chain", d: "Multiple source ingredient strategy, audited vendors and integrated packaging procurement for resilience and speed." },
];

const Manufacturing = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Manufacturing Capabilities"
        title={<>One facility. <br/><span className="text-muted-foreground">Five formats. Zero handoffs.</span></>}
        description="An FDA registered, cGMP certified manufacturing platform with high capacity production lines, advanced labs and an integrated packaging and 3PL operation."
        image={facility}
      />

      {/* Facility intro */}
      <section className="bg-background">
        <div className="container-x py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <div className="eyebrow">Facility</div>
              <h2 className="display-2 mt-6">Engineered for output and rigor in equal measure.</h2>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-7 md:pl-8 lg:pl-16">
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                Most contract manufacturers either run fast or run clean. Our facility was designed to do both. Five GMP suites, dedicated R&D and microbiology labs, segregated allergen lines and an internal 3PL, purpose built so your product never leaves quality oversight from raw material to last mile.
              </p>
              <div className="mt-12 grid grid-cols-3 gap-6 border-t border-[hsl(var(--rule))] pt-8">
                {[["180M+", "Units / yr"], ["120K", "Sq ft GMP"], ["48hr", "QC release"]].map(([n, l]) => (
                  <div key={l}>
                    <div className="font-display text-3xl font-semibold tracking-tight">{n}</div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ACCORDION GRID */}
      <section className="border-t border-[hsl(var(--rule))] bg-secondary">
        <div className="container-x py-24 md:py-32">
          <Reveal><div className="eyebrow">Capabilities</div></Reveal>
          <Reveal delay={0.1}><h2 className="display-2 mt-6 max-w-3xl">A platform, not a production line.</h2></Reveal>
          <div className="mt-16 grid gap-px bg-[hsl(var(--rule))] md:grid-cols-2">
            {accordion.map((item, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={item.t} delay={i * 0.05}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full items-start justify-between gap-6 bg-background p-8 text-left transition-colors hover:bg-card md:p-10"
                  >
                    <div>
                      <div className="num-tag">{String(i + 1).padStart(2, "0")}</div>
                      <h3 className="mt-3 font-display text-xl font-semibold tracking-tight md:text-2xl">{item.t}</h3>
                      <div className={`grid overflow-hidden transition-all duration-500 ${isOpen ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                        <div className="min-h-0">
                          <p className="text-[14px] leading-relaxed text-muted-foreground">{item.d}</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[hsl(var(--rule))]">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CategoryGrid
        eyebrow="Format Capabilities"
        title="Choose a format. Explore the spec."
        items={[
          { to: "/manufacturing/gummies", title: "Gummies", description: "Pectin & gelatin systems, low sugar, sour coated, custom 3D molds.", image: gummies },
          { to: "/manufacturing/capsules", title: "Capsules", description: "Vegetarian, gelatin, liquid fill, beadlet and delayed release formats.", image: capsules },
          { to: "/manufacturing/tablets", title: "Tablets", description: "Coated, layered, chewable, effervescent and orally disintegrating.", image: tablets },
          { to: "/manufacturing/powders", title: "Powders", description: "Stick packs, jars, bulk, agglomerated for clean dissolution.", image: powders },
          { to: "/manufacturing/liquids", title: "Liquids", description: "Tinctures, shots, syrups and dropper bottle systems.", image: liquids },
        ]}
      />

      <CTASection title="Tour the platform. Plan your run." />
    </SiteLayout>
  );
};

export default Manufacturing;
