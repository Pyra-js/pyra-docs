import { motion } from "framer-motion";

export default function PyraLogo() {
  return (
    <motion.div
      className="relative w-24 h-24 mx-auto mb-8"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="flameGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <motion.stop
              offset="0%"
              stopColor="#FFB347"
              animate={{ stopColor: ["#FFB347", "#FF5C38", "#9333EA", "#FFB347"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            <motion.stop
              offset="50%"
              stopColor="#FF5C38"
              animate={{ stopColor: ["#FF5C38", "#9333EA", "#FFB347", "#FF5C38"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            <motion.stop
              offset="100%"
              stopColor="#9333EA"
              animate={{ stopColor: ["#9333EA", "#FFB347", "#FF5C38", "#9333EA"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </linearGradient>
        </defs>
        <motion.path
          d="M 50 10 L 85 75 L 50 65 L 15 75 Z"
          fill="url(#flameGradient)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </svg>
    </motion.div>
  );
}
