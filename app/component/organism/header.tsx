"use client";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/component/ui/dropdown-menu";
import { Greenbutton } from "../atom/buttons";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { SectionHeader } from "./footer";

type NavDropDownProps = {
  category: string;
  items: {
    label: string;
    href: string;
  }[];
};

type NavLinks = {
  label: string;
  href: string;
};
const navDropDown: NavDropDownProps[] = [
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
      { label: "For B2B", href: "#" },
      { label: "For B2C", href: "#" },
      { label: "For D2C", href: "#" },
    ],
  },
];

export default function Header() {
  const [closeIcon, setCloseIcon] = useState<boolean>(false);
  const handleSwitch = () => {
    setCloseIcon((prev) => !prev);
  };

  return (
    <nav className=" lg:mt-6 absolute top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-[950px] p-3 lg:p-4 rounded-full shadow-md  bg-white border border-white lg:block hidden">
        <div className="flex flex-row gap-4  lg:gap-8  items-center ">
          <div className="w-44 h-8  relative">
            <Link href="/">
              <Image
                src="/assets/global/logo.svg"
                fill
                alt="Revops logo"
                className="object-contain"
              />
            </Link>
          </div>
          <div className="flex flex-row gap-8 lg:gap-16 items-center">
            <NavDropDown />
            <NavLink label="Work" href="#" />
            <NavLink label="About" href="#" />
            <NavLink label="Blogs" href="/blogs" />
            <TalkToUs />
          </div>
        </div>
      </div>
      <div className="lg:hidden  py-4 bg-lightDarkGreen/95 block flex justify-between items-center  relative px-2">
        <div className="w-36 h-6  relative">
          <Image
            src="/assets/global/logo.svg"
            fill
            alt="Revops logo"
            className="object-contain"
          />
        </div>
        {!closeIcon ? (
          <button onClick={handleSwitch} aria-label="open mobile navigation">
            <RxHamburgerMenu className="text-2xl text-white" />
          </button>
        ) : (
          <button onClick={handleSwitch} aria-label="close mobile navigation">
            <RxCross1 className="text-2xl text-white" />
          </button>
        )}
      </div>
      {closeIcon && (
        <div className="absolute top-full left-0 w-full">
          <MobileNavbar closeIcon={closeIcon}/>
        </div>
      )}
    </nav>
  );
}

const NavLink = ({ label, href }: NavLinks) => {
  return (
    <div className=" py-2 lg:py-0">
      <Link href={href}>
        <h4 className="font-medium lg:font-normal custom-tag-text text-black font-poppins">
          {label}
        </h4>
      </Link>
    </div>
  );
};

const NavDropDown = () => {
  return (
    <div className="flex gap-4 lg:gap-16">
      {navDropDown.map((dropdown, idx) => (
        <DropdownMenu key={idx}>
          <DropdownMenuTrigger className="custom-tag-text outline-none  font-poppins text-black cursor-pointer">
            {dropdown.category}
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuSeparator />
            {dropdown.items.map((item, itemIdx) => (
              <DropdownMenuItem key={itemIdx}>
                <Link href={item.href} className="w-full">
                  {item.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ))}
    </div>
  );
};

const TalkToUs = () => {
  return (
    <div className="flex gap-2">
      <Link href="/contact-us">
        <h5 className="custom-text-md font-bold text-lightDarkGreen">
          Talk to us
        </h5>{" "}
      </Link>
      <Greenbutton color="#ffff" />
    </div>
  );
};

const MobileNavbar = ({ closeIcon }: { closeIcon: boolean }) => {
   useEffect(() => {
  if (closeIcon) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto"; 
  };
}, [closeIcon]);
  return (
    <nav className="pt-1 bg-white z-50 rounded-sm ps-2 h-screen">
      <div className="py-1">
        <p className=" text-md py-1 text-gray font-poppins">Work</p>
        <p className=" text-md py-1 text-gray font-poppins">About</p>
        <p className=" text-md py-1 text-gray font-poppins">Blogs</p>
      </div>
      <MobileNavDropDown />
      <div className="flex gap-2">
        <div className="w-full m-2 bg-green rounded-full px-4 py-2">
           <Link href="/contact-us">
            <h5 className="text-lg font-bold text-white text-center">
              Talk to us
            </h5>
           </Link>
        </div>
      </div>
    </nav>
  );
};

const MobileNavDropDown = () => {
  return (
    <div>
      {navDropDown.map((dropdown, index) => {
        return (
          <div key={index} className=" pt-1 ">
            <SectionHeader color="text-black" title={dropdown.category} />
            {dropdown.items.map((item, itemIdx) => (
              <Link href={item.href} key={itemIdx} className="w-full">
                <p className="my-[9px] text-gray">{item.label}</p>
              </Link>
            ))}
          </div>
        );
      })}
    </div>
  );
};
