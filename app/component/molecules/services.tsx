import { Greenbutton } from "../atom/buttons";
import { Heading } from "../atom/decorativeHeading";

export type ServiceProps = {
  id: string;
  heading: string;
  description: string;
  link: string;
};

export type ParentsCom = {
    heading:string;
    description:string;
    data:ServiceProps[];
}

export default function GlobalService({serviceData}:{serviceData:ParentsCom}) {
  return (
    <section className="blade-top-margin-sm">
      <div className="w-container-xl">
        <Heading title="Our Services" color="#014715" />
        <div className="lg:flex justify-between pt-4 lg:pt-8">
          <h3 className="font-bold text-black custom-text-2xl" dangerouslySetInnerHTML={{__html:serviceData.heading}} />
           
          
          <p className="font-normal custom-text-md text-gray w-full lg:max-w-md xl:max-w-xl pt-2 lg:pt-0">
            {serviceData.description}
          </p>
        </div>
        <div className="mt-2 md:mt-6">
        {serviceData?.data.map((ele:ServiceProps,index:number)=>{
            return(
                <div key={index}>
                   <Services details={ele} />
                </div>
            )
        })}
          
        </div>
      </div>
    </section>
  );
}

const Services = ({ details }: { details: ServiceProps }) => {
  return (
    <div>
     
        <div  className=" py-4 md:my-0  flex flex-col gap-2 md:flex-row md:justify-between md:items-center border-b-2 border-gray/40 w-full">
          <div className="md:my-4 ">
            <div className="flex gap-2  items-center">
              <div className="custom-text-base text-gray">{details.id}.</div>
              <h3 className="custom-text-xl font-medium text-transparent bg-clip-text bg-linear-to-t from-darkgreen from-35%  to-green">{details.heading}</h3>
            </div>
            <div>
               <p className="text-gray max-w-xs custom-text-md ps-0 md:ps-10 pt-2">{details.description}</p>
            </div>
           
          </div>
           <div className="flex gap-2 ">
              <p className="text-darkgreen font-bold custom-text-md text-nowrap">Know more </p>
              <Greenbutton color="#fff"/>
           </div>
        </div>

    </div>
  );
};



