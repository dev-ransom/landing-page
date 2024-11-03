import { IoChevronForwardOutline } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import Link from "next/link";
import InputField from "./Input";
import { RxPerson } from "react-icons/rx";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { LuKey } from "react-icons/lu";
import Button from "./Button";

const Section2 = () => {
	return (
		<div className="flex w-full flex-col-reverse lg:flex-row px-3 lg:px-20 justify-between gap-4 pb-7 ">
			<div className="lg:w-[700px] lg:pt-24 pt-3 w-full">
				<h2 className="lg:text-[30px] mb-3 text-[28px]">
					Speed up your development <br />
					with <span className="text-baseColor font-semibold">Landrick.</span>
				</h2>
				<p className="text-textColor mb-4">
					Using Landrick to build your site means never worrying about designing
					another page or cross-browser compatibility. Our ever-growing library
					of components and pre-designed layouts will make your life easier.
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
			<div className="flex-none lg:w-[480px] bg-bgColor lg:p-5 p-4 rounded-lg w-full ">
				<div className="w-full">
					<img src="/images/Mobile_notification.svg" alt="notification" />
				</div>
				<div className="flex flex-col gap-3">
					<InputField label="Name" type="text" icon={<RxPerson />} />
					<InputField label="Email" type="text" icon={<HiOutlineEnvelope />} />
					<InputField label="Password" type="text" icon={<LuKey />} />
					<Button
						type="button"
						label="Download"
						bgColor="bg-baseColor"
						width="w-full"
					/>
				</div>
			</div>
		</div>
	);
};

export default Section2;
