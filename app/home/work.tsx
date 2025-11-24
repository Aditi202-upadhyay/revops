import { Greenbutton } from "../component/atom/buttons";
import { Heading } from "../component/atom/decorativeHeading";
import Image from "next/image";

export default function Work() {
  return (
    <section className="blade-top-padding-lg">
      <div className="w-container-sm">
        <div className="flex justify-center flex-col items-center">
          <Heading title="Our Work" color="#000" />
          <h2 className="custom-text-3xl font-bold text-black text-center pt-2">
            Level up your marketing,
            <br /> improve
            <i className="font-normal text-black"> marketing ROI</i>
          </h2>
        </div>

        <div className="blade-top-margin-sm ">
          {workData.map((ele, index) => {
            return (
              <div key={index} className="my-4">
                <CardUI data={ele} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

type workProps = {
  image: string;
  logo: string;
  heading: string;
  link: string;
  points: string[];
};

const workData: workProps[] = [
  {
    image: "/assets/home/placeholder.png",
    logo: "/assets/home/doholer.png",
    heading:
      "Dohler raised 2.71 million and website performance score improved from 52 to 84 after migrating to webflow from Bubble score improved.",
    link: "#",
    points: [
      "Paid Social Marketing",
      "New Revenue Modeling",
      "Content Strategy",
      "Data & Reporting",
      "Organic Search",
    ],
  },
  {
    image: "/assets/home/placeholder.png",
    logo: "/assets/home/doholer.png",
    heading:
      "Dohler raised 2.71 million and website performance score improved from 52 to 84 after migrating to webflow from Bubble score improved.",
    link: "#",
    points: [
      "Paid Social Marketing",
      "New Revenue Modeling",
      "Content Strategy",
      "Data & Reporting",
      "Organic Search",
    ],
  },
  {
    image: "/assets/home/placeholder.png",
    logo: "/assets/home/doholer.png",
    heading:
      "Dohler raised 2.71 million and website performance score improved from 52 to 84 after migrating to webflow from Bubble score improved.",
    link: "#",
    points: [
      "Paid Social Marketing",
      "New Revenue Modeling",
      "Content Strategy",
      "Data & Reporting",
      "Organic Search",
    ],
  },
];

const CardUI = ({ data }: { data: workProps }) => {
  return (
    <div className="flex  flex-col  lg:flex-row gap-2 md:gap-4 lg:gap-6 xl:gap-12 bg-white p-4 rounded-md ">
      <div className=" min-h-[18rem] lg:w-1/2 h-auto relative">
        <Image
          src={data.image}
          alt="placeholder Image"
          fill
          className="object-cover  rounded-md"
        />
      </div>
      <div className=" w-full lg:w-1/2">
        <div className="relative w-[9rem] h-19">
          <Image
            src={data.logo}
            fill
            alt="placeholder Image"
            className="object-cover "
          />
        </div>
        <h5 className="custom-text-base text-lightDarkGreen font-medium max-w-md">
          {data.heading}
        </h5>

        <div className="my-2 md:my-4 xl:my-6">
          <span className="text-lightDarkGreen font-bold custom-text-md ">
            Know more <Greenbutton color="white" />
          </span>
        </div>

        <div className="flex flex-wrap gap-x-4 xl:gap-x-8 gap-y-2 xl:gap-y-4 mt-4 md:mt-8 xl:mt-12 border-t-2 border-gray/20 pt-6">
          {data.points.map((ele, index) => (
            <div key={index} className="flex items-center gap-2">
              {/* Green Dot */}
              <span className="w-2 h-2 bg-green inline-block "></span>

              {/* Text */}
              <p className="text-md text-black whitespace-nowrap">{ele}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
