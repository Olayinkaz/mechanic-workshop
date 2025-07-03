import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-gray-800 text-white fixed top-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mechanic Workshop</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#home" onClick={closeMenu} className="hover:text-yellow-400">Home</a></li>
          <li><a href="#about" onClick={closeMenu} className="hover:text-yellow-400">About</a></li>
          <li><a href="#contact" onClick={closeMenu} className="hover:text-yellow-400">Contact</a></li>
          <li><a href="#services" onClick={closeMenu} className="hover:text-yellow-400">Services</a></li>
          <li><a href="#testimonials" onClick={closeMenu} className="hover:text-yellow-400">Testimonials</a></li>

        </ul>

        {/* Mobile Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <HiX className="text-3xl" /> : <HiMenu className="text-3xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <ul className="flex flex-col items-center py-4 space-y-4">
            <li><a href="#home" onClick={closeMenu} className="hover:text-yellow-400">Home</a></li>
            <li><a href="#about" onClick={closeMenu} className="hover:text-yellow-400">About</a></li>
            <li><a href="#contact" onClick={closeMenu} className="hover:text-yellow-400">Contact</a></li>
            <li><a href="#services" onClick={closeMenu} className="hover:text-yellow-400">Services</a></li>
            <li><a href="#testimonials" onClick={closeMenu} className="hover:text-yellow-400">Testimonials</a></li>

          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
