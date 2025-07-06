import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({ name, year, image, link, description, onViewClick }) => {
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className="flex w-full items-center gap-8 justify-between"
    >
      <div className="flex flex-col items-center">
        <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white">
          <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500"></div>
          <img src={image} alt="website" className="w-full h-full h-64 object-cover" />
        </div>
        <h2 className="md:text-3xl sm:text-2xl text-orange mt-2">{name}</h2>
        <h2 className="text-xl font-thin text-white font-special sm:text-center">{year}</h2>
        <button
          onClick={() => onViewClick({ name, year, image, link, description })}
          className="text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer"
        >
          View <BsFillArrowUpRightCircleFill />
        </button>
      </div>
    </motion.div>
  );
};

export default SingleProject;
