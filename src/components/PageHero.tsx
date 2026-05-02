import { ReactNode } from "react";
import Reveal from "./Reveal";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  image?: string;
}

const PageHero = ({ eyebrow, title, description, image }: PageHeroProps) => (
  <section className="relative overflow-hidden bg-secondary pt-32 md:pt-40">
    <div className="container-x pb-16 md:pb-24">
      <Reveal>
        <div className="eyebrow">{eyebrow}</div>
      </Reveal>
      <Reveal delay={0.1}>
        <h1 className="display-1 mt-6 max-w-5xl">{title}</h1>
      </Reveal>
      {description && (
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">{description}</p>
        </Reveal>
      )}
    </div>
    {image && (
      <Reveal delay={0.3}>
        <div className="container-x pb-16">
          <div className="aspect-[21/9] overflow-hidden rounded-2xl border border-[hsl(var(--rule))]">
            <img src={image} alt="" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </Reveal>
    )}
  </section>
);

export default PageHero;
