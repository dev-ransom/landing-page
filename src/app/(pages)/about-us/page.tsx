"use client";
import React from "react";
import { motion } from "framer-motion";
import { navItems, whyChooseUs } from "@/constants";
import { aboutItemsProps } from "@/types";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

const Page = () => {
	const router = useRouter();
	return (
		<div className="text-gray-800 bg-[#202942]  lg:pt-[20vh] pt-[15vh] lg:px-20 h-full pb-10 ">
			{/* Hero Section */}
			<motion.section
				className="text-white py-16 px-4"
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
			>
				<div className="max-w-6xl mx-auto text-center">
					<h1 className="text-4xl md:text-5xl font-bold mb-4">
						Welcome to TheFullStackDev
					</h1>
					<p className="text-lg md:text-xl">
						Empowering Your Brand’s Digital Journey. We’re not just a
						digital agency – we’re your partners in creating extraordinary
						experiences online.
					</p>
				</div>
			</motion.section>

			{/* Our Services Section */}
			<section className="py-16 px-4">
				<div className="max-w-6xl mx-auto text-center">
					<motion.h2
						className="text-3xl font-bold mb-10 text-white"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.6, ease: "easeOut" }}
					>
						Our Services
					</motion.h2>
					<motion.div
						className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
						initial="hidden"
						animate="visible"
						variants={{
							hidden: {},
							visible: { transition: { staggerChildren: 0.2 } },
						}}
					>
						{navItems.map((item, index) => (
							<ServiceCard
								key={index}
								title={item.title}
								description={item.description}
							/>
						))}
					</motion.div>
				</div>
			</section>

			{/* Why Choose Us Section */}
			<section className="bg-white py-16 px-4">
				<div className="max-w-6xl mx-auto text-center">
					<motion.h2
						className="text-3xl font-bold mb-10"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.6, ease: "easeOut" }}
					>
						Why Choose Us?
					</motion.h2>
					<motion.div
						className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
						initial="hidden"
						whileInView="visible"
						variants={{
							hidden: {},
							visible: { transition: { staggerChildren: 0.2 } },
						}}
					>
						{whyChooseUs.map((item, index) => (
							<WhyChooseUsCard
								key={index}
								title={item.title}
								description={item.description}
							/>
						))}
					</motion.div>
				</div>
			</section>

			{/* CTA Section */}
			<motion.section
				className="bg-[#202942] text-white py-16 px-4"
				initial={{ opacity: 0, scale: 0.9 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.7, ease: "easeOut" }}
			>
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl font-bold mb-4">
						Ready to Elevate Your Brand?
					</h2>
					<p className="text-lg mb-6">
						Take the first step toward digital excellence with TheFullStackDev.
						Reach out for a free consultation, and let’s discuss how we can
						empower your brand.
					</p>
					<div className="w-full flex justify-center items-center">
						<Button
							label="Get Started"
							type="button"
							onClick={() => router.push("/about-us")}
						/>
					</div>
				</div>
			</motion.section>

			{/* Contact Section */}
			<motion.section
				className="py-16 px-4"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
			>
				<div className="max-w-6xl mx-auto text-center text-white">
					<h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
					<p className="text-lg mb-2">Phone: Your Phone Number</p>
					<p className="text-lg mb-2">Email: Your Email Address</p>
					<p className="text-lg">Address: Your Physical Address</p>
				</div>
			</motion.section>
		</div>
	);
};

// Card Components with Animation
const ServiceCard = ({ title, description }: aboutItemsProps) => (
	<motion.div
		className="bg-white p-6 shadow-custom rounded-lg"
		initial={{ opacity: 0, y: 20 }}
		whileInView={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.5, ease: "easeOut" }}
	>
		<h3 className="text-xl font-bold mb-2">{title}</h3>
		<p className="text-gray-700">{description}</p>
	</motion.div>
);

const WhyChooseUsCard = ({ title, description }: aboutItemsProps) => (
	<motion.div
		className="bg-blue-100 p-6 shadow-lg rounded-lg"
		initial={{ opacity: 0, y: 20 }}
		whileInView={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.5, ease: "easeOut" }}
	>
		<h3 className="text-xl font-bold mb-2">{title}</h3>
		<p className="text-gray-700">{description}</p>
	</motion.div>
);

export default Page;
