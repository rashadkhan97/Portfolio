import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleCertificate = ({ certificate }) => {
  return (
    <motion.div
      variants={fadeIn("right", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="md:h-auto md:w-[240px] sm:w-full border-2 border-orange border-dashed rounded-2xl mt-8 p-4"
    >
      <p className="font-bold text-cyan">{certificate.title}</p>
      <p className="text-orange">{certificate.issuer}</p>
      <p className="text-lightGrey">{certificate.date}</p>
      <ul className="list-disc mt-4 pl-4">
        {certificate.details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SingleCertificate;
