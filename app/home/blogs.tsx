import { Card } from "../blogs/02_allBlogs";
import { Heading } from "../component/atom/decorativeHeading";

export default function Blog() {
  return (
    <section className="blade-bottom-padding-lg">
      <div className="w-container-sm">
        <div className="flex justify-center items-center flex-col text-center">
          <Heading title="Blogs" color="#000" />
          <h2 className="custom-text-3xl font-bold text-black py-2">
            100+ <i className="font-normal">Companies</i> trusted us <br /> to
            improve their <i className="font-normal">marketing</i>
          </h2>
          <p className="text-black custom-text-md max-w-lg pt-2">
            We design and optimize growth systems that drive pipeline, align
            sales and marketing, and make revenue predictable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 blade-top-margin-sm">
          {blogs.map((ele, index) => {
            return <Card key={index} {...ele} />;
          })}
        </div>
      </div>
    </section>
  );
}

const blogs = [
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
];
