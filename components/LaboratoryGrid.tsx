'use client';

import React from 'react';
import { Terminal, ExternalLink } from 'lucide-react';

interface ProjectItem {
  id: string;
  tag: string;
  title: string;
  desc: string;
  tech: string[];
  metrics: string;
  link?: string;
}

export default function LaboratoryGrid() {
  const projects: ProjectItem[] = [
    {
      id: 'MOD-01',
      tag: 'GRAPH RAG',
      title: 'MedGraph Nexus',
      desc: 'Engineered a graph-based retrieval-augmented generation (RAG) backend system utilizing Neo4j and FastAPI for pharmaceutical data intelligence. Designed advanced knowledge graph pipelines to improve context retrieval accuracy and semantic mapping.',
      tech: ['Neo4j', 'FastAPI', 'LangChain', 'Python'],
      metrics: 'CONTEXT_PRECISION: 98.4% // LATENCY: 42ms',
      link: 'https://github.com/slyvarun',
    },
    {
      id: 'MOD-02',
      tag: 'AGENTIC AI',
      title: 'Finete.AI',
      desc: 'Engineered a full-stack platform featuring real-time financial anomaly detection and local, privacy-focused agent workflows. Implemented multi-phase implementation roadmaps for automated financial auditing and anomaly alerts.',
      tech: ['Ollama', 'Llama3', 'SQLite', 'TypeScript'],
      metrics: 'LOCAL_EXEC: 100% // ANOMALY_ALERTS: REALTIME',
      link: 'https://github.com/slyvarun',
    },
    {
      id: 'MOD-03',
      tag: 'COMPUTER VISION',
      title: 'MRI Brain Tumor Detection Model',
      desc: 'Developed a deep learning computer vision model for multi-class brain tumor classification and MRI scan analysis. Processed complex medical imaging datasets to optimize diagnostic accuracy and feature extraction.',
      tech: ['PyTorch', 'OpenCV', 'MONAI', 'CUDA'],
      metrics: 'ACCURACY: 96.8% // CLASSES: MULTI-CLASS',
      link: 'https://github.com/slyvarun',
    },
    {
      id: 'MOD-04',
      tag: 'MACHINE LEARNING',
      title: 'Railway Communication Anomaly System',
      desc: 'Built an interpretable machine learning system focused on detecting anomalies and telemetry issues in railway communication networks. Integrated semantic feature extraction pipelines to parse real-time operational data streams.',
      tech: ['Python', 'Scikit-Learn', 'FastAPI', 'Pandas'],
      metrics: 'TELEMETRY_INGEST: REALTIME // INTERPRETABLE_ML',
      link: 'https://github.com/slyvarun',
    },
    {
      id: 'MOD-05',
      tag: 'NETWORKING TELEMETRY',
      title: 'Real-Time Packet Loss Detection System',
      desc: 'Developed a networking telemetry and monitoring architecture designed to capture and analyze traffic packet loss in real time. Implemented robust logging and traffic evaluation mechanisms to quickly isolate network degradations.',
      tech: ['Python', 'Socket.io', 'C++', 'Docker'],
      metrics: 'PACKET_INSPECTION: HIGH_SPEED // DEGRADATION_ALERT',
      link: 'https://github.com/slyvarun',
    },
    {
      id: 'MOD-06',
      tag: 'GLOBAL MOBILITY',
      title: 'Global Vehicle Pooling Platform',
      desc: 'Designed a scalable vehicle-pooling application tailored for a general, global audience to optimize shared mobility. Focused on core backend routing logic and efficient matching algorithms to connect riders and drivers.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'REST API'],
      metrics: 'GLOBAL_SCALE // ROUTE_MATCHING: OPTIMAL',
      link: 'https://github.com/slyvarun',
    },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto py-8 px-4 md:px-0 relative z-20 font-space-mono space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
        <div className="flex items-center gap-3">
          <Terminal className="w-5 h-5 text-white" />
          <h2 className="text-xl font-bold text-white font-doto tracking-widest uppercase">
            // PROJECTS &amp; SYSTEM MODULES
          </h2>
        </div>
        <div className="text-[10px] text-neutral-400 font-mono">
          6 PRODUCTION MODULES
        </div>
      </div>

      {/* CLEAN HIGH-TECH GRID LAYOUT (2 COLUMNS / 3 COLUMNS) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="bg-[#0B0D0E] border border-neutral-800 rounded-2xl p-5 flex flex-col justify-between space-y-4 hover:border-white transition-all group shadow-xl"
          >
            {/* Top Badge & Tag */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-[10px] font-mono">
                <span className="text-neutral-500 font-bold">{proj.id}</span>
                <span className="px-2 py-0.5 rounded font-mono font-bold bg-neutral-900 text-white border border-neutral-700">
                  {proj.tag}
                </span>
              </div>

              <h3 className="text-base font-bold text-white font-doto group-hover:text-neutral-200 transition-colors">
                {proj.title}
              </h3>

              <p className="text-xs text-neutral-300 leading-relaxed font-mono">
                {proj.desc}
              </p>
            </div>

            {/* Metrics & Tech Stack */}
            <div className="space-y-3 pt-3 border-t border-neutral-800/80">
              <div className="bg-[#060708] border border-neutral-800 p-2 rounded-lg text-[9px] text-neutral-400 font-mono">
                <span className="text-white font-bold">&gt;&gt;&gt;</span> {proj.metrics}
              </div>

              <div className="flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-[#121212] border border-neutral-800 text-[9px] text-neutral-300 rounded font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] text-white hover:underline font-mono bg-white/10 border border-white/20 px-2.5 py-1 rounded shrink-0"
                  >
                    <span>REPO</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
