import Head from 'next/head';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Contact Us - PathFusion Consulting</title>
        <meta name="description" content="Get in touch with PathFusion Consulting to discuss how we can help transform your business." />
      </Head>

      <main className="flex-grow">
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-6 text-gray-900">Contact Us</h1>
                <p className="text-xl text-gray-600">
                  Let's start a conversation about your business needs
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">Get in Touch</h2>
                  <p className="text-gray-600 mb-8">
                    Have a question or want to learn more about our services? Fill out the form and we'll get back to you as soon as possible.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">info@pathfusion.com</p>
                    </div>
                    
                    
                  </div>
                </div>

                <form 
                  className="bg-white p-8 rounded-xl shadow-sm"
                  method="POST" 
                  action="https://formsubmit.co/info@pathfusion.ca"
                >
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input 
                        type="text" 
                        name="name" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input 
                        type="email" 
                        name="email" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea 
                        name="message" 
                        rows="5" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                        required
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transform transition-all duration-200 hover:scale-105 shadow-lg"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 