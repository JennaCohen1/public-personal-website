"use client";

import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, Circle } from 'lucide-react';

const PROJECTS = [
  {
    id: "project-one",
    title: "Project One Name",
    status: "Shipped",
    github: "#",
    website: "#",
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
      <main className="max-w-2xl mx-auto px-6 py-20 font-sans">
        <button onClick={() => setView(null)} className="flex items-center gap-2 opacity-40 hover:opacity-100 mb-12 text-sm">
          <ArrowLeft size={16} /> Back
        </button>
        <header className="mb-12 border-b border-black/5 pb-12">
          <h1 className="text-6xl font-serif italic mb-10 tracking-tighter lowercase">{active.title}</h1>
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
          <div className="bg-white/40 p-8 rounded-2xl border border-black/5"><p className="text-xl italic font-serif opacity-80">&ldquo;{active.pitch}&rdquo;</p></div>
          <div className="space-y-4"><h3 className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-30">Concept</h3><p className="text-lg opacity-70">{active.concept}</p></div>
          <div className="space-y-4"><h3 className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-30">Guide</h3><p className="text-lg opacity-70">{active.guide}</p></div>
        </section>
      </main>
    );
  }

  return (
    <main className="max-w-2xl mx-auto px-6 py-32 font-sans">
      <header className="mb-24">
        <h1 className="text-7xl font-serif italic mb-8 tracking-tighter">Vibe Coding Lab</h1>
        <p className="text-xl leading-relaxed opacity-60 max-w-lg">[Insert your personal manifesto or bio here.]</p>
      </header>
      <section className="space-y-4">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-30 mb-6">Projects</h2>
        <div className="grid gap-3">
          {PROJECTS.map((p) => (
            <button key={p.id} onClick={() => setView(p.id)} className="group flex items-center justify-between w-full py-8 px-10 bg-white/30 border border-black/5 rounded-[2rem] hover:bg-white/80 transition-all text-left">
              <div>
                <span className="text-3xl font-serif italic block group-hover:translate-x-1 transition-transform">{p.title}</span>
                <span className="text-[10px] opacity-40 font-bold uppercase mt-2 block">{p.status}</span>
              </div>
              <span className="text-2xl opacity-20 group-hover:opacity-100 transition-all">&rarr;</span>
            </button>
          ))}
        </div>
      </section>
      <footer className="mt-40 pt-12 border-t border-black/5 flex justify-between opacity-30 text-[10px] font-bold uppercase tracking-widest">
        <div className="flex gap-8"><a href="https://github.com/JennaCohen1">GitHub</a></div>
        <span>&copy; 2025 Lab</span>
      </footer>
    </main>
  );
}
