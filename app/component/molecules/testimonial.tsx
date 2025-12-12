"use client";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Heading } from "../atom/decorativeHeading";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";


export default function GlobalTestimonial() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const handleNavigation = (index: number) => {
    setActiveIndex(index);
    swiperInstance?.slideTo(index);
  };

  return (
    <section className="blade-bottom-padding-lg">
      <div
        style={{
          backgroundImage: "url('/assets/home/textimonialBackground.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className=" w-full min-h-[36rem] md:min-h-[45rem] 2xl:min-h-[50rem] overflow-hidden rounded-sm md:rounded-lg"
      >
        <div className="blade-top-padding-sm blade-bottom-padding-sm flex justify-center flex-col items-center px-4 md:px-0">
          <Heading title="Testimonials" color="#ffff" />
          <h3 className="custom-text-3xl text-white italic font-normal text-center my-2 font-playfair">
            Proof of Growth,{" "}
            <b className="not-italic font-family-helvetica-now">
              Straight <br /> From
            </b>{" "}
            Our Clients
          </h3>

          {/* MAIN SWIPER */}
          <div className="relative w-full flex justify-center items-center ">
            {/* CUSTOM BUTTONS */}
            <SwiperButtons swiper={swiperInstance} />

            {/* FIXED YELLOW BOX */}
            <div className="my-4 md:my-9 border border-yellow-200 w-full md:w-[45rem] min-h-[20rem] p-4 md:p-9 rounded-lg mx-auto text-center">
              <Swiper
                modules={[Navigation]}
                navigation={false}
                onSwiper={(swiper) => setSwiperInstance(swiper)}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                className="w-full"
              >
                {usersDetails.map((user, index) => (
                  <SwiperSlide key={index}>
                    <div className="">
                      <div className="my-2 ">
                        <div className="relative w-24 h-24 mx-auto">
                          <Image
                            src={user.image}
                            fill
                            alt={user.name}
                            className="object-cover w-full h-full rounded-xl"
                          />
                        </div>
                        <h5 className="text-white  font-medium custom-text-md pt-2 font-family-helvetica-now">
                          {user.name}
                        </h5>
                        <p className="text-white/80  text-base font-family-helvetica-now">
                          {user.designation}
                        </p>
                      </div>

                      <h5 className="custom-text-xl  font-bold text-white my-2 md:my-4 font-family-helvetica-now">
                        {user.heading}
                      </h5>
                      <p
                        className="text-white/80 custom-text-md 
                       font-family-helvetica-now"
                      >
                        {user.description}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* SMALL THUMBNAILS */}
          <div className="h-full max-w-full gap-2 flex flex-row justify-center overflow-hidden  px-4">
            {usersDetails.map((ele, index) => (
              <div
                onClick={() => handleNavigation(index)}
                role="button"
                key={index}
                className={`relative 
                w-14 h-14        
                md:w-16 md:h-16  
                lg:w-19 lg:h-19   
                cursor-pointer transition-all flex-shrink-0
                ${activeIndex === index ? "opacity-100" : "opacity-50"}`}
              >
                <Image
                  src={ele.image}
                  fill
                  alt={ele.name}
                  className="object-cover w-full h-full rounded-sm lg:rounded-xl"
                />
              </div>
            ))}
          </div>

          <div className="mt-6 space-x-4 lg:hidden block">
            <button
              onClick={() => swiperInstance?.slidePrev()}
              style={{
                background:
                  "linear-gradient(90deg, #2CFE05 -23.73%, #FFF 186.15%)",
              }}
              className=" text-white cursor-pointer px-4 md:px-6 py-2  rounded-full"
            >
              <FaArrowLeftLong />
            </button>

            <button
             onClick={() => swiperInstance?.slideNext()}
              style={{
                background:
                  "linear-gradient(90deg, #2CFE05 -23.73%, #FFF 186.15%)",
              }}
              className="text-white cursor-pointer px-4 md:px-6 py-2  rounded-full"
            >
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- USERS DATA ---------------- */

const usersDetails = [
  {
    image: "/assets/home/michake.jpg",
    name: "Michael Stlman",
    designation: "Data Engineer",
    heading: "2X Increase in Lead Generation",
    description:
      "We haven't had people building fixed income tech with that caliber, a mix of best-in-class software engineers.",
  },
  {
    image: "/assets/home/image1.jpg",
    name: "Sarah Williams",
    designation: "Marketing Strategist",
    heading: "35% Growth in Customer Engagement",
    description:
      "We haven't had people building fixed income tech with that caliber, a mix of best-in-class software engineers.",
  },
  {
    image: "/assets/home/image2.jpg",
    name: "David Johnson",
    designation: "Product Manager",
    heading: "Faster Product Iterations",
    description:
      "We haven't had people building fixed income tech with that caliber, a mix of best-in-class software engineers.",
  },
  {
    image: "/assets/home/image3.jpg",
    name: "Emily Clark",
    designation: "UX Designer",
    heading: "Improved User Experience",
    description:
      "We haven't had people building fixed income tech with that caliber, a mix of best-in-class software engineers.",
  },
  {
    image: "/assets/home/image4.jpg",
    name: "James Carter",
    designation: "Operations Lead",
    heading: "Streamlined Operations",
    description:
      "We haven't had people building fixed income tech with that caliber, a mix of best-in-class software engineers.",
  },
];

/* -------------- CUSTOM BUTTON COMPONENT -------------- */

export const SwiperButtons = ({ swiper }: { swiper: SwiperType | null }) => {
  return (
    <div className="hidden  absolute  lg:top-1/2 lg:left-0 w-full lg:flex justify-between lg:px-14 xl:px-48 3xl:px-[20rem] -translate-y-1/2 z-20">
      <button
        style={{
          background: "linear-gradient(90deg, #2CFE05 -23.73%, #FFF 186.15%)",
        }}
        onClick={() => swiper?.slidePrev()}
        className=" text-white cursor-pointer px-3 md:px-6 py-2  rounded-full"
      >
        <FaArrowLeftLong />
      </button>

      <button
        style={{
          background: "linear-gradient(90deg, #2CFE05 -23.73%, #FFF 186.15%)",
        }}
        onClick={() => swiper?.slideNext()}
        className="text-white cursor-pointer px-3 md:px-6 py-2  rounded-full"
      >
        <FaArrowRightLong />
      </button>
    </div>
  );
};
