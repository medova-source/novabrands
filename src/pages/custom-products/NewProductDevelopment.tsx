import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import gummies from "@/assets/cat-gummies.jpg";
import capsules from "@/assets/cat-capsules.jpg";
import liquids from "@/assets/cat-liquids.jpg";
import tablets from "@/assets/cat-tablets.jpg";
import powders from "@/assets/cat-powders.jpg";
import lab from "@/assets/rd-lab.jpg";
import packaging from "@/assets/packaging.jpg";
import production from "@/assets/production-line.jpg";

const formats = [
  { label: "Gummies", img: gummies, desc: "Work with our team to create a unique gummy, formulated exactly to your specifications and efficacy goals." },
  { label: "Capsules", img: capsules, desc: "Develop premium capsules with custom ingredient blends, engineered for optimal absorption and stability." },
  { label: "Liquids", img: liquids, desc: "Create potent liquid formulas and tinctures with exceptional flavor profiles and rapid delivery systems." },
  { label: "Tablets", img: tablets, desc: "Manufacture precisely dosed tablets available in chewable, coated, effervescent, and layered formats." },
  { label: "Powders", img: powders, desc: "Formulate highly soluble powders with custom flavoring, perfect for stick packs, jars, and bulk formats." },
  { label: "& More", img: production, desc: "Explore specialized delivery systems and innovative manufacturing solutions tailored to your unique brand." },
];

const ImageBlock = ({ img, eyebrow, title, items, reverse = false }: { img: string; eyebrow: string; title: string; items: { t: string; d: string }[]; reverse?: boolean }) => (
  <section className="border-t border-[hsl(var(--rule))] bg-background">
    <div className="container-x grid gap-12 py-24 md:grid-cols-12 md:py-32">
      <Reveal className={`md:col-span-6 ${reverse ? 'md:order-2' : ''}`}>
        <div className="aspect-[4/5] overflow-hidden rounded-2xl">
          <img src={img} alt={title} loading="lazy" className="h-full w-full object-cover" />
        </div>
      </Reveal>
      <div className={`md:col-span-6 md:self-center ${reverse ? 'md:order-1 md:pr-8 lg:pr-16' : 'md:pl-8 lg:pl-16'}`}>
        <Reveal><div className="eyebrow">{eyebrow}</div></Reveal>
        <Reveal delay={0.1}><h2 className="display-2 mt-6">{title}</h2></Reveal>
        <div className="mt-10 grid gap-px bg-[hsl(var(--rule))]">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={0.1 + i * 0.05}>
              <div className="bg-background py-6">
                <div className="flex items-baseline gap-4">
                  <span className="num-tag">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <div className="font-display text-lg font-semibold tracking-tight">{it.t}</div>
                    <div className="mt-1 text-[14px] leading-relaxed text-muted-foreground">{it.d}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const NewProductDevelopment = () => (
  <SiteLayout>
    <PageHero
      eyebrow="Custom Products · NPD"
      title={<>New Product Development. <br/><span className="text-muted-foreground">From idea to icon.</span></>}
      description="A complete studio for founders building the next generation of wellness brands. Formula, format, packaging, proof, all built and shipped under one accountable team."
    />

    {/* Section 1: Formats */}
    <section className="border-t border-[hsl(var(--rule))] bg-secondary">
      <div className="container-x py-24 md:py-32">
        <Reveal><div className="eyebrow">Section 01 : Product Formats</div></Reveal>
        <Reveal delay={0.1}><h2 className="display-2 mt-6 max-w-3xl">Pick a format. We'll build the science.</h2></Reveal>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {formats.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.05}>
              <div className="card-sharp group overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img src={f.img} alt={f.label} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="font-display text-xl font-semibold tracking-tight">{f.label}</div>
                  <div className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{f.desc}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <ImageBlock
      img={lab}
      eyebrow="Section 02 : Development Process"
      title="A scientific path from concept to confidence."
      items={[
        { t: "Ideation & Formulation", d: "Brief, ingredient strategy, claim mapping and target consumer alignment." },
        { t: "Research & Development", d: "PhD led bench work, including actives, excipients, sensory and stability." },
        { t: "Sampling & Iteration", d: "Labeled samples, structured feedback loops, rapid revision cycles." },
        { t: "Quality Approval", d: "Spec lock, master batch record, regulatory & label review." },
      ]}
    />

    <ImageBlock
      img={packaging}
      eyebrow="Section 03 : Product Commercialization"
      title="Where the brand becomes a product."
      reverse={true}
      items={[
        { t: "Packaging Ideation & Design", d: "Studio led structural and graphic design built around your brand world." },
        { t: "Proof Review & Design Approval", d: "Accurate press proofs, dieline validation and shelf impact review." },
        { t: "Final Product Review", d: "First article inspection, sensory approval, regulatory check." },
        { t: "Product Completion", d: "Approved master, ready for full scale manufacturing." },
      ]}
    />

    <ImageBlock
      img={production}
      eyebrow="Section 04 : Product Manufacturing"
      title="One facility, the whole production stack."
      items={[
        { t: "Raw & Packaging Material Sourcing", d: "Vetted, multiple source supply chain with full identity testing." },
        { t: "Formula Manufacturing", d: "GMP runs with in process verification and traceable batch records." },
        { t: "Co Packing", d: "Fills, secondary packaging, kitting, gift sets and bundles." },
        { t: "Fulfillment", d: "Direct hand off to our integrated 3PL, with no between facility transfers." },
      ]}
    />

    <CTASection title="Have an idea? Let's prototype it." />
  </SiteLayout>
);

export default NewProductDevelopment;
