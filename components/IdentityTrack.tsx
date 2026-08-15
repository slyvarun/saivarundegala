'use client';

import React from 'react';
import { GraduationCap, Briefcase, MapPin, Code2, Users, Cpu, Activity } from 'lucide-react';
import { getAssetPath } from '@/utils/assetPath';

export default function IdentityTrack() {
  const academics = [
    {
      degree: 'B.Tech in Computer Science (AI & ML)',
      institution: 'Kommuri Pratap Reddy Institute of Technology',
      period: 'GRADUATED MAY 2026',
      details: 'CGPA: 8.25 / 10 | Specializing in Artificial Intelligence, Machine Learning & Neural Data Streams.',
    },
    {
      degree: 'Diploma in Biomedical Engineering',
      institution: 'Govt Institute of Electronics, Secunderabad',
      period: 'GRADUATED 2023',
      details: 'CGPA: 8.23 / 10 | Specialized in Physiological Signals & Diagnostic Telemetry.',
    },
  ];

  // 1. Research & Clinical Experience Nodes
  const researchClinicalNodes = [
    {
      role: 'Research Intern',
      company: 'Biomedical Engineering Dept, Osmania University',
      period: 'APRIL 2026 – PRESENT',
      logo: getAssetPath('/ousmania.jpg'),
      tag: 'RESEARCH',
      color: 'border-cyan-500/40 text-cyan-300 bg-cyan-950/60',
      desc: 'Spearheaded research initiatives focused on medical waste sorting systems and Osteoarthritis (OA) analysis utilizing foot pressure mapping to improve clinical screening. Applied biomedical engineering principles and advanced data processing techniques to build automated solutions for healthcare infrastructure.',
    },
    {
      role: 'Clinical Bio-Medical Trainee',
      company: 'Yashoda Hospitals',
      period: 'MAY 2023 – JUNE 2023',
      logo: getAssetPath('/yashoda.png'),
      tag: 'CLINICAL',
      color: 'border-rose-500/40 text-rose-300 bg-rose-950/60',
      desc: 'Hands-on operational telemetry and maintenance across ICU patient monitors & diagnostic imaging.',
    },
  ];

  // 2. Neurotech & Software Development Nodes
  const neurotechNodes = [
    {
      role: 'Software Intern',
      company: 'Avinya Neurotech',
      period: 'JUNE 2024 – JULY 2024',
      logo: getAssetPath('/avinya.jpg'),
      tag: 'NEUROTECH',
      color: 'border-purple-500/40 text-purple-300 bg-purple-950/60',
      desc: 'Contributed to cutting-edge neurotechnology projects focusing on source localization and high-resolution brain mapping to analyze neural signal patterns. Processed complex electrophysiological data to enhance spatial accuracy for brain-computer interface (BCI) applications.',
    },
  ];

  // 3. Freelance ML Consulting Nodes
  const freelanceNodes = [
    {
      role: 'Freelance Machine Learning Engineer',
      company: 'Crossing Hurdles & Independent Clients',
      period: 'FREELANCE CONSULTING',
      logo: getAssetPath('/crossinghurdles_logo.jpg'),
      tag: 'FREELANCE ML',
      color: 'border-[#1DB954]/40 text-[#1DB954] bg-[#1DB954]/10',
      desc: 'Recently embarked on freelance consulting as an ML Engineer, building customized machine learning solutions and intelligent automation pipelines for various clients. Delivering end-to-end model development, data preprocessing frameworks, and scalable AI integrations tailored to project requirements.',
    },
  ];

  // 4. College Mentorship & Community Leadership Nodes
  const mentorshipNodes = [
    {
      role: 'Gemini Ambassador & Tech Lead',
      company: 'Google Gemini Community',
      period: 'SEP 2025 – FEB 2026',
      logo: getAssetPath('/gemini.png'),
      tag: 'MENTORSHIP',
      color: 'border-amber-500/40 text-amber-300 bg-amber-950/60',
      desc: 'Mentored 1,500+ developers building Multimodal RAG applications leveraging Vertex AI.',
    },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto py-6 px-4 md:px-0 relative z-20 font-space-mono space-y-6">
      
      {/* SECTION HEADER */}
      <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
        <div className="flex items-center gap-2">
          <Briefcase className="w-4 h-4 text-white" />
          <h2 className="text-sm font-bold text-white font-doto uppercase tracking-widest">
            EXPERIENCE &amp; ACADEMICS
          </h2>
        </div>
        <div className="text-[10px] text-neutral-400 font-mono flex items-center gap-1">
          <MapPin className="w-3 h-3 text-neutral-500" />
          <span>HYDERABAD, IN</span>
        </div>
      </div>

      {/* ACADEMIC TIMELINE SECTION (2 COLUMNS) */}
      <div className="space-y-2.5">
        <div className="flex items-center gap-2 text-xs font-bold text-neutral-300 font-doto uppercase tracking-wider">
          <GraduationCap className="w-4 h-4 text-white" />
          <span>ACADEMIC BACKGROUND</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {academics.map((edu) => (
            <div
              key={edu.degree}
              className="bg-[#0B0D0E] border border-neutral-800 rounded-xl p-3.5 space-y-1 hover:border-neutral-500 transition-colors"
            >
              <div className="flex justify-between items-center text-[9px] text-neutral-400 font-mono">
                <span className="text-white font-bold">{edu.period}</span>
              </div>
              <h3 className="text-xs font-bold text-white font-doto">{edu.degree}</h3>
              <div className="text-[10px] text-neutral-400 font-mono">{edu.institution}</div>
              <p className="text-[10px] text-neutral-400 font-mono pt-1 leading-relaxed border-t border-neutral-800/80">
                {edu.details}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 1. RESEARCH & CLINICAL SECTION */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between text-xs font-bold text-neutral-300 font-doto uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-cyan-400" />
            <span>RESEARCH &amp; CLINICAL INITIATIVES</span>
          </div>
          <span className="text-[9px] text-cyan-400 font-mono font-bold">RESEARCH &amp; CLINICAL</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {researchClinicalNodes.map((exp) => (
            <div
              key={exp.company}
              className="bg-[#0B0D0E] border border-neutral-800 rounded-xl p-3.5 flex items-start gap-3 hover:border-cyan-400 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-neutral-800 bg-black shrink-0 flex items-center justify-center p-1 group-hover:border-white transition-colors">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>

              <div className="flex-1 min-w-0 space-y-1">
                <div className="flex justify-between items-center text-[9px] font-mono">
                  <span className="text-white font-bold">{exp.period}</span>
                  <span className={`text-[8px] border px-1.5 py-0.5 rounded font-mono font-bold ${exp.color}`}>
                    {exp.tag}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-white font-doto group-hover:text-cyan-300 transition-colors leading-snug">
                  {exp.role}
                </h4>
                <div className="text-[10px] text-neutral-400 font-mono truncate">
                  @ {exp.company}
                </div>
                <p className="text-[10px] text-neutral-400 font-mono leading-relaxed line-clamp-3 pt-1 border-t border-neutral-800/60">
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. NEUROTECH & SOFTWARE DEVELOPMENT SECTION */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between text-xs font-bold text-neutral-300 font-doto uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-purple-400" />
            <span>NEUROTECH &amp; BRAIN MAPPING</span>
          </div>
          <span className="text-[9px] text-purple-400 font-mono font-bold">NEUROTECH</span>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {neurotechNodes.map((exp) => (
            <div
              key={exp.company}
              className="bg-[#0B0D0E] border border-neutral-800 rounded-xl p-3.5 flex items-start gap-3 hover:border-purple-400 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-neutral-800 bg-black shrink-0 flex items-center justify-center p-1 group-hover:border-white transition-colors">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>

              <div className="flex-1 min-w-0 space-y-1">
                <div className="flex justify-between items-center text-[9px] font-mono">
                  <span className="text-white font-bold">{exp.period}</span>
                  <span className={`text-[8px] border px-1.5 py-0.5 rounded font-mono font-bold ${exp.color}`}>
                    {exp.tag}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-white font-doto group-hover:text-purple-300 transition-colors leading-snug">
                  {exp.role} <span className="text-neutral-400">@ {exp.company}</span>
                </h4>
                <p className="text-[10px] text-neutral-400 font-mono leading-relaxed pt-1 border-t border-neutral-800/60">
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. FREELANCE MACHINE LEARNING SECTION */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between text-xs font-bold text-neutral-300 font-doto uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-[#1DB954]" />
            <span>FREELANCE ML ENGINEERING &amp; CONSULTING</span>
          </div>
          <span className="text-[9px] text-[#1DB954] font-mono font-bold">FREELANCE ML</span>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {freelanceNodes.map((exp) => (
            <div
              key={exp.company}
              className="bg-[#0B0D0E] border border-neutral-800 rounded-xl p-3.5 flex items-start gap-3 hover:border-[#1DB954] transition-all group"
            >
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-neutral-800 bg-black shrink-0 flex items-center justify-center p-1 group-hover:border-white transition-colors">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>

              <div className="flex-1 min-w-0 space-y-1">
                <div className="flex justify-between items-center text-[9px] font-mono">
                  <span className="text-white font-bold">{exp.period}</span>
                  <span className={`text-[8px] border px-1.5 py-0.5 rounded font-mono font-bold ${exp.color}`}>
                    {exp.tag}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-white font-doto group-hover:text-[#1DB954] transition-colors leading-snug">
                  {exp.role} <span className="text-neutral-400">@ {exp.company}</span>
                </h4>
                <p className="text-[10px] text-neutral-400 font-mono leading-relaxed pt-1 border-t border-neutral-800/60">
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. COLLEGE MENTORSHIP & EXTRACURRICULAR SECTION */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between text-xs font-bold text-neutral-300 font-doto uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-amber-400" />
            <span>COLLEGE MENTORSHIP &amp; EXTRACURRICULAR ACTIVITIES</span>
          </div>
          <span className="text-[9px] text-amber-400 font-mono font-bold">MENTORSHIP</span>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {mentorshipNodes.map((exp) => (
            <div
              key={exp.company}
              className="bg-[#0B0D0E] border border-neutral-800 rounded-xl p-3.5 flex items-start gap-3 hover:border-amber-400 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-neutral-800 bg-black shrink-0 flex items-center justify-center p-1 group-hover:border-white transition-colors">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>

              <div className="flex-1 min-w-0 space-y-1">
                <div className="flex justify-between items-center text-[9px] font-mono">
                  <span className="text-white font-bold">{exp.period}</span>
                  <span className={`text-[8px] border px-1.5 py-0.5 rounded font-mono font-bold ${exp.color}`}>
                    {exp.tag}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-white font-doto group-hover:text-amber-300 transition-colors leading-snug">
                  {exp.role} <span className="text-neutral-400">@ {exp.company}</span>
                </h4>
                <p className="text-[10px] text-neutral-400 font-mono leading-relaxed pt-1 border-t border-neutral-800/60">
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
