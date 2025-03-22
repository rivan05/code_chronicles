// import React from 'react'
// import { PROJECTS } from '../constants'
// import{motion} from'framer-motion';

// const Projects = () => {
//   return (
//     <div className='border-b border-neutral-900 pb-4'>
//       <motion.h1
//       whileInView={{opacity:1 ,y:0 }}
//       initial={{opacity:0,y:-100}}
//       transition={{duration:0.5}}

//       className='my-20 text-center text-4xl'>Projects</motion.h1>

//       <div>
//         {PROJECTS.map((project, index) => (
//           <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
//             <motion.div
//               whileInView={{opacity:1, x:0}}
//               initial={{opacity:0,x:-100}}
//               transition={{duration:1}}

//             className='w-full lg:w-1/4'>
//               <img
//                 src={project.image}
//                 width={150}
//                 height={150}
//                 alt={project.title}
//                 className='mb-6 rounded'

//               />
//             </motion.div>

//             <motion.div
//               whileInView={{opacity:1,x:0}}
//               initial={{opacity:0,x:100}}
//               transition={{duration:1}}

//             className='w-full lg:w-3/4'>
//               <h6 className='mb-2 font-semibold'>{project.title}</h6>
//               <p className='mb-4 text-neutral-400'>{project.description}</p>
//               {project.technologies.map((text, index) => (
//   <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>
//     {text}
//   </span>
// ))}

//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Projects

import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-3xl"
      >
        Projects
      </motion.h1>

      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center pl-4"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={400}
                height={400}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-3/4 px-8"
            >
              <h6 className="mb-2 font-semibold text-xl ">{project.title}</h6>
              <p className="mb-4 text-neutral-400 text-xl ">{project.description}</p>
              {project.technologies.map((text, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-base font-medium text-purple-900 "
                >
                  {text}
                </span>
              ))}

              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center"
              >
                <FaGithub className="text-2xs text-white" />
              </motion.a>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
