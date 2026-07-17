import { useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const LOADER_MINIMUM_DURATION = 550;

export function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-label="Loading Rock Gym">
      <BrandLoader />
    </div>
  );
}

export function GlobalPageLoader() {
  const isNavigating = useRouterState({ select: (state) => state.status === "pending" });
  const [isStarting, setIsStarting] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const startupTimer = window.setTimeout(() => setIsStarting(false), LOADER_MINIMUM_DURATION);
    return () => window.clearTimeout(startupTimer);
  }, []);

  useEffect(() => {
    if (isStarting || isNavigating) {
      setIsVisible(true);
      return;
    }

    const hideTimer = window.setTimeout(() => setIsVisible(false), 120);
    return () => window.clearTimeout(hideTimer);
  }, [isNavigating, isStarting]);

  if (!isVisible) return null;

  return (
    <div className="page-loader-overlay" role="status" aria-live="polite" aria-label="Loading Rock Gym">
      <BrandLoader />
    </div>
  );
}

function BrandLoader() {
  return (
    <div className="flex flex-col items-center gap-5">
      <img src="/rock-gym-logo.svg" alt="" aria-hidden="true" className="page-loader-logo h-20 w-20 sm:h-24 sm:w-24" />
      <div className="font-display text-4xl tracking-[0.16em] sm:text-5xl">
        ROCK <span className="text-brand">GYM</span>
      </div>
      <div className="h-1 w-28 overflow-hidden rounded-full bg-border">
        <div className="page-loader-progress h-full rounded-full bg-brand" />
      </div>
    </div>
  );
}