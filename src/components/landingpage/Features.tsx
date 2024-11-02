import React from 'react';
import { Palette, Share2, Zap} from 'lucide-react';

const features = [
  // {
  //   icon: <Layout className="w-6 h-6" />,
  //   title: "Smart Layout",
  //   desc: "Intelligent text positioning that automatically adapts to your image"
  // },
  // {
  //   icon: <Palette className="w-6 h-6" />,
  //   title: "Style Presets",
  //   desc: "Choose from beautiful pre-made styles or create your own"
  // },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Real-time Preview",
    desc: "See changes instantly as you edit your design"
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Quick Edit",
    desc: "Easily customize text, colors, and effects"
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: "Quick Export",
    desc: "Download your design in high-quality PNG format"
  },
  // {
  //   icon: <Cloud className="w-6 h-6" />,
  //   title: "Cloud Save",
  //   desc: "Your designs are automatically saved and synced"
  // },
  // {
  //   icon: <Lock className="w-6 h-6" />,
  //   title: "Private Library",
  //   desc: "Keep your designs secure in your personal collection"
  // }
];

export function Features() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-indigo-400 font-medium">POWERFUL FEATURES</span>
          <h2 className="text-4xl font-bold text-white mt-2 mb-4">Everything You Need</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Create professional text-behind-image effects with our comprehensive toolset
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass p-6 rounded-xl group hover:glow-purple transition-all duration-500 hover:scale-105"
            >
              <div className="w-12 h-12 glass rounded-lg flex items-center justify-center text-indigo-300 mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-indigo-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}