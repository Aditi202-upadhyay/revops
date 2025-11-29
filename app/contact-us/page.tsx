import { Metadata } from "next";
import ContactUs from "./01_banner";
import MapSection from "./03_mapSection";

export const metadata: Metadata = {
  title: "Contact Us | RevOps Experts for Scalable Growth & Marketing Success",
  description:
    "Get in touch with our RevOps experts to discuss your project. We help brands boost revenue, optimize operations, and create data-driven marketing systems.",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://revops-rho.vercel.app/contact-us",
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: "https://revops-rho.vercel.app/contact-us",
    siteName: "Revops",
    title:
      "Contact Us | RevOps Experts for Scalable Growth & Marketing Success",
    description:
      "Get in touch with our RevOps experts to discuss your project. We help brands boost revenue, optimize operations, and create data-driven marketing systems.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Contact Us | RevOps Experts for Scalable Growth & Marketing Success",
    description:
      "Get in touch with our RevOps experts to discuss your project. We help brands boost revenue, optimize operations, and create data-driven marketing systems.",
  },
};

export default function Contact() {
  return (
    <>
      <ContactUs />
      <MapSection />
    </>
  );
}
