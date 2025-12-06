"use client";

import { Mail, Phone, MapPin, Instagram, Youtube, Twitter } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Your message has been received. Prepare yourself.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    { icon: Phone, label: "+1 (555) WAR-RIOR" },
    { icon: Mail, label: "forge@spartanstrength.com" },
    { icon: MapPin, label: "Iron Temple, Battle District" },
  ];

  const socials = [
    { icon: Instagram, href: "#" },
    { icon: Youtube, href: "#" },
    { icon: Twitter, href: "#" },
  ];

  return (
    <section id="contact" className="py-20 bg-black border-t border-red-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-600/20 text-red-500 px-4 py-2 border border-red-600/30 mb-4 uppercase tracking-wider">
            Join The Brotherhood
          </div>
          <h2 className="text-white mb-4 uppercase tracking-tight">
            Are You Ready?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            This is not for everyone. Only the committed. Only the hungry. Only those ready to transform into warriors.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2 uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-zinc-950 border border-red-900/30 text-white focus:outline-none focus:border-red-600"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-zinc-950 border border-red-900/30 text-white focus:outline-none focus:border-red-600"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-400 mb-2 uppercase tracking-wider">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-950 border border-red-900/30 text-white focus:outline-none focus:border-red-600"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-zinc-950 border border-red-900/30 text-white focus:outline-none focus:border-red-600 resize-none"
                  placeholder="Tell me about your goals..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white px-8 py-4 hover:bg-red-700 transition-colors uppercase tracking-wider"
              >
                Begin Your Transformation
              </button>
            </form>
          </div>

          <div className="lg:pl-8">
            <div className="space-y-8">
              <div>
                <h3 className="text-white mb-6 uppercase tracking-wider">Contact Info</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-red-600/20 border border-red-600/30 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-red-600" />
                        </div>
                        <span className="text-gray-400">{info.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <h3 className="text-white mb-6 uppercase tracking-wider">Follow The Journey</h3>
                <div className="flex gap-4">
                  {socials.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className="w-12 h-12 bg-zinc-950 border border-red-900/30 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-colors"
                      >
                        <Icon className="w-5 h-5 text-gray-400 hover:text-white" />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="bg-zinc-950 p-6 border border-red-900/30">
                <h3 className="text-white mb-3 uppercase tracking-wider">Warrior Assessment</h3>
                <p className="text-gray-400 mb-4">
                  Book a no-BS consultation. We'll assess your current state and determine if you have what it takes.
                </p>
                <button className="text-red-600 hover:text-red-500 transition-colors uppercase tracking-wider">
                  Schedule Now →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-red-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600 uppercase tracking-wider">
            © 2025 Spartan Strength. Forge Your Legacy.
          </div>
        </div>
      </footer>
    </section>
  );
}