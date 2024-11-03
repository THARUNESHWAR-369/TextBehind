'use client';

import React, { useState } from 'react';
import { ArrowRight, Upload, Type, Move, Download, Settings2 } from 'lucide-react';
import Link from 'next/link';
import { LOGIN_ROUTE } from '@/constants/routes';

export function Hero() {
  const [step, setStep] = useState(0);
  const steps = [
    { icon: <Upload className="w-6 h-6" />, title: "Upload Image", desc: "Start with any photo" },
    { icon: <Type className="w-6 h-6" />, title: "Add Text", desc: "Type your message" },
    { icon: <Move className="w-6 h-6" />, title: "Position", desc: "Place behind objects" },
    { icon: <Settings2 className="w-6 h-6" />, title: "Style", desc: "Customize the look" },
    { icon: <Download className="w-6 h-6" />, title: "Export", desc: "Save & share" }
  ];

  return (
    <div className="relative overflow-hidden min-h-screen flex items-center pt-5">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse-glow animate-float-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass text-sm text-indigo-300 mb-6">
            <span className="animate-pulse mr-2">✨</span>
            Create Text Behind Image Effects
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Place Text
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400 animate-gradient"> Behind Objects </span>
            in Your Photos
          </h1>

          <p className="text-xl text-gray-300 mb-8">
            Create stunning depth effects by placing text behind objects in your images. Perfect for social media, marketing, and creative projects.
          </p>

          <Link href={LOGIN_ROUTE} className="glass w-fit glow-purple px-8 py-4 rounded-full font-medium text-lg hover:bg-white/10 transition-all flex items-center gap-2 hover:scale-105 duration-300 group mx-auto">
            Start Creating
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

        </div>
        <a className='w-fit flex justify-center m-auto mb-5' href="https://www.producthunt.com/posts/textbehind?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-textbehind" target="_blank">
          <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=569325&theme=dark" alt="TextBehind - TextBehind&#0058;&#0032;Create&#0032;images&#0032;with&#0032;text&#0032;behind&#0032;objects&#0033; | Product Hunt" style={{ width: '250px', height: '54px' }} width={"250"} height={"54"} />
        </a>

        <div className="max-w-4xl mx-auto">
          <div className={`min-[600px]:glass rounded-2xl p-8 relative overflow-hidden`}>
            <div className="grid grid-cols-5 gap-4 max-[600px]:flex max-[600px]:flex-col">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className={`relative p-6 rounded-xl transition-all duration-300
                    ${i === step ? 'glass glow-purple scale-105' : 'hover:bg-white/5'}
                    ${i < step ? 'text-indigo-400' : 'text-white'}`}
                  onMouseEnter={() => setStep(i)}
                >
                  <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4
                    ${i === step ? 'glass animate-pulse-glow' : 'glass'}`}>
                    {s.icon}
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold mb-1">{s.title}</h3>
                    <p className="text-sm text-gray-400">{s.desc}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="absolute max-[600px]:hidden top-1/2 -right-2 w-4 h-0.5 bg-white/10"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}