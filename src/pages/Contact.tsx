import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { StarBackground } from '../components/StarBackground';
import { Linkedin, Mail, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900 via-gray-900 to-black text-white relative overflow-hidden">
      <StarBackground />
      <div className="relative z-10">
        <Header />
        
        <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
          
          <div className="space-y-12">
            <section className="bg-white/5 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <p className="text-gray-300 mb-8">
                Have questions about AI2Try? We'd love to hear from you. Connect with us through any of the following channels:
              </p>
              
              <div className="space-y-6">
                <a
                  href="https://linkedin.com/company/ai2try"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <Linkedin className="w-6 h-6 text-purple-400" />
                  <div>
                    <h3 className="font-semibold">Connect on LinkedIn</h3>
                    <p className="text-sm text-gray-400">Follow our company page for updates</p>
                  </div>
                </a>

                <a
                  href="mailto:contact@ai2try.com"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <Mail className="w-6 h-6 text-purple-400" />
                  <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <p className="text-sm text-gray-400">contact@ai2try.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-purple-400" />
                  <div>
                    <h3 className="font-semibold">Response Time</h3>
                    <p className="text-sm text-gray-400">We typically respond within 24-48 hours</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};