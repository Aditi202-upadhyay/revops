import type { Metadata } from "next";
import { Playfair_Display, Poppins } from 'next/font/google';
import "./globals.css";
import Footer from "./component/organism/footer";
import Header from "./component/organism/header";

export const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});


export const metadata = {
  title: "RevOps – Turn Marketing Into Customers, Not Just Clicks",
  description:
    "RevOps helps you build predictable revenue by aligning sales and marketing, optimizing growth systems, and creating high-intent customer journeys. Turn your marketing into real customers—not just clicks.",
  keywords: [
    "RevOps",
    "Marketing Optimization",
    "Sales and Marketing Alignment",
    "Lead Generation",
    "Demand Generation",
    "B2B Growth",
    "Predictable Revenue",
    "Marketing Strategy",
    "Pipeline Growth",
    "Marketing Automation",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "RevOps – Unlock Predictable Growth",
    description:
      "We turn your marketing into customers—not just clicks. Build aligned sales & marketing systems, optimize your pipeline, and grow with predictable revenue.",
    url: "https://revops-rho.vercel.app/",
    siteName: "RevOps",
    images: [
      {
        url: "https://revops-rho.vercel.app/og-Image.webp",
        width: 1200,
        height: 630,
        alt: "RevOps – Home Page",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RevOps – Turn Marketing Into Customers",
    description:
      "Align marketing & sales, optimize your growth systems, and create predictable revenue with RevOps.",
    images: "https://revops-rho.vercel.app/og-Image.webp",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable}  antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
