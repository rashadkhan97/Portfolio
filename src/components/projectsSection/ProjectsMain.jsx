import { useState } from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import ModalSection from "./ModalSection";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Vacation of Africa",
    year: "Mar2022",
    align: "right",
    image: "/images/website-img-1.jpg", // FIXED path for public folder
    link: "#",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, corporis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis rerum nisi facere fugit vero error similique dolorum maiores ullam. adipisicing elit. Perspiciatis rerum nisi facere fugit vero error similique dolorum maiores ullam."
  },
  {
    name: "Moola App",
    year: "Sept2022",
    align: "left",
    image: "/images/website-img-2.webp",
    link: "#",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, corporis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis rerum nisi facere fugit vero error similique dolorum maiores ullam. adipisicing elit. Perspiciatis rerum nisi facere fugit vero error similique dolorum maiores ullam."
  },
  {
    name: "Tourzania",
    year: "Jan2023",
    align: "right",
    image: "/images/website-img-3.jpg",
    link: "#",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, corporis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis rerum nisi facere fugit vero error similique dolorum maiores ullam. adipisicing elit. Perspiciatis rerum nisi facere fugit vero error similique dolorum maiores ullam."
  },
  {
    name: "Bank of Luck",
    year: "May2024",
    align: "left",
    image: "/images/website-img-4.jpg",
    link: "#",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, corporis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis rerum nisi facere fugit vero error similique dolorum maiores ullam. adipisicing elit. Perspiciatis rerum nisi facere fugit vero error similique dolorum maiores ullam."
  },
];

const ProjectsMain = () => {
  const [modalData, setModalData] = useState(null);

  const handleViewClick = (data) => {
    setModalData({ ...data, isOpen: true });
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {projects.map((project, index) => (
          <SingleProject
            key={index}
            {...project}
            onViewClick={handleViewClick}
          />
        ))}
      </div>

      <ModalSection
        isOpen={!!modalData}
        onClose={closeModal}
        {...(modalData || {})}
      />
    </div>
  );
};

export default ProjectsMain;
