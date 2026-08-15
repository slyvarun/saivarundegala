'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';
import { getAssetPath } from '@/utils/assetPath';

export default function ActivitiesSection() {
  const activities = [
    {
      id: 'ACT-01',
      title: 'T-Hub Innovation Hackathons',
      role: 'Participant & AI Systems Builder',
      period: '2024 – PRESENT',
      image: getAssetPath('/assest/thub.jpg'),
      desc: 'Built healthcare AI prototypes and graph data models at India’s premier innovation ecosystem, T-Hub Hyderabad.',
      tag: 'INNOVATION',
    },
    {
      id: 'ACT-02',
      title: 'WE Hub Startup Initiatives',
      role: 'Technical Mentor & Collaborator',
      period: '2024',
      image: getAssetPath('/assest/wehub.JPG'),
      desc: 'Collaborating on technology enablement and full-stack software architecture for incubatees at WE Hub.',
      tag: 'INCUBATION',
    },
    {
      id: 'ACT-03',
      title: 'Google DevFest & Community',
      role: 'Google Gemini Ambassador',
      period: 'SEP 2025 – FEB 2026',
      image: getAssetPath('/assest/devfest.jpg'),
      desc: 'Mentored 1,500+ developers building Multimodal RAG applications leveraging Google Vertex AI & Gemini APIs.',
      tag: 'COMMUNITY',
    },
    {
      id: 'ACT-04',
      title: 'WOW Awards & Technical Recognition',
      role: 'Excellence Awardee',
      period: '2025',
      image: getAssetPath('/assest/wow.jpg'),
      desc: 'Recognized for outstanding achievements in dual-domain AI engineering and biomedical signal analytics.',
      tag: 'HONOR',
    },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto py-10 px-4 md:px-0 relative z-20 font-space-mono">
      
      <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-8">
        <div className="flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-white" />
          <h2 className="text-xl font-bold text-white font-doto tracking-widest uppercase">
            // Activities &amp; Community Leadership
          </h2>
        </div>
        <span className="text-[10px] font-mono text-neutral-400">4 ACTIVE NODES</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {activities.map((item) => (
          <div
            key={item.id}
            className="bg-[#121212] border border-neutral-800 rounded-2xl overflow-hidden hover:border-white transition-all flex flex-col justify-between group"
          >
            <div className="relative h-44 w-full overflow-hidden bg-black">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100 group-hover:scale-105 transition-all duration-300"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute top-3 left-3 bg-black/90 border border-white/20 px-2.5 py-1 rounded text-[10px] text-white font-doto font-bold">
                {item.tag}
              </div>
            </div>

            <div className="p-5 space-y-2">
              <div className="flex justify-between items-center text-[10px] text-neutral-400 font-mono">
                <span>{item.id}</span>
                <span className="text-white font-bold">{item.period}</span>
              </div>

              <h3 className="text-base font-bold text-white font-doto group-hover:text-neutral-200 transition-colors">
                {item.title}
              </h3>
              <div className="text-xs text-white font-mono font-medium">{item.role}</div>
              <p className="text-xs text-neutral-400 leading-relaxed pt-1">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
