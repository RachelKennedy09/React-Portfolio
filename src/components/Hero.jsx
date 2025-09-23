import React, { useEffect, useRef } from "react";

function CloudBubble({ className = "", children }) {
  return (
    <div
      className={
        "relative inline-block rounded-[2rem] px-5 py-3 " +
        "bg-white/35 backdrop-blur-md ring-1 ring-white/40 " + // glassy/transparent
        "shadow-[0_8px_30px_rgba(0,0,0,0.12)] " + // soft depth
        "text-gray-900 " +
        className
      }
    >
      {/* Fluffy side-lobes (subtle, optional) */}
      <span className="pointer-events-none absolute -top-2 -left-3 h-6 w-10 rounded-full bg-white/40 blur-md" />
      <span className="pointer-events-none absolute -bottom-3 -right-2 h-7 w-12 rounded-full bg-white/30 blur-lg" />
      <span className="pointer-events-none absolute -top-4 right-6 h-5 w-8 rounded-full bg-white/30 blur-md" />
      <div className="relative">{children}</div>
    </div>
  );
}

export default function Hero() {
  const videoRef = useRef(null);

  // Pause the video when the hero is off screen (battery-friendly)
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) =>
        entry.isIntersecting ? el.play().catch(() => {}) : el.pause(),
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative">
      {/* Video background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          ref={videoRef}
          className="h-full w-full object-cover pointer-events-none motion-reduce:hidden"
          playsInline
          muted
          loop
          autoPlay
          preload="metadata"
          //   poster="/hero-poster.jpg"
          aria-hidden="true"
        >
          {/* <source src="/hero.webm" type="video/webm" /> */}
          <source src="/lakelouisenav.mp4" type="video/mp4" />
        </video>

        {/* Soft gradient overlay so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-white/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 py-20 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left: text */}
          <div>
            <span className="inline-block rounded-full bg-[var(--accent)]/30 px-3 py-1 text-xs font-semibold text-gray-700 ring-1 ring-black/10">
              Full-Stack Developer • Lake Louise
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900">
              Rachel Kennedy
            </h1>
            <CloudBubble className="mt-3 max-w-xl">
              <p className="text-sm/6 sm:text-base/7 text-gray-800">
                I build friendly, responsive apps with React, Node, Express, and
                MongoDB — inspired by mountain life, dogs, and playful design.
              </p>
            </CloudBubble>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-[var(--brand)] px-5 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-[var(--brand-600)]"
              >
                View Projects
              </a>
              <a
                href="/business-card"
                className="rounded-full border border-black/10 bg-white px-5 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-[var(--tint)]"
              >
                Digital Business Card
              </a>
            </div>
          </div>

        
        </div>
      </div>
    </section>
  );
}
