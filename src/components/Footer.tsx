import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const internalLinks = [
  { label: "Documentation", href: "/docs" },
];

const externalLinks = [
  { label: "GitHub", href: "https://github.com/Simpleboi/Pyra" },
  { label: "Discord", href: "https://discord.gg/DCszF2VrSm" },
  { label: "Instagram", href: "https://www.instagram.com/nate.jsx/" },
];

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 mt-24">
      {/* Gradient divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #FFB347, #FF5C38, #9333EA, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            className="text-2xl font-bold italic lowercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-amber-400 via-rose-500 to-violet-600 bg-clip-text text-transparent">
              pyra
            </span>
          </motion.div>

          <motion.nav
            className="flex flex-wrap items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {internalLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-gray-400 hover:text-white transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-amber-400 via-rose-500 to-violet-600 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            {externalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-amber-400 via-rose-500 to-violet-600 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </motion.nav>

          <motion.p
            className="text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            &copy; 2026 Pyra.js
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
