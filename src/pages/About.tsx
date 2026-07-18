import { motion } from "framer-motion";
import heroImage from "../assets/images/about.png";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";

const tech = [
  {
    Icon: FaReact,
    color: "#61DAFB",
    x: "-180px",
    y: "-80px",
    delay: 0,
  },
  {
    Icon: FaNodeJs,
    color: "#68A063",
    x: "180px",
    y: "-50px",
    delay: 1,
  },
  {
    Icon: SiJavascript,
    color: "#F7DF1E",
    x: "-180px",
    y: "120px",
    delay: 2,
  },
  {
    Icon: SiTypescript,
    color: "#3178C6",
    x: "180px",
    y: "110px",
    delay: 3,
  },
  {
    Icon: SiTailwindcss,
    color: "#38BDF8",
    x: "0px",
    y: "-180px",
    delay: 4,
  },
];

const stats = [
  {
    number: "15+",
    title: "Projects",
    icon: <FaCode />,
  },
  {
    number: "1+",
    title: "Years Exp.",
    icon: <FaLaptopCode />,
  },
  {
    number: "100%",
    title: "Passion",
    icon: <FaReact />,
  },
];

const About = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816] text-white">

      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 250, 0],
            y: [0, -150, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "linear",
          }}
          className="absolute top-20 left-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]"
        />

        <motion.div
          animate={{
            x: [0, -220, 0],
            y: [0, 120, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 22,
            ease: "linear",
          }}
          className="absolute bottom-10 right-10 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[150px]"
        />

      </div>

      <div className="container relative z-10 mx-auto px-6 py-32">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-5xl md:text-7xl font-black"
        >
          About{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Me
          </span>
        </motion.h1>

        <p className="mx-auto mt-6 max-w-3xl text-center text-gray-400 text-lg">
          Passionate React Developer crafting futuristic, responsive,
          high-performance web applications with modern technologies and clean
          architecture.
        </p>

        <div className="mt-24 grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >

            {/* Floating Icons */}

            {tech.map(({ Icon, color, x, y, delay }, index) => (
              <motion.div
                key={index}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay,
                }}
                className="absolute"
                style={{
                  transform: `translate(${x},${y})`,
                }}
              >
                <Icon
                  size={50}
                  color={color}
                  className="drop-shadow-[0_0_25px_rgba(255,255,255,.4)]"
                />
              </motion.div>
            ))}

            {/* 3D Card */}

            <motion.div
              whileHover={{
                rotateY: 12,
                rotateX: -12,
                scale: 1.05,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className="relative rounded-[40px] border border-cyan-400/20 bg-white/5 backdrop-blur-2xl p-8 shadow-[0_0_80px_rgba(34,211,238,.25)]"
            >

              <img
                src={heroImage}
                className="w-[380px]"
                alt=""
              />

              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-cyan-500/20 px-6 py-2 backdrop-blur-xl">
                React Developer
              </div>

            </motion.div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <h2 className="text-4xl font-bold">
              Building Modern Digital
              <span className="text-cyan-400"> Experiences.</span>
            </h2>

            <p className="mt-8 leading-8 text-gray-400">
              I'm Kapil Goyal, a passionate React Developer focused on creating
              scalable, fast, and visually engaging web applications.
              My expertise includes React, TypeScript, Redux, JavaScript,
              Tailwind CSS, Node.js and modern frontend architecture.
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              I enjoy solving complex problems, building reusable UI
              components, optimizing performance, and continuously learning
              cutting-edge technologies.
            </p>

            {/* Stats */}

            <div className="mt-12 grid grid-cols-3 gap-6">

              {stats.map((item, index) => (

                <motion.div
                  key={index}
                  whileHover={{
                    y: -12,
                    scale: 1.05,
                  }}
                  className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center shadow-[0_0_30px_rgba(0,255,255,.1)]"
                >
                  <div className="text-cyan-400 text-3xl flex justify-center">
                    {item.icon}
                  </div>

                  <h2 className="mt-4 text-3xl font-bold">
                    {item.number}
                  </h2>

                  <p className="mt-2 text-gray-400">
                    {item.title}
                  </p>

                </motion.div>

              ))}

            </div>

            {/* Journey */}

            <div className="mt-16 space-y-8">

              <div className="flex gap-5">

                <div className="h-5 w-5 rounded-full bg-cyan-400 shadow-[0_0_20px_cyan]" />

                <div>

                  <h3 className="font-bold">
                    2025 — React Developer
                  </h3>

                  <p className="text-gray-400">
                    Working on enterprise-level applications using React,
                    Redux, TypeScript and Chakra UI.
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="h-5 w-5 rounded-full bg-blue-500 shadow-[0_0_20px_blue]" />

                <div>

                  <h3 className="font-bold">
                    Full Stack Internship
                  </h3>

                  <p className="text-gray-400">
                    Developed MERN applications with authentication,
                    REST APIs and MongoDB.
                  </p>

                </div>

              </div>

            </div>

            {/* Buttons */}

            <div className="mt-14 flex gap-5 flex-wrap">

              <button className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold hover:scale-105 transition">
                Hire Me
              </button>

              <button className="rounded-full border border-cyan-400 px-8 py-4 text-cyan-400 hover:bg-cyan-500 hover:text-black transition">
                Download CV
              </button>

              <button className="rounded-full border border-white/10 bg-white/5 px-8 py-4 hover:bg-white/10 transition">
                <FaGithub size={22}/>
              </button>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;