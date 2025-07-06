import SingleCertificate from "./SingleCertificate";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const certificates = [ 
  {
    title: "Hands-on SQA & Cyber Security",
    issuer: "IT Trainning BD",
    date: "October 2024",
    details: [
      "Manual Testing, Automation, JMeter.",
      "Worked on real-world testing projects.",
    ],
    Credential_Id: "ITB-B24-4417",
    image: "../../public/images/ItTrainningBdCertificate.png",  // add this
  },
  {
    title: "Java for Beginners",
    issuer: "Udemy",
    date: "August 2024",
    details: [
      "Learn all the Basics of Java.",
    ],
    Credential_Id: "UC-66c086b8-8288-4bbe-bb25-069685f892e3",
    image: "../../public/images/javaCertifcate.png",  // add this
  },
  {
    title: "Software Quality Assurance",
    issuer: "Test Dome",
    date: "June 2023",
    details: [
      "Participate on a Online Session Regarding SQA",
    ],
    Credential_Id: "UC-66c086b8-8288-4bbe-bb25-069685f892e3",
    image: "../../public/images/testdomeCertificate.png",  // add this
  },
];

const AllCertificates = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between flex-wrap gap-6">
      {certificates.map((certificate, index) => (
        <>
          <SingleCertificate key={index} certificate={certificate} />
          {index < certificates.length - 1 ? (
            <motion.div
              variants={fadeIn("right", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <FaArrowRightLong className="text-4xl text-orange lg:block sm:hidden" />
            </motion.div>
          ) : null}
        </>
      ))}
    </div>
  );
};

export default AllCertificates;
