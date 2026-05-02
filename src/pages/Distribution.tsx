import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { Truck, Boxes, ShoppingCart, BarChart3, Cog, Plug } from "lucide-react";
import warehouse from "@/assets/warehouse.jpg";

const Distribution = () => (
  <SiteLayout>
    <PageHero
      eyebrow="3PL Distribution"
      title={<>From our floor <br/><span className="text-muted-foreground">to their doorstep.</span></>}
      description="Manufacturing and fulfillment under the same roof. Lower handoffs. Faster ship times. Real-time visibility from raw material to last-mile."
      image={warehouse}
    />

    {/* CORE SERVICES */}
    <section className="bg-background">
      <div className="container-x py-24 md:py-32">
        <Reveal><div className="eyebrow">Core services</div></Reveal>
        <Reveal delay={0.1}><h2 className="display-2 mt-6 max-w-3xl">A fulfillment stack designed for modern brands.</h2></Reveal>

        <div className="mt-16 grid gap-px bg-[hsl(var(--rule))] md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Truck, t: "Pick, Pack & Ship", d: "SLA-backed fulfillment with branded inserts, custom poly-mailers and gift-ready presentation." },
            { icon: Boxes, t: "Inventory Management", d: "Lot-tracked, expiry-aware inventory with real-time stock-on-hand and re-order alerts." },
            { icon: ShoppingCart, t: "Omnichannel D2C", d: "Same-day cutoffs from Shopify, Amazon FBM, TikTok Shop and your subscription stack." },
            { icon: Boxes, t: "Wholesale B2B", d: "Pallet-grade picking, EDI-compatible workflows, retailer routing-guide compliance." },
          ].map((s) => (
            <Reveal key={s.t}>
              <div className="bg-background p-10">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary"><s.icon className="h-5 w-5" /></div>
                <h3 className="mt-8 font-display text-lg font-semibold tracking-tight">{s.t}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* DASHBOARD MOCK */}
    <section className="border-t border-[hsl(var(--rule))] bg-secondary">
      <div className="container-x grid gap-12 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-5">
          <Reveal><div className="eyebrow">Live tracking & analytics</div></Reveal>
          <Reveal delay={0.1}><h2 className="display-2 mt-6">Visibility, not vibes.</h2></Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
              Every order, every carrier, every dollar of inventory — surfaced in a single dashboard with the metrics that actually move your P&L.
            </p>
          </Reveal>
          <ul className="mt-10 space-y-4 text-[14px]">
            {["Order tracking dashboards", "Carrier performance scoring", "Aging inventory & sell-through", "Per-SKU shipping cost analysis"].map((i) => (
              <li key={i} className="flex items-center gap-3 border-t border-[hsl(var(--rule))] pt-4">
                <BarChart3 className="h-4 w-4 text-[hsl(var(--steel))]" />{i}
              </li>
            ))}
          </ul>
        </div>

        <Reveal delay={0.15} className="md:col-span-7">
          <div className="rounded-2xl border border-[hsl(var(--rule))] bg-card p-6 shadow-[var(--shadow-card)]">
            <div className="flex items-center justify-between border-b border-[hsl(var(--rule))] pb-4">
              <div className="font-display text-sm font-semibold tracking-tight">Fulfillment overview</div>
              <div className="num-tag">LIVE</div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                ["98.7%", "On-time"],
                ["1.2 hrs", "Pick-to-ship"],
                ["0.4%", "Error rate"],
              ].map(([n, l]) => (
                <div key={l} className="rounded-xl bg-secondary p-4">
                  <div className="font-display text-2xl font-semibold tracking-tight">{n}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 h-32 rounded-xl bg-secondary p-4">
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Daily orders · 30d</div>
              <div className="mt-3 flex h-20 items-end gap-1.5">
                {Array.from({ length: 30 }).map((_, i) => (
                  <div key={i} className="flex-1 rounded-t bg-ink/80" style={{ height: `${30 + Math.sin(i / 2) * 25 + (i % 5) * 4}%` }} />
                ))}
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[["UPS", "97.4%"], ["USPS", "94.1%"], ["FedEx", "96.8%"], ["DHL", "92.0%"]].map(([c, s]) => (
                <div key={c} className="flex items-center justify-between rounded-xl border border-[hsl(var(--rule))] px-4 py-3 text-sm">
                  <span className="font-medium">{c}</span><span className="text-muted-foreground">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* AUTOMATION + INTEGRATIONS */}
    <section className="border-t border-[hsl(var(--rule))] bg-background">
      <div className="container-x grid gap-16 py-24 md:grid-cols-2 md:py-32">
        <Reveal>
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary"><Cog className="h-5 w-5" /></div>
          <h3 className="display-3 mt-8">Automation Rules</h3>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Smart fulfillment logic that routes by SKU, geography, carrier cost and inventory state. Set it once — your operations run themselves.
          </p>
          <ul className="mt-8 space-y-2 text-[14px] text-muted-foreground">
            <li>· Cheapest-rate carrier selection</li>
            <li>· FEFO / FIFO lot rules</li>
            <li>· Subscription batching & gifting flows</li>
            <li>· Hold/release on fraud signals</li>
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary"><Plug className="h-5 w-5" /></div>
          <h3 className="display-3 mt-8">Integration Suite</h3>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Native connections to the platforms you already sell on — no custom dev work, no brittle middleware.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {["Shopify", "Amazon", "TikTok Shop", "Walmart", "Faire", "Recharge", "Klaviyo", "NetSuite", "ShipStation"].map((p) => (
              <div key={p} className="rounded-xl border border-[hsl(var(--rule))] px-4 py-3 text-center text-[13px] font-medium">{p}</div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    <CTASection title="Move product faster, with less friction." />
  </SiteLayout>
);

export default Distribution;
