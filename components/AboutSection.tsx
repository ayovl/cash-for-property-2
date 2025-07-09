'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';

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
	const { count, ref } = useAnimatedCounter({ target, duration });
	return <span ref={ref}>{count}{suffix}</span>;
}

export default function AboutSection() {
	return (
		<section className="pt-12 pb-12 bg-white">
			<div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-40">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center"
				>
					<span className="text-sm font-medium text-gray-600 mb-4 block">• Who we are?</span>
					{/* Updated H2 text */}
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 max-w-6xl mx-auto leading-tight">
						Your <span className="text-gray-400">Trusted NYC Partner Since 1988.</span> We Deliver Fast, Confidential, <span className="text-black">As-Is Cash Solutions,</span> Making Your Property Sale <span className="text-gray-400">Simple And Stress-Free.</span>
					</h2>

					<div className="flex justify-center space-x-4 mt-12">
						<div className="w-32 h-20 bg-white rounded-2xl overflow-hidden relative">
							<Image
								src="https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
								alt="NYC Property"
								fill
								className="object-cover"
							/>
						</div>
						<div className="w-32 h-20 bg-white rounded-2xl overflow-hidden relative">
							<Image
								src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
								alt="NYC Building"
								fill
								className="object-cover"
							/>
						</div>
						<div className="w-32 h-20 bg-white rounded-2xl overflow-hidden relative">
							<Image
								src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
								alt="NYC Skyline"
								fill
								className="object-cover"
							/>
						</div>
					</div>
					{/* Added "Learn More" button with new styling */}
					<Link href="/about-us" passHref>
						<Button
							variant="ghost" // Using ghost to allow custom text colors more easily
							size="sm" // Small size
							className="mt-8 text-gray-900 font-semibold hover:text-gray-700 transition-colors group flex items-center space-x-2 mx-auto" // Added mx-auto for centering
						>
							<span>Learn More</span>
							<span className="group-hover:translate-x-1 transition-transform">→</span>
						</Button>
					</Link>
				</motion.div>
			</div>
		</section>
	);
}