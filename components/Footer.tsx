import React from 'react';
import { personalInfo } from '../data/content';

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-10 text-center text-sm text-muted-foreground">
      <div className="container mx-auto px-4 max-w-7xl">
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href={personalInfo.socials.twitter} className="hover:text-primary transition-colors">Twitter</a>
          <a href={personalInfo.socials.github} className="hover:text-primary transition-colors">GitHub</a>
          <a href={personalInfo.socials.linkedin} className="hover:text-primary transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};