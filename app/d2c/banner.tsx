import { Heading } from "../component/atom/decorativeHeading";
import ClientSwiper from "../component/molecules/clientSwiper";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="blade-bottom-margin-lg">
      <div className="bg-black relative  h-[30rem] md:h-[34rem] lg:h-[95vh]  lg:rounded-3xl lg:m-4 overflow-hidden">
        {/* Left Gradient - Green */}
        <div
          className="absolute top-0 -left-[200px] md:-left-[300px] w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full opacity-30 blur-[80px] md:blur-[120px]"
          style={{
            background: "#26DF04",
          }}
        />

        {/* Right Gradient - Green */}
        <div
          className="absolute bottom-0 -right-[200px] md:-right-[300px] w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full opacity-30 blur-[80px] md:blur-[120px]"
          style={{
            background: "#26DF04",
          }}
        />





        <div className="h-full flex flex-col justify-center items-center text-center px-4 z-40">
          <div className=" flex flex-col justify-center items-center">
            <h1 className="font-family-helvetica-now font-bold text-white custom-text-3xl animate-fade-up-slower">
              Proven{" "}
              <i className="italic font-playfair font-normal">
                Marketing Solutions
                <br />
              </i>{" "}
              That Drive
              <i className="italic font-playfair font-normal">
                Direct Revenue.
              </i>{" "}
            </h1>
            <p className="text-white/60 py-4 custom-text-md font-family-helvetica-now max-w-md animate-fade-up-slower">
              We Help D2C Brands: Build and Scale a High-Converting Marketing
              Pipeline.
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center justify-center z-20">
          <Heading title="Our Clients" color="#FFFFFF" />
          <div className="w-full md:w-[50%] mt-4">
            <ClientSwiper />
          </div>
        </div>
      </div>
    </section>
  );
}
