import React, { PropsWithChildren } from 'react';

type CardProps = PropsWithChildren<{}>

export default function Card({ children }: CardProps) {
  return (
    <div className="p-4 drop-shadow-lg rounded-xl bg-gradient-to-r from-gray-100 to-slate-100">
      {children}
    </div>
  );
}
