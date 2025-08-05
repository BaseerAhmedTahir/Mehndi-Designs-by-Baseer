import React, { useState } from 'react';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Sparkles className="h-8 w-8 text-purple-600" />
          <span className="text-xl font-bold text-gray-900">Mehndi Designs by Baseer</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <div className="relative group">
            <button className="text-gray-600 hover:text-purple-600 transition-colors flex items-center">
              Mehndi Designs
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-2">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">Arabic Designs</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">Bridal Designs</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">Floral Designs</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">Minimal Designs</a>
              </div>
            </div>
          </div>
          <div className="relative group">
            <button className="text-gray-600 hover:text-purple-600 transition-colors flex items-center">
              Gallery
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-2">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">Latest Designs</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">Popular Designs</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">Trending Now</a>
              </div>
            </div>
          </div>
          <a className="text-gray-600 hover:text-purple-600 transition-colors" href="#">Blog</a>
          <a className="text-gray-600 hover:text-purple-600 transition-colors" href="#">About</a>
          <a className="text-gray-600 hover:text-purple-600 transition-colors" href="#">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600 hover:text-purple-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-2">
            <a href="#" className="block py-2 text-gray-600 hover:text-purple-600">Mehndi Designs</a>
            <a href="#" className="block py-2 text-gray-600 hover:text-purple-600">Gallery</a>
            <a href="#" className="block py-2 text-gray-600 hover:text-purple-600">Blog</a>
            <a href="#" className="block py-2 text-gray-600 hover:text-purple-600">About</a>
            <a href="#" className="block py-2 text-gray-600 hover:text-purple-600">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}