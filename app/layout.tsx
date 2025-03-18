import type { Metadata } from "next";
import { Overpass, Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeContextProvider } from "./context/ThemeContext";

const poppins300 = Poppins({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-poppins-300",
});
const poppins400 = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins-400",
});
const poppins500 = Poppins({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-poppins-500",
});

const overpass600 = Overpass({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-overpass-600",
});
const overpass = Overpass({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-overpass",
});
export const metadata: Metadata = {
  title: "Jana Istrate | Frontend Developer & more",
  description: "Jana Istrate's personal porfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins300.variable} ${poppins400.variable} ${poppins500.variable} ${overpass600.variable} ${overpass.variable} font-sans bg-white text-black dark:text-white dark:bg-darkBg`}
      >
        <ThemeContextProvider>{children}</ThemeContextProvider>
        <Analytics />
      </body>
    </html>
  );
}
