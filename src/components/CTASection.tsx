import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const CTASection = ({
  eyebrow = "Ready to begin",
  title = "Let's engineer your next product.",
  description = "Tell us about your formula, packaging vision, and timeline. Our team will respond within one business day.",
}: { eyebrow?: string; title?: string; description?: string }) => (
  <section className="bg-ink text-white">
    <div className="container-x py-24 md:py-36">
      <div className="grid gap-12 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <Reveal>
            <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/40">— {eyebrow}</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-2 mt-6 max-w-3xl text-white">{title}</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/60">{description}</p>
          </Reveal>
        </div>
        <Reveal delay={0.3} className="md:col-span-4 md:text-right">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-[hsl(var(--primary))] px-8 py-4 text-sm font-medium text-white shadow-[0_8px_30px_rgb(0,156,254,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgb(0,156,254,0.4)]"
          >
            Start Your Project <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </div>
  </section>
);

export default CTASection;
