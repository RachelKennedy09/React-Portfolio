import React from "react";

// Export Section + ProjectItem so we can reuse them in App.jsx
export function Section({ title, children }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3 text-gray-900">
        {title}
      </h2>
      <div className="space-y-4 text-gray-700">{children}</div>
    </section>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs sm:text-sm bg-white/70 backdrop-blur ring-1 ring-gray-200 shadow-sm">
      {children}
    </span>
  );
}

function ExperienceItem({ role, company, location, period, bullets }) {
  return (
    <div className="rounded-2xl border border-gray-200 p-4 sm:p-6 bg-white/80 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <h3 className="text-lg font-semibold text-gray-900">
          {role} <span className="font-normal text-gray-600">| {company}</span>
        </h3>
        <div className="text-sm text-gray-600">
          {location} • {period}
        </div>
      </div>
      <ul className="mt-3 list-disc pl-5 space-y-2">
        {bullets.map((b, i) => (
          <li key={i} className="leading-relaxed">
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Exported so you can use the same styling for project cards outside the resume
export function ProjectItem({ name, stack, bullets, href }) {
  return (
    <div className="rounded-2xl border border-gray-200 p-4 sm:p-6 bg-white/80 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        {href && (
          <a
            className="text-sm underline underline-offset-4 hover:no-underline text-gray-800"
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            View project ↗
          </a>
        )}
      </div>
      {stack?.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {stack.map((s, i) => (
            <Pill key={i}>{s}</Pill>
          ))}
        </div>
      ) : null}
      <ul className="mt-3 list-disc pl-5 space-y-2">
        {bullets.map((b, i) => (
          <li key={i} className="leading-relaxed">
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Resume() {
  return (
    // Full width so it fits nicely in the left column
    <main className="w-full px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-950">
          RESUME
        </h1>
        <p className="mt-2 text-gray-700">
          Full-Stack Developer (JavaScript / React / Node / MongoDB) · Creative
          Web Designer (HTML,5, CSS3, UX/UI, Tailwind) · Former Restaurant
          Manager
        </p>
        <div className="mt-3 flex flex-wrap gap-3 text-sm text-gray-700">
          <a
            className="underline underline-offset-4"
            href="rachelkennedy@live.ca"
          >
            RachelKennedy@live.ca
          </a>
          <span>•</span>
          <a
            className="underline underline-offset-4"
            href="https://www.linkedin.com/in/Rachelkennedy09"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <span>•</span>
          <a
            className="underline underline-offset-4"
            href="https://github.com/Rachelkennedy09"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <span>•</span>
          <a
            className="underline underline-offset-4"
            href="https://rachelkennedy09.github.io/digital-card/"
            target="_blank"
            rel="noreferrer"
          >
            Digital Business Card
          </a>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href="/Rachel-Kennedy-Resume.pdf"
            className="inline-flex items-center rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:shadow transition"
          >
            View PDF Resume
          </a>
          <a
            href="/Rachel-Kennedy-Cover-Letter.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl bg-gray-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:opacity-90 transition"
          >
            View PDF Cover Letter
          </a>
        </div>
      </header>

      {/* Summary */}
      <Section title="Summary">
        <p>
          Motivated full-stack developer with 12+ years of leadership in
          hospitality and 9 months of intensive software development training. I
          build user-friendly, accessible web apps with React, Node.js, Express,
          and MongoDB, and I thrive in collaborative, Agile environments. Known
          for rapid learning, clear communication, and calm, structured
          problem-solving.
        </p>
      </Section>

      {/* Skills */}
      <Section title="Skills">
        <div className="flex flex-wrap gap-2">
          {[
            "JavaScript",
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "REST APIs",
            "Git & GitHub",
            "Agile/Scrum",
            "HTML/CSS",
            "Accessibility",
            "Testing (Mocha/Chai)",
          ].map((s) => (
            <Pill key={s}>{s}</Pill>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section title="Experience">
        <ExperienceItem
          role="Web Designer"
          company="Guided Therapy"
          location="Prince George, BC"
          period="2025"
          bullets={[
            "Designed and launched a responsive, professional site for a clinical practice; ensured clear IA and compassionate content aligned with brand values.",
            "Implemented secure patient registration flow and intuitive navigation to improve trust and conversions.",
            "Scoped requirements, managed timeline, and delivered iterative revisions using Git and Trello.",
          ]}
        />

        <ExperienceItem
          role="Software Development Bootcamp"
          company="UBC + Circuit Stream"
          location="Vancouver, BC (Remote/Hybrid)"
          period="Mar 2025 – Dec 2025"
          bullets={[
            "Built and deployed multiple full-stack apps (React, Node, Express, MongoDB) with Agile rituals and version control best practices.",
            "Collaborated in teams to plan sprints, conduct code reviews, and ship incrementally; documented outcomes for portfolio and grading.",
          ]}
        />

        <ExperienceItem
          role="Restaurant Assistant Manager"
          company="Fairmont Banff Springs"
          location="Banff, AB"
          period="Jan 2021 – Jan 2023"
          bullets={[
            "Led daily operations for a luxury, high-volume venue; supervised 20+ staff while maintaining Fairmont service standards.",
            "Coached and scheduled teams, optimized labor and inventory, and resolved guest issues to protect brand reputation.",
            "Partnered cross-functionally with culinary and events teams to deliver seamless peak-season service and special functions.",
          ]}
        />
      </Section>

      {/* Education */}
      <Section title="Education">
        <div className="rounded-2xl border border-gray-200 p-4 sm:p-6 bg-white/80 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <h3 className="text-lg font-semibold text-gray-900">
              UBC Extended Learning + Circuit Stream — Software Development
              Bootcamp
            </h3>
            <div className="text-sm text-gray-600">Mar 2025 – Dec 2025</div>
          </div>
          <p className="mt-2 text-gray-700">
            Full-stack JavaScript curriculum including React, Node.js/Express,
            MongoDB, REST APIs, testing, and Agile teamwork.
          </p>
        </div>
      </Section>

      {/* Footer mini note */}
      <p className="mt-8 text-xs text-gray-500">
        References and additional work samples available upon request.
      </p>
    </main>
  );
}
