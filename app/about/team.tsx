import { Heading } from "../component/atom/decorativeHeading";
import Image from 'next/image'


export default function Team() {
  return (
    <section className="blade-top-padding-lg">
      <div>
       
          <div className="flex justify-center items-center flex-col">
            <Heading title="Our Team" color="#014715" />
            <h2 className="custom-text-3xl font-bold text-center text-black py-2 font-family-helvetica-now">
             A<i className="font-normal font-family-playfair">{" "}small team  </i>{" "}
              that delivers big, <br/>
              <i className="font-normal font-family-playfair"> measurable results</i>
            </h2>
         
          </div>
           
           <div className="flex flex-row gap-6 justify-center items-center mt-6">
             {data.map((ele,index)=>{
                return(
                    <div key={index} className="">
                      <CardUi data={ele}/>
                    </div>
                   
                )
             })}
           </div>
      </div>
    </section>
  );
}


const CardUi = ({ data }: { data: profileProps }) => {
  return (
    <div className="relative w-[21rem] h-[24rem] rounded-xl shadow-md backdrop-blur-sm overflow-hidden bg-white">
      <Image 
        src={data.image} 
        alt={data.name} 
        fill 
        className="object-contain"
      />

      {/* TEXT OVERLAY */}
      {/* <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-xl font-semibold">{data.name}</h3>
        <p className="text-sm opacity-80">{data.designation}</p>
      </div> */}
    </div>
  );
};



type profileProps = {
    image:string;
    name:string;
    designation:string;
    linkedinUrl:string;
}

const data= [
    {
      image:"/assets/about/team.png",
      name:"Sanskar Dubey",
      designation:"Co-founder",
      linkedinUrl:"#"
    },
    {
      image:"/assets/about/team.png",
      name:"Atharva Sharma",
      designation:"Co-founder",
      linkedinUrl:"#"
    },
    {
      image:"/assets/about/team.png",
      name:"Atharva Sharma",
      designation:"Co-founder",
      linkedinUrl:"#"
    },
]