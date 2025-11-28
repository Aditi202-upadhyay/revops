"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { Heading } from "../component/atom/decorativeHeading"

export default function Process() {
  const [activeIndex, setActiveIndex] = useState(1)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const items = [
    { number: "01", title: "Emotion-Aware Styling", description: "Her message design adapts to tone." },
    { number: "02", title: "Emotion-Aware Styling", description: "Her message design adapts to tone." },
    { number: "03", title: "Emotion-Aware Styling", description: "Her message design adapts to tone." },
     { number: "01", title: "Emotion-Aware Styling", description: "Her message design adapts to tone." },
    { number: "02", title: "Emotion-Aware Styling", description: "Her message design adapts to tone." },
    { number: "03", title: "Emotion-Aware Styling", description: "Her message design adapts to tone." },
     { number: "01", title: "Emotion-Aware Styling", description: "Her message design adapts to tone." },
    { number: "02", title: "Emotion-Aware Styling", description: "Her message design adapts to tone." },
    { number: "03", title: "Emotion-Aware Styling", description: "Her message design adapts to tone." },
     { number: "01", title: "Emotion-Aware Styling", description: "Her message design adapts to tone." },
    { number: "02", title: "Emotion-Aware Styling", description: "Her message design adapts to tone." },
    { number: "03", title: "Emotion-Aware Styling", description: "Her message design adapts to tone." },
    // repeat as needed…
  ]

  // 🌟 Track active item while scrolling


  return (
    <section className="blade-top-padding-lg">
      <div className="w-container-xl flex gap-32">
        {/* LEFT SECTION */}
        <div>
          <Heading title="Our Process" color="#26DF04" />

          <h2 className="custom-text-3xl font-bold text-black py-2">
            100+ <i className="font-normal">Companies</i> trusted us <br /> to improve their{" "}
            <i className="font-normal">marketing</i>
          </h2>

          <div className="w-[38rem] h-[28rem] mt-8">
            <div className="w-full h-full relative">
              <Image src="/assets/services/gsap1.png" fill alt="Image1" className="object-contain" />
            </div>
          </div>
        </div>

        {/* RIGHT SCROLL SECTION */}
        <div className="flex flex-col gap-12 w-full" id="process-items">
          {items.map((item, index) => {
            const isActive = index === activeIndex

            return (
              <div
                key={index}
                data-index={index}
                className={`
                  process-item 
                  opacity-0 translate-y-6
                  transition-all duration-700 ease-out
                  ${isActive ? "scale-100" : "scale-95 opacity-40"}
                `}
              >
                <h2
                  className={`custom-text-xl font-bold py-2 transition-colors duration-300 ${
                    isActive ? "text-green-600" : "text-green-400"
                  }`}
                >
                  {item.number}. {item.title}
                </h2>

                <p className={`max-w-sm transition-opacity duration-300 ${isActive ? "text-gray-700" : "text-gray-500"}`}>
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
