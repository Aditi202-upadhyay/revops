"use client";
import { useState, useRef, useEffect } from "react";
import { TabProps } from "../component/atom/tab";
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
      }
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 md:gap-x-6 gap-y-8 md:gap-y-12 blade-top-margin-sm">
          {activeData?.map((blog, index) => {
            const isFullWidth = (index + 1) % 5 === 0;
            const addMarginTop = (index + 1) % 2 === 0;

            return (
              <div
                key={index}
                className={`${isFullWidth ? "md:col-span-2" : ""}   ${addMarginTop ? "md:mt-12 2xl:mt-10" : ""}`}
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
      <div className="relative w-full h-[20rem] md:h-[25rem] xl:h-[35rem]">
        <Image
          src={image}
          alt="Case Study"
          fill
          className="object-cover rounded-lg md:rounded-[24px]"
        />
      </div>

      <div className="flex flex-wrap  gap-2 md:gap-4 mt-4">
        <p className="font-family-helvetica-now text-md text-black">{date}</p>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 bg-green"></div>
          <p className="font-family-helvetica-now text-md text-black ">Prestige Drinks</p>
        </div>
      </div>

      <h3 className=" font-family-helvetica-now text-[15px] sm:text-base md:custom-text-base py-2 font-medium line-clamp-2 md:line-clamp-none">{heading}</h3>
      <a
        className="font-family-helvetica-now text-darkgreen font-bold custom-text-md flex gap-2 md:py-4 py-2"
        href={link}
      >
        View full project
        <Greenbutton color="#fff" style={{ background: "linear-gradient(90deg, #2CFE05 -23.73%, #0D5001 186.15%)" }} />
      </a>
    </div>
  );
};


const Tabs = ({ allTabs, activeTab, onTabChange }: TabProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeElement = scrollContainerRef.current.querySelector(`[data-tab="${activeTab}"]`) as HTMLElement;
      if (activeElement) {
        const container = scrollContainerRef.current;
        const scrollLeft = activeElement.offsetLeft - container.offsetWidth / 2 + activeElement.offsetWidth / 2;

        container.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        });
      }
    }
  }, [activeTab]);

  return (
    <div ref={scrollContainerRef} className="w-[95vw] md:w-fit px-2 lg:px-6 py-3 shadow-md bg-white rounded-full mx-auto group sticky top-0 z-[999] overflow-x-auto md:overflow-visible no-scrollbar scroll-smooth">
      <div className="flex gap-1 xl:gap-6 custom-tag-text text-black font-normal md:justify-center w-max md:w-full">
        {allTabs.map((tab: string, index: number) => (
          <button
            key={index}
            data-tab={tab}
            onClick={() => onTabChange(tab)}
            className={`transition-all text-md md:text-lg cursor-pointer px-2 lg:px-6 py-1.5 md:py-3 rounded-full flex items-center gap-1 md:gap-1.5 flex-shrink-0 whitespace-nowrap
              ${activeTab === tab
                ? "bg-green text-white"
                : "text-black  "
              }
            `}
          >
            {/* Dot indicator for active tab */}
            <span
              className={` w-1 h-1 md:w-2 md:h-2 bg-white rounded-full transition-opacity ${activeTab === tab ? "opacity-100" : "opacity-0"
                }`}
            ></span>
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};