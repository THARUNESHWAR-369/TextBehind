import React from 'react';
import { Github, Instagram, Heart, Linkedin } from 'lucide-react';
 


export function Footer() {
  return (
    <footer className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">


        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} TextBehindImage. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://www.github.com/THARUNESHWAR-369" target='_blank' className="text-gray-400 hover:text-indigo-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/tharuneshwar-s/" target='_blank' className="text-gray-400 hover:text-indigo-400 transition-colors">
              <Linkedin  className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/tharuneshwar.s/" target='_blank' className="text-gray-400 hover:text-indigo-400 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          <p className="text-gray-400 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-indigo-400" /> by Tharuneshwar S
          </p>
        </div>
      </div>
    </footer>
  );
}