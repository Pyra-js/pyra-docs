import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  gradientWord: string;
  subtitle: string;
}

export default function SectionHeader({ title, gradientWord, subtitle }: SectionHeaderProps) {
  const parts = title.split(gradientWord);

  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        {parts[0]}
        <span className="bg-gradient-to-r from-amber-400 via-rose-500 to-violet-600 bg-clip-text text-transparent">
          {gradientWord}
        </span>
        {parts[1]}
      </h2>
      <p className="text-xl text-gray-400 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </motion.div>
  );
}
