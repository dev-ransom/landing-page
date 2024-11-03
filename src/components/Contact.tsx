import { HowItWorksData } from "@/constants";
import HowItem from "./HowItem";
import Button from "./Button";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
	return (
		<div className="relative lg:h-screen lg:pb-0">
			{/* Skewed background */}
			<div className="absolute top-0 left-0 w-full h-full bg-[#f8f9fb] transform -skew-y-6 origin-top" />

			{/* Content */}
			<div className="relative z-10 flex flex-col w-full h-full mx-auto items-center lg:px-20 pt-[100px]">
				<div className="grid lg:grid-cols-2 grid-cols-1 gap-4 lg:px-0 px-3">
					{HowItWorksData.map((item, index) => (
						<HowItem
							key={index}
							description={item.description}
							title={item.title}
						/>
					))}
				</div>
				<div className="flex items-center text-center pt-[60px] flex-col lg:w-[600px] gap-5 lg:pb-0 pb-16 w-full lg:px-0 px-3">
					<h4 className="text-[30px]">Have Question ? Get in touch!</h4>
					<p className="text-textColor text-[17px]">Start working with <span className="text-baseColor font-semibold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
					<Button label="Contact us" icon={<FaPhoneAlt />}/>
				</div>
			</div>
		</div>
	);
};

export default Contact;
