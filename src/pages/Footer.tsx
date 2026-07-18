import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTelegramPlane,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  const socials = [
    {
      icon: <FaGithub />,
      link: "https://github.com/",
    },
    {
      icon: <FaLinkedin />,
      link: "https://linkedin.com/",
    },
    {
      icon: <FaInstagram />,
      link: "https://instagram.com/",
    },
    {
      icon: <FaTelegramPlane />,
      link: "https://t.me/",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#040714] border-t border-cyan-500/20">

      {/* Glow Background */}

      <div className="absolute inset-0">

        <motion.div
          animate={{
            x: [0, 250, 0],
            y: [0, -80, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "linear",
          }}
          className="absolute left-20 top-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -200, 0],
            y: [0, 120, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
          className="absolute right-10 bottom-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]"
        />

      </div>

      {/* Top Border Animation */}

      <motion.div
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "linear",
        }}
        className="absolute top-0 h-[2px] w-60 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
      />

      <div className="relative z-10 container mx-auto px-6 py-16">

        <div className="grid gap-12 lg:grid-cols-3">

          {/* Left */}

          <div>

            <h2 className="text-4xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              KG
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              Passionate React Developer focused on building futuristic,
              responsive and scalable web applications with modern
              technologies.
            </p>

          </div>

          {/* Center */}

          <div>

            <h3 className="text-xl font-bold text-white mb-6">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-4">

              {links.map((item) => (

                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-400 transition duration-300 hover:text-cyan-400 hover:translate-x-2"
                >
                  {item.name}
                </Link>

              ))}

            </div>

          </div>

          {/* Right */}

          <div>

            <h3 className="text-xl font-bold text-white mb-6">
              Connect With Me
            </h3>

            <div className="flex gap-5">

              {socials.map((item, index) => (

                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{
                    scale: 1.2,
                    y: -8,
                  }}
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl text-cyan-400 backdrop-blur-xl transition hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,.4)]"
                >
                  {item.icon}
                </motion.a>

              ))}

            </div>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="mt-10 flex items-center gap-3 rounded-full border border-cyan-400 px-6 py-3 text-cyan-400 transition hover:bg-cyan-500 hover:text-black"
            >
              <FaArrowUp />
              Back to Top
            </button>

          </div>

        </div>

        {/* Divider */}

        <div className="my-12 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row">

          <p className="text-gray-500">
            © {year} Kapil Goyal. All Rights Reserved.
          </p>

          <p className="flex items-center gap-2 text-gray-500">
            Built with
            <FaHeart className="text-red-500 animate-pulse" />
            React • Tailwind CSS • Framer Motion
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;