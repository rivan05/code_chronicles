// import React from "react";
// import { FaReact } from "react-icons/fa";
// import { FaJava } from "react-icons/fa6";
// import { SiMongodb } from "react-icons/si";
// import { SiExpress } from "react-icons/si";
// import { FaNode } from "react-icons/fa";
// import { BiLogoSpringBoot } from "react-icons/bi";
// import { GrMysql } from "react-icons/gr";
// import { motion } from "framer-motion";

// const iconVariants =(duration)=>({
//     initial:{y:-10},
//     animate:{
//         y:[10,-10],
//         transition:{
//             duration:duration,
//             ease:"Linear",
//             repeat:Infinity,
//             repeatType:'reverse',
//         }

//     }
// })

// const Technologies = () => {
//   return (
//     <div className="border-b border-neutral-800 pb-24">
//       <h2 className="my-20 text-center text-4xl">Technologies</h2>

//       <div className="flex flex-wrap items-center justify-center gap-4">
//         <motion.div
//           variants={iconVariants(2.5)}
//           initial="initial"
//           animate="animate"

//     className="rounded-2xl border-4 border-neutral-800 p- 4">
//           <FaReact className="text-7xl text-cyan-400" />
//         </motion.div>

//         <motion.div

//         variants={iconVariants(3)}
//         initial="initial"
//         animate="animate"
//         className="rounded-2xl border-4 border-neutral-800 p- 4">
//           <FaNode className="text-7xl text-green-400" />
//         </motion.div>

//         <motion.div

//         variants={iconVariants(2.5)}
//         initial="initial"
//         animate="animate"
//         className="rounded-2xl border-4 border-neutral-800 p- 4">
//           <SiExpress className="text-7xl text-grey-950" />
//         </motion.div>

//         <motion.div

//         variants={iconVariants(5)}
//         initial="initial"
//         animate="animate"
//         className="rounded-2xl border-4 border-neutral-800 p- 4">
//           <FaJava className="text-7xl text-red-800" />
//         </motion.div>

//         <motion.div
//          variants={iconVariants(6)}
//          initial="initial"
//          animate="animate"
//         className="rounded-2xl border-4 border-neutral-800 p- 4">
//           <BiLogoSpringBoot className="text-7xl text-green-500" />
//         </motion.div>

//         <motion.div

//         variants={iconVariants(4)}
//         initial="initial"
//         animate="animate"

//         className="rounded-2xl border-4 border-neutral-800 p- 4">
//           <GrMysql className="text-7xl text-sky-800" />
//         </motion.div>

//         <motion.div

//         variants={iconVariants(2.5)}
//         initial="initial"
//         animate="animate"
//         className="rounded-2xl border-4 border-neutral-800 p- 4">
//           <SiMongodb className="text-7xl text-green-600" />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Technologies;

import React from "react";
import { FaReact, FaNode, FaJava } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -20, opacity: 0 },
  animate: {
    y: [10, -10],
    opacity: 1,
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          
        >
          <FaReact className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNode className="text-7xl text-green-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiExpress className="text-7xl text-grey-950" />
        </motion.div>

        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaJava className="text-7xl text-red-800" />
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoSpringBoot className="text-7xl text-green-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <GrMysql className="text-7xl text-sky-800" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-600" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
