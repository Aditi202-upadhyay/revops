import FAQ from "../component/molecules/faqQuestion";
import GlobalService, { ParentsCom } from "../component/molecules/services";
import Testimonial from "../home/testimonial";
import Work, { parentProp } from "../home/work";
import Banner from "./banner";

export default function D2C() {
  return (
    <>
      <Banner />
      <GlobalService serviceData={seviceData} />
      <Work data={workData} />
      <Testimonial />
      <FAQ />

    </>
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

  heading: "Case Studies",
  subHeading:
    "Level up your marketing,<br /> improve <i class='font-normal text-black'> marketing ROI</i>",
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