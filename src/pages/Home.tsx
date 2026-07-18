import { motion } from "framer-motion";
import heroImage from "../assets/images/hero.png";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import { SiJavascript, SiTailwindcss } from "react-icons/si";
const Home = () => {
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
      top: "20%",
      right: "10%",
      delay: 1,
      color: "#F7DF1E",
    },
    {
      Icon: SiTailwindcss,
      bottom: "18%",
      right: "20%",
      delay: 3,
      color: "#38BDF8",
    },
    {
      Icon: FaNodeJs,
      top: "45%",
      right: "5%",
      delay: 1.5,
      color: "#68A063",
    },
    {
      Icon: FaGitAlt,
      bottom: "25%",
      left: "45%",
      delay: 2.5,
      color: "#F1502F",
    },
    {
      Icon: FaHtml5,
      top: "30%",
      left: "55%",
      delay: 1,
      color: "#E34F26",
    },
    {
      Icon: FaCss3Alt,
      bottom: "12%",
      right: "40%",
      delay: 2,
      color: "#1572B6",
    },
  ];
  const startDate = new Date("2025-04-21");
  const today = new Date();

  let years = today.getFullYear() - startDate.getFullYear();
  let months = today.getMonth() - startDate.getMonth();

  if (today.getDate() < startDate.getDate()) {
    months--;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const experience = years > 0 ? `${years}+ Years` : `${months}+ Months`;

  const experienceText =
    years > 0
      ? `${years} Year${years > 1 ? "s" : ""} ${months} Month${months !== 1 ? "s" : ""}`
      : `${months} Month${months !== 1 ? "s" : ""}`;
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glow 1 */}
        <motion.div
          animate={{ x: [0, 180, 0], y: [0, -100, 0] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"
        />

        {/* Glow 2 */}
        <motion.div
          animate={{ x: [0, -150, 0], y: [0, 120, 0] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-10 right-10 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-3xl"
        />

        {/* Rotating Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/10"
        />

        {/* Floating Tech Icons */}
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
              y: [0, -35, 0],
              x: [0, 20, 0],
              rotate: [0, 20, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut",
            }}
          >
            <item.Icon
              size={65}
              color={item.color}
              className="opacity-60 drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]"
            />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto flex min-h-screen flex-col-reverse items-center justify-between px-6 pt-24 md:flex-row md:items-end md:px-16">
        <div className="absolute inset-0 -z-10 overflow-hidden">
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
                y: [0, -25, 0],
                rotate: [0, 12, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: item.delay,
                ease: "easeInOut",
              }}
            >
              <item.Icon
                size={70}
                color={item.color}
                className="opacity-70 text-5xl drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: -120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mb-20 max-w-xl text-center md:mb-32 md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, x: -50, y: 50 }}
            animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
            transition={{
              opacity: { duration: 1 },
              x: { duration: 1 },
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-4 rounded-2xl border border-cyan-400/20 bg-white/5 px-5 py-3 backdrop-blur-xl shadow-[0_0_30px_rgba(34,211,238,.2)]">
              <div>
                <p className="text-xs uppercase tracking-widest text-cyan-400">
                  Experience
                </p>
                <h3 className="text-2xl font-bold text-white">{experience}</h3>
              </div>

              <div className="h-10 w-px bg-cyan-400/20" />

              <div>
                <p className="text-sm text-gray-300">{experienceText}</p>
                <p className="text-xs text-gray-500">Since 21 Apr 2025</p>
              </div>
            </div>
          </motion.div>
          <p className="text-xl text-gray-400">Hello, I'm</p>

          <h1 className="mt-3 text-5xl font-black leading-tight md:text-7xl">
            Kapil{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Goyal
            </span>
          </h1>

          <h2 className="mt-5 text-3xl font-semibold text-gray-300">
            React Developer
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            I build beautiful, responsive and high-performance web applications
            using React, TypeScript, JavaScript and Tailwind CSS.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5 md:justify-start">
            <button className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold shadow-[0_0_30px_rgba(34,211,238,.5)] transition duration-300 hover:scale-105">
              Hire Me
            </button>

            <button className="rounded-full border border-cyan-400 px-8 py-4 text-cyan-400 transition duration-300 hover:bg-cyan-500 hover:text-black">
              Download CV
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 300,
          }}
          animate={{
            opacity: 1,
            y: [0, -20, 0],
          }}
          transition={{
            opacity: { duration: 1.2 },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="relative self-end"
        >
          <div className="absolute left-1/2 top-1/2 -z-10 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[130px]" />

          <img
            src={heroImage}
            alt="Kapil Goyal"
            className="w-[500px] md:w-[700px] lg:w-[850px] xl:w-[950px] object-contain drop-shadow-[0_0_80px_rgba(34,211,238,.8)]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
