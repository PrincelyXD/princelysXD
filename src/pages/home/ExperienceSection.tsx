import GlowCard from "../../components/GlowCard";
import SectionHeader from "../../components/SectionHeader";
import { experienceCards } from "../../resources/Constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = ({ refData }: { refData:React.RefObject<HTMLDivElement | null> }) => {
  useGSAP(() => {
    gsap.utils.toArray<Element>(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });
    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    gsap.utils.toArray<Element>(".expText").forEach((text) => {
      gsap.from(text, {
        xPercent: 0,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    });
  }, []);

  return (
    <section
      ref={refData}
      className="section-padding mt-20 w-full md:mt-40 xl:px-0"
    >
      <div className="h-full w-full px-0 md:px-20">
        <SectionHeader
          title="Professional Work Experience"
          subtitle="My Career Overview"
        />

        <div className="relative mt-32">
          <div className="relative z-50 space-y-10 xl:space-y-32">
            {experienceCards.map((card, index) => (
              <div key={index} className="exp-card-wrapper">
                {/* first-part */}
                <div className="xl:w-2/6">
                  <GlowCard index={index} card={card}>
                    <div>
                      <img
                        src={card.imgPath}
                        alt={card.title}
                        className="h-9 rounded-lg drop-shadow-2xl drop-shadow-[#F92898]"
                      />
                    </div>
                  </GlowCard>
                </div>

             
                <div className="xl:w-4/6">
                  <div className="flex-start flex">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line h-full w-1" />
                    </div>

                    <div className="expText relative z-20 flex gap-5 md:gap-10 xl:gap-20">
                      <div className="timeline-logo">
                        <img
                          className="h-10"
                          src={card.logoPath}
                          alt={card.title}
                        />
                      </div>
                      <div>
                        <h1 className="text-3xl font-semibold">{card.title}</h1>
                        <p className="text-white-50 my-5">🗓️ {card.date}</p>
                        <p className="text-[#839cb5] italic">
                          Responsibilities{" "}
                        </p>
                        <ul className="text-white-50 ms-5 mt-5 flex list-disc flex-col gap-5">
                          {card.responsibilities.map((item, idx) => (
                            <li key={idx} className="text-lg">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
