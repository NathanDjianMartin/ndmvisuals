import Video from '@/models/Video';
import React from 'react';

type YoutubeEmbedProps = {
  video: Video
}

export default function YoutubeEmbed({ video }: YoutubeEmbedProps) {
  return (
    <div className="overflow-hidden relative h-0" style={{ paddingBottom: '56.25%' }}>
      <iframe
        className="left-0 top-0 h-full w-full absolute"
        src={`https://www.youtube.com/embed/${video.$id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}