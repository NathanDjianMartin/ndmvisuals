import React from 'react';
import Head from 'next/head';
import VideoList from '@/components/VideoList';

export default function Home() {
  const videoIds = ['I9n3nzZQrS0', 'WXRJ4YWvClY', 'fGyVpUgSSuA', 'jk3dwcwco2c', '49IoiZf7o_M', 'lOyHnCqWLR4'];

  return (
    <>
      <Head>
        <title>ndmvisuals | video production</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">ndmvisuals</h1>
        <VideoList videoIds={videoIds} />
      </main>
    </>
  );
}
