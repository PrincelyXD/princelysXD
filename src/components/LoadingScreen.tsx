import { HashLoader } from "react-spinners";
import { easeOut, motion } from "framer-motion";
import { useEffect } from "react";

const LoadingScreen = ({ loadingState }: { loadingState: boolean }) => {
  useEffect(() => {
    if (loadingState) {
      document.body.style.height = "100dvh"
      document.body.style.overflow = "hidden";
      
    } else {
     document.body.style.height = "fit-content"
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.height = "fit-content"
      document.body.style.overflow = "auto";
    };
  }, [loadingState]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: easeOut }}
      className="fixed top-0 left-0 z-[999] flex h-[100vh] w-full items-center justify-center bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
    >
      <span className="animate-pulse">
        <HashLoader size={90} color="" />
      </span>
    </motion.div>
  );
};

export default LoadingScreen;
