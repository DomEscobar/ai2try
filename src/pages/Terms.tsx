import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { StarBackground } from '../components/StarBackground';

export const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900 via-gray-900 to-black text-white relative overflow-hidden">
      <StarBackground />
      <div className="relative z-10">
        <Header />
        
        <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and using AI2Try, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Use License</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>AI2Try grants you a limited, non-exclusive, non-transferable license to access and use our platform for personal use.</li>
                <li>You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information obtained from AI2Try.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. User Conduct</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Use the service for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the service or servers</li>
                <li>Circumvent any rate-limiting or abuse prevention mechanisms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Third-Party Services</h2>
              <p>AI2Try provides access to third-party AI services. We are not responsible for the content, privacy policies, or practices of any third-party services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Disclaimer</h2>
              <p>The service is provided "as is" without warranties of any kind, either express or implied. We do not guarantee the accuracy, completeness, or usefulness of any information provided through the service.</p>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};