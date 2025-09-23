// src/components/VideoSection.jsx
import React, { useEffect, useRef } from "react";

export default function VideoSection({
  id,
  children,
  overlay = "bg-white/65",
}) {
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
    <section id={id} className="relative py-24">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          ref={videoRef}
          className="h-full w-full object-cover pointer-events-none motion-reduce:hidden"
          playsInline
          muted
          loop
          preload="metadata"
          poster="/react-portfolio/public/river.mp4"
          aria-hidden="true"
        >
          <source src="/river.mp4" type="video/mp4" />
        </video>
        <div className={`absolute inset-0 ${overlay}`} />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">{children}</div>
    </section>
  );
}
