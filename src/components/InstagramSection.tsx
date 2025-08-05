import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';

export function InstagramSection() {
  const instagramPosts = [
    {
      id: 1,
      image: '/mehndi/uK8hPxhT0Jchn83VvrRsu.png',
      likes: 324,
      caption: 'Beautiful bridal mehndi design for your special day ✨ #mehndi #bridal'
    },
    {
      id: 2,
      image: '/mehndi/Qt7YCtakg7suvyjkr0Yy2.png',
      likes: 567,
      caption: 'Minimalist elegance at its finest 🌿 #minimalist #henna'
    },
    {
      id: 3,
      image: '/mehndi/oypkTDt7teO_8gWy-SklT.png',
      likes: 234,
      caption: 'Traditional patterns with modern twist 💫 #traditional #modern'
    },
    {
      id: 4,
      image: '/mehndi/iXUfo0zziwICwSLOlQ8Ah.png',
      likes: 432,
      caption: 'Festive designs for celebrations 🎉 #festival #celebration'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Instagram className="w-8 h-8 text-pink-500 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Follow Us on Instagram
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our community for daily inspiration and mehndi design updates
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {instagramPosts.map((post, index) => (
            <div 
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fadeInUp group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Instagram Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-lg font-semibold">{post.likes}</span>
                      <span className="ml-2">❤️</span>
                    </div>
                    <button className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View on Instagram
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <p className="text-sm text-gray-600 line-clamp-2">
                  {post.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://instagram.com/mehndimagic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-200 shadow-lg group"
          >
            <Instagram className="w-5 h-5 mr-2" />
            Follow @MehndibyBaseer
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}