import { GradientBorderBox } from "@/app/component/atom/buttons";
import { Heading } from "@/app/component/atom/decorativeHeading";


export default function BlogDetailBanner() {
  return (
    <section>
      <div
        style={{ backgroundImage: "url('/assets/blogs/backgroundImage.png')" }}
        className="relative object-cover bg-no-repeat bg-center w-ful h-[30rem] md:h-[35rem] xl:h-screen"
      >
        <div className="absolute inset-0 buttongradient bg-lightDarkGreen opacity-95"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <div className=" flex flex-col justify-center items-center">
            <Heading title="Lead Generation" color="#26DF04" />

            <h2 className="custom-text-3xl font-bold text-white text-center py-4">
              What is <i className="font-normal">Demand Generation?</i> A <br/> simple guide for B2B marketers
            </h2>
          </div>
          <div className="flex flex-row justify-center items-center gap-4 mt-4">
            <GradientBorderBox title="25 September, 2025"/>
            <GradientBorderBox title="10 min read"/>
          </div>
        </div>
      </div>
    </section>
  );
}
