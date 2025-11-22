"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ClientSwiper() {
  return (
    <section>
      <div className="overflow-hidden ">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper w-auto"
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 },
            640: { slidesPerView: 3, spaceBetween: 15 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
            1280: { slidesPerView: 5, spaceBetween: 30 },
          }}
        >
          {clients.map((obj, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center py-4">
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
  { logo: "/assets/d2c/client1.png", name: "dohler" },
  { logo: "/assets/d2c/client2.png", name: "Nestle" },
  { logo: "/assets/d2c/client1.png", name: "dohler" },
  { logo: "/assets/d2c/client2.png", name: "Nestle" },
];
