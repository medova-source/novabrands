import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { Factory, Sliders, Package as PackageIcon, ShieldCheck, Globe2, Truck, Users } from "lucide-react";

import tob01 from "@/assets/tob01.jpeg";
import tob02 from "@/assets/tob02.jpeg";
import tob03 from "@/assets/tob03.jpeg";
import tob04 from "@/assets/tob04.jpeg";

const segments = [
  {
    title: "Cigar & Cigarillo Segment",
    description: "Premium handcrafted and advanced machine-made cigar manufacturing. Leveraging Dominican tobacco heritage, we manufacture to the highest standards of flavor, draw, and structural integrity.",
    image: tob01,
    products: [
      "Premium Hand-Rolled Cigars",
      "Machine-Made Cigars & Mini Cigars",
      "Cigarillos & Flavored Cigarillos",
      "Hemp Wraps & Tobacco Wraps",
      "Blunt Wraps (Non-THC)",
    ],
  },
  {
    title: "Hookah / Shisha Products",
    description: "High-grade hookah tobacco formulation with advanced flavor profiling. We use premium tobacco leaves and premium molasses to deliver rich smoke clouds, consistent heat management, and long-lasting flavor profiles.",
    image: tob02,
    products: [
      "Premium Hookah Tobacco",
      "Custom Shisha Flavor Profiling",
      "White-Label & Custom Branding",
      "Molasses & Glycerin Optimization",
    ],
  },
  {
    title: "Loose Leaf & Roll-Your-Own Segment",
    description: "Comprehensive manufacturing for loose leaf, herbal blends, and essential smoking accessories. From fine-cut curing to fully customized pre-rolled cones and branded papers.",
    image: tob03,
    products: [
      "Pipe Tobacco & Fine-Cut Tobacco",
      "Roll-Your-Own Tobacco",
      "Herbal Smoking Blends",
      "Custom Rolling Papers & Pre-Rolled Cones",
      "High-Performance Filter Tips",
    ],
  },
  {
    title: "Vape & Alternative Nicotine Products",
    description: "Next-generation nicotine delivery systems. Engineered for reliability, puff consistency, flavor purity, and strict compliance with international manufacturing and regulatory standards.",
    image: tob04,
    products: [
      "Disposable Vapes & Hardware Sourcing",
      "Custom E-Liquid Formulation & Bottling",
      "Nicotine Salt & Freebase Offerings",
      "Compliant Batch Testing & Packaging",
    ],
  },
];

const Tobacco = () => (
  <SiteLayout>
    <PageHero
      eyebrow="Manufacturing · Tobacco & Nicotine"
      title={<>Tobacco, Smoking, & <br/><span className="text-muted-foreground">Alternative Nicotine.</span></>}
      description="Strategic private-label and OEM manufacturing programs operating out of the Dominican Republic. We support consumer brands, wholesalers, and major retailers from custom flavor profiling to packaging, branding, and global export logistics."
    />

    {/* DOMINICAN REPUBLIC ADVANTAGE */}
    <section className="bg-background">
      <div className="container-x py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-6">
            <Reveal><div className="eyebrow">Strategic Location</div></Reveal>
            <Reveal delay={0.1}>
              <h2 className="display-2 mt-6">Dominican Republic Manufacturing Advantage.</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
                Nova Brands operates strategically out of the Dominican Republic, the heart of premium global tobacco production. This location grants our partners competitive manufacturing cost structures, access to a highly skilled tobacco workforce, and efficient export logistics serving North America, the Caribbean, Central America, and Latin America.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:pl-8 lg:pl-16">
            <div className="grid gap-8">
              {[
                {
                  icon: Users,
                  t: "Skilled Tobacco Workforce",
                  d: "Our DR operations benefit from generations of skilled tobacco specialists and master blenders, ensuring product quality and craftsmanship that cannot be replicated elsewhere.",
                },
                {
                  icon: Globe2,
                  t: "Efficient Export Logistics",
                  d: "Seamless sea and air freight links to major regional hubs, enabling prompt shipping times, simplified customs operations, and resilient supply chains.",
                },
                {
                  icon: Truck,
                  t: "Flexible MOQ Structures",
                  d: "Tailored production runs designed to support emerging brands with low minimums while offering the scalability required by national and global distributors.",
                },
              ].map((adv, i) => (
                <Reveal key={adv.t} delay={i * 0.08}>
                  <div className="flex gap-5 border-t border-[hsl(var(--rule))] pt-6">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-foreground">
                      <adv.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-[16px] font-semibold tracking-tight">{adv.t}</h3>
                      <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{adv.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* SEGMENTS HIGHLIGHT (ALTERNATING LAYOUT) */}
    <section className="border-t border-[hsl(var(--rule))] bg-secondary">
      <div className="container-x py-24 md:py-32">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <Reveal><div className="eyebrow mx-auto justify-center">Product Portfolio</div></Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-2 mt-6">End-to-End Solutions Across Four Key Segments.</h2>
          </Reveal>
        </div>

        <div className="grid gap-24">
          {segments?.map((seg, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={seg.title} className="grid gap-12 md:grid-cols-12 md:items-center">
                {/* Image Col */}
                <Reveal className={`md:col-span-6 ${isEven ? "md:order-1" : "md:order-2"}`}>
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-[hsl(var(--rule))] shadow-lg bg-card">
                    <img
                      src={seg.image}
                      alt={seg.title}
                      className="h-full w-full object-contain transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </Reveal>

                {/* Text Col */}
                <Reveal delay={0.1} className={`md:col-span-6 ${isEven ? "md:order-2 md:pl-8 lg:pl-16" : "md:order-1 md:pr-8 lg:pr-16"}`}>
                  <div className="num-tag">SEGMENT 0{i + 1}</div>
                  <h3 className="font-display text-2xl font-bold tracking-tight mt-3 text-foreground md:text-3xl">
                    {seg.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                    {seg.description}
                  </p>

                  <div className="mt-8">
                    <h4 className="text-[12px] font-semibold uppercase tracking-wider text-foreground mb-4">Available Capabilities & Formats:</h4>
                    <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {seg.products.map((p) => (
                        <li key={p} className="flex items-start gap-2.5 text-[14px] text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--primary))]" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* MANUFACTURING CAPABILITIES AND RIGOR */}
    <section className="border-t border-[hsl(var(--rule))] bg-background">
      <div className="container-x py-24 md:py-32">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Factory, t: "OEM & White-Label Capabilities", d: "Adapt our base recipes or build your own custom-branded lines with customized flavor, packaging, and size formats." },
            { icon: Sliders, t: "Packaging, Branding & Design", d: "End-to-end design and sourcing options, including custom tins, wraps, pre-roll tubes, cardboard gift cartons, and point-of-sale display boxes." },
            { icon: PackageIcon, t: " Dominican Free Zone Benefits", d: "Export-optimized processes, duties exemptions, and direct trade corridors ensure maximum value and rapid cross-border fulfillment." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 0.08}>
              <div className="card-sharp h-full p-8">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary"><c.icon className="h-5 w-5" /></div>
                <h3 className="mt-8 font-display text-xl font-semibold tracking-tight">{c.t}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* QUALITY & COMPLIANCE */}
    <section className="border-t border-[hsl(var(--rule))] bg-secondary">
      <div className="container-x grid gap-12 py-24 md:grid-cols-12 md:py-32">
        <Reveal className="md:col-span-5">
          <div className="eyebrow">Quality Assurance</div>
          <h2 className="display-2 mt-6">Reliable Partners. Exceptional Standards.</h2>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-7 md:pl-8 lg:pl-16">
          <p className="text-[15px] leading-relaxed text-muted-foreground">
            Our private-label programs are backed by rigorous quality check protocols, precise moisture tracking for raw leaf storage, automated machine weight controls, and extensive safety procedures. Every batch is evaluated to guarantee product profile consistency, smooth smoking mechanics, and compliance with the export requirements of target destination markets.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6">
            {["Export compliance", "Moisture verification", "Sensory taste-testing", "Flavor integrity", "Weight variation", "Custom package sealing"].map((q) => (
              <div key={q} className="flex items-center gap-3 border-t border-[hsl(var(--rule))] pt-4 text-[14px]">
                <ShieldCheck className="h-4 w-4 text-[hsl(var(--steel))]" />{q}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    <CTASection title="Partner with Nova Brands for custom tobacco manufacturing." />
  </SiteLayout>
);

export default Tobacco;
