
import React from 'react';
import { motion } from 'framer-motion';
import { caseStudies } from '../data/content';
import { 
  AlertTriangle, 
  CheckCircle2, 
  TrendingUp, 
  FileText, 
  Mail, 
  PieChart, 
  Presentation, 
  ClipboardCheck, 
  ShieldCheck, 
  FolderOpen, 
  Truck, 
  Settings,
  Sparkles
} from 'lucide-react';
import { SpotlightCard } from '../components/SpotlightCard';

const additionalSkills = [
  { name: "Legal doc formation & analysis", icon: FileText },
  { name: "LP Newsletters", icon: Mail },
  { name: "Budgeting Analysis", icon: PieChart },
  { name: "Pitch Decks", icon: Presentation },
  { name: "Fund Reporting", icon: ClipboardCheck },
  { name: "Audit Support", icon: ShieldCheck },
  { name: "Data Room Setup", icon: FolderOpen },
  { name: "Vendor Evaluation", icon: Truck },
  { name: "SOP Creation", icon: Settings },
];

export const Finance = () => {
  return (
    <div className="space-y-16 pb-20">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Financial Analysis</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Decoding value through rigorous modeling and strategic frameworks.
        </p>
      </div>

      {/* NDA Banner */}
      <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 flex items-start gap-3">
        <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
        <p className="text-sm text-amber-900 dark:text-amber-200">
          <strong>Confidentiality Notice:</strong> I share decision logic, methodology, and synthetic examples. 
          Specific client data, confidential models, and proprietary names are omitted to strictly adhere to NDAs.
        </p>
      </div>

      {/* Primary Case Studies */}
      <div className="grid gap-8">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <SpotlightCard className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-foreground">{study.title}</h3>
                    <div className="h-1 w-20 bg-primary rounded-full" />
                  </div>
                  
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">The Problem</h4>
                      <p className="text-base">{study.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">The Approach</h4>
                      <p className="text-base">{study.approach}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Key Levers</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.keyLevers.map(lever => (
                        <span key={lever} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
                          {lever}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="md:w-1/3 flex flex-col gap-4 border-l border-border md:pl-8">
                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                    <div className="flex items-center gap-2 mb-2 text-green-700 dark:text-green-400 font-semibold">
                      <CheckCircle2 className="h-5 w-5" />
                      <span>Outcome</span>
                    </div>
                    <p className="text-sm">{study.outcome}</p>
                  </div>

                  <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <div className="flex items-center gap-2 mb-2 text-blue-700 dark:text-blue-400 font-semibold">
                      <TrendingUp className="h-5 w-5" />
                      <span>Retrospective</span>
                    </div>
                    <p className="text-sm text-muted-foreground italic">
                      "{study.improvement}"
                    </p>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>

      {/* Other Skills Section */}
      <section className="space-y-8 pt-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-primary font-bold tracking-tight uppercase text-xs">
            <Sparkles className="w-3.5 h-3.5" />
            Core Competencies
          </div>
          <h2 className="text-3xl font-bold">Other Skills</h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {additionalSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-200 shadow-sm cursor-default">
                <skill.icon className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
