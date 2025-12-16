import { useRef, useEffect } from "react";
import { tabsProps } from "@/app/blogs/02_allBlogs";

export type TabProps = {
  allTabs: tabsProps;
  activeTab: string;
  onTabChange: (tab: string) => void;
};

export default function Tabs({ allTabs, activeTab, onTabChange }: TabProps) {
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
    <div ref={scrollContainerRef} className="w-[95vw] md:w-fit px-2 md:px-6 py-3 shadow-md bg-white rounded-full mx-auto group sticky top-0 z-[999] overflow-x-auto md:overflow-visible no-scrollbar scroll-smooth">
      <div className="flex gap-1 xl:gap-6 custom-tag-text text-black font-normal md:justify-center w-max md:w-full">
        {allTabs.map((tab: string, index: number) => (
          <button
            key={index}
            data-tab={tab}
            arial-label="tabs for navigation"
            onClick={() => onTabChange(tab)}
            className={`transition-all text-xs sm:text-[13px] font-family-helvetica-now md:text-lg cursor-pointer px-2 md:px-6 py-1.5 md:py-3 rounded-full flex items-center gap-1 md:gap-1.5 flex-shrink-0 whitespace-nowrap
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
}
