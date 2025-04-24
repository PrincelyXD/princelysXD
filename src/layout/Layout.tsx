import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { useRef } from "react";

export type SectionRefs = {
  work: React.RefObject<HTMLDivElement | null>;
  safari: React.RefObject<HTMLDivElement | null>;
  experience: React.RefObject<HTMLDivElement | null>;
  skill: React.RefObject<HTMLDivElement | null>;
  testimonials: React.RefObject<HTMLDivElement | null>;
};

const Layout = () => {
  const workRef = useRef<HTMLDivElement | null>(null);
  const safariRef = useRef<HTMLDivElement | null>(null)
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const skillRef = useRef<HTMLDivElement | null>(null);
  const testimonialsRef = useRef<HTMLDivElement | null>(null);

  const sectionRefs: SectionRefs = {
    work: workRef,
    safari: safariRef,
    experience: experienceRef,
    skill: skillRef,
    testimonials: testimonialsRef,
  };

  return (
    <div className=" h-fit w-full max-w-[1600px] mx-auto min-w-[344px]">
      <Nav
        work={workRef}
        safari={safariRef}
        experience={experienceRef}
        skill={skillRef}
        testimonials={testimonialsRef}
      />
      <Outlet context={sectionRefs} />
      <Footer />
    </div>
  );
};

export default Layout;
