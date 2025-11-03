import { motion } from "framer-motion";
import PyraLogo from "../PyraLogo";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center z-10">
        <PyraLogo />
        
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6 italic lowercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span
            className="bg-gradient-to-r from-amber-400 via-rose-500 to-violet-600 bg-clip-text text-transparent"
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
            Ignite your frontend.
          </span>
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          A blazing-fast TypeScript-first build tool that transforms your development workflow
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Link to="/docs">
            <Button
              size="lg"
              className="relative group bg-transparent text-white text-lg px-8 py-6 rounded-lg overflow-hidden"
              style={{
                border: "2px solid transparent",
                backgroundImage: "linear-gradient(#0E0E12, #0E0E12), linear-gradient(135deg, #FFB347, #FF5C38, #9333EA)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
              }}
            >
              <span className="relative z-10">Get Started</span>
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
          </Link>
        </motion.div>
      </div>
    </section>
  );
}