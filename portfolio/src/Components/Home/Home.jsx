import avatarImg from "../../assets/me-stand.png";
import TextChange from "../TextChange";

const Home = () => {
  const resumeLink = import.meta.env.VITE_RESUME_URL;
  return (
    <div className="text-white flex w-full justify-around items-start p-6 md:p-10">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
          {` a Frontend Developer passionate about
                  building intuitive, efficient, and responsive user interfaces.
                 `}
        </p>
        <button
          type="button"
          disabled={!resumeLink}
          onClick={() => resumeLink && window.open(resumeLink, "_blank")}
          className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          Download my resume
        </button>
      </div>
      <div>
        <img className="" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
