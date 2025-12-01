"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function ClientSwiper() {
  return (
    <section>
      <div className="overflow-hidden ">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className=" w-auto"
          breakpoints={{
            320: { slidesPerView: 2.5, spaceBetween: 10 },
            640: { slidesPerView: 3, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
            1280: { slidesPerView: 5, spaceBetween: 30 },
          }}
        >
          {clients.map((obj, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center  justify-center">
                <Image
                  src={obj.logo}
                  alt={obj.name}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

type LogoProps = {
  logo: string;
  name: string;
};

const clients: LogoProps[] = [
  { logo: "/assets/home/client1.png", name: "dohler" },
  { logo: "/assets/home/client2.png", name: "Nestle" },
  { logo: "/assets/home/client1.png", name: "dohler" },
  { logo: "/assets/home/client2.png", name: "Nestle" },
   { logo: "/assets/home/client1.png", name: "dohler" },
  { logo: "/assets/home/client2.png", name: "Nestle" },
  { logo: "/assets/home/client1.png", name: "dohler" },
  { logo: "/assets/home/client2.png", name: "Nestle" }, { logo: "/assets/home/client1.png", name: "dohler" },
  { logo: "/assets/home/client2.png", name: "Nestle" },
  { logo: "/assets/home/client1.png", name: "dohler" },
  { logo: "/assets/home/client2.png", name: "Nestle" }, { logo: "/assets/home/client1.png", name: "dohler" },
  { logo: "/assets/home/client2.png", name: "Nestle" },
  { logo: "/assets/home/client1.png", name: "dohler" },
  { logo: "/assets/home/client2.png", name: "Nestle" }, { logo: "/assets/home/client1.png", name: "dohler" },
  { logo: "/assets/home/client2.png", name: "Nestle" },
  { logo: "/assets/home/client1.png", name: "dohler" },
  { logo: "/assets/home/client2.png", name: "Nestle" }, { logo: "/assets/home/client1.png", name: "dohler" },
  { logo: "/assets/home/client2.png", name: "Nestle" },
  { logo: "/assets/home/client1.png", name: "dohler" },
  { logo: "/assets/home/client2.png", name: "Nestle" },
];
