'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['1-800-730-1717', '(917) 576-1010'],
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@cashforpropertiesnyc.com'],
  },
  {
    icon: MapPin,
    title: 'Address',
    details: ['955 Lafayette Ave., Suite 8,', 'Brooklyn, NY 11221'],
  },
  {
    icon: Clock,
    title: 'Hours',
    details: ['Available 24/7'],
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <section className="py-0">
        {/* Hero Contact Section */}
        <div 
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Heading and Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Top Tags */}
                <div className="flex flex-wrap gap-4 text-sm text-white">
                  <span>Fast Cash Offers</span>
                  <span>•</span>
                  <span>Client First Approach</span>
                  <span>•</span>
                  <span>Trustworthy</span>
                </div>

                {/* Main Heading */}
                <div className="space-y-4">
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                    Fast Cash
                    <br />
                    <span className="text-white">— Professional</span>
                    <br />
                    <span className="text-white">Client-First</span>
                  </h2>
                </div>

                {/* Contact Details */}
                <div className="space-y-6 pt-8">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-white" />
                    <span className="text-lg font-medium text-white">1-800-730-1717</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-white" />
                    <span className="text-lg text-white">955 Lafayette Ave., Suite 8, Brooklyn, NY 11221</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-white" />
                    <span className="text-lg text-white">info@cashforpropertiesnyc.com</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:ml-auto"
              >
                <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-md w-full">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Let's Have a Chat 👋</h3>
                    <p className="text-gray-600">Get your fair cash offer today and close on your timeline.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors bg-gray-50"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors bg-gray-50"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors bg-gray-50"
                        required
                      />
                    </div>

                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors resize-none bg-gray-50"
                      ></textarea>
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gray-900 text-white py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors"
                    >
                      Send
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Contact Information Cards */}
        <div className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-32"> {/* Changed px-16 to px-32 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <span className="text-sm font-medium text-gray-600 mb-4 block">• Get In Touch</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Contact Information
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Ready to sell your property? Contact us today for a free, no-obligation cash offer.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16"> {/* Reverted: Removed justify-items-center */}
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center h-full" // Reverted: Removed max-w-md
                >
                  <div className="glass bg-white/80 border border-white/30 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow min-h-full flex flex-col justify-start"> {/* Added min-h-full, flex, flex-col, justify-start */}
                    <div> {/* Wrapper for icon and title */}
                      <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <info.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                    </div>
                    <div className="space-y-1">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-600 font-light">{detail}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Location</h3>
              <p className="text-gray-600 mb-8 font-light">Visit us at our Brooklyn office</p>
              <div className="glass bg-white/80 border border-white/30 rounded-3xl p-8 shadow-xl">
                <div className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center">
                  <p className="text-gray-600">Map placeholder - Visit us at our Brooklyn office</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}