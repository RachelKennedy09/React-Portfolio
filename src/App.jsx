import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import VideoSection from "./components/VideoSection";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  const projects = [
    {
      id: 1,
      title: "Rocky Mountain Tails",
      desc: "Dog-walking app with authentication, notes, and MongoDB backend.",
      link: "#",
    },
    {
      id: 2,
      title: "Guided Therapy Website",
      desc: "Freelance project. A professional clinic site built for therapy practice",
      link: "#",
    },
    {
      id: 3,
      title: "Weather Network Mock App",
      desc: "Full Stack app using React.",
      link: "#",
    },
  ];
  return (
    <div id="top">
      <Header />
      <Hero />

      <main className="mx-auto max-w-6xl px-4">
        {/* projects grid */}

        <section id="projects" className="py-24">
          <VideoSection id="about" overlay="bg-[var(--brand)]/15">
            <h2 className="text-2xl font-semibold text-gray-800">Projects</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <ProjectCard
                  key={p.id}
                  title={p.title}
                  desc={p.desc}
                  link={p.link}
                />
              ))}
            </div>
          </VideoSection>
        </section>

        {/* about */}
        <section id="about" className="py-24">
          <VideoSection id="about" overlay="bg-[var(--brand)]/15">
            <div className="mx-auto max-w-3xl rounded-xl border border-[var(--brand)]/30 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-800">About Me</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Hi, I’m <span className="font-semibold">Rachel Kennedy</span> —
                a restaurant-manager-turned-software-developer living in the
                mountains of Lake Louise. After 12 years in the food & beverage
                industry, I shifted into full-stack web development where I
                bring the same dedication, organization, and creativity I used
                to run busy restaurants.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                I build responsive and playful apps using{" "}
                <span className="font-medium">React, Node.js, Express,</span>{" "}
                and <span className="font-medium">MongoDB</span>. My personal
                projects often reflect my love for dogs 🐕, mountain life 🏔️,
                and creative design.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                When I’m not coding, you’ll probably find me walking my pup
                Rami, tending to my garden, or snowboarding. I’m excited to
                collaborate on projects that make technology more approachable
                and fun.
              </p>
            </div>
          </VideoSection>
        </section>

        {/* contact */}
        <section id="contact" className="py-24">
          <VideoSection id="contact" overlay="bg-[var(--accent)]/15">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <p className="mt-2 text-gray-600">Email / socials here.</p>
          </VideoSection>
        </section>
      </main>

      <Footer />
    </div>
  );
}
