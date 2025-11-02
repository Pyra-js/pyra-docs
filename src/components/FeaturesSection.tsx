import { motion } from "framer-motion";
import { Zap, Sparkles, Workflow } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function FeatureCard({ icon, title, description, delay }: FeatureCardProps) {
  return (
    <motion.div
      className="relative group p-8 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 hover:border-transparent transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-400/0 via-rose-500/0 to-violet-600/0 group-hover:from-amber-400/20 group-hover:via-rose-500/20 group-hover:to-violet-600/20 transition-all duration-300 blur-xl" />
      
      {/* Gradient border on hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "linear-gradient(135deg, #FFB347, #FF5C38, #9333EA)",
          padding: "2px",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      <div className="relative z-10">
        <div className="w-14 h-14 mb-6 rounded-lg bg-gradient-to-br from-amber-400 via-rose-500 to-violet-600 flex items-center justify-center">
          {icon}
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

export default function FeaturesSection() {
  const features = [
    {
      icon: <Zap className="w-7 h-7 text-white" />,
      title: "Speed",
      description: "Lightning-fast builds with optimized bundling and instant hot module replacement. Experience development at the speed of thought.",
    },
    {
      icon: <Sparkles className="w-7 h-7 text-white" />,
      title: "Simplicity",
      description: "Zero-config setup with intelligent defaults. Focus on building, not configuring. TypeScript-first with exceptional DX.",
    },
    {
      icon: <Workflow className="w-7 h-7 text-white" />,
      title: "Flow",
      description: "Seamless integration with modern frameworks. Optimized workflows that adapt to your project's needs automatically.",
    },
  ];

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Built for <span className="bg-gradient-to-r from-amber-400 via-rose-500 to-violet-600 bg-clip-text text-transparent">modern development</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to build blazing-fast web applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
