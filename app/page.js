"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Landing() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-xl z-50 border-b border-purple-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-500 via-purple-700 to-purple-900 bg-clip-text text-transparent">
                AutoShorts
              </span>
            </div>
            {/* Mobile menu button */}
            <div className="sm:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors"
              >
                <span className="sr-only">Open main menu</span>
                {!isMobileMenuOpen ? (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
            {/* Desktop menu */}
            <div className="hidden sm:flex sm:space-x-8">
              <a href="#features" className="text-gray-600 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">
                How it Works
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">
                Pricing
              </a>
              <a
                href="https://github.com/varunisrani/auto-short.git"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-purple-200 transition-all font-medium ring-1 ring-purple-200 flex items-center"
              >
                <span>GitHub</span>
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden bg-white border-t border-purple-100`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#features" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors">
              How it Works
            </a>
            <a href="#pricing" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors">
              Pricing
            </a>
            <a
              href="https://github.com/varunisrani/auto-short.git"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-base font-medium text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#f3e8ff,_transparent)] opacity-70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#f3e8ff,_transparent)] opacity-50"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-8 rounded-full bg-gradient-to-r from-purple-50 to-white ring-1 ring-purple-100 shadow-sm">
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent font-medium">Open Source AI-Powered Video Creation</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Create Viral Shorts with
            <span className="bg-gradient-to-r from-purple-500 via-purple-700 to-purple-900 bg-clip-text text-transparent"> AI Magic</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your ideas into engaging short-form videos in minutes. Open source, powered by advanced AI, and designed for modern creators.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://github.com/varunisrani/auto-short.git"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-purple-200/50 transition-all ring-1 ring-purple-200 hover:-translate-y-0.5">
              <span className="flex items-center justify-center">
                View on GitHub
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </span>
            </a>
            <button
              onClick={() => {
                const subject = encodeURIComponent('AutoShorts Feedback');
                const body = encodeURIComponent('Hello,\n\nI would like to provide feedback about AutoShorts:\n\n');
                window.location.href = `mailto:solovpxoffical@gmail.com?subject=${subject}&body=${body}`;
              }}
              className="group bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 transition-all border border-purple-100 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-100/50 hover:-translate-y-0.5">
              Send Feedback
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-24 bg-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#f3e8ff,_transparent)] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Create <span className="bg-gradient-to-r from-purple-500 via-purple-700 to-purple-900 bg-clip-text text-transparent">Amazing Shorts</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed to help you create professional content in minutes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "AI Script Generation",
                description: "Generate engaging scripts tailored for short-form content with our advanced AI."
              },
              {
                title: "Professional Voiceovers",
                description: "Convert your script into natural-sounding voiceovers with multiple voice options."
              },
              {
                title: "Smart Image Generation",
                description: "Create stunning visuals that match your content using AI image generation."
              },
              {
                title: "Automatic Video Creation",
                description: "Combine everything into a polished video with perfect timing and transitions."
              },
              {
                title: "Multiple Duration Options",
                description: "Create shorts of various lengths - 30, 45, or 60 seconds to suit your needs."
              },
              {
                title: "Topic Suggestions",
                description: "Never run out of ideas with our AI-powered topic suggestion feature."
              }
            ].map((feature, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-sm border border-purple-100 hover:shadow-xl hover:shadow-purple-100/50 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl mb-6 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 flex items-center justify-center text-white text-xl font-bold ring-1 ring-purple-200 group-hover:shadow-lg group-hover:shadow-purple-200/50 transition-all">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 sm:py-24 bg-gradient-to-b from-white via-purple-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Create Your First Short in <span className="bg-gradient-to-r from-purple-500 via-purple-700 to-purple-900 bg-clip-text text-transparent">4 Simple Steps</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process makes video creation effortless
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                step: "01",
                title: "Choose Your Topic",
                description: "Select a topic or get AI suggestions for viral content ideas."
              },
              {
                step: "02",
                title: "Generate Script",
                description: "Our AI creates an engaging script optimized for short-form content."
              },
              {
                step: "03",
                title: "Create Assets",
                description: "Generate matching visuals and professional voiceovers automatically."
              },
              {
                step: "04",
                title: "Export Video",
                description: "Get your finished short ready to upload to any platform."
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="group bg-white p-8 rounded-2xl shadow-sm border border-purple-100 hover:shadow-xl hover:shadow-purple-100/50 transition-all hover:-translate-y-1">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-purple-700 to-purple-900 bg-clip-text text-transparent mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 transform -translate-y-1/2">
                    <div className="w-8 h-8 border-t-2 border-r-2 border-purple-200 transform rotate-45"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 sm:py-24 bg-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#f3e8ff,_transparent)] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Simple, <span className="bg-gradient-to-r from-purple-500 via-purple-700 to-purple-900 bg-clip-text text-transparent">Transparent Pricing</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your content creation needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "Free",
                features: [
                  "5 shorts per month",
                  "30-second duration",
                  "Basic AI script generation",
                  "Standard voice options",
                  "720p export quality"
                ]
              },
              {
                name: "Pro",
                price: "$29/month",
                features: [
                  "30 shorts per month",
                  "Up to 60-second duration",
                  "Advanced AI script generation",
                  "Premium voice options",
                  "1080p export quality",
                  "Priority processing"
                ],
                popular: true
              },
              {
                name: "Business",
                price: "$99/month",
                features: [
                  "Unlimited shorts",
                  "Custom duration options",
                  "Custom AI training",
                  "All voice options",
                  "4K export quality",
                  "Priority support",
                  "Custom branding"
                ]
              }
            ].map((plan, index) => (
              <div key={index} className={`group relative bg-white p-8 rounded-2xl shadow-sm ${
                plan.popular ? 'ring-2 ring-purple-500 scale-105' : 'border border-purple-100'
              } hover:shadow-xl hover:shadow-purple-100/50 transition-all hover:-translate-y-1`}>
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg shadow-purple-200/50">
                      Most Popular
                    </div>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {plan.name}
                </h3>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-purple-700 to-purple-900 bg-clip-text text-transparent mb-6">
                  {plan.price}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <span className="mr-2 text-purple-600">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/create" 
                  className="group block w-full text-center bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 text-white px-6 py-3 rounded-full hover:shadow-lg hover:shadow-purple-200/50 transition-all font-medium ring-1 ring-purple-200">
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            We're <span className="bg-gradient-to-r from-purple-500 via-purple-700 to-purple-900 bg-clip-text text-transparent">Open Source</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            AutoShorts is open source! You can contribute, modify, and make it better for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://github.com/varunisrani/auto-short.git" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-purple-200/50 transition-all ring-1 ring-purple-200 hover:-translate-y-0.5"
            >
              <span className="flex items-center justify-center">
                View on GitHub
                <svg className="w-6 h-6 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </span>
            </a>
            <button 
              onClick={() => {
                const subject = encodeURIComponent('AutoShorts Feedback');
                const body = encodeURIComponent('Hello,\n\nI would like to provide feedback about AutoShorts:\n\n');
                window.location.href = `mailto:solovpxoffical@gmail.com?subject=${subject}&body=${body}`;
              }}
              className="group bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 transition-all border border-purple-100 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-100/50 hover:-translate-y-0.5"
            >
              Send Feedback
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-purple-700 to-purple-900 bg-clip-text text-transparent">
                AutoShorts
              </span>
              <p className="mt-4 text-gray-600">
                Creating viral shorts has never been easier.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 uppercase mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="text-gray-600 hover:text-purple-600 transition-colors">How it Works</a></li>
                <li><a href="#pricing" className="text-gray-600 hover:text-purple-600 transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 uppercase mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 uppercase mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Privacy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-purple-100 text-center text-sm sm:text-base text-gray-600">
            © {new Date().getFullYear()} AutoShorts. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
} 