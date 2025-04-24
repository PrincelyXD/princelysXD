import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const IphoneSim = () => {
    const ref = useRef(null);
    const ref2 = useRef(null);
  
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"], 
    });
  
    const firstPhoneRotate = useTransform(scrollYProgress, [0, 1], [-6, 6]);
    const secondPhoneRotate = useTransform(scrollYProgress, [0, 1], [6, -6]);
    const firstImageRotate = useTransform(scrollYProgress, [0.0, 0.5], [-20, 0]);
  return (
    <div className="w-full flex items-center justify-center
     h-[450px] sm:h-fit my-10 sm:my-20   px-5">

      <div className="w-fit
       flex gap-x-15 md:gap-x-28  
      scale-[0.49] sm:scale-[0.7]   md:scale-[0.9] lg:scale-[0.95]
       ">

        <motion.div
          layout={false}
          style={{ rotate: firstPhoneRotate, willChange: "transform" }}
          ref={ref}
          className="flex h-[650px] w-[300px] justify-center
          

           rounded-4xl bg-[image:url('/images/aora-hero.png')] bg-cover bg-center"
        >
          <div className="relative h-full w-full">
            <img
              className="absolute top-10 left-1.5 h-auto w-full scale-[1.18]"
              src="/images/iphone-framer.png"
              alt="aora-app-image"
              loading="lazy"
            />
            <motion.div
              style={{
                rotate: firstImageRotate,
              }}
              className="absolute top-48 -left-8 z-10 h-[220px] w-44 rounded-3xl 
              bg-[image:url('/images/floating-img.png')]
               bg-cover bg-center shadow-[-10px_10px_16px_rgba(0,0,0,0.04)]
               shadow-[#1E1E1E] duration-100 hover:scale-[1.1] hover:rotate-[-5deg]"
            ></motion.div>
          </div>
        </motion.div>

        <motion.div
          className="relative hidden xl:flex h-[650px] scale-[0.95] w-[300px] justify-center
           rounded-4xl bg-[image:url('/images/aora-splash.png')] bg-cover bg-center"
        >
          <img
            className="absolute top-10 left-1.5 h-auto w-full scale-[1.18]"
            loading="lazy"
            src="/images/iphone-framer.png"
            alt="astro-app-image"
          />
        </motion.div>

        <motion.div
          layout={false}
          ref={ref2}
          style={{
            rotate: secondPhoneRotate,
            willChange: "transform",
          }}
          className="relative flex h-[650px] w-[300px] justify-center
          

           rounded-4xl bg-[image:url('/images/aora-upload.png')] bg-cover bg-center"
        >
          <img
            className="absolute top-10 left-1.5 h-auto w-full scale-[1.18]"
            loading="lazy"
            src="/images/iphone-framer.png"
            alt="astro-app-image"
          />
        </motion.div>
      </div>
    </div>
  )
}

export default IphoneSim
