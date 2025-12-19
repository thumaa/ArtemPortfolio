
import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { personalInfo, projects, caseStudies, notes, cpgData } from '../data/content';
import { SpotlightCard } from '../components/SpotlightCard';
import { Button } from '../components/Button';
import { ArrowRight, Code, TrendingUp, Cpu, FileSpreadsheet, Terminal, X, User, BarChart3, LineChart, Sparkles, Flame, Palette, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// --- Custom Icons for Brands ---

const ReplitIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 4h16v16H4z" />
    <path d="M8 8h8" />
    <path d="M8 12h5" />
    <path d="M8 16h8" />
  </svg>
); 

const GeminiIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
  </svg>
);

const ChatGPTIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2a10 10 0 1 0 10 10 0.5 0.5 0 0 1-0.5-0.5V12a9.5 9.5 0 1 1-9.5-9.5z" />
    <path d="M12 8v8" />
    <path d="M8 12h8" />
  </svg>
); 

const ClaudeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
  </svg>
); 

// --- Data ---

const toolboxItems = [
  { name: 'Replit', icon: ReplitIcon, desc: 'Rapid prototyping & zero-setup deployments.', color: 'text-orange-500' },
  { name: 'ChatGPT', icon: ChatGPTIcon, desc: 'Code generation, refactoring, and drafting.', color: 'text-green-500' },
  { name: 'Gemini', icon: GeminiIcon, desc: 'Primary reasoning engine & creative partner.', color: 'text-blue-400' },
  { name: 'Claude', icon: ClaudeIcon, desc: 'Large context analysis & document summarization.', color: 'text-amber-700' },
  { name: 'Canva', icon: Palette, desc: 'Visual identity, decks, and marketing assets.', color: 'text-purple-500' },
  { name: 'Excel', icon: FileSpreadsheet, desc: 'Financial modeling core & data structuring.', color: 'text-green-600' },
];

export const Home = () => {
  const navigate = useNavigate();
  const [isToolboxOpen, setIsToolboxOpen] = useState(false);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring" as const, 
        stiffness: 50 
      } 
    }
  };

  const hoverScale = {
    y: -4,
    transition: { duration: 0.2 }
  };

  return (
    <div className="space-y-12 py-8 relative">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20 py-8"
      >
        <div className="max-w-2xl space-y-6 flex-1 text-left order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold border border-primary/10 mb-2"
          >
            <Sparkles className="w-3 h-3" />
            BUILDER OPERATING AT THE INTERSECTION
          </motion.div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            {personalInfo.tagline}
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl">
            {personalInfo.bio}
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button onClick={() => navigate('/builds')}>
              Proof of Work <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" onClick={() => navigate('/contact')}>
              Let's Chat
            </Button>
          </div>
        </div>

        <div className="relative group flex-shrink-0 order-1 md:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-56 h-72 sm:w-64 sm:h-80 lg:w-72 lg:h-96"
          >
            <div className="absolute inset-0 translate-x-4 translate-y-4 border-2 border-primary/10 rounded-2xl -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500" />
            
            <div className="relative h-full w-full rounded-2xl overflow-hidden border-4 border-background shadow-2xl ring-1 ring-border">
              <img 
                src={personalInfo.profileImage} 
                alt={personalInfo.name} 
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-background/80 backdrop-blur-md border border-border/50 shadow-lg">
                <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">Verified Builder</span>
                <p className="text-sm font-extrabold">{personalInfo.name}</p>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 p-2 lg:p-3 rounded-lg bg-emerald-500 text-white shadow-xl z-20"
            >
              <TrendingUp className="w-4 h-4 lg:w-5 lg:h-5" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-2 -left-6 lg:-bottom-4 lg:-left-8 p-2 lg:p-3 rounded-lg bg-blue-600 text-white shadow-xl z-20"
            >
              <Code className="w-4 h-4 lg:w-5 lg:h-5" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Bento Grid */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 grid-auto-rows-[minmax(220px,auto)]"
      >
        
        {/* Engineering Card */}
        <motion.div variants={item} className="md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2 h-full">
          <SpotlightCard 
            whileHover={hoverScale}
            className="h-full relative overflow-hidden flex flex-col justify-between border-blue-500/20 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent" 
            spotlightColor="rgba(59, 130, 246, 0.2)"
            onClick={() => navigate('/builds')}
          >
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.1]" 
                style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
            />

            <div className="relative z-10 p-6 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                   <div className="flex items-center gap-3">
                       <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 ring-1 ring-blue-500/20">
                         <Terminal className="h-6 w-6" />
                       </div>
                       <div>
                            <h3 className="font-bold text-xl leading-none tracking-tight">Engineering</h3>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                <span className="text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-wider">Shipping</span>
                            </div>
                       </div>
                   </div>
                   <ArrowRight className="h-5 w-5 text-muted-foreground" />
                </div>
                
                <div className="flex-1 space-y-3">
                  {projects.slice(0, 3).map(project => (
                    <div key={project.id} className="group/item relative overflow-hidden rounded-lg bg-background/40 border border-border/50 p-3.5">
                      <div className="flex justify-between items-start">
                         <div className="flex items-center gap-3">
                            <div className="mt-1 p-1.5 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                <Code className="h-4 w-4" />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">{project.title}</h4>
                                <p className="text-xs text-muted-foreground line-clamp-1">{project.description}</p>
                            </div>
                         </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between text-xs font-medium text-muted-foreground pt-4 border-t border-blue-500/10">
                    <span className="flex items-center gap-1.5"><Cpu className="h-3.5 w-3.5" /> Full-Stack Artifacts</span>
                    <span className="text-blue-500 font-bold tracking-tight">View Proof &rarr;</span>
                </div>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Strategy Card */}
        <motion.div variants={item} className="md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-2 h-full">
          <SpotlightCard 
            whileHover={hoverScale}
            className="h-full relative overflow-hidden flex flex-col border-emerald-500/20 bg-emerald-500/5" 
            spotlightColor="rgba(16, 185, 129, 0.2)"
            onClick={() => navigate('/finance')}
          >
             <div className="relative z-10 p-6 flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                    <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                        <LineChart className="h-6 w-6" />
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </div>

                <div className="mb-4">
                  <h3 className="font-bold text-xl">Strategy</h3>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mt-1">Financial Ops</p>
                </div>

                <div className="flex-1 flex flex-col gap-3">
                    {caseStudies.slice(0, 3).map((study, i) => (
                        <div key={study.id} className="p-3 rounded-lg bg-background/50 border border-border/40">
                            <p className="font-bold text-xs truncate mb-1">{study.title}</p>
                            <span className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 px-1.5 rounded">
                                {study.metric}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="mt-8 pt-4 border-t border-emerald-500/10 text-[10px] font-bold text-emerald-600 uppercase tracking-widest text-center">
                   4+ Case Studies
                </div>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Notes Square */}
        <motion.div variants={item} className="md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1 h-full">
          <SpotlightCard 
            whileHover={hoverScale}
            className="h-full p-6 flex flex-col justify-between" 
            onClick={() => navigate('/notes')}
          >
            <div>
               <h3 className="font-bold text-lg mb-4">Notes</h3>
               <div className="space-y-3">
                {notes.slice(0, 2).length > 0 ? (
                  notes.slice(0, 2).map(note => (
                    <div key={note.id} className="border-b border-border/40 last:border-0 pb-2">
                      <span className="font-bold text-xs block truncate">{note.title}</span>
                      <span className="text-[10px] text-muted-foreground font-mono">{note.date}</span>
                    </div>
                  ))
                ) : (
                  <div className="text-xs text-muted-foreground italic">No dispatches yet.</div>
                )}
               </div>
            </div>
            <ArrowRight className="h-4 w-4 text-primary ml-auto" />
          </SpotlightCard>
        </motion.div>

        {/* CPG Square */}
        <motion.div variants={item} className="md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1 h-full">
           <SpotlightCard 
            whileHover={hoverScale}
            className="h-full relative overflow-hidden flex flex-col justify-between group/cpg shadow-lg" 
            onClick={() => navigate('/cpg')}
           >
             <div className="absolute inset-0 z-0">
                <img 
                  src={cpgData.featuredImage} 
                  alt={cpgData.title} 
                  className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover/cpg:grayscale-0" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-black/60 group-hover/cpg:bg-black/40 transition-colors duration-500" />
             </div>

             <div className="relative z-10 p-6 flex flex-col h-full text-white">
                <div>
                   <Flame className="w-5 h-5 text-orange-500 mb-2 fill-orange-500" />
                   <h3 className="font-extrabold text-lg tracking-tight">{cpgData.title}</h3>
                </div>
                <ArrowRight className="w-4 h-4 text-white ml-auto mt-auto" />
             </div>
           </SpotlightCard>
        </motion.div>

        {/* About Me */}
        <motion.div variants={item} className="md:col-span-2 lg:col-span-2 h-full">
          <SpotlightCard 
            whileHover={hoverScale}
            className="h-full relative overflow-hidden flex items-center border-primary/10 group/about"
            onClick={() => navigate('/about')}
          >
            <div className="absolute right-0 top-0 h-full w-1/3 opacity-[0.03] flex items-center justify-center pointer-events-none">
               <User className="w-48 h-48 rotate-12" />
            </div>

            <div className="relative z-10 p-6 sm:p-8 w-full flex flex-col h-full justify-center">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/5 text-primary border border-primary/10">
                      <User className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-xl tracking-tight">Hi, I'm Artem.</h3>
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-0.5">
                        <MapPin className="h-3 w-3" /> Kansas City, MO
                      </div>
                    </div>
                  </div>
                  <div className="text-[10px] font-black uppercase text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Active</div>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                  Builder operating at the intersection of institutional finance and AI-native products. I bridge technical execution with strategic allocation.
                </p>
                
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-primary">
                  The full narrative <ArrowRight className="h-3.5 w-3.5" />
                </div>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Toolbox */}
        <motion.div variants={item} className="md:col-span-2 lg:col-span-2 h-full">
          <SpotlightCard 
            whileHover={hoverScale} 
            className="h-full p-6 sm:p-8 flex flex-col justify-between group/toolbox"
            onClick={() => setIsToolboxOpen(true)}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-sm uppercase text-muted-foreground tracking-widest">Toolkit</h3>
            </div>
            
            <div className="flex justify-between items-center px-4 mb-2">
              {toolboxItems.map((tool, i) => (
                <motion.div 
                  key={i} 
                  className={`relative group/icon ${tool.color} opacity-70 group-hover/toolbox:opacity-100 transition-opacity`}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <tool.icon className="h-7 w-7 sm:h-8 sm:w-8" />
                </motion.div>
              ))}
            </div>

            <div className="mt-auto flex items-center justify-between pt-6">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Optimized Workflow</p>
              <div className="p-1.5 rounded-full bg-primary/5 text-primary">
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

      </motion.div>

      {/* Toolbox Modal */}
      <AnimatePresence>
        {isToolboxOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsToolboxOpen(false)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-card border border-border rounded-xl shadow-2xl p-6 md:p-8 max-h-[85vh] overflow-y-auto"
            >
              <button 
                onClick={() => setIsToolboxOpen(false)}
                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-secondary transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              
              <h2 className="text-2xl font-bold mb-2">My Toolbox</h2>
              <p className="text-muted-foreground mb-8">The daily drivers powering my workflow.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {toolboxItems.map((tool, i) => (
                  <div
                    key={tool.name}
                    className="flex items-start gap-4 p-4 rounded-lg border border-border bg-secondary/20 transition-colors"
                  >
                    <div className={`p-2 rounded-lg bg-background shadow-sm ${tool.color}`}>
                      <tool.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm mb-1">{tool.name}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{tool.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
