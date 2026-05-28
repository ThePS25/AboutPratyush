import AboutImg from "../../assets/me-sit.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div className="flex-1 w-full">
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center justify-around">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  About Me
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  {`Hi, I'm Pratyush — a Software Development Engineer at Amazon in Bangalore, working on scalable backend systems and product-facing features. I graduated in 2024 with a B.Tech in Computer and Communication Engineering from LNMIIT, Jaipur. In college, I led the theatre society and managed hospitality for major cultural events. Outside work, I write poetry, explore music, stay active in theatre, and listen to business podcasts for fresh ideas and perspective.`}
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Software Engineer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I build across the stack — from React and TypeScript interfaces
                  to Java microservices on AWS. I focus on clean architecture,
                  reliable deployments, and systems that scale. Side projects
                  like Zoophii, CatchUp, and AI Career Pilot pair strong UX with
                  solid engineering: API integration, secure data handling, and
                  responsive design across devices.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Passionate About Problem Solving & Learning
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  {`I'm constantly working to improve my skills in frontend and
                  backend technologies too. Currently, I’m focusing on learning more
                  about data structures and algorithms (DSA) and diving deeper
                  into backend development with Node.js and Python. I believe in
                  building well-structured code and continuously pushing myself
                  to create better solutions.`}
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
