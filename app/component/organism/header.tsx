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
import { MdKeyboardArrowDown } from "react-icons/md";
import gsap from "gsap"


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
    category: "Solutions",
    items: [
      { label: "For B2B", href: "#" },
      { label: "For B2C", href: "#" },
      { label: "For D2C", href: "#" },
    ],
  },
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
  }
  
];

export default function Header() {
  const [closeIcon, setCloseIcon] = useState<boolean>(false);
  const handleSwitch = () => {
    setCloseIcon((prev) => !prev);
  };

 

  return (
    <nav className=" lg:mt-6 absolute top-0 left-0 w-full z-[9999]">
      <div className="bg-linear-to-br from-45% from-green from-green/35 via-transparent to-white mx-auto lg:p-[2px] max-w-[855px]  xl:max-w-[1000px] rounded-full">
        <div className="  p-4 xl:py-4 rounded-full shadow-lg   bg-white border border-white lg:block hidden">
          <div className="flex flex-row gap-6  xl:gap-8  items-center ">
            <div className="w-44 h-8  relative">
              <Link href="/" rel="noopener noreferrer">
                <Image
                  src="/assets/global/logo.svg"
                  fill
                  alt="Revops logo"
                  className="object-contain"
                />
              </Link>
            </div>
            <div className="flex flex-row gap-8 xl:gap-14 items-center">
              <NavDropDown />
              <NavLink label="D2C" href="/d2c" />
              <NavLink label="About" href="/about" />
              <NavLink label="Blogs" href="/blogs" />
              <TalkToUs />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden  py-4 bg-lightDarkGreen/95 block flex justify-between items-center  relative px-2">
        <div className="w-36 h-6  relative">
          <Link href="/" rel="noopener norefferer">
         
          <Image
            src="/assets/global/whiteLogo.svg"
            fill
            alt="Revops logo"
            className="object-contain"
          />
           </Link>
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
          <MobileNavbar closeIcon={closeIcon} />
        </div>
      )}
    </nav>
  );
}

const NavLink = ({ label, href }: NavLinks) => {
  return (
    <div className=" py-2 lg:py-0">
      <Link href={href} rel="noopener noreferrer">
        <h4 className="text-base xl:text-lg animate-nav-link text-black font-family-helvetica-now hover:text-green">
          {label}
        </h4>
      </Link>
    </div>
  );
};

const NavDropDown = () => {
  return (
    <div className="flex  gap-8 xl:gap-14 animate-nav-link">
      {navDropDown.map((dropdown, idx) => (
        <DropdownMenu key={idx}>
          <DropdownMenuTrigger className="group !text-base xl:!text-lg !text-black !font-family-helvetica-now hover:!text-green outline-none cursor-pointer">
            <div className="flex items-center gap-1">
              {dropdown.category}
              <MdKeyboardArrowDown className="text-black text-xl transition-transform duration-300 group-data-[state=open]:rotate-180" />
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuSeparator />
            {dropdown.items.map((item, itemIdx) => (
              <DropdownMenuItem key={itemIdx}>
                <Link href={item.href} rel="noopener noreferrer" className="w-full">
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
      <Link href="/contact-us" className="inline-block" rel="noopener noreferrer">
        <h5 className="inline-block custom-text-md font-bold font-family-helvetica-now text-lightDarkGreen hover:text-green">
          Talk to us
        </h5>{" "}
        <Greenbutton color="#ffff" style={{background:"linear-gradient(90deg, #2CFE05 -23.73%, #000 186.15%)"}}/>
      </Link>
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

  useEffect(() => {
  if (closeIcon) {
    const ctx = gsap.context(() => {
      gsap.from(".animate-link", {
        x:100,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.09,
      });
    });

    return () => ctx.revert();
  }
}, [closeIcon]);


  return (
    <nav className="pt-2 bg-white overflow-hidden rounded-sm ps-6 mb-8 h-dvh z-[999]">
      <div className="py-1">
        <p className=" text-md py-1 text-gray font-family-helvetica-now animate-link">Work</p>
        <p className=" text-md py-1 text-gray font-family-helvetica-now animate-link">About</p>
        <p className=" text-md py-1 text-gray font-family-helvetica-now animate-link">Blogs</p>
      </div>
      <MobileNavDropDown />
     
    </nav>
  );
};

const MobileNavDropDown = () => {
  return (
    <div>
      {navDropDown.map((dropdown, index) => {
        return (
          <div key={index} className=" pt-2 animate-link">
            <SectionHeader color="text-black" title={dropdown.category} />
            {dropdown.items.map((item, itemIdx) => (
              <Link href={item.href} key={itemIdx} className="w-full" rel="noopener noreferrer">
                <p className="my-[9px] text-gray font-family-helvetica-now font-medium w-fit hover:text-green">{item.label}</p>
              </Link>
            ))}
          </div>
        );
      })}
    </div>
  );
};
