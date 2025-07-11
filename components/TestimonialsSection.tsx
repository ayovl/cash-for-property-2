'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Working with this team was a wonderful experience. They were quite thorough and knowledgeable, which helped the process go smoothly. If I had any concerns, they were addressed promptly.",
    author: "Roz Morris",
    location: "Queens, NY",
  },
  {
    quote: "I had an amazing experience with Ronnen!! Very professional and knowledgeable. I felt right at home working with him. Looking forward to our next project together!",
    author: "Katie Connor",
    location: "Brooklyn, NY",
  },
  {
    quote: "This company was a great help in getting a consolidation for my home and assisting with the legal process. Extremely professional and responsive throughout the process. Thanks Ronnen…",
    author: "Glenna John",
    location: "Brooklyn, NY",
  },
];

export default function TestimonialsSection() {
  return (    <section
      className="pt-12 pb-24 relative overflow-hidden"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1668508886518-60008d394c51?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-white/75 z-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-black mb-4 block">• Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 max-w-4xl mx-auto leading-tight">
            What Our Clients Say
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto font-medium">
            Don&apos;t just take our word for it - hear from property owners we&apos;ve helped throughout NYC.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass bg-white/80 border border-white/30 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 leading-relaxed mb-6 font-light">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-gray-600 text-sm">{testimonial.location}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}