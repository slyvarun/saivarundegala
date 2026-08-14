'use client';

import React from 'react';
import { BookOpen, ExternalLink, Clock, Pin } from 'lucide-react';

export default function MediumBlogs() {
  const articles = [
    {
      id: 'PUB-01',
      title: 'The Unofficial Curriculum: How Startups Forced Me to Master Networking',
      snippet: 'When I was in school, "startups" were buzzwords — cool companies doing big things. But now, as I navigate my AI/ML engineering course...',
      readTime: '5 MIN READ',
      tag: 'NETWORKING & STARTUPS',
      date: 'OCT 20, 2025',
      isPinned: true,
      url: 'https://medium.com/@slyvarun',
    },
    {
      id: 'PUB-02',
      title: 'The Pivot: From Clinical Practice to Computational Thinking',
      snippet: 'The Challenge & My Secret Weapon: Code. Bridging hands-on biomedical clinical experience with artificial intelligence & software engineering.',
      readTime: '6 MIN READ',
      tag: 'CAREER PIVOT & CODE',
      date: 'OCT 20, 2025',
      isPinned: true,
      url: 'https://medium.com/@slyvarun',
    },
    {
      id: 'PUB-03',
      title: 'Beyond the Desk: Why Your Early-Stage Startup Needs a Lab, Not a Workspace',
      snippet: "If you've spent any time in the Hyderabad startup ecosystem lately, you've likely felt the gravity of T-Hub. It's massive, it's iconic, and...",
      readTime: '7 MIN READ',
      tag: 'STARTUP ECOSYSTEM',
      date: 'MAR 4, 2026',
      isPinned: false,
      url: 'https://medium.com/@slyvarun',
    },
    {
      id: 'PUB-04',
      title: 'From Senior to Mentor: A Conversation That Changed My Direction',
      snippet: 'Some of the most impactful mentorships do not begin with a formal introduction or a structured plan. They begin with a simple conversation.',
      readTime: '4 MIN READ',
      tag: 'MENTORSHIP',
      date: 'DEC 18, 2025',
      isPinned: false,
      url: 'https://medium.com/@slyvarun',
    },
    {
      id: 'PUB-05',
      title: 'The Ultimate Training Ground: My High-Stakes Experience in Biomedical Engineering',
      snippet: 'From Heart Monitors to Operating Theaters: My Foundation. Hands-on clinical telemetry, operational maintenance, and biomedical devices.',
      readTime: '6 MIN READ',
      tag: 'BIOMEDICAL TELEMETRY',
      date: 'OCT 20, 2025',
      isPinned: false,
      url: 'https://medium.com/@slyvarun',
    },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto py-8 px-4 md:px-0 relative z-20 font-space-mono space-y-6">
      
      <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
        <div className="flex items-center gap-3">
          <BookOpen className="w-5 h-5 text-white" />
          <h2 className="text-xl font-bold text-white font-doto tracking-widest uppercase">
            // Medium Articles &amp; Writing
          </h2>
        </div>
        <a
          href="https://medium.com/@slyvarun"
          target="_blank"
          rel="noreferrer"
          className="text-xs text-white hover:underline font-mono inline-flex items-center gap-1.5 bg-neutral-900 border border-neutral-700 px-3 py-1.5 rounded-lg"
        >
          <span>VIEW MEDIUM PROFILE</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="space-y-3.5">
        {articles.map((art) => (
          <div
            key={art.id}
            className="bg-[#0B0D0E] border border-neutral-800 rounded-xl p-5 hover:border-white transition-all flex flex-col md:flex-row justify-between gap-4 group shadow-xl"
          >
            <div className="space-y-2 flex-1">
              <div className="flex items-center gap-2.5 text-[10px] font-mono">
                <span className="text-neutral-500 font-bold">{art.id}</span>
                <span className="text-white font-bold bg-neutral-900 px-2 py-0.5 rounded border border-neutral-700">
                  {art.tag}
                </span>
                <span className="text-neutral-400">{art.date}</span>
                {art.isPinned && (
                  <span className="inline-flex items-center gap-1 text-[9px] text-amber-400 bg-amber-950/60 border border-amber-500/40 px-2 py-0.5 rounded font-bold">
                    <Pin className="w-2.5 h-2.5 fill-amber-400" />
                    <span>PINNED</span>
                  </span>
                )}
              </div>

              <h3 className="text-base font-bold text-white font-doto group-hover:text-neutral-200 transition-colors leading-snug">
                {art.title}
              </h3>

              <p className="text-xs text-neutral-300 leading-relaxed font-mono">
                {art.snippet}
              </p>
            </div>

            <div className="flex flex-row md:flex-col justify-between items-end shrink-0 border-t md:border-t-0 md:border-l border-neutral-800/80 pt-3 md:pt-0 md:pl-5">
              <div className="flex items-center gap-1.5 text-[10px] text-neutral-400 font-mono">
                <Clock className="w-3 h-3 text-neutral-300" />
                <span>{art.readTime}</span>
              </div>

              <a
                href={art.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center font-mono text-xs bg-white text-black font-bold hover:bg-neutral-200 h-8 px-3.5 rounded-lg transition-all"
              >
                <span>READ ARTICLE</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
