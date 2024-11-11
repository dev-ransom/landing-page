import { companyInfo, useFulLink } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { CiTwitter } from "react-icons/ci";
import { FaFacebookF, FaHeart } from "react-icons/fa";
import { FiInstagram, FiLinkedin } from "react-icons/fi";
import { IoChevronForward } from "react-icons/io5";
import InputField from "./Input";
import { HiOutlineEnvelope } from "react-icons/hi2";
import Button from "./Button";

const cards = [
	{ images: "/images/American.png", href: "/" },
	{ images: "/images/Discover.png", href: "/" },
	{ images: "/images/masterCard.png", href: "/" },
	{ images: "/images/paypals.png", href: "/" },
	{ images: "/images/visa.png", href: "/" },
];
const Footer = () => {
	return (
		<footer className="h-full pt-[100px] w-full bg-[#202942] flex flex-col">
			<div className="flex lg:px-20 lg:pb-32 pb-8 lg:flex-row flex-col gap-4">
				<div className=" lg:w-[33.3333%] w-full">
					<div className="flex flex-col gap-6 px-3 w-full">
						<Link href="/">
							<Image
								src="/images/fullsnack.png"
								width={50}
								height={29}
								alt="fullsnackdev"
							/>
						</Link>
						<p className="text-textColor leading-8">
							Start working with Landrick that can provide everything you need
							to generate awareness, drive traffic, connect.
						</p>
						<div className="flex gap-3">
							<Link
								href=""
								className="w-10 h-10 border-[#283453] border hover:bg-baseColor  hover:text-white flex justify-center items-center text-textColor rounded-lg  transition-all duration-300"
							>
								<FaFacebookF size={20} />
							</Link>
							<Link
								href=""
								className="w-10 h-10 border-[#283453] border hover:bg-baseColor flex justify-center items-center text-textColor rounded-lg transition-all duration-300 hover:text-white"
							>
								<FiInstagram size={20} />
							</Link>
							<Link
								href=""
								className="w-10 h-10 border-[#283453] border hover:bg-baseColor flex justify-center items-center text-textColor rounded-lg transition-all duration-300 hover:text-white"
							>
								<CiTwitter size={20} />
							</Link>
							<Link
								href=""
								className="w-10 h-10 border-[#283453] border hover:bg-baseColor flex justify-center items-center text-textColor rounded-lg transition-all duration-300 hover:text-white"
							>
								<FiLinkedin size={20} />
							</Link>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-8 lg:w-[21%] w-full lg:px-0 px-3">
					<h5 className="text-[1.25rem] text-white">Company</h5>
					<div className="flex flex-col gap-5">
						{companyInfo.map((item) => (
							<Link
								href={item.href}
								key={item.id}
								className="flex gap-2 items-center text-textColor hover:text-white transition-all duration-300"
							>
								<IoChevronForward /> {item.label}
							</Link>
						))}
					</div>
				</div>
				<div className="flex flex-col gap-8 lg:w-[30%] w-full lg:px-0 px-3">
					<h5 className="text-[1.25rem] text-white">Usefull Links</h5>
					<div className="flex flex-col gap-5">
						{useFulLink.map((item) => (
							<Link
								href={item.href}
								key={item.id}
								className="flex gap-2 items-center text-textColor hover:text-white transition-all duration-300"
							>
								<IoChevronForward /> {item.label}
							</Link>
						))}
					</div>
				</div>
				<div className="flex flex-col gap-8 lg:w-[20%] w-full lg:px-0 px-3">
					<h5 className="text-[1.25rem] text-white">Newsletter</h5>
					<div className="flex flex-col gap-5">
						<p className="text-textColor">
							Sign up and receive the latest tips via email.
						</p>

						<InputField
							label="Write your email :"
							elipses=""
							type="text"
							icon={<HiOutlineEnvelope />}
							className="text-textColor"
							inputbg="bg-[#202942]"
							placeHolderColor="placeholder-textColor text-white"
              
						/>
						<Button
							label="Subscribe"
							type="button"
							classes="text-baseColor hover:text-white"
							width=""
							bgColor="bg-[#2f55d40d] hover:bg-baseColor transition-all duration-500"
							borderB=""
						/>
					</div>
				</div>
			</div>
			<div className="border-t border-[#283453] flex lg:px-20 py-[30px] lg:flex-row flex-col justify-between w-full gap-8">
				<p className="text-[#adb5bd] text-center">
					© 2024 Landrick. Design with{" "}
					<FaHeart className="inline text-red-500" /> by
					<a href="https://themesbrand.in/"> Themesbrand.</a>
				</p>
				<div className="flex gap-2 lg:pl-0 pl-3">
					{cards.map((item, index) => (
						<Link href={item.href} key={index}>
              <img src={item.images} alt="cards" className="w-12 h-9 object-contain" />
            </Link>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
