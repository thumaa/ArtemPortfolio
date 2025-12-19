import React from 'react';
import { Button } from '../components/Button';
import { personalInfo } from '../data/content';
import { Mail, Twitter, Linkedin, Github } from 'lucide-react';
import { SpotlightCard } from '../components/SpotlightCard';

export const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto py-12 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <p className="text-lg text-muted-foreground">
          Have a project in mind or want to discuss financial modeling?
        </p>
      </div>

      <SpotlightCard className="p-8 space-y-8">
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <input 
                id="name" 
                type="text" 
                className="w-full px-3 py-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder="Jane Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input 
                id="email" 
                type="email" 
                className="w-full px-3 py-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder="jane@example.com"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <textarea 
              id="message" 
              rows={4} 
              className="w-full px-3 py-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary focus:outline-none resize-none"
              placeholder="How can I help you?"
            />
          </div>
          <Button className="w-full" onClick={() => alert("Message sent (demo)!")}>
            Send Message
          </Button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">Or connect via</span>
          </div>
        </div>

        <div className="flex justify-center gap-6">
          <a href={personalInfo.socials.twitter} className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter className="h-6 w-6" />
          </a>
          <a href={personalInfo.socials.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href={personalInfo.socials.github} className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-6 w-6" />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </SpotlightCard>
    </div>
  );
};