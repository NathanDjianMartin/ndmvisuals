import React from 'react';

type CircleProps = {
  filled?: boolean
}

export default function Circle({ filled = true }: CircleProps) {
  return (
    <div className={`h-4 w-4 rounded-full ${filled ? 'bg-slate-400' : 'border-2 border-gray-300'}`} />
  );
}
