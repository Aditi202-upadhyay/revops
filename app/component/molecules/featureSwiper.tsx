"use client";
import Image from "next/image";
import { featureProps } from "@/app/services/feature";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";




export default function FeatureSwiper({ data }: { data: featureProps[] }) {
  return (
    <>
      <div>
        <div className="blade-top-padding-sm">
          <Swiper
            className=""
            modules={[Autoplay]}
            speed={4000}
            autoplay={{
              delay: 5,
              disableOnInteraction: false,
            }}
            noSwiping={true}
            loop
            grabCursor
            slidesPerView="auto"
            spaceBetween={20}
            centerInsufficientSlides={true}
            breakpoints={{
              456: {
                slidesPerView: "auto",
                spaceBetween: 20,
              },
              768: {
                slidesPerView: "auto",
                 spaceBetween: 20,
              },
              960: {
                slidesPerView: "auto",
                  spaceBetween: 20,
              },
              1020: {
                slidesPerView: "auto",
                 spaceBetween: 20,
              },
              1280: {
                slidesPerView: "auto",
                spaceBetween: 20,
              },
              1400: {
                slidesPerView: "auto",
                spaceBetween: 20,
              },
            }}
          >
            {data.map((obj, index:number) => (
              <SwiperSlide key={index} className="!w-auto ">
                <div className="w-[10rem] md:w-[17rem] h-[8rem] xl:h-[13rem] flex justify-center items-center  rounded-lg bg-white">
                  <div className="relative w-28 md:w-44 h-12 ">
                        <Image src={obj.logo} fill alt={obj.name} className="object-contain"/>
                  </div>
                  
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}