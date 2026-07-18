import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";
import { FaUser, FaEnvelope, FaPhone, FaMessage } from "react-icons/fa6";
const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-[#050816] px-6 py-32 text-white"
    >
      {/* Background 3D Lights */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute left-10 top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20 text-center text-6xl font-black"
        >
          Contact{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Me
          </span>
        </motion.h1>

        {/* 3D Card */}

        <motion.div
          initial={{
            opacity: 0,
            rotateX: 40,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            rotateX: 0,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          style={{
            perspective: "1200px",
          }}
          className="mx-auto max-w-5xl"
        >
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-2xl shadow-[0_0_80px_rgba(34,211,238,.2)]">
            <div className="grid gap-10 md:grid-cols-2">
              {/* FORM */}

              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="space-y-6"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="d9db1f32-f304-4c2e-ad7d-f4cdbf888ce6"
                />

                <h2 className="text-3xl font-bold">
                  Get In Touch
                  <span className="text-cyan-400">.</span>
                </h2>

                <div className="grid gap-6 md:grid-cols-2">
                  {/* First Name */}

                  <div className="group relative">
                    <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 transition group-focus-within:text-cyan-400" />

                    <input
                      type="text"
                      name="first_name"
                      required
                      placeholder="First Name"
                      className="peer w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-14 pr-5 text-white placeholder:text-gray-500 outline-none backdrop-blur-xl transition-all duration-300 focus:border-cyan-400 focus:bg-white/10 focus:shadow-[0_0_30px_rgba(34,211,238,.25)]"
                    />
                  </div>

                  {/* Last Name */}

                  <div className="group relative">
                    <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-14 pr-5 text-white placeholder:text-gray-500 outline-none backdrop-blur-xl transition-all focus:border-purple-400 focus:bg-white/10 focus:shadow-[0_0_30px_rgba(168,85,247,.3)]"
                    />
                  </div>
                </div>

                {/* Email */}

                <div className="relative group">
                  <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-cyan-400" />

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email Address"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-14 pr-5 text-white placeholder:text-gray-500 outline-none backdrop-blur-xl transition-all focus:border-cyan-400 focus:shadow-[0_0_30px_rgba(34,211,238,.25)]"
                  />
                </div>

                {/* Phone */}

                <div className="relative group">
                  <FaPhone className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-14 pr-5 text-white placeholder:text-gray-500 outline-none backdrop-blur-xl transition-all focus:border-blue-400 focus:shadow-[0_0_30px_rgba(59,130,246,.3)]"
                  />
                </div>

                {/* Message */}

                <div className="relative group">
                  <FaMessage className="absolute left-5 top-6 text-gray-400" />

                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Write your message..."
                    className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 py-5 pl-14 pr-5 text-white placeholder:text-gray-500 outline-none backdrop-blur-xl transition-all focus:border-purple-400 focus:shadow-[0_0_30px_rgba(168,85,247,.3)]"
                  />
                </div>

                <button
                  type="submit"
                  className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 py-4 font-bold text-white shadow-[0_0_40px_rgba(34,211,238,.4)] transition hover:scale-105"
                >
                  <span className="relative z-10">Send Message 🚀</span>

                  <div className="absolute inset-0 translate-x-[-100%] bg-white/20 transition group-hover:translate-x-0" />
                </button>
              </form>

              {/* RIGHT SIDE */}

              <div className="flex flex-col justify-center">
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="rounded-3xl border border-cyan-400/20 bg-black/30 p-8 shadow-[0_0_50px_rgba(34,211,238,.2)]"
                >
                  <h2 className="text-4xl font-black">
                    Let's Build
                    <br />
                    Something Amazing
                  </h2>

                  <p className="mt-5 text-gray-400">
                    I am open for React development, frontend projects and
                    collaboration. Let's connect and create something impactful.
                  </p>

                  <div className="mt-8 flex gap-5">
                    {[
                      {
                        icon: <FaLinkedin />,
                        link: "https://www.linkedin.com/in/kapil-goyal-8a6336226/",
                      },
                      {
                        icon: <FaGithub />,
                        link: "https://github.com/goyal2506",
                      },
                      {
                        icon: <FaInstagram />,
                        link: "https://instagram.com/goyal_2506",
                      },
                      {
                        icon: <FaTelegram />,
                        link: "https://telegram.org/",
                      },
                    ].map((item, index) => (
                      <motion.a
                        key={index}
                        href={item.link}
                        target="_blank"
                        whileHover={{
                          y: -10,
                          rotate: 10,
                        }}
                        className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl hover:bg-cyan-500 hover:text-black"
                      >
                        {item.icon}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
