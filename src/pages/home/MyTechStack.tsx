import SectionHeader from "../../components/SectionHeader";
import TechIcon, {
  ModelType,
} from "../../components/models/tech-logos/TechIcon";
import { techStackIcons } from "../../resources/Constants";
import { motion } from "framer-motion";

const MyTechStack = ({
  refData,
}: {
  refData: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <div ref={refData} className="section-padding stack flex-center">
      <div className="h-full w-full px-5 md:px-10">
        <SectionHeader
          title="My Go-To Development Stack"
          subtitle="Skills & Tech I Use Daily 💻⚙️"
        />

        <div className="tech-grid">
          {techStackIcons.map((item, index) => (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 8,
                delay: 0.2,
              }}
              viewport={{ once: true }}
              key={index}
              className="tech-card card-border group relative overflow-hidden rounded-lg xl:rounded-full"
            >
              <div className="tech-card-animated-bg" />

              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  {item.type === "model" ? (
                    <TechIcon {...(item as ModelType)} />
                  ) : (
                    <img
                      className="h-[120px]"
                      src={item.modelPath}
                      alt="oopss"
                    />
                  )}
                </div>
                <div className="padding-x w-full">
                  <p>{item.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyTechStack;
