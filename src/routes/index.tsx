import { createFileRoute, Link } from "@tanstack/react-router";
import { Flame, Zap, ArrowRight, Dumbbell, HeartPulse, Trophy } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const HIGHLIGHTS = [
  { icon: Dumbbell, name: "Strength", desc: "Build real power with compound lifts." },
  { icon: Flame, name: "HIIT", desc: "45 min. Torch fat. Feel alive." },
  { icon: Trophy, name: "CrossFit", desc: "Varied functional movement, high intensity." },
  { icon: HeartPulse, name: "Yoga", desc: "Restore, breathe, recover, repeat." },
];

function Index() {
  return (
    <div className="text-foreground">
      {/* HERO */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay muted loop playsInline
          poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80&auto=format&fit=crop"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-woman-doing-weights-at-the-gym-4823-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 py-24 w-full">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/15 border border-brand/40 px-3 py-1 text-xs font-semibold tracking-widest text-brand uppercase">
              <Flame className="h-3.5 w-3.5" /> 30% off first month
            </span>
            <h1 className="mt-6 font-display text-6xl sm:text-8xl lg:text-9xl leading-[0.9]">
              TRAIN HARD.<br />
              <span className="text-gradient-brand">LIVE STRONG.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              World-class equipment, elite coaches, and a community that pushes you further — every single rep.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/pricing" className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3.5 text-base font-bold text-brand-foreground hover:opacity-90 transition shadow-glow">
                Start Your Journey <Zap className="h-4 w-4" />
              </Link>
              <Link to="/classes" className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/80 backdrop-blur px-6 py-3.5 text-base font-semibold hover:bg-surface transition">
                Explore Classes
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { n: "12K+", l: "Active Members" },
                { n: "40+", l: "Weekly Classes" },
                { n: "25", l: "Expert Coaches" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-4xl text-brand">{s.n}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-brand font-semibold">What we do</span>
              <h2 className="mt-3 font-display text-5xl sm:text-6xl leading-none">BUILT FOR EVERY GOAL</h2>
            </div>
            <Link to="/classes" className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:opacity-80">
              See all classes <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {HIGHLIGHTS.map((h) => {
              const Icon = h.icon;
              return (
                <div key={h.name} className="rounded-xl bg-surface border border-border p-6 hover:border-brand/60 transition">
                  <div className="h-10 w-10 rounded-md bg-gradient-brand grid place-items-center">
                    <Icon className="h-5 w-5 text-brand-foreground" />
                  </div>
                  <h3 className="mt-4 font-display text-2xl">{h.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{h.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VIDEO STRIP */}
      <section className="relative py-24 overflow-hidden">
        <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline
          poster="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&q=80&auto=format&fit=crop">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-man-doing-pull-ups-at-a-gym-4828-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/75" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-5xl sm:text-7xl leading-none">
            YOUR BODY CAN.<br />
            <span className="text-gradient-brand">CONVINCE YOUR MIND.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide the space, the coaches, and the culture. You bring the fire.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3.5 text-base font-bold text-brand-foreground hover:opacity-90 transition shadow-glow">
            Book a Free Trial <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
