import React, { useMemo, useState } from "react";
import Carousel1 from "./Carousel";
import Carousel2 from "./Carousel2";
import Link from "next/link";
import PriceCard from "./PriceCard";
import { FaRegCheckCircle } from "react-icons/fa";

const Networking = () => {
	const [step, setStep] = useState(1);
	const totalSteps = 2;

	const handleNext = () => {
		if (step === 1) setStep(totalSteps);
	};

	const handleBack = () => {
		if (step > 1) setStep(step - 1);
	};

	const stepElements = [
		{
			step: 1,
			element: <Carousel1 />,
		},
		{
			step: 2,
			element: <Carousel2 />,
		},
	];

	const activeElement = useMemo(() => {
		return stepElements.find((item) => item.step === step);
	}, [step]);

	return (
		<div className="flex flex-col items-center mx-auto w-full h-full pb-20 ">
			<div className="flex flex-col pt-24">
				<div className="flex gap-3 flex-col text-center text-white ">
					<h6>We believe in building each other and hence</h6>
					<h4 className="text-[30px]">Work with some amazing partners</h4>
					<div className="lg:w-[600px] w-full">
						<p className="text-textColor">
							Start working with{" "}
							<span className="text-baseColor font-semibold">Landrick</span>{" "}
							that can provide everything you need to generate awareness, drive
							traffic, connect.
						</p>
					</div>
				</div>
			</div>
			<div className="w-full pt-7">
				{activeElement ? activeElement.element : null}
			</div>
			<div className="flex gap-3 pt-7">
				<button
					className={`h-3 w-3 rounded-sm transition-transform duration-300 -rotate-90 ${
						step === 1 ? "bg-baseColor rotate-45" : "bg-gray-300"
					}`}
					onClick={handleBack}
				></button>

				<button
					className={`h-3 w-3 rounded-sm transition-transform duration-300 ${
						step === 2 ? "bg-baseColor rotate-45" : "bg-gray-300"
					}`}
					onClick={handleNext}
				></button>
			</div>
			<div className="pt-[100px] flex justify-between items-center w-full lg:px-20 gap-16 lg:flex-row flex-col">
				<div className="lg:w-[450px] flex flex-col lg:gap-4 w-full lg:text-left text-center lg:items-left items-center gap-6">
					<h4 className="lg:text-[32px] text-[24px] text-white">Our Comfortable Rates</h4>
					<p className="text-textColor leading-[1.75] text-[18px]">
						Start working with{" "}
						<span className="text-baseColor font-semibold">Landrick</span> that
						can provide everything you need to generate awareness, drive
						traffic, connect.
					</p>
					<Link
						href="https://thefullsnackdevs.shop/"
						className="flex gap-3 items-center bg-baseColor text-white w-[190px] rounded-lg py-3 px-5"
					>
						Buy Now{" "}
						<span className="bg-[#e43f52] py-1 px-3 rounded-full text-[.75em]">
							v4.4
						</span>
					</Link>
				</div>
				<div className="lg:flex-1 flex lg:gap-2 gap-6 lg:flex-row flex-col w-full lg:px-0 px-3">
					<PriceCard bgColor="" price={39} title="Starter" label="Get Started">
						<div className="flex flex-col gap-2">
							<div className="flex gap-2 items-center">
								<FaRegCheckCircle size={20} className="text-basehover" />
								<p className="text-textColor text-lg">Full Access</p>
							</div>
							<div className="flex gap-2 items-center">
								<FaRegCheckCircle size={20} className="text-basehover" />
								<p className="text-textColor text-lg">Source Files</p>
							</div>
							<div className="flex gap-2 items-center">
								<FaRegCheckCircle size={20} className="text-basehover" />
								<p className="text-textColor text-lg">Free Appointments</p>
							</div>
							<div className="flex gap-2 items-center">
								<FaRegCheckCircle size={20} className="text-basehover" />
								<p className="text-textColor text-lg">Enhanced Security</p>
							</div>
						</div>
					</PriceCard>
					<PriceCard bgColor="" price={59} title="Professional" label="Try it now">
						<div className="flex flex-col gap-2">
							<div className="flex gap-2 items-center">
								<FaRegCheckCircle size={20} className="text-basehover" />
								<p className="text-textColor text-lg">Full Access</p>
							</div>
							<div className="flex gap-2 items-center">
								<FaRegCheckCircle size={20} className="text-basehover" />
								<p className="text-textColor text-lg">Source Files</p>
							</div>
							<div className="flex gap-2 items-center">
								<FaRegCheckCircle size={20} className="text-basehover" />
								<p className="text-textColor text-lg">Free Appointments</p>
							</div>
							<div className="flex gap-2 items-center">
								<FaRegCheckCircle size={20} className="text-basehover" />
								<p className="text-textColor text-lg">Enhanced Security</p>
							</div>
						</div>
					</PriceCard>
				</div>
			</div>
		</div>
	);
};

export default Networking;
