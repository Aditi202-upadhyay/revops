import { GradientBorderBox } from "@/app/component/atom/buttons";
import { Heading } from "@/app/component/atom/decorativeHeading";


export default function BlogDetailBanner() {
  return (
    <section className="">
      <div
        style={{ backgroundImage: "url('/assets/blogs/blogsdetailsbg.png')" }}
       className="relative bg-cover bg-center bg-no-repeat lg:m-4 h-[30rem] md:h-[34rem] lg:h-[95vh]  lg:rounded-3xl"
      >
        <div className="absolute inset-0 buttongradient bg-lightDarkGreen opacity-95 lg:rounded-3xl"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <div className=" flex flex-col justify-center items-center">
            <Heading title="Lead Generati`  on" color="#26DF04" />

            <h1 className="custom-text-3xl font-bold animate-fade-up-slower text-white text-center py-4 font-family-helvetica-now">
              What is <i className="font-normal font-playfair">Demand Generation?</i> A <br/> simple guide for B2B marketers
            </h1>
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
