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
  heading: "100+ <i class='font-normal'>Companies</i> trusted us <br class='block'/>  to improve their <i class='font-normal'>marketing</i>",
  description: "We design and optimize growth systems that drive pipeline, align sales and marketing, and make revenue predictable. sales and marketing, and make revenue predictable.",
  data: [
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
    }

  ]
}



const workData: parentProp = {

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