// import React from "react";
// import logo from "../assets/projects/logo.jpg";
// import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// const Navbar = () => {
//   return (
//     <nav className="bg-red-900 mb-20 flex items-center justify-between py-6">
//       <div className="flex flex-shrink-0 items-center">
//         <img className="mx-2 w-10" src={logo} alt="logo" />
//       </div>

//       <div className="n-8 flex items-center justify-center gap-4 text-2xl">
//         <FaLinkedin />
//         <FaGithub />
//         <FaTwitter />
//         <FaInstagram />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React from "react";
import logo from "../assets/projects/logo.png";
// import logo from "./lo.png"
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi"; 
import { MdPictureAsPdf } from "react-icons/md";

const Navbar = () => {
  return (
    // <nav className="bg-rose-800 mb-20 flex items-center justify-between py-6 px-6">
    // 
    //   <div className="flex flex-shrink-0 items-center">
    //     <img className="mx-2 w-10" src={logo} alt="logo" />
    //   </div>
 <nav className="bg-gradient-to-r from-rose-5x00 via-rose-400 to-rose-600 mb-20 flex items-center justify-between py-6 px-6">
  
  <div className="flex flex-shrink-0 items-center  p-2 rounded-lg">
    <img className="mx-2 w-10" src={logo} alt="logo" />
  </div> 

      
      <div className="flex items-center justify-center gap-6 text-2xl">
        <a href="https://www.linkedin.com/in/rishi-vasan-fsd/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-white hover:text-blue-600  animate-bounce transition-colors" />
        </a>
        <a href="https://github.com/rivan05?tab=repositories" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white hover:text-gray-700 animate-bounce transition-colors" />
        </a>
        <a href="rishieeevasan@gmail.com" target="_blank" rel="noopener noreferrer">
          <HiOutlineMail className="text-white hover:text-red-500  animate-bounce transition-colors" />
        </a>
        <a 
        href="/Rishi Vasan_V_FSD.pdf" // Path to your PDF
        download="Rishi.pdf" // Name of the downloaded file
        className="flex items-center space-x-2 text-white hover:text-red-500 transition-colors"
      >
        <MdPictureAsPdf className="text-white-800 hover:text-red-500 animate-bounce" />
        
      </a>
      </div>
    </nav>
  );
};

export default Navbar;


