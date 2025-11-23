import { Heading } from "../component/atom/decorativeHeading";

export default function Banner(){
    return(
         <section>
            <div style={{backgroundImage:"url('/assets/blogs/backgroundImage.png')"}} className="relative object-cover bg-no-repeat bg-center w-ful h-[30rem] md:h-[35rem] xl:h-screen">
            <div className="absolute inset-0 buttongradient bg-lightDarkGreen opacity-95"></div>
             <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
               <div className=" flex flex-col justify-center items-center">
                <Heading title="Blogs" color="#26DF04"/>
               
                     <i className="custom-text-3xl py-4 text-white italic text-center">Learn, grow, <strong className="not-italic">and</strong> level up <br/><strong className="not-italic">your marketing</strong></i>
                 </div>
             </div>
            </div> 
         </section>
    )
}