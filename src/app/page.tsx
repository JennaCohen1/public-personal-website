"use client";

import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, Circle } from 'lucide-react';

const PROJECTS = [
  {
    id: "project-one",
    title: "K-Pop Demon Hunters Star Chart",
    status: "NEW",
    description: "Fun project built with my six year old.",
    github: "https://github.com/JennaCohen1/kpop-stargazer",
    website: "https://kpop-star-chart.vercel.app/",
    pitch: "[Insert project pitch here]",
    concept: "[Insert detailed concept write-up here]",
    guide: "[Insert user guide here]"
  }
];

export default function App() {
  const [view, setView] = useState<string | null>(null);
  const active = PROJECTS.find(p => p.id === view);

  if (active) {
    return (
      <main className="max-w-2xl mx-auto px-6 py-20">
        <button onClick={() => setView(null)} className="flex items-center gap-2 opacity-40 hover:opacity-100 mb-12 text-sm">
          <ArrowLeft size={16} /> Back
        </button>
        <header className="mb-12 border-b border-black/5 pb-12">
          <h1 className="text-5xl font-serif mb-10 tracking-tight">{active.title}</h1>
          <div className="grid grid-cols-[100px_1fr] gap-y-4 text-sm">
            <span className="opacity-30 uppercase tracking-widest text-[10px] font-bold">Status</span>
            <span className="flex items-center gap-2"><Circle size={8} className="fill-green-500 text-green-500" />{active.status}</span>
            <span className="opacity-30 uppercase tracking-widest text-[10px] font-bold">GitHub</span>
            <a href={active.github} className="underline decoration-black/10 hover:decoration-black">Source Code</a>
            <span className="opacity-30 uppercase tracking-widest text-[10px] font-bold">Website</span>
            <a href={active.website} className="underline decoration-black/10 hover:decoration-black">Live Link <ExternalLink className="inline" size={12} /></a>
          </div>
        </header>
        <section className="space-y-12">
          <div className="bg-white/40 p-8 rounded-2xl border border-black/5"><p className="text-xl font-serif opacity-80">&ldquo;{active.pitch}&rdquo;</p></div>
          <div className="space-y-4"><h3 className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-30">Concept</h3><p className="text-lg opacity-70">{active.concept}</p></div>
          <div className="space-y-4"><h3 className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-30">Guide</h3><p className="text-lg opacity-70">{active.guide}</p></div>
        </section>
      </main>
    );
  }

  return (
    <>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-black/5">
        <span className="font-bold text-sm tracking-wide">Jenna Cohen</span>
        <a href="https://github.com/JennaCohen1" className="text-sm opacity-50 hover:opacity-100 transition-opacity">GitHub</a>
      </nav>

      {/* Hero */}
      <main className="max-w-2xl mx-auto px-6 pt-24 pb-16 text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] opacity-40 mb-6">AI Tools by Jenna Cohen</p>
        <h1 className="text-5xl md:text-6xl font-serif tracking-tight leading-tight mb-2">
          Jenna Cohen
        </h1>
        <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-[#9AABA8] mb-8">
          My Personal Portfolio
        </h2>
        <div className="w-8 h-[2px] bg-black/10 mx-auto mb-8"></div>
        <p className="text-lg opacity-50 max-w-md mx-auto leading-relaxed">
          Showcase for a few of the projects I have built with AI.
        </p>
      </main>

      {/* Projects */}
      <section className="max-w-2xl mx-auto px-6 pb-32">
        <div className="grid gap-4">
          {PROJECTS.map((p) => (
            <button key={p.id} onClick={() => setView(p.id)} className="group w-full p-8 bg-white/50 border border-black/5 rounded-2xl hover:bg-white/80 transition-all text-left">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9AABA8] block mb-2">{p.status}</span>
              <span className="text-xl font-bold block mb-2">{p.title}</span>
              <span className="text-sm opacity-50 leading-relaxed block">{p.description}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-2xl mx-auto px-6 pb-12 pt-8 border-t border-black/5 flex justify-between opacity-30 text-[10px] font-bold uppercase tracking-widest">
        <a href="https://github.com/JennaCohen1">GitHub</a>
        <span>&copy; 2025</span>
      </footer>
    </>
  );
}
