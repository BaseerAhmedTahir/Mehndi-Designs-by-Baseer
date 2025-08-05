import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

export function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Bridal Mehndi Trends for 2024',
      excerpt: 'Discover the latest bridal mehndi trends that are taking the wedding world by storm. From minimalist designs to intricate patterns...',
      image: '/mehndi/uK8hPxhT0Jchn83VvrRsu.png',
      date: '2024-01-15',
      category: 'Bridal',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'How to Make Your Mehndi Last Longer',
      excerpt: 'Expert tips and tricks to ensure your henna design stays vibrant and beautiful for weeks. Learn the secrets of mehndi care...',
      image: '/mehndi/Qt7YCtakg7suvyjkr0Yy2.png',
      date: '2024-01-12',
      category: 'Tips & Care',
      readTime: '4 min read'
    },
    {
      id: 3,
      title: 'Arabic vs Indian Mehndi: Understanding the Differences',
      excerpt: 'Explore the unique characteristics that distinguish Arabic and Indian mehndi styles, from patterns to application techniques...',
      image: '/mehndi/oypkTDt7teO_8gWy-SklT.png',
      date: '2024-01-10',
      category: 'Styles',
      readTime: '6 min read'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest mehndi trends, tips, and cultural insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-purple-600 transition-colors cursor-pointer">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                  
                  <button className="flex items-center text-purple-600 hover:text-purple-700 font-medium text-sm transition-colors group">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-orange-600 transition-all duration-200 shadow-lg">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}