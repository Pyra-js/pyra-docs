import React from 'react';

interface CalloutProps {
  type?: 'tip' | 'note' | 'warn' | 'danger';
  children: React.ReactNode;
}

export const Callout: React.FC<CalloutProps> = ({ type = 'note', children }) => {
  const styles = {
    tip: 'border-l-[#10B981] bg-[#10B981]/10',
    note: 'border-l-[#06B6D4] bg-[#06B6D4]/10',
    warn: 'border-l-[#FFB347] bg-[#FFB347]/10',
    danger: 'border-l-[#FF5C38] bg-[#FF5C38]/10',
  };

  const icons = {
    tip: '💡',
    note: 'ℹ️',
    warn: '⚠️',
    danger: '🔥',
  };

  return (
    <div className={`my-4 p-4 border-l-4 rounded-r-lg ${styles[type]}`}>
      <div className="flex gap-3">
        <span className="text-xl">{icons[type]}</span>
        <div className="flex-1 text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
};

interface StepProps {
  number: number;
  children: React.ReactNode;
}

export const Step: React.FC<StepProps> = ({ number, children }) => {
  return (
    <div className="flex gap-4 my-6">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#FFB347] via-[#FF5C38] to-[#9333EA] flex items-center justify-center font-bold text-sm">
        {number}
      </div>
      <div className="flex-1 pt-1">{children}</div>
    </div>
  );
};

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'beta' | 'mvp' | 'new' | 'deprecated';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'beta' }) => {
  const styles = {
    beta: 'bg-[#9333EA]/20 text-[#9333EA] border-[#9333EA]/30',
    mvp: 'bg-[#FFB347]/20 text-[#FFB347] border-[#FFB347]/30',
    new: 'bg-[#10B981]/20 text-[#10B981] border-[#10B981]/30',
    deprecated: 'bg-[#FF5C38]/20 text-[#FF5C38] border-[#FF5C38]/30',
  };

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${styles[variant]}`}>
      {children}
    </span>
  );
};

interface GradientCodeProps {
  children: React.ReactNode;
  language?: string;
}

export const GradientCode: React.FC<GradientCodeProps> = ({ children, language }) => {
  return (
    <div className="relative my-6 group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FFB347] via-[#FF5C38] to-[#9333EA] rounded-lg opacity-30 group-hover:opacity-50 blur transition duration-300"></div>
      <div className="relative bg-[#1A1A20] rounded-lg">
        {language && (
          <div className="px-4 py-2 text-xs text-[#9CA3AF] border-b border-[#2A2A32] font-mono">
            {language}
          </div>
        )}
        <pre className="p-4 overflow-x-auto">
          <code>{children}</code>
        </pre>
      </div>
    </div>
  );
};

interface TerminalProps {
  children: React.ReactNode;
}

export const Terminal: React.FC<TerminalProps> = ({ children }) => {
  return (
    <div className="my-6 bg-[#0E0E12] rounded-lg border border-[#2A2A32] overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2 bg-[#1A1A20] border-b border-[#2A2A32]">
        <div className="w-3 h-3 rounded-full bg-[#FF5C38]"></div>
        <div className="w-3 h-3 rounded-full bg-[#FFB347]"></div>
        <div className="w-3 h-3 rounded-full bg-[#10B981]"></div>
        <span className="ml-2 text-xs text-[#9CA3AF]">Terminal</span>
      </div>
      <div className="p-4 font-mono text-sm">
        <div className="flex items-start gap-2">
          <span className="text-[#FF5C38] select-none">▲</span>
          <div className="flex-1 text-[#E5E5E7]">{children}</div>
        </div>
      </div>
    </div>
  );
};
