import type { Metadata } from "next";
import "./globals.css";


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
        <main className="overflow-hidden">
        {children}
        </main>
        </body>
		</html>
	);
}
