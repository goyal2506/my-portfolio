import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiChakraui,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiVite,
} from "react-icons/si";

const skills = [
  {
    title: "Frontend",
    items: [
      { name: "React", value: 95, icon: FaReact, color: "#61DAFB" },
      { name: "TypeScript", value: 90, icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", value: 95, icon: SiJavascript, color: "#F7DF1E" },
      { name: "Redux", value: 92, icon: SiRedux, color: "#764ABC" },
      { name: "Tailwind CSS", value: 92, icon: SiTailwindcss, color: "#38BDF8" },
      { name: "Chakra UI", value: 88, icon: SiChakraui, color: "#4FD1C5" },
      { name: "HTML5", value: 98, icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", value: 95, icon: FaCss3Alt, color: "#1572B6" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", value: 90, icon: FaNodeJs, color: "#68A063" },
      { name: "Express.js", value: 88, icon: SiExpress, color: "#ffffff" },
      { name: "MongoDB", value: 86, icon: SiMongodb, color: "#47A248" },
      { name: "REST API", value: 90 },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", value: 90, icon: FaGitAlt, color: "#F1502F" },
      { name: "GitHub", value: 92, icon: FaGithub, color: "#ffffff" },
      { name: "Postman", value: 90, icon: SiPostman, color: "#FF6C37" },
      { name: "Vite", value: 92, icon: SiVite, color: "#646CFF" },
      { name: "VS Code", value: 95 },
    ],
  },
];

const Skills = () => {
  return (
    <section className="min-h-screen bg-[#050816] text-white py-32 relative overflow-hidden">

      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[160px] rounded-full"></div>

      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-cyan-400">
            Technical Skills
          </p>

          <h2 className="text-5xl md:text-7xl font-black mt-5">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-8 text-gray-400 text-lg leading-8">
            Technologies and tools I use to build modern,
            scalable and responsive web applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">

          {skills.map((category) => (

            <motion.div
              key={category.title}
              initial={{ opacity:0, y:70 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:.7 }}
              whileHover={{ y:-10 }}
              className="rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8"
            >

              <h3 className="text-3xl font-bold mb-8 text-cyan-400">
                {category.title}
              </h3>

              <div className="space-y-6">

                {category.items.map((skill) => {

                  const Icon = skill.icon;

                  return (
                    <div key={skill.name}>

                      <div className="flex justify-between items-center mb-2">

                        <div className="flex items-center gap-3">

                          {Icon && (
                            <Icon
                              size={26}
                              color={skill.color}
                            />
                          )}

                          <span>{skill.name}</span>

                        </div>

                        <span className="text-cyan-400">
                          {skill.value}%
                        </span>

                      </div>

                      <div className="h-2 rounded-full bg-white/10">

                        <motion.div
                          initial={{ width:0 }}
                          whileInView={{
                            width:`${skill.value}%`
                          }}
                          transition={{
                            duration:1.2
                          }}
                          className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                        />

                      </div>

                    </div>
                  );

                })}

              </div>

            </motion.div>

          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;