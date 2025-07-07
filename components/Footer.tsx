'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer 
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-gray-100/50 to-white/60"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
        <div className="glass bg-white/20 border border-white/30 rounded-3xl p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
                <span className="text-gray-900 font-semibold text-lg">Cash for Properties NYC</span>
              </div>
              <p className="text-gray-700 mb-4 font-light">
                We buy properties for cash fast as-is in NYC. Serving property owners since 1988.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors font-light">Home</Link></li>
                <li><Link href="/about" className="text-gray-700 hover:text-gray-900 transition-colors font-light">About Us</Link></li>
                <li><Link href="/how-it-works" className="text-gray-700 hover:text-gray-900 transition-colors font-light">How It Works</Link></li>
                <li><Link href="/contact" className="text-gray-700 hover:text-gray-900 transition-colors font-light">Contact Us</Link></li>
                <li><Link href="/contact" className="text-gray-700 hover:text-gray-900 transition-colors font-light">Sell Your Property</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li><Link href="/services" className="text-gray-700 hover:text-gray-900 transition-colors font-light">Divorces</Link></li>
                <li><Link href="/services" className="text-gray-700 hover:text-gray-900 transition-colors font-light">Estates, Trusts & Wills</Link></li>
                <li><Link href="/services" className="text-gray-700 hover:text-gray-900 transition-colors font-light">Foreclosures</Link></li>
                <li><Link href="/services" className="text-gray-700 hover:text-gray-900 transition-colors font-light">Tax Liens</Link></li>
                <li><Link href="/services" className="text-gray-700 hover:text-gray-900 transition-colors font-light">Violations & Tenant Problems</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li><a href="tel:1-800-730-1717" className="text-gray-700 hover:text-gray-900 transition-colors font-light">1-800-730-1717</a></li>
                <li><a href="mailto:info@cashforpropertiesnyc.com" className="text-gray-700 hover:text-gray-900 transition-colors font-light">info@cashforpropertiesnyc.com</a></li>
                <li className="text-gray-700 font-light">955 Lafayette Ave., Suite 8,<br />Brooklyn, NY 11221</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-700 text-sm font-light">
              © 2025 Cash for Properties NYC. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-light">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-light">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}