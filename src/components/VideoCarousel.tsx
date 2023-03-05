import Card from '@/components/Card';
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
    <Card>
      <div className="flex-col items-center justify-center content-center mb-6">
        <h3 className="text-lg font-bold mb-2">{selectedVideo.$title}</h3>
        <div className="flex-1 max-w-screen-xl">
          <YoutubeEmbed video={selectedVideo} />
        </div>
      </div>
      <VideoCarouselControls
        onNext={onNextVideo}
        onPrevious={onPreviousVideo}
        dotsCount={videos.length}
        selectedDot={selectedIndex}
      />
    </Card>
  );
}
