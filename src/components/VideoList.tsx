import VideoCard from '@/components/VideoCard';
import Video from '@/models/Video';
import React from 'react';

type VideoListProps = {
  videos: Array<Video>
}

export default function VideoList({ videos }: VideoListProps) {
  return (
    <>
      {videos.map((video) => <VideoCard key={video.$id} video={video} />)}
    </>
  );
}
