import { useState } from "react";
import { Link } from "react-router-dom";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Skills", path: "/skills" },
  { label: "Projects", path: "/projects" },
  { label: "Experience", path: "/experience" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-5">
      <nav className="w-full max-w-6xl rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,.4)]">

        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
          >
            KG
          </Link>

          <ul className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className="rounded-full px-5 py-2 text-gray-300 transition hover:bg-white/10 hover:text-cyan-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            className="hidden lg:block rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white transition hover:scale-105"
          >
            Let's Talk
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? (
              <HiXMark size={32} />
            ) : (
              <HiBars3 size={32} />
            )}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.3 }}
              className="mt-5 rounded-2xl border border-white/10 bg-black/90 p-5 lg:hidden"
            >
              <ul className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.path}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-4 py-3 text-white transition hover:bg-cyan-500/20"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}

                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-3 block rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-center font-semibold text-white"
                >
                  Let's Talk
                </Link>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>
    </header>
  );
};

export default Navbar;
