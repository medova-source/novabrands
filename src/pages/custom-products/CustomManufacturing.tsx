import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import ProcessGrid from "@/components/ProcessGrid";
import lab from "@/assets/rd-lab.jpg";
import production from "@/assets/production-line.jpg";

const CustomManufacturing = () => (
  <SiteLayout>
    <PageHero
      eyebrow="Custom Products · Manufacturing"
      title={<>Custom Product Manufacturing. <br/><span className="text-muted-foreground">Match a formula or build a new one.</span></>}
      description="Whether you're recreating an existing product, scaling a beloved formula, or engineering something nobody has seen, Nova Brands runs it from start to finish."
    />

    <section className="border-t border-[hsl(var(--rule))] bg-background">
      <div className="container-x grid gap-12 py-24 md:grid-cols-12 md:py-32">
        <Reveal className="md:col-span-6">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl">
            <img src={lab} alt="" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </Reveal>
        <div className="md:col-span-6 md:pl-8 lg:pl-16 md:self-center">
          <Reveal><div className="eyebrow">Section 01 : Formula Identification & Approval</div></Reveal>
          <Reveal delay={0.1}><h2 className="display-2 mt-6">Three ways in. One quality bar out.</h2></Reveal>
          <div className="mt-10 grid gap-px bg-[hsl(var(--rule))]">
            {[
              { t: "New Product Development", d: "Build a formula from a clean sheet, with actives, sensory and stability locked." },
              { t: "Match Existing Formula", d: "Reverse engineer, find alternative sources and optimize an existing SKU." },
              { t: "Commercialization & Quality Approval", d: "Spec lock, regulatory review and master batch record approval." },
            ].map((it, i) => (
              <Reveal key={it.t} delay={0.15 + i * 0.05}>
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

    <ProcessGrid
      eyebrow="Section 02 : Manufacturing Process"
      title="A repeatable production system, built for premium brands."
      steps={[
        { num: "01", title: "Material Sourcing", description: "Vetted multiple source supply chain with identity, potency and contaminant testing." },
        { num: "02", title: "Product Manufacturing", description: "GMP controlled production with in process QC and traceable batch records." },
        { num: "03", title: "Co Packing", description: "Fills, labeling, secondary packaging, kitting and gift assembly." },
        { num: "04", title: "Quality Verification", description: "Independent finished testing, COA generation and release to ship approval." },
      ]}
    />

    <section className="border-t border-[hsl(var(--rule))]">
      <div className="aspect-[21/9]">
        <img src={production} alt="Nova Brands production line" loading="lazy" className="h-full w-full object-cover" />
      </div>
    </section>

    <CTASection title="Bring us your formula. We'll bring the rigor." />
  </SiteLayout>
);

export default CustomManufacturing;
