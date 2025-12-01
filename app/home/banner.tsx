
import { Heading } from "../component/atom/decorativeHeading";
import ClientSwiper from "../component/molecules/clientSwiper";

export default function Banner(){
    return(
         <section>
            <div  className="bg-black relative w-full h-[30rem] md:h-[34rem] xl:h-screen overflow-hidden">
                {/* <div className="absolute right-0 top-0 w-[45rem] h-[45rem] bg-[radial-gradient(circle_at_top_right,#26DF04,transparent_80%)] "></div> */}
                <div className="absolute inset-0 ">
                    <video src="/assets/home/bannerbgVideo.mp4" autoPlay loop muted className="opacity-60 w-full h-full object-cover"/>
                    <div className="absolute inset-0 bg-gradient-to-l from-green  to-[#26DF04] mix-blend-color-burn"></div>
                </div>

                <div
          className="absolute -top-44 -right-36 rounded-full opacity-20 md:opacity-40 "
          style={{
            width: "650px",
            height: "750px",
            background: `radial-gradient(circle at 90% 20%, #26DF04 0%, #26DF04 40%, transparent 80%)`,
            filter: "blur(40px)",
          }}
        />
                
                
             <div className="h-full flex flex-col justify-center items-center text-center px-4 z-10">
               <div className=" flex flex-col justify-center items-center">
                <strong className="font-family-helvetica-now font-bold text-white custom-text-3xl animate-fade-up-slower">We turn your <i className="italic font-family-playfair font-normal">marketing into <br/>customers,</i> not just </strong>
                    <p className="text-white/60 py-4 custom-text-md font-family-helvetica-now max-w-xl animate-fade-up-slower">We design and optimize growth systems that drive pipeline, align sales & marketing, and make revenue predictable.</p>
                 </div>
             </div> 

             <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center justify-center z-20">     
                <Heading title="Our Clients" color="#FFFFFF" />
                <div className="w-full md:w-[50%] mt-4">
                    <ClientSwiper />
                </div>
             </div>
            </div> 
         </section>
    )
}
