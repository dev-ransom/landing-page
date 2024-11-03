import { ReactNode } from "react";
import Button from "./Button";

interface PriceCardProps {
	title?: string;
	price?: number;
	label: string;
	children: ReactNode;
	bgColor: string;
	width?: string;
}
const PriceCard = ({
	title,
	price,
	label,
	children,
	width = "lg:w-[300px] w-full",
}: PriceCardProps) => {
	return (
		<div
			className={`py-12 px-6 ${width} rounded-lg bg-white`}
		>
			<h6 className="text-baseColor uppercase text-[1rem] font-semibold mb-4">
				{title}
			</h6>
			<div className="flex items-center pb-6">
				<span className="text-[26px]">$</span>
				<span className="text-[40px]">{price}</span>
				<span>/mo</span>
			</div>

			<div>{children}</div>
			<div className="mt-4">
				<Button label={label} classes="font-semibold text-white"/>
			</div>
		</div>
	);
};

export default PriceCard;
