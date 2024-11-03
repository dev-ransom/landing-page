import React from "react";
import TestimonialCard from "./Testimonial";
import { carousel2Data } from "@/constants";

const Carousel2 = () => {
	return (
		<div className="pt-10 flex lg:px-20 gap-4 lg:flex-row flex-col px-3">
			{carousel2Data.map((item) => (
				<TestimonialCard
					key={item.logo}
					logo={item.logo}
					author={item.author}
					quote={item.quote}
				/>
			))}
		</div>
	);
};

export default Carousel2;
