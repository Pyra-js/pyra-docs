import { Copy, Check } from "lucide-react";
import { useState } from "react";

interface TerminalProps {
  children: React.ReactNode;
}

export default function Terminal({ children }: TerminalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const code = typeof children === "string" ? children : "";
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-6 rounded-xl overflow-hidden bg-black border border-gray-800 shadow-2xl">
      {/* Terminal header */}
      <div className="px-4 py-2 bg-gray-900 border-b border-gray-800 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-xs text-gray-500 ml-2">Terminal</span>
      </div>

      <div className="relative">
        <button
          onClick={handleCopy}
          className="absolute top-4 right-4 p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white transition-all duration-200 z-10"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>

        <pre className="p-6 overflow-x-auto">
          <code className="text-sm font-mono text-gray-300 leading-relaxed">
            <span className="text-amber-400 mr-2">▲</span>
            {children}
          </code>
        </pre>
      </div>
    </div>
  );
}
