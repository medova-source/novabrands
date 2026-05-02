import Reveal from "./Reveal";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface Cat {
  to: string;
  title: string;
  description: string;
  image: string;
}

const CategoryGrid = ({ items, eyebrow, title }: { items: Cat[]; eyebrow?: string; title?: string }) => (
  <section className="border-t border-[hsl(var(--rule))] bg-secondary">
    <div className="container-x py-24 md:py-32">
      {(eyebrow || title) && (
        <div className="mb-16 grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            {eyebrow && <Reveal><div className="eyebrow">{eyebrow}</div></Reveal>}
            {title && <Reveal delay={0.1}><h2 className="display-2 mt-6">{title}</h2></Reveal>}
          </div>
        </div>
      )}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <Reveal key={item.to} delay={i * 0.06}>
            <Link to={item.to} className="card-sharp group block overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
              </div>
              <div className="flex items-start justify-between gap-4 p-6">
                <div>
                  <div className="font-display text-xl font-semibold tracking-tight">{item.title}</div>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
                <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default CategoryGrid;
