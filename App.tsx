import React from 'react';
import Navbar from './components/Navbar';
import { ArrowRight, Flower2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-sage-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1465385621528-53653983a38f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-sage-900/40 backdrop-blur-sm"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6">
              Holistic Wellness for Mind, Body & Spirit
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Experience transformative healing through our integrated approach to wellness, combining ancient wisdom with modern science.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-sage-600 text-white px-8 py-3 rounded-lg hover:bg-sage-700 transition-colors flex items-center">
                Book Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="bg-white/10 text-white border border-white/20 backdrop-blur-sm px-8 py-3 rounded-lg hover:bg-white/20 transition-colors">
                Our Approach
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-sage-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Begin Your Wellness Journey</h2>
              <p className="text-gray-600 mb-8">
                Take the first step towards holistic health and wellness. Schedule a consultation with our experienced practitioners.
              </p>
            </div>
            
            <form className="bg-white p-8 rounded-xl shadow-sm">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-600 focus:border-transparent"
                  ></textarea>
                </div>
                <button className="w-full bg-sage-600 text-white px-6 py-3 rounded-lg hover:bg-sage-700 transition-colors">
                  Request Consultation
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Flower2 className="h-8 w-8 text-sage-400" />
            <span className="ml-2 text-xl font-bold">Celera Wellness Solutions</span>
          </div>
          <div className="text-center text-gray-400">
            <p className="mb-4">We are located at 2090 El Camino Real, Santa Clara, CA 95050</p>
            <p>© 2024 Celera Wellness Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;