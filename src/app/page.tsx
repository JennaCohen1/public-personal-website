"use client";

import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, Circle } from 'lucide-react';

const PROJECTS = [
  {
    id: "jenna-man",
    title: "Jenna-Man: Achievement Edition",
    status: "SHIPPED",
    description: "Pac-Man, but every dot is a real win on my path from VP to Engineer.",
    github: "https://github.com/JennaCohen1/Jenna-Man",
    website: "https://jenna-man.vercel.app/",
    image: "/Jenna.exe.png",
    pitch: "Pac-Man, but every dot is a real win on my path from VP to Engineer.",
    concept: "Claude built this game to celebrate the milestones I hit while learning to code — from 'git configured' to 'always checks the diff'. Each collectible in the maze represents a real achievement on my VP → Engineer journey. It's a love letter to progress, wrapped in retro arcade nostalgia.",
    guide: "Hit Start and navigate the maze — or let Auto-Play show you around. Every dot you eat surfaces a real achievement. Grab a power pellet to take down the ghosts. See how many wins you can collect."
  },
  {
    id: "project-one",
    title: "K-Pop Demon Hunters Star Chart",
    status: "NEW",
    description: "Fun project built with my six year old.",
    github: "https://github.com/JennaCohen1/kpop-stargazer",
    website: "https://kpop-star-chart.vercel.app/",
    image: "/kpop-preview.png",
    pitch: "A K-Pop themed star chart built with my six year old — because every demon hunter deserves a reward system.",
    concept: "A weekly star chart app with a K-Pop Demon Hunters theme. Kids earn stars for completing tasks, and the chart resets automatically every week. Everything — the child's name, tasks, and star goals — is fully editable in settings. Designed to live on your home screen and work offline, with all data saved locally on the device.",
    guide: "Open the app and tap Settings to set up your child's name and tasks. Tap a task to award a star. The chart resets every week automatically. Add to your home screen for quick access — all progress is saved locally so it works without internet."
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
            <a href={active.github} className="underline decoration-black/10 hover:decoration-black break-all">{active.github.replace('https://', '')} <ExternalLink className="inline" size={12} /></a>
            <span className="opacity-30 uppercase tracking-widest text-[10px] font-bold">Website</span>
            <a href={active.website} className="underline decoration-black/10 hover:decoration-black break-all">{active.website.replace('https://', '').replace(/\/$/, '')} <ExternalLink className="inline" size={12} /></a>
          </div>
        </header>
        <section className="space-y-12">
          {active.image && (
            <a href={active.website} className="block rounded-2xl overflow-hidden border border-black/5 hover:border-black/15 transition-all">
              <img src={active.image} alt={`${active.title} preview`} className="w-full" />
            </a>
          )}
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
        <div className="flex items-center gap-3">
          <span className="font-bold text-sm tracking-wide">Jenna Cohen</span>
          <a href="https://github.com/JennaCohen1" className="opacity-40 hover:opacity-100 transition-opacity" aria-label="GitHub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/jenna-cohen-a37b70171/" className="opacity-40 hover:opacity-100 transition-opacity" aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
      </nav>

      {/* Hero */}
      <main className="max-w-2xl mx-auto px-6 pt-24 pb-16 text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] opacity-40 mb-6">Building in Public to Inspire Others</p>
        <h1 className="text-5xl md:text-6xl font-serif tracking-tight leading-tight mb-2">
          Jenna Cohen
        </h1>
        <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-[#9AABA8] mb-4">
          My Personal Portfolio
        </h2>
        <div className="w-8 h-[2px] bg-black/10 mx-auto mb-4"></div>
        <p className="text-lg opacity-50 max-w-md mx-auto leading-relaxed">
          Showcasing a few of the projects that I have built with AI.
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
      <footer className="max-w-2xl mx-auto px-6 pb-12 pt-8 border-t border-black/5 flex justify-between items-center opacity-30 text-[10px] font-bold uppercase tracking-widest">
        <div className="flex items-center gap-4">
          <a href="https://github.com/JennaCohen1" aria-label="GitHub"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg></a>
          <a href="https://www.linkedin.com/in/jenna-cohen-a37b70171/" aria-label="LinkedIn"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
        </div>
        <span>&copy; 2025</span>
      </footer>
    </>
  );
}
