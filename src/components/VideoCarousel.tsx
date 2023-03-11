import VideoCarouselControls from '@/components/VideoCarouselControls';
import YoutubeEmbed from '@/components/YoutubeEmbed';
import Video from '@/models/Video';
import React, { useState } from 'react';

type VideoListProps = {
  videos: Array<Video>
}

export default function VideoCarousel({ videos }: VideoListProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedVideo = videos[selectedIndex];
  const maxIndex = videos.length - 1;

  const onNextVideo = () => {
    setSelectedIndex(selectedIndex === maxIndex ? 0 : selectedIndex + 1);
  };

  const onPreviousVideo = () => {
    setSelectedIndex(selectedIndex === 0 ? maxIndex : selectedIndex - 1);
  };

  return (
    <div className="flex-col items-center justify-center content-center">
      <div className="mb-4">
        <YoutubeEmbed video={selectedVideo} />
      </div>
      <VideoCarouselControls
        onNext={onNextVideo}
        onPrevious={onPreviousVideo}
        dotsCount={videos.length}
        selectedDot={selectedIndex}
      />
    </div>
  );
}
