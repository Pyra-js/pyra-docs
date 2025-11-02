interface StepProps {
  number: number;
  title?: string;
  children: React.ReactNode;
}

export default function Step({ number, title, children }: StepProps) {
  return (
    <div className="flex gap-4 mb-8">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 via-rose-500 to-violet-600 flex items-center justify-center font-bold text-white shadow-lg">
        {number}
      </div>
      <div className="flex-1 pt-1">
        {title && <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>}
        <div className="text-gray-300 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
