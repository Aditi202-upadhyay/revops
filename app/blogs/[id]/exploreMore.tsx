import { Card } from "../02_allBlogs";

export default function ExploreMore(){
    return(
        <section className="blade-top-padding-lg blade-bottom-padding-lg">
            <div className="w-container-xl">
                <h3 className="font-semibold text-black custom-text-3xl text-center font-family-helvetica-now">Explore more <i className="font-normal font-playfair">ideas and <br/> insights</i> crafted by marketers</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 blade-top-margin-sm">
                  {exploreData.map((element,index)=>{
                   return(
                     <Card key={index} {...element} />
                   )
                  })}
                </div>
            </div>
        </section>
    )
}

type cardProps ={
 image:string;
 title:string;
 date:string;
 lik:string;
}

const exploreData = [
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
]