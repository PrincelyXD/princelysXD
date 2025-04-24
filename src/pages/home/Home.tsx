import { useOutletContext } from "react-router-dom";
import HeroSection from "./HeroSection";
import WorkSection from "./WorkSection";
import { SectionRefs } from "../../layout/Layout";
import FeatureCards from "./FeatureCards";
import ExperienceSection from "./ExperienceSection";
import MyTechStack from "./MyTechStack";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

const Home = () => {
  const sectionsRefData = useOutletContext<SectionRefs>();

  return (
    <div>
      <HeroSection refData={sectionsRefData.work} />
      <WorkSection refData ={sectionsRefData.safari} />
      <FeatureCards />
      <ExperienceSection refData={sectionsRefData.experience} />
      <MyTechStack refData={sectionsRefData.skill} />
      <Testimonials refData={sectionsRefData.testimonials} />
      <Contact />
    </div>
  );
};

export default Home;

// npx gltfjsx computer-optimized.glb -T
