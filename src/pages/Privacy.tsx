import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { StarBackground } from '../components/StarBackground';

export const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900 via-gray-900 to-black text-white relative overflow-hidden">
      <StarBackground />
      <div className="relative z-10">
        <Header />
        
        <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
              <p>At AI2Try, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our service.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Browser fingerprint for abuse prevention</li>
                <li>Usage data and analytics</li>
                <li>Technical information about your device and browser</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>To prevent abuse of our services</li>
                <li>To improve our platform and user experience</li>
                <li>To analyze usage patterns and optimize performance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p>If you have any questions about our Privacy Policy, please contact us at privacy@ai2try.com</p>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};