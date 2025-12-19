import React from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard } from '../components/SpotlightCard';
import { Quote, ShieldCheck, Scale, Heart, Sparkles } from 'lucide-react';

export const About = () => {
  const quotes = [
    {
      text: "Beliefs are hypotheses to be tested, not treasures to be protected.",
      author: "Philip Tetlock",
      category: "Epistemology"
    },
    {
      text: "Do today what others won't and achieve tomorrow what others can't.",
      author: "Jerry Rice",
      category: "Ambition"
    },
    {
      text: "No zero days.",
      author: "Mantra",
      category: "Consistency"
    },
    {
      text: "I urge you to please notice when you are happy, and exclaim or murmur or think at some point, 'If this isn't nice, I don't know what is.'",
      author: "Kurt Vonnegut",
      category: "Perspective"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-24 py-12 px-4">
      {/* Hero Narrative */}
      <section className="space-y-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
            Hi. I’m <span className="text-primary italic">Artem</span>.
          </h1>
          <p className="text-xl md:text-2xl font-medium text-foreground/90 leading-relaxed">
            I’m an avidly curious, competitive builder who follows his passions wherever they lead.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="prose prose-lg dark:prose-invert text-muted-foreground max-w-3xl space-y-6"
        >
          <p>
            I began my career in institutional finance, where I learned to think in first principles: what’s the risk, what’s the return, what has to be true, and what breaks the thesis. That rigor shaped the way I work and helped me develop the analytical frameworks I still rely on today.
          </p>
          <div className="p-8 rounded-3xl bg-zinc-950 text-white border border-white/10 my-10 relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 p-8 opacity-5">
                <Sparkles className="w-32 h-32" />
             </div>
             <h3 className="text-2xl font-bold mb-4 text-white">Leveraging AI</h3>
             <p className="text-zinc-400">
               Now I’m bringing that same discipline into the AI era—where a curiosity can be tested, refined, and shipped with real leverage. I believe <span className="text-white font-bold">AI rewards doers</span>, and I’m using it to turn concepts into frameworks, and frameworks into products.
             </p>
          </div>
        </motion.div>
      </section>

      {/* Core Tenets Section */}
      <section className="space-y-12">
        <div className="space-y-4">
           <h2 className="text-3xl font-bold">My Core Tenets</h2>
           <p className="text-muted-foreground">The foundational beliefs that guide my decision-making and worldview.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
           <SpotlightCard className="p-8 space-y-4 border-blue-500/10 bg-blue-500/5 h-full">
              <ShieldCheck className="w-8 h-8 text-blue-500" />
              <h3 className="text-xl font-bold">Sound Money</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Born in Ukraine, I’ve seen what weak currencies can do to ordinary people and entire societies. That experience gave me a deep respect for sound money, aligned incentives, and systems that preserve value over time.
              </p>
           </SpotlightCard>
           
           <SpotlightCard className="p-8 space-y-4 border-emerald-500/10 bg-emerald-500/5 h-full">
              <Scale className="w-8 h-8 text-emerald-500" />
              <h3 className="text-xl font-bold">Equality of Opportunity</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I believe AI is the great democratizer of knowledge work. When tools get better, capability spreads—and people with drive can compete without needing permission, pedigree, or perfect starting conditions.
              </p>
           </SpotlightCard>

           <SpotlightCard className="p-8 space-y-4 border-orange-500/10 bg-orange-500/5 h-full">
              <Heart className="w-8 h-8 text-orange-500" />
              <h3 className="text-xl font-bold">Always Have a Why</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I’ve learned that burnout usually isn’t a workload problem—it’s a purpose problem. A real “why” gets you moving when you want to stay down. My family is my why, and I choose work I genuinely care about so I can stay locked in.
              </p>
           </SpotlightCard>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="space-y-8">
        <div className="space-y-2">
           <h2 className="text-2xl font-bold">Principles & Perspectives</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           {quotes.map((quote, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
             >
               <SpotlightCard className="p-5 h-full flex flex-col group">
                  <div className="flex gap-3">
                    <Quote className="w-4 h-4 text-primary/20 shrink-0 mt-1" />
                    <p className="text-sm md:text-base font-medium leading-relaxed italic text-foreground/90">
                      "{quote.text}" — <span className="not-italic font-bold text-xs uppercase tracking-tight text-muted-foreground">{quote.author}</span>
                    </p>
                  </div>
               </SpotlightCard>
             </motion.div>
           ))}
        </div>
      </section>
    </div>
  );
};