import { ReactNode } from "react";

export interface ButtonProps {
	label: string;
	width?: string;
	icon?: ReactNode;
	bgColor?: string;
	rightIcon?: ReactNode;
	type?: "button" | "submit";
	classes?: string;
	height?: string;
	borderB?: string;
	onClick?: () => void;
}

export interface aboutItemsProps {
	title: string;
	description: string;
}
