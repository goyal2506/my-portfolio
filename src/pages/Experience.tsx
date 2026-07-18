import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
} from "react-icons/si";

const Experience = () => {
const experiences = [
  {
    company: "DTDC Express Limited",
    role: "React Developer",
    period: "Apr 2025 - Present",
    description:
      "Working as a React Developer on enterprise-level logistics applications. Developing scalable and high-performance web applications using React, Redux, TypeScript, Chakra UI, and Microfrontend Architecture. Collaborating with cross-functional teams, integrating REST APIs, optimizing UI performance, and building reusable components for production environments.",
    technologies: [
      "React",
      "TypeScript",
      "Redux",
      "Chakra UI",
      "Microfrontend",
      "REST API",
      "Git",
    ],
  },
  {
    company: "Unified Mentor",
    role: "Full Stack Developer Intern (Remote)",
    period: "Jan 2025 - Feb 2025",
    description:
      "Completed a remote internship focused on Full Stack Web Development. Built responsive web applications and REST APIs while gaining hands-on experience with the MERN ecosystem. Successfully completed online certification courses and live training sessions covering backend and frontend development.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "React",
      "EJS",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
];

  const techIcons = [
    {
      Icon: FaReact,
      top: "10%",
      left: "8%",
      delay: 0,
      color: "#61DAFB",
    },
    {
      Icon: SiJavascript,
      top: "18%",
      right: "8%",
      delay: 1,
      color: "#F7DF1E",
    },
    {
      Icon: FaNodeJs,
      bottom: "20%",
      left: "8%",
      delay: 2,
      color: "#68A063",
    },
    {
      Icon: SiTypescript,
      bottom: "15%",
      right: "10%",
      delay: 3,
      color: "#3178C6",
    },
    {
      Icon: FaGitAlt,
      top: "45%",
      left: "48%",
      delay: 1.5,
      color: "#F1502F",
    },
    {
      Icon: FaHtml5,
      top: "70%",
      right: "45%",
      delay: 2.5,
      color: "#E34F26",
    },
    {
      Icon: FaCss3Alt,
      top: "35%",
      right: "25%",
      delay: 1.5,
      color: "#1572B6",
    },
    {
      Icon: SiRedux,
      bottom: "40%",
      left: "25%",
      delay: 2,
      color: "#764ABC",
    },
    {
      Icon: SiTailwindcss,
      top: "60%",
      left: "65%",
      delay: 3,
      color: "#38BDF8",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816] py-36 text-white">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          animate={{ x: [0, 150, 0], y: [0, -100, 0] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 left-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"
        />

        <motion.div
          animate={{ x: [0, -180, 0], y: [0, 100, 0] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-3xl"
        />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/10"
        />

        {techIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
              bottom: item.bottom,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 20, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: item.delay,
            }}
          >
            <item.Icon
              size={60}
              color={item.color}
              className="opacity-60 drop-shadow-[0_0_20px_rgba(255,255,255,.5)]"
            />
          </motion.div>
        ))}
      </div>

      <div className="container relative mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="mb-20 text-center"
        >
          <p className="text-cyan-400 uppercase tracking-[6px]">
            My Journey
          </p>

          <h2 className="mt-5 text-5xl font-black md:text-7xl">
            Work{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            My professional journey as a React Developer, building modern,
            scalable and high-performance web applications with the latest
            frontend technologies.
          </p>
        </motion.div>

        <div className="relative">

          <div className="absolute left-4 top-0 h-full w-[3px] bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent md:left-1/2 md:-translate-x-1/2"></div>

          {experiences.map((item, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -120 : 120,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: .8 }}
              className={`relative mb-16 flex w-full ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              }`}
            >

              <div className="absolute left-4 top-10 h-6 w-6 rounded-full border-4 border-cyan-500 bg-[#050816] md:left-1/2 md:-translate-x-1/2"></div>

              <div className="ml-14 w-full md:ml-0 md:w-[46%]">

                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  className="rounded-3xl border border-cyan-400/20 bg-white/5 p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(34,211,238,.15)]"
                >

                  <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-sm text-cyan-400">
                    {item.period}
                  </span>

                  <h3 className="mt-5 text-3xl font-bold">
                    {item.role}
                  </h3>

                  <h4 className="mt-2 text-xl text-cyan-300">
                    {item.company}
                  </h4>

                  <p className="mt-6 leading-8 text-gray-400">
                    {item.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </motion.div>

              </div>

            </motion.div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;