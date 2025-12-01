
import { Heading } from "../component/atom/decorativeHeading";

export default function Banner(){
    return(
         <section>
            <div style={{backgroundImage:"url('/assets/blogs/backgroundImage.png')"}} className="relative bg-cover bg-center bg-no-repeat w-full h-[30rem] md:h-[34rem] xl:h-screen">
             <div className="h-full flex flex-col justify-center items-center text-center px-4">
               <div className=" flex flex-col justify-center items-center">
                <Heading title="Blogs" color="#26DF04"/>
               
                     <i className="custom-text-3xl py-4 animate-fade-up-slower text-white italic text-center font-family-playfair">Learn, grow, <strong className="not-italic font-family-helvetica-now">and</strong> level up <br/><strong className="not-italic font-bold">your marketing</strong></i>
                 </div>
             </div>
            </div> 
         </section>
    )
}
