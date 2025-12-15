"use client";
import { useState } from "react";
import { Greenbutton } from "../atom/buttons";
import { Heading } from "../atom/decorativeHeading";
import Image from 'next/image'
export type ServiceProps = {
  id: string;
  heading: string;
  description: string;
  link: string;
  image?: string;
  referId?: string;
};

export type ParentsCom = {
  heading: string;
  description: string;

  data: ServiceProps[];
};

export default function GlobalService({
  serviceData,
}: {
  serviceData: ParentsCom;
}) {
  return (
    <section className="blade-bottom-padding-lg">
      <div className="w-container-xl">
        <Heading title="Our Services" color="#014715" />
        <div className="lg:flex justify-between pt-4 lg:pt-6">
          <h3
            className="font-bold text-black custom-text-3xl font-family-helvetica-now"
            dangerouslySetInnerHTML={{ __html: serviceData.heading }}
          />

          <p className="font-normal font-family-helvetica-now    custom-text-md text-gray w-full lg:max-w-md xl:max-w-xl pt-2 lg:pt-0">
            {serviceData.description}
          </p>
        </div>
        <div className="mt-2 ">
          {serviceData?.data.map((ele: ServiceProps, index: number) => {
            return (
              <div key={index}>
                <Services details={ele} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const Services = ({ details }: { details: ServiceProps }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <div
        className="relative group py-4 md:my-0  flex flex-col gap-2 md:flex-row md:justify-between md:items-center border-b-2 border-gray/40 w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >

        <div id={details.referId} className="md:my-4 ">
          <div className="flex gap-2  items-center">
            <div className="custom-text-base text-gray">{details.id}.</div>
            <h3 className="custom-text-xl font-family-helvetica-now font-medium text-transparent bg-clip-text bg-linear-to-t from-darkgreen from-35%  to-green">
              {details.heading}
            </h3>
          </div>
          <div>
            <p className="text-gray max-w-xs  lg:max-w-md font-family-helvetica-now  custom-text-md ps-0 md:ps-10 pt-2">
              {details.description}
            </p>
          </div>
        </div>

        {/* Hover Image */}
        {isHovered && details.image && (
          <div className="hidden md:block absolute left-[65%] xl:left-[60%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[12rem] xl:w-[20rem] h-[12rem] rounded-lg overflow-hidden border-2 border-green/20 bg-white shadow-xl pointer-events-none transition-opacity duration-300">
            <Image
              src={details.image}
              alt={details.heading}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="flex gap-2 ">
          <p className="text-darkgreen font-bold custom-text-md text-nowrap font-family-helvetica-now">
            Know more{" "}
          </p>
          <Greenbutton
            color="#fff"
            style={{
              background:
                "linear-gradient(90deg, #2CFE05 -23.73%, #0D5001 186.15%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};
