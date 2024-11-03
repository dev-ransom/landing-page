import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { CiSettings, CiShoppingCart } from "react-icons/ci";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { useState } from "react";

const Navbar = ({
	bgColor = "bg-bgColor",
	boxShadow,
}: {
	bgColor: string;
	boxShadow?: string;
}) => {
	const [isOpen, setIsOpen] = useState(false);

	// Toggle function for the mobile menu
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav
			className={`max-container px-3 lg:px-20 flexBetween py-10 ${bgColor} ${boxShadow} z-[999] flex-shrink-0 w-full h-[10vh] fixed top-0 left-0 right-0 mb-1`}
		>
			<Link href="/">
				<Image
					src="/images/fullsnack.png"
					width={50}
					height={29}
					alt="fullsnackdev"
				/>
			</Link>
			<ul className="hidden lg:flex h-full gap-12">
				{NAV_LINKS.map((link) => (
					<Link
						href={link.href}
						key={link.key}
						className="uppercase flexCenter regular-16"
					>
						{link.label}
					</Link>
				))}
			</ul>
			<div className="flex gap-3">
				<div className="bg-slate-200 hover:bg-baseColor transition-all duration-300 h-[36px] w-[36px] cursor-pointer rounded-full flex justify-center items-center text-baseColor hover:text-white">
					<CiSettings className="font-semibold" size={24} />
				</div>
				<div className="bg-baseColor transition duration-300 h-[36px] w-[36px] cursor-pointer rounded-full flex justify-center items-center text-white hover:bg-basehover">
					<Link href="https://thefullsnackdevs.shop/">
						<CiShoppingCart className="font-semibold" size={24} />
					</Link>
				</div>
				<div className="lg:hidden flex cursor-pointer" onClick={toggleMenu}>
					{isOpen ? (
						<IoIosClose
							size={36}
							className={`transform transition-transform duration-300 ${
								isOpen ? "rotate-90" : "rotate-0"
							}`}
						/>
					) : (
						<IoIosMenu
							size={36}
							className={`transform transition-transform duration-300 ${
								isOpen ? "rotate-90" : "rotate-0"
							}`}
						/>
					)}
				</div>
			</div>

			<div
				className={`lg:hidden absolute top-[100%] left-0 w-full bg-bgColor overflow-hidden transition-all duration-300 ease-in-out transform origin-top ${
					isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
				}`}
			>
				<ul className="flex flex-col items-center py-5">
					{NAV_LINKS.map((link) => (
						<Link
							href={link.href}
							key={link.key}
							className="uppercase flexCenter regular-16 py-2 w-full text-center"
							onClick={() => setIsOpen(false)}
						>
							{link.label}
						</Link>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
