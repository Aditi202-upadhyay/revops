import { Heading } from "../component/atom/decorativeHeading";
import ClientSwiper from "../component/molecules/clientSwiper";

export default function Banner() {
  return (
    <section>
      <div
        style={{ backgroundImage: "url('/assets/blogs/backgroundImage.png')" }}
        className="relative object-cover bg-no-repeat bg-center w-ful h-[30rem] md:h-[35rem] lg:h-screen"
      >
        <div className="absolute inset-0 buttongradient bg-lightDarkGreen opacity-95"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <div className="flex flex-col justify-center items-center  h-full ">
            <h2 className="custom-text-3xl text-white text-center">
              {" "}
              <b>Proven </b>
              <i>
                Marketing Solutions
                <br />{" "}
              </i>{" "}
              <b>That Drive</b> <i>Direct Revenue.</i>
            </h2>
            <p className="text-white pt-4 text-center">
              We Help D2C Brands: Build and Scale a <br /> High-Converting
              Marketing Pipeline.
            </p>
          </div>
           <div className="flex justify-center flex-col items-center blade-bottom-margin-sm">
             {/* <Heading title="Our Clients" color="#fff"/> */}
             {/* <ClientSwiper/> */}
           </div>
        </div>
      </div>
    </section>
  );
}
