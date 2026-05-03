import { useState } from "react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell us a bit more (10+ chars)").max(2000),
});

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    toast({ title: "Message received", description: "Our team will respond within one business day." });
    setForm({ name: "", email: "", company: "", message: "" });
  };

  const field = (k: keyof typeof form) => ({
    value: form[k],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [k]: e.target.value }),
  });

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title={<>Start your project. <br/><span className="text-muted-foreground">We'll take it from here.</span></>}
        description="Tell us about your formula, packaging and timeline. A senior team member, not a sales rep, will respond within one business day."
      />

      <section className="border-t border-[hsl(var(--rule))] bg-background">
        <div className="container-x grid gap-16 py-24 md:grid-cols-12 md:py-32">
          <Reveal className="md:col-span-5">
            <div className="eyebrow">Direct lines</div>
            <h2 className="display-3 mt-6">Talk to a real operator.</h2>
            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4 border-t border-[hsl(var(--rule))] pt-6">
                <Mail className="mt-1 h-4 w-4 text-[hsl(var(--steel))]" />
                <div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Email</div>
                  <a href="mailto:hello@novabrands.com" className="mt-1 block font-display text-lg font-semibold tracking-tight">hello@novabrands.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4 border-t border-[hsl(var(--rule))] pt-6">
                <Phone className="mt-1 h-4 w-4 text-[hsl(var(--steel))]" />
                <div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Phone</div>
                  <a href="tel:+18885550142" className="mt-1 block font-display text-lg font-semibold tracking-tight">+1 (888) 555-0142</a>
                </div>
              </div>
              <div className="flex items-start gap-4 border-t border-[hsl(var(--rule))] pt-6">
                <MapPin className="mt-1 h-4 w-4 text-[hsl(var(--steel))]" />
                <div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Facility</div>
                  <div className="mt-1 font-display text-lg font-semibold tracking-tight">1200 Industrial Pkwy<br/>Salt Lake City, UT 84104</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-7">
            <form onSubmit={handleSubmit} className="rounded-2xl border border-[hsl(var(--rule))] bg-card p-8 md:p-10">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Name</label>
                  <input {...field("name")} className="mt-2 w-full border-b border-[hsl(var(--rule))] bg-transparent py-3 text-base outline-none focus:border-foreground" placeholder="Your full name" maxLength={100} />
                  {errors.name && <p className="mt-2 text-xs text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Email</label>
                  <input {...field("email")} type="email" className="mt-2 w-full border-b border-[hsl(var(--rule))] bg-transparent py-3 text-base outline-none focus:border-foreground" placeholder="you@brand.com" maxLength={255} />
                  {errors.email && <p className="mt-2 text-xs text-destructive">{errors.email}</p>}
                </div>
                <div className="md:col-span-2">
                  <label className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Company</label>
                  <input {...field("company")} className="mt-2 w-full border-b border-[hsl(var(--rule))] bg-transparent py-3 text-base outline-none focus:border-foreground" placeholder="Optional" maxLength={120} />
                </div>
                <div className="md:col-span-2">
                  <label className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Project details</label>
                  <textarea {...field("message")} rows={5} className="mt-2 w-full resize-none border-b border-[hsl(var(--rule))] bg-transparent py-3 text-base outline-none focus:border-foreground" placeholder="Format, ingredients, target launch, MOQ…" maxLength={2000} />
                  {errors.message && <p className="mt-2 text-xs text-destructive">{errors.message}</p>}
                </div>
              </div>
              <button type="submit" disabled={submitting} className="btn-primary mt-8 disabled:opacity-60">
                {submitting ? "Sending…" : "Start Your Project"} <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[hsl(var(--rule))]">
        <iframe
          title="Nova Brands facility map"
          className="h-[420px] w-full grayscale"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-112.0%2C40.74%2C-111.85%2C40.80&layer=mapnik"
          loading="lazy"
        />
      </section>
    </SiteLayout>
  );
};

export default Contact;
