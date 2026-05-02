import Reveal from "./Reveal";

interface Step {
  num: string;
  title: string;
  description: string;
}

const ProcessGrid = ({ eyebrow, title, steps }: { eyebrow: string; title: string; steps: Step[] }) => (
  <section className="border-t border-[hsl(var(--rule))] bg-background">
    <div className="container-x py-24 md:py-32">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <Reveal>
            <div className="eyebrow">{eyebrow}</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-2 mt-6">{title}</h2>
          </Reveal>
        </div>
        <div className="md:col-span-7">
          <div className="grid sm:grid-cols-2">
            {steps.map((s, i) => (
              <Reveal key={s.num} delay={i * 0.08}>
                <div className="group relative border-t border-[hsl(var(--rule))] py-8 sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:pr-8 sm:[&:nth-child(even)]:pl-8">
                  <div className="num-tag">{s.num}</div>
                  <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">{s.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProcessGrid;
