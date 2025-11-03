import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export const QuickStartSection = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get started in <span className="bg-gradient-to-r from-amber-400 via-rose-500 to-violet-600 bg-clip-text text-transparent">seconds</span>
          </h2>
          <p className="text-xl text-gray-400">
            One command to ignite your project
          </p>
        </motion.div>

        <motion.div
          className="relative group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-rose-500 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300" />
          
          <div className="relative bg-black/90 rounded-lg p-8 border border-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="w-5 h-5 text-amber-400" />
              <span className="text-sm text-gray-500 font-mono">Terminal</span>
            </div>
            
            <div className="space-y-3 font-mono">
              <div className="flex items-center gap-3">
                <span className="text-violet-400">$</span>
                <span className="text-gray-300">npm create pyra@latest my-app</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-violet-400">$</span>
                <span className="text-gray-300">cd my-app</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-violet-400">$</span>
                <span className="text-gray-300">npm run dev</span>
              </div>
              <div className="mt-4 text-amber-400 text-sm">
                ⚡ Server running at http://localhost:3000
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-500 text-sm">
            Works with React, Vue, Svelte, and more
          </p>
        </motion.div>
      </div>
    </section>
  );
}
