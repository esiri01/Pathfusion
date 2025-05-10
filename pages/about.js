import Head from 'next/head';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>About Us - PathFusion Consulting</title>
        <meta name="description" content="Learn about PathFusion Consulting and our mission to transform businesses through data and strategy." />
      </Head>

      <main className="flex-grow">
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold mb-8 text-gray-900">About PathFusion</h1>
              <div className="prose prose-lg">
                <p className="text-gray-600 mb-6">
                  We are a consulting firm focused on empowering businesses through strategic insight and data-driven solutions. With a global reach, we help you navigate transformation with clarity and confidence.
                </p>
                <p className="text-gray-600 mb-6">
                  Our team of experts combines deep industry knowledge with cutting-edge technology to deliver results that matter. We believe in building long-term partnerships with our clients, working together to achieve sustainable growth and success.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Innovation</h3>
                <p className="text-gray-600">We constantly push boundaries and explore new possibilities to deliver cutting-edge solutions.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Excellence</h3>
                <p className="text-gray-600">We maintain the highest standards in everything we do, ensuring quality and precision in our work.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Partnership</h3>
                <p className="text-gray-600">We build strong relationships with our clients, working together to achieve shared success.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 