import { IoMdHelpCircleOutline } from "react-icons/io";

interface HowItWorksProps {
	description: string;
	title: string;
}
const HowItem = ({ description, title } : HowItWorksProps) => {
	return (
		<div className="w-full">
			<div className="flex gap-2">
				<IoMdHelpCircleOutline className="text-baseColor flex-shrink-0" size={30} />
				<div className="flex flex-col">
					<h5 className="text-[1.5rem]">
						{title}
					</h5>
					<p className="text-textColor">{description}</p>
				</div>
			</div>
		</div>
	);
};

export default HowItem;
