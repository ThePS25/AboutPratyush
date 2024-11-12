const ProjectCard = ({ title, main, bannerImg, demolink, sourcelink }) => {
  return (
    <div
      style={{ minWidth: "30%" }}
      className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl"
    >
      <img className="p-4 flex-1 " src={bannerImg} alt="" />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4 justify-between">
        {demolink && (
          <button
            className="w-full md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
            onClick={() => window.open(demolink, "_blank")}
          >
            Demo
          </button>
        )}
        {sourcelink && (
          <button
            onClick={() => window.open(sourcelink, "_blank")}
            className="w-full md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          >
            Source Code
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
