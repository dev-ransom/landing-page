import Link from "next/link";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoChevronForwardOutline } from "react-icons/io5";

const Section1 = () => {
	return (
		<div className="w-full flex-col flex lg:flex-row lg:pb-0 pb-10 lg:px-0 px-3">
			<div className="flex-1 h-[550px] lg:w-[680px] w-full">
				<img
					src="/images/SEO.svg"
					alt="howItworks"
					className="w-full h-full object-contain"
				/>
			</div>
			<div className="flex-1 lg:pt-24 pt-8">
				<h2 className="lg:text-[30px] mb-3 text-[28px]">Change the way you build websites</h2>
				<p className="text-textColor mb-4">
					You can combine all the Landrick templates into a single one, you can
					take a <br /> component from the Application theme and use it in the
					Website
				</p>
				<div className="flex gap-3 flex-col">
					<div className="flex gap-2 items-center">
						<FaRegCheckCircle size={20} className="text-basehover" />
						<p className="text-textColor">
							Digital Marketing Solutions for Tomorrow
						</p>
					</div>
					<div className="flex gap-2 items-center">
						<FaRegCheckCircle size={20} className="text-basehover" />
						<p className="text-textColor">
							Our Talented & Experienced Marketing Agency
						</p>
					</div>
					<div className="flex gap-2 items-center">
						<FaRegCheckCircle size={20} className="text-basehover" />
						<p className="text-textColor">
							Create your own skin to match your brand
						</p>
					</div>
				</div>
				<Link href="/" className="flex items-center gap-2 text-baseColor pt-4">
					Find Out More <IoChevronForwardOutline />
				</Link>
			</div>
		</div>
	);
};

export default Section1;
