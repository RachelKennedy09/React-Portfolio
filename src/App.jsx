import React from "react";
// No Header — Hero acts as the header/landing
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Resume, { Section, ProjectItem } from "./components/Resume";
import "./index.css";

export default function App() {
  return (
    <div
      id="top"
      className="min-h-screen bg-gradient-to-b from-[#3d8f82] to-[var(--lake-green)]"
    >
      <Hero />

      {/* Split layout: Resume (left) | Projects (right) */}
      <section className="mx-auto max-w-6xl px-4 py-16 grid gap-8 lg:grid-cols-2">
        {/* LEFT: Resume */}
        <aside id="resume" className="lg:sticky lg:top-6 self-start">
          <Resume />
        </aside>

        {/* RIGHT: Selected Projects */}
        <div id="projects">
          <Section title="Selected Projects">
            <ProjectItem
              name="Rocky Mountain Tails (Dog Walking App Project)"
              href="https://rachelkennedy09.github.io/RockyMountainTails/"
              bullets={[
                "Full-stack app for a dog-walking business with user-scoped CRUD and auth-guarded routes.",
                "REST API with structured error handling; responsive UI with form validation and brand-aligned styling.",
              ]}
            />
            <ProjectItem
              name="Guided Psychotherapy Collective (Professional Website)"
              href=" https://rachelkennedy09.github.io/Guided/"
              stack={["HTML", "CSS", "JavaScript", "SEO", "Accessibility"]}
              bullets={[
                "Professional responsive website for a psychotherapy therapy practice.",
                "Secure patient registration flow, clear service pathways, and empathetic content strategy.",
              ]}
            />
          </Section>
        </div>
      </section>

      <Footer />
    </div>
  );
}
