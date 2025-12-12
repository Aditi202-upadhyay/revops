import { Heading } from "../component/atom/decorativeHeading";
import ClientSwiper from "../component/molecules/clientSwiper";
import Image from "next/image";

export default function Banner() {
  return (
    <section>
      <div className="bg-black relative  h-[30rem] md:h-[34rem] lg:h-[95vh]  lg:rounded-3xl lg:m-4 overflow-hidden">

        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            src="/assets/services/bgVideo.mp4"
            autoPlay
            loop
            muted
            className=" w-full h-full object-cover"
          />
        </div>

       
        <div className="absolute inset-0 z-10">
          <Image
            src="/assets/services/bgImage.png"
            fill
            alt="background Image"
            className="object-cover opacity-80"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
          <strong className="font-family-helvetica-now font-bold text-white custom-text-3xl animate-fade-up-slower">
            From{" "}
            <i className="italic font-playfair font-normal">
              targeting to conversion <br />
            </i>
            we power your lead engine
          </strong>

          <p className="text-white py-4 custom-text-md font-family-helvetica-now max-w-md animate-fade-up-slower">
            We help you reach the right audience, optimize conversions,
            and turn interest into revenue
          </p>
        </div>

      </div>
    </section>
  );
}

