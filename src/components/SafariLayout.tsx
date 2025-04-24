import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

type safariProps = {
  webUrl: string;
  urlName: string;
  thumbnailSrc: string;
  videoSrc: string;
  webImage: string;
  startRotate: number;
};

const SafariLayout = ({
  webUrl,
  urlName,
  thumbnailSrc,
  videoSrc,
  webImage,
  startRotate,
}: safariProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const imageRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    videoRef.current?.pause();
    videoRef.current!.currentTime = 0.3; // Optional: rewind to start
  };

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0.0, 0.3], [startRotate, 0]);
  const translateY = useTransform(scrollYProgress, [0.0, 0.3], [20, 0]); // moves up 20px to 0

  const translate = useTransform(scrollYProgress, [0.4, 0.8], [0, -300]);

  return (
    <motion.div
      ref={imageRef}
      style={{
        rotate: rotate,
        translateY: translateY,
      }}
      className="w-full cursor-pointer"
    >
      <Link
        to={webUrl}
        target="_blank"
        className="flex w-full max-w-[700px] cursor-pointer flex-col
         rounded-md rounded-t-xl mx-auto
          bg-gradient-to-r from-[#E8E8E8] to-[#E3E3E3] p-1.5 md:h-fit"
      >
        <div className="flex h-[30px] items-center justify-between px-3">
          <div className="flex items-center gap-x-3">
            <div className="flex gap-x-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]"></span>
            </div>

            <div className="flex gap-x-3">
              <img
                src="/images/safari-icon2.svg"
                className="hidden h-4 md:block"
                alt=""
              />
              <img
                src="/images/safari-arrow-left.svg"
                className="hidden h-4 md:block"
                alt=""
              />
              <img
                src="/images/safari-arrow-right.svg"
                className="hidden h-4 md:block"
                alt=""
              />
              <img src="/images/safari-reload.svg" className="h-4" alt="" />
            </div>
          </div>

          <div className="flex items-center gap-x-3 md:-ml-15 md:gap-x-11">
            <img
              src="/images/safari-lock.svg"
              className="h-2.5 sm:h-3"
              alt=""
            />

            <span className="text-[8px] text-[#000000b3] sm:text-xs">
              {urlName}
            </span>
            <img
              src="/images/safari-link.svg hidden md:block"
              className="h-3"
              alt=""
            />
          </div>

          <div className="flex gap-x-3">
            <img src="/images/safari-download.svg" className="h-4" alt="" />
            <img src="/images/safari-add.svg" className="h-4" alt="" />
          </div>
        </div>

        <main className="flex h-full w-full 
       
        cursor-default overflow-hidden rounded-md bg-white">
          <video
            ref={videoRef}
            muted
            loop
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src={videoSrc}
            poster={thumbnailSrc}
            className="hidden cursor-pointer md:block"
          />

          <div className="xs:h-[450px] relative block h-[250px] w-full overflow-hidden sm:h-[600px] md:hidden">
            <motion.div
              ref={imageRef}
              style={{
                translateY: translate,
              }}
              className={`h-[800px] sm:h-[1000px] w-full bg-cover ${webImage} `}
            />
          </div>
        </main>
      </Link>
    </motion.div>
  );
};

export default SafariLayout;
