  "use client"
  import { useState } from "react";
  import Tabs from "../component/atom/tab";
  import Image from "next/image"
import { Greenbutton } from "../component/atom/buttons";
import Link from "next/link";

  type BlogsProps = {
    category: string;
    details: {
      image: string;
      date: string;
      heading: string;
      link: string;
    }[];
  };

  const blogsDetails: BlogsProps[] = [
    {
      category: "All articles",
      details: [
        {
          image: "/assets/blogs/blogs1.png",
          date: "25 September, 2025",
          heading:
            "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
          link: "/blogs/1",
        },
        {
          image: "/assets/blogs/blogs1.png",
          date: "25 September, 2025",
          heading:
            "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
           link: "/blogs/1",
        },
        {
          image: "/assets/blogs/blogs1.png",
          date: "25 September, 2025",
          heading:
            "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
           link: "/blogs/1",
        },
        {
          image: "/assets/blogs/blogs1.png",
          date: "25 September, 2025",
          heading:
            "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
           link: "/blogs/1",
        },
        {
          image: "/assets/blogs/blogs1.png",
          date: "25 September, 2025",
          heading:
            "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
           link: "/blogs/1",
        },
        {
          image: "/assets/blogs/blogs1.png",
          date: "25 September, 2025",
          heading:
            "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
           link: "/blogs/1",
        },
        {
          image: "/assets/blogs/blogs1.png",
          date: "25 September, 2025",
          heading:
            "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
           link: "/blogs/1",
        },
        {
          image: "/assets/blogs/blogs1.png",
          date: "25 September, 2025",
          heading:
            "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
           link: "/blogs/1",
        },
        {
          image: "/assets/blogs/blogs1.png",
          date: "25 September, 2025",
          heading:
            "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
           link: "/blogs/1",
        },
      ],
    },
    {
      category: "Performance Marketing",
      details: [
        {
          image: "/assets/blogs/blogs1.png",
          date: "25 September, 2025",
          heading:
            "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
           link: "/blogs/1",
        },
        {
          image: "/assets/blogs/blogs1.png",
          date: "25 September, 2025",
          heading:
            "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
           link: "/blogs/1",
        },
        {
          image: "/assets/blogs/blogs1.png",
          date: "25 September, 2025",
          heading:
            "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
           link: "/blogs/1",
        },
        {
          image: "/assets/blogs/blogs1.png",
          date: "25 September, 2025",
          heading:
            "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
           link: "/blogs/1",
        },
        {
          image: "/assets/blogs/blogs1.png",
          date: "25 September, 2025",
          heading:
            "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
           link: "/blogs/1",
        },
        {
          image: "/assets/blogs/blogs1.png",
          date: "25 September, 2025",
          heading:
            "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
           link: "/blogs/1",
        },
        {
          image: "/assets/blogs/blogs1.png",
          date: "25 September, 2025",
          heading:
            "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
           link: "/blogs/1",
        },
        {
          image: "/assets/blogs/blogs1.png",
          date: "25 September, 2025",
          heading:
            "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
           link: "/blogs/1",
        },
        {
          image: "/assets/blogs/blogs1.png",
          date: "25 September, 2025",
          heading:
            "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
           link: "/blogs/1",
        },
      ],
    },
    {
      category: "Lead Generation",
      details: [
        {
          image: "/assets/blogs/blogs1.png",
          date: "25 September, 2025",
          heading:
            "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
           link: "/blogs/1",
        },
        {
          image: "/assets/blogs/blogs1.png",
          date: "25 September, 2025",
          heading:
            "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
           link: "/blogs/1",
        },
        {
          image: "/assets/blogs/blogs1.png",
          date: "25 September, 2025",
          heading:
            "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
           link: "/blogs/1",
        },
        {
          image: "/assets/blogs/blogs1.png",
          date: "25 September, 2025",
          heading:
            "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
           link: "/blogs/1",
        },
        {
          image: "/assets/blogs/blogs1.png",
          date: "25 September, 2025",
          heading:
            "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
           link: "/blogs/1",
        },
        {
          image: "/assets/blogs/blogs1.png",
          date: "25 September, 2025",
          heading:
            "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
           link: "/blogs/1",
        },
        {
          image: "/assets/blogs/blogs1.png",
          date: "25 September, 2025",
          heading:
            "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
           link: "/blogs/1",
        },
        {
          image: "/assets/blogs/blogs1.png",
          date: "25 September, 2025",
          heading:
            "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
           link: "/blogs/1",
        },
        {
          image: "/assets/blogs/blogs1.png",
          date: "25 September, 2025",
          heading:
            "Why “Vibe Coding” Won’t Cut It: AiSpecify is the Lovable for Enterprise Development",
           link: "/blogs/1",
        },
      ],
    },
  ];

  export type tabsProps=string[];

  const  tabs = ["All articles" ,"Performance Marketing" ,"Lead Generation"]

 export default function AllBlogs() {
  const [activeTab, setActiveTab] = useState<string>("All articles");

  const activeTabData = blogsDetails.find((blog) => blog.category === activeTab);

  return (
    <section className="blade-top-margin-sm blade-bottom-padding-lg">
      <div className="w-container-xl">
        <Tabs allTabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="blade-top-padding-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
          {activeTabData?.details.map((blog, index) => (
            <Card key={index} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
}




 export type CardProps = {
    image: string;
    date: string;
    heading: string;
    link: string;
  };

export  const Card = ({ image, date, heading, link }: CardProps) => {
  return (
    <Link href={link}>
      <div className="relative h-[16rem] xl:h-[20rem]">
        <Image
          src={image}
          fill
           loading="eager"
          className="object-cover rounded-md"
          alt="Blog Image"
        />
      </div>
      <h5 className="text-gray custom-text-para py-2">{date}</h5>
      <p className="font-medium text-black custom-text-md">{heading}</p>
       <p className="text-darkgreen font-bold custom-text-para py-2 flex gap-2">
        Read more  <Greenbutton color="#fff" />
      </p>
    </Link>
  );
};

