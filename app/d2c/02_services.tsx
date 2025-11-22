import { Greenbutton } from "../component/atom/buttons";
import { Heading } from "../component/atom/decorativeHeading";

export default function Service() {
  return (
    <section className="blade-top-margin-lg blade-bottom-margin-lg">
      <div className="w-container-xl">
        <Heading title="Our Services" color="#014715" />
        <div className="lg:flex justify-between blade-top-padding-sm">
          <h3 className="font-bold text-black custom-text-2xl">
            100+ <i className="font-normal">Companies</i> trusted us <br /> to
            improve their <i className="font-normal ">marketing</i>
          </h3>
          <p className="font-normal custom-text-md text-gray w-full lg:max-w-md xl:max-w-xl pt-4 lg:pt-0">
            We design and optimize growth systems that drive pipeline, align
            sales and marketing, and make revenue predictable. We design and
            optimize growth systems that drive pipeline, align sales and
            marketing, and make revenue predictable.
          </p>
        </div>
        <div className="mt-14">
        {seviceData.map((ele,index)=>{
            return(
                <div key={index}>
                   <Services data={ele} />
                </div>
            )
        })}
          
        </div>
      </div>
    </section>
  );
}

const Services = ({ data}:ParentsCom) => {
  return (
    <div>
     
        <div  className="flex flex-row justify-between items-center">
          <div className="my-8 border-b-2 border-gray">
            <div className="flex gap-2  items-center">
              <div className="custom-text-base text-gray">{data.id}.</div>
              <h3 className="custom-text-xl font-medium text-transparent bg-clip-text bg-linear-to-t from-darkgreen from-35%  to-green">{data.heading}</h3>
            </div>
            <div>
               <p className="text-gray max-w-xs custom-text-md ps-10 pt-2">{data.description}</p>
            </div>
           
          </div>
           <div>
              <p className="text-darkgreen font-bold custom-text-md">Know more <Greenbutton color="#fff"/></p>
           </div>
        </div>

    </div>
  );
};

type ServiceProps = {
  id: string;
  heading: string;
  description: string;
  link: string;
};

type ParentsCom = {
    data:ServiceProps
}

const seviceData: ServiceProps[] = [
  {
    id: "01",
    heading: "Performance Marketing",
    description:
      "Improved in ROI and more inbound sales calls, more qualified pipeline",
    link: "#",
  },
  {
    id: "02",
    heading: "SEO/GEO",
    description:
      "Improved in ROI and more inbound sales calls, more qualified pipeline ",
    link: "#",
  },
  {
    id: "03",
    heading: "Conversion Rate Optimization",
    description:
      "Improved in ROI and more inbound sales calls, more qualified pipeline ",
    link: "#",
  },
  {
    id: "04",
    heading: "Marketing Analytics",
    description:
      "Improved in ROI and more inbound sales calls, more qualified pipeline  ",
    link: "#",
  },
];
