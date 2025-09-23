import React from "react";
import { useState } from "react";

export default function Header() {
  //Hamburger menu, automatically false(not showing), and only true when on mobile size(small) screens
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-o z-50 border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/*Logo / Name */}
        <a href="/" className="flex items-center gap-2">
          {/*optional logo circle*/}
          <span className="inline-bock h-8 w-8 rounded-full bg-pink-300/70 border border-black/10" />
          <span className="text-lg font-semibold tracking-tight">
            Rachel Kennedy
          </span>
        </a>

        {/* Desktop Nav*/}
        <nav className="hidden items-center gap-6 md:flex">
          <a className="text-sm hover:underline" href="projects">
            Projects
          </a>
          <a className="text-sm hover:underline" href="about">
            About
          </a>
          <a className="text-sm hover:underline" href="contact">
            Contact
          </a>
          <a
            className="rounded-full border border-black/10 bg-[var(--brand)] px-4 py-2 text-sm font-semibold shadow-sm hover:bg-[var(--brand-600)]"
            href="/resume.pdf"
            download
          >
            Download Resume
          </a>
        </nav>

        {/* Mobile button*/}
        <button
          className="md:hidden inline-flex items-center rounded-lg border border-black/10 p-2"
          aria-label="Toggle Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav drawer */}
      <div
        className={`md:hidden transition-[max-height] duration-300 overflow-hidden border-t border-black/5 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-2 px-4 py-3">
          <a
            onClick={() => setOpen(false)}
            className="py-2 text-sm"
            href="#projects"
          >
            Projects
          </a>
          <a
            onClick={() => setOpen(false)}
            className="py-2 text-sm"
            href="#about"
          >
            About
          </a>
          <a
            onClick={() => setOpen(false)}
            className="py-2 text-sm"
            href="#contact"
          >
            Contact
          </a>
          <a
            onClick={() => setOpen(false)}
            className="mt-2 inline-block rounded-full border border-black/10 bg-pink-200/80 px-4 py-2 text-sm font-semibold shadow-sm hover:bg-pink-300"
            href="/resume.pdf"
            download
          >
            Download Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
