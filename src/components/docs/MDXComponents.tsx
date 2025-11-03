import React from 'react';
import { Info, AlertTriangle, Lightbulb } from 'lucide-react';

export function CodeBlock({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <pre className={`bg-black/70 border border-gray-800 rounded-lg p-4 md:p-6 overflow-x-auto my-6 ${className || ''}`}>
      <code className="text-sm md:text-base text-gray-300 font-mono">{children}</code>
    </pre>
  );
}

export function Callout({ type = 'info', children }: { type?: 'info' | 'warning' | 'tip'; children: React.ReactNode }) {
  const config = {
    info: {
      style: 'border-blue-500/30 bg-blue-500/5',
      icon: Info,
      iconColor: 'text-blue-400',
    },
    warning: {
      style: 'border-amber-500/30 bg-amber-500/5',
      icon: AlertTriangle,
      iconColor: 'text-amber-400',
    },
    tip: {
      style: 'border-violet-500/30 bg-violet-500/5',
      icon: Lightbulb,
      iconColor: 'text-violet-400',
    },
  };

  const { style, icon: Icon, iconColor } = config[type];

  return (
    <div className={`border-l-4 rounded-r-lg p-4 md:p-5 my-6 flex gap-3 ${style}`}>
      <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${iconColor}`} />
      <div className="flex-1 text-gray-300 text-sm md:text-base leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export function Step({ number, children }: { number: number; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 my-6">
      <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-amber-400 to-violet-600 flex items-center justify-center text-white font-bold text-sm md:text-base shadow-lg">
        {number}
      </div>
      <div className="flex-1 pt-1">{children}</div>
    </div>
  );
}

// Export components object for MDXProvider
export const components = {
  pre: CodeBlock,
  Callout,
  Step,
};