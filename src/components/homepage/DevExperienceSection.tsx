import { motion } from "framer-motion";
import { TerminalSquare, Keyboard, FolderOpen } from "lucide-react";
import SectionHeader from "./SectionHeader";
import TerminalBlock from "./TerminalBlock";

const items = [
  {
    icon: <TerminalSquare className="w-6 h-6 text-amber-400" />,
    title: "CLI Wizard",
    description:
      "Run npm create pyra@latest and answer six questions. Framework, TypeScript, Tailwind, shadcn — configured and ready.",
  },
  {
    icon: <Keyboard className="w-6 h-6 text-amber-400" />,
    title: "Keyboard Shortcuts",
    description:
      "Press r to restart, o to open browser, c to clear, q to quit. Vite-style dev output with request timing.",
  },
  {
    icon: <FolderOpen className="w-6 h-6 text-amber-400" />,
    title: "Clean Scaffolding",
    description:
      "Every project follows the same structure. src/routes/ for pages, pyra.config.ts for settings. No surprises.",
  },
];

export default function DevExperienceSection() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Build without friction."
          gradientWord="friction"
          subtitle="The CLI, the scaffold, the dev loop — designed to stay out of your way."
        />
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <motion.div
            className="md:w-1/2 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {items.map((item, index) => (
              <motion.div
                key={item.title}
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-amber-400/20 via-rose-500/20 to-violet-600/20 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TerminalBlock label="Terminal" glow>
              <pre className="text-sm whitespace-pre">
                <span className="text-violet-400">$</span>{" "}
                <span className="text-white">npm create pyra@latest</span>
                {"\n\n"}
                {"  "}
                <span className="text-amber-400">◆</span> Project name:{" "}
                <span className="text-white">my-app</span>
                {"\n"}
                {"  "}
                <span className="text-amber-400">◆</span> Framework:{"    "}
                <span className="text-white">React</span>
                {"\n"}
                {"  "}
                <span className="text-amber-400">◆</span> TypeScript?{"   "}
                <span className="text-white">Yes</span>
                {"\n"}
                {"  "}
                <span className="text-amber-400">◆</span> Tailwind CSS?{" "}
                <span className="text-white">shadcn</span>
                {"\n"}
                {"  "}
                <span className="text-amber-400">◆</span> Package mgr:{"  "}
                <span className="text-white">pnpm</span>
                {"\n\n"}
                {"  "}
                <span className="text-gray-400">
                  Scaffolding project in ./my-app ...
                </span>
                {"\n"}
                {"  "}
                <span className="text-green-400">Done.</span>
              </pre>
            </TerminalBlock>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
