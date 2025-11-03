import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
export { Callout } from '../../../docs/components/DocsComponents';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export function CodeBlock({ code, language = "typescript", title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      className="relative my-6 rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 via-rose-500/5 to-violet-600/5 blur-xl" />
      
      {title && (
        <div className="px-6 py-3 border-b border-gray-800 flex items-center justify-between">
          <span className="text-sm text-gray-400">{title}</span>
          <span className="text-xs text-gray-500 uppercase">{language}</span>
        </div>
      )}
      
      <div className="relative">
        <button
          onClick={handleCopy}
          className="absolute top-4 right-4 p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white transition-all duration-200"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
        
        <pre className="p-6 overflow-x-auto">
          <code className="text-sm font-mono text-gray-300 leading-relaxed">
            {code}
          </code>
        </pre>
      </div>
    </motion.div>
  );
}

interface InlineCodeProps {
  children: React.ReactNode;
}

export function InlineCode({ children }: InlineCodeProps) {
  return (
    <code className="px-2 py-1 rounded bg-gradient-to-r from-amber-400/10 to-rose-500/10 text-amber-300 font-mono text-sm border border-amber-400/20">
      {children}
    </code>
  );
}

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      className="mb-16 scroll-mt-24"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-rose-500 to-violet-600 bg-clip-text text-transparent">
        {title}
      </h2>
      <div className="prose prose-invert max-w-none">
        {children}
      </div>
    </motion.section>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  command?: string;
}

export function FeatureCard({ title, description, command }: FeatureCardProps) {
  return (
    <motion.div
      className="p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 hover:border-violet-600/50 transition-all duration-300"
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-3">{description}</p>
      {command && (
        <code className="block px-4 py-2 rounded-lg bg-black/50 text-amber-300 text-sm font-mono border border-gray-800">
          {command}
        </code>
      )}
    </motion.div>
  );
}