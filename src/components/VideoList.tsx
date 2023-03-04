import Video from '@/components/Video';
import React from 'react';

type VideoListProps = {
  videoIds: Array<string>
}

export default function VideoList({ videoIds }: VideoListProps) {
  return (
    <>
      {videoIds.map((videoId) => <Video videoId={videoId} />)}
    </>
  );
}
