import { motion } from "framer-motion";
import {
  FolderTree,
  Server,
  Activity,
  Zap,
  TerminalSquare,
  Layers,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  proof: string;
  delay: number;
}

function FeatureCard({ icon, title, description, proof, delay }: FeatureCardProps) {
  return (
    <motion.div
      className="relative group p-8 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 hover:border-transparent transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-400/0 via-rose-500/0 to-violet-600/0 group-hover:from-amber-400/20 group-hover:via-rose-500/20 group-hover:to-violet-600/20 transition-all duration-300 blur-xl" />
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "linear-gradient(135deg, #FFB347, #FF5C38, #9333EA)",
          padding: "2px",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <div className="relative z-10">
        <div className="w-14 h-14 mb-6 rounded-lg bg-gradient-to-br from-amber-400 via-rose-500 to-violet-600 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed mb-4">{description}</p>
        <p className="text-xs font-mono text-amber-400/80">{proof}</p>
      </div>
    </motion.div>
  );
}

const features = [
  {
    icon: <FolderTree className="w-7 h-7 text-white" />,
    title: "File-Based Routing",
    description:
      "Drop a page.tsx in src/routes/, get a route. Dynamic segments, catch-alls, nested layouts.",
    proof: "Trie-based matcher. Static > dynamic > catch-all priority.",
  },
  {
    icon: <Server className="w-7 h-7 text-white" />,
    title: "SSR by Default",
    description:
      "Every page server-renders and fully hydrates. No directives, no annotations.",
    proof: "renderToString + hydrateRoot. Full React 18.",
  },
  {
    icon: <Activity className="w-7 h-7 text-white" />,
    title: "Per-Request Tracing",
    description:
      "See exactly how long each middleware, loader, and render step took.",
    proof: "W3C Server-Timing headers on every response.",
  },
  {
    icon: <Zap className="w-7 h-7 text-white" />,
    title: "esbuild Builds",
    description:
      "Content-hashed assets and automatic code-splitting. No Webpack config to maintain.",
    proof: "Per-route build report with gzip estimates.",
  },
  {
    icon: <TerminalSquare className="w-7 h-7 text-white" />,
    title: "Interactive CLI",
    description:
      "Scaffold a full project in six steps. TypeScript, Tailwind, shadcn, and more.",
    proof: "npm create pyra@latest. Done.",
  },
  {
    icon: <Layers className="w-7 h-7 text-white" />,
    title: "Adapter Boundary",
    description:
      "Core never imports React. The adapter interface keeps the framework portable.",
    proof: "Zero React deps in pyrajs-core.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Built to ship."
          gradientWord="ship"
          subtitle="Six things Pyra handles so you don't have to."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              proof={feature.proof}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
