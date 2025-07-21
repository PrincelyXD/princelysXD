import { Link } from "react-router-dom";
import XD from "./XD";
import CustomPillButton from "./CustomPillButton";
import { navLinks } from "../resources/Constants";
import { SectionRefs } from "../layout/Layout";
import { useEffect, useRef, useState } from "react";

const Nav = ({
  work,
  safari,
  experience,
  skill,
  testimonials,
}: SectionRefs) => {
  const [isBottom, setIsBottom] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = safari.current;
      const nav = navRef.current;

      if (!section) return;

      const rect = section.getBoundingClientRect();
      const navHeight = nav?.offsetHeight || 0;
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      const isAtBottom = scrollTop + windowHeight >= fullHeight - 50;
      const isInSafariRange = rect.top <= navHeight && rect.bottom >= navHeight;

      if (isAtBottom || isInSafariRange) {
        setIsBottom(true);
      } else {
        setIsBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check in case user loads directly at bottom
    handleScroll();

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const handleScroll = (ref: React.RefObject<HTMLDivElement | null>) => {
    setTimeout(() => {
      const element = ref.current;

      if (!element) return;

      const top = element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({ top: top - 100, behavior: "smooth" });
    }, 200);
  };

  return (
    <div className="navbar fixed top-0 z-[999] flex w-full max-w-[1600px] items-center justify-center px-2">
      <nav
        ref={navRef}
        className={`flex h-[52px] items-center justify-between px-3 backdrop-blur-[2px] transition-all duration-700 ${isBottom ? "bg-[#232626E6]" : "bg-[#f2f2f2e6]"} w-full max-w-[720px] rounded-[20px]`}
      >
        <div>
          <XD isBottom={isBottom} />
        </div>

        <ul>
          {navLinks.map((link, idx) => (
            <li
              key={idx}
              className={`${isBottom ? "text-white" : "text-[#191a19]"}`}
              onClick={() => {
                if (link.name === "Work") handleScroll(work);
                if (link.name === "Experience") handleScroll(experience);
                if (link.name === "Skills") handleScroll(skill);
                if (link.name === "Testimonials") handleScroll(testimonials);
              }}
            >
              <Link to="/">{link.name}</Link>
            </li>
          ))}
        </ul>

        <div>
          <CustomPillButton  isBottom={isBottom} subTitle="Have an idea?" title="Let's talk" />
        </div>
      </nav>
    </div>
  );
};

export default Nav;
