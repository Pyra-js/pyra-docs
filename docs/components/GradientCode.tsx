import { Copy, Check } from "lucide-react";
import { useState } from "react";

interface GradientCodeProps {
  children: React.ReactNode;
  language?: string;
  title?: string;
}

export default function GradientCode({ children, language = "typescript", title }: GradientCodeProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const code = typeof children === "string" ? children : "";
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-6 rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 shadow-2xl">
      {/* Gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 via-rose-500/5 to-violet-600/5 blur-xl pointer-events-none" />
      
      {/* Gradient border effect */}
      <div className="absolute inset-0 rounded-xl opacity-50" style={{
        background: "linear-gradient(135deg, #FFB347 0%, #FF5C38 50%, #9333EA 100%)",
        padding: "1px",
        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
      }} />

      {title && (
        <div className="px-6 py-3 border-b border-gray-800 flex items-center justify-between relative z-10">
          <span className="text-sm text-gray-400">{title}</span>
          <span className="text-xs text-gray-500 uppercase">{language}</span>
        </div>
      )}

      <div className="relative">
        <button
          onClick={handleCopy}
          className="absolute top-4 right-4 p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white transition-all duration-200 z-10"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>

        <pre className="p-6 overflow-x-auto">
          <code className="text-sm font-mono text-gray-300 leading-relaxed">
            {children}
          </code>
        </pre>
      </div>
    </div>
  );
}
