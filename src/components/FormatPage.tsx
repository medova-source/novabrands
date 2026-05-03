import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { Factory, Sliders, Package as PackageIcon, ShieldCheck } from "lucide-react";

export interface FormatPageData {
  format: string;
  tagline: string;
  description: string;
  heroImage: string;
  customization: { label: string; description: string }[];
  packaging: string[];
  qualityNote: string;
}

const FormatPage = ({ data }: { data: FormatPageData }) => (
  <SiteLayout>
    <PageHero
      eyebrow={`Manufacturing · ${data.format}`}
      title={<>{data.format} Manufacturing. <br/><span className="text-muted-foreground">{data.tagline}</span></>}
      description={data.description}
      image={data.heroImage}
    />

    {/* CUSTOMIZATION */}
    <section className="bg-background">
      <div className="container-x py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Reveal><div className="eyebrow">Customization options</div></Reveal>
            <Reveal delay={0.1}><h2 className="display-2 mt-6">Build the {data.format.toLowerCase()} only your brand could make.</h2></Reveal>
          </div>
        </div>
        <div className="mt-16 grid gap-px bg-[hsl(var(--rule))] md:grid-cols-2 lg:grid-cols-4">
          {data.customization.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.06}>
              <div className="bg-background p-10">
                <div className="num-tag">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-6 font-display text-lg font-semibold tracking-tight">{c.label}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">{c.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 3 FEATURES */}
    <section className="border-t border-[hsl(var(--rule))] bg-secondary">
      <div className="container-x py-24 md:py-32">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Factory, t: "Large Production Capacity", d: "High throughput lines built to scale from launch quantities into millions of units." },
            { icon: Sliders, t: "Full Customization", d: "Every variable, including formula, sensory, dosage and format, engineered to your spec." },
            { icon: PackageIcon, t: "Custom Packaging", d: "Internal packaging studio designs, sources and runs your primary and secondary." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 0.08}>
              <div className="card-sharp h-full p-8">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-background"><c.icon className="h-5 w-5" /></div>
                <h3 className="mt-8 font-display text-xl font-semibold tracking-tight">{c.t}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* QUALITY */}
    <section className="border-t border-[hsl(var(--rule))] bg-background">
      <div className="container-x grid gap-12 py-24 md:grid-cols-12 md:py-32">
        <Reveal className="md:col-span-5">
          <div className="eyebrow">Quality</div>
          <h2 className="display-2 mt-6">Tested. Documented. Released.</h2>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-7 md:pl-8 lg:pl-16">
          <p className="text-[15px] leading-relaxed text-muted-foreground">{data.qualityNote}</p>
          <div className="mt-10 grid grid-cols-2 gap-6">
            {["Identity testing", "Potency assays", "Microbiological", "Heavy metals", "Stability program", "Sensory QC"].map((q) => (
              <div key={q} className="flex items-center gap-3 border-t border-[hsl(var(--rule))] pt-4 text-[14px]">
                <ShieldCheck className="h-4 w-4 text-[hsl(var(--steel))]" />{q}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    {/* PACKAGING OPTIONS */}
    <section className="border-t border-[hsl(var(--rule))] bg-secondary">
      <div className="container-x py-24 md:py-32">
        <Reveal><div className="eyebrow">Packaging options</div></Reveal>
        <Reveal delay={0.1}><h2 className="display-2 mt-6 max-w-3xl">Primary, secondary, and everything in between.</h2></Reveal>
        <div className="mt-12 flex flex-wrap gap-3">
          {data.packaging.map((p, i) => (
            <Reveal key={p} delay={i * 0.04}>
              <div className="rounded-full border border-[hsl(var(--rule))] bg-card px-5 py-2.5 text-[13px] font-medium">{p}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <CTASection title={`Build your next ${data.format.toLowerCase()}.`} />
  </SiteLayout>
);

export default FormatPage;
