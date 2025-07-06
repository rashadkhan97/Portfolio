import AllCertificates from "./AllCertificates";
import CertificateText from "./CertificateText";
//import CertificateTop from "./CertificateTop";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const CertificateMain = () => { 
  return (
    <div id="certificates" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <CertificateText />
      </motion.div>
      <motion.div
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        {/* <CertificateTop /> */}
      </motion.div>
      <div className="w-full h-1 mt-4 bg-lightBrown lg:block sm:hidden"></div>
      <AllCertificates />  {/* UNCOMMENTED */}
    </div>
  );
};

export default CertificateMain;
