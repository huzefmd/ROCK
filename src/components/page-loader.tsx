import { Dumbbell } from "lucide-react";

export function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-14 w-14">
          <div className="absolute inset-0 rounded-md bg-gradient-brand shadow-glow animate-pulse" />
          <div className="absolute inset-0 grid place-items-center animate-[spin_1.4s_linear_infinite]">
            <Dumbbell className="h-7 w-7 text-brand-foreground" strokeWidth={2.5} />
          </div>
        </div>
        <div className="text-xs uppercase tracking-[0.3em] text-brand font-semibold">
          Loading
        </div>
      </div>
    </div>
  );
}
