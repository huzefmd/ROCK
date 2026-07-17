import { createFileRoute } from "@tanstack/react-router";
import { Dumbbell, Flame, Zap, HeartPulse, Trophy, Users } from "lucide-react";

export const Route = createFileRoute("/classes")({
  head: () => ({
    meta: [
      { title: "Classes — Rock Gym" },
      { name: "description", content: "Six flagship programs: Strength, HIIT, Boxing, Yoga, CrossFit and Group Cycling. Find your fight." },
      { property: "og:title", content: "Classes — Rock Gym" },
      { property: "og:description", content: "Six flagship programs designed by athletes, for anyone." },
    ],
  }),
  component: ClassesPage,
});

const CLASSES = [
  { name: "Strength & Conditioning", tag: "Build Power", desc: "Compound lifts, progressive overload, real strength gains.", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80&auto=format&fit=crop", icon: Dumbbell },
  { name: "HIIT Blast", tag: "Burn Fat", desc: "45 min of high-intensity intervals. Torch calories, boost endurance.", img: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1200&q=80&auto=format&fit=crop", icon: Flame },
  { name: "Boxing", tag: "Fight Ready", desc: "Technique, footwork, and heavy bag work with pro coaches.", img: "https://images.unsplash.com/photo-1517438322307-e67111335449?w=1200&q=80&auto=format&fit=crop", icon: Zap },
  { name: "Yoga & Mobility", tag: "Recover", desc: "Restore flexibility, reduce injury, sharpen focus.", img: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=1200&q=80&auto=format&fit=crop", icon: HeartPulse },
  { name: "CrossFit", tag: "All-Out", desc: "Constantly varied functional movements at high intensity.", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80&auto=format&fit=crop", icon: Trophy },
  { name: "Group Cycling", tag: "Cardio", desc: "Studio rides with beats, lights and a coach pushing your limit.", img: "https://images.unsplash.com/photo-1591741535018-d042766c62eb?w=1200&q=80&auto=format&fit=crop", icon: Users },
];

function ClassesPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-brand font-semibold">What we offer</span>
          <h1 className="mt-3 font-display text-6xl sm:text-8xl leading-none">FIND YOUR FIGHT</h1>
          <p className="mt-6 text-muted-foreground">
            Six flagship programs designed by athletes, for anyone. Whether you're chasing your first pull-up or your fifth marathon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CLASSES.map((c) => {
            const Icon = c.icon;
            return (
              <article key={c.name} className="group relative overflow-hidden rounded-xl bg-surface border border-border">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={c.img} alt={c.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" loading="lazy" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-foreground">
                    <Icon className="h-3 w-3" /> {c.tag}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="font-display text-3xl">{c.name}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
