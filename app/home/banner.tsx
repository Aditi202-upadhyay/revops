"use client"
import { useEffect, useRef } from "react";
import { Heading } from "../component/atom/decorativeHeading";
import ClientSwiper from "../component/molecules/clientSwiper";

import gsap from "gsap";

export default function Banner() {
    const containerRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const clientsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Initial states
        gsap.set(containerRef.current, { scale: 0.95, opacity: 0 });
        gsap.set([headingRef.current, textRef.current, clientsRef.current], { y: 100, opacity: 0 });

        tl.to(containerRef.current, {
            scale: 1,
            opacity: 1,
            duration: 1.8,
            stagger: 0.2
        })
            .to(headingRef.current, {
                y: 0,
                opacity: 1,
                duration: 1.5,
            }, "-=1.0")
            .to(textRef.current, {
                y: 0,
                opacity: 1,
                duration: 1.5,
            }, "-=1.2")
            .to(clientsRef.current, {
                y: 0,
                opacity: 1,
                duration: 1.5,
            }, "-=1.2");

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <section className="blade-bottom-margin-lg">
            <div ref={containerRef} className="bg-black relative h-[76vh] lg:mx-4  lg:h-[95vh] lg:rounded-3xl   lg:my-6  overflow-hidden opacity-0">
                <div className="absolute right-0 top-0 w-[45rem] h-[45rem] bg-[radial-gradient(circle_at_top_right,#26DF04,transparent_80%)] "></div>
                <div className="absolute inset-0 ">
                    <video
                        title="RevOps marketing solutions background video"
                        aria-label="Background video showing marketing visuals"
                        src="/assets/home/bannerbgVideo.mp4" autoPlay loop muted className="opacity-60 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-l from-green  to-[#26DF04] mix-blend-color-burn"></div>
                </div>

                <div
                    className="absolute -top-44 -right-36 rounded-full opacity-20 md:opacity-40 "
                    style={{
                        width: "650px",
                        height: "750px",
                        background: `radial-gradient(circle at 90% 20%, #26DF04 0%, #26DF04 40%, transparent 80%)`,
                        filter: "blur(40px)",
                    }}
                />


                <div className="h-full flex flex-col justify-center items-center text-center px-4 z-10">
                    <div className=" flex flex-col justify-center items-center">
                        <h1 ref={headingRef} className="font-family-helvetica-now font-bold text-white custom-text-3xl">We turn your <i className="italic font-playfair  font-normal">marketing into <br />customers,</i> not just clicks</h1>
                        <p ref={textRef} className="!text-white/90 py-4 custom-text-md font-family-helvetica-now max-w-xl">We design and optimize growth systems that drive pipeline, align sales & marketing, and make revenue predictable.</p>
                    </div>
                </div>

                <div ref={clientsRef} className="absolute bottom-8 left-0 right-0 flex flex-col items-center justify-center z-20">
                    <Heading title="Our Clients" color="#FFFFFF" />
                    <div className="w-full md:w-[50%] mt-4">
                        <ClientSwiper />
                    </div>
                </div>
            </div>
        </section>
    )
}
