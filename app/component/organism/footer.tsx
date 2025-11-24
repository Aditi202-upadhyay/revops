import Link from "next/link";
import { Greenbutton } from "../atom/buttons";
import { Heading } from "../atom/decorativeHeading";
import { SocialIcon } from "../atom/socialicon";

type LinkItem = {
  label: string;
  href: string;
};

type LinksSection = {
  category: string;
  items: LinkItem[];
};

type FooterData = {
  links: LinksSection[];
};

const footerData: FooterData = {
  links: [
    {
      category: "Services",
      items: [
        { label: "Performance Marketing", href: "#" },
        { label: "Lead Generation", href: "#" },
        { label: "Account-Based Marketing", href: "#" },
        { label: "Search Engine Optimization", href: "#" },
        { label: "Generative Engine Optimization", href: "#" },
        { label: "Conversion Rate Optimization", href: "#" },
        { label: "Email Marketing", href: "#" },
        { label: "WhatsApp Marketing", href: "#" },
      ],
    },
    {
      category: "Solutions",
      items: [
        { label: "For D2C", href: "/d2c" },
        { label: "For B2C", href: "#" },
        { label: "For B2B", href: "#" },
      ],
    },
    {
      category: "Company",
      items: [
        { label: "About", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
    {
      category: "Resources",
      items: [{ label: "Blogs", href: "#" }],
    },
  ],
};

export const SectionHeader = ({
  title,
  color,
}: {
  title: string;
  color?: string;
}) => (
  <div className="flex items-center gap-2">
    <div className="w-2 h-2 bg-green" />
    <h4 className={`custom-text-md font-bold text-${color}`}>{title}</h4>
  </div>
);

const LinksList = ({ items }: { items: LinkItem[] }) => (
  <ul className="space-y-2 mt-3">
    {items.map((link, idx) => (
      <li
        key={idx}
        className="custom-tag-text cursor-pointer ps-4  text-white hover:text-white/80 transition-colors"
      >
        {link.label}
      </li>
    ))}
  </ul>
);



export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden">
      <video
        src="/assets/global/backgroundVideo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#1E5114] to-[#072b01dd]/95 z-10" />

      <div className="relative z-20 mx-auto max-w-[85rem] px-6 py-8 md:py-14 text-white">
        {/* Header Section with CTA */}
        <div className="mb-4 md:mb-16 text-center space-y-8">
          <div className="space-y-3 md:space-y-6">
            <div className="flex items-center justify-center gap-4">
              <Heading title="Contact-us" />
            </div>

            <h2 className="custom-text-3xl font-bold ">
              Join <span className="italic font-normal">Revops</span> to Build a
              System
              <br /> That Brings{" "}
              <span className="italic font-normal">Real Customers?</span>
            </h2>
          </div>

          <div className="flex items-center justify-center gap-3">
            <a href="#" className=" font-semibold custom-text-base ">
              Connect with us
            </a>
            <Greenbutton color="#014715" />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white my-8 md:my-12" />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4  md:gap-8 mb-8 md:mb-12">
          {/* Services Section with Highlight Box */}
          <div>
            <SectionHeader title="Services" />
            <LinksList items={footerData.links[0].items} />
          </div>

          {/* Solutions */}
          <div>
            <SectionHeader title="Solutions" />
            <LinksList items={footerData.links[1].items} />
          </div>

          {/* Company */}
          <div>
            <SectionHeader title="Company" />
            <LinksList items={footerData.links[2].items} />
          </div>

          {/* Resources */}
          <div>
            <SectionHeader title="Resources" />
            <LinksList items={footerData.links[3].items} />
          </div>

          <div>
            <div className="space-y-2">
              <SectionHeader title="Address" />
              <div className="space-y-2 mt-3 ">
                <address className="custom-tag-text  text-white w-full ">
                  New No.111, Old No.141, AWFIS Building, Rajiv Gandhi Salai,
                  Indore, Madhya Pradesh 600096
                </address>
              </div>
            </div>

            <div className="py-4 md:py-6">
              <SectionHeader title="Phone" />
              <div className="mt-3">
                <p className="custom-tag-text  text-white w-full ">
                  +91 9884914006
                </p>
                <p className="custom-tag-text  text-white w-full ">
                  +91 9884914006
                </p>
              </div>
            </div>

            <div className="">
              <SectionHeader title="Email" />
              <div className="mt-3 ">
                <p className="custom-tag-text  text-white w-full ">
                  support@betterinvest.club
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white pt-4 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright and Links */}
          <div className="flex flex-col md:flex-row items-center gap-6 custom-text-base text-white/70">
            <p>© 2025 All Rights Reserved</p>

            <div className="flex flex-row">
              <p className="text-white transition-colors">
                Terms and Conditions
              </p>
              <span className="px-2">|</span>
              <p className="text-white transition-colors ">Privacy Policy</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <SocialIcon icon="youtube" href="#" color="#fff"/>
            <SocialIcon icon="linkedin" href="#" color="#fff"/>
            <SocialIcon icon="twitter" href="#" color="#fff"/>
            <SocialIcon icon="instagram" href="#" color="#fff"/>
          </div>
        </div>
      </div>
    </footer>
  );
}
