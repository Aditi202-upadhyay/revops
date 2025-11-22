import { Heading } from "../component/atom/decorativeHeading";
import ContactUsForm from "./02_contactUsForm";

export default function ContactUs() {
  return (
    <section className="mt-28 lg:mt-40 ">
      <div className="w-container  h-fit flex flex-col lg:flex-row  lg:justify-between ">
        <div className=" w-full  flex flex-col justify-center items-center lg:justify-start lg:items-start lg:w-[60%] mb-4 md:mb-8">
          <Heading title="Get in touch" />
          <h4 className="text-black font-bold custom-text-3xl py-4 text-center lg:text-left">
            Have a <span className="italic font-normal">Project</span> in mind?
            <br /> improve their{" "}
            <span className="italic font-normal">marketing</span>
          </h4>
          <p className="text-gray text-center lg:text-left">
            Your vision deserves a partner who listens, challenges <br /> and
            elevates. Share your project with us.
          </p>
        </div>
        <div className="p-[2px] bg-linear-to-br from-35% from-green/20 lg:from-green/35 via-transparent to-white w-full lg:w-[60%] rounded-xl">
          <div className="  bg-white p-4 md:p-6 xl:p-9 rounded-xl relative">
            <ContactUsForm />
          </div>
        </div>
      </div>
    </section>
  );
}
