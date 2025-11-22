import { Greenbutton } from "@/app/component/atom/buttons";
import { SocialIcon } from "@/app/component/atom/socialicon";

export default function BlogsDetail() {
  return (
    <section className="blade-top-padding-lg blade-bottom-padding-lg">
      <div className="flex flex-col lg:flex-row gap-8 md:gap-18 w-container-xl">
        <div className="w-full lg:w-[40%] h-fit  lg:sticky  lg:top-4 flex gap-4 flex-col order-2 md:order-1">
          <div className="bg-linear-to-br from-10% from-green/50 via-white to-white w-full p-[2px] md:w-[22rem] xl:w-[26rem] rounded-xl">
            <div className="bg-white rounded-xl">
              <Points title="What Exactly Is Demand Generation?"/>
              <Points title="How Is Demand Generation Different From Lead Generation?"/>

              <Points title="How Do Product Led Experiences Support Demand Generation?"/>

              <Points title="What Exactly Is Demand Generation?"/>

              <Points title="How Is Demand Generation Different From Lead Generation?"/>
              <Points title="How Do Product Led Experiences Support Demand Generation?"/>

            </div>
           </div>
           <div className="w-full  bg-linear-to-tl from-10%  from-green/50 via-white p-[2px] to-white md:w-[22rem] xl:w-[26rem]    rounded-xl">
            <div className=" rounded-xl bg-white p-4">
                <h3 className="custom-text-md font-medium">Share article</h3>
                  <div className="flex gap-2 my-2">
                      <SocialIcon icon="youtube" href="#" color="#26DF04"/>
                        <SocialIcon icon="linkedin" href="#" color="#26DF04"/>
                        <SocialIcon icon="twitter" href="#" color="#26DF04"/>
                          <SocialIcon icon="instagram" href="#" color="#26DF04"/>
                  </div>
              </div>
            </div>
            
        </div>
        <div className="w-full lg:w-[55%] order-1 md:order-2">
          <p className="text-gray custom-text-md">
            Want to build pipeline that will not dry up after this quarter?
            Start by creating demand, not just capturing it. That is the role of
            demand generation.
            <br /> <br />
            In B2B marketing, growth is not only about chasing the small group
            of buyers who are ready to sign today. Most of your market is not in
            a buying cycle yet. If you ignore them, you miss out on tomorrow’s
            opportunities.
            <br /> <br />
            That is where demand generation comes in. It is not about pushing
            for quick wins. It is about building awareness, trust and curiosity
            so your brand is the obvious choice when the need arises.
          </p>
          <h4 className="text-black font-semibold py-4 md:py-6 custom-text-xl">What Exactly Is Demand Generation?</h4>
          <p className="text-gray custom-text-base">
            Want to build pipeline that will not dry up after this quarter?
            Start by creating demand, not just capturing it. That is the role of
            demand generation.
            <br /> <br />
            In B2B marketing, growth is not only about chasing the small group
            of buyers who are ready to sign today. Most of your market is not in
            a buying cycle yet. If you ignore them, you miss out on tomorrow’s
            opportunities.
            <br /> <br />
            That is where demand generation comes in. It is not about pushing
            for quick wins. It is about building awareness, trust and curiosity
            so your brand is the obvious choice when the need arises.
          </p>

          <h4 className="text-black font-semibold py-4 md:py-6 custom-text-xl">How Is Demand Generation Different From Lead Generation?</h4>
          <p className="text-gray custom-text-md">
            In most markets only a small percentage of buyers are actively
            looking for a solution at any given time, often no more than five
            percent according to this research. If you focus all your efforts on
            this small group, you end up competing for the same prospects as
            everyone else, driving up costs and limiting your growth potential.
          </p>
          <ul className="text-gray custom-text-md list-disc list-inside ">
            <li className="[&::marker]:text-[#26DF04]">Publish bold content on LinkedIn</li>
            <li className="[&::marker]:text-[#26DF04]">PShare unique perspectives in industry media</li>
            <li className="[&::marker]:text-[#26DF04]">Run paid campaigns for reach and visibility</li>
          </ul>

          <h4 className="text-black font-semibold py-4 md:py-6 custom-text-xl">How Do Product Led Experiences Support Demand Generation?</h4>
          <p className="text-gray custom-text-md">
            In most markets only a small percentage of buyers are actively
            looking for a solution at any given time, often no more than five
            percent according to this research. If you focus all your efforts on
            this small group, you end up competing for the same prospects as
            everyone else, driving up costs and limiting your growth potential.
          </p>
          <ul className="text-gray custom-text-md list-disc list-inside">
            <li className="[&::marker]:text-[#26DF04]">Publish bold content on LinkedIn</li>
            <li className="[&::marker]:text-[#26DF04]">PShare unique perspectives in industry media</li>
            <li className="[&::marker]:text-[#26DF04]">Run paid campaigns for reach and visibility</li>
          </ul>
        </div>
      </div>
    </section>
  );
}


const Points =({title}:{title:string}) =>{
    return(
        <div className="flex flex-row gap-2 md:gap-4 items-center p-4">
             <div>
                 <Greenbutton color="#ffff" />
             </div>
             <h5 className="custom-text-md text-gray max-w-md">{title}</h5>
        </div>
    )
}

