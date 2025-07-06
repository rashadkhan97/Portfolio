import SingleSkill from "./SingleSkill";
import { FaBug, FaTachometerAlt, FaDatabase, FaGitAlt, FaCogs, FaNetworkWired } from "react-icons/fa";
import { IoIosListBox } from "react-icons/io";
import { SiSelenium, SiPostman } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { SiJira } from "react-icons/si";

const skills = [
  { skill: "Manual", icon: IoIosListBox },
  { skill: "Jira", icon: SiJira },
  { skill: "Selenium", icon: SiSelenium },
  { skill: "JMeter", icon: FaTachometerAlt },
  { skill: "Postman", icon: SiPostman },
  { skill: "SQL", icon: FaDatabase },
  { skill: "Git", icon: FaGitAlt },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<IconComponent />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
