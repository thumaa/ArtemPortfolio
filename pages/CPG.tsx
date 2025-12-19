
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cpgData } from '../data/content';
import { Button } from '../components/Button';
import { ArrowDown, DollarSign, Package, TrendingUp, Users, ChevronDown, Plus, Info, Lightbulb, CheckCircle2 } from 'lucide-react';

export const CPG = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="space-y-16 pb-12">
      {/* Hero */}
      <section className="relative rounded-3xl overflow-hidden bg-zinc-950 text-white p-8 md:p-16 text-center space-y-6 shadow-2xl">
         {/* Background pattern */}
         <div className="absolute inset-0 opacity-10 pointer-events-none" 
              style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-orange-500/10 to-transparent pointer-events-none" />
         
         <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-3 py-1 rounded-full bg-orange-600/20 text-orange-400 text-sm font-bold border border-orange-600/50 uppercase tracking-widest"
            >
              Passion Project
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight"
            >
              {cpgData.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-zinc-300 font-medium"
            >
              {cpgData.subtitle}
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-zinc-400 max-w-xl mx-auto leading-relaxed"
            >
              {cpgData.description}
            </motion.p>
         </div>
      </section>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cpgData.stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-2xl bg-card border border-border flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <span className="text-3xl md:text-4xl font-black text-foreground mb-1">{stat.value}</span>
            <span className="text-xs text-muted-foreground uppercase tracking-widest font-bold">{stat.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Interactive Timeline */}
      <section className="max-w-5xl mx-auto px-4 sm:px-0">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The Build Log</h2>
            <p className="text-muted-foreground">Click on any phase to see the raw breakdown of how we built it.</p>
        </div>
        
        <div className="relative border-l-2 border-border ml-4 md:ml-0 space-y-12 pb-8">
          {cpgData.timeline.map((item, index) => {
            const isExpanded = expandedIndex === index;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-10 md:pl-0"
              >
                {/* Connector Dot */}
                <motion.button
                  onClick={() => toggleExpand(index)}
                  className={`absolute -left-[11px] top-2 h-5 w-5 rounded-full z-10 border-4 border-background transition-colors duration-300 ${
                    isExpanded ? 'bg-orange-500 ring-4 ring-orange-500/20' : 'bg-muted-foreground hover:bg-primary'
                  }`}
                />
                
                <div className={`md:grid md:grid-cols-[1fr_2fr] gap-12 group cursor-pointer`}
                     onClick={() => toggleExpand(index)}>
                   
                   {/* Date/Label - Left Side on MD */}
                   <div className="mb-2 md:mb-0 md:text-right">
                      <span className={`text-xs font-black uppercase tracking-tighter px-2.5 py-1 rounded-md transition-colors ${
                        isExpanded ? 'bg-orange-500/20 text-orange-600' : 'bg-muted text-muted-foreground'
                      }`}>
                        {item.date}
                      </span>
                      <div className="hidden md:block mt-2">
                        <span className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest">
                           Phase {index + 1} • {item.category}
                        </span>
                      </div>
                   </div>

                   {/* Title/Description - Right Side on MD */}
                   <div className="relative">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className={`text-xl font-extrabold transition-colors ${isExpanded ? 'text-orange-600' : 'text-foreground'}`}>
                            {item.title}
                        </h3>
                        <motion.div 
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          className="text-muted-foreground opacity-50"
                        >
                            <ChevronDown className="w-5 h-5" />
                        </motion.div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>

                      {/* Expandable Section */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="mt-6 p-6 rounded-2xl bg-muted/30 border border-border/50 shadow-inner">
                               <div className="space-y-4">
                                  <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">
                                     <Info className="w-3.5 h-3.5" />
                                     <span>Milestones & Technicals</span>
                                  </div>
                                  
                                  <ul className="grid gap-3">
                                    {item.details?.map((detail, dIdx) => (
                                      <motion.li 
                                        key={dIdx}
                                        initial={{ x: -10, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: dIdx * 0.1 }}
                                        className="flex items-start gap-3 text-sm text-foreground/90"
                                      >
                                        <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                                        <span>{detail}</span>
                                      </motion.li>
                                    ))}
                                  </ul>

                                  {/* Key Insight Badge */}
                                  {item.keyInsight && (
                                    <motion.div 
                                      initial={{ scale: 0.95, opacity: 0 }}
                                      animate={{ scale: 1, opacity: 1 }}
                                      className="mt-6 p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-start gap-3"
                                    >
                                       <Lightbulb className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                                       <div>
                                          <span className="text-[10px] font-black uppercase text-orange-600 mb-1 block">Founder Insight</span>
                                          <p className="text-sm italic font-medium text-orange-950 dark:text-orange-200 leading-snug">
                                             "{item.keyInsight}"
                                          </p>
                                       </div>
                                    </motion.div>
                                  )}
                               </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                   </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Capture */}
      <section className="bg-zinc-900 text-white rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto border border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500" />
        <h3 className="text-3xl md:text-4xl font-bold mb-4 italic">Hungry for the Full Playbook?</h3>
        <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
          I'm compiling the complete $0-ad-spend growth strategy, including vendor sheets and distribution workflows.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Pitmaster email address" 
            className="flex-1 px-5 py-3 rounded-xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all placeholder:text-zinc-600"
          />
          <Button onClick={() => alert("Welcome to the list!")} className="bg-orange-600 hover:bg-orange-500 text-white px-8">
            Get Access
          </Button>
        </div>
        <p className="text-[10px] uppercase font-bold text-zinc-600 mt-6 tracking-widest">
          Reserved for builders & enthusiasts. Zero spam.
        </p>
      </section>
    </div>
  );
};