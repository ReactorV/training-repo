"use client";

import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-red-900/30 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-red-600" />
            <span className="text-white uppercase tracking-wider">Bartek Spartan Strength</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-400 hover:text-red-600 transition-colors uppercase tracking-wider"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-400 hover:text-red-600 transition-colors uppercase tracking-wider"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-400 hover:text-red-600 transition-colors uppercase tracking-wider"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-400 hover:text-red-600 transition-colors uppercase tracking-wider"
            >
              Warriors
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-red-600 text-white px-6 py-2 hover:bg-red-700 transition-colors uppercase tracking-wider"
            >
              Join Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-400"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left text-gray-400 hover:text-red-600 transition-colors uppercase tracking-wider"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-gray-400 hover:text-red-600 transition-colors uppercase tracking-wider"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left text-gray-400 hover:text-red-600 transition-colors uppercase tracking-wider"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="block w-full text-left text-gray-400 hover:text-red-600 transition-colors uppercase tracking-wider"
            >
              Warriors
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left bg-red-600 text-white px-6 py-2 hover:bg-red-700 transition-colors uppercase tracking-wider"
            >
              Join Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}