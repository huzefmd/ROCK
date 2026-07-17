import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Clock, Phone, Mail, Dumbbell } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1.5fr_0.9fr] gap-10 items-start">
          {/* LEFT SIDE */}
          <div className="space-y-10">
            {/* HERO */}
            <div>
              <span className="text-xs uppercase tracking-[0.35em] text-brand font-semibold">
                Get In Touch
              </span>

              <h1 className="mt-4 font-display text-5xl sm:text-7xl lg:text-8xl leading-none">
                READY TO
                <br />
                <span className="text-gradient-brand">ROCK?</span>
              </h1>

              <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
                Join Bengaluru's most energetic fitness community. Walk in for a free trial session
                and experience the difference.
              </p>
            </div>

            {/* GALLERY */}
            {/* GALLERY */}
            <div className="rounded-[32px] bg-surface/30 border border-border p-4">
              <div className="grid grid-cols-2 gap-4">
                {/* Featured Image */}
                <img
                  src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAFl1uGzVie2DADvTiVn2mx6ym3LLHgyRUe77qRSxOppzNC699eLlf3We9KZGSahJE61w9NAGpa1EeoxVsyC19Wq5TSvhwWN1rOdsasauiwncKmiCI5Mf3SjWFybKepwvrxa8-FGVw=s1360-w1360-h1020-rw"
                  alt="Rock Gym Main Area"
                  className="
        col-span-2
        w-full
        h-[380px]
        rounded-3xl
        object-cover
        border border-border
        transition-all duration-300
        hover:scale-[1.02]
        hover:shadow-2xl
      "
                  loading="lazy"
                />

                {/* Row 2 */}
                <img
                  src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAEoQWZL3VbKVKAXHUXL1FfOoBaJzNjOq-zlp614YcbscCc6AQn2tPxvLIz_gL9RGsNkmxV-0uBQ6H2GnJ8_0-nNdPrtQTyMwkvsaS0LdeiA6PCebSIpUr7byt5Cf8vC-0_rMyio=w141-h235-n-k-no-nu"
                  alt="Rock Gym Equipment"
                  className="
        w-full
        h-[220px]
        rounded-3xl
        object-cover
        border border-border
        transition-all duration-300
        hover:scale-[1.03]
        hover:shadow-2xl
      "
                  loading="lazy"
                />

                <img
                  src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAEfTveCN0nUtHRbsUp62Y9De04__UpKJNxD0TB2d2v1DbU9wHrOD9_2K3ZmHRamOnpK4-mIfK1hjeaniP9IVcYAuc_tHtcnbFq9O-9si9BvvqjIOADiZwE_rigIcaFszl0w-jHa=w141-h176-n-k-no-nu"
                  alt="Rock Gym Training Area"
                  className="
        w-full
        h-[220px]
        rounded-3xl
        object-cover
        border border-border
        transition-all duration-300
        hover:scale-[1.03]
        hover:shadow-2xl
      "
                  loading="lazy"
                />

                {/* Bottom Featured */}
                <img
                  src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAFwz0JdDSkE8bmYrP70y5-XOKVhjvYytTM0pZLpMncWbozjEHx0Mc1q889lL7WuidphvUx84JLPdhCX-t55v59osZTcXCdDw_6aivnVMWnNlsLd81SiyFxnnoYYpYj5VDEGch4j=w141-h118-n-k-no-nu"
                  alt="Rock Gym Workout Zone"
                  className="
                          col-span-2
                          w-full
                          h-[280px]
                          rounded-3xl
                          object-cover
                          border border-border
                          transition-all duration-300
                          hover:scale-[1.02]
                          hover:shadow-2xl
                        "
                  loading="lazy"
                />
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-3xl border border-border bg-surface p-6 text-center">
                <h3 className="text-4xl font-display text-brand">500+</h3>
                <p className="mt-2 text-muted-foreground">Active Members</p>
              </div>

              <div className="rounded-3xl border border-border bg-surface p-6 text-center">
                <h3 className="text-4xl font-display text-brand">7</h3>
                <p className="mt-2 text-muted-foreground">Days Open</p>
              </div>

              <div className="rounded-3xl border border-border bg-surface p-6 text-center">
                <h3 className="text-4xl font-display text-brand">18</h3>
                <p className="mt-2 text-muted-foreground">Hours Daily</p>
              </div>
            </div>

            {/* CONTACT INFO */}
            <div className="rounded-3xl border border-border bg-surface p-8">
              <h3 className="text-2xl font-display mb-6">Visit Rock Gym</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <MapPin className="h-5 w-5 text-brand mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-muted-foreground text-sm">
                      778, SRS Rd, Yeshwanthpur Suburb II Stage, Peenya II Phase, Bengaluru,
                      Karnataka 560058
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="h-5 w-5 text-brand mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Working Hours</h4>
                    <p className="text-muted-foreground text-sm">5:00 AM – 11:00 PM</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="h-5 w-5 text-brand mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-muted-foreground text-sm">+1 (555) 010-1234</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="h-5 w-5 text-brand mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground text-sm">hello@rockgym.fit</p>
                  </div>
                </div>
              </div>
            </div>

            {/* MAP */}
            <div>
              <h3 className="font-display text-3xl mb-3">Find Us</h3>

              <p className="text-muted-foreground mb-6">
                Conveniently located in Peenya, Bengaluru.
              </p>

              <div className="overflow-hidden rounded-[32px] border border-border">
                <iframe
                  title="Rock Gym Location"
                  loading="lazy"
                  className="w-full h-[450px]"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    "778, SRS Rd, Yeshwanthpur Suburb II Stage, Peenya II Phase, Bengaluru, Karnataka 560058",
                  )}&output=embed`}
                />
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="sticky top-24">
            <div className="rounded-[32px] border border-orange-500/20 bg-gradient-to-b from-zinc-900 to-black p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Dumbbell className="h-6 w-6 text-brand" />
                <h2 className="font-display text-3xl">Free Trial</h2>
              </div>

              <p className="text-muted-foreground mb-8">
                Start your fitness journey today. Claim your free trial session now.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-5"
              >
                <input
                  required
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-brand"
                />

                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-brand"
                />

                <select className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-brand">
                  <option>Strength & Conditioning</option>
                  <option>CrossFit</option>
                  <option>Boxing</option>
                  <option>HIIT Blast</option>
                  <option>Yoga & Mobility</option>
                </select>

                <textarea
                  rows={4}
                  placeholder="Tell us about your fitness goals..."
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-brand"
                />

                <button
                  type="submit"
                  className="w-full rounded-xl bg-brand py-4 font-bold uppercase tracking-wider text-brand-foreground transition hover:opacity-90"
                >
                  {sent ? "Thanks! We'll Contact You Soon" : "Book Free Trial"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
