import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title={<>Get in touch. <br/><span className="text-muted-foreground">We're here to help.</span></>}
        description="Reach out to us via email and our team will respond within one business day."
      />

      <section className="border-t border-[hsl(var(--rule))] bg-background">
        <div className="container-x py-24 md:py-32 flex justify-center">
          <Reveal className="max-w-xl w-full">
            <div className="eyebrow text-center">Direct line</div>
            <h2 className="display-3 mt-6 text-center">Talk to a real operator.</h2>
            <div className="mt-16 flex flex-col items-center gap-4 border-t border-[hsl(var(--rule))] pt-12">
              <Mail className="h-6 w-6 text-[hsl(var(--steel))]" />
              <div className="text-center">
                <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Email</div>
                <a href="mailto:Novabrandsatl@gmail.com" className="mt-2 block font-display text-2xl md:text-3xl font-semibold tracking-tight hover:text-primary transition-colors">
                  Novabrandsatl@gmail.com
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Contact;
