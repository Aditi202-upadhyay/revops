import { Heading } from "../component/atom/decorativeHeading";

export default function Solution() {
  return (
    <section className=" blade-top-padding-lg ">
      <div className="w-full h-screen relative ">
        <video
          src="/assets/home/backgroundVideo.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        ></video>
        <div className="absolute inset-0 bg-gradient-to-b from-darkgreen via-55% via-[#215817]/60 to-black"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Heading title="Solutions" color="#fff" />
          <h3 className="font-bold text-white custom-text-3xl text-center">
            100+ <i className="font-normal">Companies</i> trusted us <br /> to
            improve their <i className="font-normal">marketing</i>
          </h3>
           <div className="mt-10 flex flex-col md:flex-row gap-4 xl:gap-8 px-4">
    {solutionsData.map((ele, index) => (
      <Card key={index} data={ele} />
    ))}
  </div>
        </div>
      </div>
    </section>
  );
}

type solutionProps = {
  heading: string;
  description: string;
};

const solutionsData: solutionProps[] = [
  {
    heading: "D2C",
    description:
      "Grow Your Channel, Secure Funding. Monetize your passion and fuel your channel's growth with funding based on your YouTube earnings.",
  },
  {
    heading: "B2C",
    description:
      "Grow Your Channel, Secure Funding. Monetize your passion and fuel your channel's growth with funding based on your YouTube earnings.",
  },
  {
    heading: "B2B",
    description:
      "Grow Your Channel, Secure Funding. Monetize your passion and fuel your channel's growth with funding based on your YouTube earnings.",
  },
];

const Card = ({data}:{data:solutionProps}) => {
  return (
    <div className=" xl:w-[25rem] border border-green   md:h-[18rem] xl:h-[22rem] p-4 xl:p-8 rounded-md relative overflow-hidden bg-darkgreen/20 backdrop-blur-xl">

      <div className="absolute inset-0 bg-gradient-to-b 
        from-[#215817] 
        via-[#215817]/60 
        to-transparent 
        -z-10">
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 bg-green"></div>
          <h5 className="text-white font-medium custom-text-lg">{data.heading}</h5>
        </div>

        <p className="text-white mt-4 md:mt-0">
         {data.description}
        </p>
      </div>

    </div>
  );
};


