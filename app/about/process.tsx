"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Heading } from "../component/atom/decorativeHeading"
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger)

interface processProps {
  number: string;
  title: string;
  description: string;
}

const items = [
  {
    number: "01",
    title: "Emotion-Aware Styling",
    description:
      "Her message design adapts to tone. Clear, excited, empathetic — the interface reflects the mood, not just the message.",
  },
  {
    number: "02",
    title: "Smart Tone Detection",
    description:
      "AI analyzes the sentiment and adjusts visual elements. Every interaction feels personalized and intentional.",
  },
  {
    number: "03",
    title: "Adaptive Responses",
    description:
      "Responses change based on context. The system learns and evolves with each interaction for better results.",
  },
  {
    number: "04",
    title: "Real-Time Feedback",
    description: "Instant visual cues guide users through their journey. Clarity and confidence in every step forward.",
  },
]

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsContainerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const handleNavigation = (index: number) => {
    setActiveIndex(index);
    swiperInstance?.slideTo(index);
  };
  useEffect(() => {
    if (!containerRef.current || !cardsContainerRef.current) return

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const cards = cardRefs.current.filter(Boolean)
      const totalItems = cards.length
      const itemHeight = cards[0]?.offsetHeight || 0
      const gap = 40 // Matches mb-10 (40px)
      const totalItemHeight = itemHeight + gap


      gsap.set(cards, {
        opacity: 0.2,
        filter: "blur(4px)",
        scale: 0.9,
      })

      gsap.set(cards[0], {
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
      })


      const listHeight = cardsContainerRef.current!.offsetHeight
      const startY = (listHeight / 2) - (itemHeight / 2)

      gsap.set(cardsContainerRef.current, {
        y: startY
      })

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${totalItems * 600}`, // Scroll distance
          scrub: 1,
          pin: true,
        },
      })

      cards.forEach((card, i) => {
        if (i === cards.length - 1) return

        const nextCard = cards[i + 1]


        timeline

          .to(cardsContainerRef.current, {
            y: startY - ((i + 1) * totalItemHeight),
            duration: 1,
            ease: "power2.inOut",
          })
          // Fade out current
          .to(card, {
            opacity: 0.2,
            filter: "blur(4px)",
            scale: 0.9,
            duration: 1,
            ease: "power2.inOut",
          }, "<")
          // Fade in next
          .to(nextCard, {
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
            duration: 1,
            ease: "power2.inOut",
          }, "<")
      })
    });

    return () => {
      mm.revert();
    }
  }, [])

  return (
    <section className="relative lg:min-h-screen h-[98vh]  blade-bottom-padding-lg overflow-hidden">
      <div ref={containerRef} className="w-full h-screen bg-black blade-top-padding-sm flex items-center justify-center relative lg:block hidden">


        <div
          className="absolute bottom-0 -left-[200px] md:-left-[100px] w-[600px] h-[600px] md:w-[600px] md:h-[600px] rounded-full opacity-40 blur-[80px] md:blur-[120px]"
          style={{
            background: "#26DF04",
          }}
        />

        {/* Right Gradient - Green */}
        <div
          className="absolute bottom-0 -right-[200px] md:-right-[300px] w-[600px] h-[600px] md:w-[700px] md:h-[700px] rounded-full opacity-40 blur-[80px] md:blur-[120px]"
          style={{
            background: "#26DF04",
          }}
        />


        <div className="w-container-xl px-4 z-10  ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 h-full ">

            <div className="flex flex-col justify-center h-full  relative">
              <div className="">
                <Heading title="Our Process" color="#ffff" />
                <h2 className="custom-text-3xl font-bold text-white py-2">
                  100+ <i className="font-normal font-playfair">Companies</i> trusted us  to
                  improve their <i className="font-normal">marketing</i>
                </h2>
              </div>


              <div className=" mt-8 w-full  2xl:w-[34rem] h-[22rem] relative bg-darkgreen xl:h-[25rem] rounded-md flex items-center justify-center">

                <svg width="318" height="300" viewBox="0 0 318 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="97.2366" cy="97.2366" r="95.636" stroke="white" strokeWidth="3.20125" />
                  <circle cx="97.2366" cy="202.692" r="95.636" stroke="white" strokeWidth="3.20125" />
                  <circle cx="220.652" cy="97.2366" r="95.636" stroke="white" strokeWidth="3.20125" />
                  <circle cx="220.652" cy="202.692" r="95.636" stroke="white" strokeWidth="3.20125" />
                </svg>
              </div>
            </div>

            {/* RIGHT SECTION - Animated cards */}
            <div className="relative h-[600px] w-full flex items-center justify-center overflow-hidden">
              <div
                ref={cardsContainerRef}
                className="absolute top-1/2 left-0 w-full flex flex-col items-center"
                style={{ transform: "translateY(-50%)" }}
              >
                {items.map((item, index) => (
                  <div
                    key={index}
                    ref={(el) => {
                      cardRefs.current[index] = el
                    }}
                    className="relative w-full mb-10 last:mb-0 flex justify-center"
                  >
                    <div
                      className="flex flex-col gap-2  rounded-[12px] transition-all duration-500 w-full max-w-lg"

                    >
                      <div className="flex items-baseline gap-4">
                        <span className="text-white custom-text-xl font-bold font-family-helvetica-now">{item.number}</span>
                        <h3 className=" font-bold custom-text-xl text-white font-family-helvetica-now">{item.title}</h3>
                      </div>
                      <p className="text-white custom-text-md max-w-md font-family-helvetica-now">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden block w-container-xl">
        <div className=" flex justify-center items-center flex-col text-center">
          <Heading title="Our Process" color="#014715" />
          <h2 className="custom-text-3xl font-bold text-black py-2">
            100+ <i className="font-normal font-playfair">Companies</i> trusted us <br /> to
            improve their <i className="font-normal">marketing</i>
          </h2>
        </div>
        <div className="relative">
          <Swiper
           className="!overflow-visible"
            modules={[Navigation]}
            navigation={false}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
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
            {items.map((obj, index: number) => (
              <SwiperSlide key={index} className="!w-auto ">
                <Card data={obj} />
              </SwiperSlide>
            ))}
          </Swiper>
          <SwiperButtons swiper={swiperInstance} />
        </div>
      </div>
    </section>
  )
}


const Card = ({ data }: { data: processProps }) => {
  return (
    <div className="bg-lightDarkGreen w-full max-w-sm  mt-8 rounded-2xl relative overflow-hidden p-4 min-h-[21rem] flex flex-col">
      {/* Background Pattern */}

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex  gap-2">

          <h3 className="font-bold custom-text-lg text-white font-family-helvetica-now ">
            {data.title}
          </h3>
        </div>

        <p className="text-white/90 custom-text-sm font-family-helvetica-now mt-4">
          {data.description}
        </p>
      </div>
      <div>
        <svg width="318" height="300" viewBox="0 0 318 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[150px] h-[150px] mx-auto mt-6">
          <circle cx="97.2366" cy="97.2366" r="95.636" stroke="white" strokeWidth="3.20125" />
          <circle cx="97.2366" cy="202.692" r="95.636" stroke="white" strokeWidth="3.20125" />
          <circle cx="220.652" cy="97.2366" r="95.636" stroke="white" strokeWidth="3.20125" />
          <circle cx="220.652" cy="202.692" r="95.636" stroke="white" strokeWidth="3.20125" />
        </svg>
      </div>
    </div>
  )
}


export const SwiperButtons = ({ swiper }: { swiper: SwiperType | null }) => {
  return (
    <div className="absolute -bottom-14 right-0 justify-end w-full flex gap-2 px-6   z-20 pointer-events-none">
      <button
        style={{
          background: "linear-gradient(90deg, #2CFE05 -23.73%, #FFF 186.15%)",
        }}
        onClick={() => swiper?.slidePrev()}
        className=" text-white cursor-pointer px-4 md:px-6 py-2  rounded-full pointer-events-auto"
      >
        <FaArrowLeftLong />
      </button>

      <button
        style={{
          background: "linear-gradient(90deg, #2CFE05 -23.73%, #FFF 186.15%)",
        }}
        onClick={() => swiper?.slideNext()}
        className="text-white cursor-pointer px-4 md:px-6 py-2  rounded-full pointer-events-auto"
      >
        <FaArrowRightLong />
      </button>
    </div>
  );
};