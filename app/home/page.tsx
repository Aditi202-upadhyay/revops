

import GlobalService, { ParentsCom } from "../component/molecules/services";
import Blog from "./blogs";
import Impact from "./impact";
import Solution from "./solution";
import Testimonial from "./testimonial";
import Work, { parentProp } from "./work";

export default function Home(){
    return(
        <div>
            <Impact/>
            <GlobalService serviceData={seviceData}/>
            <Solution/>
            <Work data={workData}/>
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

const workData:parentProp = {
  
    heading: "Our Work",
    subHeading:
      "Level up your marketing,<br /> improve <i class='font-normal text-black'> marketing ROI</i>",
    details: [
      {
        image: "//assets/blogs/blogs1.png",
        logo: "/assets/home/logo.png",
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
        image: "/assets/blogs/blogs1.png",
        logo: "/assets/home/logo.png",
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
        image: "/assets/blogs/blogs1.png",
        logo: "/assets/home/logo.png",
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
