import { motion } from "framer-motion";
import { Activity, Timer, BarChart3 } from "lucide-react";
import SectionHeader from "./SectionHeader";
import TerminalBlock from "./TerminalBlock";

const pills = [
  {
    icon: <Activity className="w-5 h-5 text-amber-400" />,
    label: "Structured trace on every dev request.",
  },
  {
    icon: <Timer className="w-5 h-5 text-amber-400" />,
    label: "W3C Server-Timing headers in production.",
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-amber-400" />,
    label: "Per-route build report with bundle sizes.",
  },
];

export default function ObservabilitySection() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-transparent to-black/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="See everything."
          gradientWord="everything"
          subtitle="Request tracing in dev. Server-Timing headers in prod. No guessing."
        />

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {pills.map((pill) => (
            <div
              key={pill.label}
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-gray-900/50 border border-gray-800"
            >
              {pill.icon}
              <span className="text-sm text-gray-300">{pill.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <TerminalBlock label="dev server" glow>
            <pre className="text-sm whitespace-pre">
              <span className="text-green-400">GET</span>{"  "}
              <span className="text-white">/</span>
              {"                    "}
              <span className="text-amber-300">200</span>{"  "}
              <span className="text-gray-400">12ms</span>
              {"\n"}
              {"  "}route-match{"    "}
              <span className="text-gray-400">0.3ms</span>
              {"\n"}
              {"  "}middleware{"     "}
              <span className="text-gray-400">0.8ms</span>
              {"\n"}
              {"  "}load{"           "}
              <span className="text-gray-400">4.2ms</span>
              {"\n"}
              {"  "}render{"         "}
              <span className="text-gray-400">6.1ms</span>
              {"\n\n"}
              <span className="text-green-400">GET</span>{"  "}
              <span className="text-white">/dashboard/settings</span>
              {"  "}
              <span className="text-amber-300">200</span>{"  "}
              <span className="text-gray-400">56ms</span>
              {"\n"}
              {"  "}route-match{"    "}
              <span className="text-gray-400">0.5ms</span>
              {"\n"}
              {"  "}middleware{"     "}
              <span className="text-gray-400">2.0ms</span>
              {"\n"}
              {"  "}load{"          "}
              <span className="text-amber-400">43.0ms</span>{" "}
              <span className="text-amber-400">⚠</span>
              {"\n"}
              {"  "}render{"        "}
              <span className="text-gray-400">11.0ms</span>
            </pre>
          </TerminalBlock>
        </motion.div>

        <motion.p
          className="text-sm text-gray-500 text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          In production, trace via X-Pyra-Trace header or config flag. Zero
          overhead when off.
        </motion.p>
      </div>
    </section>
  );
}
