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
                  {`Hi, I'm Pratyush, I graduated in 2024 with a B.Tech in Computer and Communication Engineering from LNM Institute of Information Technology, Jaipur. During my time there, I was actively involved in various extracurricular activities, including leading the theatre society and managing hospitality for major cultural events. Beyond coding, I find joy in writing poetry, exploring music, and participating in theatre. I also enjoy listening to business podcasts, constantly learning and drawing inspiration from successful industry leaders.`}
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I have hands-on experience in frontend development.With a
                  solid foundation in C++, OOPS concepts, and modern web
                  technologies, I specialize in creating seamless user
                  experiences using React, TypeScript, and CSS. I’ve built and
                  deployed web apps like Zoophii and CatchUp, integrating APIs,
                  managing data securely, and ensuring responsive, cross-device
                  compatibility.
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
