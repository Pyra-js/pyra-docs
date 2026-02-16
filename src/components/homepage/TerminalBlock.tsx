import { Terminal } from "lucide-react";

interface TerminalBlockProps {
  label?: string;
  children: React.ReactNode;
  glow?: boolean;
}

export default function TerminalBlock({ label = "Terminal", children, glow = false }: TerminalBlockProps) {
  return (
    <div className={`relative ${glow ? "group" : ""}`}>
      {glow && (
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-rose-500 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300" />
      )}
      <div className="relative bg-black/90 rounded-lg p-6 border border-gray-800">
        <div className="flex items-center gap-3 mb-4">
          <Terminal className="w-4 h-4 text-amber-400" />
          <span className="text-sm text-gray-500 font-mono">{label}</span>
        </div>
        <div className="font-mono text-sm leading-relaxed text-gray-300">
          {children}
        </div>
      </div>
    </div>
  );
}
