import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-6 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-150px] top-[-100px] h-[400px] w-[400px] rounded-full bg-cyan-500/15 blur-[140px]" />
        <div className="absolute bottom-[-150px] right-[-150px] h-[450px] w-[450px] rounded-full bg-purple-600/15 blur-[150px]" />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-xl rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-2xl shadow-[0_0_60px_rgba(34,211,238,0.15)]"
      >
        <motion.h1
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-8xl font-black text-transparent md:text-9xl"
        >
          404
        </motion.h1>

        <h2 className="mt-6 text-3xl font-bold">Oops! Page Not Found</h2>

        <p className="mt-4 text-lg leading-8 text-gray-400">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back to the homepage.
        </p>

        <Link
          to="/"
          className="mt-10 inline-flex items-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-[0_0_30px_rgba(34,211,238,.4)] transition duration-300 hover:scale-105"
        >
          ← Back to Home
        </Link>
      </motion.div>
    </section>
  );
};

export default NotFound;
