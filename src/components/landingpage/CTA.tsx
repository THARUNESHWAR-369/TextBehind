import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { LOGIN_ROUTE } from '@/constants/routes';

export function CTA() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-2xl p-12 relative overflow-hidden animate-scale-in group hover:glow-purple transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-blue-600/20 animate-gradient"></div>
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass text-sm text-indigo-300 mb-6">
              <Sparkles className="w-4 h-4 mr-2" /> 
              No credit card required
            </div>
            <h2 className="text-4xl font-bold mb-4">Start Creating Today</h2>
            <p className="text-xl mb-8 text-gray-300">Join thousands of creators making stunning visuals with TextBehindImage</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href={LOGIN_ROUTE} className="glass w-fit glow px-8 py-3 rounded-full font-medium text-lg hover:bg-white/10 transition-all flex items-center gap-2 group-hover:scale-105 duration-300">
                Try for Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}