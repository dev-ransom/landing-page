import { ReactNode } from "react";

interface ButtonProps {
	label: string;
	width?: string;
	icon?: ReactNode;
	bgColor?: string;
	rightIcon?: ReactNode;
	type?: "button" | "submit";
	classes?: string;
	height?: string;
	borderB?: string;
}

const Button = ({
	label,
	type,
	width = "w-[190px]",
	icon,
	bgColor = "bg-baseColor",
	rightIcon,
	classes = "text-white",
	height = "h-[48px]",
	borderB = "border border-baseColor",
}: ButtonProps) => {
	return (
		<button
			type={type}
			className={`${width} ${bgColor} ${height} cursor-pointer rounded-lg  ${classes} flex items-center justify-center gap-2 ${borderB}`}
		>
			{icon && <span className="flex items-center">{icon}</span>}
			<span className="capitalize cursor-pointer">{label}</span>
			{rightIcon && <span className="flex items-center">{rightIcon}</span>}
		</button>
	);
};

export default Button;
