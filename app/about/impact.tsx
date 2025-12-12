import { Greenbutton } from "../component/atom/buttons";
import { Heading } from "../component/atom/decorativeHeading";
import Image from "next/image";

export default function AboutImpact() {
  return (
    <section className="blade-bottom-padding-lg">
      <div className="w-container-xl relative">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end my-4">
          <div>
            <Heading title="About Revops" color="#014715" />
            <h2 className="custom-text-3xl font-bold text-black py-2 font-family-helvetica-now">
              100+ <i className="font-normal font-playfair">Companies</i>{" "}
              trusted us <br /> to improve their{" "}
              <i className="font-normal font-playfair">marketing</i>
            </h2>
            <p className="text-gray font-family-helvetica-now custom-text-md max-w-2xl py-1">
              At RevOps Media, we drive results that matter. As a performance
              marketing agency, we blend data, creativity, and technology to
              help brands grow in the digital space. Our experts in PPC, SEO,
              social media, and conversion optimization craft strategies that
              deliver measurable impact. Transparent, innovative, and
              goal-driven — we turn digital challenges into growth
              opportunities.
            </p>
          </div>
        </div>
      
        <div className="flex md:flex-row flex-col gap-2 md:gap-6 ">
          {impactData.map((ele, index) => {
            return (
              <div
                key={index}
                className="p-[2px] hover:p-0 group bg-linear-to-br rounded-md from-10% from-green/20 lg:from-green/35 via-transparent to-white w-full lg:w-[26rem] h-[12rem] lg:h-[16rem] my-1 md:my-9 "
              >
                <div className="w-full h-full bg-white rounded-md  flex justify-between flex-col p-4 lg:p-6 group-hover:bg-linear-to-b group-hover:from-lightDarkGreen/95  group-hover:to-black group-hover:transition-colors group-hover:duration-300  ">
                  <h6 className="custom-text-3xl font-family-helvetica-now font-bold text-transparent bg-clip-text bg-linear-to-t to-[#199103] from-[#083001]  group-hover:text-white">
                    {ele.percentage}
                  </h6>
                  <p className="text-gray font-family-helvetica-now font-medium custom-text-md group-hover:text-white">
                    {ele.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const impactData = [
  {
    percentage: "84.5%",
    description:
      "Improved in ROI and more inbound sales calls, more qualified pipeline ",
  },
  {
    percentage: "82.5%",
    description:
      "Improved in ROI and more inbound sales calls, more qualified pipeline ",
  },
  {
    percentage: "90.5%",
    description:
      "Improved in ROI and more inbound sales calls, more qualified pipeline ",
  },
];
