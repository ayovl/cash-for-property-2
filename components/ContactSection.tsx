'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Label } from '@/components/ui/label'; // Assuming this path
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'; // Assuming this path

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
    contactDay: '',
    contactTime: '',
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
                <div id="cash-offer-form" className="bg-white rounded-3xl p-8 shadow-2xl max-w-6xl w-full">
                  {/* Form Title (Moved Main Heading Here) */}
                  <div className="mb-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                      Sell Your Property Fast
                    </h2>
                    <p className="text-gray-600 text-base mt-2">Get your fair cash offer today and close on your timeline.</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6"> {/* Adjusted overall form spacing if needed */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                      {/* Name */}
                      <div>
                        <Label htmlFor="name" className="sr-only">Full Name</Label> {/* Or visible label if preferred */}
                        <input
                          id="name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Full Name"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors bg-gray-50"
                          required
                        />
                      </div>

                      {/* Email Address */}
                      <div>
                        <Label htmlFor="email" className="sr-only">Email Address</Label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email Address"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors bg-gray-50"
                          required
                        />
                      </div>

                      {/* Phone Number */}
                      <div>
                        <Label htmlFor="phone" className="sr-only">Phone Number</Label>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone Number"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors bg-gray-50"
                          required
                        />
                      </div>

                      {/* Property Address */}
                      <div>
                        <Label htmlFor="propertyAddress" className="sr-only">Property Address</Label>
                        <input
                          id="propertyAddress"
                          type="text"
                          name="propertyAddress"
                          value={formData.propertyAddress}
                          onChange={handleChange}
                          placeholder="Property Address"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors bg-gray-50"
                          required
                        />
                      </div>

                      {/* Best Day to Contact */}
                      <div className="space-y-2">
                        <Label htmlFor="contactDay">Best Day to Contact</Label>
                        <Select
                          name="contactDay" // Keep name for potential non-JS submission, though JS handles it
                          value={formData.contactDay}
                          onValueChange={(value) => setFormData(prev => ({ ...prev, contactDay: value }))}
                        >
                          <SelectTrigger id="contactDay" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors bg-gray-50">
                            <SelectValue placeholder="Select a day" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Monday">Monday</SelectItem>
                            <SelectItem value="Tuesday">Tuesday</SelectItem>
                            <SelectItem value="Wednesday">Wednesday</SelectItem>
                            <SelectItem value="Thursday">Thursday</SelectItem>
                            <SelectItem value="Friday">Friday</SelectItem>
                            <SelectItem value="Saturday">Saturday</SelectItem>
                            <SelectItem value="Sunday">Sunday</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Best Time to Contact */}
                      <div className="space-y-2">
                        <Label htmlFor="contactTime">Best Time to Contact</Label>
                        <Select
                          name="contactTime"
                          value={formData.contactTime}
                          onValueChange={(value) => setFormData(prev => ({ ...prev, contactTime: value }))}
                        >
                          <SelectTrigger id="contactTime" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors bg-gray-50">
                            <SelectValue placeholder="Select a time slot" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="9am-10am">9:00 AM - 10:00 AM</SelectItem>
                            <SelectItem value="10am-11am">10:00 AM - 11:00 AM</SelectItem>
                            <SelectItem value="11am-12pm">11:00 AM - 12:00 PM</SelectItem>
                            <SelectItem value="12pm-1pm">12:00 PM - 1:00 PM</SelectItem>
                            <SelectItem value="1pm-2pm">1:00 PM - 2:00 PM</SelectItem>
                            <SelectItem value="2pm-3pm">2:00 PM - 3:00 PM</SelectItem>
                            <SelectItem value="3pm-4pm">3:00 PM - 4:00 PM</SelectItem>
                            <SelectItem value="4pm-5pm">4:00 PM - 5:00 PM</SelectItem>
                            <SelectItem value="5pm-6pm">5:00 PM - 6:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div> {/* End of grid div */}

                    {/* Message Textarea - Full width below the grid */}
                    <div>
                      <Label htmlFor="message" className="sr-only">How can we help you?</Label>
                      <textarea
                        id="message"
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

        <div id="contact-information-section" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-32">
            <motion.div
              id="contact-details-area" // Added ID here
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
                    <div className="space-y-2">
                      {info.details.map((detail, i) => {
                        if (info.title === 'Phone') {
                          return (
                            <p key={i} className="text-gray-600 font-light text-base sm:text-lg">
                              <span style={{ whiteSpace: 'nowrap' }}>{detail}</span>
                            </p>
                          );
                        }
                        return (
                          <p key={i} className="text-gray-600 font-light text-base sm:text-lg">
                            {detail}
                          </p>
                        );
                      })}
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
              <div className="glass bg-white/80 border border-white/30 rounded-3xl p-2 shadow-xl"> {/* Diagnostic: Changed to p-2 */}
                <div className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center overflow-hidden">
                  <iframe
                    src="https://maps.google.com/maps?q=955%20Lafayette%20Ave.%2C%20Suite%208%2C%20Brooklyn%2C%20NY%2011221&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border:0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Business Location Map"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}