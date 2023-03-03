import React from 'react';
import Video from './video';

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
