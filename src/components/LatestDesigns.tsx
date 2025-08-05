import React from 'react';
import { Download, Heart, Eye, Share2 } from 'lucide-react';

export function LatestDesigns() {
  const designs = [
    {
      id: 1,
      title: 'Elegant Bridal Floral',
      image: '/mehndi/uK8hPxhT0Jchn83VvrRsu.png',
      category: 'Bridal'
    },
    {
      id: 2,
      title: 'Arabic Geometric Pattern',
      image: '/mehndi/Qt7YCtakg7suvyjkr0Yy2.png',
      category: 'Arabic'
    },
    {
      id: 3,
      title: 'Minimalist Rose Design',
      image: '/mehndi/oypkTDt7teO_8gWy-SklT.png',
      category: 'Minimal'
    },
    {
      id: 4,
      title: 'Traditional Paisley',
      image: '/mehndi/iXUfo0zziwICwSLOlQ8Ah.png',
      category: 'Traditional'
    },
    {
      id: 5,
      title: 'Festival Special',
      image: '/mehndi/U5sbQ_T7tVBAGB92Afct-.png',
      category: 'Festival'
    },
    {
      id: 6,
      title: 'Delicate Vine Pattern',
      image: '/mehndi/BAWZoGxlNhR23jIZDy5rz.png',
      category: 'Floral'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Mehndi Designs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our newest collection of stunning henna designs, 
            perfect for any occasion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.map((design, index) => (
            <div 
              key={design.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeInUp"
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
                  <div className="flex space-x-4">
                    <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                      <Download className="w-5 h-5 text-gray-700" />
                    </button>
                    <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                      <Heart className="w-5 h-5 text-gray-700" />
                    </button>
                    <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                      <Eye className="w-5 h-5 text-gray-700" />
                    </button>
                    <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                      <Share2 className="w-5 h-5 text-gray-700" />
                    </button>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-purple-600 text-white text-sm font-medium rounded-full">
                    {design.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {design.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  Beautiful handcrafted design perfect for special occasions
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-orange-600 transition-all duration-200 shadow-lg">
            View All Designs
          </button>
        </div>
      </div>
    </section>
  );
}