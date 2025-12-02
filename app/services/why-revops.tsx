"use client";

import { ArrowRight } from "lucide-react";
import { Heading } from "../component/atom/decorativeHeading";
import Image from 'next/image'
interface ServiceCard {
  id: number;
  title: string;
  description: string;
  visual:string;
}

const SERVICES: ServiceCard[] = [
  {
    id: 1,
    title: "D2C",
    description:
      "Grow Your Channel. Secure Funding. Monetize your passion and fuel your channel's growth with funding based on your YouTube earnings.",
    visual: "/assets/services/image1.png",
  },
  {
    id: 2,
    title: "D2C",
    description:
      "Grow Your Channel. Secure Funding. Monetize your passion and fuel your channel's growth with funding based on your YouTube earnings.",
     visual: "/assets/services/image2.png",
  },
  {
    id: 3,
    title: "D2C",
    description:
      "Grow Your Channel. Secure Funding. Monetize your passion and fuel your channel's growth with funding based on your YouTube earnings.",
     visual: "/assets/services/image3.png",
  },
  {
    id: 4,
    title: "D2C",
    description:
      "Grow Your Channel. Secure Funding. Monetize your passion and fuel your channel's growth with funding based on your YouTube earnings.",
    visual: "/assets/services/image4.png",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative w-full pt-20">
      <div className="relative w-full bg-black overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[radial-gradient(circle_at_bottom_left,#26DF04,transparent_80%)] opacity-60 z-0" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-[28rem] bg-[radial-gradient(circle_at_right_center,#26DF04,transparent_70%)] opacity-70 z-0" />

        <div className="absolute inset-0 backdrop-blur-[60px] z-10" />

        <div className="relative z-50 flex justify-center items-center flex-col text-center pt-16">
          <Heading title="Why Revops" color="#26DF04" />
          <h1 className="custom-text-3xl font-bold text-white max-w-4xl font-family-helvetica-now my-2 px-2">
            100+{" "}
            <span className="italic font-light font-family-playfair">
              Companies
            </span>{" "}
            trusted us
            <br />
            to improve their{" "}
            <span className="italic font-light font-family-playfair">
              marketing
            </span>
          </h1>
        </div>

        <div className="relative z-50 mx-auto max-w-7xl px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        <div className="h-12" />
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: ServiceCard }) {
  return (
    <div className="relative group  h-[25rem] lg:h-[30rem] rounded-lg border-2 border-green bg-black/40 backdrop-blur-sm p-4 lg:p-6 flex flex-col justify-between  transition-all overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#26DF04,transparent_80%)]  opacity-20 lg:opacity-40 transition-opacity z-0" />

      <div className="relative z-10 ">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 bg-green rounded-sm" />
          <h3 className="text-sm font-bold text-green">
            {service.title}
          </h3>
        </div>
        <p className="text-sm text-gray-300 max-w-xs  mb-4">
          {service.description}
        </p>
      </div>

       <div className="relative w-full h-full"> 
         <Image src={service.visual} alt={service.title} fill className="object-contain object-bottom mix-blend-color-burn scale-110"/>
       </div>


    
    </div>
  );
}


