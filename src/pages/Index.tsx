import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Beaker, Boxes, Layers, ShieldCheck, Sparkles } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import Reveal from "@/components/Reveal";
import CategoryGrid from "@/components/CategoryGrid";
import CTASection from "@/components/CTASection";

import heroImg from "@/assets/hero-facility.jpg";
import gummies from "@/assets/cat-gummies.jpg";
import capsules from "@/assets/cat-capsules.jpg";
import powders from "@/assets/cat-powders.jpg";
import liquids from "@/assets/cat-liquids.jpg";
import tablets from "@/assets/cat-tablets.jpg";
import packaging from "@/assets/packaging.jpg";
import rdLab from "@/assets/rd-lab.jpg";

const services = [
  { icon: Sparkles, title: "New Product Development", desc: "From concept to commercial launch, including formula, flavor, format, and proof.", to: "/custom-products/new-product-development" },
  { icon: Beaker, title: "Custom Product Manufacturing", desc: "Match an existing formula or build something the world has never seen.", to: "/custom-products/custom-manufacturing" },
  { icon: Boxes, title: "Private Label Stock SKUs", desc: "Fast to market, science backed formulations ready to wear your brand.", to: "/manufacturing" },
  { icon: Layers, title: "Fully Customizable Packaging", desc: "Bottles, pouches, sticks, cartons, all designed and sourced under one roof.", to: "/custom-products/custom-packaging" },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);

  return (
    <SiteLayout>
      {/* HERO */}
      <section ref={heroRef} className="relative overflow-hidden bg-ink text-white">
        <motion.div
          style={reduce ? undefined : { y: imgY, scale: imgScale }}
          className="absolute inset-0"
        >
          <img src={heroImg} alt="Nova Brands manufacturing facility" className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/40 to-ink" />
          <div className="absolute -top-1/4 -right-1/4 h-[70%] w-[70%] rounded-full bg-[hsl(var(--primary))] opacity-[0.12] blur-[120px]" />
          <div className="absolute -bottom-1/4 -left-1/4 h-[60%] w-[60%] rounded-full bg-[hsl(var(--accent))] opacity-[0.1] blur-[100px]" />
        </motion.div>

        <div className="container-x relative pt-36 pb-24 md:pt-48 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-12 md:grid-cols-12 md:items-end"
          >
            <div className="md:col-span-8">
              <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/50">— Custom Manufacturing · Packaging · 3PL</div>
              <h1 className="display-1 mt-8 text-white">
                We engineer the products
                <span className="block text-white/50">your brand will be remembered for.</span>
              </h1>
            </div>
            <div className="md:col-span-4">
              <p className="text-[15px] leading-relaxed text-white/70">
                Nova Brands is a GMP certified contract manufacturer building premium gummies, capsules, tablets, powders and liquids, with packaging design and 3PL distribution under one roof.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link to="/contact" className="inline-flex items-center gap-3 rounded-full bg-[hsl(var(--primary))] px-7 py-3.5 text-sm font-medium text-white shadow-[0_8px_30px_rgb(0,156,254,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgb(0,156,254,0.4)]">
                  Start Your Product <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link to="/how-we-work" className="inline-flex items-center gap-3 rounded-full border border-[hsl(var(--accent))/30] px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))/10]">
                  How We Work
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Stat strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-24 grid grid-cols-2 gap-y-10 border-t border-white/10 pt-10 md:grid-cols-4"
          >
            {[
              ["180M+", "Units / year capacity"],
              ["8–10 wk", "Concept to commercial"],
              ["5", "Manufacturing formats"],
              ["ISO · cGMP", "Audited & certified"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] bg-clip-text font-display text-3xl font-semibold tracking-tight text-transparent md:text-4xl">{n}</div>
                <div className="mt-2 text-[12px] uppercase tracking-[0.18em] text-white/40">{l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CLIENT MARQUEE */}
      {/* <section className="border-y border-[hsl(var(--rule))] bg-background">
        <div className="container-x flex flex-col gap-6 py-10 md:flex-row md:items-center md:gap-12">
          <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground shrink-0">— Trusted by founders & global brands</div>
          <div className="relative flex-1 overflow-hidden">
            <div className="marquee-track flex w-max items-center gap-14 whitespace-nowrap font-display text-xl font-medium tracking-tight text-foreground/40">
              {[..."Halcyon · Northwind · Roam · Apex Naturals · Lumière · Kindred · Veritas · Forge & Fern · Solis · Ostara".split(" · "), ..."Halcyon · Northwind · Roam · Apex Naturals · Lumière · Kindred · Veritas · Forge & Fern · Solis · Ostara".split(" · ")].map((b, i) => (
                <span key={i} className="shrink-0">{b}</span>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* SERVICES — 4 cards */}
      <section className="bg-background">
        <div className="container-x py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <Reveal><div className="eyebrow">What we do</div></Reveal>
              <Reveal delay={0.1}>
                <h2 className="display-2 mt-6">A vertical platform <br className="hidden md:block" />for modern wellness brands.</h2>
              </Reveal>
            </div>
            <Reveal delay={0.2} className="md:col-span-5">
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                Four integrated services. One operational team. Whether you're launching a first SKU or scaling a global catalog, we keep the entire production stack inside one facility.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <Link to={s.to} className="card-sharp group flex h-full flex-col p-7">
                  <div className="flex items-start justify-between">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-foreground transition-all duration-500 group-hover:bg-[hsl(var(--primary))] group-hover:text-white group-hover:shadow-[0_4px_20px_rgba(0,156,254,0.3)]">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <div className="num-tag">0{i + 1}</div>
                  </div>
                  <h3 className="mt-10 font-display text-[19px] font-semibold leading-snug tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">{s.desc}</p>
                  <div className="mt-8 flex items-center gap-2 text-[13px] font-medium text-foreground">
                    Explore <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY & COMPLIANCE — split */}
      <section className="border-t border-[hsl(var(--rule))] bg-secondary">
        <div className="container-x grid gap-12 py-24 md:grid-cols-12 md:py-32">
          <Reveal className="md:col-span-6">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl">
              <img src={rdLab} alt="Nova Brands R&D laboratory" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <div className="md:col-span-6 md:pl-8 lg:pl-16 md:self-center">
            <Reveal><div className="eyebrow">Quality & Compliance</div></Reveal>
            <Reveal delay={0.1}>
              <h2 className="display-2 mt-6">Engineered to the standards that earn shelf space.</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
                Every Nova Brands product moves through audited checkpoints, including raw material identity, in process verification, independent finished testing, and traceable batch records.
              </p>
            </Reveal>
            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                ["ISO Certified", "Facility & process"],
                ["cGMP Certified", "21 CFR 111 & 117"],
                ["NSF / GMP", "Independent audits"],
                ["Allergen Controlled", "Segregated lines"],
              ].map(([t, d], i) => (
                <Reveal key={t} delay={0.25 + i * 0.06}>
                  <div className="border-t border-[hsl(var(--rule))] pt-5">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-[hsl(var(--steel))]" />
                      <div className="text-sm font-semibold tracking-tight">{t}</div>
                    </div>
                    <div className="mt-1 text-[13px] text-muted-foreground">{d}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MANUFACTURING CATEGORIES */}
      <CategoryGrid
        eyebrow="Manufacturing capabilities"
        title="Five formats. One facility."
        items={[
          { to: "/manufacturing/gummies", title: "Gummy Manufacturing", description: "Pectin & gelatin, low sugar systems, sour coatings and 3D molds.", image: gummies },
          { to: "/manufacturing/capsules", title: "Capsule Manufacturing", description: "Vegetarian, gelatin, liquid fill and beadlet specialty formats.", image: capsules },
          { to: "/manufacturing/powders", title: "Powder Manufacturing", description: "Stick packs, jars and bulk, agglomerated for clean dissolution.", image: powders },
          { to: "/manufacturing/liquids", title: "Liquid Manufacturing", description: "Tinctures, shots, syrups and dropper bottle systems.", image: liquids },
          { to: "/manufacturing/tablets", title: "Tablet Manufacturing", description: "Coated, layered, chewable and effervescent formats.", image: tablets },
          { to: "/custom-products/custom-packaging", title: "Custom Packaging", description: "Bottles, cartons, films, pouches, designed and sourced internally.", image: packaging },
        ]}
      />

      <CTASection />
    </SiteLayout>
  );
};

export default Index;
