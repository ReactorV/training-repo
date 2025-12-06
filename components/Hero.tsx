"use client";

import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1598669266271-358c3cd2980e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJyaW9yJTIwdHJhaW5pbmclMjBpbnRlbnNlfGVufDF8fHx8MTc2NTAyNjIxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Warrior Training"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-red-900/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="inline-block bg-red-600/20 text-red-500 px-4 py-2 border border-red-600/30 mb-6 uppercase tracking-wider">
            Elite Warrior Training
          </div>
          <h1 className="text-white mb-6 uppercase tracking-tight">
            Forge Your Body Into a Weapon
          </h1>
          <p className="text-gray-300 mb-8 max-w-xl">
            No excuses. No weakness. Just raw power and unstoppable strength. 
            This is not for the faint-hearted. The Spartan System will break you down 
            and rebuild you into an absolute force of nature.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToContact}
              className="bg-red-600 text-white px-8 py-4 hover:bg-red-700 transition-colors flex items-center justify-center gap-2 uppercase tracking-wider"
            >
              Begin Transformation
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("services");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 border border-white/20 hover:bg-white/20 transition-colors uppercase tracking-wider"
            >
              The System
            </button>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-xl">
            <div className="border-l-2 border-red-600 pl-4">
              <div className="text-white mb-1">100%</div>
              <div className="text-gray-400 uppercase tracking-wide">Commitment</div>
            </div>
            <div className="border-l-2 border-red-600 pl-4">
              <div className="text-white mb-1">Zero</div>
              <div className="text-gray-400 uppercase tracking-wide">Excuses</div>
            </div>
            <div className="border-l-2 border-red-600 pl-4">
              <div className="text-white mb-1">Pure</div>
              <div className="text-gray-400 uppercase tracking-wide">Strength</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}