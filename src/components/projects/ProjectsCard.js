import { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";



const ProjectsCard = ({ title, des, image, repo, demo }) => {
  const [isExpand, setIsExpand] = useState(false);
  const toggleExpand = () => setIsExpand(!isExpand);

  return (
    <div className="w-full p-4 xl:px-12 h-full xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-fit h-fit object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={image}
          alt={title}
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              {repo && (
                <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                  <a href={repo} target="_blank" rel="noopener noreferrer">
                    <BsGithub />
                  </a>
                </span>
              )}
              {demo && (
                <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                  <a href={demo} target="_blank" rel="noopener noreferrer">
                    <FaGlobe />
                  </a>
                </span>
              )}
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {isExpand ? des : `${des.slice(0, 100)}...`}
            {des.length > 100 && (
              <button onClick={toggleExpand} className="text-designColor ml-2 underline hover:text-gray-100 transition duration-300">
                {isExpand ? "Show Less" : "Read More"}
              </button>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;