import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaInstagram } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs, SiHtml5, SiCss3, SiJavascript, SiGit } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Front End Developer.", "SEO Specialist."],
      loop: true,
      typeSpeed: 70,
      deleteSpeed: 10,
      delaySpeed: 3000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">
          WELCOME TO MY WORLD
        </h4>
        <h1 className="text-5xl lg:text-6xl font-bold text-white">
          Hi, I'm{' '}
          <span className="text-designColor capitalize">
            Mohamed Saad
          </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a{' '}
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          As a Front-End
          Developer and SEO
          Specialist, I design
          and implement
          user-friendly web
          interfaces while
          optimizing websites
          for search engines.
          My role involves
          using HTML, CSS, and
          JavaScript to create
          responsive designs,
          enhance site speed,
          and ensure
          cross-browser
          compatibility. I
          also develop and
          execute SEO
          strategies to
          improve organic
          search rankings,
          increase traffic,
          and enhance the user
          experience, making
          sure web pages are
          fully optimized for
          both performance and
          visibility across
          search engines. This
          dual expertise
          allows me to create
          visually appealing,
          highly functional,
          and easily
          discoverable
          websites.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-10 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/mohamed-saad-eldeen-641507243/"
              target="_blank"
              rel="noopener noreferrer">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a
              href="https://www.instagram.com/mohamed_saad_eldeen22/"
              target="_blank"
              rel="noopener noreferrer">
              <span className="bannerIcon">
                <FaInstagram />
              </span>
            </a>
            <a href="https://www.facebook.com/holako.holako.18/"
            rel="noopener noreferrer">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4 flex-wrap">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiHtml5 />
            </span>
            <span className="bannerIcon">
              <SiCss3 />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            <span className="bannerIcon">
              <SiGit />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner