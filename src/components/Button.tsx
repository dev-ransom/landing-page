import { ButtonProps } from "@/types";

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
	onClick,
}: ButtonProps) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`${width} ${bgColor} ${height} cursor-pointer rounded-lg  ${classes} flex items-center justify-center gap-2 ${borderB}`}
		>
			{icon && <span className="flex items-center">{icon}</span>}
			<span className="capitalize cursor-pointer">{label}</span>
			{rightIcon && <span className="flex items-center">{rightIcon}</span>}
		</button>
	);
};

export default Button;
