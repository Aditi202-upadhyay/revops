import Testimonial from "../home/testimonial";
import Feature from "../services/feature";
import Banner from "./banner";
import AboutImpact from "./impact";
import ProcessSection from "./process";
import Team from "./team";

export default function About() {
  return (
    <div>
      <Banner />
      <AboutImpact />
      <ProcessSection/>
      <Feature />
      <Team />
      <Testimonial />
    </div>
  );
}
