import { easeOut, motion } from "framer-motion";

const FormSuccess = () => {
  return (
    <div className="flex-center card-border min-h-[400px] flex-col rounded-xl p-5 sm:p-10">
      <div className="flex h-20 w-20 items-center justify-center">
        <svg className="checkmark" viewBox="-7 -7 65 65">
          <circle className="checkmark__circle" cx="26" cy="26" r="25" />
          <path className="checkmark__check" d="M14 27l7 7 16-16" />
        </svg>
      </div>

      <motion.h3
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5, ease: easeOut }}
        className="text-lg font-semibold md:text-2xl"
      >
        Appreciate the message
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5, ease: easeOut }}
        className="font-thin"
      >
        I’ll be in touch soon!
      </motion.p>
    </div>
  );
};

export default FormSuccess;
