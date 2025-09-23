import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-black/5 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-8 md:flex-row">
        {/* Left: name + tiny tagline */}
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold text-gray-800">Rachel Kennedy</p>
          <p className="text-xs text-gray-500">
            Full-stack developer · Lake Louise · 2025
          </p>
        </div>

        {/* Middle: social icons */}
        <nav className="flex items-center gap-4" aria-label="Social links">
          {/* GitHub */}
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 hover:bg-[var(--tint)]"
          >
            <span className="sr-only">GitHub</span>
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.11.79-.25.79-.56v-2c-3.22.7-3.9-1.4-3.9-1.4-.53-1.37-1.3-1.73-1.3-1.73-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.22 1.78 1.22 1.04 1.78 2.72 1.26 3.39.96.11-.76.41-1.26.74-1.55-2.57-.29-5.28-1.29-5.28-5.73 0-1.27.45-2.32 1.2-3.14-.12-.29-.52-1.47.11-3.06 0 0 .98-.31 3.2 1.2a11.08 11.08 0 0 1 5.82 0c2.22-1.51 3.2-1.2 3.2-1.2.63 1.59.23 2.77.11 3.06.75.82 1.2 1.87 1.2 3.14 0 4.45-2.72 5.44-5.3 5.72.42.36.8 1.07.8 2.16v3.2c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .5Z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/your-username"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 hover:bg-pink-100"
          >
            <span className="sr-only">LinkedIn</span>
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5.001 2.5 2.5 0 0 0 0-5Zm.02 6.5H2V22h3V10ZM9 10H6v12h3v-6.5c0-1.73.9-2.5 2.1-2.5 1.17 0 1.9.85 1.9 2.5V22h3v-7.5C16 11.57 14.43 10 12.5 10c-1.1 0-2.23.5-2.5 1.5V10Z" />
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:you@example.com"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 hover:bg-pink-100"
          >
            <span className="sr-only">Email</span>
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 13 4 6.01V6h16ZM4 18V8.24l7.4 6.17a1 1 0 0 0 1.2 0L20 8.24V18H4Z" />
            </svg>
          </a>
        </nav>

        {/* Right: back to top */}
        <a
          href="#top"
          className="text-sm text-gray-600 underline underline-offset-4 hover:text-gray-800"
        >
          Back to top ↑
        </a>
      </div>

      <div className="border-t border-black/5 py-4">
        <p className="text-center text-xs text-gray-500">
          © {year} Rachel Kennedy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
