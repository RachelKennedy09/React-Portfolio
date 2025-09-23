import React from "react";

export default function ProjectCard({ title, desc, link }) {
  return (
    <article className="rounded-xl border border-black/10 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-lg front-semibold text-gray-800">{title}</h3>

      <p className="mt-2 text-sm text-gray-600">{desc}</p>
      <div className="mt-4">
        <a
          href={link}
          className="inline-block rounded-full border border-black/10 bg-pink-200/80 px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-pink-300"
        >
          View Project
        </a>
      </div>
    </article>
  );
}
