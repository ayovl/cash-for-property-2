'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Heart, Home, AlertTriangle, FileText, Users, Zap } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Divorce Situations',
    description: 'Need to sell quickly due to divorce? We offer a fast, stress-free solution to divide assets.',
  },
  {
    icon: FileText,
    title: 'Estates, Trusts & Wills',
    description: 'Simplify the process of settling an estate by selling inherited property quickly for cash.',
  },
  {
    icon: AlertTriangle,
    title: 'Foreclosure Relief',
    description: 'Facing foreclosure? Get cash for your property and avoid the negative impact on your credit.',
  },
  {
    icon: Home,
    title: 'Tax Lien Problems',
    description: 'Resolve tax lien issues by selling your property for cash and clearing your debt.',
  },
  {
    icon: Users,
    title: 'Violations & Tenant Issues',
    description: 'Dealing with property violations or problem tenants? Sell as-is and avoid the headaches.',
  },
  {
    icon: Zap,
    title: 'Fast Cash Needs',
    description: 'Need cash quickly for any reason? We can close in as little as 7 days with cash in hand.',
  },
];

export default function ServicesSection() {
  return (
    <section className="pt-12 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-gray-600 mb-4 block">• Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 max-w-4xl mx-auto leading-tight">
            We Buy Properties In Any Situation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            No matter your circumstances, we provide a fast, confidential solution for selling your property.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col" // Added flex flex-col
            >
              <div className="glass bg-gray-50/80 border border-gray-200/50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 group-hover:bg-white/90 h-full"> {/* Added h-full */}
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 font-light">{service.description}</p>
                <button className="flex items-center space-x-2 text-gray-900 font-semibold hover:text-gray-700 transition-colors group">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}