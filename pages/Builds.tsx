
import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/content';
import { SpotlightCard } from '../components/SpotlightCard';
import { ExternalLink, CheckCircle2, Monitor, Laptop, Rocket, Eye, ArrowUpRight } from 'lucide-react';

export const Builds = () => {
  return (
    <div className="space-y-12 pb-24">
      {/* Punchier Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4 max-w-4xl"
      >
        <div className="flex items-center gap-2 text-primary font-bold tracking-tighter uppercase text-xs">
          <Rocket className="w-3.5 h-3.5" />
          Production Log
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none uppercase italic">Proof of Work</h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
          Artifacts of execution. Every build is a vertical slice of technical capability meeting strategic intent.
        </p>
      </motion.div>

      {/* Simplified Divider */}
      <div className="h-px w-full bg-border/40" />

      {/* Project List with Sticky Media */}
      <div className="space-y-48 pt-12">
        {projects.map((project, index) => (
          <div key={project.id} className="relative">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              
              {/* Sticky Media Column */}
              <div className="lg:sticky lg:top-32 space-y-4">
                <SpotlightCard className="relative overflow-hidden aspect-video rounded-3xl border-2 border-primary/10 shadow-2xl bg-black ring-1 ring-white/10 group">
                  {project.videoUrl ? (
                    <iframe 
                      src={project.videoUrl} 
                      className="w-full h-full absolute inset-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen 
                      title={project.title}
                      frameBorder="0"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-950 text-zinc-500 relative">
                       <div className="absolute inset-0 opacity-[0.02]" 
                            style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '30px 30px' }} 
                       />
                       <div className="relative z-10 flex flex-col items-center">
                          <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 mb-3 shadow-xl">
                            <Eye className="w-6 h-6 text-primary opacity-40" />
                          </div>
                          <span className="text-sm font-bold tracking-widest uppercase opacity-40">Tour Implementation Pending</span>
                       </div>
                    </div>
                  )}
                  
                  {/* Status Overlay */}
                  <div className="absolute bottom-4 left-4 z-20">
                     <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white shadow-xl">
                        <div className={`h-2 w-2 rounded-full ${project.status?.toLowerCase().includes('active') ? 'bg-emerald-500' : 'bg-amber-500'} animate-pulse`} />
                        <span className="text-[10px] font-black uppercase tracking-widest">{project.status}</span>
                     </div>
                  </div>
                </SpotlightCard>
                <div className="flex items-center justify-between px-2 text-[10px] font-bold text-muted-foreground/40 uppercase tracking-[0.2em]">
                   <div className="flex items-center gap-2">
                      <Monitor className="w-3 h-3" /> System Trace: {project.id}
                   </div>
                   <div>Build Verified 2025</div>
                </div>
              </div>

              {/* Detail Column */}
              <div className="space-y-8 lg:pt-2">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9]">{project.title}</h3>
                    {project.link && (
                      <a href={project.link} target="_blank" className="p-3 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all">
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/40 flex items-center gap-2">
                    <Laptop className="w-3.5 h-3.5" /> Construction Primitives
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map(tech => (
                      <span key={tech} className="px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest bg-primary/5 text-primary border border-primary/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/40 flex items-center gap-2">
                    Impact & Outcomes
                  </h4>
                  <div className="grid sm:grid-cols-1 gap-3">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-secondary/20 border border-border/40">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                        <span className="text-sm font-bold leading-tight">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Footnote */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="pt-24 text-center border-t border-border/40"
      >
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/40 mb-8">End of Production Log</p>
        <button className="group px-8 py-4 rounded-full bg-zinc-950 text-white font-black uppercase tracking-widest hover:bg-primary transition-all shadow-2xl flex items-center gap-3 mx-auto">
          Request Technical Playbook <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </motion.div>
    </div>
  );
};
