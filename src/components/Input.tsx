import { ReactNode } from "react";

interface InputFieldProps {
	label: string;
	icon: ReactNode;
	placeholder?: string;
	type?: string;
	className?: string;
	elipses?: string;
	inputbg?: string;
	placeHolderColor?: string;
}

const InputField = ({
	label,
	icon,
	placeholder = label,
	type = "text",
	className = "",
	elipses= ":",
	inputbg= "bg-bgColor",
	placeHolderColor= "placeholder-gray-500 text-gray-700"
}: InputFieldProps) => {
	return (
		<div className="w-full flex flex-col gap-2">
            <label className={`${className} font-semibold`}>{label} {elipses}<span className="text-red-600">*</span></label>
			<div
				className={`flex items-center border border-gray-300 rounded-lg p-2 space-x-2 focus-within:border-baseColor focus-within:ring-1 focus-within:ring-baseColor ${className}`}
			>
				<span className="text-gray-500">{icon}</span>
				<input
					type={type}
					placeholder={placeholder}
					className={`outline-none flex-1 ${placeHolderColor} ${inputbg}`}
				/>
			</div>
		</div>
	);
};

export default InputField;
