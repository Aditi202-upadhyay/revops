import { Heading } from "../component/atom/decorativeHeading";
import Image from 'next/image'
import { FaLinkedinIn } from "react-icons/fa";

export default function Team() {
  return (
    <section className="bg-[#E8E8E7] blade-bottom-padding-lg"> {/* Approximating the light grey background from image */}
      <div className="container mx-auto px-4">

        <div className="flex justify-center items-center flex-col mb-8 md:mb-12">
          <Heading title="Our Team" color="#26DF04" /> {/* Matched the bright green from the decorative heading icon */}
          <h2 className="custom-text-3xl font-bold text-center text-black mt-4 font-family-helvetica-now leading-tight">
            A <span className="font-normal font-playfair italic">small team</span> that delivers big,<br />
            <span className="font-normal font-playfair italic">measurable results</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center md:mt-16">

          {data.map((ele, index) => {
            return (
              <div key={index} className={`relative transition-transform duration-300 ${index === 1 ? 'lg:-translate-y-16  z-10' : 'z-0'}`}>
                <CardUi data={ele} />
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
   <div className="lg:mt-6 relative w-full sm:w-[280px] h-[340px] lg:w-[300px] lg:h-[360px] rounded-2xl overflow-hidden bg-white border border-[#26DF04]/30 shadow-xl group">

      <Image
        src={data.image}
        alt={data.name}
        fill
        className="object-cover object-top"
      />

      {/* GLASS OVERLAY */}
      <div className="absolute bottom-3 left-3 right-3 bg-black/10 backdrop-blur-md rounded-xl p-4 flex justify-between items-center border border-white/10">
        <div>
          <h3 className="text-white custom-text-md font-medium font-family-helvetica-now">{data.name}</h3>
          <p className="text-white/60 text-base lg:text-lg mt-0.5">{data.designation}</p>
        </div>
        <a href={data.linkedinUrl} target="_blank" rel="noopener noreferrer" className=" p-2 rounded-lg">
          <FaLinkedinIn className="text-white text-xl" />
        </a>
      </div>
    </div>
  );
};



type profileProps = {
  image: string;
  name: string;
  designation: string;
  linkedinUrl: string;
}

const data = [
  {
    image: "/assets/about/team.png",
    name: "Sanskar Dubey",
    designation: "Co-founder",
    linkedinUrl: "#"
  },
  {
    image: "/assets/about/team.png",
    name: "Atharva Sharma",
    designation: "Co-founder",
    linkedinUrl: "#"
  },
  {
    image: "/assets/about/team.png",
    name: "Atharva Sharma",
    designation: "Co-founder",
    linkedinUrl: "#"
  },
]