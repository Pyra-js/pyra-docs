import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import SectionHeader from "./SectionHeader";
import TerminalBlock from "./TerminalBlock";

export function FinalCTASection() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="Ignite your next project."
          gradientWord="Ignite"
          subtitle="Three commands. One framework. Full control."
        />

        <motion.div
          className="flex gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link to="/docs">
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-400 via-rose-500 to-violet-600 text-white text-lg px-8 py-6 rounded-lg hover:opacity-90"
            >
              Read the Docs
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
              <span className="relative z-10">Star on GitHub</span>
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

        <motion.div
          className="max-w-xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <TerminalBlock label="Terminal">
            <div className="space-y-2">
              <div>
                <span className="text-violet-400">$</span>{" "}
                <span className="text-white">npm create pyra@latest my-app</span>
              </div>
              <div>
                <span className="text-violet-400">$</span>{" "}
                <span className="text-white">cd my-app && npm install</span>
              </div>
              <div>
                <span className="text-violet-400">$</span>{" "}
                <span className="text-white">npm run dev</span>
              </div>
            </div>
          </TerminalBlock>
        </motion.div>

        <motion.p
          className="text-xs text-gray-500 text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Works with React. More adapters coming.
        </motion.p>
      </div>
    </section>
  );
}
