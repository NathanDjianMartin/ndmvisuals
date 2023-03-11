import React from 'react';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';

export default function App({ Component }: AppProps) {
  return <Component />;
}
