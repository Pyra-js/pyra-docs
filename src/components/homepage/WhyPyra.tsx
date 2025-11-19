import { motion } from "framer-motion";
import { Code2, Package, Gauge, Shield } from "lucide-react";

const reasons = [
  {
    icon: <Gauge className="w-8 h-8" />,
    title: "Native Performance",
    description:
      "Written in TypeScript and optimized for performance, Pyra.js compiles your project 10–100× faster than most traditional build tools.",
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "TypeScript Native",
    description:
      "First-class TypeScript support out of the box. No configuration needed, just start coding.",
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: "Smart Bundling",
    description:
      "Intelligent code splitting and tree shaking. Ship only what your users need.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Production Ready",
    description:
      "Battle-tested optimizations and security best practices built in from day one.",
  },
];

export const WhyPyraSection = () => {
  return (
    <section
      id="why-pyra"
      className="relative py-24 px-6 bg-gradient-to-b from-transparent to-black/30"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why{" "}
            <span className="bg-gradient-to-r from-amber-400 via-rose-500 to-violet-600 bg-clip-text text-transparent">
              Pyra.js
            </span>
            ?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The build tool that doesn't get in your way
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="p-8 rounded-xl bg-gray-900/30 border border-gray-800 hover:border-gray-700 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-amber-400/20 via-rose-500/20 to-violet-600/20 flex items-center justify-center text-amber-400">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
