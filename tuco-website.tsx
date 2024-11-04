import React from 'react';
import { ArrowRight } from 'lucide-react';

const TucoWebsite = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Announcement Banner */}
      <div className="bg-black text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <span>Take a deep dive into TUCO's supply chain analysis process</span>
          <a href="#" className="flex items-center gap-2 hover:text-gray-300">
            Check it out <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="container mx-auto py-6 px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">T U C O</a>
          <div className="flex gap-8">
            {['Work', 'About', 'Services', 'Perspectives', 'Contact'].map((item) => (
              <a key={item} href="#" className="hover:text-gray-600">{item}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="container mx-auto px-4 pb-32 pt-20">
          <h1 className="text-5xl font-bold max-w-3xl leading-tight">
            we love data-driven <a href="#" className="text-blue-600">analysis</a>, 
            thoughtfully crafted <a href="#" className="text-blue-600">solutions</a>, 
            and building custom <a href="#" className="text-blue-600">logistics</a> frameworks
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg 
            className="relative block w-full h-48"
            viewBox="0 0 1440 320" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="black"
              fillOpacity="1"
            />
          </svg>
        </div>
      </section>

      {/* About Intro Sections */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-20">
            <div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <img src="/api/placeholder/740/1338" alt="Logistics operations" className="w-full object-cover" />
                <img src="/api/placeholder/512/512" alt="Supply chain technology" className="w-full object-cover" />
              </div>
              <h2 className="text-sm uppercase tracking-wider mb-4">we craft experiences</h2>
              <p className="text-gray-300">
                TUCO is a supply chain solutions provider based in Australia. We specialize in creating seamless logistics experiences, 
                implementing data-driven solutions, and developing custom supply chain frameworks.
              </p>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <img src="/api/placeholder/512/512" alt="Data analytics" className="w-full object-cover" />
                <img src="/api/placeholder/1132/836" alt="Team collaboration" className="w-full object-cover" />
              </div>
              <h2 className="text-sm uppercase tracking-wider mb-4">small by design</h2>
              <p className="text-gray-300">
                Our approach is highly collaborative and analytical. We care deeply about our clients, 
                and partner with companies who believe in data-driven decision making and innovative supply chain solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Grid */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "98%", label: "Client Retention Rate" },
              { value: "35%", label: "Average Cost Savings" },
              { value: "24/7", label: "Support Available" },
              { value: "AU", label: "Nationwide Coverage" }
            ].map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-4xl font-bold mb-2">{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TucoWebsite;
