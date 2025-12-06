import { Skull, Flame, Swords, Shield } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const stats = [
    { icon: Skull, value: "1000+", label: "Warriors Forged" },
    { icon: Flame, value: "15+", label: "Years Combat" },
    { icon: Swords, value: "Zero", label: "Compromises" },
    { icon: Shield, value: "100%", label: "Results" },
  ];

  return (
    <section id="about" className="py-20 bg-zinc-950 border-t border-red-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1526407153035-415201c1ba3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2R5YnVpbGRpbmclMjBtdXNjbGUlMjBzdHJlbmd0aHxlbnwxfHx8fDE3NjUwMjYyMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Brutal Training"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-8 shadow-2xl">
              <div className="text-center">
                <div className="mb-1 uppercase tracking-wider">Forged</div>
                <div className="uppercase tracking-wider">1000+ Warriors</div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-block bg-red-600/20 text-red-500 px-4 py-2 border border-red-600/30 mb-4 uppercase tracking-wider">
              The System
            </div>
            <h2 className="text-white mb-6 uppercase tracking-tight">
              Build a Brutal, Unstoppable Body
            </h2>
            <p className="text-gray-400 mb-6">
              This isn't your typical training program. The Spartan System is a battle-tested 
              methodology designed to transform ordinary men into warriors. We don't count 
              calories—we forge champions. We don't do cardio classes—we build monsters.
            </p>
            <p className="text-gray-400 mb-8">
              For 15 years, I've been in the trenches, pushing limits, breaking barriers, 
              and sculpting physiques that command respect. No gimmicks. No shortcuts. 
              Just raw, unrelenting power and the discipline to achieve it.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center p-4 bg-black border border-red-900/30 shadow-lg">
                    <Icon className="w-8 h-8 text-red-600 mx-auto mb-2" />
                    <div className="text-white mb-1 uppercase tracking-wider">{stat.value}</div>
                    <div className="text-gray-500 uppercase tracking-wide">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}