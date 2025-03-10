import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `I am a passionate java full stack developer with a knack for crafting robust and scalable web applications. With internships, I've hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React,Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "May 2024-Aug 2024",
    role: " Java Full Stack Developer Intern",
    company: "Ai Variant",
    description: `Developed user-friendly and visually appealing front-end interfaces using modern frameworks like React.js, SpringBoot, Hibernate, Established and enforced coding standards and best practices across the development team for consistent and maintainable code.`,
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "React.js",
      "Hibernate",
      "SpringBoot",
      "MySQL",
    ],
  },
  {
    year: "April 2023 - June 2023",
    role: "Frontend Developer Intern",
    company: "DotCom Infoway",
    description: `Designed and developed user interfaces for web applications using React. Collaborated closely with senior developers to integrate frontend components with APIs. Implemented responsive designs and optimized the frontend for enhanced performance and user experience.`,
    technologies: ["HTML", "CSS", "Javascript", "React js"],
  },
];

export const PROJECTS = [
  {
    title: "Saffron Stays",
    image: project1,
    description:
      "A centralized platform for hotel reservations streamlines booking, amenities, and service management in one system. It offers guests a seamless experience to view and book rooms, request services, and explore amenities. For hotel staff, it simplifies operations like managing availability, pricing, and guest preferences. This leads to improved efficiency, communication, and guest satisfaction.",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "SpringBoot",
      "Hibernate",
      "Tailwind",
      "MySQL",
    ],
    githubLink: "https://github.com/rivan05/Saffron-Stays-OHBS",
  },
  {
    title: "Cloudsy",
    image: project2,
    description:
      "A weather app provides users with real-time weather updates, forecasts, and alerts for their location or any selected area. It typically features details like temperature, humidity, wind speed, precipitation chances, and air quality, helping users plan their day effectively. .",
    technologies: ["HTML", "CSS", "Javascript"],
    githubLink: "https://github.com/rivan05/Cloudsy",
  },
  {
    title: "Movie in",
    image: project3,
    description:
      "Imagine embarking on a cinematic adventure with ease! This React-based application offers a seamless movie discovery experience. Featuring a sleek search bar, users can effortlessly input their movie preferences and retrieve data from reliable sources like the OMDB database.",
    technologies: ["HTML", "CSS", "React"],
    githubLink: "https://github.com/rivan05/Movie-in",
  },
  {
    title: "Cooked?",
    image: project4,
    description:
      "Ready to unleash your inner chef? This React app is here to be your kitchen sidekick! Imagine browsing through an endless array of recipes, saving your go-to dishes, and always having your next meal idea just a click away",
    technologies: ["HTML", "TailwindCSS", "React"],
    githubLink: "https://github.com/rivan05/Spice-it-up",
  },
  {
    title: "Mathster",
    image: project5,
    description:
      "An Interactive calculator that gives live audio feedback on calculations allows users to type in numbers and calculations. The app will respond with spoken answers once the user inputs their problem (via text).",
    technologies: ["HTML", "CSS", "Javascript"],
    githubLink: "https://github.com/rivan05/Mathster",
  },
];

export const CONTACT = {
  address: "Bangalore",
  phoneNo: "9786314143 ",
  email: "rishieeevasan.com",
};
