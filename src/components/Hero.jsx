import React, { useEffect, useRef } from "react";

function CloudBubble({ className = "", children }) {
  return (
    <div
      className={
        "relative inline-block rounded-[2rem] px-5 py-3 " +
        "bg-white/35 backdrop-blur-md ring-1 ring-white/40 " +
        "shadow-[0_8px_30px_rgba(0,0,0,0.12)] text-gray-900 " +
        className
      }
    >
      <span className="pointer-events-none absolute -top-2 -left-3 h-6 w-10 rounded-full bg-white/40 blur-md" />
      <span className="pointer-events-none absolute -bottom-3 -right-2 h-7 w-12 rounded-full bg-white/30 blur-lg" />
      <span className="pointer-events-none absolute -top-4 right-6 h-5 w-8 rounded-full bg-white/30 blur-md" />
      <div className="relative">{children}</div>
    </div>
  );
}

export default function Hero() {
  const videoRef = useRef(null);

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
    <section className="relative min-h-screen flex items-center">
      {/* Video background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          playsInline
          muted
          loop
          autoPlay
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/lakelouisenav.mp4" type="video/mp4" />
        </video>

        {/* Optional gradient so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
      </div>

      {/* Content (your name acts as the header) */}
      <div className="relative mx-auto max-w-6xl px-4 text-center">
        <h1 className="text-4xl sm:text-7xl font-bold tracking-tight text-white drop-shadow">
          Rachel Kennedy
        </h1>
        <CloudBubble className="mt-4 mx-auto max-w-xl">
          <p className="text-base text-gray-800">
            Full-Stack Developer • React • Node • MongoDB — inspired by mountain
            life and learning new software languages while experimenting with
            creative design.
          </p>
        </CloudBubble>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href="https://rachelkennedy09.github.io/digital-card/"
            className="rounded-full bg-[var(--brand)] px-5 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-[var(--brand-600)]"
          >
            View Digital Business Card
          </a>
          <a
            href="#resume"
            className="rounded-full bg-[var(--brand)] px-5 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-[var(--brand-600)]"
          >
            View Resume
          </a>
          <a
            href="#projects"
            className="rounded-full bg-[var(--brand)] px-5 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-[var(--brand-600)]"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}
