import { useGSAP } from "@gsap/react";
import {gsap} from 'gsap'
import BrickButton from "../../components/BrickButton";
import { wordCarousel } from "../../resources/Constants";
import HeroExperience from "./hero-models/HeroExperience";
import CounterUp from "./CounterUp";
import LoadingScreen from "../../components/LoadingScreen";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

const HeroSection = ({refData}:{refData:React.RefObject<HTMLDivElement | null>}) => {
  const [isLoading, setIsLoading] = useState(true)
  useGSAP(() => {
    gsap.fromTo(
      "hero-text, h1",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger:0.2,
        ease: 'power2.inOut',
        duration:1,
      },
    
    );
  },[]);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className={` 
    relative 
    `}>
      <AnimatePresence>
         {isLoading && <LoadingScreen loadingState={isLoading}/>}
      </AnimatePresence>
     
      <div className=" text-white absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className=" hero-layout">
        <header
          className=" flex flex-col
         justify-center md:w-full w-screen
         md:px-20 px-5
         "
        >
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className=" slide">
                  <span className=" wrapper">
                    {wordCarousel.map((word, idx) => (
                      <span
                        key={idx}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imagePath}
                          alt={`${word.text} image`}
                          className="xl:size-12 md:size-10
                             size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
            <p
              className=" text-white-50 text-[14px] md:text-xl
             relative z-10 max-w-[520px]  pointer-events-none"
            >
              Yo, I’m Princely kwekowe — a full-stack dev. with a focus on front-end and
              mobile experiences.
              {/* I build sleek,
   interactive apps that feel great to use — whether on the web
    or in your hand. */}
            </p>
            <BrickButton
            Id="counter"
              className="md:w-80 md:h-16  w-60 h-12"
              text="See my work"
            />
          </div>
        </header>

        <figure>
          <div className="hero-3d-layout cursor-grab ">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <CounterUp ref={refData}/>
    </section>
   
  );
};

export default HeroSection;
