import { AlertCircle, Info, Lightbulb, AlertTriangle } from "lucide-react";

interface CalloutProps {
  type?: "tip" | "note" | "warn" | "danger";
  children: React.ReactNode;
}

const calloutConfig = {
  tip: {
    icon: Lightbulb,
    gradient: "from-amber-400 to-rose-500",
    bg: "bg-amber-400/10",
    border: "border-amber-400/30",
  },
  note: {
    icon: Info,
    gradient: "from-violet-400 to-violet-600",
    bg: "bg-violet-400/10",
    border: "border-violet-400/30",
  },
  warn: {
    icon: AlertTriangle,
    gradient: "from-rose-400 to-rose-600",
    bg: "bg-rose-400/10",
    border: "border-rose-400/30",
  },
  danger: {
    icon: AlertCircle,
    gradient: "from-red-500 to-red-700",
    bg: "bg-red-500/10",
    border: "border-red-500/30",
  },
};

export default function Callout({ type = "note", children }: CalloutProps) {
  const config = calloutConfig[type];
  const Icon = config.icon;

  return (
    <div className={`relative my-6 p-4 rounded-lg ${config.bg} border ${config.border} overflow-hidden`}>
      <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${config.gradient}`} />
      <div className="flex gap-3 pl-3">
        <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 bg-gradient-to-br ${config.gradient} text-transparent`} style={{ WebkitBackgroundClip: "text", backgroundClip: "text" }} />
        <div className="flex-1 text-gray-300 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
