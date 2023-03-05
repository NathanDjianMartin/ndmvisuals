import YoutubeEmbed from '@/components/YoutubeEmbed';
import Video from '@/models/Video';
import React from 'react';

type VideoProps = {
  video: Video,
}

export default function VideoCard({ video }: VideoProps) {
  return (
    <div className="p-4 drop-shadow-lg rounded-xl bg-gradient-to-r from-gray-100 to-slate-100">
      <div className="flex-1">
        <h3 className="text-lg font-bold">{video.$title}</h3>
        <div>
          <YoutubeEmbed video={video} />
        </div>
      </div>
    </div>
  );
}
