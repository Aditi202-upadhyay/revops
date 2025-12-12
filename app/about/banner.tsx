import { Heading } from "../component/atom/decorativeHeading";


export default function Banner() {
  return (
    <section className="blade-bottom-margin-lg">
      <div className="bg-black relative  h-[30rem] md:h-[34rem] lg:h-[95vh]  lg:rounded-3xl lg:m-4 overflow-hidden">

  <div
          className="absolute top-0 -left-[200px] md:-left-[300px] w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full opacity-40 blur-[80px] md:blur-[120px]"
          style={{
            background: "#26DF04",
          }}
        />

        {/* Right Gradient - Green */}
        <div
          className="absolute bottom-0 -right-[200px] md:-right-[300px] w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full opacity-40 blur-[80px] md:blur-[120px]"
          style={{
            background: "#26DF04",
          }}
        />

       
        <div className="h-full flex flex-col justify-center items-center text-center px-4 z-40">
          <div className=" flex flex-col justify-center items-center">
              <Heading title="About" color="#26DF04"/>
            <strong className="font-family-helvetica-now font-bold text-white custom-text-3xl animate-fade-up-slower">
             A Team of {" "}
              <i className="italic font-playfair font-normal">
                thinkers, makers,
                <br />
              </i>{" "}
              That Drive
              <i className="italic font-playfair font-normal">
                Direct Revenue.
              </i>{" "}
            </strong>
           
          </div>
        </div>

      
      </div>
    </section>
  );
}
