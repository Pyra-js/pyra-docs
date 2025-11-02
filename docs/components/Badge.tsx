interface BadgeProps {
  children: React.ReactNode;
  variant?: "beta" | "mvp" | "new" | "deprecated";
}

const badgeStyles = {
  beta: "bg-violet-500/20 text-violet-300 border-violet-500/30",
  mvp: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  new: "bg-rose-500/20 text-rose-300 border-rose-500/30",
  deprecated: "bg-gray-500/20 text-gray-400 border-gray-500/30",
};

export default function Badge({ children, variant = "beta" }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${badgeStyles[variant]}`}>
      {children}
    </span>
  );
}
