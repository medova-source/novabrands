import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { ShieldCheck, Award, Globe2, FlaskConical } from "lucide-react";
import facility from "@/assets/hero-facility.jpg";
import lab from "@/assets/rd-lab.jpg";

const About = () => (
  <SiteLayout>
    <PageHero
      eyebrow="About Nova Brands"
      title={
        <>
          Built by operators. <br />
          <span className="text-muted-foreground">Trusted by founders.</span>
        </>
      }
      description="Nova Brands was founded on a simple belief: the brands shaping the future of wellness deserve a manufacturing partner that moves at their pace and holds itself to a higher standard. We are that partner."
    />

    <section className="border-t border-[hsl(var(--rule))] bg-background">
      <div className="container-x grid gap-12 py-24 md:grid-cols-12 md:py-32">
        <Reveal className="md:col-span-5">
          <div className="eyebrow">Our story</div>
          <h2 className="display-2 mt-6">A vertical platform, not a vendor.</h2>
        </Reveal>
        <Reveal delay={0.15} className="md:col-span-7 md:pl-8 lg:pl-16">
          <div className="space-y-5 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              Most contract manufacturers stitch together suppliers, packers and
              warehouses to move a product to market. The result: friction,
              finger-pointing and lost weeks. We took the opposite approach.
            </p>
            <p>
              Under one roof, Nova Brands operates an FDA-registered GMP
              facility, an in-house R&D lab, a packaging design studio and an
              integrated 3PL. One team owns your timeline from white-board to
              consumer.
            </p>
            <p>
              The companies who build with us are uncompromising about quality,
              fanatical about brand, and impatient with the pace of legacy
              manufacturing. We're built for them.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="border-t border-[hsl(var(--rule))] bg-secondary">
      <div className="container-x grid gap-10 py-24 md:grid-cols-2 md:py-32">
        <Reveal>
          <div className="rounded-2xl border border-[hsl(var(--rule))] bg-card p-10">
            <div className="num-tag">— Mission</div>
            <h3 className="display-3 mt-4">Make great products possible.</h3>
            <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
              We exist to lower the cost of building a beloved wellness brand —
              by collapsing the distance between an idea and a product on a
              shelf.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-[hsl(var(--rule))] bg-card p-10">
            <div className="num-tag">— Vision</div>
            <h3 className="display-3 mt-4">
              The default partner for the next 1,000 brands.
            </h3>
            <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
              A manufacturing platform so reliable, transparent and
              quality-obsessed that founders never have to think about it twice.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="border-t border-[hsl(var(--rule))] bg-background">
      <div className="container-x py-24 md:py-32">
        <Reveal>
          <div className="eyebrow">Why Nova Brands</div>
          <h2 className="display-2 mt-6 max-w-3xl">
            Five reasons the most ambitious brands keep coming back.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-px bg-[hsl(var(--rule))] md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              t: "Quality without exception",
              d: "Audited cGMP, traceable batch records, third-party finished testing on every run.",
            },
            {
              icon: FlaskConical,
              t: "Real R&D in-house",
              d: "PhD-led formulation, sensory labs and stability suites — not outsourced contracts.",
            },
            {
              icon: Globe2,
              t: "Vertical operations",
              d: "Manufacturing, packaging and 3PL under one accountable team.",
            },
            {
              icon: Award,
              t: "Founder-friendly MOQs",
              d: "Designed for ambitious launches — and ready to scale into millions of units.",
            },
            {
              icon: ShieldCheck,
              t: "Vetted supply chain",
              d: "Multi-source ingredient sourcing with rigorous identity, potency and contaminant testing.",
            },
            {
              icon: Globe2,
              t: "Speed as a feature",
              d: "8–10 week timelines from kickoff to commercial — without cutting corners.",
            },
          ].map((b) => (
            <Reveal key={b.t}>
              <div className="bg-background p-10">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary">
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-8 font-display text-lg font-semibold tracking-tight">
                  {b.t}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                  {b.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="border-t border-[hsl(var(--rule))]">
      <div className="grid md:grid-cols-2">
        <div className="aspect-[4/3] md:aspect-auto">
          <img
            src={facility}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="aspect-[4/3] md:aspect-auto">
          <img
            src={lab}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <section className="border-t border-[hsl(var(--rule))] bg-background">
      <div className="container-x py-24 md:py-32">
        <Reveal>
          <div className="eyebrow">Trust & Certifications</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="display-2 mt-6 max-w-3xl">
            Audited, registered, and accountable.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "cGMP 21 CFR 111",
            "NSF Independently Audited",
            "Organic & Non-GMO Capable",
          ].map((c) => (
            <Reveal key={c}>
              <div className="rounded-2xl border border-[hsl(var(--rule))] bg-card p-7">
                <ShieldCheck className="h-5 w-5 text-[hsl(var(--steel))]" />
                <div className="mt-6 font-display text-base font-semibold tracking-tight">
                  {c}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <CTASection title="Build what you've been imagining." />
  </SiteLayout>
);

export default About;
