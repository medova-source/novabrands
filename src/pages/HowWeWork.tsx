import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";

const phases = [
  { num: "01", title: "Project Kickoff", desc: "We meet your team, align on brand vision, target consumer, regulatory pathway and commercial goals. You leave the kickoff with a single named operator." },
  { num: "02", title: "Product Evaluation", desc: "Our formulators audit your concept — ingredient feasibility, claim substantiation, format fit, COGS targets and time-to-market." },
  { num: "03", title: "Feasibility Analysis", desc: "We model raw material availability, regulatory constraints, packaging architecture and shelf-life expectations against your timeline." },
  { num: "04", title: "R&D & Sampling", desc: "PhD-led formulation, sensory iteration and stability work. You receive labeled samples and an open dialogue with the bench team." },
  { num: "05", title: "Manufacturing Timeline", desc: "An average 8–10 week run from approved formula and packaging to palletized finished goods, with traceable batch documentation." },
  { num: "06", title: "Full-Cycle Production & Delivery", desc: "Raw material sourcing, manufacturing, co-packing, finished QC, warehousing and 3PL fulfillment — all under one roof." },
];

const HowWeWork = () => (
  <SiteLayout>
    <PageHero
      eyebrow="How we work"
      title={<>A clear process. <br/><span className="text-muted-foreground">A predictable timeline.</span></>}
      description="Manufacturing should not be a black box. Six phases, one accountable team, and a transparent timeline from the day you brief us to the day your product ships."
    />

    {/* TIMELINE / STEPPER */}
    <section className="border-t border-[hsl(var(--rule))] bg-background">
      <div className="container-x py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal><div className="eyebrow">The Nova process</div></Reveal>
            <Reveal delay={0.1}>
              <h2 className="display-2 mt-6">From whiteboard to pallet, in six phases.</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
                Every engagement runs on the same operating cadence. You always know what we're doing, what's next, and what we need from you.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-8">
            <ol className="relative">
              {phases.map((p, i) => (
                <Reveal key={p.num} delay={i * 0.05}>
                  <li className="relative grid grid-cols-[auto_1fr] gap-6 border-t border-[hsl(var(--rule))] py-10 first:border-t-0 first:pt-0">
                    <div className="num-tag pt-1">{p.num}</div>
                    <div>
                      <h3 className="font-display text-2xl font-semibold tracking-tight">{p.title}</h3>
                      <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted-foreground">{p.desc}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>

    {/* TIMELINE BAR */}
    <section className="border-t border-[hsl(var(--rule))] bg-secondary">
      <div className="container-x py-24 md:py-32">
        <Reveal><div className="eyebrow">Standard timeline</div></Reveal>
        <Reveal delay={0.1}><h2 className="display-2 mt-6">8–10 weeks, kickoff to commercial.</h2></Reveal>

        <div className="mt-16 overflow-hidden rounded-2xl border border-[hsl(var(--rule))] bg-card">
          <div className="grid grid-cols-5 text-center text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {["Wk 1", "Wk 2–3", "Wk 4–5", "Wk 6–8", "Wk 9–10"].map((w) => (
              <div key={w} className="border-r border-[hsl(var(--rule))] py-4 last:border-r-0">{w}</div>
            ))}
          </div>
          <div className="grid grid-cols-5 border-t border-[hsl(var(--rule))]">
            {[
              ["Kickoff", "Brief & alignment"],
              ["R&D", "Formulation"],
              ["Sampling", "Sensory & stability"],
              ["Production", "Manufacturing run"],
              ["Fulfillment", "QC, pack, ship"],
            ].map(([t, s]) => (
              <div key={t} className="border-r border-[hsl(var(--rule))] p-6 last:border-r-0">
                <div className="font-display text-lg font-semibold tracking-tight">{t}</div>
                <div className="mt-1 text-[13px] text-muted-foreground">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <CTASection title="Ready when you are." />
  </SiteLayout>
);

export default HowWeWork;
