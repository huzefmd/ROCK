import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Membership — Rock Gym" },
      { name: "description", content: "Rock Gym memberships from $29/mo. No lock-ins. 7-day free trial on every plan." },
      { property: "og:title", content: "Membership — Rock Gym" },
      { property: "og:description", content: "Starter, Pro and Elite plans. Cancel anytime. 7-day free trial." },
    ],
  }),
  component: PricingPage,
});

const PLANS = [
  { name: "Starter", price: "$29", period: "/mo", perks: ["Access to open gym", "2 group classes / week", "Locker access", "Mobile app"], featured: false },
  { name: "Pro", price: "$59", period: "/mo", perks: ["Unlimited open gym", "Unlimited group classes", "1 PT session / month", "Nutrition guide", "Guest passes"], featured: true },
  { name: "Elite", price: "$119", period: "/mo", perks: ["Everything in Pro", "4 PT sessions / month", "Recovery lounge access", "Custom program", "InBody scans"], featured: false },
];

const TESTIMONIALS = [
  { name: "Rahul K.", quote: "Dropped 14kg in 6 months. The coaches actually give a damn.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80&auto=format&fit=crop" },
  { name: "Meera S.", quote: "The energy in HIIT class is unreal. I look forward to my 6am alarm now.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&auto=format&fit=crop" },
  { name: "James O.", quote: "Deadlifted 200kg for the first time last week. Marcus programmed every step.", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80&auto=format&fit=crop" },
];

function PricingPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-brand font-semibold">Membership</span>
          <h1 className="mt-3 font-display text-6xl sm:text-8xl leading-none">CHOOSE YOUR PLAN</h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">No lock-ins. Cancel anytime. Every plan includes a 7-day free trial.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLANS.map((p) => (
            <div key={p.name} className={`relative rounded-2xl p-8 border ${p.featured ? "bg-gradient-brand text-brand-foreground border-transparent shadow-glow md:scale-[1.03]" : "bg-surface border-border"}`}>
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-background text-brand px-3 py-1 text-[10px] font-bold uppercase tracking-widest">Most Popular</span>
              )}
              <h3 className="font-display text-3xl">{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-6xl">{p.price}</span>
                <span className={p.featured ? "text-brand-foreground/70" : "text-muted-foreground"}>{p.period}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2 text-sm">
                    <Check className={`h-4 w-4 mt-0.5 shrink-0 ${p.featured ? "text-brand-foreground" : "text-brand"}`} />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full rounded-md py-3 font-bold uppercase tracking-wider text-sm transition ${p.featured ? "bg-background text-foreground hover:opacity-90" : "bg-brand text-brand-foreground hover:opacity-90"}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-brand font-semibold">Real Stories</span>
            <h2 className="mt-3 font-display text-5xl sm:text-6xl leading-none">FROM OUR PEOPLE</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="rounded-xl bg-surface p-8 border border-border">
                <blockquote className="text-lg leading-relaxed">"{t.quote}"</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <img src={t.img} alt={t.name} className="h-11 w-11 rounded-full object-cover" loading="lazy" />
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Rock Gym Member</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
