import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>PathFusion Consulting</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="PathFusion: Strategy and data consulting that guides your transformation journey." />
      </Head>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-32">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="container mx-auto px-6 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
                Transform Your Business with Data-Driven Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-2xl mx-auto">
                We help organizations unlock their full potential through strategic consulting and advanced analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full transform transition-all duration-200 hover:scale-105 shadow-lg">
                    Get Started
                  </button>
                </Link>
                <Link href="/services">
                  <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-full transform transition-all duration-200 hover:scale-105">
                    Explore Services
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-6">📊</div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Data Strategy & Engineering</h3>
                <p className="text-gray-600">Transform your data into actionable insights with our expert engineering solutions.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-6">🤖</div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Advanced Analytics</h3>
                <p className="text-gray-600">Leverage cutting-edge analytics and AI to drive business growth.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-6">⚡</div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Process Optimization</h3>
                <p className="text-gray-600">Streamline operations and maximize efficiency with our proven methodologies.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-600 mb-12">
                Let's discuss how we can help you achieve your goals and drive meaningful change.
              </p>
              <Link href="/contact">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full transform transition-all duration-200 hover:scale-105 shadow-lg">
                  Schedule a Consultation
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 