import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const linkedInLink =
    "https://www.linkedin.com/in/pratyush-srivastava-2a7b1512a/";
  const githubLink = "https://github.com/ThePS25";
  const email = "pratyush2503@gmail.com";

  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success("Link copied to clipboard!");
    });
  };

  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };

  const handleEmailClick = () => {
    window.location.href(`mailto:${email}`);
  };

  const handleClick = (link, isEmail) => {
    handleCopyToClipboard(link);
    if (isEmail) {
      handleEmailClick();
    } else {
      handleRedirect(link);
    }
  };

  return (
    <>
      <div
        id="Footer"
        className="flex flex-col md:flex-row justify-between items-center bg-[#00303d] text-white p-10 md:p-12"
      >
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
          <h3 className="text-sm md:text-2xl font-normal">
            Feel free to reach out!
          </h3>
        </div>

        <ul className="flex gap-4 md:gap-8 text-sm md:text-xl text-center md:text-left">
          <li
            className="flex gap-2 items-center hover:text-[#FFD700] cursor-pointer transition duration-300 ease-in-out"
            onClick={() => handleClick(email, true)}
          >
            <MdOutlineEmail className="text-2xl hover:text-[#FFD700]" />
            <span className="hover:text-[#FFD700]">Email</span>
          </li>
          <li
            className="flex gap-2 items-center hover:text-[#FFD700] cursor-pointer transition duration-300 ease-in-out"
            onClick={() => handleClick(linkedInLink, false)}
          >
            <CiLinkedin className="text-2xl hover:text-[#FFD700]" />
            <span className="hover:text-[#FFD700]">LinkedIn</span>
          </li>
          <li
            className="flex gap-2 items-center hover:text-[#FFD700] cursor-pointer transition duration-300 ease-in-out"
            onClick={() => handleClick(githubLink, false)}
          >
            <FaGithub className="text-2xl hover:text-[#FFD700]" />
            <span className="hover:text-[#FFD700]">GitHub</span>
          </li>
        </ul>
      </div>
      <ToastContainer />
    </>
  );
};

export default Footer;
