import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const nigeriaTime = new Intl.DateTimeFormat("en-NG", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: "Africa/Lagos",
      }).format(now);
      setTime(nigeriaTime);
    };

    // Call updateTime every second
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="flex h-[100dvh] w-full items-center
     justify-center rounded-t-[100px]
      bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <footer className="flex w-full flex-col  mt-20
       items-center justify-center  px-5 md:px-10">
        <div className="flex w-full max-w-[550px]
         flex-col items-center gap-y-5 text-center">
          <span className="text-[18px] text-[#ffffff80]">
            {time.toUpperCase()} is My Time Now
          </span>

          <h3 className="text-3xl font-semibold text-white md:text-4xl">
            and… it's always the right time for impactful development
          </h3>

          <p className="w-full max-w-[350px] text-[#ffffff80]">
            Ready to bring your vision to life? Book a call or send an email,
            and let's make it happen!
          </p>
        </div>

        <Link
        to="https://cal.com/princely-kweks"
        target="blank"
        className="group flex cursor-pointer mt-10 font-clash
         items-center gap-2 rounded-2xl bg-white p-3 py-3
          text-[#161616]">
          <div className="h-8 w-8 rounded-full
           bg-[image:url('/images/mee.png')] bg-cover bg-center" />

          <div className="relative flex h-8
          w-[50px] sm:w-0 items-center
           gap-x-2 overflow-hidden font-medium transition-all
            duration-400 group-hover:w-[50px]">
            +
            <div className="absolute right-0 flex h-8 w-8 items-center
             justify-center rounded-full bg-stone-200 text-xs">
              You
            </div>
          </div>

          <p>Book a 15-min call</p>
        </Link>
      </footer>
    </section>
  );
};

export default Footer;

