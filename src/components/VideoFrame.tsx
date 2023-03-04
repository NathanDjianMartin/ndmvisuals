import Video from '@/models/Video';
import React from 'react';
import YouTube from 'react-youtube';

type VideoProps = {
  video: Video,
}

export default function VideoFrame({ video }: VideoProps) {
  return (
    <div className="flex flex-wrap drop-shadow-lg bg-gray-50 rounded-lg p-6">
      <div className="flex-shrink">
        <YouTube
          videoId={video.$id}
        />
      </div>
      <div className="flex-row pt-3 pl-3">
        <h1 className="text-lg">{video.$title}</h1>
        <p className="">{video.$description}</p>
      </div>
    </div>
  );
}
