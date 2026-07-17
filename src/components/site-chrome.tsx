import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Dumbbell, Menu, X } from "lucide-react";

export function Header() {
  const [open, setOpen] = useState(false);
  const linkClass = "hover:text-brand transition";
  const activeClass = "text-brand";

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/70 border-b border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-md bg-gradient-brand grid place-items-center shadow-glow">
            <Dumbbell className="h-5 w-5 text-brand-foreground" strokeWidth={2.5} />
          </div>
          <span className="font-display text-2xl tracking-wider">
            ROCK <span className="text-brand">GYM</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" activeOptions={{ exact: true }} className={linkClass} activeProps={{ className: activeClass }}>Home</Link>
          <Link to="/classes" className={linkClass} activeProps={{ className: activeClass }}>Classes</Link>
          <Link to="/trainers" className={linkClass} activeProps={{ className: activeClass }}>Coaches</Link>
          <Link to="/pricing" className={linkClass} activeProps={{ className: activeClass }}>Membership</Link>
          <Link to="/contact" className={linkClass} activeProps={{ className: activeClass }}>Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/pricing" className="hidden md:inline-flex rounded-md bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground hover:opacity-90 transition">Join Now</Link>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-5 py-4 flex flex-col gap-3 text-sm">
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/classes" onClick={() => setOpen(false)}>Classes</Link>
            <Link to="/trainers" onClick={() => setOpen(false)}>Coaches</Link>
            <Link to="/pricing" onClick={() => setOpen(false)}>Membership</Link>
            <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
            <Link to="/pricing" onClick={() => setOpen(false)} className="rounded-md bg-brand px-4 py-2 font-semibold text-brand-foreground text-center">Join Now</Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-12 mt-auto">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-brand grid place-items-center">
            <Dumbbell className="h-4 w-4 text-brand-foreground" strokeWidth={2.5} />
          </div>
          <span className="font-display text-xl tracking-wider">ROCK <span className="text-brand">GYM</span></span>
        </div>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Rock Gym. All rights reserved.</p>
        <div className="flex items-center gap-5 text-sm text-muted-foreground">
          <Link to="/classes" className="hover:text-brand">Classes</Link>
          <Link to="/pricing" className="hover:text-brand">Membership</Link>
          <Link to="/contact" className="hover:text-brand">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
