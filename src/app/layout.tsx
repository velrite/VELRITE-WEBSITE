import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Velrite — Platform Engineering & DevSecOps Consultancy",
  description:
    "Velrite helps enterprise teams build secure, scalable cloud infrastructure.",
  metadataBase: new URL("https://velrite.com"),
  alternates: { canonical: "./" },
  openGraph: {
    title: "Velrite — Platform Engineering & DevSecOps Consultancy",
    description:
      "We design secure cloud platforms that scale. Platform engineering, DevSecOps, and infrastructure automation for enterprise teams.",
    url: "https://velrite.com",
    siteName: "Velrite",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Velrite — Platform Engineering & DevSecOps Consultancy",
    description:
      "We design secure cloud platforms that scale. Platform engineering, DevSecOps, and infrastructure automation for enterprise teams.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full", "antialiased", geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
