//@ts-ignore
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { TfiClose } from "react-icons/tfi";
import { TiLocationArrow } from "react-icons/ti";
const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div
        className="relative max-w-2xl border shadow-sm rounded-2xl bg-black border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight "
        >
          <TfiClose />
        </button>
        <img src={image} alt={title} className="w-full rounded-t-2xl" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {subDescription.map((subDesc) => (
            <p className="mb-3 font-normal text-neutral-400">{subDesc}</p>
          ))}
          <div className="flex items-center justify-between mt-4">
            
            <a className="inline-flex text-white items-center gap-1 font-medium cursor-pointer hover-animation"
              href={href} target="_blank" rel="noopener noreferrer"
            >
              View Project
               <TiLocationArrow />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
