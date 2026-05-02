import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { Layers, Ruler, Lock, Palette, Box, BadgeCheck, ShieldCheck } from "lucide-react";
import packaging from "@/assets/packaging.jpg";

const CustomPackaging = () => (
  <SiteLayout>
    <PageHero
      eyebrow="Custom Products · Packaging"
      title={<>Custom Packaging Design. <br/><span className="text-muted-foreground">Built like a design studio.</span></>}
      description="An in-house packaging studio inside a manufacturing platform. Structural design, graphic design, sourcing, sampling and production — vertically integrated with your formula."
      image={packaging}
    />

    <section className="bg-background">
      <div className="container-x grid gap-12 py-24 md:grid-cols-12 md:py-32">
        <Reveal className="md:col-span-5">
          <div className="eyebrow">Sourcing</div>
          <h2 className="display-2 mt-6">Vetted & cost-conscious sourcing.</h2>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-7 md:pl-8 lg:pl-16">
          <p className="text-[15px] leading-relaxed text-muted-foreground">
            We've already done the supplier diligence so you don't have to. Multi-region sourcing, audited vendors, and unit economics that make your COGS work — without compromising the way the product feels in someone's hand.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="border-t border-[hsl(var(--rule))] bg-secondary">
      <div className="container-x py-24 md:py-32">
        <Reveal><div className="eyebrow">End-to-end customization</div></Reveal>
        <Reveal delay={0.1}><h2 className="display-2 mt-6 max-w-3xl">Every surface. Every dimension. Every closure.</h2></Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            { icon: Palette, t: "Design & Material", d: "Glass, PCR, aluminum, paperboard, biofilm — finishes from soft-touch to mirror foil." },
            { icon: Ruler, t: "Shape & Size", d: "Custom dielines, structural prototyping and shelf-impact studies." },
            { icon: Lock, t: "Closures", d: "Child-resistant, tamper-evident, dropper, pump, sachet, stick-pack and beyond." },
          ].map((c) => (
            <Reveal key={c.t}>
              <div className="card-sharp p-8">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-background"><c.icon className="h-5 w-5" /></div>
                <h3 className="mt-8 font-display text-xl font-semibold tracking-tight">{c.t}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="border-t border-[hsl(var(--rule))] bg-background">
      <div className="container-x py-24 md:py-32">
        <Reveal><div className="eyebrow">Packaging capabilities</div></Reveal>
        <Reveal delay={0.1}><h2 className="display-2 mt-6 max-w-3xl">A studio inside the factory.</h2></Reveal>
        <div className="mt-16 grid gap-px bg-[hsl(var(--rule))] md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Layers, t: "Graphic Design", d: "Brand-led design — typography, illustration, photography direction." },
            { icon: Box, t: "Stock Packaging", d: "Curated catalogue of premium bottles, cartons and films ready to ship." },
            { icon: Ruler, t: "Custom Molds", d: "Tooling for unique bottle, cap and pack architectures." },
            { icon: BadgeCheck, t: "Packaging Quality", d: "Drop-test, leak-test, light-stability and consumer-handling validation." },
            { icon: ShieldCheck, t: "Vetted Vendors", d: "Audited paperboard, glass and resin partners with documented compliance." },
            { icon: Palette, t: "Print & Finish", d: "Foiling, embossing, soft-touch, spot UV and decorated glass." },
          ].map((c) => (
            <Reveal key={c.t}>
              <div className="bg-background p-10">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary"><c.icon className="h-5 w-5" /></div>
                <h3 className="mt-8 font-display text-lg font-semibold tracking-tight">{c.t}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <CTASection title="Design packaging that earns the shelf." />
  </SiteLayout>
);

export default CustomPackaging;
