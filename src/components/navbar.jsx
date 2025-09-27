import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-white/30 backdrop-blur-md border-b border-white/20 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center font-extrabold text-xl text-indigo-600 tracking-wide">
            Aleda Trading
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a
              href="#about"
              className="text-gray-800 hover:text-indigo-600 transition"
            >
              About
            </a>
            <a
              href="#vision"
              className="text-gray-800 hover:text-indigo-600 transition"
            >
              Vision
            </a>
            <a
              href="#mission"
              className="text-gray-800 hover:text-indigo-600 transition"
            >
              Mission
            </a>
            <a
              href="#products"
              className="text-gray-800 hover:text-indigo-600 transition"
            >
              Products
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/70 backdrop-blur-md border-t border-white/20 shadow-md">
          <a
            href="#about"
            className="block px-4 py-2 text-gray-800 hover:bg-indigo-50 transition"
          >
            About
          </a>
          <a
            href="#vision"
            className="block px-4 py-2 text-gray-800 hover:bg-indigo-50 transition"
          >
            Vision
          </a>
          <a
            href="#mission"
            className="block px-4 py-2 text-gray-800 hover:bg-indigo-50 transition"
          >
            Mission
          </a>
          <a
            href="#products"
            className="block px-4 py-2 text-gray-800 hover:bg-indigo-50 transition"
          >
            Products
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 text-indigo-600 font-semibold hover:bg-indigo-50 transition"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
