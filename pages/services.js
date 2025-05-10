import Head from 'next/head';

export default function Services() {
  const services = [
    {
      title: 'Data Strategy & Engineering',
      description: 'Transform your data into actionable insights with our expert engineering solutions.',
      icon: '📊'
    },
    {
      title: 'Business Intelligence & Dashboarding',
      description: 'Create powerful visualizations and interactive dashboards for real-time business insights.',
      icon: '📈'
    },
    {
      title: 'Advanced Analytics & Machine Learning',
      description: 'Leverage cutting-edge analytics and AI to drive business growth and innovation.',
      icon: '🤖'
    },
    {
      title: 'Operations Optimization',
      description: 'Streamline operations and maximize efficiency with our proven methodologies.',
      icon: '⚡'
    },
    {
      title: 'Digital Transformation Strategy',
      description: 'Navigate the digital landscape with confidence and strategic direction.',
      icon: '🌐'
    },
    {
      title: 'Product & Marketing Analytics',
      description: 'Make data-driven decisions to optimize your products and marketing strategies.',
      icon: '🎯'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Our Services - PathFusion Consulting</title>
        <meta name="description" content="Explore our comprehensive range of consulting services designed to transform your business." />
      </Head>

      <main className="flex-grow">
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl font-bold mb-6 text-gray-900">Our Services</h1>
              <p className="text-xl text-gray-600">
                Comprehensive solutions tailored to your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 transform hover:-translate-y-1"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Let's discuss how we can help you achieve your goals
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full transform transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 