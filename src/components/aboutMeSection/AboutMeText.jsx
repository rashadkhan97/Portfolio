import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>

      <p className="text-lg text-neutral-200 max-w-2xl mx-auto text-justify">
        I am a passionate Software Quality Assurance (SQA) Engineer committed to delivering reliable, user-friendly software.
        With a sharp eye for detail, I excel at identifying and resolving issues to ensure seamless user experiences.
        I thrive in collaborative environments and take pride in supporting my team to achieve the highest standards in every project.
      </p>

      <div className="flex flex-wrap gap-4 mt-10 justify-center md:justify-start">
        {/* My Projects Button */}
        <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center hover:bg-orange transition-all duration-500 cursor-pointer">
          <Link
            spy={true}
            smooth={true}
            duration={500}
            offset={-120}
            to="projects"
            className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
          >
            My Projects
          </Link>
        </button>

        {/* My CV Button */}
        <a
          href="https://drive.google.com/file/d/1z31ECZ4cwVEROp2gnyf5XOPkaABfi6Wq/view?usp=sharing" // replace with your actual CV Drive link
          target="_blank"
          rel="noopener noreferrer"
          className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center hover:bg-orange transition-all duration-500 cursor-pointer text-white hover:text-cyan"
        >
          My CV
        </a>
      </div>
    </div>
  );
};

export default AboutMeText;
