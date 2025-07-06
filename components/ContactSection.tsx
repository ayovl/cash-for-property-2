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
    propertyAddress: '',
    bestTimeToContact: '',
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
      <section className="py-0" id="cash-offer-form">
        {/* Hero Contact Section */}
        <div 
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
            <div className="w-full flex justify-center"> {/* Changed from grid to flex justify-center */}
              {/* Left Side - Tags Only - This entire motion.div is removed */}

              {/* Right Side - Contact Form - Now the only child, will be centered */}
              <motion.div
                initial={{ opacity: 0, y: 50 }} // Adjusted initial y for a slightly different entry
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }} // delay can be removed if it's the only main element
                viewport={{ once: true }}
                className="" // Removed lg:ml-auto
              >
                <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-lg w-full"> {/* Changed max-w-md to max-w-lg */}
                  {/* Form Title (Moved Main Heading Here) */}
                  <div className="mb-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                      Get Your Fair Cash Offer Today!
                    </h2>
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

                    <div>
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
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors bg-gray-50"
                        required
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        name="propertyAddress"
                        value={formData.propertyAddress}
                        onChange={handleChange}
                        placeholder="Property Address"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors bg-gray-50"
                        required
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        name="bestTimeToContact"
                        value={formData.bestTimeToContact}
                        onChange={handleChange}
                        placeholder="Best Time to Contact You"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors bg-gray-50"
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
          <div className="max-w-7xl mx-auto px-6">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="glass bg-white/80 border border-white/30 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
                    <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
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