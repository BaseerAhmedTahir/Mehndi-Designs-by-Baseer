import React from 'react';
import { Sparkles, Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const designCategories = [
    'Arabic Designs',
    'Bridal Designs',
    'Simple Designs',
    'Floral Designs',
    'Minimal Designs',
    'Festival Designs'
  ];

  const occasions = [
    'Wedding Mehndi',
    'Diwali Designs',
    'Eid Designs',
    'Karwa Chauth',
    'Teej Designs',
    'Raksha Bandhan'
  ];

  const resources = [
    'Mehndi Care Tips',
    'Application Guide',
    'Design Tutorials',
    'Color Guide',
    'Aftercare Tips',
    'FAQ'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold">Mehndi Magic</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              Your ultimate destination for stunning mehndi designs. Combining traditional 
              henna artistry with modern AI technology to create personalized designs for 
              every occasion.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/mehndimagic"
                className="p-2 bg-gray-800 rounded-lg hover:bg-purple-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/mehndimagic"
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/mehndimagic"
                className="p-2 bg-gray-800 rounded-lg hover:bg-red-600 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-purple-400" />
                <span>hello@mehndimagic.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-purple-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>

          {/* Design Categories */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-purple-400">Design Categories</h3>
            <ul className="space-y-3">
              {designCategories.map((category) => (
                <li key={category}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Occasions */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-purple-400">By Occasions</h3>
            <ul className="space-y-3">
              {occasions.map((occasion) => (
                <li key={occasion}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {occasion}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-purple-400">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get the latest mehndi designs and tips delivered to your inbox
            </p>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white placeholder-gray-400"
              />
              <button className="bg-gradient-to-r from-purple-600 to-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-orange-600 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2024 Mehndi Magic. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}