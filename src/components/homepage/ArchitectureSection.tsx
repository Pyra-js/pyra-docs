import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

const packages = [
  { name: "pyrajs-shared", description: "Types + config loader" },
  { name: "pyrajs-core", description: "Router, pipeline, tracer, builds" },
  { name: "pyrajs-adapter-react", description: "React SSR + hydration" },
  { name: "pyrajs-cli", description: "Commands + scaffolding" },
  { name: "create-pyra", description: "npm create pyra wizard" },
];

export default function ArchitectureSection() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-transparent to-black/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Own the stack."
          gradientWord="stack"
          subtitle="A monorepo with clear boundaries. Core never imports React."
        />

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {packages.map((pkg, index) => (
            <div key={pkg.name} className="flex items-center gap-4">
              <div className="px-6 py-4 rounded-xl bg-gray-900/50 border border-gray-800 text-center min-w-[180px]">
                <p className="text-sm font-mono text-amber-400 mb-1">
                  {pkg.name}
                </p>
                <p className="text-xs text-gray-500">{pkg.description}</p>
              </div>
              {index < packages.length - 1 && (
                <ArrowRight className="w-5 h-5 text-gray-600 hidden md:block flex-shrink-0" />
              )}
            </div>
          ))}
        </motion.div>

        <motion.p
          className="text-gray-400 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Today Pyra ships with React. The adapter boundary is clean enough for
          Svelte, Vue, or Solid — without touching core.
        </motion.p>
      </div>
    </section>
  );
}
