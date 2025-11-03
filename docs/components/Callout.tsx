import React from 'react';

interface CalloutProps {
  type?: 'note' | 'tip' | 'warning' | 'danger';
  children: React.ReactNode;
}

export default function Callout({ type = 'note', children }: CalloutProps) {
  const styles = {
    note: 'bg-blue-500/10 border-blue-500/30 text-blue-300',
    tip: 'bg-green-500/10 border-green-500/30 text-green-300',
    warning: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-300',
    danger: 'bg-red-500/10 border-red-500/30 text-red-300',
  };

  return (
    <div className={`callout border-l-4 p-4 my-4 rounded ${styles[type]}`}>
      {children}
    </div>
  );
}