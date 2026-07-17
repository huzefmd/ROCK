import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Calculator,
  ChefHat,
  EggFried,
  Wheat,
  Drumstick,
  Beaker,
  Flame,
  Salad,
} from "lucide-react";

export const Route = createFileRoute("/nutrition")({
  head: () => ({
    meta: [
      { title: "Nutrition — Rock Gym" },
      {
        name: "description",
        content:
          "Daily calorie & macro calculator, sample meal plans and the foods we trust. Fuel the work.",
      },
      { property: "og:title", content: "Nutrition — Rock Gym" },
      {
        property: "og:description",
        content:
          "Macros, meal plans and a built-in calorie calculator built for strength athletes.",
      },
    ],
  }),
  component: NutritionPage,
});

type Gender = "male" | "female";
type Activity = 1.2 | 1.375 | 1.55 | 1.725 | 1.9;
type Goal = "cut" | "maintain" | "bulk";

const ACTIVITY_OPTIONS: { label: string; value: Activity }[] = [
  { label: "Sedentary (desk job)", value: 1.2 },
  { label: "Light (1–3 days / week)", value: 1.375 },
  { label: "Moderate (3–5 days / week)", value: 1.55 },
  { label: "Active (6–7 days / week)", value: 1.725 },
  { label: "Athlete (2× per day)", value: 1.9 },
];

const GOAL_OPTIONS: { label: string; value: Goal; adj: number }[] = [
  { label: "Cut (−20%)", value: "cut", adj: 0.8 },
  { label: "Maintain", value: "maintain", adj: 1.0 },
  { label: "Bulk (+15%)", value: "bulk", adj: 1.15 },
];

const MEAL_PLANS = [
  {
    name: "Cutting",
    tag: "Shred",
    desc: "Higher protein, lower carb. Built to keep strength up while you lean out.",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900&q=80&auto=format&fit=crop",
    meals: [
      "Breakfast — 3 egg whites + 1 whole egg, spinach, black coffee",
      "Lunch — 150g grilled chicken, mixed greens, ½ cup rice",
      "Snack — Greek yogurt + berries",
      "Dinner — White fish, asparagus, olive oil",
    ],
  },
  {
    name: "Maintenance",
    tag: "Balance",
    desc: "Steady macros for the long game. Train hard, recover, repeat.",
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900&q=80&auto=format&fit=crop",
    meals: [
      "Breakfast — Oats, banana, whey, peanut butter",
      "Lunch — 150g chicken, rice, vegetables, olive oil",
      "Snack — Apple + almonds",
      "Dinner — Lean beef, sweet potato, greens",
    ],
  },
  {
    name: "Bulking",
    tag: "Build",
    desc: "Calorie surplus with clean carbs to fuel size and strength gains.",
    img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=900&q=80&auto=format&fit=crop",
    meals: [
      "Breakfast — 4 eggs, oats, banana, milk",
      "Lunch — 200g chicken, large rice, avocado",
      "Snack — Whey shake, peanut butter sandwich",
      "Dinner — Salmon, quinoa, vegetables",
    ],
  },
];

const FOODS = [
  { name: "Eggs", benefit: "Complete protein, healthy fats, B12.", serving: "1 large egg · 6g P · 5g F", img: "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?w=900&q=80&auto=format&fit=crop", Icon: EggFried },
  { name: "Oats", benefit: "Slow-digesting carbs for steady energy.", serving: "50g dry · 5g P · 33g C", img: "https://images.unsplash.com/photo-1614961233913-a5113a4a34ed?w=900&q=80&auto=format&fit=crop", Icon: Wheat },
  { name: "Chicken Breast", benefit: "Lean protein staple. Cook it any way.", serving: "150g cooked · 45g P · 0g C", img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=900&q=80&auto=format&fit=crop", Icon: Drumstick },
  { name: "White Rice", benefit: "Fast-digesting carbs around training.", serving: "1 cup cooked · 4g P · 45g C", img: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=900&q=80&auto=format&fit=crop", Icon: Salad },
  { name: "Whey Protein", benefit: "Quick post-workout protein hit.", serving: "1 scoop · 24g P · 3g C", img: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=900&q=80&auto=format&fit=crop", Icon: Flame },
  { name: "Creatine", benefit: "Most studied strength supplement on earth.", serving: "5g · 0 cal · strength + reps", img: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=900&q=80&auto=format&fit=crop", Icon: Beaker },
];

function NutritionPage() {
  const [gender, setGender] = useState<Gender>("male");
  const [age, setAge] = useState<number>(28);
  const [weight, setWeight] = useState<number>(75);
  const [height, setHeight] = useState<number>(175);
  const [activity, setActivity] = useState<Activity>(1.55);
  const [goal, setGoal] = useState<Goal>("maintain");

  const { bmr, target, protein, carbs, fat, proteinKcal, carbsKcal, fatKcal } =
    useMemo(() => {
      // Mifflin-St Jeor BMR
      const bmrCalc =
        gender === "male"
          ? 10 * weight + 6.25 * height - 5 * age + 5
          : 10 * weight + 6.25 * height - 5 * age - 161;
      const tdee = bmrCalc * activity;
      const goalAdj = GOAL_OPTIONS.find((g) => g.value === goal)!.adj;
      const targetCalc = Math.round(tdee * goalAdj);

      // 40 / 35 / 25 split — protein & carbs = 4 kcal/g, fat = 9 kcal/g
      const proteinG = Math.round((targetCalc * 0.4) / 4);
      const carbsG = Math.round((targetCalc * 0.35) / 4);
      const fatG = Math.round((targetCalc * 0.25) / 9);

      return {
        bmr: Math.round(bmrCalc),
        target: targetCalc,
        protein: proteinG,
        carbs: carbsG,
        fat: fatG,
        proteinKcal: proteinG * 4,
        carbsKcal: carbsG * 4,
        fatKcal: fatG * 9,
      };
    }, [gender, age, weight, height, activity, goal]);

  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Hero */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-brand font-semibold">
            Nutrition
          </span>
          <h1 className="mt-3 font-display text-6xl sm:text-8xl leading-none">
            FUEL THE WORK
          </h1>
          <p className="mt-6 text-muted-foreground">
            Training breaks you down. Nutrition builds you back. Use our
            calculator to dial in your daily targets, then follow one of our
            sample plans or pick the foods we trust.
          </p>
        </div>

        {/* Calculator */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-md bg-gradient-brand grid place-items-center shadow-glow">
              <Calculator className="h-5 w-5 text-brand-foreground" strokeWidth={2.5} />
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-brand font-semibold">
                Tool
              </span>
              <h2 className="font-display text-4xl sm:text-5xl leading-none">
                CALORIE & MACRO CALCULATOR
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Form */}
            <div className="lg:col-span-2 rounded-2xl bg-surface border border-border p-6 sm:p-8 space-y-5">
              <Field label="Gender">
                <div className="grid grid-cols-2 gap-2">
                  {(["male", "female"] as Gender[]).map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setGender(g)}
                      className={`rounded-md py-2.5 text-sm font-semibold uppercase tracking-wider transition ${
                        gender === g
                          ? "bg-brand text-brand-foreground"
                          : "bg-background border border-border hover:border-brand"
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </Field>

              <div className="grid grid-cols-2 gap-4">
                <Field label="Age">
                  <NumInput value={age} onChange={setAge} min={14} max={90} />
                </Field>
                <Field label="Weight (kg)">
                  <NumInput value={weight} onChange={setWeight} min={30} max={250} />
                </Field>
              </div>

              <Field label="Height (cm)">
                <NumInput value={height} onChange={setHeight} min={120} max={230} />
              </Field>

              <Field label="Activity Level">
                <Select
                  value={String(activity)}
                  onChange={(v) => setActivity(Number(v) as Activity)}
                  options={ACTIVITY_OPTIONS.map((o) => ({
                    value: String(o.value),
                    label: o.label,
                  }))}
                />
              </Field>

              <Field label="Goal">
                <div className="grid grid-cols-3 gap-2">
                  {GOAL_OPTIONS.map((g) => (
                    <button
                      key={g.value}
                      type="button"
                      onClick={() => setGoal(g.value)}
                      className={`rounded-md py-2.5 text-xs font-bold uppercase tracking-wider transition ${
                        goal === g.value
                          ? "bg-brand text-brand-foreground"
                          : "bg-background border border-border hover:border-brand"
                      }`}
                    >
                      {g.value}
                    </button>
                  ))}
                </div>
              </Field>
            </div>

            {/* Results */}
            <div className="lg:col-span-3 space-y-4">
              <div className="rounded-2xl bg-gradient-brand p-6 sm:p-8 shadow-glow">
                <div className="text-xs uppercase tracking-[0.3em] text-brand-foreground/80 font-semibold">
                  Daily Target
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-display text-7xl leading-none text-brand-foreground">
                    {target.toLocaleString()}
                  </span>
                  <span className="text-brand-foreground/80 text-sm font-semibold uppercase tracking-wider">
                    kcal
                  </span>
                </div>
                <div className="mt-4 text-sm text-brand-foreground/80">
                  BMR <span className="font-semibold text-brand-foreground">{bmr.toLocaleString()}</span> kcal ·
                  TDEE × {GOAL_OPTIONS.find((g) => g.value === goal)!.adj}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <MacroCard label="Protein" grams={protein} kcal={proteinKcal} pct={40} accent />
                <MacroCard label="Carbs" grams={carbs} kcal={carbsKcal} pct={35} />
                <MacroCard label="Fat" grams={fat} kcal={fatKcal} pct={25} />
              </div>

              <p className="text-xs text-muted-foreground">
                Split: 40% protein · 35% carbs · 25% fat. Estimates only — adjust based on
                training intensity and real-world results.
              </p>
            </div>
          </div>
        </section>

        {/* Meal plans */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-md bg-gradient-brand grid place-items-center shadow-glow">
              <ChefHat className="h-5 w-5 text-brand-foreground" strokeWidth={2.5} />
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-brand font-semibold">
                Templates
              </span>
              <h2 className="font-display text-4xl sm:text-5xl leading-none">
                SAMPLE MEAL PLANS
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {MEAL_PLANS.map((plan) => (
              <article
                key={plan.name}
                className="group relative overflow-hidden rounded-xl bg-surface border border-border"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={plan.img}
                    alt={plan.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-foreground">
                    {plan.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-3xl">{plan.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{plan.desc}</p>
                  <ul className="mt-5 space-y-2.5 text-sm">
                    {plan.meals.map((m) => (
                      <li key={m} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Foods grid */}
        <section>
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-[0.3em] text-brand font-semibold">
              Pantry
            </span>
            <h2 className="mt-3 font-display text-5xl sm:text-6xl leading-none">
              FOODS WE TRUST
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Six staples our athletes cycle through daily. Simple, accessible,
              proven.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FOODS.map(({ name, benefit, serving, img, Icon }) => (
              <article
                key={name}
                className="group relative overflow-hidden rounded-xl bg-surface border border-border hover:border-brand transition"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={img}
                    alt={name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-foreground">
                    <Icon className="h-3 w-3" /> {name}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground">{benefit}</p>
                  <div className="mt-4 text-xs uppercase tracking-wider text-brand font-bold">
                    {serving}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-wider text-muted-foreground mb-2 font-semibold">
        {label}
      </span>
      {children}
    </label>
  );
}

function NumInput({
  value,
  onChange,
  min,
  max,
}: {
  value: number;
  onChange: (n: number) => void;
  min?: number;
  max?: number;
}) {
  return (
    <input
      type="number"
      value={value}
      min={min}
      max={max}
      onChange={(e) => {
        const n = Number(e.target.value);
        if (Number.isFinite(n)) onChange(n);
      }}
      className="w-full rounded-md bg-background border border-border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
    />
  );
}

function Select({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-md bg-background border border-border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}

function MacroCard({
  label,
  grams,
  kcal,
  pct,
  accent,
}: {
  label: string;
  grams: number;
  kcal: number;
  pct: number;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-xl p-5 border ${
        accent
          ? "bg-surface border-brand"
          : "bg-surface border-border"
      }`}
    >
      <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
        {label} · {pct}%
      </div>
      <div className="mt-2 flex items-baseline gap-1">
        <span className="font-display text-4xl leading-none text-brand">{grams}</span>
        <span className="text-sm text-muted-foreground font-semibold">g</span>
      </div>
      <div className="mt-1 text-xs text-muted-foreground">
        {kcal.toLocaleString()} kcal
      </div>
    </div>
  );
}
