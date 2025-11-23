"use client";
import { useState } from "react";
import  { TabProps } from "../component/atom/tab";
import Image from "next/image";
import { CardProps } from "../blogs/02_allBlogs";
import { Greenbutton } from "../component/atom/buttons";

const tabs = [
  "Explore all",
  "Corporate",
  "Education",
  "Fashion",
  "Fitness & Sport",
  "Health",
];

type CaseStudyProps = {
  category: string;
  details: {
    image: string;
    date: string;
    heading: string;
    link: string;
  }[];
};

const caseStudyDetails: CaseStudyProps[] = [
  {
    category: "Explore all",
    details: [
      {
        image: "/assets/caseStudy/caseStudy1.jpg",
        date: "2025",
        heading:
          "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
        link: "/caseStudy/1",
      },
      {
        image: "/assets/caseStudy/caseStudy2.jpg",
        date: "2025",
        heading:
          "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
        link: "/caseStudy/1",
      },
      {
        image: "/assets/caseStudy/caseStudy3.png",
        date: "2025",
        heading:
          "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
        link: "/caseStudy/1",
      },
      {
        image: "/assets/caseStudy/caseStudy3.png",
        date: "2025",
        heading:
          "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
        link: "/caseStudy/1",
      },
      {
        image: "/assets/caseStudy/caseStudy3.png",
        date: "2025",
        heading:
          "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
        link: "/caseStudy/1",
      },
      {
        image: "/assets/caseStudy/caseStudy3.png",
        date: "2025",
        heading:
          "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
        link: "/caseStudy/1",
      },
      {
        image: "/assets/caseStudy/caseStudy3.png",
        date: "2025",
        heading:
          "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
        link: "/caseStudy/1",
      },
      {
        image: "/assets/caseStudy/caseStudy3.png",
        date: "2025",
        heading:
          "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
        link: "/caseStudy/1",
      },
    ],
  },
  {
    category: "Corporate",
    details: [
      {
        image: "/assets/caseStudy/caseStudy1.jpg",
        date: "2025",
        heading:
          "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
        link: "/caseStudy/1",
      },
      {
        image: "/assets/caseStudy/caseStudy2.jpg",
        date: "2025",
        heading:
          "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
        link: "/caseStudy/1",
      },
      {
        image: "/assets/caseStudy/caseStudy3.png",
        date: "2025",
        heading:
          "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
        link: "/caseStudy/1",
      },
    ],
  },
  {
    category: "Education",
    details: [
      {
        image: "/assets/caseStudy/caseStudy1.jpg",
        date: "2025",
        heading:
          "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
        link: "/caseStudy/1",
      },
      {
        image: "/assets/caseStudy/caseStudy2.jpg",
        date: "2025",
        heading:
          "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
        link: "/caseStudy/1",
      },
      {
        image: "/assets/caseStudy/caseStudy3.png",
        date: "2025",
        heading:
          "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
        link: "/caseStudy/1",
      },
    ],
  },
  {
    category: "Fashion",
    details: [
      {
        image: "/assets/caseStudy/caseStudy1.jpg",
        date: "2025",
        heading:
          "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
        link: "/caseStudy/1",
      },
      {
        image: "/assets/caseStudy/caseStudy2.jpg",
        date: "2025",
        heading:
          "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
        link: "/caseStudy/1",
      },
      {
        image: "/assets/caseStudy/caseStudy3.png",
        date: "2025",
        heading:
          "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
        link: "/caseStudy/1",
      },
    ],
  },
  {
    category: "Fitness & Sport",
    details: [
      {
        image: "/assets/caseStudy/caseStudy1.jpg",
        date: "2025",
        heading:
          "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
        link: "/caseStudy/1",
      },
      {
        image: "/assets/caseStudy/caseStudy2.jpg",
        date: "2025",
        heading:
          "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
        link: "/caseStudy/1",
      },
      {
        image: "/assets/caseStudy/caseStudy3.png",
        date: "2025",
        heading:
          "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
        link: "/caseStudy/1",
      },
    ],
  },
  {
    category: "Health",
    details: [
      {
        image: "/assets/caseStudy/caseStudy1.jpg",
        date: "2025",
        heading:
          "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
        link: "/caseStudy/1",
      },
      {
        image: "/assets/caseStudy/caseStudy2.jpg",
        date: "2025",
        heading:
          "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
        link: "/caseStudy/1",
      },
      {
        image: "/assets/caseStudy/caseStudy3.png",
        date: "2025",
        heading:
          "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
        link: "/caseStudy/1",
      },
    ],
  },
];

export default function AllCaseStudy() {
  const [activeTab, setActiveTab] = useState<string>("Explore all");

  const activeData =
    caseStudyDetails.find((item) => item.category === activeTab)?.details || [];
  return (
    <section className="blade-top-margin-lg  blade-bottom-margin-lg">
      <div className="w-container-xl">
        <Tabs allTabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12 blade-top-margin-sm">
          {activeData?.map((blog, index) => {
            const isFullWidth = (index + 1) % 5 === 0; 
            const addMarginTop = (index + 1) % 2 === 0; 

            return (
              <div
                key={index}
                className={`${isFullWidth ? "col-span-2" : ""}   ${addMarginTop ? "md:mt-12 2xl:mt-10" : ""}`}
              >
                <Card {...blog} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const Card = ({ image, date, heading, link }: CardProps) => {
  return (
    <div>
      <div className="relative w-full h-[18rem] md:h-[25rem] xl:h-[35rem]">
        <Image
          src={image}
          alt="Case Study"
          fill
          className="object-cover rounded-[24px]"
        />
      </div>

      <div className="flex  gap-4 mt-4">
        <p className="text-base">{date}</p>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 bg-green"></div>
          <p className="text-black text-lg ">Prestige Drinks</p>
        </div>
      </div>

      <h3 className=" custom-text-base py-2">{heading}</h3>
      <a
        className="text-darkgreen font-bold custom-text-md flex gap-2 py-4"
        href={link}
      >
        View full project
        <Greenbutton color="#fff" />
      </a>
    </div>
  );
};


const  Tabs = ({ allTabs, activeTab, onTabChange }: TabProps)=> {
  return (
    <div className="overflow-x-hidden md:overflow-visible w-fit px-2 lg:px-6 py-3 shadow-md bg-white rounded-full mx-auto group sticky top-0 z-[999]">
      <div className="flex gap-1 xl:gap-6 custom-tag-text text-black font-normal justify-center">
        {allTabs.map((tab: string, index: number) => (
          <button
            key={index}
            onClick={() => onTabChange(tab)}
            className={`transition-all text-xs md:text-lg cursor-pointer px-2  lg:px-6 py-1.5 md:py-3 rounded-full flex items-center gap-1 md:gap-1.5
              ${
                activeTab === tab
                  ? "bg-green text-white"
                  : "text-black  "
              }
            `}
          >
            {/* Dot indicator for active tab */}
            <span
              className={` w-1 h-1 md:w-2 md:h-2 bg-white rounded-full transition-opacity ${
                activeTab === tab ? "opacity-100" : "opacity-0"
              }`}
            ></span>
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}