'use client';

import React from 'react';
import TelemetryHeader from '@/components/TelemetryHeader';
import CountdownTo50 from '@/components/CountdownTo50';
import LunarTimeWidget from '@/components/LunarTimeWidget';
import { getAssetPath } from '@/utils/assetPath';
import {
  Brain,
  Code2,
  Cpu,
  Github,
  Linkedin,
  BookOpen,
  Mail,
  Twitter,
  Instagram,
  ExternalLink,
  Zap,
  Terminal,
  Database,
  Layers,
  Sparkles,
  Share2,
} from 'lucide-react';

export default function Home() {
  // Technical skills matrix with NEUTRAL CHIP BACKGROUND & VIBRANT COLORFUL LOGOS
  const skillNodes = [
    // AI, RAG, ML, LLM
    {
      name: 'Graph RAG',
      category: 'AI Vector Architecture',
      icon: (
        <svg className="w-3.5 h-3.5 fill-current text-purple-400" viewBox="0 0 24 24">
          <circle cx="12" cy="5" r="2.5" />
          <circle cx="5" cy="18" r="2.5" />
          <circle cx="19" cy="18" r="2.5" />
          <line x1="12" y1="7.5" x2="5" y2="15.5" stroke="currentColor" strokeWidth="1.5" />
          <line x1="12" y1="7.5" x2="19" y2="15.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      name: 'Machine Learning (ML)',
      category: 'Core AI Models',
      icon: <Brain className="w-3.5 h-3.5 text-pink-400" />,
    },
    {
      name: 'LLM & Agentic AI',
      category: 'Generative AI',
      icon: <Sparkles className="w-3.5 h-3.5 text-cyan-400" />,
    },
    {
      name: 'Artificial Intelligence (AI)',
      category: 'Neural Systems',
      icon: <Cpu className="w-3.5 h-3.5 text-indigo-400" />,
    },

    // Languages & Web
    {
      name: 'Python',
      category: 'Language',
      icon: (
        <svg className="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 24 24">
          <path d="M11.927 0C6.14 0 6.51 2.51 6.51 2.51l.006 2.6H12v.779H4.195S0 5.405 0 11.238c0 5.834 3.655 5.617 3.655 5.617h2.183v-3.082s-.119-3.655 3.536-3.655h5.576s3.377.06 3.377-3.258V3.655S18.784 0 11.927 0zm-2.48 1.488c.49 0 .888.397.888.888 0 .49-.398.888-.888.888a.889.889 0 0 1-.888-.888c0-.491.398-.888.888-.888zM12.073 24c5.787 0 5.417-2.51 5.417-2.51l-.006-2.6H12v-.779h7.805S24 18.595 24 12.762c0-5.834-3.655-5.617-3.655-5.617h-2.183v3.082s.119 3.655-3.536 3.655H9.05s-3.377-.06-3.377 3.258v3.428s-.457 3.655 6.4 3.655zm2.48-1.488a.889.889 0 0 1-.888-.888c0-.49.398-.888.888-.888.49 0 .888.398.888.888 0 .491-.398.888-.888.888z" />
        </svg>
      ),
    },
    {
      name: 'React',
      category: 'Frontend Framework',
      icon: (
        <svg className="w-3.5 h-3.5 text-sky-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6">
          <circle cx="50" cy="50" r="10" fill="currentColor" />
          <ellipse cx="50" cy="50" rx="40" ry="16" />
          <ellipse cx="50" cy="50" rx="40" ry="16" transform="rotate(60 50 50)" />
          <ellipse cx="50" cy="50" rx="40" ry="16" transform="rotate(120 50 50)" />
        </svg>
      ),
    },
    {
      name: 'JavaScript (JS)',
      category: 'Web Logic',
      icon: <Code2 className="w-3.5 h-3.5 text-yellow-300" />,
    },
    {
      name: 'Java',
      category: 'Backend OOP',
      icon: (
        <svg className="w-3.5 h-3.5 text-orange-400 fill-current" viewBox="0 0 24 24">
          <path d="M4.603 12.087s-1.18 1.154 1.576 1.487c3.34.404 6.702.437 10.042 0 2.756-.333 1.576-1.487 1.576-1.487H4.603zm.784 2.873c.783.333 4.254.912 7.078.912 2.824 0 6.295-.579 7.078-.912 0 0-.58.835-2.75 1.25-2.17.417-6.505.417-8.675 0-2.17-.415-2.731-1.25-2.731-1.25zM12 0C7.142 0 4.254 3.731 4.254 3.731s.783.58 2.348 0c0 0-1.565 2.17.783 3.913 2.348 1.743 4.696.58 4.696.58s1.565.58.783 2.348c-.783 1.768-.783 3.913.783 3.913 1.565 0 2.348-1.565 2.348-2.348 0-.783-.783-.783-.783-1.565 0-.783 1.565-1.565 1.565-3.13 0-1.565-1.565-2.348-1.565-2.348s.783-.783 0-1.565c-.783-.783-2.348-1.565-3.913-3.522z" />
        </svg>
      ),
    },
    {
      name: 'C / C++',
      category: 'Systems Language',
      icon: (
        <svg className="w-3.5 h-3.5 text-blue-400 fill-current" viewBox="0 0 24 24">
          <path d="M22.38 5.4a12.7 12.7 0 0 0-4.7-4.11C16.14.47 14.12 0 11.64 0c-2.48 0-4.5.47-6.04 1.29A12.7 12.7 0 0 0 .9 5.4C.3 6.64 0 8.04 0 9.6v4.8c0 1.56.3 2.96.9 4.2a12.7 12.7 0 0 0 4.7 4.11c1.54.82 3.56 1.29 6.04 1.29 2.48 0 4.5-.47 6.04-1.29a12.7 12.7 0 0 0 4.7-4.11c.6-1.24.9-2.64.9-4.2V9.6c0-1.56-.3-2.96-.9-4.2zm-6.68 9.9c0 .76-.17 1.35-.51 1.77-.34.42-.87.63-1.59.63-.72 0-1.25-.21-1.59-.63-.34-.42-.51-1.01-.51-1.77v-6.6c0-.76.17-1.35.51-1.77.34-.42.87-.63 1.59-.63.72 0 1.25.21 1.59.63.34.42.51 1.01.51 1.77v6.6z" />
        </svg>
      ),
    },
    {
      name: 'SQL',
      category: 'Database Query',
      icon: <Database className="w-3.5 h-3.5 text-emerald-400" />,
    },
    {
      name: 'PostgreSQL',
      category: 'Relational DB',
      icon: (
        <svg className="w-3.5 h-3.5 text-cyan-300 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1.75 18.5h-3.5v-2.5h3.5v2.5zm2.5-4.5h-8.5v-2.5h8.5v2.5zm2-4.5h-12.5v-2.5h12.5v2.5z" />
        </svg>
      ),
    },
    {
      name: 'Neo4j',
      category: 'Graph DB',
      icon: <Layers className="w-3.5 h-3.5 text-teal-300" />,
    },

    // Developer Tools, Cloud & DevOps
    {
      name: 'Docker',
      category: 'Containers',
      icon: (
        <svg className="w-3.5 h-3.5 text-sky-400 fill-current" viewBox="0 0 24 24">
          <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.186v1.887c0 .102.083.185.185.185zm-2.954-2.258h2.119a.186.186 0 0 0 .185-.186V6.747a.186.186 0 0 0-.185-.186h-2.119a.186.186 0 0 0-.186.186v1.887c0 .102.084.186.186.186zm0 4.516h2.119a.186.186 0 0 0 .185-.186v-1.887a.186.186 0 0 0-.185-.185h-2.119a.186.186 0 0 0-.186.185v1.887c0 .102.084.186.186.186zm-2.956-4.516h2.119a.186.186 0 0 0 .185-.186V6.747a.186.186 0 0 0-.185-.186H8.073a.186.186 0 0 0-.185.186v1.887c0 .102.083.186.185.186zm0 4.516h2.119a.186.186 0 0 0 .185-.186v-1.887a.186.186 0 0 0-.185-.185H8.073a.186.186 0 0 0-.185.185v1.887c0 .102.083.186.185.186zm-2.955 0h2.119a.186.186 0 0 0 .186-.186v-1.887a.186.186 0 0 0-.186-.185H5.118a.186.186 0 0 0-.185.185v1.887c0 .102.083.186.185.186zm18.398.922c-.443-.314-1.428-.42-2.316-.395a5.556 5.556 0 0 0-3.34 1.109c-.279.206-.576.438-.894.697a.186.186 0 0 1-.258-.027l-.608-.727a.186.186 0 0 1 .022-.262c.382-.317.74-.6 1.082-.857 1.341-1.01 2.87-1.491 4.518-1.424 1.353.055 2.656.444 3.766 1.127a.186.186 0 0 1 .035.257l-.683.921a.186.186 0 0 1-.256.039z" />
        </svg>
      ),
    },
    {
      name: 'GCP',
      category: 'Cloud Infra',
      icon: (
        <svg className="w-3.5 h-3.5 text-red-400 fill-current" viewBox="0 0 24 24">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z" />
        </svg>
      ),
    },
    {
      name: 'Postman',
      category: 'API Testing',
      icon: (
        <svg className="w-3.5 h-3.5 text-orange-400 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm-1.5 17.5l-5-5 1.41-1.41L10.5 14.67l7.59-7.59L19.5 8.5l-9 9z" />
        </svg>
      ),
    },
    {
      name: 'REST API',
      category: 'Microservices',
      icon: <Terminal className="w-3.5 h-3.5 text-emerald-300" />,
    },
    {
      name: 'Git',
      category: 'Version Control',
      icon: (
        <svg className="w-3.5 h-3.5 text-rose-400 fill-current" viewBox="0 0 24 24">
          <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.216 1.378-.073 1.888.437.514.514.656 1.254.43 1.898l2.67 2.67c.644-.226 1.384-.084 1.898.43.727.728.727 1.908 0 2.636-.727.727-1.908.727-2.636 0-.53-.53-.664-1.28-.403-1.928L12.59 8.76v5.86c.216.088.42.22.593.393.728.727.728 1.908 0 2.636-.728.727-1.908.727-2.637 0-.727-.728-.727-1.909 0-2.636.19-.19.41-.328.643-.412V8.677c-.234-.084-.453-.222-.643-.412-.52-.52-.662-1.257-.42-1.9l-2.73-2.73-6.52 6.52c-.603.604-.603 1.582 0 2.187l10.48 10.478c.604.604 1.582.604 2.187 0l10.478-10.48c.604-.603.604-1.58.002-2.185z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      category: 'CI/CD & Code',
      icon: <Github className="w-3.5 h-3.5 text-purple-300" />,
    },
  ];

  // Exact User Specified Social Links Knowledge Graph
  const socialNodes = [
    {
      id: 'linkedin',
      label: 'LinkedIn',
      handle: 'saivarundegala',
      url: 'https://www.linkedin.com/in/saivarundegala/',
      icon: <Linkedin className="w-4 h-4 text-sky-400" />,
      cx: 140,
      cy: 60,
    },
    {
      id: 'github',
      label: 'GitHub',
      handle: 'slyvarun',
      url: 'https://github.com/slyvarun',
      icon: <Github className="w-4 h-4 text-purple-400" />,
      cx: 460,
      cy: 60,
    },
    {
      id: 'medium',
      label: 'Medium',
      handle: '@slyvarun',
      url: 'https://medium.com/@slyvarun',
      icon: <BookOpen className="w-4 h-4 text-emerald-400" />,
      cx: 90,
      cy: 180,
    },
    {
      id: 'instagram',
      label: 'Instagram',
      handle: '@varun__ae',
      url: 'https://www.instagram.com/varun__ae/',
      icon: <Instagram className="w-4 h-4 text-pink-400" />,
      cx: 510,
      cy: 180,
    },
    {
      id: 'twitter',
      label: 'X / Twitter',
      handle: '@slyvarun',
      url: 'https://x.com/slyvarun',
      icon: <Twitter className="w-4 h-4 text-cyan-400" />,
      cx: 240,
      cy: 225,
    },
    {
      id: 'email',
      label: 'Email Protocol',
      handle: 'saivarundegala@gmail.com',
      url: 'mailto:saivarundegala@gmail.com',
      icon: <Mail className="w-4 h-4 text-rose-400" />,
      cx: 380,
      cy: 225,
    },
  ];

  const centerNode = { cx: 300, cy: 120 };

  return (
    <main className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <TelemetryHeader />

      <section className="w-full max-w-4xl mx-auto py-4 px-4 md:px-6 relative z-20 font-space-mono space-y-6">

        {/* REALTIME TIME, DATE & PIXEL LUNAR POSITION WIDGET */}
        <LunarTimeWidget />

        {/* TOP INTRO HERO CARD WITH NESTED TILTED STAMP */}
        <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-5 md:p-6 space-y-5 shadow-2xl relative overflow-hidden">

          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full animate-ping" />
              <span className="text-xs font-bold text-white font-doto uppercase tracking-widest">
                OVERVIEW
              </span>
            </div>
            <div className="text-[10px] text-neutral-400 font-mono">
              HYDERABAD, IN
            </div>
          </div>

          {/* MAIN INTRO CONTENT & STAMP SIDE-BY-SIDE GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">

            {/* INTRO TEXT & DESCRIPTION */}
            <div className="lg:col-span-7 space-y-3">
              <h2 className="text-xl md:text-2xl font-bold font-doto text-white leading-tight">
                Architecting Autonomous Intelligence &amp; <br />
                <span className="text-neutral-400 underline decoration-neutral-700">Bio-Digital Signals</span>.
              </h2>

              <p className="text-xs text-neutral-300 leading-relaxed font-mono">
                Engineering next-gen AI systems that bridge deep neural graph representations with real-world biological intelligence. Dual-domain specialist turning complex data streams into production-grade Graph RAG engines, autonomous agents, and real-time WebGL experiences.
              </p>

              {/* TAILORED USER BADGES */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                <div className="bg-[#0B0D0E] border border-neutral-800 p-2 rounded-lg space-y-0.5">
                  <div className="text-[8px] text-neutral-400 font-doto uppercase">ACADEMIC MATRIX</div>
                  <div className="text-[10px] font-bold text-white font-mono">B.Tech CSE (AI/ML) 8.25 CGPA</div>
                </div>
                <div className="bg-[#0B0D0E] border border-neutral-800 p-2 rounded-lg space-y-0.5">
                  <div className="text-[8px] text-neutral-400 font-doto uppercase">WANNA LEAD</div>
                  <div className="text-[10px] font-bold text-emerald-400 font-mono">Slytherin 🐍</div>
                </div>
                <div className="bg-[#0B0D0E] border border-neutral-800 p-2 rounded-lg space-y-0.5">
                  <div className="text-[8px] text-neutral-400 font-doto uppercase">LOCATION</div>
                  <div className="text-[10px] font-bold text-white font-mono">Hyderabad</div>
                </div>
              </div>
            </div>

            {/* TILTED LETTER STAMP COUNTDOWN & RESEARCH PAPER LINK */}
            <div className="lg:col-span-5 flex flex-col items-end space-y-3">
              <CountdownTo50 />

              {/* PUBLISHED RESEARCH PAPER LINK CARD */}
              <a
                href="https://ajaccm.com/journal/index.php/ajaccm/article/view/503"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#0B0D0E] border border-cyan-500/40 hover:border-cyan-400 p-3 rounded-xl flex items-center justify-between gap-3 shadow-lg group transition-all"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-7 h-7 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center shrink-0">
                    <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[9px] font-bold text-cyan-300 font-mono tracking-wider uppercase">
                      PUBLISHED RESEARCH PAPER
                    </span>
                    <span className="text-[10px] text-white font-doto font-bold truncate">
                      AJACCM Journal Article #503
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400 group-hover:text-white transition-colors shrink-0" />
              </a>
            </div>

          </div>

        </div>

        {/* TECHNICAL SKILLS MATRIX */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 border-b border-neutral-800 pb-2.5">
            <Zap className="w-4 h-4 text-white" />
            <h3 className="text-xs font-bold text-white font-doto uppercase tracking-widest">
              SKILLS
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {skillNodes.map((s) => (
              <div
                key={s.name}
                className="bg-[#0B0D0E] border border-neutral-800 rounded-xl px-3 py-1.5 flex items-center gap-2 hover:border-white hover:bg-neutral-800/80 transition-all cursor-pointer group shadow-sm"
              >
                <div className="w-5.5 h-5.5 rounded-md bg-neutral-900 border border-neutral-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold font-doto text-white group-hover:text-neutral-200">
                    {s.name}
                  </span>
                  <span className="text-[8px] text-neutral-500 font-mono leading-none">
                    {s.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SOCIAL KNOWLEDGE GRAPH NETWORK */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-2.5">
            <div className="flex items-center gap-2">
              <Share2 className="w-4 h-4 text-white" />
              <h3 className="text-xs font-bold text-white font-doto uppercase tracking-widest">
                SOCIALS
              </h3>
            </div>
          </div>

          <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-4 md:p-6 relative overflow-hidden shadow-2xl">

            {/* SVG Connecting Edges */}
            <div className="relative w-full h-[260px] block">
              <svg className="w-full h-full block" viewBox="0 0 600 260">
                <defs>
                  <pattern id="graphGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#graphGrid)" />

                {/* Dotted Edges connecting central node to satellite nodes */}
                {socialNodes.map((s) => (
                  <g key={`edge-${s.id}`}>
                    <line
                      x1={centerNode.cx}
                      y1={centerNode.cy}
                      x2={s.cx}
                      y2={s.cy}
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeDasharray="4 3"
                      strokeOpacity="0.4"
                    />
                    <circle
                      cx={(centerNode.cx + s.cx) / 2}
                      cy={(centerNode.cy + s.cy) / 2}
                      r="2"
                      fill="#ffffff"
                      className="animate-ping"
                    />
                  </g>
                ))}
              </svg>

              {/* Central Main Node: PIXEL ART COLORFUL GOD'S HAND */}
              <div
                className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center pointer-events-none z-10"
                style={{ left: '50%', top: '46%' }}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-amber-400 bg-black shadow-[0_0_30px_rgba(251,191,36,0.7)] relative group">
                  <img
                    src={getAssetPath('/gods_hand_pixel_only.png')}
                    alt="Pixel Art God's Hand"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    style={{ imageRendering: 'pixelated' }}
                  />
                </div>
              </div>

              {/* Overlay Interactive Social Nodes */}
              <div className="absolute inset-0 z-20 pointer-events-none">
                {socialNodes.map((s) => {
                  const leftPct = (s.cx / 600) * 100;
                  const topPct = (s.cy / 260) * 100;

                  return (
                    <a
                      key={s.id}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute pointer-events-auto cursor-pointer -translate-x-1/2 -translate-y-1/2 bg-[#0B0D0E] border border-neutral-700 hover:border-white rounded-xl px-3 py-1.5 flex items-center gap-2 shadow-2xl hover:scale-110 transition-all group z-20"
                      style={{ left: `${leftPct}%`, top: `${topPct}%` }}
                    >
                      <div className="w-6 h-6 rounded-lg bg-neutral-900 border border-neutral-700 flex items-center justify-center shrink-0 group-hover:border-white transition-colors">
                        {s.icon}
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-[11px] font-bold text-white font-doto group-hover:text-neutral-200 leading-none">
                          {s.label}
                        </span>
                        <span className="text-[8px] text-neutral-400 font-mono leading-none mt-0.5">
                          {s.handle}
                        </span>
                      </div>
                      <ExternalLink className="w-3 h-3 text-neutral-400 group-hover:text-white transition-colors ml-0.5" />
                    </a>
                  );
                })}
              </div>

            </div>

          </div>
        </div>

      </section>

      <footer className="w-full max-w-4xl mx-auto py-6 px-4 border-t border-neutral-800 text-center font-mono text-xs text-neutral-500 relative z-20">
        <div>SAI VARUN DEGALA © 2026</div>
      </footer>
    </main>
  );
}
