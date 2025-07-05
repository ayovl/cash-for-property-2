'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const stats = [
	{ number: 35, suffix: '+', label: 'Years of Experience', sublabel: 'Since 1988' },
	{ number: 1500, suffix: '+', label: 'Properties Purchased', sublabel: 'Throughout NYC' },
	{ number: 1200, suffix: '+', label: 'Satisfied Clients', sublabel: 'And counting' },
	{ number: 98, suffix: '%', label: 'Client Satisfaction', sublabel: 'Recommend our service' },
];

function AnimatedCounter({
	target,
	suffix = '',
	duration = 2000,
}: {
	target: number;
	suffix?: string;
	duration?: number;
}) {
	const [count, setCount] = useState(0);

	useEffect(() => {
		let startTime: number;
		let animationFrame: number;

		const animate = (timestamp: number) => {
			if (!startTime) startTime = timestamp;
			const progress = Math.min((timestamp - startTime) / duration, 1);

			setCount(Math.floor(progress * target));

			if (progress < 1) {
				animationFrame = requestAnimationFrame(animate);
			}
		};

		animationFrame = requestAnimationFrame(animate);

		return () => cancelAnimationFrame(animationFrame);
	}, [target, duration]);

	return <span>{count}{suffix}</span>;
}

export default function AboutSection() {
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
					<span className="text-sm font-medium text-gray-600 mb-4 block">• Who we are?</span>
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 max-w-6xl mx-auto leading-tight">
						We Are A Team Of{' '}
						<span className="text-gray-400">Trusted Experts</span> Creating{' '}
						<span className="text-black">Fast, Reliable,</span> And{' '}
						<span className="text-black">Hassle-Free</span>{' '}
						<span className="text-gray-400">Property Solutions.</span> From{' '}
						<span className="text-gray-400">Initial Contact To Final Settlement,</span> We Work With{' '}
						<span className="text-black">Purpose And Precision</span>{' '}
						<span className="text-gray-400">To Bring</span>{' '}
						<span className="text-black">Your Cash Offer To Life</span>
					</h2>

					<div className="flex justify-center space-x-4 mt-12">
						<div className="w-32 h-20 bg-white rounded-2xl overflow-hidden">
							<img
								src="https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
								alt="NYC Property"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="w-32 h-20 bg-white rounded-2xl overflow-hidden">
							<img
								src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
								alt="NYC Building"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="w-32 h-20 bg-white rounded-2xl overflow-hidden">
							<img
								src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
								alt="NYC Skyline"
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					viewport={{ once: true }}
					className="text-center mb-20"
				>
					<span className="text-sm font-medium text-gray-600 mb-4 block">Our Achievements</span>
				</motion.div>

				<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
					{stats.map((stat, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="text-center"
						>
							<div className="glass bg-white/80 border border-white/30 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
								<div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
									<AnimatedCounter target={stat.number} suffix={stat.suffix} />
								</div>
								<h3 className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</h3>
								<p className="text-gray-600 text-sm">{stat.sublabel}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}