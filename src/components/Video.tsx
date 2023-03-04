import React from 'react';
import YouTube from 'react-youtube';

type VideoProps = {
  videoId: string,
}

export default function Video({ videoId }: VideoProps) {
  return (
    <YouTube
      videoId={videoId}
    />
  );
}
