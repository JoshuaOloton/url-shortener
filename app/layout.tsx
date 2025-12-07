import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";


const poppins = Poppins({
  weight: ["500", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Shortly - URL Shortener",
  description: "A simple and efficient URL shortening service to make your links more manageable and shareable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
