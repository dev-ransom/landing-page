"use client";

import Affiliate from "@/components/Affiliate";
import BackToTopButton from "@/components/BackToTop";
import Button from "@/components/Button";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Networking from "@/components/Networking";
import { FaRegEnvelope } from "react-icons/fa";
import { FiBook } from "react-icons/fi";

export default function Home() {
	return (
		<main className="bg-[#202942] w-full h-full">
			<Navbar bgColor='bg-[#202942]' boxShadow="shadow-sm" />
			<div className="lg:pt-[20vh] pt-[15vh] lg:px-20 h-full pb-10 ">
				<div className="w-full flex-col flex lg:flex-row px-3">
					<div className="lg:flex-1 md:pr-10 lg:text-center md:text-left mt-10 w-full">
						<h1 className="capitalize text-[45px] text-white">
							our creativity is your
							<span className="text-baseColor"> success</span>
						</h1>
						<p className="pt-7 text-textColor text-[18px]">
							Launch your campaign and benefit from our expertise on designing
							and managing conversion centered bootstrap v5 html page.
						</p>
						<div className="flex lg:flex-row flex-col gap-4 pt-8">
							<Button
								label="Get Started"
								type="button"
								icon={<FaRegEnvelope />}
							/>
							<Button
								label="Documentation"
								type="button"
								bgColor="bg-bgColor hover:bg-baseColor transition-all duration-300"
								classes="text-baseColor hover:text-white"
								width="w-[250px]"
								icon={<FiBook />}
							/>
						</div>
					</div>
					<div className="flex-1 h-[500px] lg:pt-0 pt-5 py-16">
						<img
							src="/images/hero-image.svg"
							alt="heroimage"
							className="w-full h-full"
						/>
					</div>
				</div>
			</div>
			<Affiliate />
			<HowItWorks />
			<Networking />
			<Contact />
			<Footer />
			<BackToTopButton />
		</main>
	);
}
