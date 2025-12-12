"use client";
import { useState } from "react";
import { Heading } from "../atom/decorativeHeading";
import { GoArrowDownRight } from "react-icons/go";
import { GoArrowUpRight } from "react-icons/go";
import React from "react";

type FaqProps = {
  question: string;
  answer: string;
};

const faqQuestion: FaqProps[] = [
  {
    question: "1. Why do I need to create a website?",
    answer:
      "A website helps you build online presence, credibility, and reach more customers.",
  },
  {
    question: "2. Can you turn our internal experts into thought leaders?",
    answer:
      "Yes, we create content strategies that highlight your internal team's expertise.",
  },
  {
    question: "3. What if we already have an in-house creative team?",
    answer:
      "We collaborate with in-house teams and act as an extended support system.",
  },
  {
    question: "4. Do you help with social media distribution?",
    answer:
      "Yes, we optimize and distribute your content across multiple platforms.",
  },
  {
    question: "5. Why do I need to create a website?",
    answer:
      "A website is essential for brand visibility, trust, and conversions.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const handleClick = (index:number) => {
    setOpen(open===index?null:index);
  };
  return (
    <section className="blade-bottom-padding-lg ">
      <div className="w-container-xs">
        <div className="flex justify-center items-center flex-col text-center">
          <Heading title="Frequently asked questions" color="#014715" />
          <h2 className="custom-text-3xl font-bold text-black py-2 font-family-helvetica-now">
            Find the{" "}
            <i className="font-normal font-playfair">
              answers to your <br />
              questions
            </i>{" "}
            about Revops.
          </h2>
        </div>

        <div className=" mt-6 md:mt-8 xl:mt-16">
          {faqQuestion.map((ele, index) => (
            <div key={index} className="my-4">
             <FAQUi
                data={ele}
                isOpen={open === index}
                onClick={() => handleClick(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQUi = React.memo(function FAQUi({
  data,
  isOpen,
  onClick,
}: {
  data: FaqProps;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border border-gray/70 rounded-xl  p-2 lg:p-4 ">
      <div
        className="flex justify-between items-center cursor-pointer px-2"
        onClick={onClick}
      >
        <h4 className="custom-text-md text-black font-medium font-family-helvetica-now">
          {data.question}
        </h4>

        <div className="p-px  rounded-full bg-linear-to-r from-green to-darkgreen">
          <button className="w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-white lg:text-2xl text-darkgreen flex items-center justify-center hover:bg-darkgreen hover:text-white transition-all">
            {isOpen ? <GoArrowUpRight /> : <GoArrowDownRight />}
          </button>
        </div>
      </div>

        {isOpen && (
            <p className="custom-tag-text text-gray font-normal  animate-fade-in font-family-helvetica-now">
            {data.answer}
            </p>
        )}
    </div>
  );
});

