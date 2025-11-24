
import GlobalService, { ParentsCom } from "../component/molecules/services";
import Blog from "./blogs";
import Impact from "./impact";
import Solution from "./solution";
import Testimonial from "./testimonial";
import Work from "./work";

export default function Home(){
    return(
        <div>
            <Impact/>
            <GlobalService serviceData={seviceData}/>
            <Solution/>
            <Work/>
            <Testimonial/>
            <Blog/>
        </div>
    )
}



const seviceData: ParentsCom = {
    heading:"Level up your marketing,<br class='block'/> improve <i class='font-normal'>marketing ROI</i>",
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
