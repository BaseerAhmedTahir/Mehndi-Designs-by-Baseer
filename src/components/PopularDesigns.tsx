import React, { useState } from 'react';
import { Download, Heart, Eye, Share2 } from 'lucide-react';

export function PopularDesigns() {
  const [activeTab, setActiveTab] = useState('simple');

  const designCategories = {
    simple: {
      title: 'Simple Mehndi Designs',
      designs: [
        {
          id: 1,
          title: 'Elegant Floral Vine',
          image: '/mehndi/uK8hPxhT0Jchn83VvrRsu.png'
        },
        {
          id: 2,
          title: 'Minimalist Rose',
          image: '/mehndi/Qt7YCtakg7suvyjkr0Yy2.png'
        },
        {
          id: 3,
          title: 'Delicate Paisley',
          image: '/mehndi/oypkTDt7teO_8gWy-SklT.png'
        },
        {
          id: 4,
          title: 'Simple Mandala',
          image: '/mehndi/iXUfo0zziwICwSLOlQ8Ah.png'
        }
      ]
    },
    bridal: {
      title: 'Bridal Mehndi Designs',
      designs: [
        {
          id: 5,
          title: 'Royal Bridal Pattern',
          image: '/mehndi/U5sbQ_T7tVBAGB92Afct-.png'
        },
        {
          id: 6,
          title: 'Traditional Bridal',
          image: '/mehndi/BAWZoGxlNhR23jIZDy5rz.png'
        },
        {
          id: 7,
          title: 'Modern Bridal Design',
          image: '/mehndi/uK8hPxhT0Jchn83VvrRsu.png'
        },
        {
          id: 8,
          title: 'Intricate Bridal',
          image: '/mehndi/Qt7YCtakg7suvyjkr0Yy2.png'
        }
      ]
    },
    arabic: {
      title: 'Arabic Mehndi Designs',
      designs: [
        {
          id: 9,
          title: 'Bold Arabic Pattern',
          image: '/mehndi/oypkTDt7teO_8gWy-SklT.png'
        },
        {
          id: 10,
          title: 'Flowing Arabic Design',
          image: '/mehndi/iXUfo0zziwICwSLOlQ8Ah.png'
        },
        {
          id: 11,
          title: 'Geometric Arabic',
          image: '/mehndi/U5sbQ_T7tVBAGB92Afct-.png'
        },
        {
          id: 12,
          title: 'Classic Arabic Style',
          image: '/mehndi/BAWZoGxlNhR23jIZDy5rz.png'
        }
      ]
    }
  };

  const tabs = [
    { id: 'simple', label: 'Simple Designs' },
    { id: 'bridal', label: 'Bridal Designs' },
    { id: 'arabic', label: 'Arabic Designs' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Mehndi Designs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our most loved designs across different categories
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-gray-100 rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Design Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {designCategories[activeTab as keyof typeof designCategories].designs.map((design, index) => (
            <div 
              key={design.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-3">
                    <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors group">
                      <Download className="w-4 h-4 text-gray-700" />
                    </button>
                    <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors group">
                      <Heart className="w-4 h-4 text-gray-700" />
                    </button>
                    <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors group">
                      <Eye className="w-4 h-4 text-gray-700" />
                    </button>
                    <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors group">
                      <Share2 className="w-4 h-4 text-gray-700" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 text-center">
                  {design.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}