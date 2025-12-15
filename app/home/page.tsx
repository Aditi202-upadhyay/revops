

import GlobalService, { ParentsCom } from "../component/molecules/services";
import Banner from "./banner";
import Blog from "./blogs";
import Impact from "./impact";
import Solution from "./solution";
import Testimonial from "./testimonial";
import Work, { parentProp } from "./work";

export default function Home() {
  return (
    <div>
      <Banner />
      <Impact />
      <GlobalService serviceData={seviceData} />
      <Solution />
      <Work data={workData} />
      <Testimonial />
      <Blog />

    </div>
  )
}



const seviceData: ParentsCom = {
  heading: "Level up your marketing,<br class='block'/> improve <i class='font-normal font-playfair'>marketing ROI</i>",
  description: "We design and optimize growth systems that drive pipeline, align sales and marketing, and make revenue predictable. sales and marketing, and make revenue predictable.",
  data: [
    {
      id: "01",
      heading: "Performance Marketing",
      description:
        "Improved in ROI and more inbound sales calls, more qualified pipeline",
      link: "#",
      image: "/assets/blogs/blogs1.png",
      referId: "performance-marketing"
    },
    {
      id: "02",
      heading: "Lead Generation",
      description:
        "Improved in ROI and more inbound sales calls, more qualified pipeline ",
      link: "#",
      image: "/assets/blogs/blogs1.png",
      referId: "lead-generation"
    },
    {
      id: "03",
      heading: "Account-Based Marketing",
      description:
        "Improved in ROI and more inbound sales calls, more qualified pipeline ",
      link: "#",
      image: "/assets/blogs/blogs1.png",
      referId: "account-based-marketing"

    },
    {
      id: "04",
      heading: "Search Engine Optimization",
      description:
        "Improved in ROI and more inbound sales calls, more qualified pipeline  ",
      link: "#",
      image: "/assets/blogs/blogs1.png",
      referId: "search-engine-optimization"
    },
    {
      id: "05",
      heading: "Generative Engine Optimization",
      description:
        "Improved in ROI and more inbound sales calls, more qualified pipeline ",
      link: "#",
      image: "/assets/blogs/blogs1.png",
      referId: "generative-engine-optimization"
    },
    {
      id: "06",
      heading: "Conversion Rate Optimization",
      description:
        "Improved in ROI and more inbound sales calls, more qualified pipeline ",
      link: "#",
      image: "/assets/blogs/blogs1.png",
      referId: "conversion-rate-optimization"
    },
    {
      id: "07",
      heading: "Email Marketing",
      description:
        "Improved in ROI and more inbound sales calls, more qualified pipeline ",
      link: "#",
      image: "/assets/blogs/blogs1.png",
      referId: "email-marketing"
    },
    {
      id: "08",
      heading: "WhatsApp Marketing",
      description:
        "Improved in ROI and more inbound sales calls, more qualified pipeline  ",
      link: "#",
      image: "/assets/blogs/blogs1.png",
      referId: "whatsapp-marketing"
    },

  ]
}

const workData: parentProp = {

  heading: "Our Work",
  subHeading:
    "Level up your marketing,<br /> improve <i class='font-normal font-playfair text-black'> marketing ROI</i>",
  details: [
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
