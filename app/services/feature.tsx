import { Heading } from "../component/atom/decorativeHeading";
import FeatureSwiper from "../component/molecules/featureSwiper";



export default function Feature() {
  return (
    <section className="blade-bottom-padding-lg">
      <div>
        <div className=" flex justify-center items-center flex-col text-center">
          <Heading title="Featured in" color="#26DF04" />
          <h2 className="custom-text-3xl font-bold text-black py-2">
            100+ <i className="font-normal font-playfair">Companies</i> trusted us <br /> to
            improve their <i className="font-normal">marketing</i>
          </h2>
        </div>
        <div>
            <FeatureSwiper data={featureData}/>
        </div>
      </div>
    </section>
  );
}



export type featureProps={
    logo:string;
    name:string;
}


const featureData:featureProps[] =[
    {
      logo:"/assets/services/feature/blomer.png",
      name:"Blomer"
    },
     {
      logo:"/assets/services/feature/bridge.png",
      name:"Bridge"
    }, 
    {
      logo:"/assets/services/feature/blomer.png",
      name:"Blomer"
    },
     {
      logo:"/assets/services/feature/bridge.png",
      name:"Bridge"
    }, {
      logo:"/assets/services/feature/blomer.png",
      name:"Blomer"
    },
     {
      logo:"/assets/services/feature/bridge.png",
      name:"Bridge"
    }, {
      logo:"/assets/services/feature/blomer.png",
      name:"Blomer"
    },
   
]