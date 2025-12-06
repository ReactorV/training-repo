import { Dumbbell, Flame, Users, Swords } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Dumbbell,
      title: "Spartan Protocol",
      description: "One-on-one brutal training sessions. No mercy. Maximum intensity. Pure domination.",
      features: ["Personalized war plan", "Form mastery", "Strength tracking", "Warrior mindset"],
    },
    {
      icon: Flame,
      title: "Nutrition Warfare",
      description: "Fuel your body like a weapon. Precision nutrition designed for maximum muscle and minimal fat.",
      features: ["Warrior meal plans", "Macro domination", "Supplement arsenal", "Metabolic warfare"],
    },
    {
      icon: Users,
      title: "Brotherhood Training",
      description: "Train alongside warriors. Push each other to the absolute limit. No weak links.",
      features: ["Intense circuits", "Power lifting", "Combat conditioning", "Elite brotherhood"],
    },
    {
      icon: Swords,
      title: "The Spartan System",
      description: "My complete transformation system. Everything you need to build an unstoppable physique.",
      features: ["12-week protocol", "Video breakdowns", "Direct access", "Guaranteed results"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-black border-t border-red-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-600/20 text-red-500 px-4 py-2 border border-red-600/30 mb-4 uppercase tracking-wider">
            Choose Your Path
          </div>
          <h2 className="text-white mb-4 uppercase tracking-tight">
            Forged In Fire
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Select your weapon. Each program is designed to push you beyond your limits and transform you into an unstoppable force.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-8 bg-zinc-950 border border-red-900/30 hover:border-red-600/50 transition-all group"
              >
                <div className="w-14 h-14 bg-red-600 flex items-center justify-center mb-6 group-hover:bg-red-700 transition-colors">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-white mb-3 uppercase tracking-wider">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-red-600 rotate-45" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}