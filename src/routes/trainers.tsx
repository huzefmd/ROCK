import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/trainers")({
  head: () => ({
    meta: [
      { title: "Coaches — Rock Gym" },
      { name: "description", content: "Meet the certified coaches at Rock Gym. Strength, HIIT, boxing and yoga specialists." },
      { property: "og:title", content: "Coaches — Rock Gym" },
      { property: "og:description", content: "Certified coaches for strength, HIIT, boxing and yoga." },
    ],
  }),
  component: TrainersPage,
});

const TRAINERS = [
  { name: "Marcus Cole", role: "Head Strength Coach", bio: "10+ years programming powerlifting and hypertrophy. Certified NSCA CSCS.", img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=800&q=80&auto=format&fit=crop" },
  { name: "Aisha Rahman", role: "HIIT & Conditioning", bio: "Former sprinter turned metabolic conditioning specialist.", img: "https://images.unsplash.com/photo-1550345332-09e3ac987658?w=800&q=80&auto=format&fit=crop" },
  { name: "Diego Ramirez", role: "Boxing Coach", bio: "Amateur boxing champion. Teaches technique first, power second.", img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80&auto=format&fit=crop" },
  { name: "Sofia Chen", role: "Yoga & Mobility", bio: "500-hr RYT. Vinyasa, yin and injury-recovery specialist.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80&auto=format&fit=crop" },
];

function TrainersPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-brand font-semibold">The team</span>
          <h1 className="mt-3 font-display text-6xl sm:text-8xl leading-none">MEET YOUR COACHES</h1>
          <p className="mt-6 text-muted-foreground">Certified, experienced, and obsessed with your progress.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {TRAINERS.map((t) => (
            <div key={t.name} className="group">
              <div className="aspect-[3/4] overflow-hidden rounded-xl bg-surface">
                <img src={t.img} alt={t.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" loading="lazy" />
              </div>
              <h2 className="mt-4 font-display text-2xl">{t.name}</h2>
              <p className="text-sm text-brand font-semibold uppercase tracking-wider">{t.role}</p>
              <p className="mt-2 text-sm text-muted-foreground">{t.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
