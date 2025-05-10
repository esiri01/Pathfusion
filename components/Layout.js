import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <span className="text-2xl font-bold tracking-tight group-hover:text-blue-400 transition-colors duration-200">
                PathFusion
              </span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/about" className="hover:text-blue-400 transition-colors duration-200">About</Link>
              <Link href="/services" className="hover:text-blue-400 transition-colors duration-200">Services</Link>
              <Link href="/case-studies" className="hover:text-blue-400 transition-colors duration-200">Case Studies</Link>
              <Link href="/insights" className="hover:text-blue-400 transition-colors duration-200">Insights</Link>
              <Link href="/contact" className="hover:text-blue-400 transition-colors duration-200">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <Link href="/" className="text-xl font-bold mb-4 block hover:text-blue-400 transition-colors duration-200">
                PathFusion Consulting
              </Link>
              <p className="text-gray-400">Transforming businesses through data and strategy.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <nav className="space-y-2">
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-200 block">About Us</Link>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors duration-200 block">Services</Link>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200 block">Contact</Link>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p>info@pathfusion.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} PathFusion Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 