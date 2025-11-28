import FAQ from "../component/molecules/faqQuestion";
import Impact from "../home/impact";
import Testimonial from "../home/testimonial";
import Work, { parentProp } from "../home/work";
import Feature from "./feature";
import Process from "./process";
import WhyRevops from "./why-revops";

export default function Services(){
    return(
       <>
        <Impact/>
        {/* <WhyRevops/> */}
        <Process/>
        <Feature/>
        <Testimonial/>
        <Work data={workData}/>
        <FAQ/>
       </> 
    )
}


const workData:parentProp = {
  
    heading: "Case Studies",
    subHeading:
      "Level up your marketing,<br /> improve <i class='font-normal text-black'> marketing ROI</i>",
    details: [
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
    ],
  }