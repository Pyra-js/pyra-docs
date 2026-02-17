import { motion } from "framer-motion";
import PyraLogo from "../PyraLogo";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { Github } from "lucide-react";

const bullets = [
  "Server-rendered by default. Static when you choose.",
  "Every request traced from match to response.",
  "esbuild-powered builds with code-splitting and content hashing.",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center z-10">
        <PyraLogo />

        <motion.h1
          className="text-6xl md:text-9xl font-bold mb-6 italic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            filter:
              "drop-shadow(0 0 6px rgba(244, 63, 94, 0.35)) drop-shadow(0 0 15px rgba(244, 63, 94, 0.2)) drop-shadow(0 0 35px rgba(168, 85, 247, 0.15))",
          }}
        >
          <span
            className="bg-gradient-to-r from-amber-400 via-rose-500 to-violet-600 bg-clip-text text-transparent pl-2"
            style={{
              backgroundSize: "200% 200%",
              animation: "gradient 3s ease infinite",
            }}
          >
            pyra
          </span>
        </motion.h1>

        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="bg-gradient-to-r from-amber-400 via-rose-500 to-violet-600 bg-clip-text text-transparent">
            Fast. Simple. Full-Stack.
          </span>
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          A full-stack TypeScript framework for building interactive web applications.
        </motion.p>

        <motion.ul
          className="text-left max-w-xl mx-auto text-lg text-gray-400 mb-10 space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
        >
          {bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
              <span>{bullet}</span>
            </li>
          ))}
        </motion.ul>

        <motion.div
          className="flex gap-4 justify-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <Link to="/docs">
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-400 via-rose-500 to-violet-600 text-white text-lg px-8 py-6 rounded-lg hover:opacity-90"
            >
              Get Started
            </Button>
          </Link>
          <a
            href="https://github.com/Simpleboi/Pyra"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="relative group bg-transparent text-white text-lg px-8 py-6 rounded-lg overflow-hidden"
              style={{
                border: "2px solid transparent",
                backgroundImage:
                  "linear-gradient(#0E0E12, #0E0E12), linear-gradient(135deg, #FFB347, #FF5C38, #9333EA)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
              }}
            >
              <Github className="w-5 h-5 mr-2" />
              <span className="relative z-10">View on GitHub</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-amber-400 via-rose-500 to-violet-600 opacity-0 group-hover:opacity-20 transition-opacity"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </Button>
          </a>
        </motion.div>

        <motion.p
          className="text-sm text-gray-500 font-mono tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          SSR by default. SSG when you choose.
        </motion.p>
      </div>
    </section>
  );
}
