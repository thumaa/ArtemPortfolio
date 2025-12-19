
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { notes } from '../data/content';
import { SpotlightCard } from '../components/SpotlightCard';
import { FileText, Search, BookOpen, Filter } from 'lucide-react';

const categories = ['All', 'AI', 'Finance', 'Personal Life', 'GoodFatCo'];

export const Notes = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredNotes = activeFilter === 'All' 
    ? notes 
    : notes.filter(note => note.tags.includes(activeFilter));

  return (
    <div className="space-y-12 pb-24">
      {/* Header */}
      <div className="space-y-4 max-w-4xl">
        <div className="flex items-center gap-2 text-primary font-bold tracking-tighter uppercase text-xs">
          <BookOpen className="w-3.5 h-3.5" />
          Field Notes
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none uppercase italic">The Ledger</h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
          Dispatches from the intersection of building, business, and daily life. Frameworks and reflections that survive the noise.
        </p>
      </div>

      {/* Category Filter */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/50">
           <Filter className="w-3 h-3" /> Filter by Category
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 border ${
                activeFilter === cat
                  ? 'bg-primary text-primary-foreground border-primary shadow-lg scale-[1.02]'
                  : 'bg-secondary/50 text-muted-foreground border-border/40 hover:bg-secondary hover:text-foreground hover:border-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="h-px w-full bg-border/40" />

      {/* Content Area */}
      <div className="grid gap-6">
        <AnimatePresence mode="wait">
          {filteredNotes.length > 0 ? (
            filteredNotes.map((note, i) => (
              <motion.div
                key={note.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ delay: i * 0.1 }}
              >
                <SpotlightCard className="p-8 md:p-10 hover:border-primary/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 mb-6">
                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight group-hover:text-primary transition-colors">{note.title}</h2>
                    <div className="flex items-center gap-4 text-xs font-bold text-muted-foreground shrink-0 uppercase tracking-widest">
                      <span>{note.date}</span>
                      <span className="opacity-20">/</span>
                      <span>{note.readTime}</span>
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-8 max-w-4xl leading-relaxed">
                    {note.summary}
                  </p>

                  <div className="flex gap-2">
                    {note.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-md bg-primary/5 text-primary border border-primary/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-32 flex flex-col items-center justify-center text-center space-y-4"
            >
              <div className="p-6 rounded-full bg-secondary/50 border border-border/40">
                <FileText className="w-12 h-12 text-muted-foreground/20" />
              </div>
              <div>
                <h3 className="text-xl font-black uppercase tracking-tighter">Drafting in Progress</h3>
                <p className="text-muted-foreground max-w-xs mx-auto text-sm mt-1">
                  Notes for the <span className="text-primary font-bold italic">{activeFilter}</span> category are being synthesized. Check back soon.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
