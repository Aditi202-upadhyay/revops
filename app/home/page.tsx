
import GlobalService, { ParentsCom } from "../component/molecules/services";
import Solution from "./solution";
import Testimonial from "./testimonial";

export default function Home(){
    return(
        <div>
            
            <GlobalService serviceData={seviceData}/>
            <Solution/>
            <Testimonial/>
        </div>
    )
}



const seviceData: ParentsCom = {
    heading:"Level up your marketing,<br/> improve <i class='font-normal'>marketing ROI</i>",
    description:"We design and optimize growth systems that drive pipeline, align sales and marketing, and make revenue predictable. sales and marketing, and make revenue predictable.",
    data:[
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
   {
    id: "05",
    heading: "Conversion Rate Optimization",
    description:
      "Improved in ROI and more inbound sales calls, more qualified pipeline ",
    link: "#",
  },
   {
    id: "06",
    heading: "Generative Engine Optimization",
    description:
      "Improved in ROI and more inbound sales calls, more qualified pipeline ",
    link: "#",
  },
  {
    id: "07",
    heading: "Search Engine Optimization",
    description:
      "Improved in ROI and more inbound sales calls, more qualified pipeline ",
    link: "#",
  },
   {
    id: "08",
    heading: "Email Marketing",
    description:
      "Improved in ROI and more inbound sales calls, more qualified pipeline  ",
    link: "#",
  },
  
    ]
}
