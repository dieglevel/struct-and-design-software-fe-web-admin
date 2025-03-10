import type { Metadata } from "next";
import { Geist, Geist_Mono, Lato, Merriweather } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const lato = Lato({
	subsets: ["latin"],
	display: "swap",
	weight: ["400", "700"],
});

const meriWeather = Merriweather({
	subsets: ["latin"],
	display: "swap",
	weight: ["400", "700"],
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			{/* <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body> */}
			<body className={lato.className}>{children}</body>
		</html>
	);
}
