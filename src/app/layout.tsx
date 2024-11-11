import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTop";

export const metadata: Metadata = {
	title: "Create fullsnackdev landing page",
	description: "fullsnackdev solution",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="bg-bgColor">
				<Navbar bgColor="bg-[#202942]" boxShadow="shadow-sm" />
				<main className="overflow-hidden">{children}</main>
				<Footer />
				<BackToTopButton />
			</body>
		</html>
	);
}
