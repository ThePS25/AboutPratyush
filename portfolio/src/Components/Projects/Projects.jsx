import React from "react";
import ProjectCard from "./ProjectCard";
import CatchUp from "../../assets/culogo.png";
import Zoophii from "../../assets/zoophiiLogo.png";
import Traasdi from "../../assets/traasdi.png";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-4 md:gap-8" style={{justifyContent:"space-between"}}>
        <ProjectCard
          title="Zoophii - Pet supplies website"
          main="This is a pet supplies ecommerce website creted in  MERN stack. It has a lot of features like product listing, product detail, cart, checkout,payment gateway, and more."
          bannerImg={Zoophii}
          demolink="https://zoophii.onrender.com/"
          sourcelink="https://github.com/ThePS25/E-Commerce.git"
        />
        <ProjectCard
          title="CatchUp - Social Platform"
          main="This is a social platform created in MERN stack. It has a lot of features like user registration, user login, user profile, post creation, commenting, and more."
          bannerImg={CatchUp}
          demolink="https://catchupsocial.netlify.app/"
          sourcelink="https://github.com/ThePS25/catchup-social-source-codes.git"
        />
        <ProjectCard
          title="Traasdi"
          main="A simple and clean react project based on data collected through different narratives of the survivors of India-Pakistan separation"
          bannerImg={Traasdi}
          demolink="https://velvety-narwhal-6512a0.netlify.app/"
          sourcelink="https://github.com/ThePS25/traasdi.git"
        />
      </div>
    </div>
  );
};

export default Projects;
