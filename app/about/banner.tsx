import { Heading } from "../component/atom/decorativeHeading";
import ClientSwiper from "../component/molecules/clientSwiper";
import Image from "next/image";

export default function Banner() {
  return (
    <section>
      <div className="bg-black relative w-full h-[30rem] md:h-[34rem] xl:h-screen overflow-hidden">


       



        {/* Top-right circle */}
       


       


        <div className="h-full flex flex-col justify-center items-center text-center px-4 z-40">
          <div className=" flex flex-col justify-center items-center">
              <Heading title="About" color="#26DF04"/>
            <strong className="font-family-helvetica-now font-bold text-white custom-text-3xl animate-fade-up-slower">
             A Team of {" "}
              <i className="italic font-playfair font-normal">
                thinkers, makers,
                <br />
              </i>{" "}
              That Drive
              <i className="italic font-playfair font-normal">
                Direct Revenue.
              </i>{" "}
            </strong>
           
          </div>
        </div>

      
      </div>
    </section>
  );
}
