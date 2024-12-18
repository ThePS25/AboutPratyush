import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact,FaGithub } from "react-icons/fa";
import {
  SiMongodb,
  SiTypescript,
  SiPrisma,
  SiAntdesign,
  SiPostgresql,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

import SP18 from "../../assets/sp18logo.png";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiTypescript color="#3178C6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiAntdesign color="white" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <RiTailwindCssFill color="#06B6D4" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiPostgresql color="#4169E1" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiPrisma color="white" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaGithub color="white" size={50} />
          </span>
        </div>
        <div className="flex-1">
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-start">
            <img src={SP18} alt="spark18" className="w-20 h-20" />
            <span className="text-white">
              <h2 className="leading-tight">
                Frontend Engineer, Spark Eighteen Lifestyle Pvt. Ltd.
              </h2>
              <p className="text-sm leading-tight font-thin">
                February 2024 - Present
              </p>
              <ul className="text-base p-2 flex flex-col gap-2">
                <li>
                  - Spearheading the development of a SaaS Human Resource
                  Management platform, integrating features for finance,
                  personnel management, and payroll, serving over 5,000 users.
                </li>
                <li>
                  - Designing modular, scalable UI components using React,
                  TypeScript, HTML, CSS, and Ant Design, reducing development
                  time by 20%.
                </li>
                <li>
                  - Collaborating with cross-functional teams for efficient API
                  integration, ensuring 99.9% data accuracy and optimizing
                  performance by 15%.
                </li>
                <li>
                  - Refactoring front-end codebase for modularity, increasing
                  scalability and reducing bug reports by 55%.
                </li>
                <li>
                  - Delivering responsive web designs across devices, boosting
                  mobile traffic by 30% using ReactJS, TypeScript, and REST
                  APIs.
                </li>
              </ul>
            </span>
          </div>

          {/* <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-start">
            <img src={SP18} alt="spark18" className="w-20 h-20" />
            <span className="text-white">
              <h2 className="leading-tight">
                Full Stack Engineering Intern, Spark Eighteen Lifestyle Pvt.
                Ltd.
              </h2>
              <p className="text-sm leading-tight font-thin">
                February 2024 - August 2024
              </p>
              <ul className="text-sm p-2">
                <li>
                  - Enhanced front-end functionality through codebase
                  refactoring for improved modularity and scalability.
                </li>
                <li>
                  - Implemented responsive web designs using ReactJS,
                  TypeScript, and REST APIs for cross-device compatibility.
                </li>
              </ul>
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Experience;
