import { Heading } from "../component/atom/decorativeHeading";
import ClientSwiper from "../component/molecules/clientSwiper";
import Image from "next/image";

export default function Banner() {
  return (
    <section>
      <div className="bg-black relative w-full h-[30rem] md:h-[34rem] xl:h-screen overflow-hidden">


        <div
          className="absolute top-0 -left-64 rounded-full opacity-20 md:opacity-40  w-[650px] h-[750px]"
          style={{
            
            background: `radial-gradient(circle at 90% 20%, #26DF04 0%, #26DF04 40%, transparent 80%)`,
            filter: "blur(40px)",
          }}
        />

        <div className="absolute top-45 left-0  w-[8rem]  md:w-[12rem]  xl:w-[25rem] h-[15rem] md:block hidden">
          <Image
            src="/assets/d2c/star.png"
            alt="Star"
            fill
            className="object-contain mix-blend-overlay smooth-spin"
          />
        </div>



        {/* Top-right circle */}
        <div
          className="absolute top-0 -right-52 rounded-full opacity-20 md:opacity-60 w-[650px] h-[750px]"
          style={{
            background: `radial-gradient(circle at 90% 20%, #26DF04 0%, #26DF04 40%, transparent 80%)`,
            filter: "blur(40px)",
          }}
        />


        <div className="absolute top-45 right-0 w-[8rem]  md:w-[12rem]  xl:w-[25rem] h-[15rem]">
          <Image
            src="/assets/d2c/star.png"
            alt="Star"
            fill
            className="object-contain mix-blend-overlay smooth-spin"
          />
        </div>



        <div className="h-full flex flex-col justify-center items-center text-center px-4 z-40">
          <div className=" flex flex-col justify-center items-center">
            <strong className="font-family-helvetica-now font-bold text-white custom-text-3xl animate-fade-up-slower">
              Proven{" "}
              <i className="italic font-family-playfair font-normal">
                Marketing Solutions
                <br />
              </i>{" "}
              That Drive
              <i className="italic font-family-playfair font-normal">
                Direct Revenue.
              </i>{" "}
            </strong>
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
