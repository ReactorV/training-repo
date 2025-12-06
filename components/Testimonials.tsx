import { Star, Flame } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Marcus Steel",
      role: "Gained 25 lbs Muscle",
      content: "This system destroyed my limits. Six months ago I was average. Now I'm a beast. The Spartan System doesn't just build muscle—it builds warriors. No BS, just brutal results.",
      rating: 5,
    },
    {
      name: "Viktor Wolfe",
      role: "Lost 40 lbs Fat",
      content: "I tried every program out there. Nothing worked until this. The discipline, the intensity, the brotherhood—it transformed everything. I'm stronger, leaner, and more confident than ever.",
      rating: 5,
    },
    {
      name: "Damien Cross",
      role: "Elite Athlete",
      content: "As a competitive fighter, I needed a program that could keep up with my demands. The Spartan Protocol pushed me beyond what I thought possible. Absolute game-changer.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-zinc-950 border-t border-red-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-600/20 text-red-500 px-4 py-2 border border-red-600/30 mb-4 uppercase tracking-wider">
            The Brotherhood
          </div>
          <h2 className="text-white mb-4 uppercase tracking-tight">
            Warrior Transformations
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            These men committed to the system. They paid the price. They earned their results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-black p-8 border border-red-900/30 hover:border-red-600/50 transition-all"
            >
              <Flame className="w-10 h-10 text-red-600/40 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-red-600 text-red-600" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">{testimonial.content}</p>
              <div className="pt-6 border-t border-red-900/30">
                <div className="text-white uppercase tracking-wider">{testimonial.name}</div>
                <div className="text-gray-500 uppercase tracking-wide">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}