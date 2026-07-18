import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";
import { FaUser, FaEnvelope, FaPhone, FaMessage } from "react-icons/fa6";

const Contact = () => {
  const socials = [
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
  ];

  return (
    <section
      id="contact"
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-[#050816]
      px-4
      py-20
      text-white
      sm:px-6
      sm:py-28
      lg:py-32
      "
    >
      {/* Background Glow */}

      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="
        absolute
        left-[-100px]
        top-20
        h-72
        w-72
        rounded-full
        bg-cyan-500/20
        blur-[120px]
        sm:h-96
        sm:w-96
        "
      />

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
        }}
        className="
        absolute
        bottom-10
        right-[-100px]
        h-72
        w-72
        rounded-full
        bg-purple-600/20
        blur-[120px]
        sm:h-96
        sm:w-96
        "
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Heading */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
          mb-12
          text-center
          text-4xl
          font-black
          sm:mb-16
          sm:text-5xl
          lg:mb-20
          lg:text-6xl
          "
        >
          Contact{" "}
          <span
            className="
            bg-gradient-to-r
            from-cyan-400
            to-purple-500
            bg-clip-text
            text-transparent
            "
          >
            Me
          </span>
        </motion.h1>

        {/* 3D Wrapper */}

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
        >
          <div
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-5
            backdrop-blur-2xl
            shadow-[0_0_80px_rgba(34,211,238,.2)]
            sm:p-8
            lg:p-10
            "
          >
            <div
              className="
              grid
              gap-8
              lg:grid-cols-2
              lg:gap-10
              "
            >
              {/* FORM */}

              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="space-y-5"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="d9db1f32-f304-4c2e-ad7d-f4cdbf888ce6"
                />

                <h2
                  className="
                  text-2xl
                  font-bold
                  sm:text-3xl
                  "
                >
                  Get In Touch
                  <span className="text-cyan-400">.</span>
                </h2>

                <div
                  className="
                  grid
                  gap-5
                  sm:grid-cols-2
                  "
                >
                  <Input
                    icon={<FaUser />}
                    name="first_name"
                    placeholder="First Name"
                  />

                  <Input
                    icon={<FaUser />}
                    name="last_name"
                    placeholder="Last Name"
                  />
                </div>

                <Input
                  icon={<FaEnvelope />}
                  name="email"
                  type="email"
                  placeholder="Email Address"
                />

                <Input
                  icon={<FaPhone />}
                  name="phone"
                  placeholder="Phone Number"
                />

                <div className="relative group">
                  <FaMessage
                    className="
                    absolute
                    left-5
                    top-5
                    text-gray-400
                    "
                  />

                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Write your message..."
                    className="
                    w-full
                    resize-none
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    py-4
                    pl-12
                    pr-5
                    text-white
                    placeholder:text-gray-500
                    outline-none
                    backdrop-blur-xl
                    transition
                    focus:border-purple-400
                    focus:shadow-[0_0_30px_rgba(168,85,247,.3)]
                    "
                  />
                </div>

                <button
                  type="submit"
                  className="
                  group
                  relative
                  w-full
                  overflow-hidden
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-500
                  via-blue-500
                  to-purple-600
                  py-4
                  font-bold
                  shadow-[0_0_40px_rgba(34,211,238,.4)]
                  transition
                  hover:scale-105
                  "
                >
                  <span className="relative z-10">Send Message 🚀</span>

                  <div
                    className="
                    absolute
                    inset-0
                    translate-x-[-100%]
                    bg-white/20
                    transition
                    group-hover:translate-x-0
                    "
                  />
                </button>
              </form>

              {/* RIGHT CARD */}

              <div
                className="
                flex
                items-center
                "
              >
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="
                  w-full
                  rounded-3xl
                  border
                  border-cyan-400/20
                  bg-black/30
                  p-6
                  shadow-[0_0_50px_rgba(34,211,238,.2)]
                  sm:p-8
                  "
                >
                  <h2
                    className="
                    text-3xl
                    font-black
                    sm:text-4xl
                    "
                  >
                    Let's Build
                    <br />
                    Something Amazing
                  </h2>

                  <p
                    className="
                    mt-5
                    text-base
                    leading-7
                    text-gray-400
                    sm:text-lg
                    "
                  >
                    I am open for React development, frontend projects and
                    collaboration. Let's connect and create something impactful.
                  </p>

                  <div
                    className="
                    mt-8
                    flex
                    flex-wrap
                    gap-4
                    "
                  >
                    {socials.map((item, index) => (
                      <motion.a
                        key={index}
                        href={item.link}
                        target="_blank"
                        whileHover={{
                          y: -10,
                          rotate: 10,
                        }}
                        className="
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-2xl
                          border
                          border-white/10
                          bg-white/5
                          text-xl
                          transition
                          hover:bg-cyan-500
                          hover:text-black
                          sm:h-14
                          sm:w-14
                          sm:text-2xl
                          "
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

const Input = ({
  icon,
  name,
  placeholder,
  type = "text",
}: {
  icon: React.ReactNode;
  name: string;
  placeholder: string;
  type?: string;
}) => {
  return (
    <div className="relative group">
      <div
        className="
absolute
left-5
top-1/2
-translate-y-1/2
text-gray-400
transition
group-focus-within:text-cyan-400
"
      >
        {icon}
      </div>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required
        className="
            w-full
            rounded-2xl
            border
            border-white/10
            bg-white/5
            py-3.5
            pl-12
            pr-5
            text-white
            placeholder:text-gray-500
            outline-none
            backdrop-blur-xl
            transition
            focus:border-cyan-400
            focus:bg-white/10
            focus:shadow-[0_0_30px_rgba(34,211,238,.25)]
            "
      />
    </div>
  );
};

export default Contact;
