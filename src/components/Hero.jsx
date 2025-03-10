// import React from "react";
import { HERO_CONTENT } from "../constants/index.jsx";
import profilePic from "../assets/projects/about-.jpg";
import { motion } from "framer-motion";

const animationVariants = (delay) => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        
        <div className="w-full  lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={animationVariants(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16  lg:text-8xl pl-40 "
            >
              Rishi
            </motion.h1>

            <motion.span
              variants={animationVariants(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-rose-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent pl-40"
            >
              Java Full Stack Developer
            </motion.span>

            <motion.p
              variants={animationVariants(1)}
              initial="hidden"
              animate="visible"
              // className="my-2 max-w-xl py-6 font-light tracking-tighter pl-30 "
              className="my-3 max-w-1xl py-6 font-light tracking-tighter pl-30 font-ubuntu text-lg"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        <div className="w-full lg:w-1/2  lg:p-30 ">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Rishi"
              
              
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
